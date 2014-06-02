/*!
 * ngCordova
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
(function(){
angular.module('ngCordova.plugins.camera', [])

.factory('$cordovaCamera', ['$q', '$timeout', '$cordovaMocksWhen', function($q, $timeout, $cordovaMocksWhen) {

  var when = $cordovaMocksWhen('$cordovaCamera');

  return {

    whenGetPicture: function(tag, data) {
      when.when(tag, data);
    },

    getPicture: function(options, tag) {
      var q = $q.defer();
      $timeout(function() {
        // Return any when value, if any
        q.resolve(when.check(tag));
      });
      return q.promise;
    }
  }
});

angular.module('ngCordova.mocks.when', [])

.factory('$cordovaMockWhen', function() {
  return function(service) {
    this.service = service;

    this.whens = [];

    return {
      when: function(condition, ret) {
        this.whens.push({
          condition: condition,
          returnValue: ret
        });
      },
      check: function(condition) {
        var when;

        for(var i = 0, j = this.whens.length; i < j; i++) {
          when = this.whens[i];
          if(when.condition === condition) {
            return when.returnValue;
          }
        }
      }
    }
  }
});



})();