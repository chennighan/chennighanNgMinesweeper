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
      $scope.boardWidth = 0;
      $scope.boardHeight = 0;
      $scope.boardMines = 0;
      $scope.touchingMines = 0;
      $scope.board = {};
      $scope.mineList = [];

      $scope.populateBoard = function(width, height, mines) {
         // reset the board on population request
         $scope.board = {
            'rows': { }
         };

         var counter = 0;

         for(var w = 0; w < width; w++) {
            $scope.board.rows['row'+w] = {
               'id': w,
               'cols': { }
            };          
            for(var h = 0; h < height; h++) {
               counter++;
              
               $scope.board.rows['row'+w].cols['col'+h] = {
                  'mined': false,
                  'showing': false,
                  'touching_mines': 0,
                  'id': h,
                  'cell_id': counter,
                  'x': w,
                  'y': h
               };
            }
         }
         
         $scope.mineList = generateMines(width, height, mines);
      };

      $scope.checkCell = function(x, y, cell) {
         console.log('x: ' + x + ', y: ' + y + ', cell: ' + cell);
         var currentCell = $scope.board.rows['row'+x].cols['col'+y];

         if(currentCell.mined == false) {
            currentCell.showing = true;
         } else {
            currentCell.showing = true;
            alert("you lose you hit a mine!");
         }

         checkNeighbors(x, y, cell);
      }

      var generateMines = function(width, height, mines) {
         var mineList = [];

         for(var i = 0; i < mines; i++) {
            var tempX = Math.floor(Math.random()*(width - 0))+0;
            var tempY = Math.floor(Math.random()*(height - 0))+0;

            mineList.push({
               'mine_id': i,
               'x': tempX,
               'y': tempY
            });

            $scope.board.rows['row'+tempX].cols['col'+tempY].mined = true;
         }

         return mineList;
      };

      var checkNeighbors = function(x, y, cell) {
         var board = $scope.board;
         var currentCell = $scope.board.rows['row'+x].cols['col'+y];

         $scope.touchingMines = 0;
         $scope.touchingMineList = [];
         var tempNeighbor = '';

         // Top Middle
         if(x-1 > -1)  {
            tempNeighbor = board.rows['row'+(x-1)].cols['col'+y];
            checkNeighborForMines(tempNeighbor);
         }
         //  Bottom Middle
         if(x+1 <= $scope.boardWidth-1) {
            tempNeighbor = board.rows['row'+(x+1)].cols['col'+y];
            checkNeighborForMines(tempNeighbor);
         }
         // Left Middle
         if(y-1 > -1) {
            tempNeighbor = board.rows['row'+x].cols['col'+(y-1)];
            checkNeighborForMines(tempNeighbor);
         }
         // Right Middle
         if(y+1 <= $scope.boardHeight-1) {
            tempNeighbor = board.rows['row'+x].cols['col'+(y+1)];
            checkNeighborForMines(tempNeighbor);
         }
         // Bottom Right
         if(x+1 <= $scope.boardWidth-1 && y+1 <= $scope.boardHeight-1) {
            tempNeighbor = board.rows['row'+(x+1)].cols['col'+(y+1)];
            checkNeighborForMines(tempNeighbor);
         }
         // Bottom Middle
         if(x-1 >-1 && y+1 <= $scope.boardHeight-1) {
            tempNeighbor = board.rows['row'+(x-1)].cols['col'+(y+1)];
            checkNeighborForMines(tempNeighbor);
         }
         // Top Left
         if(x-1 > -1 && y-1 > -1) {
            tempNeighbor = board.rows['row'+(x-1)].cols['col'+(y-1)];
            checkNeighborForMines(tempNeighbor);
         }
         // Bottom Left
         if(x+1 <= $scope.boardWidth-1 && y-1 > -1) {
            tempNeighbor = board.rows['row'+(x+1)].cols['col'+(y-1)];
            checkNeighborForMines(tempNeighbor);
         }

         console.log('total mines touching: ' + $scope.touchingMines);
         if(currentCell.mined == false) {
            currentCell.touching_mines = $scope.touchingMines;
         } else {
            currentCell.touching_mines = '';
         }
      }

      var checkNeighborForMines = function(neighbor) {
         if(neighbor.mined == true) {
            $scope.touchingMines++;
            $scope.touchingMineList.push(neighbor);
            console.log('mine at location: ' + neighbor.x + ',' + neighbor.y);
         }
      }
   }]);