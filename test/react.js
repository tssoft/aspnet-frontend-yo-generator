'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');
var endOfLine = require('os').EOL;

describe('react', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                framework: 'React',
                reactPlugin: 'Not any of them'
            })
            .on('end', done);
    });

    it('adds the framework reference to Karma', function () {
        var reactReference = endOfLine.concat('            \'node_modules/react/dist/react.js\',', endOfLine, '            \'node_modules/react-dom/dist/react-dom.js\'');
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), reactReference);
    });

    it('adds the file reference to Karma', function () {
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), ' \'es5-shim\'');
    });
});
