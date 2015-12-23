'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('react', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                features: ['React'],
                plugins: ['Karma'],
                concatenatedSources: [],
                reactPlugins: []
            })
            .on('end', done);
    });

    it('adds the framework reference to Karma', function () {
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), 'react');
    });

    it('adds the file reference to Karma', function () {
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), 'es5-shim');
    });

    it('marks as default task', function () {
        assert.fileContent(path.join(gulpTasksPath, 'default.js'), 'react');
    });
});
