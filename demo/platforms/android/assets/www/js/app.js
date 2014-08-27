// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','starter.controller'])

    .run(function($ionicPlatform) {

        $ionicPlatform.ready(function () {

            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('mainmenu', {
                url: "/mainmenu",
                templateUrl: "template/mainmenu.html"
            })

            .state('accelerationpage', {
                url: '/motion',
                templateUrl: 'template/motion.html',
                controller: "DeviceMotionCtrl"
            })

            .state('networkpage', {
                url: '/network',
                templateUrl: 'template/network.html',
                controller: "NetworkCtrl"
            })

            .state('dialogpage', {
                url: '/dialog',
                templateUrl: 'template/dialog.html',
                controller: "DialogCtrl"
            })

            .state('devicepage', {
                url: '/device',
                templateUrl: 'template/device.html',
                controller: "DeviceCtrl"
            })

            .state('geopage', {
                url: '/geolocation',
                templateUrl: 'template/geolocation.html',
                controller: "GeoLocationCtrl"
            })

            .state('globalpage', {
                url: '/global',
                templateUrl: 'template/global.html',
                controller: "GlobalizationCtrl"
            })
            .state('camerapage', {
                url: '/camera',
                templateUrl: 'template/camera.html',
                controller: "CameraCtrl"
            })

            .state('vibratepage', {
                url: '/vibrate',
                templateUrl: 'template/vibrate.html',
                controller: "VibrationCtrl"
            })

            .state('compasspage', {
                url: '/compass',
                templateUrl: 'template/compass.html',
                controller: "CompassCtrl"
            })

            .state('mediacapturepage', {
                url: '/capture',
                templateUrl: 'template/capture.html',
                controller: "CaptureCtrl"
            })

            .state('toastpage', {
                url: '/toast',
                templateUrl: 'template/toast.html',
                controller: "ToastCtrl"
            })

            .state('about', {
                url: '/about',
                templateUrl: 'template/about.html',
                controller: "AboutCtrl"
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/mainmenu');
    });

