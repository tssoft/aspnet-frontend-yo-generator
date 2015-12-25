var gulp = require('gulp');

gulp.task('default', [
<% if (includeReact) { %>'react',<% } %>
'less',
'lint',
'jscs'
])