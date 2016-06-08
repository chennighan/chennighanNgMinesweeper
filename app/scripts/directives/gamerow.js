'use strict';

/**
 * @ngdoc directive
 * @name ngMinesweeperApp.directive:gameRow
 * @description
 * # gameRow
 */
angular.module('ngMinesweeperApp')
  .directive('gameRow', function () {
    return {
      templateUrl: '../views/partials/gameRow.html',
      restrict: 'A',
      scope: false
    };
  });
