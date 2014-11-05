// install   :     cordova plugin add https://github.com/danwilson/google-analytics-plugin.git
// link      :     https://github.com/danwilson/google-analytics-plugin

angular.module('ngCordova.plugins.googleAnalytics', [])

  .factory('$cordovaGoogleAnalytics', ['$q', '$window', function ($q, $window) {

    return {
      startTrackerWithId: function (id) {
        var d = $q.defer();

        $window.analytics.startTrackerWithId(id, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      setUserId: function (id) {
        var d = $q.defer();

        $window.analytics.setUserId(id, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      debugMode: function () {
        var d = $q.defer();

        $window.analytics.debugMode(function (response) {
          d.resolve(response);
        }, function () {
          d.reject();
        });

        return d.promise;
      },

      trackView: function (screenName) {
        var d = $q.defer();

        $window.analytics.trackView(screenName, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      addCustomDimension: function (key, value) {
        var d = $q.defer();

        $window.analytics.addCustomDimension(key, value, function () {
          d.resolve();
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      trackEvent: function (category, action, label, value) {
        var d = $q.defer();

        $window.analytics.trackEvent(category, action, label, value, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      addTransaction: function (transactionId, affiliation, revenue, tax, shipping, currencyCode) {
        var d = $q.defer();

        $window.analytics.addTransaction(transactionId, affiliation, revenue, tax, shipping, currencyCode, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      addTransactionItem: function (transactionId, name, sku, category, price, quantity, currencyCode) {
        var d = $q.defer();

        $window.analytics.addTransactionItem(transactionId, name, sku, category, price, quantity, currencyCode, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      }
    };
  }]);
