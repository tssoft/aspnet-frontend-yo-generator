'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var path = require('path');
var _ = require('lodash');
var prompts = require('./prompts.js').prompts;

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
            var framework = answers.framework;
            var plugins = answers.plugins;

            this.pkg.appName = answers.appName;
            this.includeTwitterBootStrap = answers.includeTwitterBootStrap;
            this.includeAngular = framework === 'Angular 1.x';
            this.includeAngular2 = framework === 'Angular 2.x';
            this.includeReact = framework === 'React';
            this.includeBackbone = framework === 'Backbone';

            if (this.includeReact) {
                var reactPlugin = answers.reactPlugin;
                if (reactPlugin !== 'Not any of them') {
                    this.includeReflux = reactPlugin === 'Reflux';
                    this.includeRedux = reactPlugin === 'Redux';
                }
            }
            done();
        }.bind(this));
    },

    copyMainFiles: function () {
        mkdirp('src');
        mkdirp('test');
        mkdirp('containers');
        mkdirp('components');
        this.copy('_gulpfile.js', 'gulpfile.js');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('gulp/config.js', 'gulp/config.js');
        this.copy('.npmignore', '.gitignore');
        this.copy('gulp/util/handleErrors.js', 'gulp/util/handleErrors.js');
        this.copy('gulp/tasks/default.js', 'gulp/tasks/default.js');
        this.copy('gulp/tasks/less.js', 'gulp/tasks/less.js');
        this.copy('gulp/tasks/karma.js', 'gulp/tasks/karma.js');
        this.copy('_karma.conf.js', 'karma.conf.js');
        this.copy('gulp/tasks/jscs.js', 'gulp/tasks/jscs.js');
        this.copy('_.jscsrc', '.jscsrc');
        this.copy('gulp/tasks/lint.js', 'gulp/tasks/lint.js');
        this.copy('_eslint.config.json', 'eslint.config.json');
        this.copy('gulp/tasks/babel.js', 'gulp/tasks/babel.js');
        this.copy('gulp/tasks/check.js', 'gulp/tasks/check.js');
    },

    install: function () {
        this.npmInstall(['require-dir', 'gulp', 'gulp-notify'], { saveDev: true });
        if (this.includeTwitterBootStrap) {
            this.bowerInstall('twitter', { save: true })
        }
        if (this.includeAngular) {
            this.npmInstall(['angular@1.x', 'angular-mocks@1.x'], { save: true })
            this.copy('angular/app.js', 'src/app.js');
            this.copy('angular/app.config.js', 'src/app.config.js');
        }
        if (this.includeAngular2) {
            this.npmInstall(['angular2@x', 'es6-shim@^0.33.3', 'es6-promise', 'reflect-metadata', 'zone.js', 'rxjs'], { saveDev: true })
        }
        if (this.includeReact) {
            this.npmInstall(['react', 'gulp-react', 'react-dom', 'core-js', 'karma-es5-shim', 'jasmine-react', 'babel-preset-react'], { saveDev: true })
            if (this.includeReflux) {
                this.npmInstall('reflux', { saveDev: true })
            }
            if (this.includeRedux) {
                this.npmInstall(['redux', 'redux-logger', 'redux-thunk'], { save: true })
            }
        }
        if (this.includeBackbone) {
            this.bowerInstall('backbone', { save: true })
        }
        this.npmInstall(['gulp-babel', 'babel-preset-es2015'], { saveDev: true })
        this.npmInstall(['gulp-concat-css', 'gulp-concat'], { saveDev: true })
        this.npmInstall(['gulp-autoprefixer', 'gulp-sourcemaps', 'gulp-minify-css', 'gulp-less'], { saveDev: true });
        this.npmInstall(['karma', 'karma-jasmine', 'jasmine-core', 'phantomjs', 'karma-phantomjs-launcher'], { saveDev: true });
        this.npmInstall('gulp-jscs', { saveDev: true });
        this.npmInstall('gulp-eslint', { saveDev: true });
    }
});
