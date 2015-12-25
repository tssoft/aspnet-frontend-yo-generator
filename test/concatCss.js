'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('concatCss', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                framework: 'Angular 2.x',
                plugins: ['LESS'],
                concatenatedSources: ['CSS'],
                reactPlugin: ''
            })
            .on('end', done);
    });

    it('adds concatenation to less task', function () {
        assert.fileContent(path.join(gulpTasksPath, 'less.js'), 'config.dest');
    });
});
