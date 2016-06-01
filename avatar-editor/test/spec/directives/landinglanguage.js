'use strict';

describe('Directive: landingLanguage', function () {

  // load the directive's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<landing-language></landing-language>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the landingLanguage directive');
  }));
});
