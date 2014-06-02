/*!
 * ngCordova
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
(function(){
angular.module('ngCordova', [
  'ngCordova.plugins'
]);

angular.module('ngCordova.plugins.camera', [])

.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])

.angular.module('ngCordova.plugins', [
  'ngCordova.plugins.camera'
]);

})();