describe('ngCordovaMocks', function () {
  beforeEach(function () {
    module('ngCordovaMocks');
  });

  describe('cordovaDatePicker', function () {
    var $cordovaDatePicker = null;

    beforeEach(inject(function (_$cordovaDatePicker_) {
      $cordovaDatePicker = _$cordovaDatePicker_;
    }));

    it('should show a date picker', function () {
      var dummyDate = new Date(),
          config = {
            date: dummyDate,
            mode: 'date'
          };
      expect($cordovaDatePicker.show(config, function (date) {})).toBe(dummyDate);
    });

  });
})
