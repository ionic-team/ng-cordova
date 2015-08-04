/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaSocialSharing
 *
 * @description
 * A service for testing via social services
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaSocialSharing', ['$q', function ($q) {
  var throwsError = false;
  var message = '';
  var image = '';
  var link = '';
  var number = '';

  var socialService = '';
  var subject = '';
  var toAddresses = [];
  var bccAddresses = [];
  var attachments = [];

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    /**
     * @ngdoc property
     * @name message
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * The message to be shared via a social service.
     * This property should only be used in automated tests.
     **/
    message: message,

    /**
     * @ngdoc property
     * @name image
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * An image to be shared via a social service.
     * This property should only be used in automated tests.
     **/
    image: image,

    /**
     * @ngdoc property
     * @name link
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * A link to be shared via a social service.
     * This property should only be used in automated tests.
     **/
    link: link,

    /**
     * @ngdoc property
     * @name number
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * A comma-delimited list of phone numbers to send a social message to.
     * This property should only be used in automated tests.
     **/
    number: number,

    /**
     * @ngdoc property
     * @name subject
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * The subject of an email.
     * This property should only be used in automated tests.
     **/
    subject: subject,

    /**
     * @ngdoc property
     * @name toAddresses
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * An array of email addresses to send an email to.
     * This property should only be used in automated tests.
     **/
    toAddresses: toAddresses,

    /**
     * @ngdoc property
     * @name bccAddresses
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * An array of email addresses to blind carbon-copy an email to.
     * This property should only be used in automated tests.
     **/
    bccAddresses: bccAddresses,

    /**
     * @ngdoc property
     * @name socialService
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * The name of a social service to share content through.
     * This property should only be used in automated tests.
     **/
    socialService: socialService,

    /**
     * @ngdoc property
     * @name attachments
     * @propertyOf ngCordovaMocks.cordovaSocialSharing
     *
     * @description
     * An array of attachments to include with an email to be sent.
     * This property should only be used in automated tests.
     **/
    attachments: attachments,

    shareViaTwitter: function (message, image, link) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via Twitter.');
      } else {
        this.message = message;
        this.image = image;
        this.link = link;

        defer.resolve();
      }
      return defer.promise;
    },

    shareViaWhatsApp: function (message, image, link) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via WhatsApp.');
      } else {
        this.message = message;
        this.image = image;
        this.link = link;

        defer.resolve();
      }
      return defer.promise;
    },

    shareViaFacebook: function (message, image, link) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via Facebook.');
      } else {
        this.message = message;
        this.image = image;
        this.link = link;

        defer.resolve();
      }
      return defer.promise;
    },

    shareViaSMS: function (message, number) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via SMS.');
      } else {
        this.message = message;
        this.number = number;

        defer.resolve();
      }
      return defer.promise;
    },

    shareViaEmail: function (message, subject, toArr, bccArr, file) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via SMS.');
      } else {
        // These are added to get by JSHINT for now
        this.message = message;
        this.subject = subject;
        this.toAddresses = toArr;
        this.bccAddressesc = bccArr;
        this.attachments = file;

        defer.resolve();
      }
      return defer.promise;
    },

    canShareViaEmail: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject(false);
      } else {
        defer.resolve(true);
      }
      return defer.promise;
    },

    canShareVia: function (via, message, subject, file, link) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via SMS.');
      } else {
        // These are added to get by JSHINT for now
        this.message = message;
        this.socialService = via;
        this.subject = subject;
        this.attachments = file;
        this.link = link;

        defer.resolve();
      }
      return defer.promise;
    },

    shareVia: function (via, message, subject, file, link) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via SMS.');
      } else {
        this.socialService = via;
        this.message = message;
        this.subject = subject;
        this.attachments = file;
        this.link = link;

        defer.resolve();
      }
      return defer.promise;
    },

    share: function (message, subject, file, link) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error sharing via SMS.');
      } else {
        this.message = message;
        this.subject = subject;
        this.attachments = file;
        this.link = link;

        defer.resolve();
      }
      return defer.promise;
    }
  };
}]);
