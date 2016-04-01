describe('Service: $cordovaDatePicker', function() {

  var $cordovaDatePicker, $rootScope;

  beforeEach(module('ngCordova.plugins.datePicker'));

  beforeEach(inject(function (_$cordovaDatePicker_, _$q_, _$rootScope_) {
    $cordovaDatePicker = _$cordovaDatePicker_;
    $rootScope = _$rootScope_;

    window.datePicker = {
      show: angular.noop
    };
  }));

  it('should call window\'s datePicker.show method', function() {

    var result;
    var options = { mode: 'date', date: new Date() };

    spyOn(window.datePicker, 'show')
      .and.callFake(function (options, successCb, errorCb) {
        successCb(options.date);
      });

    $cordovaDatePicker
      .show(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(options.date);
    expect(window.datePicker.show.calls.argsFor(0)[0]).toBe(options);
  });

  it('should have default options if none are passed', function() {
    var result;

    spyOn(window.datePicker, 'show')
      .and.callFake(function(options, successCb, errorCb) {
        successCb(options.date);
      });

    $cordovaDatePicker
      .show()
      .then(function (response) {
        result = response;
      });

      $rootScope.$digest();

      console.log(result);

      expect(result instanceof Date).toBeTruthy();
  });

});
