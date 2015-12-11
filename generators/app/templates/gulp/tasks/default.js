var gulp = require('gulp');

gulp.task('default', [
<% if (includeReact) { %>'react',
<% } if (includeLess) { %>'less',
<% } if (includeEslint) { %>'lint',
<% } if (includeJscs) { %>'jscs'<% } %>
])