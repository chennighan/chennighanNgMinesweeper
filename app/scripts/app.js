'use strict';

/**
 * @ngdoc overview
 * @name ngMinesweeperApp
 * @description
 * # ngMinesweeperApp
 *
 * Main module of the application.
 */
angular
  .module('ngMinesweeperApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/board', {
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl',
        controllerAs: 'board'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
