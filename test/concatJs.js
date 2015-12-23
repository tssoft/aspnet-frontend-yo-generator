'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('concatJs', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                framework: 'React',
                plugins: [],
                concatenatedSources: ['JS'],
                reactPlugin: []
            })
            .on('end', done);
    });

    it('adds concatenation to react task', function () {
        assert.fileContent(path.join(gulpTasksPath, 'react.js'), 'config.destConcat');
    });
});
