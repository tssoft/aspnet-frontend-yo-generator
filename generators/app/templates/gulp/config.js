var buildScripts = 'build/scripts';
    buildStyles = 'build/styles',
    srcJs = 'src/**/*.js',
    srcLess = 'src/**/*.less',
    <% if (includeReact) { %>srcScripts = 'src/**/*.jsx';<% } else { %>srcScripts = 'src/**/*.js';<% } %>

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
        src: srcScripts,
        dest: buildScripts,
    }
};