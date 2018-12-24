const prompt = require('prompt');
const colors = require('colors');
const fs = require('fs');
const shell = require('shelljs');

const tag = 'v1.0.0-beta';
const repo = 'https://github.com/shireby/easyapi.git';

module.exports = (callback) => {
    prompt.start();

    if (fs.existsSync('./easyapi.json')) {
        console.log('It looks like you already have an Easy API project in this directory'.red);
        return;
    }

    let dirArray = shell.pwd().stdout.split('/');

    prompt.get([{
        name: 'project_name',
        description: 'Your project name',
        type: 'string',
        required: true,
        default: dirArray[dirArray.length - 1]
    },
    {
        name: 'version',
        description: 'Your project version',
        type: 'string',
        required: false,
        default: "1.0.0"
    }], function (err, result) {
        if (err) { return; }
        
        console.log('\n Createing project'.bgGreen.white + '\n\n');
        console.log(`Your new Project ${result.project_name.green} has been created \n`);
        
        const json = JSON.stringify({
            "name": result.project_name,
            "version": result.version
        }, null, 4);
        
        console.log(`Building project`.green);

        shell.exec(`git clone --branch ${tag} ${repo} . &> /dev/null`)
        
        /** Remove .git */
        shell.exec('rm -rf .git');
        
        fs.writeFile('easyapi.json', json, 'utf8', () => { 
            console.log(`easyapi.json file create`.green);
            callback();
        });      
    });
};