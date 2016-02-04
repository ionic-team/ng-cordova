describe('Service: $cordovaBarcodeScanner', function () {

  var $cordovaBarcodeScanner, $rootScope;
  window.cordova = {
    plugins: {
      barcodeScanner : {}
    }
  };

  beforeEach(module('ngCordova.plugins.barcodeScanner'));

  beforeEach(inject(function (_$cordovaBarcodeScanner_, _$q_, _$rootScope_) {
    $cordovaBarcodeScanner = _$cordovaBarcodeScanner_;
    $rootScope = _$rootScope_;

    cordova.plugins.barcodeScanner = {
      scan: angular.noop,
      encode: angular.noop
    };

  }));


  it('should call cordova.plugins.barcodeScanner scan method', function () {

    var result;
    var imageData = {data: '123456789'};

    spyOn(cordova.plugins.barcodeScanner, 'scan')
      .andCallFake(function (successCb, errorCb) {
        successCb(imageData);
      });

    $cordovaBarcodeScanner
      .scan()
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(imageData);
  });


});
