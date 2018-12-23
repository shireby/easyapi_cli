const EasyApiGenerator = require('/../generators/easy-api.generator');

module.exports = new EasyApiGenerator({
    templatePath: 'core/file_templates/middleware.template',
    type: 'middleware',
    group: 'middleware',
    replaceToken: 'MIDDLEWARE_NAME',
    name: options.generate.split('middleware=')[1]
});