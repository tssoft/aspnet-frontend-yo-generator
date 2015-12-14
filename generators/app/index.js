'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var path = require('path');
var _ = require('lodash');
var prompts = require('./prompts.json');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();
        this.pkg = {
            appVersion: '1.0.0'
        };
        this.log(yosay(
            'Welcome to the breathtaking ' + chalk.red('tssoft-aspnet-frontend') + ' generator!'));
        var index = _.findIndex(prompts, { name: 'appName' });
        prompts[index].default = process.cwd().split(path.sep).pop();
        this.prompt(prompts, function (answers) {
            var features = answers.features;
            var plugins = answers.plugins;
            var concatenatedSources = answers.concatenatedSources;

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

            this.includeConcatCss = wasSelected('includeConcatCss', concatenatedSources);
            this.includeConcatJs = wasSelected('includeConcatJs', concatenatedSources);
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
        if (this.includeTwitterBootStrap) {
            this.bowerInstall(['twitter'], { 'save': true })
        }
        if (this.includeAngular) {
            this.bowerInstall(['angular'], { 'save': true })
        }
        if (this.includeReact) {
            this.bowerInstall(['react'], { 'save': true })
            this.npmInstall(['gulp-react'], { 'saveDev': true });
            this.copy("gulp/tasks/react.js", "gulp/tasks/react.js");
        }
        if (this.includeBackbone) {
            this.bowerInstall(['backbone'], { 'save': true })
        }
        if (this.includeModernizr) {
            this.npmInstall(['gulp-modernizr'], { 'saveDev': true })
            this.copy("gulp/tasks/modernizr.js", "gulp/tasks/modernizr.js");
        }
        if (this.includeConcatCss) {
            this.npmInstall(['gulp-concat-css'], { 'saveDev': true })
        }
        if (this.includeConcatJs) {
            this.npmInstall(['gulp-concat'], { 'saveDev': true })
        }
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
