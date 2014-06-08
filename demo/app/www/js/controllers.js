angular.module('starter.controllers', [])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('AppCtrl', function($scope) {
  $scope.plugins = [
    { name: 'Camera', slug: 'camera' },
    { name: 'Geolocation', slug: 'geolocation' },
    { name: 'Device Motion', slug: 'device-motion' },
    { name: 'Device Orientation', slug: 'device-orientation' },
    { name: 'Statusbar', slug: 'status-bar' },
    { name: 'Vibration', slug: 'vibration' },
    { name: 'Barcode', slug: 'barcode' }
  ];
})

.controller('CameraCtrl', function($scope, $cordovaCamera) {
  $scope.takePicture = function() {
    $scope.photo = 'http://placekitten.com/320/320';

    $cordovaCamera.getPicture({
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    }).then(function(imageURI) {
      $scope.photo = imageURI;
    }, function(err) {
      console.error('Unable to take pic', err);
      alert('Unable to take picture');
    });
  };
})

.controller('GeolocationCtrl', function($scope, $cordovaGeolocation) {
  $cordovaGeolocation.watchPosition().then(function(resp) {
  }, function(err) {
  }, function(position) {
    $scope.lat = position.coords.latitude;
    $scope.lng = position.coords.longitude;
  });

  $scope.getLatLng = function() {
    if(!$scope.lat && !$scope.lng) { return '45.787, -89.052'; }
    return $scope.lat.toFixed(3) + ', ' + $scope.lng.toFixed(3);
  }
  /*
  $scope.toggleTrack = function() {
    $cordovaGeolocation.watchPosition().then(function(resp) {
    }, function(err) {
    }, function(position) {
      $scope.lat = position.coords.latitude;
      $scope.lng = position.coords.longitude;
    });
  };
  */
})

.controller('CompassCtrl', function($scope, $cordovaDeviceOrientation) {
  $cordovaDeviceOrientation.watchHeading().then(function(resp) {
  }, function(err) {
  }, function(position) {
    $scope.compass = position.magneticHeading;
  });

  /*
  $scope.toggleTrack = function() {
    $cordovaGeolocation.watchPosition().then(function(resp) {
    }, function(err) {
    }, function(position) {
      $scope.lat = position.coords.latitude;
      $scope.lng = position.coords.longitude;
    });
  };
  */
})

.directive('rotateTo', function() {
  return {
    restrict: 'A',
    scope: {
      rotateTo: '='
    },
    link: function($scope, $element, $attr) {
      $scope.$watch('rotateTo', function(v) {
        if(typeof v === 'undefined') { return; }
        $element[0].style[ionic.CSS.TRANSFORM] = 'rotate(' + v + 'deg)';
      });
    }
  }
})

.controller('StatusbarCtrl', function($scope, $cordovaStatusbar) {
  $scope.toggleBar = function() {
    if($cordovaStatusbar.isVisible()) {
      $cordovaStatusbar.hide();
    } else {
      $cordovaStatusbar.show();
    }
  };
})

.controller('VibrationCtrl', function($scope, $cordovaVibration) {
  $scope.data = {
    vibrateTime: 500
  };

  $scope.vibrate = function() {
    console.log('Vibrating', $scope.data.vibrateTime);
    $cordovaVibration.vibrate($scope.data.vibrateTime);
  }
})

.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

  $scope.scan = function() {
    $cordovaBarcodeScanner.scan().then(function(result) {
      $scope.scanResult = JSON.stringify(result);
    }, function(err) {
      $scope.scanResult = 'SCAN ERROR (see console)'
      console.error(err);
    });
  }
})

.controller('AccelCtrl', function($scope, $cordovaAccelerometer) {
  console.log('Accel');
  $scope.toggleTrack = function() {
    $cordovaAccelerometer.watchAcceleration().then(function(resp) {
    }, function(err) {
    }, function(data) {
      console.log('Data', data)
      $scope.x = data.x;
      $scope.y = data.y;
      $scope.z = data.z;
    });
  };
});
