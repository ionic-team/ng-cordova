describe('Service: $cordovaFingerprint', function() {

  var $cordovaTouchID, $rootScope;

  beforeEach(module('ngCordova.plugins.fingerprint'));

  beforeEach(inject(function (_$cordovaFingerprint_, _$q_, _$rootScope_) {
    $cordovaFingerprint = _$cordovaFingerprint_;
    $rootScope = _$rootScope_;

    window.fingerprint = {
      isAvailable: angular.noop,
      show: angular.noop
    };
  }));

  it("calls isAvailable without params", function() {
    var result;

    spyOn(window.fingerprint, 'isAvailable')
      .and.callFake(function(successCb, errCb) {
        successCb();
      });

    $cordovaFingerprint.isAvailable()
      .then(function() {
        result = true;
      });
    $rootScope.$digest();
    expect(result).toBe(true);
    expect(window.fingerprint.isAvailable).toHaveBeenCalledWith(
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it("rejects isAvailable on err callback", function() {
    var errorResult;

    spyOn(window.fingerprint, 'isAvailable')
      .and.callFake(function(successCb, errCb) {
        errCb("Not available in test");
      });

    $cordovaFingerprint.isAvailable()
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

    $cordovaFingerprint.isAvailable()
      .then(angular.noop,
            function(err) {
              errorResult = false;
            }
      );
    $rootScope.$digest();
    expect(errorResult).toBe(false);

    window.cordova = _cordova
  });

  it("calls show with options", function() {
    var result;
    var options = {
      clientId: "ngCordova",
      clientSecret: "test"
    };

    spyOn(window.fingerprint, 'show')
      .and.callFake(function(options, successCb, errCb) {
        successCb();
      });

    $cordovaFingerprint.show(options)
      .then(function() {
        result = true;
      });
    $rootScope.$digest();
    expect(result).toBe(true);
    expect(window.fingerprint.show).toHaveBeenCalledWith(
      options,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it("rejects show when window.cordova is not present", function() {
    var errorResult;
    _cordova = window.cordova;
    window.cordova = null;

    $cordovaFingerprint.show()
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
