// install   :  cordova plugin add de.appplant.cordova.plugin.local-notification
// link      :  https://github.com/katzer/cordova-plugin-local-notifications/

angular.module('ngCordova.plugins.localNotification', [])

  .factory('$cordovaLocalNotification', ['$q', '$window', function ($q, $window) {

    var cordovaLocalNotification = {};


    cordovaLocalNotification.add = function (options, scope) {
      var q = $q.defer();
      $window.plugin.notification.local.add(
        options,
        function (result) {
          q.resolve(result);
        },
        scope);
      return q.promise;
    };

    cordovaLocalNotification.cancel: function (id, scope) {
      var q = $q.defer();
      $window.plugin.notification.local.cancel(
        id, function (result) {
          q.resolve(result);
        }, scope);

      return q.promise;
    };

    cordovaLocalNotification.cancelAll: function (scope) {
      var q = $q.defer();

      $window.plugin.notification.local.cancelAll(
        function (result) {
          q.resolve(result);
        }, scope);

      return q.promise;
    };

    cordovaLocalNotification.isScheduled: function (id, scope) {
      var q = $q.defer();

      $window.plugin.notification.local.isScheduled(
        id,
        function (result) {
          q.resolve(result);
        }, scope);

      return q.promise;
    };

    cordovaLocalNotification.hasPermission: function (scope) {
      var q = $q.defer();

      $window.plugin.notification.local.hasPermission(
        function (badge) {
          q.resolve(badge);
        }, scope);

      return q.promise;
    };

    cordovaLocalNotification.promptForPermission: function () {
      $window.plugin.notification.local.promptForPermission();
    };

    cordovaLocalNotification.getScheduledIds: function (scope) {
      var q = $q.defer();

      $window.plugin.notification.local.getScheduledIds(
        function (result) {
          q.resolve(result);
        }, scope);

      return q.promise;
    };

    cordovaLocalNotification.isTriggered: function (id, scope) {
      var q = $q.defer();

      $window.plugin.notification.local.isTriggered(
        id, function (result) {
          q.resolve(result);
        }, scope);

      return q.promise;
    };

    cordovaLocalNotification.getTriggeredIds: function (scope) {
      var q = $q.defer();

      $window.plugin.notification.local.getTriggeredIds(
        function (result) {
          q.resolve(result);
        }, scope);

      return q.promise;
    };

    cordovaLocalNotification.getDefaults: function () {
      return $window.plugin.notification.local.getDefaults();
    };

    cordovaLocalNotification.setDefaults: function (Object) {
      $window.plugin.notification.local.setDefaults(Object);
    };

    cordovaLocalNotification.onadd: function (fn) {
      $window.plugin.notification.local.onadd = fn;
      return cordovaLocalNotification;
    };

    cordovaLocalNotification.ontrigger: function (fn) {
      $window.plugin.notification.local.ontrigger = fn;
      return cordovaLocalNotification;
    };

    cordovaLocalNotification.onclick: function (fn) {
      $window.plugin.notification.local.onclick = fn;
      return cordovaLocalNotification;
    };

    cordovaLocalNotification.oncancel: function (fn) {
      $window.plugin.notification.local.oncancel = fn;
      return cordovaLocalNotification;
    };

    return cordovaLocalNotification;
  
  }]);
