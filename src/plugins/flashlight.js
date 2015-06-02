// install   :     cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
// link      :     https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin

angular.module('ngCordova.plugins.flashlight', [])

  .factory('$cordovaFlashlight', ['$q', '$window', function ($q, $window) {
    
    /**
     * Wraps a call to the plugin in a promise, and handles
     * if the plugin is missing by rejecting the promise chain.
     */
    function willCallFlashlightPlugin(action) {
      var q = $q.defer();
      try {
        $window.plugins.flashlight[action](q.resolve, q.reject);
      } catch (e) {
        q.reject(e);
      }
      return q.promise;
    }

    return {
      available: function () {
        return willCallFlashlightPlugin("available");
      },

      switchOn: function () {
        return willCallFlashlightPlugin("switchOn");
      },

      switchOff: function () {
        return willCallFlashlightPlugin("switchOff");
      },

      toggle: function () {
        return willCallFlashlightPlugin("toggle");
      }
    };
  }]);
