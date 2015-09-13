// install  :     cordova plugin add https://github.com/xmartlabs/cordova-plugin-market.git
// link     :     https://github.com/xmartlabs/cordova-plugin-market

angular.module('ngCordova.plugins.market', [])
  .factory('$cordovaMarket', ['$q', '$window', function ($q, $window) {
    return {
      open: function (appId) {
        var d = $q.defer();
        $window.cordova.plugins.market.open(appId, function () {
          d.resolve();
        }, function () {
          d.reject();
        });
        return d.promise;
      }
    };
  }]);
