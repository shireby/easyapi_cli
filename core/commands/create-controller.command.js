const EasyApiGenerator = require(`${appRoot}/core/generators/easy-api.generator`);

const optionDefinitions = require('./options.command');
const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

module.exports = new EasyApiGenerator({
    templatePath: `${appRoot}/core/file_templates/controller.template`,
    type: 'controller',
    group: 'controllers',
    replaceToken: 'CONTROLLER_NAME',
    name: options.generate.split('controller=')[1]
});