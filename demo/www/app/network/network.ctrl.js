angular.module('demo.network.ctrl', [])

  .controller('NetworkCtrl', function ($scope, $cordovaNetwork) {
    $scope.networkType = null;
    $scope.connectionType = null;

    document.addEventListener("deviceready", function () {
      $scope.networkType = $cordovaNetwork.getNetwork();

      if ($cordovaNetwork.isOnline()) {
        $scope.connectionType = 'Online';
      }
      else if ($cordovaNetwork.isOffline()) {
        $scope.connectionType = 'Offline';
      }
      else {
        $scope.errorMsg = 'Error getting isOffline / isOnline methods';
      }
    }, false);


  });
