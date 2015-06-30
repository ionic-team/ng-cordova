System.register("ng-cordova/plugin", [], function (_export) {
  /*
   * Cordova AngularJS Oauth
   *
   * Created by Nic Raboy
   * http://www.nraboy.com
   *
   *
   *
   * DESCRIPTION:
   *
   * Use Oauth sign in for various web services.
   *
   *
   * REQUIRES:
   *
   *    Apache Cordova 3.5+
   *    Apache InAppBrowser Plugin
   *    Apache Cordova Whitelist Plugin
   *
   *
   * SUPPORTS:
   *
   *    Dropbox
   *    Digital Ocean
   *    Google
   *    GitHub
   *    Facebook
   *    LinkedIn
   *    Instagram
   *    Box
   *    Reddit
   *    Twitter
   *    Meetup
   *    Salesforce
   *    Strava
   *    Withings
   *    Foursquare
   *    Magento
   *    vkontakte
   *    Odnoklassniki
   *    ADFS
   *    Imgur
   *    Spotify
   *    Uber
   *    Windows Live Connect
   *    Yammer
   *    Venmo
   *    Stripe
   *    Rally
   *    Family Search
   *    Envato
   */

  "use strict";

  return {
    setters: [],
    execute: function () {
      angular.module("ngCordovaOauth", ["oauth.providers", "oauth.utils"]);
    }
  };
});