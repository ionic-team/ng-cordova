angular.module('demo.globalization.ctrl', [])

  .controller('GlobalizationCtrl', function ($scope, $cordovaGlobalization) {


    function init() {
      $cordovaGlobalization.getPreferredLanguage().then(
        function (result) {
          $scope.language = result.value;
        },
        function (error) {
          $scope.language = err.message;
        });

      $cordovaGlobalization.getLocaleName().then(
        function (result) {
          $scope.locale = result.value;
        },
        function (error) {
          $scope.locale = err.message;
        });

      $cordovaGlobalization.getFirstDayOfWeek().then(
        function (result) {
          $scope.fdow = result.value;
        },
        function (error) {
          $scope.fdow = err.message;
        });
    }

    $scope.refresh = function () {
      init();
    };


    init();


    // Soon implemented:
    // dateToString
    // stringToDate
    // getDatePattern
    // getDateNames
    // isDayLightSavingsTime
    // numberToString
    // stringToNumber
    // getNumberPattern
    // getCurrencyPattern
  });
