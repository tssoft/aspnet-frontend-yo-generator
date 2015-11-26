var gulp = require('gulp'),
    jscs = require('gulp-jscs');
 
gulp.task('jscs', function() {
    return gulp.src('assets/scripts/app/**/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter());
});