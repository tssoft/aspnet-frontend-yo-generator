var gulp = require('gulp');

gulp.task('default', [
<% if (includeReact) { %>'babel',<% } %>
'less',
'lint',
'jscs'
])