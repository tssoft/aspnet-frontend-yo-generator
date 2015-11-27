'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
//var config = requre('config');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();
        this.pkg = {
            appName: '',
            version: "1.0.0"
        };
        this.log(yosay(
          'Welcome to the breathtaking ' + chalk.red('tssoft-aspnet-frontend') + ' generator!'));
        var prompts = [
            {
                type: 'input',
                name: 'appName',
                message: 'Name of the application: ',
            },
            {
                type: 'confirm',
                name: 'includeTwitterBootStrap',
                message: 'Do you want to install Twitter Bootstrap?',
                'default': false
            },
            {
                type: 'list',
                name: 'features',
                message: 'What more framework would you install?',
                choices: [{
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
                },
                {
                    name: 'Modernizr',
                    value: 'includeModernizr',
                    checked: false
                }]
            },
            {
                type: 'checkbox',
                name: 'plugins',
                message: 'What plugin would you include for Gulp?',
                choices: [{
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
                }]
            }
        ];
        this.prompt(prompts, function (answers) {
            var features = answers.features;
            function hasFeature(feature) {
                return features && features.indexOf(feature) !== -1;
            };
            this.pkg.appName = answers.appName;
            this.includeTwitterBootStrap = answers.includeTwitterBootStrap;
            this.includeAngular = hasFeature('includeAngular');
            this.includeReact = hasFeature('includeReact');
            this.includeBackbone = hasFeature('includeBackbone');
            this.includeModernizr = hasFeature('includeModernizr');

            this.includeLess = hasFeature('includeLess');
            this.includeKarma = hasFeature('includeKarma');
            this.includeJscs = hasFeature('includeJscs');
            this.includeEslint = hasFeature('includeEslint');

            if (this.includeTwitterBootStrap) {
                this.bowerInstall(['twitter'], { 'save': true })
            }
            if (this.includeAngular) {
                this.bowerInstall(['angular'], { 'save': true })
            }
            if (this.includeReact) {
                this.bowerInstall(['react'], { 'save': true })
            }
            if (this.includeBackbone) {
                this.bowerInstall(['backbone'], { 'save': true })
            }
            if (this.includeModernizr) {
                this.bowerInstall(['modernizr'], { 'save': true })
            }
            done();
        }.bind(this));
    },

    copyMainFiles: function () {
        mkdirp("src/js");
        mkdirp("src/less");
        mkdirp("tests");
        this.copy("_gulpfile.js", "gulpfile.js");
        this.copy("_package.json", "package.json");
        this.copy("_config.js", "gulp/config.js");
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
