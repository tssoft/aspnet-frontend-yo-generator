'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');
var endOfLine = require('os').EOL;

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
        var backboneReferences = endOfLine.concat('            \'bower_components/underscore/underscore-min.js\',', endOfLine, '            \'bower_components/backbone/backbone-min.js\',');
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), backboneReferences);
    });
});
