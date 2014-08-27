angular.module('demo.network.ctrl', [])

  .controller('NetworkCtrl', function ($scope, $cordovaNetwork) {
    $scope.networkType = null;
    $scope.connectionType = null;

    var init = function () {
      console.log("Checking network status");
      $scope.networkType = $cordovaNetwork.getNetwork();

      if ($cordovaNetwork.isOnline() == true) {
        $scope.connectionType = 'Online';
      }
      else if ($cordovaNetwork.isOffline() == true) {
        $scope.connectionType = 'Offline';
      }
      else {
        $scope.errorMsg = 'Error getting isOffline / isOnline methods';
      }

    };

    $scope.refresh = function () {
      init();
    };

    init();
  });
