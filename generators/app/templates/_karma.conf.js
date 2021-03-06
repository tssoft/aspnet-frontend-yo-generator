﻿// Karma configuration
// Generated on Wed Nov 25 2015 15:37:58 GMT+0300 (RTZ 2 (зима))

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'<% if (includeReact) { %>, 'es5-shim'<% } %>],


        // list of files / patterns to load in the browser
        files: [<% if (includeAngular) { %>
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',<% } if (includeReact) { %>
            'node_modules/react/dist/react-with-addons.js',
            'node_modules/react-dom/dist/react-dom.js',<% } if (includeBackbone) { %>
            'bower_components/underscore/underscore-min.js',
            'bower_components/backbone/backbone-min.js',<% } %>
            'build/scripts/**/*.js',
            'test/**/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
    
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    });
}