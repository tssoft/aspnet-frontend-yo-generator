var gulp = require('gulp');

gulp.task('default', [<% if (includeLess) { %>'less', <% } if (includeEslint) { %>'lint', <% } %>'tdd'])