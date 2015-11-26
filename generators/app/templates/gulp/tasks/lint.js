var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    config = require('../../eslint.config.json');

gulp.task('lint', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(eslint(config))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});