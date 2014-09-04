angular.module('demo.datePicker.ctrl', [])

  .controller('DatePickerCtrl', function ($scope, $cordovaDatePicker) {

    var options,
        dateType,
        msg = 'not picked yet',
        handleDatePicker = function (date) {
          $scope.data[dateType] = date;
          $scope.$apply();
        };

    $scope.data = {
      date: msg,
      time: msg
    };

    $scope.pick = function (type) {
      options = {
        date: new Date(),
        mode: type
      };
      dateType = type;
      $cordovaDatePicker.show(options, handleDatePicker);
    };

  });
