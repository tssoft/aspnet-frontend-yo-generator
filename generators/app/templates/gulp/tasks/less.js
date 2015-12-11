var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config = require('../config').less;
var concatCss = require('gulp-concat-css');

gulp.task('less', function() {
    gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', handleErrors)
        .pipe(autoprefixer({ cascade: false, browsers: ['last 2 versions'] }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))<% if (includeConcatCss) { %>
        .pipe(concatCss("styles.css"))
        .pipe(gulp.dest('build/'));<% } %>
});