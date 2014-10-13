describe('Service: $cordovaTouchid', function() {

  var $cordovaTouchid, $rootScope;

  beforeEach(module('ngCordova.plugins.touchid'));

  beforeEach(inject(function (_$cordovaTouchid_, _$q_, _$rootScope_) {
    $cordovaTouchid = _$cordovaTouchid_;
    $rootScope = _$rootScope_;

    window.touchid = {
      checkSupport: angular.noop,
      authenticate: angular.noop
    };
  }));

  it("calls checkSupport without params", function() {
    var result;

    spyOn(window.touchid, 'checkSupport')
      .andCallFake(function(successCb, errCb) {
        successCb();
      });

    $cordovaTouchid.checkSupport()
      .then(function() {
        result = true;
      });
    $rootScope.$digest();
    expect(result).toBe(true);
    expect(window.touchid.checkSupport).toHaveBeenCalledWith(
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it("rejects checkSupport on err callback", function() {
    var errorResult;

    spyOn(window.touchid, 'checkSupport')
      .andCallFake(function(successCb, errCb) {
        errCb("Not available in test");
      });

    $cordovaTouchid.checkSupport()
      .then(angular.noop,
            function(err) {
              errorResult = false;
            }
      );
    $rootScope.$digest();
    expect(errorResult).toBe(false);
  });

  it("rejects checkSupport when window.cordova is not present", function() {
    var errorResult;
    _cordova = window.cordova;
    window.cordova = null;

    $cordovaTouchid.checkSupport()
      .then(angular.noop,
            function(err) {
              errorResult = false;
            }
      );
    $rootScope.$digest();
    expect(errorResult).toBe(false);

    window.cordova = _cordova 
  });

  it("calls authenticate with auth_text_reason", function() {
    var result;
    var auth_text_reason = "To prove the test works";

    spyOn(window.touchid, 'authenticate')
      .andCallFake(function(successCb, errCb, text) {
        successCb();
      });

    $cordovaTouchid.authenticate(auth_text_reason)
      .then(function() {
        result = true;
      });
    $rootScope.$digest();
    expect(result).toBe(true);
    expect(window.touchid.authenticate).toHaveBeenCalledWith(
      jasmine.any(Function),
      jasmine.any(Function),
      auth_text_reason
    );
  });

  it("rejects authenticate when window.cordova is not present", function() {
    var errorResult;
    _cordova = window.cordova;
    window.cordova = null;

    $cordovaTouchid.authenticate()
      .then(angular.noop,
            function(err) {
              errorResult = false;
            }
      );
    $rootScope.$digest();
    expect(errorResult).toBe(false);
    window.cordova = _cordova 
  });
});
