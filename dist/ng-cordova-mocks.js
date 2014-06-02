/*!
 * ngCordova
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
(function(){
angular.module('ngCordova.plugins.camera', ['ngCordova.mocks'])

.factory('$cordovaCamera', ['$q', '$timeout', '$cordovaMockWhen', function($q, $timeout, $cordovaMockWhen) {

  var when = $cordovaMockWhen('$cordovaCamera');

  return {

    whenGetPicture: function(tag, data) {
      when.when(tag, data);
    },

    getPicture: function(tag, options) {
      var q = $q.defer();
      $timeout(function() {
        // Return any when value, if any
        q.resolve(when.check(tag));
      });
      return q.promise;
    }
  }
}]);

angular.module('ngCordova.mocks', [])

.factory('$cordovaMockWhen', function() {
  return function(service) {
    var service = service;
    var whens = [];

    return {
      when: function(condition, ret) {
        whens.push({
          condition: condition,
          returnValue: ret
        });
      },
      check: function(condition) {
        var when;

        for(var i = 0, j = whens.length; i < j; i++) {
          when = whens[i];
          if(when.condition === condition) {
            return when.returnValue;
          }
        }
      }
    }
  }
});



})();