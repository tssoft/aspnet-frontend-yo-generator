var buildScripts = 'build/scripts';
    buildStyles = 'build/styles',
    srcJs = 'src/**/*.js',
    srcLess = 'src/**/*.less',
    <% if (includeReact) { %>srcScript = 'src/**/*.jsx';<% } else { %>srcScript = 'src/**/*.js';<% } %>

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
    js: {
        src: srcScript,
        dest: buildScripts,
    }
};