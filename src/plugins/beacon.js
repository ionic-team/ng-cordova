// install   :  cordova plugin add https://github.com/petermetz/cordova-plugin-ibeacon.git
// link      :  https://github.com/petermetz/cordova-plugin-ibeacon

angular.module('ngCordova.plugins.beacon', [])

  .factory('$cordovaBeacon', ['$window', '$rootScope', '$timeout', '$q', function ($window, $rootScope, $timeout, $q) {
    var callbackDidDetermineStateForRegion = null;
    var callbackDidStartMonitoringForRegion = null;
    var callbackDidExitRegion = null;
    var callbackDidEnterRegion = null;
    var callbackDidRangeBeaconsInRegion = null;
    var callbackPeripheralManagerDidStartAdvertising = null;
    var callbackPeripheralManagerDidUpdateState = null;
    var callbackDidChangeAuthorizationStatus = null;

    document.addEventListener('deviceready', function () {
      if ($window.cordova &&
          $window.cordova.plugins &&
          $window.cordova.plugins.locationManager) {
        var delegate = new $window.cordova.plugins.locationManager.Delegate();

        delegate.didDetermineStateForRegion = function (pluginResult) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:didDetermineStateForRegion', pluginResult);
          });

          if (callbackDidDetermineStateForRegion) {
            callbackDidDetermineStateForRegion(pluginResult);
          }
        };

        delegate.didStartMonitoringForRegion = function (pluginResult) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:didStartMonitoringForRegion', pluginResult);
          });

          if (callbackDidStartMonitoringForRegion) {
            callbackDidStartMonitoringForRegion(pluginResult);
          }
        };

        delegate.didExitRegion = function (pluginResult) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:didExitRegion', pluginResult);
          });

          if (callbackDidExitRegion) {
            callbackDidExitRegion(pluginResult);
          }
        };

        delegate.didEnterRegion = function (pluginResult) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:didEnterRegion', pluginResult);
          });

          if (callbackDidEnterRegion) {
            callbackDidEnterRegion(pluginResult);
          }
        };

        delegate.didRangeBeaconsInRegion = function (pluginResult) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:didRangeBeaconsInRegion', pluginResult);
          });

          if (callbackDidRangeBeaconsInRegion) {
            callbackDidRangeBeaconsInRegion(pluginResult);
          }
        };

        delegate.peripheralManagerDidStartAdvertising = function (pluginResult) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:peripheralManagerDidStartAdvertising', pluginResult);
          });

          if (callbackPeripheralManagerDidStartAdvertising) {
            callbackPeripheralManagerDidStartAdvertising(pluginResult);
          }
        };

        delegate.peripheralManagerDidUpdateState = function (pluginResult) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:peripheralManagerDidUpdateState', pluginResult);
          });

          if (callbackPeripheralManagerDidUpdateState) {
            callbackPeripheralManagerDidUpdateState(pluginResult);
          }
        };

        delegate.didChangeAuthorizationStatus = function (status) {
          $timeout(function () {
            $rootScope.$broadcast('$cordovaBeacon:didChangeAuthorizationStatus', status);
          });

          if (callbackDidChangeAuthorizationStatus) {
            callbackDidChangeAuthorizationStatus(status);
          }
        };

        $window.cordova.plugins.locationManager.setDelegate(delegate);
      }
    }, false);

    return {
      setCallbackDidDetermineStateForRegion: function (callback) {
        callbackDidDetermineStateForRegion = callback;
      },
      setCallbackDidStartMonitoringForRegion: function (callback) {
        callbackDidStartMonitoringForRegion = callback;
      },
      setCallbackDidExitRegion: function (callback) {
        callbackDidExitRegion = callback;
      },
      setCallbackDidEnterRegion: function (callback) {
        callbackDidEnterRegion = callback;
      },
      setCallbackDidRangeBeaconsInRegion: function (callback) {
        callbackDidRangeBeaconsInRegion = callback;
      },
      setCallbackPeripheralManagerDidStartAdvertising: function (callback) {
        callbackPeripheralManagerDidStartAdvertising = callback;
      },
      setCallbackPeripheralManagerDidUpdateState: function (callback) {
        callbackPeripheralManagerDidUpdateState = callback;
      },
      setCallbackDidChangeAuthorizationStatus: function (callback) {
        callbackDidChangeAuthorizationStatus = callback;
      },
      createBeaconRegion: function (identifier, uuid, major, minor, notifyEntryStateOnDisplay) {
        major = major || undefined;
        minor = minor || undefined;

        return new $window.cordova.plugins.locationManager.BeaconRegion(
          identifier,
          uuid,
          major,
          minor,
          notifyEntryStateOnDisplay
        );
      },
      isBluetoothEnabled: function () {
        return $q.when($window.cordova.plugins.locationManager.isBluetoothEnabled());
      },
      enableBluetooth: function () {
        return $q.when($window.cordova.plugins.locationManager.enableBluetooth());
      },
      disableBluetooth: function () {
        return $q.when($window.cordova.plugins.locationManager.disableBluetooth());
      },
      startMonitoringForRegion: function (region) {
        return $q.when($window.cordova.plugins.locationManager.startMonitoringForRegion(region));
      },
      stopMonitoringForRegion: function (region) {
        return $q.when($window.cordova.plugins.locationManager.stopMonitoringForRegion(region));
      },
      requestStateForRegion: function (region) {
        return $q.when($window.cordova.plugins.locationManager.requestStateForRegion(region));
      },
      startRangingBeaconsInRegion: function (region) {
        return $q.when($window.cordova.plugins.locationManager.startRangingBeaconsInRegion(region));
      },
      stopRangingBeaconsInRegion: function (region) {
        return $q.when($window.cordova.plugins.locationManager.stopRangingBeaconsInRegion(region));
      },
      getAuthorizationStatus: function () {
        return $q.when($window.cordova.plugins.locationManager.getAuthorizationStatus());
      },
      requestWhenInUseAuthorization: function () {
        return $q.when($window.cordova.plugins.locationManager.requestWhenInUseAuthorization());
      },
      requestAlwaysAuthorization: function () {
        return $q.when($window.cordova.plugins.locationManager.requestAlwaysAuthorization());
      },
      getMonitoredRegions: function () {
        return $q.when($window.cordova.plugins.locationManager.getMonitoredRegions());
      },
      getRangedRegions: function () {
        return $q.when($window.cordova.plugins.locationManager.getRangedRegions());
      },
      isRangingAvailable: function () {
        return $q.when($window.cordova.plugins.locationManager.isRangingAvailable());
      },
      isMonitoringAvailableForClass: function (region) {
        return $q.when($window.cordova.plugins.locationManager.isMonitoringAvailableForClass(region));
      },
      startAdvertising: function (region, measuredPower) {
        return $q.when($window.cordova.plugins.locationManager.startAdvertising(region, measuredPower));
      },
      stopAdvertising: function () {
        return $q.when($window.cordova.plugins.locationManager.stopAdvertising());
      },
      isAdvertisingAvailable: function () {
        return $q.when($window.cordova.plugins.locationManager.isAdvertisingAvailable());
      },
      isAdvertising: function () {
        return $q.when($window.cordova.plugins.locationManager.isAdvertising());
      },
      disableDebugLogs: function () {
        return $q.when($window.cordova.plugins.locationManager.disableDebugLogs());
      },
      enableDebugNotifications: function () {
        return $q.when($window.cordova.plugins.locationManager.enableDebugNotifications());
      },
      disableDebugNotifications: function () {
        return $q.when($window.cordova.plugins.locationManager.disableDebugNotifications());
      },
      enableDebugLogs: function () {
        return $q.when($window.cordova.plugins.locationManager.enableDebugLogs());
      },
      appendToDeviceLog: function (message) {
        return $q.when($window.cordova.plugins.locationManager.appendToDeviceLog(message));
      }
    };
  }]);
