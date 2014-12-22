angular.module('demo.oauth.ctrl', [])

  .controller('OauthCtrl', function ($scope, $cordovaOauth) {

    $scope.instagramLogin = function () {
      $cordovaOauth.instagram("CLIENT_ID_HERE", ["basic", "likes"]).then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.digitalOceanLogin = function () {
      $cordovaOauth.digitalOcean("CLIENT_ID_HERE", "CLIENT_SECRET_HERE").then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.dropboxLogin = function () {
      $cordovaOauth.dropbox("APP_ID_HERE").then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.googleLogin = function () {
      $cordovaOauth.google("CLIENT_ID_HERE", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.githubLogin = function () {
      $cordovaOauth.github("CLIENT_ID_HERE", "CLIENT_SECRET_HERE", ["user"]).then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.facebookLogin = function () {
      $cordovaOauth.facebook("CLIENT_ID_HERE", ["email"]).then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.linkedinLogin = function () {
      $cordovaOauth.linkedin("CLIENT_ID_HERE", "CLIENT_SECRET_HERE", ["r_emailaddress"], "RANDOM_STATE_STRING_HERE").then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.boxLogin = function () {
      $cordovaOauth.box("CLIENT_ID_HERE", "CLIENT_SECRET_HERE", "RANDOM_STATE_STRING_HERE").then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.redditLogin = function () {
      $cordovaOauth.reddit("CLIENT_ID_HERE", "CLIENT_SECRET_HERE", ["edit"]).then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.twitterLogin = function () {
      $cordovaOauth.twitter("CONSUMER_ID_HERE", "CONSUMER_SECRET_HERE").then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.meetupLogin = function () {
      $cordovaOauth.meetup("CONSUMER_ID_HERE").then(function (result) {
        $scope.oauthResult = result;
      }, function (error) {
        $scope.oauthResult = "OAUTH ERROR (see console)";
        console.log(error);
      });
    };

    $scope.foursquareLogin = function () {
        $cordovaOauth.foursquare("CLIENT_ID_HERE").then(function (result) {
            $scope.oauthResult = result;
        }, function (error) {
            $scope.oauthResult = "OAUTH ERROR (see console)";
            console.log(error);
        });
    };

    $scope.salesforceLogin = function () {
        $cordovaOauth.salesforce("LOGIN_URL_HERE", "CLIENT_ID_HERE").then(function (result) {
            $scope.oauthResult = result;
        }, function (error) {
            $scope.oauthResult = "OAUTH ERROR (see console)";
            console.log(error);
        });
    };

    $scope.stravaLogin = function () {
        $cordovaOauth.strava("CLIENT_ID_HERE", "CLIENT_SECRET_HERE", ["SCOPE1", "SCOPE2"]).then(function (result) {
            $scope.oauthResult = result;
        }, function (error) {
            $scope.oauthResult = "OAUTH ERROR (see console)";
            console.log(error);
        });
    };


  });
