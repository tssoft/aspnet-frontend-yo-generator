var gulp = require('gulp'),
    modernizr = require('gulp-modernizr'),
    config = require('../config').modernizr;

gulp.task('modernizr', function () {
    return gulp.src(config.src)
        .pipe(modernizr())
        .pipe(gulp.dest(config.dest));
});