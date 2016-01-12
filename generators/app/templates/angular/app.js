import config from './app.config';

window.app = angular.module('app', [])
    .controller()
    .config(config)
    .run(run);

function run($rootScope, $location) {}