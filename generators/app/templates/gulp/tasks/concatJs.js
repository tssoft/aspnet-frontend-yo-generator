﻿var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatjs', ['react'], function () {
    return gulp.src('build/scripts/**/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build/'));
});