var gulp = require('gulp');
var react = require('gulp-modulizr');

gulp.task("custom-modernizr", function() {
    return gulp.src("bower_components/modernizr/modernizr.js")
        .pipe(require("gulp-modulizr")([
            "cssclasses",
            "svg",
            "url-data-uri"
        ]))
        .pipe(require("gulp-add-src")([
            "bower_components/modernizr/feature-detects/url-data-uri.js"
        ]))
        .pipe(require("gulp-concat")("custom-modernizr.js"))
        .pipe(gulp.dest("build/scripts"));
});