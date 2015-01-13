---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaPreferences
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/preferences.js
official-docs: https://github.com/dferrell/plugins-application-preferences
icon-apple: true
icon-android: false
icon-windows: false
---


Accessing application preference with the [application-preferences](https://github.com/dferrell/plugins-application-preferences) plugin.

```
cordova plugin add https://github.com/dferrell/plugins-application-preferences.git
```


```javascript
module.controller('MyCtrl', function($scope, $cordovaPreferences) {

  $scope.getName = function () {
    $cordovaPreferences.get('name_identifier').then(function (name) {
      $scope.name = name;
    })
  };

  $scope.setName = function () {
    $cordovaPreferences.set('name_identifier', 'homer').then(function () {
      console.log('successfully saved!');
    })
  };
});
```
