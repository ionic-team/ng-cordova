// NOTE: shareViaSms -> access multiple numbers in a string like: '0612345678,0687654321'
// NOTE: shareViaEmail -> if user cancels sharing email, success is still called
// NOTE: shareViaEmail -> TO, CC, BCC must be an array, Files can be either null, string or array
// TODO: add support for iPad
// TODO: add support for Windows Phone
// TODO: detailed docs for each social sharing types (each social platform has different requirements)

angular.module('ngCordova.plugins.socialSharing', [])

  .factory('$cordovaSocialSharing', ['$q', function ($q) {

    return {
      shareViaTwitter: function (message, image, link) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaTwitter(message, image, link,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaWhatsApp: function (message, image, link) {  // image ?? link ??
        var q = $q.defer();
        window.plugins.socialsharing.shareViaWhatsApp(message, image, link,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaFacebook: function (message, image, link) {  // image ?? link ??
        var q = $q.defer();
        window.plugins.socialsharing.shareViaFacebook(message, image, link,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaSMS: function (message, number) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaSMS(message, number,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaEmail: function (message, subject, toArr, ccArr, bccArr, file ) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaEmail(message, number,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      canShareVia: function (social, message, image, link) {
        var q = $q.defer();
        window.plugins.socialsharing.canShareVia(social, message, image, link,
          function (success) {
            q.resolve(success); // success
          },
          function (error) {
            q.reject(error); // error
          });
        return q.promise;
      }

    }
  }]);
