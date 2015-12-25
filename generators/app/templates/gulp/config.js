var buildScripts = 'build/scripts';
    buildStyles = 'build/styles',
    srcJs = 'src/**/*.js',
    srcJsx = 'src/**/*.jsx',
    srcLess = 'src/**/*.less';

module.exports = {
    less: {
        src: srcLess,
        dest: buildStyles,
    },
    jscs: {
        src: srcJs
    },
    lint: {
        src: srcJs
    },
    react: {
        src: srcJsx,
        dest: buildScripts,
    }
};