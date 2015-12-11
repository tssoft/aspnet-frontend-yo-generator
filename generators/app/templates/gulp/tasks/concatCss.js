var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('concatcss', <% if (includeConcatJs) { %>['concatjs'], <% } %> function () {
    return gulp.src('build/styles/**/*.css')
      .pipe(concatCss("styles.css"))
      .pipe(gulp.dest('build/'));
});