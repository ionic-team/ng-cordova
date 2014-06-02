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


