// install : cordova plugin add https://github.com/vkeepe/card.io.git
// link    : https://github.com/vkeepe/card.io.git

/* globals CardIO: true */
angular.module('ngCordova.plugins.cardIO', [])

  .provider(
  '$cordovaNgCardIO', [function () {

    /**
     * Default array of response data from cardIO scan card
     */
    var defaultRespFields = [
      'card_type',
      'redacted_card_number',
      'card_number',
      'expiry_month',
      'expiry_year',
      'short_expiry_year',
      'cvv',
      'zip'
    ];

    /**
     * Default config for cardIO scan function
     */
    var defaultScanConfig = {
      'expiry': true,
      'cvv': true,
      'zip': false,
      'suppressManual': false,
      'suppressConfirm': false,
      'hideLogo': true
    };

    /**
     * Configuring defaultRespFields using $cordovaNgCardIOProvider
     *
     */
    this.setCardIOResponseFields = function (filelds) {
      if (!filelds || !angular.isArray(filelds)) {
        return;
      }
      defaultRespFields = filelds;
    };

    /**
     *
     * Configuring defaultScanConfig using $cordovaNgCardIOProvider
     */
    this.setScanerConfig = function (config) {
      if (!config || !angular.isObject(config)) {
        return;
      }

      defaultScanConfig.expiry = config.expiry || true;
      defaultScanConfig.cvv = config.cvv || true;
      defaultScanConfig.zip = config.zip || false;
      defaultScanConfig.suppressManual = config.suppressManual || false;
      defaultScanConfig.suppressConfirm = config.suppressConfirm || false;
      defaultScanConfig.hideLogo = config.hideLogo || true;
    };

    /**
     * Function scanCard for $cordovaNgCardIO service to make scan of card
     *
     */
    this.$get = ['$q', function ($q) {
      return {
        scanCard: function () {

          var deferred = $q.defer();
          CardIO.scan(
            defaultScanConfig,
            function (response) {

              if (response === null) {
                deferred.reject(null);
              } else {

                var respData = {};
                for (
                  var i = 0, len = defaultRespFields.length; i < len; i++) {
                  var field = defaultRespFields[i];

                  if (field === 'short_expiry_year') {
                    respData[field] = String(response.expiry_year).substr( // jshint ignore:line
                      2, 2
                    ) || '';
                  } else {
                    respData[field] = response[field] || '';
                  }
                }
                deferred.resolve(respData);
              }
            },
            function () {
              deferred.reject(null);
            }
          );
          return deferred.promise;
        }
      };
    }];
  }]
);
