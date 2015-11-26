var gulp = require('gulp'),
    jscs = require('gulp-jscs');
 
gulp.task('jscs', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter());
});