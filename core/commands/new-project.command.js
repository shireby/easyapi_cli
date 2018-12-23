const prompt = require('prompt');
const colors = require('colors');
const fs = require('fs');
const shell = require('shelljs');


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
        console.log(test);
        
        const json = JSON.stringify({
            "name": result.project_name,
            "version": result.version
        }, null, 4);

        // fs.writeFile('easyapi.json', json, 'utf8', () => { 
        //     console.log(`easyapi.json file create`.green);
        // });

        callback();
    });
};