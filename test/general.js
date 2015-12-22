'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');

describe('generator-tssoft-aspnet-frontend', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                appName: 'reactTestApplication',
                includeModernizr: true,
                features: ['includeReact'],
                plugins: ['includeLess', 'includeKarma', 'includeJscs', 'includeEslint'],
                concatenatedSources: ['includeConcatCss', 'includeConcatJss'],
                reactPlugins: []
            })
            .on('end', done);
    });

    it('can be started when module exists only', function () {
        var app = require('../generators/app');
    });

    it('creates all required files', function () {
        var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');
        assert.file([
            path.join(rootTmp, '.gitignore'),
            path.join(rootTmp, '.jscsrc'),
            path.join(rootTmp, 'bower.json'),
            path.join(rootTmp, 'eslint.config.json'),
            path.join(rootTmp, 'gulpfile.js'),
            path.join(rootTmp, 'package.json'),
            path.join(rootTmp, 'gulp/util/handleErrors.js'),
            path.join(rootTmp, 'gulp/config.js'),
            path.join(rootTmp, 'karma.conf.js'),
            path.join(gulpTasksPath, 'check.js'),
            path.join(gulpTasksPath, 'default.js'),
            path.join(gulpTasksPath, 'jscs.js'),
            path.join(gulpTasksPath, 'lint.js'),
            path.join(gulpTasksPath, 'karma.js'),
            path.join(gulpTasksPath, 'less.js'),
            path.join(gulpTasksPath, 'modernizr.js'),
            path.join(gulpTasksPath, 'react.js'),
        ]);
    });
});
