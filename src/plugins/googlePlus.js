// install  :     cordova plugin add nl.x-services.plugins.googleplus
// link     :     https://github.com/EddyVerbruggen/cordova-plugin-googleplus

  angular.module('ngCordova.plugins.googleplus', [])

  .factory('$cordovaGooglePlus', ['$q', '$window', function ($q, $window) {

    return {
      login: function(iosKey){
          if(iosKey === undefined){
            iosKey = {};
          }
          var q = $q.defer();
          $window.plugins.googleplus.login(
          {
            'iOSApiKey': iosKey
            // there is no API key for Android; you app is wired to the Google+ API by 
            //listing your package name in the google dev console and signing your apk
          },
          function (response) {
            q.resolve(response)
          },
          function (error) {
           q.reject(error)
          }
        );

        return q.promise;
      },

      silentLogin: function(iosKey){

        if(iosKey === undefined){
            iosKey = {};
          }
          var q = $q.defer();
          $window.plugins.googleplus.trySilentLogin(
          {
            'iOSApiKey': iosKey
            // there is no API key for Android; you app is wired to the Google+ API by 
            //listing your package name in the google dev console and signing your apk
          },
          function (response) {
            q.resolve(response)
          },
          function (error) {
           q.reject(error)
          }
        );

        return q.promise;
      },

      logout: function(){
        var q = $q.defer();
        $window.plugins.googleplus.logout(
          function (response) {
            q.resolve(response);
          }
        );
      },

      disconnect: function(){
        var q = $q.defer();
        $window.plugins.googleplus.disconnect(
          function (response) {
            q.resolve(response);
          }
        );
      }
    };

  }]);
