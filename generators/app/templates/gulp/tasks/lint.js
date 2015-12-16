var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    configRules = require('../../eslint.config.json'),
    config = require('../config').lint;

gulp.task('lint', function () {
    return gulp.src(config.src)
        .pipe(eslint(configRules))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});