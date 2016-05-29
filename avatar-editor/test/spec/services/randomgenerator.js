'use strict';

describe('Service: randomGenerator', function () {

  // load the service's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  // instantiate service
  var randomGenerator;
  beforeEach(inject(function (_randomGenerator_) {
    randomGenerator = _randomGenerator_;
  }));

  it('should do something', function () {
    expect(!!randomGenerator).toBe(true);
  });

});
