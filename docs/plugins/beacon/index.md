---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaBeacon
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/beacon.js
official-docs: https://github.com/petermetz/cordova-plugin-ibeacon
icon-apple: true
icon-android: true
---

iBeacon uses Bluetooth low energy proximity sensing to transmit a universally unique identifier picked up by a compatible app or operating system. The identifier can be used to determine the device's physical location or trigger a location-based action on the device such as a check-in on social media or a local / push notification.
[Wikipedia](https://en.wikipedia.org/wiki/IBeacon)

```
cordova plugin add com.unarin.cordova.beacon
```


### Methods

##### `createBeaconRegion(identifier, uuid, major, minor, notifyEntryStateOnDisplay)`

Creates a new `BeaconRegion` object.

| Param                      | Type       | Detail                                                   |
| -------------------------- | ---------- | -------------------------------------------------------- |
| identifier                 | `String`   | Unique identifier name.<br />Parameter is **mandatory**. |
| uuid                       | `String`   | Unique proximity ID of the beacon being targeted. This value must not be blank nor invalid as a UUID. Parameter is **mandatory**.  |
| major                      | `Integer`  | The major value that you use to identify one or more beacons. Parameter is **optional**.  |
| minor                      | `Integer`  | The minor value that you use to identify a specific beacon. Parameter is **optional**.  |
| notifyEntryStateOnDisplay  | `Boolean`  | A Boolean indicating whether beacon notifications are sent when the device’s display is on. Parameter is **optional**.  |

> **Returns**  `Object` `BeaconRegion` object

##### `isBluetoothEnabled()`

Determines if bluetooth is switched on, according to the native layer.

> **Returns**  `Object` a promise which is resolved with a `Boolean` indicating whether bluetooth is active.

##### `enableBluetooth()`

Enables Bluetooth using the native Layer. (ANDROID ONLY)

> **Returns**  `Object` a promise which is resolved when Bluetooth could be enabled. If not, the promise will be rejected with an error.

##### `disableBluetooth()`

Disables Bluetooth using the native Layer. (ANDROID ONLY)

> **Returns**  `Object` a promise which is resolved when Bluetooth could be disabled. If not, the promise will be rejected with an error.

##### `startMonitoringForRegion(region)`

Start monitoring the specified region.<br />
See `createBeaconRegion(identifier, uuid, major, minor, notifyEntryStateOnDisplay)`

| Param    | Type       | Detail                                                                                                           |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| region   | `Object`   | An instance of `BeaconRegion` which will be monitored by the operating system.<br />Parameter is **mandatory**.  |

> **Returns**  `Object` a promise which is resolved as soon as the native layer acknowledged the dispatch of the monitoring request.

##### `stopMonitoringForRegion(region)`

Stop monitoring the specified region.<br />
See `createBeaconRegion(identifier, uuid, major, minor, notifyEntryStateOnDisplay)`

| Param    | Type       | Detail                                                                                                           |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| region   | `Object`   | An instance of `BeaconRegion` which will be monitored by the operating system.<br />Parameter is **mandatory**.  |

> **Returns**  `Object` a promise which is resolved as soon as the native layer acknowledged the dispatch of the request to stop monitoring.

##### `requestStateForRegion(region)`

Request state the for specified region. When result is ready `didDetermineStateForRegion` is triggered. This can be any region, also those which is not currently monitored. .<br />
See `createBeaconRegion(identifier, uuid, major, minor, notifyEntryStateOnDisplay)`

| Param    | Type       | Detail                                                                                                           |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| region   | `Object`   | An instance of `BeaconRegion` which will be monitored by the operating system.<br />Parameter is **mandatory**.  |

> **Returns**  `Object` a promise which is resolved as soon as the native layer acknowledged the dispatch of the request.

##### `startRangingBeaconsInRegion(region)`

Start ranging the specified beacon region.<br />
See `createBeaconRegion(identifier, uuid, major, minor, notifyEntryStateOnDisplay)`

| Param    | Type       | Detail                                                                                                           |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| region   | `Object`   | An instance of `BeaconRegion` which will be monitored by the operating system.<br />Parameter is **mandatory**.  |

> **Returns**  `Object` a promise which is resolved as soon as the native layer acknowledged the dispatch of the monitoring request.

##### `stopRangingBeaconsInRegion(region)`

Stop ranging the specified region.<br />
See `createBeaconRegion(identifier, uuid, major, minor, notifyEntryStateOnDisplay)`

| Param    | Type       | Detail                                                                                                           |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| region   | `Object`   | An instance of `BeaconRegion` which will be monitored by the operating system.<br />Parameter is **mandatory**.  |

> **Returns**  `Object` a promise which is resolved as soon as the native layer acknowledged the dispatch of the monitoring request.

##### `getAuthorizationStatus()`

Queries the native layer to determine the current authorization in effect.

> **Returns**  `Object` a promise which is resolved with the requested authorization status.

##### `requestWhenInUseAuthorization()`

For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to explicitly request permissions via methods like these:<br />
[requestWhenInUseAuthorization](https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization)<br />
[requestAlwaysAuthorization](https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization)<br />
If you are using this plugin on Android devices only, you will never have to use this, nor `requestAlwaysAuthorization`

> **Returns**  `Object` a promise with the result

##### `requestAlwaysAuthorization()`

For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to explicitly request permissions via methods like these:<br />
[requestWhenInUseAuthorization](https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization)<br />
[requestAlwaysAuthorization](https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization)<br />
If you are using this plugin on Android devices only, you will never have to use this, nor `requestWhenInUseAuthorization`

> **Returns**  `Object` a promise with the result

##### `getMonitoredRegions()`

> **Returns**  `Object` a promise which is resolved with an `Array` of `Region` instances that are being monitored by the native layer.

##### `getRangedRegions()`

> **Returns**  `Object` a promise which is resolved with an `Array` of `Region` instances that are being ranged by the native layer.

##### `isRangingAvailable()`

Determines if ranging is available or not, according to the native layer.

> **Returns**  `Object` a promise which is resolved with a `Boolean` indicating whether ranging is available or not.

##### `isMonitoringAvailableForClass(region)`

Determines if region type is supported or not, according to the native layer.

| Param    | Type       | Detail                                                                                                   |
| -------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| region   | `Object`   | An instance of `Region` which will be checked by the operating system.<br />Parameter is **mandatory**.  |

> **Returns**  `Object` a promise which is resolved with a `Boolean` indicating whether the region type is supported or not.

##### `startAdvertising(region, measuredPower)`

Start advertising the specified region.

| Param          | Type       | Detail                                                                                                           |
| -------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| region         | `Object`   | An instance of `Region` which will be advertised by the operating system.<br />Parameter is **mandatory**.       |
| measuredPower  | `Integer`  | if left empty, the device will use it's own default value. Parameter is **optional**.                            |

> **Returns**  `Object` a promise which is resolved as soon as the native layer acknowledged the dispatch of the advertising request.

##### `stopAdvertising()`

Stop advertising as a beacon.

> **Returns**  `Object` a promise which is resolved as soon as the native layer acknowledged the dispatch of the request to stop advertising.

##### `isAdvertising()`

Determines if advertising is currently active, according to the native layer.

> **Returns**  `Object` a promise which is resolved with a `Boolean` indicating whether advertising is active.


### Events

##### `$rootScope.$on('$cordovaBeacon:didDetermineStateForRegion', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:didDetermineStateForRegion'` event.<br />
Callback function can be set using `setCallbackDidDetermineStateForRegion(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |

##### `$rootScope.$on('$cordovaBeacon:didStartMonitoringForRegion', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:didStartMonitoringForRegion'` event.<br />
Callback function can be set using `setCallbackDidStartMonitoringForRegion(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |

##### `$rootScope.$on('$cordovaBeacon:didEnterRegion', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:didEnterRegion'` event.<br />
Callback function can be set using `setCallbackDidEnterRegion(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |

##### `$rootScope.$on('$cordovaBeacon:didExitRegion', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:didExitRegion'` event.<br />
Callback function can be set using `setCallbackDidExitRegion(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |

##### `$rootScope.$on('$cordovaBeacon:didRangeBeaconsInRegion', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:didRangeBeaconsInRegion'` event.<br />
Callback function can be set using `setCallbackDidRangeBeaconsInRegion(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |

##### `$rootScope.$on('$cordovaBeacon:peripheralManagerDidStartAdvertising', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:peripheralManagerDidStartAdvertising'` event.<br />
Callback function can be set using `setCallbackPeripheralManagerDidStartAdvertising(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |

##### `$rootScope.$on('$cordovaBeacon:peripheralManagerDidUpdateState', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:peripheralManagerDidUpdateState'` event.<br />
Callback function can be set using `setCallbackPeripheralManagerDidUpdateState(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |

##### `$rootScope.$on('$cordovaBeacon:didChangeAuthorizationStatus', function(event, pluginResult) {})`

Listens on the `'$cordovaBeacon:didChangeAuthorizationStatus'` event.<br />
Callback function can be set using `setCallbackDidChangeAuthorizationStatus(callback)`.<br />
The callback function will be called in `background` and `foreground` states.

> **Returns**

> | Param        | Type       | Detail                                                                                                               |
> | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
> | event        | `Object`   | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | pluginResult | `Object`   | Plugin result `Object`.                                                                                              |


### Example

```javascript
module.controller('MyCtrl',
  ['$scope', '$rootScope', '$ionicPlatform', '$cordovaBeacon',
   function($scope, $rootScope, $ionicPlatform, $cordovaBeacon) {
  
  var brIdentifier = 'estimote';
  var brUuid = 'b9407f30-f5f8-466e-aff9-25556b57fe6d';
  var brMajor = null;
  var brMinor = null;
  var brNotifyEntryStateOnDisplay = true;
  
  $ionicPlatform.ready(function () {
    
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

    // ========== Events

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

    // =========/ Events
    
  });
  
}]);
```
