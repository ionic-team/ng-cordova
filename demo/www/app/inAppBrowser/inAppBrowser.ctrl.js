angular.module('demo.inAppBrowser.ctrl', [])

  .controller('InAppBrowserCtrl', function ($scope, $rootScope, $cordovaInAppBrowser) {
    $scope.openBrowser = function () {
      document.addEventListener('deviceready', function () {

        var options = {
          location: "no"
        };

        $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options).then(function () {
          console.log("InAppBrowser opened http://ngcordova.com successfully");
        }, function (error) {
          console.log("Error: " + error);
        });

      }, false);
    };

    document.addEventListener('deviceready', function () {

      $rootScope.$on("$cordovaInAppBrowser:exit", function (event, result) {
        alert("Exited Browser");
        console.log(JSON.stringify(result));
      });


      $rootScope.$on("$cordovaInAppBrowser:loadstop", function (event, result) {
        alert("Load Stop event");
        console.log(JSON.stringify(result));
      })
    }, false);

  });
