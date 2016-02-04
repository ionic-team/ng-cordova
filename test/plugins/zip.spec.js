describe('Service: $cordovaZip', function () {

  var $cordovaZip, $rootScope, $window, $timeout;

  beforeEach(module('ngCordova.plugins.zip'));

  beforeEach(inject(function (_$cordovaZip_, _$window_, _$timeout_, _$rootScope_) {
    $cordovaZip = _$cordovaZip_;
    $rootScope = _$rootScope_;
    $window = _$window_;
    $timeout = _$timeout_;

    $window.zip = {
      unzip: angular.noop
    };
  }));

  it('should call $window\'s zip.unzip method of success', function () {

    var result;
    var src = 'cordova-2.9.1-src.zip';
    var dest = 'cordova-2.9.1-src';

    spyOn($window.zip, 'unzip')
      .andCallFake(function (src, dest, callback, updateCallback) {
        callback(0);
      });

    $cordovaZip
      .unzip(src, dest)
      .then(function () {
        result = 'success';
      },
      angular.noop,
      angular.noop
    );

    $rootScope.$digest();

    expect(result).toBe('success');
    expect($window.zip.unzip).toHaveBeenCalledWith(
      src,
      dest,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call $window\'s zip.unzip method of error', function () {

    var result;
    var src = 'cordova-2.9.1-src.zip';
    var dest = 'cordova-2.9.1-src';

    spyOn($window.zip, 'unzip')
      .andCallFake(function (src, dest, callback, updateCallback) {
        callback(-1);
      });

    $cordovaZip
      .unzip(src, dest)
      .then(
      angular.noop,
      function () {
        result = 'error';
      },
      angular.noop
    );

    $rootScope.$digest();

    expect(result).toBe('error');
  });

  it('should call $window\'s zip.unzip method of notify', function () {

    var result;
    var notifyResult = {
      loaded: 1,
      total: 10
    };
    var src = 'cordova-2.9.1-src.zip';
    var dest = 'cordova-2.9.1-src';

    spyOn($window.zip, 'unzip')
      .andCallFake(function (src, dest, callback, updateCallback) {
        $timeout(function () {
          updateCallback(notifyResult);
        }, 1000);
      });

    $cordovaZip
      .unzip(src, dest)
      .then(
      angular.noop,
      angular.noop,
      function (response) {
        result = response;
      }
    );

    $timeout.flush();

    expect(result).toBe(notifyResult);
  });


});
