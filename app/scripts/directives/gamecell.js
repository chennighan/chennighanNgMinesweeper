'use strict';

/**
 * @ngdoc directive
 * @name ngMinesweeperApp.directive:gameCell
 * @description
 * # gameCell
 */
angular.module('ngMinesweeperApp')
  .directive('gameCell', function () {
    return {
      templateUrl: '../views/partials/gameCell.html',
      restrict: 'A',
      scope: false,
    };
  });
