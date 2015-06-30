System.register('ng-cordova/socialSharing', [], function (_export) {
  // install   :      cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
  // link      :      https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin

  // NOTE: shareViaEmail -> if user cancels sharing email, success is still called
  // TODO: add support for iPad

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.socialSharing', []).factory('$cordovaSocialSharing', ['$q', '$window', function ($q, $window) {

        return {
          share: function share(message, subject, file, link) {
            var q = $q.defer();
            subject = subject || null;
            file = file || null;
            link = link || null;
            $window.plugins.socialsharing.share(message, subject, file, link, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          shareViaTwitter: function shareViaTwitter(message, file, link) {
            var q = $q.defer();
            file = file || null;
            link = link || null;
            $window.plugins.socialsharing.shareViaTwitter(message, file, link, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          shareViaWhatsApp: function shareViaWhatsApp(message, file, link) {
            var q = $q.defer();
            file = file || null;
            link = link || null;
            $window.plugins.socialsharing.shareViaWhatsApp(message, file, link, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          shareViaFacebook: function shareViaFacebook(message, file, link) {
            var q = $q.defer();
            message = message || null;
            file = file || null;
            link = link || null;
            $window.plugins.socialsharing.shareViaFacebook(message, file, link, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          shareViaFacebookWithPasteMessageHint: function shareViaFacebookWithPasteMessageHint(message, file, link, pasteMessageHint) {
            var q = $q.defer();
            file = file || null;
            link = link || null;
            $window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, file, link, pasteMessageHint, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          shareViaSMS: function shareViaSMS(message, commaSeparatedPhoneNumbers) {
            var q = $q.defer();
            $window.plugins.socialsharing.shareViaSMS(message, commaSeparatedPhoneNumbers, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          shareViaEmail: function shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr) {
            var q = $q.defer();
            toArr = toArr || null;
            ccArr = ccArr || null;
            bccArr = bccArr || null;
            fileArr = fileArr || null;
            $window.plugins.socialsharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          shareVia: function shareVia(via, message, subject, file, link) {
            var q = $q.defer();
            message = message || null;
            subject = subject || null;
            file = file || null;
            link = link || null;
            $window.plugins.socialsharing.shareVia(via, message, subject, file, link, function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          canShareViaEmail: function canShareViaEmail() {
            var q = $q.defer();
            $window.plugins.socialsharing.canShareViaEmail(function () {
              q.resolve(true);
            }, function () {
              q.reject(false);
            });
            return q.promise;
          },

          canShareVia: function canShareVia(via, message, subject, file, link) {
            var q = $q.defer();
            $window.plugins.socialsharing.canShareVia(via, message, subject, file, link, function (success) {
              q.resolve(success);
            }, function (error) {
              q.reject(error);
            });
            return q.promise;
          },

          available: function available() {
            var q = $q.defer();
            window.plugins.socialsharing.available(function (isAvailable) {
              if (isAvailable) {
                q.resolve();
              } else {
                q.reject();
              }
            });
          }
        };
      }]);
    }
  };
});