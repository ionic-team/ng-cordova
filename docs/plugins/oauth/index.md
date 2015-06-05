---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaOauth
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/oauth.js
official-docs: https://github.com/nraboy/ng-cordova-oauth/blob/master/README.md
icon-apple: true
icon-android: true
icon-windows: true
---

Use browser login flow for various Oauth providers

```
cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
```

When registering your application with various service providers such as Facebook or Google, it is very important to use
**http://localhost/callback** as the callback / redirect url.  The Oauth module depends on this in order to complete the
browser flow.

``` javascript
module.controller('MyCtrl', function($scope, $cordovaOauth) {
    $scope.facebookLogin = function() {
        $cordovaOauth.facebook("CLIENT_ID_HERE", ["email"]).then(function(result) {
            // results
        }, function(error) {
            // error
        });
    }

    // $cordovaOauth.dropbox(string appKey);
    // $cordovaOauth.digitalOcean(string clientId, string clientSecret);
    // $cordovaOauth.google(string clientId, array appScope);
    // $cordovaOauth.github(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.linkedin(string clientId, string clientSecret, array appScope, string state);
    // $cordovaOauth.instagram(string clientId, array appScope);
    // $cordovaOauth.box(string clientId, string clientSecret, string state);
    // $cordovaOauth.reddit(string clientId, string clientSecret, array appScope);
    // $cordovaOauth.twitter(string consumerKey, string consumerSecretKey);
    // $cordovaOauth.meetup(string consumerKey);
    // $cordovaOauth.foursquare(string clientId);
    // $cordovaOauth.salesforce(string loginUrl, string clientId);
    // $cordovaOauth.strava(string clientId, string clientSecret, array appScope);
});
```

To use Twitter in your project, you must have the open source library, [jsSHA](https://github.com/Caligatio/jsSHA), included
in your project.  This is because Twitter requires request signing using HMAC-SHA1, not natively found in JavaScript.

``` html
<script src="js/sha1.js"></script>
```

Add the above jsSHA library into your index.html file.
