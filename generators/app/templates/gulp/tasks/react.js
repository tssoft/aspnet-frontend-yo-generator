var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('react', function () {
    return gulp.src('src/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('build/scripts'))<% if (includeConcatJs) { %>
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/'));<% } %>
});