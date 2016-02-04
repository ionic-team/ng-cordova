// install   :      cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
// link      :      https://github.com/dpa99c/phonegap-launch-navigator

/* globals launchnavigator: true */
angular.module('ngCordova.plugins.launchNavigator', [])

  .factory('$cordovaLaunchNavigator', ['$q', function ($q) {

    return {
      navigate: function (destination, start, options) {
        var q = $q.defer();
        launchnavigator.navigate(
          destination,
          start,
          function (){
            q.resolve();
          },
          function (error){
            q.reject(error);
          },
		  options);
        return q.promise;
      }
    };

  }]);
