'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
//var config = requre('config');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.log(yosay(
      'Welcome to the breathtaking ' + chalk.red('tssoft-aspnet-frontend') + ' generator!'));
    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      'default': true
    }];
    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  copyMainFiles: function () {
      this.mkdir("assets/scripts/app");
      this.copy("_gulpfile.js", "gulpfile.js");
      this.copy("_eslint.config.json", "eslint.config.json");
      this.copy("_package.json", "package.json");
      this.copy("_.jscsrc", ".jscsrc");
      this.copy("_config.js", "gulp/config.js");
      this.copy("_karma.conf.js", "karma.conf.js");
      this.copy("gulp/util/handleErrors.js", "gulp/util/handleErrors.js");
      this.copy("gulp/tasks/default.js", "gulp/tasks/default.js");
      this.copy("gulp/tasks/jscs.js", "gulp/tasks/jscs.js");
      this.copy("gulp/tasks/karma.js", "gulp/tasks/karma.js");
      this.copy("gulp/tasks/less.js", "gulp/tasks/less.js");
      this.copy("gulp/tasks/lint.js", "gulp/tasks/lint.js");
  },

  install: function () {
      this.npmInstall(['gulp'], { 'saveDev': true });
      this.npmInstall(['less'], { 'saveDev': true });
      this.npmInstall(['karma'], { 'saveDev': true });
      this.npmInstall(['jscs'], { 'saveDev': true });
      this.npmInstall(['eslint'], { 'saveDev': true });
  }
});
