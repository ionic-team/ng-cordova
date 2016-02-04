angular.module('demo.contacts.ctrl', [])

  .controller('ContactsCtrl', function ($scope, $log, $cordovaContacts) {

    $scope.pickContact = function () {
      document.addEventListener("deviceready", function () {
        $cordovaContacts.pickContact().then(function (result) {
          console.log(JSON.stringify(result));
          $scope.selectedContact = result;
        })
      }, false);
    };

    $scope.saveContact = function (contact) {
      document.addEventListener("deviceready", function () {
        $cordovaContacts.save(contact).then(function (result) {
          console.log(JSON.stringify(result));
        })
      }, false);
    };


    $scope.removeContact = function (contact) {
      document.addEventListener("deviceready", function () {
        $cordovaContacts.remove(contact).then(function (result) {
          console.log(JSON.stringify(result));
        })
      }, false);
    };

  });
