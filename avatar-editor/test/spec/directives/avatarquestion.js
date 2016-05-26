'use strict';

describe('Directive: avatarQuestion', function () {

  // load the directive's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<avatar-question></avatar-question>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the avatarQuestion directive');
  }));
});
