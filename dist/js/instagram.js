System.register('ng-cordova/instagram', [], function (_export) {
  // install   :   cordova plugins add https://github.com/vstirbu/InstagramPlugin.git
  // link      :   https://github.com/vstirbu/InstagramPlugin

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.instagram', []).factory('$cordovaInstagram', ['$q', function ($q) {

        return {
          share: function share(options) {
            var q = $q.defer();

            if (!window.Instagram) {
              console.error('Tried to call Instagram.share but the Instagram plugin isn\'t installed!');
              q.resolve(null);
              return q.promise;
            }

            Instagram.share(options.image, options.caption, function (err) {
              if (err) {
                q.reject(err);
              } else {
                q.resolve(true);
              }
            });
            return q.promise;
          },
          isInstalled: function isInstalled() {
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
    }
  };
});