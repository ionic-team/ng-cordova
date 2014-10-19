// install   :
// link      :

angular.module('ngCordova.plugins.localNotification', [])

  .factory('$cordovaLocalNotification', ['$q', '$window', '$cordova', function ($q, $window, $cordova) {

    return {
      add: function (options, scope) {
        var q = $q.defer();
        $cordova.ready().then(function () {

          $window.plugin.notification.local.add(
            options,
            function (result) {
              q.resolve(result);
            },
            scope);
        });
        return q.promise;
      },

      cancel: function (id, scope) {
        var q = $q.defer();
        $cordova.ready().then(function () {
          $window.plugin.notification.local.cancel(
            id, function (result) {
              q.resolve(result);
            }, scope);
        });

        return q.promise;
      },

      cancelAll: function (scope) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.plugin.notification.local.cancelAll(
            function (result) {
              q.resolve(result);
            }, scope);
        });

        return q.promise;
      },

      isScheduled: function (id, scope) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.plugin.notification.local.isScheduled(
            id,
            function (result) {
              q.resolve(result);
            }, scope);
        });

        return q.promise;
      },

      getScheduledIds: function (scope) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.plugin.notification.local.getScheduledIds(
            function (result) {
              q.resolve(result);
            }, scope);
        });

        return q.promise;
      },

      isTriggered: function (id, scope) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.plugin.notification.local.isTriggered(
            id, function (result) {
              q.resolve(result);
            }, scope);
        });

        return q.promise;
      },

      getTriggeredIds: function (scope) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.plugin.notification.local.getTriggeredIds(
            function (result) {
              q.resolve(result);
            }, scope);
        });

        return q.promise;
      },

      getDefaults: function () {
        $cordova.ready().then(function () {
          return $window.plugin.notification.local.getDefaults();
        });
      },

      setDefaults: function (Object) {
        $cordova.ready().then(function () {
          $window.plugin.notification.local.setDefaults(Object);
        });
      },

      onadd: function () {
        $cordova.ready().then(function () {
          return $window.plugin.notification.local.onadd;
        });
      },

      ontrigger: function () {
        $cordova.ready().then(function () {
          return $window.plugin.notification.local.ontrigger;
        });
      },

      onclick: function () {
        $cordova.ready().then(function () {
          return $window.plugin.notification.local.onclick;
        });
      },

      oncancel: function () {
        $cordova.ready().then(function () {
          return $window.plugin.notification.local.oncancel;
        });
      }
    }
  }
  ]);
