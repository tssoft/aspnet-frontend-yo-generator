var requireDir = require('require-dir');
var mkdirp = require('mkdirp');

requireDir('./gulp/tasks', { recurse: true });
mkdirp("build/scripts");
mkdirp("build/styles");