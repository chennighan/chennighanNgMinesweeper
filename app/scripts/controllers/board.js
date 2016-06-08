'use strict';

/**
 * @ngdoc function
 * @name ngMinesweeperApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the ngMinesweeperApp
 */
angular.module('ngMinesweeperApp')
   .controller('BoardCtrl', ['$scope', function ($scope) {
      $scope.board_width = 0;
      $scope.board_height = 0;
      $scope.board_mines = 0;

      $scope.populateBoard = function() {
         // reset the board on population request
         $scope.board = {
            "rows": { }
         };

         var counter = 0;

         for(var w = 0; w < this.board_width; w++) {
            $scope.board.rows['row'+w] = {
               "cols": { }
            };          
            for(var h = 0; h < this.board_height; h++) {
               counter++;
              
               $scope.board.rows['row'+w]['cols']['col'+h] = {
                  'mined': false,
                  'x': w,
                  'y': h
               }
            }
         }
         
         var mines = generateMines(this.board_width, this.board_height, this.board_mines);
      }

      var generateMines = function(width, height, mines) {
         var mine_list = [];

         for(var i = 0; i < mines; i++) {
            var temp_x = Math.floor(Math.random()*(width - 0))+0;
            var temp_y = Math.floor(Math.random()*(height - 0))+0;

            mine_list.push({
               'mine_id': i,
               'x': temp_x,
               'y': temp_y
            });

            $scope.board.rows['row'+temp_x]['cols']['col'+temp_y]['mined'] = true;
         }

         return mine_list;
      }
   }]);