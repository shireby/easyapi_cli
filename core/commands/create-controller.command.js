const EasyApiGenerator = require('../generators/easy-api.generator');

module.exports = new EasyApiGenerator({
    templatePath: 'core/file_templates/controller.template',
    type: 'controller',
    group: 'controllers',
    replaceToken: 'CONTROLLER_NAME',
    name: options.generate.split('controller=')[1]
});