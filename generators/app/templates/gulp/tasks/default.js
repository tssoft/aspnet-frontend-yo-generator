var gulp = require('gulp');

gulp.task('default', [<% if (includeEslint) { %>'lint'<% } %>])