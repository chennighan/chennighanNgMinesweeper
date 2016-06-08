'use strict';

describe('Directive: gameCell', function () {

  // load the directive's module
  beforeEach(module('ngMinesweeperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-cell></game-cell>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gameCell directive');
  }));
});
