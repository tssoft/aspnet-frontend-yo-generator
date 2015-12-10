'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();
        this.pkg = {
            appName: '',
            appVersion: "1.0.0"
        };
        this.log(yosay(
            'Welcome to the breathtaking ' + chalk.red('tssoft-aspnet-frontend') + ' generator!'));
        var prompts = [
            {
                type: 'input',
                name: 'appName',
                message: 'Name of the application: ',
                'default': process.cwd().split(path.sep).pop()
            },
            {
                type: 'confirm',
                name: 'includeTwitterBootStrap',
                message: 'Do you want to install Twitter Bootstrap?',
                'default': false
            },
            {
                type: 'confirm',
                name: 'includeModernizr',
                message: 'Do you want to install Modernizr?',
                'default': false
            },
            {
                type: 'list',
                name: 'features',
                message: 'What more framework would you install?',
                choices: [
                    {
                        name: 'Angular',
                        value: 'includeAngular',
                        checked: false
                    }, {
                        name: 'React',
                        value: 'includeReact',
                        checked: false
                    }, {
                        name: 'Backbone',
                        value: 'includeBackbone',
                        checked: false
                    }
                ]
            },
            {
                type: 'checkbox',
                name: 'plugins',
                message: 'What plugin would you include for Gulp?',
                choices: [
                    {
                        name: 'LESS',
                        value: 'includeLess',
                        checked: true
                    }, {
                        name: 'Karma',
                        value: 'includeKarma',
                        checked: true
                    }, {
                        name: 'JSCS',
                        value: 'includeJscs',
                        checked: true
                    },
                    {
                        name: 'ESLint',
                        value: 'includeEslint',
                        checked: true
                    }
                ]
            }
        ];
        this.prompt(prompts, function (answers) {
            var features = answers.features;
            var plugins = answers.plugins;

            function wasSelected(element, list) {
                return features && list.indexOf(element) !== -1;
            };

            this.pkg.appName = answers.appName;
            this.includeTwitterBootStrap = answers.includeTwitterBootStrap;
            this.includeModernizr = answers.includeModernizr;
            this.includeAngular = wasSelected('includeAngular', features);
            this.includeReact = wasSelected('includeReact', features);
            this.includeBackbone = wasSelected('includeBackbone', features);
            
            this.includeLess = wasSelected('includeLess', plugins);
            this.includeKarma = wasSelected('includeKarma', plugins);
            this.includeJscs = wasSelected('includeJscs', plugins);
            this.includeEslint = wasSelected('includeEslint', plugins);

            if (this.includeTwitterBootStrap) {
                this.bowerInstall(['twitter'], { 'save': true })
            }
            if (this.includeAngular) {
                this.bowerInstall(['angular'], { 'save': true })
            }
            if (this.includeReact) {
                this.bowerInstall(['react'], { 'save': true })
                this.npmInstall(['react'], { 'saveDev': true });
                this.copy("gulp/tasks/react.js", "gulp/tasks/react.js");
            }
            if (this.includeBackbone) {
                this.bowerInstall(['backbone'], { 'save': true })
            }
            if (this.includeModernizr) {
                this.npmInstall(['gulp-modernizr'], { 'save': true })
                this.copy("gulp/tasks/modernizr.js", "gulp/tasks/modernizr.js");
            }
            done();
        }.bind(this));
    },

    copyMainFiles: function () {
        mkdirp("src");
        mkdirp("test");
        this.copy("_gulpfile.js", "gulpfile.js");
        this.copy("_package.json", "package.json");
        this.copy("gulp/config.js", "gulp/config.js");
        this.copy(".gitignore", ".gitignore");
        this.copy("gulp/util/handleErrors.js", "gulp/util/handleErrors.js");
        this.copy("gulp/tasks/default.js", "gulp/tasks/default.js");
    },

    install: function () {
        this.npmInstall();
        this.npmInstall(['gulp'], { 'saveDev': true });
        if (this.includeLess) {
            this.copy("gulp/tasks/less.js", "gulp/tasks/less.js");
            this.npmInstall(['less'], { 'saveDev': true });
        }
        if (this.includeKarma) {
            this.copy("gulp/tasks/karma.js", "gulp/tasks/karma.js");
            this.copy("_karma.conf.js", "karma.conf.js");
            this.npmInstall(['karma'], { 'saveDev': true });
            this.npmInstall(['jasmine-core'], { 'saveDev': true });
            this.npmInstall(['phantomjs'], { 'saveDev': true });
        }
        if (this.includeJscs) {
            this.copy("gulp/tasks/jscs.js", "gulp/tasks/jscs.js");
            this.copy("_.jscsrc", ".jscsrc");
            this.npmInstall(['jscs'], { 'saveDev': true });
        }
        if (this.includeEslint) {
            this.copy("gulp/tasks/lint.js", "gulp/tasks/lint.js");
            this.copy("_eslint.config.json", "eslint.config.json");
            this.npmInstall(['eslint'], { 'saveDev': true });
        }
    }
});
