describe('Service: $cordovaPrinter', function () {

  var $cordovaPrinter, $rootScope;

  beforeEach(module('ngCordova.plugins.printer'));

  beforeEach(inject(function (_$cordovaPrinter_, _$q_, _$rootScope_) {
    $cordovaPrinter = _$cordovaPrinter_;
    $rootScope = _$rootScope_;

    window.plugin = {
      printer: {
        isAvailable: angular.noop,
        print: jasmine.createSpy('print')
      }
    };
  }));

  it('should return window\'s printer.isAvailable', function () {

    var result;

    spyOn(window.plugin.printer, 'isAvailable')
      .andCallFake(function (successCb, errorCb) {
        successCb(false);
      });

    $cordovaPrinter
      .isAvailable()
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(false);
  });

  it('should call window\'s printer.print', function () {
    var result;
    var someDoc = 'someDocContent';
    var options = {landscape: true};

    $cordovaPrinter
      .print(someDoc, options)
      .then(function (response) {
        result = response;
      });

    expect(window.plugin.printer.print).toHaveBeenCalledWith(someDoc, options, jasmine.any(Function));
  });

});
