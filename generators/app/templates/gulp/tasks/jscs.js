var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    config = require('../config').jscs;
 
gulp.task('jscs', function() {
    return gulp.src(config.src)
        .pipe(jscs())
        .pipe(jscs.reporter());
});