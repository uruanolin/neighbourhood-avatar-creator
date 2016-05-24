'use strict';

describe('Service: appState', function () {

  // load the service's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  // instantiate service
  var appState;
  beforeEach(inject(function (_appState_) {
    appState = _appState_;
  }));

  it('should do something', function () {
    expect(!!appState).toBe(true);
  });

});
