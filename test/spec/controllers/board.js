'use strict';

describe('Controller: BoardCtrl', function () {

  // load the controller's module
  beforeEach(module('ngMinesweeperApp'));

  var BoardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardCtrl = $controller('BoardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // initially there should not be any mines
  it('should have no items to start', function () {
    expect(scope.boardMines).toBe(0);
  });

  it('populate board should add mines', function() {
    scope.boardWidth = 9;
    scope.boardHeight = 9;
    scope.boardMines = 10;

    scope.populateBoard();
    expect(scope.board.rows.row1)
  });
});