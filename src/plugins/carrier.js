// install  :     cordova plugin add https://github.com/dtmtec/cordova-plugin-carrier.git
// link     :     https://github.com/dtmtec/cordova-plugin-carrier

angular.module('ngCordova.plugins.carrier', [])

  .factory('$cordovaCarrier', ['$q', '$window', function ($q, $window) {

     return {
      getCarrierInfo: function () {
        var q = $q.defer();

        $window.plugins.carrier.getCarrierInfo(function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });

        return q.promise;
      }
    };

  }]);
