angular.module('demo.healthkit.ctrl', [])

  .controller('HealthKitCtrl', function($scope, $cordovaHealthKit) {

    $cordovaHealthKit.isAvailable().then(function(success) {
      alert('HealthKit Available');
    }, function(err) {
      alert('HealthKit NOT Available');
    });

    $scope.request = function() {
      $cordovaHealthKit.requestAuthorization().then(function(success) {
        $scope.granted = true;
      }, function(err) {
        $scope.granted = false;
      });
    };
    $scope.checkAuth = function() {
      $cordovaHealthKit.checkAuthStatus().then(function(success) {
        $scope.granted = true;
      }, function(err) {
        $scope.granted = false;
      });
    };
    $scope.readDOB = function() {
      $cordovaHealthKit.readDateOfBirth().then(function(dob) {
        alert('DOB ' + dob);
      }, function(err) {
        alert(err);
      });
    };
    $scope.readGender = function() {
      $cordovaHealthKit.readGender().then(function(gender) {
        alert('Gender ' + gender);
      }, function(err) {
        alert(err);
      });
    };
    $scope.readWeight = function() {
      $cordovaHealthKit.readWeight().then(function(v) {
        alert('Weight ' + JSON.stringify(v));
      }, function(err) {
        alert(err);
      });
    };
    $scope.readHeight = function() {
      $cordovaHealthKit.readHeight().then(function(v) {
        alert('Height ' + JSON.stringify(v));
      }, function(err) {
        alert(err);
      });
    }
  });
