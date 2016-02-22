---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaSQLite
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/sqlite.js
official-docs: https://github.com/litehelpers/Cordova-sqlite-storage
icon-apple: true
icon-android: true
icon-windows: true
---

Native interface to sqlite in a Cordova/PhoneGap plugin for Android/iOS/WP(8), with HTML5 Web SQL API [View Docs](https://github.com/brodysoft/Cordova-SQLitePlugin/blob/master/README.md)

```
cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaSQLite) {

  var db = $cordovaSQLite.openDB({ name: "my.db" });

  // for opening a background db:
  var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });

  $scope.execute = function() {
    var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
    $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
      console.log("insertId: " + res.insertId);
    }, function (err) {
      console.error(err);
    });
  };

});
```