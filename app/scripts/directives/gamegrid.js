'use strict';

/**
 * @ngdoc directive
 * @name ngMinesweeperApp.directive:gameGrid
 * @description
 * # gameGrid
 */
angular.module('ngMinesweeperApp')
  .directive('gameGrid', function () {
    return {
      templateUrl: '../views/partials/gameGrid.html',
      restrict: 'A',
      scope: false
    };
  });
