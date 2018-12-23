const fs = require('fs');
const replace = require('replace-in-file');
const changeCase = require('change-case');

module.exports = class EasyApiGenerator {
    constructor(config) {
        this.templatePath = config.templatePath;
        this.type = config.type;
        this.group = config.group;
        this.replaceToken = config.replaceToken;
        this.name = config.name;
    }

    generate() {
        const name = changeCase.upperCaseFirst(changeCase.camel(this.name));
        const fileName = changeCase.lowerCase(changeCase.paramCase(this.name));

        /** COPY/RENAME FILE */
        const file = fs.createReadStream(this.templatePath).pipe(fs.createWriteStream(`app/${this.group}/${fileName}.${this.type}.ts`));
        const filePath = file.path;

        const fileOptions = {
            files: filePath,
            from: `%${this.replaceToken}%`,
            to: `${name}${changeCase.upperCaseFirst(this.type)}`
        };

        try {
            replace(fileOptions);
        }
        catch (error) {
            console.error('Error occurred:', error);
        }
    }
}
