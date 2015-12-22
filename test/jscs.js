'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('jscs', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(path.join(__dirname, '.tmp'))
            .withPrompts({
                features: ['includeReact'],
                plugins: ['includeJscs'],
                concatenatedSources: [],
                reactPlugins: []
            })
            .on('end', done);
    });

    it('marks as default task', function () {
        assert.fileContent(path.join(gulpTasksPath, 'default.js'), 'jscs');
    });
});
