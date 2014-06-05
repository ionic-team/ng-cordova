angular.module('ngCordova.plugins.contacts', [])

.factory('$cordovaContacts', ['$q', function ($q) {

  return {
    save: function (contact) {
      var q = $q.defer();
      var deviceContact = navigator.contacts.create(contact);

      deviceContact.save(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    remove: function (contact) {
      var q = $q.defer();
      var deviceContact = navigator.contacts.create(contact);

      deviceContact.remove(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    clone: function (contact) {
      var deviceContact = navigator.contacts.create(contact);
      return deviceContact.clone(contact)
    },

    find: function (options) {
      var q = $q.defer();
      var fields = options.fields || ['id', 'displayName'];
      delete options.fields;

      navigator.contacts.find(fields, function (results) {
          q.resolve(results);
        },
        function (err) {
          q.reject(err);
        },
        options);

      return q.promise;
    }

    /*
     getContact: function (contact) {
     var q = $q.defer();

     navigator.contacts.pickContact(function (contact) {

     })

     }
     */

    // TODO: method to set / get ContactAddress
    // TODO: method to set / get ContactError
    // TODO: method to set / get ContactField
    // TODO: method to set / get ContactName
    // TODO: method to set / get ContactOrganization

  }

}]);
