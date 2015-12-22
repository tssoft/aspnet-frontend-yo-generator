'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var path = require('path');
var _ = require('lodash');
var prompts = require('./prompts.json');
var reactPrompts = require('./reactPrompts.json');

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
        function wasSelected(element, list) {
            return list.indexOf(element) !== -1;
        };
        this.prompt(prompts, function (answers) {
            var features = answers.features;
            var plugins = answers.plugins;
            var concatenatedSources = answers.concatenatedSources;

            this.pkg.appName = answers.appName;
            this.includeTwitterBootStrap = answers.includeTwitterBootStrap;
            this.includeModernizr = answers.includeModernizr;
            this.includeAngular = wasSelected('includeAngular', features);
            this.includeAngular2 = wasSelected('includeAngular2', features);
            this.includeReact = wasSelected('includeReact', features);
            this.includeBackbone = wasSelected('includeBackbone', features);

            this.includeLess = wasSelected('includeLess', plugins);
            this.includeKarma = wasSelected('includeKarma', plugins);
            this.includeJscs = wasSelected('includeJscs', plugins);
            this.includeEslint = wasSelected('includeEslint', plugins);

            this.includeConcatCss = wasSelected('includeConcatCss', concatenatedSources);
            this.includeConcatJs = wasSelected('includeConcatJs', concatenatedSources);
            if (this.includeReact) {
                this.prompt(reactPrompts, function (answers) {
                    var reactPlugins = answers.reactPlugins;
                    if (!wasSelected('includeNoneForReact', reactPlugins)) {
                        this.includeReflux = wasSelected('includeReflux', reactPlugins);
                        this.includeRedux = wasSelected('includeRedux', reactPlugins);
                    }
                    done();
                }.bind(this));
            }
            else {
                done();
            }
        }.bind(this));
    },

    copyMainFiles: function () {
        mkdirp('src');
        mkdirp('test');
        this.copy('_gulpfile.js', 'gulpfile.js');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('gulp/config.js', 'gulp/config.js');
        this.copy('.npmignore', '.gitignore');
        this.copy('gulp/util/handleErrors.js', 'gulp/util/handleErrors.js');
        this.copy('gulp/tasks/default.js', 'gulp/tasks/default.js');
    },

    install: function () {
        this.npmInstall(['require-dir', 'gulp', 'gulp-notify'], { saveDev: true });
        if (this.includeTwitterBootStrap) {
            this.bowerInstall('twitter', { save: true })
        }
        if (this.includeAngular) {
            this.npmInstall(['angular@1.x', 'angular-mocks@1.x'], { save: true })
        }
        if (this.includeAngular2) {
            this.npmInstall(['angular2@x', 'es6-shim@^0.33.3', 'es6-promise', 'reflect-metadata', 'zone.js', 'rxjs'], { saveDev: true })
        }
        if (this.includeReact) {
            this.npmInstall(['react', 'gulp-react', 'react-dom', 'core-js', 'karma-es5-shim', 'jasmine-react'], { saveDev: true })
            this.copy('gulp/tasks/react.js', 'gulp/tasks/react.js');
            if (this.includeReflux) {
                this.npmInstall('reflux', { saveDev: true })
            }
            if (this.includeRedux) {
                this.npmInstall('redux', { saveDev: true })
            }
        }
        if (this.includeBackbone) {
            this.bowerInstall('backbone', { save: true })
        }
        if (this.includeModernizr) {
            this.npmInstall('gulp-modernizr', { saveDev: true })
            this.copy('gulp/tasks/modernizr.js', 'gulp/tasks/modernizr.js');
        }
        if (this.includeConcatCss) {
            this.npmInstall('gulp-concat-css', { saveDev: true })
        }
        if (this.includeConcatJs) {
            this.npmInstall('gulp-concat', { saveDev: true })
        }
        if (this.includeLess) {
            this.copy('gulp/tasks/less.js', 'gulp/tasks/less.js');
            this.npmInstall(['gulp-autoprefixer', 'gulp-sourcemaps', 'gulp-minify-css', 'gulp-less'], { saveDev: true });
        }
        if (this.includeKarma) {
            this.copy('gulp/tasks/karma.js', 'gulp/tasks/karma.js');
            this.copy('_karma.conf.js', 'karma.conf.js');
            this.npmInstall(['karma', 'karma-jasmine', 'jasmine-core', 'phantomjs', 'karma-phantomjs-launcher'], { saveDev: true });
        }
        if (this.includeJscs) {
            this.copy('gulp/tasks/jscs.js', 'gulp/tasks/jscs.js');
            this.copy('_.jscsrc', '.jscsrc');
            this.npmInstall('gulp-jscs', { saveDev: true });
        }
        if (this.includeEslint) {
            this.copy('gulp/tasks/lint.js', 'gulp/tasks/lint.js');
            this.copy('_eslint.config.json', 'eslint.config.json');
            this.npmInstall('gulp-eslint', { saveDev: true });
        }
        if (this.includeEslint && this.includeJscs) {
            this.copy('gulp/tasks/check.js', 'gulp/tasks/check.js');
        }
    }
});
