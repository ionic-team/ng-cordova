
/**
 * @ngdoc service
 * @name ngCordovaMocks.printer
 *
 * @description
 * A service for testing printer
 * in an app build with ngCordovaMocks.
 */


ngCordovaMocks.factory('$cordovaPrinter', ['$q', function ($q) {

    return {
      isAvailable: function () {
        var q = $q.defer();

        q.resolve(true);;

        return q.promise;
      },

      print: function (doc, options) {
        var q = $q.defer();

        console.log("$cordovaPrinter.print called with (doc, options):", doc, options);
    		q.resolve();

        return q.promise;
      }
    };

}]);