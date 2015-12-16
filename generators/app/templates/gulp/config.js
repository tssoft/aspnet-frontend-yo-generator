var buildScripts = 'build/scripts';
    buildStyles = 'build/styles',
    concatSources = 'build/',
    srcJs = 'src/**/*.js',
    srcJsx = 'src/**/*.jsx',
    srcLess = 'src/**/*.less';

module.exports = {
    less: {
        src: srcLess,
        dest: buildStyles,
        destConcat: concatSources
    },
    jscs: {
        src: srcJs
    },
    lint: {
        src: srcJs
    },
    modernizr: {
        src: srcJs,
        dest: buildScripts
    },
    react: {
        src: srcJsx,
        dest: buildScripts,
        destConcat: concatSources
    }
};