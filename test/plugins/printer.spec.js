describe('Service: $cordovaPrinter', function() {

  var $cordovaPrinter, $rootScope;

  beforeEach(module('ngCordova.plugins.printer'));

  beforeEach(inject(function (_$cordovaPrinter_, _$q_, _$rootScope_) {
    $cordovaPrinter = _$cordovaPrinter_;
    $rootScope = _$rootScope_;

    window.plugin = {
      printer: {
        isServiceAvailable: angular.noop,
        print: jasmine.createSpy('print')
      }
    };
  }));

  it('should return window\'s printer.isServiceAvailable', function() {

    var result;

    spyOn(window.plugin.printer, 'isServiceAvailable')
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

  it('should call window\'s printer.print', function() {
    var someDoc = 'someDocContent';

    $cordovaPrinter.print(someDoc);

    expect(window.plugin.printer.print).toHaveBeenCalledWith(someDoc);
  });

});
