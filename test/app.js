'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
describe('generator-tssoft-aspnet-frontend', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
            .inDir(__dirname)
            .withOptions({ 'skip-install': true })
            .withPrompts({ features: [] });
        done();
    });

    it('creates expected files', function () {
        assert.file([
            path.join(__dirname, '../.gitignore'),
            path.join(__dirname, '../.gitattributes'),
        ]);
    });
});
