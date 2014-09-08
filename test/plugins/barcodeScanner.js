describe('Service: $cordovaBarcodeScanner', function() {

  var $cordovaBarcodeScanner, $rootScope;

  beforeEach(module('ngCordova.plugins.barcodeScanner'));

  beforeEach(inject(function (_$cordovaBarcodeScanner_, _$q_, _$rootScope_) {
    $cordovaBarcodeScanner = _$cordovaBarcodeScanner_;
    $rootScope = _$rootScope_;

    window.cordova = {
      plugins: {
        barcodeScanner: {
          scan: angular.noop,
          encode: angular.noop
        }
      }
    };
  }));

  it('should call window\'s barcodeScanner.scan method', function() {

    var result;
    var callbackResult = {
      text: '',
      format: '',
      cancelled: false
    };
    var options = { someOptions: 1 };

    spyOn(window.cordova.plugins.barcodeScanner, 'scan')
      .andCallFake(function (successCb, errorCb) {
        successCb(callbackResult);
      });

    $cordovaBarcodeScanner
      .scan(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(callbackResult);
    expect(window.cordova.plugins.barcodeScanner.scan).toHaveBeenCalled();
  });

  it('should call window\'s barcodeScanner.encode method with correct parameters', function() {

    var result;
    var type = 'TEXT_TYPE';
    var data = 'http://www.nytimes.com';

    spyOn(window.cordova.plugins.barcodeScanner, 'encode')
      .andCallFake(function (type, data, successCb, errorCb) {
        successCb(true);
      });

    $cordovaBarcodeScanner
      .encode(type, data)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect(window.cordova.plugins.barcodeScanner.encode)
      .toHaveBeenCalledWith(
        type,
        data,
        jasmine.any(Function),
        jasmine.any(Function)
      );
  });

});
