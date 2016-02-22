---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaLocalNotification
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/localNotification.js
official-docs: https://github.com/katzer/cordova-plugin-local-notifications
icon-apple: true
icon-android: true
icon-windows: true
---

The essential purpose of local notifications is to enable an application to inform its users that it has something for them — for example, a message or an upcoming appointment — when the application isn’t running in the foreground.
They are scheduled by an application and delivered on the same device.

```
cordova plugin add https://github.com/katzer/cordova-plugin-local-notifications.git
```


### Methods (Scheduling)

[Scheduling documentation](https://github.com/katzer/cordova-plugin-local-notifications/wiki/04.-Scheduling)

##### `schedule(options, scope)`

Schedule a single or multiple local notifications at once.<br />
`add(options, scope)` is alias method.<br />
For notification properties see: [Scheduling Interface](https://github.com/katzer/cordova-plugin-local-notifications/wiki/04.-Scheduling#interface)

| Param      | Type                  | Detail     |
| ---------- | --------------------- | ---------- |
| options    | `Object` or `Array` | Single notification properties as an `Object` or `Array` of multiple notification properties.<br />Parameter is **mandatory**. |
| scope      | `Object`             | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`


### Methods (Update)

[Update documentation](https://github.com/katzer/cordova-plugin-local-notifications/wiki/05.-Update)

##### `update(options, scope)`

Update a single or multiple local notifications at once.<br />
For properties that can be updated see: [Update Interface](https://github.com/katzer/cordova-plugin-local-notifications/wiki/05.-Update#interface)

| Param      | Type                  | Detail     |
| ---------- | --------------------- | ---------- |
| options    | `Object` or `Array` | Single notification properties as an `Object` or `Array` of multiple notification properties.<br />Parameter is **mandatory**. |
| scope      | `Object`             | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`


### Methods (Clear)

[Clear documentation](https://github.com/katzer/cordova-plugin-local-notifications/wiki/06.-Clear)

##### `clear(ids, scope)`

Clear a single or multiple local notifications.

| Param      | Type                   | Detail     |
| ---------- | ---------------------- | ---------- |
| ids        | `Integer` or `Array` | Single notification id as an `Integer` or `Integer array` of multiple notification ids to clear.<br />Parameter is **mandatory**. |
| scope      | `Object`              | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`

##### `clearAll(scope)`

Clear all local notifications.

| Param      | Type                  | Detail     |
| ---------- | --------------------- | ---------- |
| scope      | `Object`             | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`


### Methods (Cancelation)

[Cancelation documentation](https://github.com/katzer/cordova-plugin-local-notifications/wiki/07.-Cancelation)

##### `cancel(ids, scope)`

Cancel a single or multiple local notifications.

| Param      | Type                   | Detail     |
| ---------- | ---------------------- | ---------- |
| ids        | `Integer` or `Array` | Single notification id as an `Integer` or `Integer array` of multiple notification ids to cancel.<br />Parameter is **mandatory**. |
| scope      | `Object`              | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`

##### `cancelAll(scope)`

Cancel all local notifications.

| Param      | Type                  | Detail     |
| ---------- | --------------------- | ---------- |
| scope      | `Object`             | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`


### Methods (Querying)

[Querying documentation](https://github.com/katzer/cordova-plugin-local-notifications/wiki/08.-Querying)

##### `isPresent(id, scope)`
##### `isScheduled(id, scope)`
##### `isTriggered(id, scope)`

Querying for existence of a single local notification by id and state.

| Param      | Type       | Detail     |
| ---------- | ---------- | ---------- |
| id         | `Integer` | Notification id to query.<br />Parameter is **mandatory**. |
| scope      | `Object`  | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`

##### `getAllIds(scope)` or `getIds(scope)`
##### `getScheduledIds(scope)`
##### `getTriggeredIds(scope)`

Querying for notification ids by state.

| Param      | Type       | Detail     |
| ---------- | ---------- | ---------- |
| scope      | `Object`  | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`

##### `get(ids, scope)`
##### `getScheduled(ids, scope)`
##### `getTriggered(ids, scope)`

Querying for notification properties by ids and state.

| Param      | Type       | Detail     |
| ---------- | ---------- | ---------- |
| ids        | `Integer` or `Array` | Single notification id as an `Integer` or `Integer array` of multiple notification ids to query.<br />Parameter is **mandatory**. |
| scope      | `Object`  | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`

##### `getAll(scope)`
##### `getAllScheduled(scope)`
##### `getAllTriggered(scope)`

Querying for notification properties by state.

| Param      | Type       | Detail     |
| ---------- | ---------- | ---------- |
| scope      | `Object`  | Scope of the method. Parameter is **optional**.  |

> **Returns**  `Object`


### Methods (Permissions)

##### `hasPermission(scope)`

Determine permission to show local notifications.

| Param      | Type       | Detail     |
| ---------- | ---------- | ---------- |
| scope      | `Object`  | Scope of the method. Parameter is **optional**. |

> **Returns**  `Object`

##### `registerPermission(scope)`

Register permission to show local notifications.<br />
`promptForPermission(scope)` is alias method.

| Param      | Type       | Detail     |
| ---------- | ---------- | ---------- |
| scope      | `Object`  | Scope of the method. Parameter is **optional**. |

> **Returns**  `Object`


### Methods (Defaults)

##### `setDefaults(Object)`

Set default settings.

| Param      | Type      | Detail     |
| ---------- | --------- | ---------- |
| Object     | `Object` | Default settings as an `Object`.<br />Parameter is **mandatory**. |

##### `getDefaults()`

Get default settings.

> **Returns**  `Object`


### Events

[Events documentation](https://github.com/katzer/cordova-plugin-local-notifications/wiki/09.-Events)

##### `$rootScope.$on('$cordovaLocalNotification:schedule', function(event, notification, state) {})`

Listens on the `'$cordovaLocalNotification:schedule'` event, which is fired when local notification was scheduled.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | notification | `Object` | Notification `Object`. |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |

##### `$rootScope.$on('$cordovaLocalNotification:trigger', function(event, notification, state) {})`

Listens on the `'$cordovaLocalNotification:trigger'` event, which is fired when local notification was triggered.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | notification | `Object` | Notification `Object`. |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |

##### `$rootScope.$on('$cordovaLocalNotification:update', function(event, notification, state) {})`

Listens on the `'$cordovaLocalNotification:update'` event, which is fired when local notification was updated.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | notification | `Object` | Notification `Object`. |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |

##### `$rootScope.$on('$cordovaLocalNotification:clear', function(event, notification, state) {})`

Listens on the `'$cordovaLocalNotification:clear'` event, which is fired when local notification was cleared from the notification center.<br />
The `clear` and `clearall` events will not be called when done from outside the app on iOS.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | notification | `Object` | Notification `Object`. |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |

##### `$rootScope.$on('$cordovaLocalNotification:clearall', function(event, state) {})`

Listens on the `'$cordovaLocalNotification:clearall'` event, which is fired when all local notifications were cleared from the notification center.<br />
The `clear` and `clearall` events will not be called when done from outside the app on iOS.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |

##### `$rootScope.$on('$cordovaLocalNotification:cancel', function(event, notification, state) {})`

Listens on the `'$cordovaLocalNotification:cancel'` event, which is fired when local notification was canceled.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | notification | `Object` | Notification `Object`. |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |

##### `$rootScope.$on('$cordovaLocalNotification:cancelall', function(event, state) {})`

Listens on the `'$cordovaLocalNotification:cancelall'` event, which is fired when all local notifications were canceled.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |

##### `$rootScope.$on('$cordovaLocalNotification:click', function(event, notification, state) {})`

Listens on the `'$cordovaLocalNotification:click'` event, which is fired when local notification was clicked.<br />
The `click` event will also be called after *deviceready* if the app wasn't running.

> **Returns**

> | Param        | Type      | Detail     |
> | ------------ | --------- | ---------- |
> | event        | `Object` | Angular event from `$broadcast` - see [AngularJS docs](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on). |
> | notification | `Object` | Notification `Object`. |
> | state        | `String` | Application's state as a `String`.<br />Possible values are: `foreground` or `background`. |


### Example

```javascript
module.controller('MyCtrl',
  ['$scope', '$rootScope', '$ionicPlatform', '$cordovaLocalNotification',
   function($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification) {
  
  $ionicPlatform.ready(function () {
    
    // ========== Scheduling
    
    $scope.scheduleSingleNotification = function () {
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Title here',
        text: 'Text here',
        data: {
          customProperty: 'custom value'
        }
      }).then(function (result) {
        // ...
      });
    };
    
    $scope.scheduleMultipleNotifications = function () {
      $cordovaLocalNotification.schedule([
        {
          id: 1,
          title: 'Title 1 here',
          text: 'Text 1 here',
          data: {
            customProperty: 'custom 1 value'
          }
        },
        {
          id: 2,
          title: 'Title 2 here',
          text: 'Text 2 here',
          data: {
            customProperty: 'custom 2 value'
          }
        },
        {
          id: 3,
          title: 'Title 3 here',
          text: 'Text 3 here',
          data: {
            customProperty: 'custom 3 value'
          }
        }
      ]).then(function (result) {
        // ...
      });
    };
    
    $scope.scheduleDelayedNotification = function () {
      var now = new Date().getTime();
      var _10SecondsFromNow = new Date(now + 10 * 1000);
      
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Title here',
        text: 'Text here',
        at: _10SecondsFromNow
      }).then(function (result) {
        // ...
      });
    };
    
    $scope.scheduleEveryMinuteNotification = function () {
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Title here',
        text: 'Text here',
        every: 'minute'
      }).then(function (result) {
        // ...
      });
    };
    
    // =========/ Scheduling
    
    // ========== Update
    
    $scope.updateSingleNotification = function () {
      $cordovaLocalNotification.update({
        id: 1,
        title: 'Title - UPDATED',
        text: 'Text - UPDATED'
      }).then(function (result) {
        // ...
      });
    };
    
    $scope.updateMultipleNotifications = function () {
      $cordovaLocalNotification.update([
        {
          id: 1,
          title: 'Title 1 - UPDATED',
          text: 'Text 1 - UPDATED'
        },
        {
          id: 2,
          title: 'Title 2 - UPDATED',
          text: 'Text 2 - UPDATED'
        },
        {
          id: 3,
          title: 'Title 3 - UPDATED',
          text: 'Text 3 - UPDATED'
        }
      ]).then(function (result) {
        // ...
      });
    };
    
    // =========/ Update
    
    // ========== Cancelation
    
    $scope.cancelSingleNotification = function () {
      $cordovaLocalNotification.cancel(1).then(function (result) {
        // ...
      });
    };
    
    $scope.cancelMultipleNotifications = function () {
      $cordovaLocalNotification.cancel([1, 2]).then(function (result) {
        // ...
      });
    };
    
    $scope.cancelAllNotifications = function () {
      $cordovaLocalNotification.cancelAll().then(function (result) {
        // ...
      });
    };
    
    // =========/ Cancelation
    
    // ========== Events
    
    $rootScope.$on('$cordovaLocalNotification:schedule',
    function (event, notification, state) {
      // ...
    });
    
    $rootScope.$on('$cordovaLocalNotification:trigger',
    function (event, notification, state) {
      // ...
    });
    
    $rootScope.$on('$cordovaLocalNotification:update',
    function (event, notification, state) {
      // ...
    });
    
    $rootScope.$on('$cordovaLocalNotification:clear',
    function (event, notification, state) {
      // ...
    });
    
    $rootScope.$on('$cordovaLocalNotification:clearall',
    function (event, state) {
      // ...
    });
    
    $rootScope.$on('$cordovaLocalNotification:cancel',
    function (event, notification, state) {
      // ...
    });
    
    $rootScope.$on('$cordovaLocalNotification:cancelall',
    function (event, state) {
      // ...
    });
    
    $rootScope.$on('$cordovaLocalNotification:click',
    function (event, notification, state) {
      // ...
    });
    
    // =========/ Events
    
  });
  
}]);
```
