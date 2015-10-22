/**
 * @ngdoc service
 * @name ngCordovaMocks.oneSignal
 *
 * @description
 * A service for testing One Signal push notifications features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaOneSignal',  ['$q', function ($q) {
  return {
    init: function (oneSignalId, options, callback) {
      console.log('One Signal Initialized with id: ' + oneSignalId);
    },

    enableInAppAlertNotification: function (bool) {
      console.log('One Signal enableInAppAlertNotification: ' + bool);
    },

    setLogLevel: function () {
    },

    registerForPushNotifications: function () {
    },

    sendTag: function (key, value) {
      console.log('One Signal send tag with: {key: ' + key + ' value: ' + value
      + '}');
    },

    sendTags: function (tags) {
      console.log('One Signal send tags with: ' + tags);
    },

    getTags: function () {
      var d = $q.defer();

      d.resolve([]);

      return d.promise;
    },

    deleteTag: function (tag) {
      console.log('One Signal delete tag with: ' + tag);
    },

    deleteTags: function (tags) {
      console.log('One Signal delete tags with: ' + tags);
    },

    getIds: function (ids) {
      var d = $q.defer();

      d.resolve([]);

      return d.promise;
    },

    enableVibrate: function (bool) {
      console.log('One Signal enable vibrate: ' + bool);
    },

    enableSound: function (bool) {
      console.log('One Signal enable sound: ' + bool);
    },

    enableNotificationsWhenActive: function (bool) {
      console.log('One Signal enableNotificationsWhenActive: ' + bool);
    },

    enableInAppAlertNotification: function (bool) {
      console.log('One Signal enableInAppAlertNotification: ' + bool);
    },

    setSubscription: function (bool) {
      console.log('One Signal setSubscription: ' + bool);
    },

    postNotification: function (notificationObj) {
      var d = $q.defer();

      d.resolve(function() {});

      return d.promise;
    }

  };
}]);
