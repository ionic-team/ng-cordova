angular.module('starter.controller', [])

    .controller('CameraCtrl', function($scope, $cordovaCamera) {
        $scope.takePicture = function() {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.CAMERA
            };

            // udpate camera image directive
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.cameraimage = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                console.log('Failed because: ' + message);
            });
        }
    })

    .controller('DeviceCtrl', function($scope, $state , $cordovaDevice) {

        var init = function() {
            console.log("initializing devic");
            try {

                $scope.title = "Device Detail";
                $scope.device = $cordovaDevice.getDevice();
                $scope.cordova = $cordovaDevice.getCordova();
                $scope.model = $cordovaDevice.getModel();
                $scope.platform = $cordovaDevice.getPlatform();
                $scope.uuid = $cordovaDevice.getUUID();
                $scope.version = $cordovaDevice.getVersion();
            }
            catch (err) {
                console.log("Error " + err.message);
                alert("error " + err.$$failure.message);
            }

        };

        init();
    })

    // this always times-out, position is never found
    .controller('GeoLocationCtrl', function($scope, $cordovaGeolocation) {
        $scope.msg = "";
        $scope.hasLocation = false;

        var setPosition = function(position){
            console.log("new position");
            $scope.hasLocation = true;
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            $scope.msg = $scope.latitude + " : " + $scope.longitude;

            $scope.mapsrc = GMaps.staticMapURL({
                size: [320, 480],
                lat: $scope.latitude,
                lng: $scope.longitude
            });
        };

        // default to omaha
        var setDefaultPosition = function(){
            console.log("default position");
            $scope.hasLocation = true;
            $scope.latitude = 41.2500;
            $scope.longitude = 96.0000;
            $scope.msg = "Omaha";

            $scope.mapsrc = GMaps.staticMapURL({
                size: [320, 480],
                lat: $scope.latitude,
                lng: $scope.longitude
            });
        };

        var init = function() {
            console.log("opening location");

            $cordovaGeolocation.getCurrentPosition({timeout: 10000, enableHighAccuracy: false}).then(function(position) {
                console.log("position found");
                setPosition(position);
            }, function(err) {
                console.log("unable to find location");
                $scope.msg = "Error " + err.message;
                setDefaultPosition();
            });
        };

        init();
    })

    .controller('NetworkCtrl', function($scope, $cordovaNetwork) {
        var init = function() {
            console.log("Checking network status");
            $scope.networkType = $cordovaNetwork.getNetwork();

            $scope.isOnline = $cordovaNetwork.isOnline();

            $scope.isOffline = $cordovaNetwork.isOffline();
        };

        init();
    })

    .controller('VibrationCtrl', function($scope, $cordovaVibration) {

        $scope.duration = 100;

        var vibrate = function(){
            console.log("vibrating");
            $cordovaVibration.vibrate($scope.duration);
        }
    })

    .controller('CompassCtrl', function($scope, $cordovaDeviceOrientation) {

        var options = { frequency: 1000 }; // Update every 3 seconds

        $cordovaDeviceOrientation.watchHeading(options).then(function(result) {
            $scope.heading = result;
        }, function(err) {
            $scope.heading = err.message;
        });

    })

    .controller('DeviceMotionCtrl', function($scope, $cordovaDeviceMotion) {
        var watchID;

        var updateMotion = function(result){
            $scope.x = result.x;
            $scope.y = result.y;
            $scope.z = result.z;
            $scope.timeStammp = result.timeStamp;
            $scope.msg = "";
            console.log("updated device motion");
        }

        $scope.getAcceleration = function () {
            $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
                updateMotion(result);
            }, function(err) {
                $scope.msg = err.message;
            });
        };

        $scope.watchAcceleration = function () {
            var options = { frequency: 3000 };  // Update every 3 seconds

            watchID = $cordovaDeviceMotion.watchAcceleration(options).then(
                function() {/* unused */},
                function(err) {

                    $scope.msg = err.message;
                },
                function(acceleration) {
                    updateMotion(acceleration);
                });
        };

        $scope.clearWatch = function() {
            // use watchID from watchAccelaration()

            $cordovaDeviceMotion.clearWatch(watchID).then(function(result) {
                $scope.msg = "watch cleared";
            }, function(err) {
                $scope.msg = err.message;
            });
        }
    })

    // beep doesn't make a sound
    .controller('DialogCtrl', function($scope, $cordovaDialogs) {

        $scope.action = "Press any button";

        $scope.alert = function() {
            $scope.action = "Alert";
            $cordovaDialogs.alert('Wow!');
        };

        $scope.confirm = function() {
            $scope.action = "Confirm";
            $cordovaDialogs.confirm('Are you sure?');
        };

        $scope.prompt = function() {
            $scope.action = "Prompt";
            $cordovaDialogs.prompt('Please Login');
        };

        // beep 3 times
        $scope.beep = function() {
            $scope.action = "Beep";
            $cordovaDialogs.beep(3);
        }

    })

    .controller('GlobalizationCtrl', function($scope, $cordovaGlobalization) {
        $cordovaGlobalization.getPreferredLanguage().then(
            function(result) {
                $scope.language = result.value;
            },
            function(error) {
                $scope.language = err.message;
            });

        $cordovaGlobalization.getLocaleName().then(
            function(result) {
                $scope.locale = result.value;
            },
            function(error) {
                $scope.locale = err.message;
            });

        $cordovaGlobalization.getFirstDayOfWeek().then(
            function(result) {
                $scope.fdow = result.value;
            },
            function(error) {
                $scope.fdow = err.message;
            });

        // Soon implemented:
        // dateToString
        // stringToDate
        // getDatePattern
        // getDateNames
        // isDayLightSavingsTime
        // numberToString
        // stringToNumber
        // getNumberPattern
        // getCurrencyPattern

    })

    .controller('ToastCtrl', function($scope, $cordovaToast) {

        $scope.msg = "";

        $scope.center = function () {
            $cordovaToast.show('Center Message', 'long', 'center').then(function (success) {
                console.log("center msg displayed");
            }, function (error) {
                $scope.msg = error.message;
            });
        };

        $scope.top = function () {

            $cordovaToast.showShortTop('short message @ top').then(function (success) {
                console.log("short top displayed ");
            }, function (error) {
                $scope.msg = error.message;
            });
        };


        $scope.bottom = function () {
            $cordovaToast.showLongBottom('long msg @ botttom').then(function (success) {
                console.log("long bottom displayed");
            }, function (error) {
                $scope.msg = error.message;
            });
        }
    })

    .controller('AboutCtrl', function($scope ) {
        $scope.title = "About";
        var init = function() {
            $scope.version = "01.01"
        };
        init();
    });