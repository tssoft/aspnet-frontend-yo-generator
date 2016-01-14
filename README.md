# generator-tssoft-aspnet-frontend
> 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-tssoft-aspnet-frontend using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g git+https://github.com/tssoft/aspnet-frontend-yo-generator.git
```

Second, install [Bower](http://bower.io). It's required for some packages.
```bash
npm install -g bower
```

Then generate your new project:

```bash
yo tssoft-aspnet-frontend
```

## Options

Target frameworks:

* [Angular 1.x](https://angularjs.org)
* [Angular 2.x](https://angular.io)
* [React](https://facebook.github.io/react)
* [Backbone](http://backbonejs.org)
* [Bootstrap](http://getbootstrap.com)

Used npm packages

* [Less](https://www.npmjs.com/package/gulp-less)
* [Karma](https://www.npmjs.com/package/karma)
* [Jasmine](https://www.npmjs.com/package/jasmine-core)
* [JSCS](https://www.npmjs.com/package/gulp-jscs)
* [ESLint](https://www.npmjs.com/package/gulp-eslint)
* [ConcatCSS](https://www.npmjs.com/package/gulp-concat-css)
* [Concat](https://www.npmjs.com/package/gulp-concat)
* [Babel](https://www.npmjs.com/package/babel)

## Tasks

Single:

* gulp jscs
* gulp lint
* gulp tdd — starts Karma
* gulp test — starts Karma with [singleRun flag](http://karma-runner.github.io/0.13/config/configuration-file.html)
* gulp less
* gulp babel

Multiple:

* gulp — starts Babel, Less, ESLint and JSCS
* gulp check — starts ESLint and JSCS

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
