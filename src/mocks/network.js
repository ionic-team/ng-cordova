/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaNetwork
 *
 * @description
 * A service for testing networked fetures
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaNetwork', function () {
  var connectionType = 'WiFi connection';
  var isConnected = true;

  return {
    /**
     * @ngdoc property
     * @name connectionType
     * @propertyOf ngCordovaMocks.cordovaNetwork
     *
     * @description
     * They type of connection. Values should match those found at
     * https://github.com/apache/cordova-plugin-network-information
     * This property should only be used in automated tests.
     **/
    connectionType: connectionType,

    /**
     * @ngdoc property
     * @name isConnected
     * @propertyOf ngCordovaMocks.cordovaNetwork
     *
     * @description
     * A flag that signals whether the app is connected to a network.
     * This property should only be used in automated tests.
     **/
    isConnected: isConnected,

    getNetwork: function () {
      return this.connectionType;
    },

    isOnline: function () {
      return this.isConnected;
    },

    isOffline: function () {
      return !this.isConnected;
    }
  };
});
