'use strict';

describe('Directive: gameRow', function () {

  // load the directive's module
  beforeEach(module('ngMinesweeperApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-row></game-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gameRow directive');
  }));
});
