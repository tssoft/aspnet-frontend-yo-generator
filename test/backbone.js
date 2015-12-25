'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');

describe('backbone', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                framework: 'Backbone',
                reactPlugin: ''
            })
            .on('end', done);
    });

    it('adds the file references to Karma', function () {
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), 'backbone');
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), 'underscore');
    });
});
