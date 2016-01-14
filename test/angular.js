'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

var rootTmp = path.join(__dirname, '.tmp');
var gulpTasksPath = path.join(rootTmp, 'gulp/tasks');
var endOfLine = require('os').EOL;

describe('angular 1.x', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .inDir(rootTmp)
            .withPrompts({
                framework: 'Angular 1.x',
                reactPlugin: ''
            })
            .on('end', done);
    });

    it('adds the file references to Karma', function () {
        var angularReferences = endOfLine.concat('            \'node_modules/angular/angular.min.js\',', endOfLine, '            \'node_modules/angular-mocks/angular-mocks.js\',');
        assert.fileContent(path.join(rootTmp, 'karma.conf.js'), angularReferences);
    });
    
    it('creates template scripts', function() {
        assert.file([
                path.join(rootTmp, 'src/app.js'),
                path.join(rootTmp, 'src/app.config.js')
            ]);
    });
});
