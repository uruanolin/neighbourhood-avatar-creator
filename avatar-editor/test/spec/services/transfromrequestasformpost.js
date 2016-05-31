'use strict';

describe('Service: transfromRequestAsFormPost', function () {

  // load the service's module
  beforeEach(module('neighbourhoodAvatarCreatorApp'));

  // instantiate service
  var transfromRequestAsFormPost;
  beforeEach(inject(function (_transfromRequestAsFormPost_) {
    transfromRequestAsFormPost = _transfromRequestAsFormPost_;
  }));

  it('should do something', function () {
    expect(!!transfromRequestAsFormPost).toBe(true);
  });

});
