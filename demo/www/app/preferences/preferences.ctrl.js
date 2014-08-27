angular.module('demo.preferences.ctrl', [])

  .controller('PreferencesCtrl', function ($scope, $log, $cordovaPreferences) {

    var key = 'exampleKey';
    $scope.data = {};
    $scope.data.showMore = false;
    $scope.data.key = key;

    $scope.preferencesSet = function () {
      $cordovaPreferences.set(key, $scope.data.value)
        .then(function (result) {
          if (result) {
            $log.log(key + ' was succesfully set to:', $scope.data.value);
            $scope.data.showMore = true;
          } else {
            $log.log(key + ' was not set to: ' + $scope.data.value + ' we got ', result);
          }
        }, function (err) {
          $log.log(key + ' was not set to: ' + $scope.data.value + ' due to', err);
        });
    };

    $scope.preferencesGet = function () {
      $cordovaPreferences.get(key)
        .then(function (value) {
          $log.log(key + ' get was succesfully:', value);
          $scope.data.pref = value;
        }, function (err) {
          $log.log(key + ' get was not succesfully: ' + $scope.data.value + ' due to', err);
        });
    };
  });
