var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

gulp.task('modernizr', function () {
    return gulp.src('src/**/*.js')
        .pipe(modernizr())
        .pipe(gulp.dest('build/scripts'));
});