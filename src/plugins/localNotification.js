// install   :  cordova plugin add de.appplant.cordova.plugin.local-notification
// link      :  https://github.com/katzer/cordova-plugin-local-notifications/

angular.module('ngCordova.plugins.localNotification', [])

  .factory('$cordovaLocalNotification', ['$q', '$window', function ($q, $window) {

    return {
      add: function (options, scope) {
        var q = $q.defer();
        $window.plugin.notification.local.add(
          options,
          function (result) {
            q.resolve(result);
          },
          scope);
        return q.promise;
      },

      cancel: function (id, scope) {
        var q = $q.defer();
        $window.plugin.notification.local.cancel(
          id, function (result) {
            q.resolve(result);
          }, scope);

        return q.promise;
      },

      cancelAll: function (scope) {
        var q = $q.defer();

        $window.plugin.notification.local.cancelAll(
          function (result) {
            q.resolve(result);
          }, scope);

        return q.promise;
      },

      isScheduled: function (id, scope) {
        var q = $q.defer();

        $window.plugin.notification.local.isScheduled(
          id,
          function (result) {
            q.resolve(result);
          }, scope);

        return q.promise;
      },

      hasPermission: function (callback, scope) {
        var q = $q.defer();

        $window.plugin.notification.local.hasPermission(
          function (scope, badge) {
            q.resolve(badge);
          }, scope);

        return q.promise;
      },

      promptForPermission: function () {
        $window.plugin.notification.local.promptForPermission();
      },

      getScheduledIds: function (scope) {
        var q = $q.defer();

        $window.plugin.notification.local.getScheduledIds(
          function (result) {
            q.resolve(result);
          }, scope);

        return q.promise;
      },

      isTriggered: function (id, scope) {
        var q = $q.defer();

        $window.plugin.notification.local.isTriggered(
          id, function (result) {
            q.resolve(result);
          }, scope);

        return q.promise;
      },

      getTriggeredIds: function (scope) {
        var q = $q.defer();

        $window.plugin.notification.local.getTriggeredIds(
          function (result) {
            q.resolve(result);
          }, scope);

        return q.promise;
      },

      getDefaults: function () {
        return $window.plugin.notification.local.getDefaults();
      },

      setDefaults: function (Object) {
        $window.plugin.notification.local.setDefaults(Object);
      },

      onadd: function () {
        return $window.plugin.notification.local.onadd;
      },

      ontrigger: function () {
        return $window.plugin.notification.local.ontrigger;
      },

      onclick: function () {
        return $window.plugin.notification.local.onclick;
      },

      oncancel: function () {
        return $window.plugin.notification.local.oncancel;
      }
    };
  }]);
