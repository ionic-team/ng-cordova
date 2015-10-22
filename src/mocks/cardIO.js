/**
 * @ngdoc service
 * @name ngCordovaMocks.cardIO
 *
 * @description
 * A service for testing CardIO features
 * in an app build with ngCordova.
 **/
ngCordovaMocks.provider(
'$cordovaNgCardIO', [function () {

  this.setCardIOResponseFields = function (filelds) {
    console.log('CardIO response fileds: ', filelds);
  };

  this.setScanerConfig = function (config) {
    console.log('CardIO scaner config: ', config);
  };

  this.$get = ['$q', function ($q) {
    return {
      scanCard: function () {

        var deferred = $q.defer();

        deferred.resolve(null);

        return deferred.promise;
      }
    };
  }];
}]
);
