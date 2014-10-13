
angular.module('demo.touchid.ctrl', [])


.controller('TouchIDCtrl', function ($scope, $cordovaTouchID) {
  var supported = false;
  $cordovaTouchID.checkSupport().then(function(val) {
    supported = true;
  }, function(err) {
    supported = false;
  });

  $scope.prompt = function() {
    if(!supported) {
      alert('TouchID is not supported on your device.');
    } else {
      $cordovaTouchID.authenticate('Please authenticate').then(function(authVal) {
        alert('Success!');
        console.log(authVal);
      }, function(err) {
        alert(err);
        console.log(err);
      });
    }
  };
});
