---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#Preferences"><code>$cordovaPreferences</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/preferences.js">Source</a>
    <a class="btn-anchor" href="https://github.com/dferrell/plugins-application-preferences">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
  </div>
</div>

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
    $cordovaPreferences.get('name_identifier', 'homer').then(function () {
      console.log('successfully saved!');
    })
  };
});
```
