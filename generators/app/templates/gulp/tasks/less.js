var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config').less;
    concatCss = require('gulp-concat-css');

gulp.task('less', function() {
    gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', handleErrors)
        .pipe(autoprefixer({ cascade: false, browsers: ['last 2 versions'] }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest(config.dest));
});