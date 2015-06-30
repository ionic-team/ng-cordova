System.register('ng-cordova/googlePlayGame', [], function (_export) {
  // install   :   cordova plugin add https://github.com/ptgamr/cordova-google-play-game.git --variable APP_ID=123456789
  // link      :   https://github.com/ptgamr/cordova-google-play-game

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.googlePlayGame', []).factory('$cordovaGooglePlayGame', ['$q', function ($q) {

        return {

          auth: function auth() {
            var q = $q.defer();

            googleplaygame.auth(function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          signout: function signout() {
            var q = $q.defer();

            googleplaygame.signout(function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          isSignedIn: function isSignedIn() {
            var q = $q.defer();

            googleplaygame.isSignedIn(function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          showPlayer: function showPlayer() {
            var q = $q.defer();

            googleplaygame.showPlayer(function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          submitScore: function submitScore(data) {
            var q = $q.defer();

            googleplaygame.submitScore(data, function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          showAllLeaderboards: function showAllLeaderboards() {
            var q = $q.defer();

            googleplaygame.showAllLeaderboards(function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          showLeaderboard: function showLeaderboard(data) {
            var q = $q.defer();

            googleplaygame.showLeaderboard(data, function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          unlockAchievement: function unlockAchievement(data) {
            var q = $q.defer();

            googleplaygame.unlockAchievement(data, function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          incrementAchievement: function incrementAchievement(data) {
            var q = $q.defer();

            googleplaygame.incrementAchievement(data, function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          },
          showAchievements: function showAchievements() {
            var q = $q.defer();

            googleplaygame.showAchievements(function (success) {
              return q.resolve(success);
            }, function (err) {
              return q.reject(err);
            });

            return q.promise;
          }
        };
      }]);
    }
  };
});