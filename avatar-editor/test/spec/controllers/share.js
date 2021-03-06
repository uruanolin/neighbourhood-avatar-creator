'use strict';

describe('Controller: ShareCtrl', function () {

  // load the controller's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  var ShareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShareCtrl = $controller('ShareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShareCtrl.awesomeThings.length).toBe(3);
  });
});
