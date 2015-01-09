describe('ngCordovaMocks', function () {
  beforeEach(function () {
    module('ngCordovaMocks');
  });

  describe('cordovaDatePicker', function () {
    var $cordovaDatePicker = null,
        $rootScope = null;

    beforeEach(inject(function (_$cordovaDatePicker_, _$rootScope_) {
      $cordovaDatePicker = _$cordovaDatePicker_;
      $rootScope = _$rootScope_;
    }));

    it('should show a date picker', function () {
      var result,
          dummyDate = new Date(),
          options = {
            date: dummyDate,
            mode: 'date'
          };

      $cordovaDatePicker
        .show(options)
        .then(function (response) {
          result = response;
        });

      $rootScope.$digest();

      expect(result).toBe(dummyDate);
    });

    it('should have default options if none are passed', function() {
      var result;

      $cordovaDatePicker
        .show()
        .then(function (response) {
          result = response;
        });

      $rootScope.$digest();

      expect(result instanceof Date).toBeTruthy();
    });

  });
})
