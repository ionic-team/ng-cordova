// install   :     cordova plugin add https://github.com/christocracy/cordova-plugin-background-geolocation.git
// link      :     https://github.com/christocracy/cordova-plugin-background-geolocation

angular.module('ngCordova.plugins.backgroundGeolocation', [])

  .factory('$cordovaBackgroundGeolocation', ['$q', '$window', function ($q, $window) {

    var BackgroundGeolocation =
      (
        ($window.plugins && $window.plugins.backgroundGeolocation) ?
        $window.plugins.backgroundGeoLocation :
        undefined
      ) ||
      (
        ($window.BackgroundGeolocation) ?
        $window.BackgroundGeolocation :
        undefined
      ) || {};

    var EVENTS = [
      'location', //  Fired whenever a new location is recorded.
      'motionchange', //  Fired when the device changes state between stationary and moving
      'activitychange', //  Fired when the activity-recognition system detects a change in detected-activity (still, on_foot, in_vehicle, on_bicycle, running)
      'providerchange', //  Fired when a change in the state of the device's Location Services has been detected. eg: "GPS ON", "Wifi only".
      'geofence', //  Fired when a geofence crossing event occurs.
      'geofenceschange', //   Fired when the list of monitored geofences within #geofenceProximityRadius changed
      'http', //  Fired after a successful HTTP response. response object is provided with status and responseText.
      'heartbeat', //   Fired each #heartbeatInterval while the plugin is in the stationary state with. Your callback will be provided with a params {} containing the last known location {Object}
      'schedule', //  Fired when a schedule event occurs. Your callbackFn will be provided with the current state Object.
      'powersavechange' //   Fired when the state of the operating-system's "Power Saving" system changes. Your callbackFn will be provided with a Boolean showing whether "Power Saving" is enabled or disabled
    ];

    return {

      EVENTS: EVENTS,

      init: function () {
        $window.navigator.geolocation.getCurrentPosition(function (location) {
          return location;
        });
      },

      // CORE API
      
      //configure  {config}, successFn, failureFn Initializes the plugin and configures its config options.  The success callback will be executed after the plugin has successfully configured and provided with the current state Object.
      configure: function (options) {

        this.init();
        var q = $q.defer();

        BackgroundGeolocation.configure(
          function (result) {
            q.notify(result);
            BackgroundGeolocation.finish();
          },
          function (err) {
            q.reject(err);
          }, options);

        this.start();

        return q.promise;
      },

      // setConfig {config}, successFn, failureFn  Re-configure the plugin with new config options.
      setConfig: function () {
        var q = $q.defer();
        return q.promise;
      },

      // on  event,successFn,failureFn   Adds an event-listener
      on: function (event, successCb, failureCb) {
        BackgroundGeolocation.on(event, successCb, failureCb);
      },

      // un  event,callbackFn,   Removes an event-listener
      un: function (event) {
        var q = $q.defer();

        BackgroundGeolocation.un(event,
          function (result) {
            q.resolve(result);
          });

        return q.promise;
      },

      // start   callbackFn  Enable location tracking. Supplied callbackFn will be executed when tracking is successfully engaged. This is the plugin's power ON button.
      start: function () {
        var q = $q.defer();

        BackgroundGeolocation.start(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      // stop    callbackFn  Disable location tracking. Supplied callbackFn will be executed when tracking is successfully halted. This is the plugin's power OFF button.
      stop: function () {
        var q = $q.defer();

        BackgroundGeolocation.stop(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      // getState  callbackFn  Fetch the current-state of the plugin, including enabled, isMoving, as well as all other config params
      getState: function () {
        var q = $q.defer();
        return q.promise;
      },

      // getCurrentPosition  successFn, failureFn, {options}   Retrieves the current position using maximum power & accuracy by fetching a number of samples and returning the most accurate to your callbackFn.
      getCurrentPosition: function () {
        var q = $q.defer();
        return q.promise;
      },

      // watchPosition   successFn, failureFn, {options}   Start a stream of continuous location-updates.
      watchPosition: function () {
        var q = $q.defer();
        return q.promise;
      },

      // stopWatchPosition   successFn, failureFn  Halt #watchPosition updates.
      stopWatchPosition: function () {
        var q = $q.defer();
        return q.promise;
      },

      // changePace  Boolean, successFn  Toggles the plugin's state between stationary and moving.
      changePace: function () {
        var q = $q.defer();
        return q.promise;
      },


      // getOdometer   callbackFn  The plugin constantly tracks distance travelled. The supplied callback will be executed and provided with the distance (meters) as the 1st parameter.
      getOdometer: function () {
        var q = $q.defer();
        return q.promise;
      },

      // setOdometer   Integer, callbackFn   Set the odometer to any arbitrary value. NOTE setOdometer will perform a getCurrentPosition in order to record to exact location where odometer was set; as a result, the callback signatures are identical to those of getCurrentPosition.
      setOdometer: function () {
        var q = $q.defer();
        return q.promise;
      },

      // resetOdometer   callbackFn  Reset the odometer to 0. Alias for setOdometer(0)
      resetOdometer: function () {
        var q = $q.defer();
        return q.promise;
      },

      // startSchedule   callbackFn  If a schedule was configured, this method will initiate that schedule.
      startSchedule: function () {
        var q = $q.defer();
        return q.promise;
      },

      // stopSchedule  callbackFn  This method will stop the Scheduler service. Your callbackFn will be executed after the Scheduler has stopped
      stopSchedule: function () {
        var q = $q.defer();
        return q.promise;
      },

      // removeListeners   none  Remove all events-listeners registered with #on method
      removeListeners: function () {
        var q = $q.defer();
        return q.promise;
      },

      // startBackgroundTask   callbackFn  Sends a signal to the native OS that you wish to perform a long-running task. The OS will not suspend your app until you signal completion with the #finish method.
      startBackgroundTask: function () {
        var q = $q.defer();
        return q.promise;
      },

      // finish  taskId  Sends a signal to the native OS the supplied taskId is complete and the OS may proceed to suspend your application if applicable.
      finish: function () {
        var q = $q.defer();
        return q.promise;
      },

      // isPowerSaveMode   callbackFn  Fetches the state of the operating-systems "Power Saving" mode, whether enabled or disabled
      isPowerSaveMode: function () {
        var q = $q.defer();
        return q.promise;
      },

      // GEOFENCE API

      // startGeofences  callbackFn  Engages the geofences-only trackingMode. In this mode, no active location-tracking will occur -- only geofences will be monitored
      startGeofences: function () {
        var q = $q.defer();
        return q.promise;
      },

      // addGeofence   {config}, successFn, failureFn  Adds a geofence to be monitored by the native plugin.
      addGeofence: function (config) {
        var q = $q.defer();

        BackgroundGeolocation.addGeofence(config,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      // addGeofences  [geofences], sucessFn, failureFn  Adds a list geofences to be monitored by the native plugin.
      addGeofences: function (geofences) {
        var q = $q.defer();

        BackgroundGeolocation.addGeofences(geofences,
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      // removeGeofence  identifier, successFn, failureFn  Removes a geofence identified by the provided identifier
      removeGeofence: function () {
        var q = $q.defer();
        return q.promise;
      },

      // removeGeofences   successFn, failureFn  Removes all geofences
      removeGeofences: function () {
        var q = $q.defer();

        BackgroundGeolocation.removeGeofences(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      // getGeofences  callbackFn  Fetch the list of monitored geofences.
      getGeofences: function () {
        var q = $q.defer();

        BackgroundGeolocation.getGeofences(
          function (result) {
            q.resolve(result);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      // HTTP & PERSISTENCE API

      // getLocations  callbackFn  Fetch all the locations currently stored in native plugin's SQLite database. Your callbackFn will receive an Array of locations in the 1st parameter
      getLocations: function () {
        var q = $q.defer();
        return q.promise;
      },

      // getCount  callbackFn  Fetches count of SQLite locations table SELECT count(*) from locations
      getCount: function () {
        var q = $q.defer();
        return q.promise;
      },

      // destroyLocations  callbackFn  Delete all records in plugin's SQLite database
      destroyLocations: function () {
        var q = $q.defer();
        return q.promise;
      },

      // sync  successFn, failureFn  If the plugin is configured for HTTP with an #url and #autoSync: false, this method will initiate POSTing the locations currently stored in the native SQLite database to your configured #url
      sync: function () {
        var q = $q.defer();
        return q.promise;
      },

      // LOGGING METHODS

      // setLogLevel   Integer, callbackFn   Set the Log filter: LOG_LEVEL_OFF, LOG_LEVEL_ERROR, LOG_LEVEL_WARNING, LOG_LEVEL_INFO, LOG_LEVEL_DEBUG, LOG_LEVEL_VERBOSE
      setLogLevel: function () {
        var q = $q.defer();
        return q.promise;
      },

      // getLog  callbackFn  Fetch the entire contents of the current log database as a String.
      getLog: function () {
        var q = $q.defer();
        return q.promise;
      },
      
      // destroyLog  callbackFn, failureFn   Destroy the contents of the Log database.
      destroyLog: function () {
        var q = $q.defer();
        return q.promise;
      },
      
      // emailLog  email, callbackFn   Fetch the entire contents of Log database and email it to a recipient using the device's native email client.
      emailLog: function () {
        var q = $q.defer();
        return q.promise;
      },
      
      // getSensors  callbackFn, failureFn   Returns the presense of device sensors accelerometer, gyroscope, magnetometer, in addition to iOS/Android-specific sensors
      getSensors: function () {
        var q = $q.defer();
        return q.promise;
      },

      // playSound   Integer   Here's a fun one. The plugin can play a number of OS system sounds for each platform. For IOS and Android. I offer this API as-is, it's up to you to figure out how this works.
      playSound: function () {
        var q = $q.defer();
        return q.promise;
      },
      
      logger: {
        // logger.error  message   Record a :exclamation: log message into the plugin's log database.
        error: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.warn   message   Record a :warning: log message into the plugin's log database.
        warn: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.debug  message   Record a :beetle: log message into the plugin's log database.
        debug: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.info   message   Record a :information_source: log message into the plugin's log database.
        info: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.notice   message   Record a :large_blue_circle: log message into the plugin's log database.
        notice: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.header   message   Record a header log message into the plugin's log database.
        header: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.on   message   Record a :tennis: log message into the plugin's log database.
        on: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.off  message   Record a :red_circle: log message into the plugin's log database.
        off: function () {
          var q = $q.defer();
          return q.promise;
        },
        // logger.ok   message   Record a :white_check_mark: log message into the plugin's
        ok: function () {
          var q = $q.defer();
          return q.promise;
        }
      }
    };
  }
]);