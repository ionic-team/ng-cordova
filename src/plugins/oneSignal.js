// install   :     cordova plugin add onesignal-cordova-plugin
// link      :     https://github.com/one-signal/OneSignal-Cordova-SDK

angular.module('ngCordova.plugins.oneSignal', [])

  .factory('$cordovaOneSignal', ['$q', '$window', function ($q, $window) {

    return {
      init: function (oneSignalId, options, callback) {
        $window.plugins.OneSignal.init(oneSignalId, options, callback);
      },

      enableInAppAlertNotification: function (bool) {
        $window.plugins.OneSignal.enableInAppAlertNotification(bool);
      },

      setLogLevel: function (logLevel) {
        var defaultLogLevel = {logLevel: 4, visualLevel: 4};
        $window.plugins.OneSignal.setLogLevel(logLevel || defaultLogLevel);
      },

      registerForPushNotifications: function () {
        $window.plugins.OneSignal.registerForPushNotifications();
      },

      sendTag: function (key, value) {
        $window.plugins.OneSignal.sendTag(key, value);
      },

      sendTags: function (tags) {
        $window.plugins.OneSignal.sendTags(tags);
      },

      getTags: function () {
        var d = $q.defer();

        $window.plugins.OneSignal.getTags(function (tags) {
          d.resolve(tags);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      deleteTag: function (tag) {
        $window.plugins.OneSignal.deleteTag(tag);
      },

      deleteTags: function (tags) {
        $window.plugins.OneSignal.deleteTags(tags);
      },

      getIds: function () {
        var d = $q.defer();

        $window.plugins.OneSignal.getIds(function (ids) {
          d.resolve(ids);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      enableVibrate: function (bool) {
        $window.plugins.OneSignal.enableVibrate(bool);
      },

      enableSound: function (bool) {
        $window.plugins.OneSignal.enableSound(bool);
      },

      enableNotificationsWhenActive: function (bool) {
        $window.plugins.OneSignal.enableNotificationsWhenActive(bool);
      },

      setSubscription: function (bool) {
        $window.plugins.OneSignal.setSubscription(bool);
      },

      postNotification: function (notificationObj) {
        var d = $q.defer();

        $window.plugins.OneSignal.postNotification(notificationObj, function (successResponse) {
            d.resolve(successResponse);
          }, function (failedResponse) {
            d.reject(failedResponse);
          }
        );

        return d.promise;
      }
    };
  }]);
