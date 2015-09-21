/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaDiagnostic
 *
 * @description
 * A service for testing diagnostic services
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaDiagnostic', ['$interval', '$q', function ($interval, $q) {
  var throwsError = false;
  var useHostAbilities = true;

  return {
    /**
     @ngdoc property
     @name throwsError
     @propertyOf ngCordovaMocks.cordovaDiagnostic

     @description
     A flag that signals whether a promise should be rejected or not.
     This property should only be used in automated tests.
     */
    throwsError: throwsError,

    /**
     @ngdoc property
     @name useHostAbilities
     @propertyOf ngCordovaMocks.cordovaDiagnostic

     @description
     A flag that signals whether or not to try and use the host's
     (browser or otherwise) diagnostic capabilities.
     This property should only be used in automated tests.
     */
    useHostAbilities: useHostAbilities,

    /**
     * Android and iOS
     */

    isLocationEnabled: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the location status.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            cordova.plugins.diagnostic.isLocationEnabled(
              function (result) {
                defer.resolve(result);
              },
              function (error) {
                defer.reject(error);
              }
            );
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    isWifiEnabled: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the wifi status.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            cordova.plugins.diagnostic.isWifiEnabled(
              function (result) {
                defer.resolve(result);
              },
              function (error) {
                defer.reject(error);
              }
            );
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    isCameraEnabled: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the camera status.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            cordova.plugins.diagnostic.isCameraEnabled(
              function (result) {
                defer.resolve(result);
              },
              function (error) {
                defer.reject(error);
              }
            );
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    isBluetoothEnabled: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the bluetooth status.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            cordova.plugins.diagnostic.isBluetoothEnabled(
              function (result) {
                defer.resolve(result);
              },
              function (error) {
                defer.reject(error);
              }
            );
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    isWifiEnabled: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the wifi status.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            cordova.plugins.diagnostic.isWifiEnabled(
              function (result) {
                defer.resolve(result);
              },
              function (error) {
                defer.reject(error);
              }
            );
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    /**
     * Android only
     */

    switchToLocationSettings: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error switching to the location settings.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            if(cordova.plugins.diagnostic.switchToLocationSettings()) {
              defer.resolve(true);
            } else {
              defer.reject('Switch to location settings is not supported.');
            }
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    switchToMobileDataSettings: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error switching to the mobile data settings.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            if(cordova.plugins.diagnostic.switchToMobileDataSettings()) {
              defer.resolve(true);
            } else {
              defer.reject('Switch to mobile data settings is not supported.');
            }
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    switchToBluetoothSettings: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error switching to the bluetooth settings.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            if(cordova.plugins.diagnostic.switchToBluetoothSettings()) {
              defer.resolve(true);
            } else {
              defer.reject('Switch to bluetooth settings is not supported.');
            }
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    switchToWifiSettings: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error switching to the wifi settings.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            if(cordova.plugins.diagnostic.switchToWifiSettings()) {
              defer.resolve(true);
            } else {
              defer.reject('Switch to wifi settings is not supported.');
            }
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    /**
     * iOS only
     */
    isLocationEnabledSetting: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the location enabled setting status.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            cordova.plugins.diagnostic.isLocationEnabledSetting(
              function (result) {
                defer.resolve(result);
              },
              function (error) {
                defer.reject(error);
              }
            );
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },

    isLocationAuthorized: function () {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was an error getting the location authorized status.');
      } else {
        if (this.useHostAbilities) {
          if (cordova.plugins.diagnostic) {
            cordova.plugins.diagnostic.isLocationAuthorized(
              function (result) {
                defer.resolve(result);
              },
              function (error) {
                defer.reject(error);
              }
            );
          } else {
            defer.reject('Diagnostic is not supported by this browser.');
          }
        } else {
          defer.resolve(true);
        }
      }

      return defer.promise;
    },
  };
}]);
