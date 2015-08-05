angular.module('demo.upsPushNotifications.ctrl', [])

  .controller('UpsPushNotificationsCtrl', function ($scope, $rootScope, $cordovaUpsPush) {
    $scope.config = {};

    $scope.register = function () {
      $cordovaUpsPush.register($scope.config).then(function () {
        console.log("successful registered");
      }, function (err) {
        alert("Registration error: " + err);
      });

      $rootScope.$on('$cordovaUpsPush:notificationReceived', function (event, notification) {
        if (notification.alert) {
          navigator.notification.alert(notification.alert);
        }
      });
    };
  });
