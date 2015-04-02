// install   :   cordova plugins add https://github.com/vstirbu/InstagramPlugin
// link      :   https://github.com/vstirbu/InstagramPlugin

angular.module('ngCordova.plugins.instagram', [])

.factory('$cordovaInstagram', ['$q', function ($q) {

  return {
    share: function (options) {
      var q = $q.defer();

      if (!window.Instagram) {
        console.error('Tried to call Instagram.share but the Instagram plugin isn\'t installed!');
        q.resolve(null);
        return q.promise;
      }

      Instagram.share(options.image, options.caption, function(err) {
        if(err) {
          q.reject(err);
        } else {
          q.resolve(true);
        }
      });
      return q.promise;
    },
    isInstalled: function () {
      var q = $q.defer();

      if (!window.Instagram) {
        console.error('Tried to call Instagram.isInstalled but the Instagram plugin isn\'t installed!');
        q.resolve(null);
        return q.promise;
      }

      Instagram.isInstalled(function (err, installed) {
        if (err) {
          q.reject(err);
        } else {
          q.resolve(installed || true);
        }
      });
      return q.promise;
    }
  };
}]);
