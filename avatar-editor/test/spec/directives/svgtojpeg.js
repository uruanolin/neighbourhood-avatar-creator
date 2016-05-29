'use strict';

describe('Directive: svgToJpeg', function () {

  // load the directive's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<svg-to-jpeg></svg-to-jpeg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the svgToJpeg directive');
  }));
});
