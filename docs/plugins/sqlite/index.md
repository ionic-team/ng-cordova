---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

<div class="anchor-row">
  <h3><a href="#SQLite"><code>$cordovaSQLite</code></a></h3>
  <div class="button-row">
    <a class="btn-anchor" href="https://github.com/driftyco/ng-cordova/blob/master/src/plugins/SQLite.js">Source</a>
    <a class="btn-anchor" href="https://github.com/brodysoft/Cordova-SQLitePlugin">Official Docs</a>
  </div>
  <div class="icon-row">
    <i class="icon ion-social-apple"></i>
    <i class="icon ion-social-android"></i>
    <i class="icon ion-social-windows"></i>
  </div>
</div>

Native interface to sqlite in a Cordova/PhoneGap plugin for Android/iOS/WP(8), with HTML5 Web SQL API [View Docs](https://github.com/brodysoft/Cordova-SQLitePlugin/blob/master/README.md)

```
cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin.git
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