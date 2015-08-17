angular.module('demo.beacon.ctrl', [])

  .controller('BeaconCtrl', function($window, $scope, $rootScope, $timeout, $cordovaBeacon) {
    var brIdentifier = 'estimote';
    var brUuid = 'b9407f30-f5f8-466e-aff9-25556b57fe6d';
    var brMajor = null;
    var brMinor = null;
    var brNotifyEntryStateOnDisplay = true;

    $scope.didStartMonitoringForRegionLog = '';
    $scope.didDetermineStateForRegionLog = '';
    $scope.didRangeBeaconsInRegionLog = '';

    $scope.requestAlwaysAuthorization = function() {
      $cordovaBeacon.requestAlwaysAuthorization();
    };

    $scope.startMonitoringForRegion = function() {
      $cordovaBeacon.startMonitoringForRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };
    $scope.startRangingBeaconsInRegion = function() {
      $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };

    $scope.stopMonitoringForRegion = function() {
      $cordovaBeacon.stopMonitoringForRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };
    $scope.stopRangingBeaconsInRegion = function() {
      $cordovaBeacon.stopRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion(
        brIdentifier, brUuid, brMajor, brMinor, brNotifyEntryStateOnDisplay
      ));
    };

    $scope.clearLogs = function() {
      $scope.didStartMonitoringForRegionLog = '';
      $scope.didDetermineStateForRegionLog = '';
      $scope.didRangeBeaconsInRegionLog = '';
    };

    document.addEventListener("deviceready", function () {
      $rootScope.$on("$cordovaBeacon:didStartMonitoringForRegion", function (event, pluginResult) {
        $scope.didStartMonitoringForRegionLog += '-----' + '\n';
        $scope.didStartMonitoringForRegionLog += JSON.stringify(pluginResult) + '\n';
      });

      $rootScope.$on("$cordovaBeacon:didDetermineStateForRegion", function (event, pluginResult) {
        $scope.didDetermineStateForRegionLog += '-----' + '\n';
        $scope.didDetermineStateForRegionLog += JSON.stringify(pluginResult) + '\n';
      });

      $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function (event, pluginResult) {
        $scope.didRangeBeaconsInRegionLog += '-----' + '\n';
        $scope.didRangeBeaconsInRegionLog += JSON.stringify(pluginResult) + '\n';
      });
    }, false);
  });

