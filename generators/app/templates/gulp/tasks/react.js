var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    config = require('../config').react;

gulp.task('react', function () {
    return gulp.src(config.src)
        .pipe(react())
        .pipe(gulp.dest(config.dest))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.dest));
});