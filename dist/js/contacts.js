System.register('ng-cordova/contacts', [], function (_export) {
  // install   :     cordova plugin add cordova-plugin-contacts
  // link      :     https://github.com/apache/cordova-plugin-contacts

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.contacts', []).factory('$cordovaContacts', ['$q', function ($q) {

        return {
          save: function save(contact) {
            var q = $q.defer();
            var deviceContact = navigator.contacts.create(contact);

            deviceContact.save(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });
            return q.promise;
          },

          remove: function remove(contact) {
            var q = $q.defer();
            var deviceContact = navigator.contacts.create(contact);

            deviceContact.remove(function (result) {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            });
            return q.promise;
          },

          clone: function clone(contact) {
            var deviceContact = navigator.contacts.create(contact);
            return deviceContact.clone(contact);
          },

          find: function find(options) {
            var q = $q.defer();
            var fields = options.fields || ['id', 'displayName'];
            delete options.fields;

            navigator.contacts.find(fields, function (results) {
              q.resolve(results);
            }, function (err) {
              q.reject(err);
            }, options);

            return q.promise;
          },

          pickContact: function pickContact() {
            var q = $q.defer();

            navigator.contacts.pickContact(function (contact) {
              q.resolve(contact);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          }

          // TODO: method to set / get ContactAddress
          // TODO: method to set / get ContactError
          // TODO: method to set / get ContactField
          // TODO: method to set / get ContactName
          // TODO: method to set / get ContactOrganization
        };
      }]);
    }
  };
});