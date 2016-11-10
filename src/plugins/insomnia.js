// install  :     cordova plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
// link     :     https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin
angular.module('ngCordova.plugins.insomnia', [])
  .factory('$cordovaInsomnia', ['$q', '$window', function ($q, $window) {
    return {
      keepAwake: function () {
        if (!$window.plugins || !$window.plugins.insomnia || !$window.plugins.insomnia.keepAwake) {
          var q = $q.defer();
          q.resolve(null);
          return q.promise;
        }
        
        return $window.plugins.insomnia.keepAwake();
      },
      allowSleepAgain: function () {
        if (!$window.plugins || !$window.plugins.insomnia || !$window.plugins.insomnia.allowSleepAgain) {
          var q = $q.defer();
          q.resolve(null);
          return q.promise;
        }
        
        return $window.plugins.insomnia.allowSleepAgain();
      }
    };
  }]);
