describe('Service: $cordovaQRCodeScanner', function () {

  var $cordovaQRCodeScanner, $rootScope;
  window.cordova = {
    plugins: {
      qrcodeScanner : {}
    }
  };

  beforeEach(module('ngCordova.plugins.qrcodeScanner'));

  beforeEach(inject(function (_$cordovaQRCodeScanner_, _$q_, _$rootScope_) {
    $cordovaQRCodeScanner = _$cordovaQRCodeScanner_;
    $rootScope = _$rootScope_;

    cordova.plugins.qrcodeScanner = {
      scan: angular.noop
    };

  }));


  it('should call cordova.plugins.qrcodeScanner scan method', function () {

    var result;
    var imageData = {data: '123456789'};

    spyOn(cordova.plugins.qrcodeScanner, 'scan')
      .andCallFake(function (successCb, errorCb) {
        successCb(imageData);
      });

    $cordovaQRCodeScanner
      .scan()
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(imageData);
  });


});
