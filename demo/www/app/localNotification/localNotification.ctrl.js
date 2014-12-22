angular.module('demo.localNotification.ctrl', [])

  .controller('LocalNotificationCtrl', function ($scope, $rootScope, $cordovaLocalNotification) {

    /// NOTE LOCAL NOTIFICATIONS ARE BROKEN

    $scope.addNotification = function () {
      var now = new Date();
      var _60_seconds_from_now = new Date(now + 60 * 1000);
      var event = {
        id: 1,
        date: _60_seconds_from_now,
        title: "Test Event",
        message: "this is a message about the event",
        badge: 2
      };

      document.addEventListener("deviceready", function () {
        $cordovaLocalNotification.add(event).then(function () {
          alert("local add : success");
        });

      }, false);

    };

    document.addEventListener("deviceready", function () {
      $rootScope.$on("localNotification:triggered", function (event, notification) {
        alert("notif id:" + notification.id + " state: " + notification.state);
      })
    }, false);
  });

