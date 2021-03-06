'use strict';

describe('Directive: dressRoom', function () {

  // load the directive's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dress-room></dress-room>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dressRoom directive');
  }));
});
