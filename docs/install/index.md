---
layout: docs-install
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

## Install

You can use `bower` to install ngCordova like so *or* **[download the zip file here](https://github.com/driftyco/ng-cordova/archive/master.zip)**, and locate the `.js` file in the dist folder


``` bash
$ bower install ngCordova
```

Include `ng-cordova.js` ***or*** `ng-cordova.min.js` in your `index.html` file **before** `cordova.js`

```html
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```

Then, include `ngCordova` as a dependency in your angular module:

```javascript
angular.module('myApp', ['ngCordova'])
```

Before each plugin you must check if your device has fully loaded, and if the plugins are available using a native cordova event called `deviceready`. Implement it like so:

```javascript
document.addEventListener("deviceready", function () {
  $cordovaPlugin.someFunction().then(success, error);
}, false);

// OR with Ionic

$ionicPlatform.ready(function() {
  $cordovaPlugin.someFunction().then(success, error);
});
```

Now you can add plugins to your cordova project, and use the ngCordova API detailed below:

```bash
cordova plugin add ...
```
