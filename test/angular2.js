'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('angular 2.x', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                framework: 'Angular 2.x',
                reactPlugin: ''
            })
            .on('end', done);
    });

    it('sets a babel presets for ECMAScript 2015 only', function () {
        assert.fileContent(path.join(gulpTasksPath, 'babel.js'), 'presets: [\'es2015\']');
    });
});
