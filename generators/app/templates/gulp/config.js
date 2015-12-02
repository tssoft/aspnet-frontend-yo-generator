var buildRoot  = './assets/build';

module.exports = {
    buildRoot: buildRoot,
    less: {
        src: './assets/less/**/*.less',
        dest: buildRoot + '/css'
    }
};