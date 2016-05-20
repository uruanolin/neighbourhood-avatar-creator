'use strict';

describe('Controller: MagicscrolltestCtrl', function () {

  // load the controller's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  var MagicscrolltestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MagicscrolltestCtrl = $controller('MagicscrolltestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MagicscrolltestCtrl.awesomeThings.length).toBe(3);
  });
});
