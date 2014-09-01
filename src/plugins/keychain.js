angular.module('ngCordova.plugins.keychain', [])

  .factory('$cordovaKeychain', [function () {

    var kc = new Keychain();

    return {
      getForKey: function(successCallback, failureCallback, key, servicename) {
        kc.getForKey(successCallback, failureCallback, key, servicename);
      },
      setForKey: function(successCallback, failureCallback, key, servicename, value) {
        kc.setForKey(successCallback, failureCallback, key, servicename, value);
      },
      removeForKey: function(successCallback, failureCallback, key, servicename) {
        kc.removeForKey(successCallback, failureCallback, key, servicename);
      }
    }
  }]);