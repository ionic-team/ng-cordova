// install  :     cordova plugin add https://github.com/glanzkinder/SEEM-Beacon-Manager-Cordova-SDK
// link     :     https://github.com/glanzkinder/SEEM-Beacon-Manager-Cordova-SDK

angular.module('ngCordova.plugins.seem', [])

  .factory('$cordovaSeem', ['$q', function ($q) {

    return {
      setApiKey: function(key) {
        return SEEM.setApiKey(key);
      },
      setApiPort: function(port) {
        return SEEM.setApiPort(port);
      },
      setApiUrl: function(url) {
        return SEEM.setApiUrl(url);
      },
      setApiSslEnabled: function(sslEnabled) {
        return SEEM.setApiSslEnabled(sslEnabled)
      },
      setAutoUuidFetch: function(autoUuidFetch) {
        return SEEM.setAutoUuidFetch(autoUuidFetch);
      },
      setPayload: function(payload) {
        return SEEM.setPayload(payload);
      },
      onEnterBeacon: function() {
        var q = $q.defer();

        SEEM.onEnterBeacon(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      onExitBeacon: function() {
        var q = $q.defer();

        SEEM.onExitBeacon(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      onChangeBeaconProximity: function() {
        var q = $q.defer();

        SEEM.onChangeBeaconProximity(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      onBeaconRangeDidChanged: function() {
        var q = $q.defer();

        SEEM.onBeaconRangeDidChanged(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      onMessageAction: function() {
        var q = $q.defer();

        SEEM.onMessageAction(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      onCustomAction: function() {
        var q = $q.defer();

        SEEM.onCustomAction(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      onLinkAction: function() {
        var q = $q.defer();

        SEEM.onLinkAction(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      getAllMonitoredBeaconRegions: function() {
        var q = $q.defer();

        SEEM.getAllMonitoredBeaconRegions(function(result) {
          q.notify(result);
        });

        return q.promise;
      },
      startListeningToBeaconRegion: function(uuid, major, minor, notifyEntryStateOnDisplay) {
        var q = $q.defer();

        SEEM.startListeningToBeaconRegion(function(result) {
          q.resolve(result);
        }, function (result) {
          q.reject(result);
        }, uuid, major, minor, notifyEntryStateOnDisplay);

        return q.promise;
      },
      stopListeningToBeaconRegion: function(uuid, major, minor, notifyEntryStateOnDisplay) {
        var q = $q.defer();

        SEEM.stopListeningToBeaconRegion(function(result) {
          q.resolve(result);
        }, function (result) {
          q.reject(result);
        }, uuid, major, minor, notifyEntryStateOnDisplay);

        return q.promise;
      }
    };
  }]);
