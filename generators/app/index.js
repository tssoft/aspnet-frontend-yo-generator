'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
//var config = requre('config');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();
        this.log(yosay(
          'Welcome to the breathtaking ' + chalk.red('tssoft-aspnet-frontend') + ' generator!'));
        var prompts = [
            {
                type: 'confirm',
                name: 'includeTwitterBootStrap',
                message: 'Do you want to install Twitter Bootstrap?',
                'default': false
            },
            {
                type: 'checkbox',
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
            }
        ];
        this.prompt(prompts, function (answers) {
            var features = answers.features;
            function hasFeature(feature) {
                return features && features.indexOf(feature) !== -1;
            };
            this.includeTwitterBootStrap = answers.includeTwitterBootStrap;
            this.includeAngular = hasFeature('includeAngular');
            this.includeReact = hasFeature('includeReact');
            this.includeBackbone = hasFeature('includeBackbone');
            this.includeModernizr = hasFeature('includeModernizr');

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
        this.copy("_eslint.config.json", "eslint.config.json");
        this.copy("_package.json", "package.json");
        this.copy("_.jscsrc", ".jscsrc");
        this.copy("_config.js", "gulp/config.js");
        this.copy("_karma.conf.js", "karma.conf.js");
        this.copy(".gitignore", ".gitignore");
        this.copy("gulp/util/handleErrors.js", "gulp/util/handleErrors.js");
        this.copy("gulp/tasks/default.js", "gulp/tasks/default.js");
        this.copy("gulp/tasks/jscs.js", "gulp/tasks/jscs.js");
        this.copy("gulp/tasks/karma.js", "gulp/tasks/karma.js");
        this.copy("gulp/tasks/less.js", "gulp/tasks/less.js");
        this.copy("gulp/tasks/lint.js", "gulp/tasks/lint.js");
    },

    install: function () {
        this.npmInstall();
        this.npmInstall(['gulp'], { 'saveDev': true });
        this.npmInstall(['less'], { 'saveDev': true });
        this.npmInstall(['karma'], { 'saveDev': true });
        this.npmInstall(['jscs'], { 'saveDev': true });
        this.npmInstall(['eslint'], { 'saveDev': true });
    }
});
