var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    config = require('../config').js;

gulp.task('babel', function () {
    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015'<% if (includeReact) { %>, 'react'<% } %>]
        }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));
});