angular.module('demo.inAppBrowser.ctrl', [])

  .controller('InAppBrowserCtrl', function ($scope, $rootScope, $cordovaInAppBrowser) {
    $scope.openBrowser = function () {
      document.addEventListener('deviceready', function () {

        var options = {
          location: "no"
        };

        $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options);

      }, false);
    };

    document.addEventListener('deviceready', function () {

      $rootScope.$on("$cordovaInAppBrowser:exit", function (event, result) {
        alert("Exited Browser");
      })
    }, false);

  });
