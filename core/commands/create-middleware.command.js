const EasyApiGenerator = require(`${appRoot}/core/generators/easy-api.generator`);
const optionDefinitions = require('./options.command');
const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

module.exports = new EasyApiGenerator({
    templatePath: `${appRoot}/core/file_templates/middleware.template`,
    type: 'middleware',
    group: 'middleware',
    replaceToken: 'MIDDLEWARE_NAME',
    name: options.generate.split('middleware=')[1]
});