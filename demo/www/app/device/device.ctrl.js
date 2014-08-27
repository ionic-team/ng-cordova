angular.module('demo.device.ctrl', [])

  .controller('DeviceCtrl', function ($scope, $state, $cordovaDevice) {

    var init = function () {
      console.log("initializing device");
      try {


        $scope.available = $cordovaDevice.getDevice().available;
        $scope.cordova = $cordovaDevice.getCordova();
        $scope.model = $cordovaDevice.getModel();
        $scope.platform = $cordovaDevice.getPlatform();
        $scope.uuid = $cordovaDevice.getUUID();
        $scope.version = $cordovaDevice.getVersion();
      }
      catch (err) {
        console.log("Error " + err.message);
        alert("error " + err.$$failure.message);
      }

    };

    init();
  });