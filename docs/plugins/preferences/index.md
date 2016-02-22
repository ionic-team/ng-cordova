---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaPreferences
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/preferences.js
official-docs: https://github.com/apla/me.apla.cordova.app-preferences
icon-apple: true
icon-android: true
icon-windows: true
---


Accessing application preferences with the [app-preferences](https://github.com/apla/me.apla.cordova.app-preferences) plugin.

```
cordova plugin add cordova-plugin-app-preferences
```

### Methods

##### `store(key, value, dict)`

Store the preference of the given dictionary and key.

| Param              | Required | Type     | Detail                                                                                                                                                                                                              |
| ------------------ | -------- | -------- | ---------------------------------------- |
| key                | true     | `String` | The key of the preference to store.      |
| value              | true     | `Any`    | The value to store.                      |
| dict               | false    | `String` | The dictionary on which store the value. |

> **Returns** a promise object.


##### `fetch(key, dict)`

Fetch the preference by the given dictionary and key.

| Param              | Required | Type     | Detail                                                                                                                                                                                                              |
| ------------------ | -------- | -------- | ------------------------------------------ |
| key                | true     | `String` | The key of the preference to fetch.        |
| dict               | false    | `String` | The dictionary from which fetch the value. |

> **Returns** a promise object.


##### `remove(key, dict)`

Remove the preference by the given dictionary and key.

| Param              | Required | Type     | Detail                                                                                                                                                                                                              |
| ------------------ | -------- | -------- | ------------------------------------------- |
| key                | true     | `String` | The key of the preference to remove.        |
| dict               | false    | `String` | The dictionary from which remove the value. |

> **Returns** a promise object.


##### `show()`

Show the application preferences. For details on this, check how to [show preference pane](https://github.com/apla/me.apla.cordova.app-preferences#show-preference-pane).

> **Returns** a promise object.


### Example

```javascript
module.controller('MyCtrl', function($scope, $cordovaPreferences) {
  //Examples without dictionaries
  $scope.store = function() {
    $cordovaPreferences.store('key', 'myMagicValue')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.fetch = function() {
    $cordovaPreferences.fetch('key')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.remove = function() {
    $cordovaPreferences.remove('key')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.show = function() {
    $cordovaPreferences.show()
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };


  //Examples with dictionaries
  $scope.storeInDict = function() {
    $cordovaPreferences.store('key', 'myDictMagicValue', 'dict')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.fetchFromDict = function() {
    $cordovaPreferences.fetch('key', 'dict')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };

  $scope.removeFromDict = function() {
    $cordovaPreferences.remove('key', 'dict')
      .success(function(value) {
        alert("Success: " + value);
      })
      .error(function(error) {
        alert("Error: " + error);
      })
  };
});
```
