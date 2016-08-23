// install   :     cordova plugin add https://github.com/Initsogar/cordova-webintent.git
// link      :     https://github.com/Initsogar/cordova-webintent

angular.module('ngCordova.plugins.webIntent', [])

    .factory('$webIntent', ['$q', '$window', function ($q, $window) {

        return {
            startActivity: function (params) {
                var q = $q.defer();

                if (!$window.cordova) {
                    q.reject('Not supported without cordova.js');
                } else {
                    $window.plugins.webintent.startActivity(params, function (result) {
                        q.resolve(result);
                    }, function (err) {
                        q.reject(err);
                    });
                }

                return q.promise;
            },
            hasExtra: function(params) {
                var q = $q.defer();

                if (!$window.cordova) {
                    q.reject('Not supported without cordova.js');
                } else {
                    $window.plugins.webintent.hasExtra(params, function (result) {
                        q.resolve(result);
                    }, function (err) {
                        q.reject(err);
                    });
                }

                return q.promise;
            },
            getUri: function() {
                var q = $q.defer();

                if (!$window.cordova) {
                    q.reject('Not supported without cordova.js');
                } else {
                    $window.plugins.webintent.getUri(function (result) {
                        q.resolve(result);
                  }, function (err) {
                      q.reject(err);
                  });
              }

              return q.promise;
          },
          getExtra: function(params) {
              var q = $q.defer();

              if (!$window.cordova) {
                  q.reject('Not supported without cordova.js');
              } else {
                  $window.plugins.webintent.getExtra(params, function (result) {
                      q.resolve(result);
                  }, function (err) {
                      q.reject(err);
                  });
              }

              return q.promise;
          },
          onNewIntent: function(callback) {
              if ($window.plugins) {
                  $window.plugins.webintent.onNewIntent(callback);
              }
          },
          sendBroadcast: function(params) {
              var q = $q.defer();

              if (!$window.cordova) {
                  q.reject('Not supported without cordova.js');
              } else {
                  $window.plugins.webintent.sendBroadcast(params, function (result) {
                      q.resolve(result);
                  }, function (err) {
                      q.reject(err);
                  });
              }

              return q.promise;
          },

          actionSend: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.ACTION_SEND;
              }
          },
          actionView: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.ACTION_VIEW;
              }
          },
          actionCall: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.ACTION_CALL;
              }
          },
          actionSendTo: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.ACTION_SENDTO;
              }
          },
          extraText: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.EXTRA_TEXT;
              }
          },
          extraSubject: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.EXTRA_SUBJECT;
              }
          },
          extraStream: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.EXTRA_STREAM;
              }
          },
          extraEmail: function() {
              if ($window.plugins) {
                  return $window.plugins.webintent.EXTRA_EMAIL;
              }
          }


      };
  }] );
