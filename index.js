#!/usr/bin/env node

const fs = require('fs');
const _ = require('lodash');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const shell = require('shelljs');
const info = require('./core/commands/info.command');
const EventEmitter = require('events');
const colors = require('colors');

/**  SET CLI USAGE */
const cliUsage = commandLineUsage(info);

/** AVAILABLE CLI OPTIONS */
const optionDefinitions = require('./core/commands/options.command');

/** SHOULD BE CALLED AT THE END */
const done = () => {
    console.log('Done 👍');
};

const eventEmitter = new EventEmitter();

eventEmitter.on('done', () => {
    done();
});

/** SET EMPTY OPTIONS OBJECT */
let options = {};

/** TRY TO PARSE OPTIONS */
try {
    options = commandLineArgs(optionDefinitions);
} catch (err) {
    console.log(cliUsage);
    return;
}

if (_.isEmpty(options)) {
    console.log(cliUsage);
    return;
}

/** START DEVELOPMENT ENVIRONMENT  */
if (options['start'] !== undefined) {
    shell.exec('yarn dev:watch');
    return;
}

/** SETUP DEVELOPMENT ENVIRONMENT FILE */
if (options['env-setup'] !== undefined) {
    if (!fs.existsSync('.env')) {
        shell.exec('cp .env.example .env');
        console.log('All done your .env file has been created 👍'.green);
    } else {
        console.log('Looks like your .env already exists 👍');
    }
    return;
}

/** CREATE NEW PROJECT */
if (options.new !== undefined) {
    const createNewProject = require('./core/commands/new-project.command');
    createNewProject(() =>{ 
        eventEmitter.emit('done');
    });
    return;
}

/** CREATE CONTROLLER IF OPTION IS SET */
if (options.generate !== undefined && options.generate.indexOf('controller=') > -1) {
    const controllerGenerator = require('./core/commands/create-controller.command');
    controllerGenerator.generate();
    eventEmitter.emit('done');
}

/** CREATE MIDDLEWARE IF OPTION IS SET */
if (options.generate !== undefined && options.generate.indexOf('middleware=') > -1) {
    const middleWareGenerator = require('./core/commands/create-middleware.command');
    middleWareGenerator.generate();
    eventEmitter.emit('done');
}



