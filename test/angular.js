'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('angular 1.x', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                features: ['Angular 1.x'],
                plugins: ['Karma'],
                concatenatedSources: [],
                reactPlugins: []
            })
            .on('end', done);
    });

    it('adds the file reference to Karma', function () {
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), 'angular');
    });
});
