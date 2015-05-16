---
layout: docs-plugins
title: ngCordova - Documentation and Examples - by the Ionic Framework Team

plugin-name: $cordovaHealthKit
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/healthKit.js
official-docs: https://github.com/Telerik-Verified-Plugins/HealthKit
icon-apple: true
icon-android: false
icon-windows: false
---

<img src="/img/plugins/healthkit/hk.png" style="width: 128px">

Cordova Plugin For accessing and modifying HealthKit data in iOS apps (iOS only).

**Note: make sure to enable HealthKit entitlement through X Code in the Capabilities settings for your app.**

<img src="/img/plugins/healthkit/entitlement.png" style="max-width: 100%">

```bash
cordova plugin add https://github.com/Telerik-Verified-Plugins/HealthKit.git
```


#### Methods

##### `isAvailable()`

Check if HealthKit is available.

#### Example

```javascript
module.controller('ThisCtrl', function($scope, $cordovaHealthKit) {
  $cordovaHealthKit.isAvailable().then(function(yes) {
    // Is available
  }, function(no) {
    // Is not available
  });
})
```

##### `requestAuthorization(readTypes, writeTypes)`

Request authorization to the specified data types for reading and writing
in HealthKit.

| Param        | Type           |
| ------------ |----------------|
| readTypes    | `Array`        |
| writeTypes   | `Array`        |


readTypes and writeTypes are arrays of [HealthKit Constants](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Constants/). See the [iOS Docs](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Constants/) for the full list.

#### Example

```javascript
module.controller('ThisCtrl', function($scope, $cordovaHealthKit) {

  // Requests read privileges for DOB, active energy burned, and height, and write privs for
  // the same plus cycling

  $cordovaHealthKit.requestAuthorization(
    [
      'HKCharacteristicTypeIdentifierDateOfBirth',
      'HKQuantityTypeIdentifierActiveEnergyBurned',
      'HKQuantityTypeIdentifierHeight'
    ],
    [
      'HKQuantityTypeIdentifierActiveEnergyBurned',
      'HKQuantityTypeIdentifierHeight',
      'HKQuantityTypeIdentifierDistanceCycling'
    ]
  ).then(function(success) {
    $scope.granted = true;
  }, function(err) {
    $scope.granted = false;
  });
})
```

##### `readDateOfBirth()`

Read the Date of Birth field from HealthKit.

#### Example

```javascript
$cordovaHealthKit.readDateOfBirth().then(function(dob) {
  // value
}, function(err) {
});
```

##### `readGender()`

Read the user's Gender.

#### Example

```javascript
$cordovaHealthKit.readGender().then(function(gender) {
  // value
}, function(err) {
});
```

##### `readWeight(units)`

Read the most recent Weight data point from HealthKit.

| Param        | Type           |
| ------------ |----------------|
| units        | `unit_string`  |

See the [HKUnit Class Reference](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKUnit_Class/index.html#//apple_ref/occ/clm/HKUnit/unitFromString:) for possible units. Defaults to `'lb'`

#### Example

```javascript
$cordovaHealthKit.readWeight('kg').then(function(v) {
  /*
  v is of the form:

  {
    'unit': 'kg',
    'value': '200',
    'date': '2014-11-22 09:33:00'
  }
  */
}, function(err) {
});
```

##### `saveWeight(value, units, date)`

Save a weight data point with the given value, units, and date of sample.

| Param        | Type           |
| ------------ |----------------|
| value        | `Number`       |
| units        | `unit_string`  |
| date         | `Date`         |

See the [HKUnit Class Reference](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKUnit_Class/index.html#//apple_ref/occ/clm/HKUnit/unitFromString:) for possible units. Defaults to `'lb'`

Date is a JS Date, defaults to the current time.

#### Example

```javascript
$cordovaHealthKit.saveWeight(180, 'kg').then(function(v) {
}, function(err) {
});
```

##### `readHeight(units)`

Read the most recent Height data point from HealthKit.

| Param        | Type           |
| ------------ |----------------|
| units        | `unit_string`  |

See the [HKUnit Class Reference](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKUnit_Class/index.html#//apple_ref/occ/clm/HKUnit/unitFromString:) for possible units. Defaults to `'in'`

#### Example

```javascript
$cordovaHealthKit.readHeight('cm').then(function(v) {
  /*
  v is of the form:

  {
    'unit': 'cm',
    'value': '200',
    'date': '2014-11-22 09:33:00'
  }
  */
}, function(err) {
});
```

##### `saveHeight(value, units, date)`

Save a height data point with the given value, units, and date of sample.

| param        | type           |
| ------------ |----------------|
| value        | `number`       |
| units        | `unit_string`  |
| date         | `Date`         |

See the [HKUnit Class Reference](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKUnit_Class/index.html#//apple_ref/occ/clm/HKUnit/unitFromString:) for possible units. Defaults to `'lb'`

Date is a JS Date, defaults to the current time.

#### Example

```javascript
$cordovaHealthKit.saveHeight(180, 'cm').then(function(v) {
}, function(err) {
});
```

##### `findWorkouts()`

Query for all workout data.


#### Example

```javascript
$cordovaHealthKit.findWorkouts().then(function(v) {
}, function(err) {
});
```

##### `saveWorkout(workout)`

Save a workout.

| param        | type           |
| ------------ |----------------|
| workout      | `Object`       |


Workout must be of the form:

```js
{
  'activityType': 'HKWorkoutActivityTypeCycling', // HKWorkoutActivityType constant (https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType)
  'quantityType': 'HKQuantityTypeIdentifierDistanceCycling',
  'startDate': new Date(), // mandatory
  'endDate': null, // optional, use either this or duration
  'duration': 3600, // in seconds, optional, use either this or endDate
  'energy': 300, //
  'energyUnit': 'kcal', // J|cal|kcal
  'distance': 11, // optional
  'distanceUnit': 'km' // probably useful with the former param
  // 'extraData': "", // Not sure how necessary this is
},
```

See the [Activity Type](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType) and [HK Constants](https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Constants/index.html#//apple_ref/doc/uid/TP40014710) reference for more info.

#### Example

```javascript
$cordovaHealthKit.saveWorkout(
  {
    'activityType': 'HKWorkoutActivityTypeCycling', // HKWorkoutActivityType constant (https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType)
    'quantityType': 'HKQuantityTypeIdentifierDistanceCycling',
    'startDate': new Date(), // mandatory
    'endDate': null, // optional, use either this or duration
    'duration': 3600, // in seconds, optional, use either this or endDate
    'energy': 300, //
    'energyUnit': 'kcal', // J|cal|kcal
    'distance': 11, // optional
    'distanceUnit': 'km' // probably useful with the former param
    // 'extraData': "", // Not sure how necessary this is
  }
).then(function(v) {
}, function(err) {
});
```
