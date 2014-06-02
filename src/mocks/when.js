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


