angular.module('demo.facebook.ctrl', [])

  .controller('FacebookCtrl', function ($scope, $log, $cordovaFacebook) {


    $scope.getLoginStatus = function () {
      $cordovaFacebook.getLoginStatus().then(function (status) {
        $scope.status = status;
      }, function (error) {
        $scope.status = error;
      })
    };

    $scope.login = function () {
      $cordovaFacebook.login(["public_profile"]).then(function (success) {
        $scope.loginInfo = success;
      }, function (error) {
        $scope.error = error;
        alert(error);
      })
    };


    $scope.logout = function () {
      $cordovaFacebook.logout().then(function (success) {
        console.log(success);
      }, function (error) {
        $scope.error = error;
        alert(error);
      })
    };

    $scope.getMe = function () {
      $scope.me = ["refreshing..."];
      $cordovaFacebook.api("me", null).then(function (success) {
        $scope.me = success;
      }, function (error) {
        $scope.error = error;
      })
    };

  });
