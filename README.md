# generator-tssoft-aspnet-frontend
> 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-tssoft-aspnet-frontend using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g git+https://github.com/tssoft/aspnet-frontend-yo-generator.git
```

Then generate your new project:

```bash
yo tssoft-aspnet-frontend
```

## Options

You can choose target framework:

* Angular 1.x
* Angular 2.x
* React
* Backbone

Gulp plugins:

* Less
* Karma
* JSCS
* ESLint
* ConcatCSS
* Concat (for .js)
* Babel

## Tasks

Multiple:

* gulp — starts Babel, Less, ESLint and JSCS
* gulp check — starts ESLint and JSCS
* gulp default — the same as gulp

Single:

* gulp jscs
* gulp lint
* gulp modernizr
* gulp tdd — starts Karma
* gulp test — starts Karma with singleRun flag
* gulp less — starts Less and minifying CSS results
* gulp babel — starts Babel with installed presets and minifying

## Features

![Logo](assets/bootstrap.png)
![Logo](assets/angular.png)
![Logo](assets/react.png)
![Logo](assets/backbone.png)
![Logo](assets/babel.png)
![Logo](assets/bower.png)
![Logo](assets/gulp.png)
![Logo](assets/less.png)
![Logo](assets/karma.png)
![Logo](assets/jscs.png)
![Logo](assets/eslint.png)

## License

MIT © TS Soft


[npm-image]: https://badge.fury.io/js/generator-tssoft-aspnet-frontend.svg
[npm-url]: https://npmjs.org/package/generator-tssoft-aspnet-frontend
[travis-image]: https://travis-ci.org/SLagutin/generator-tssoft-aspnet-frontend.svg?branch=master
[travis-url]: https://travis-ci.org/SLagutin/generator-tssoft-aspnet-frontend
[daviddm-image]: https://david-dm.org/SLagutin/generator-tssoft-aspnet-frontend.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SLagutin/generator-tssoft-aspnet-frontend
[coveralls-image]: https://coveralls.io/repos/SLagutin/generator-tssoft-aspnet-frontend/badge.svg
[coveralls-url]: https://coveralls.io/r/SLagutin/generator-tssoft-aspnet-frontend
