'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('react-redux', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                framework: 'React',
                reactPlugin: 'Redux'
            })
            .on('end', done);
    });

    it('adds the framework reference to Karma', function () {
        assert.fileContent(path.join(gulpTasksPath, 'babel.js'), 'presets: [\'es2015\', \'react\']');
    });
});
