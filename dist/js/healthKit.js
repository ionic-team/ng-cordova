System.register('ng-cordova/healthKit', [], function (_export) {
  // install   :      cordova plugin add https://github.com/Telerik-Verified-Plugins/HealthKit.git
  // link      :      https://github.com/Telerik-Verified-Plugins/HealthKit

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.healthKit', []).factory('$cordovaHealthKit', ['$q', '$window', function ($q, $window) {

        return {
          isAvailable: function isAvailable() {
            var q = $q.defer();

            $window.plugins.healthkit.available(function (success) {
              q.resolve(success);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          /**
           * Check whether or not the user granted your app access to a specific HealthKit type.
           * Reference for possible types:
           * https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Constants/
           */
          checkAuthStatus: function checkAuthStatus(type) {
            var q = $q.defer();

            type = type || 'HKQuantityTypeIdentifierHeight';

            $window.plugins.healthkit.checkAuthStatus({
              'type': type
            }, function (success) {
              q.resolve(success);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          /**
           * Request authorization to access HealthKit data. See the full HealthKit constants
           * reference for possible read and write types:
           * https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Constants/
           */
          requestAuthorization: function requestAuthorization(readTypes, writeTypes) {
            var q = $q.defer();

            readTypes = readTypes || ['HKCharacteristicTypeIdentifierDateOfBirth', 'HKQuantityTypeIdentifierActiveEnergyBurned', 'HKQuantityTypeIdentifierHeight'];
            writeTypes = writeTypes || ['HKQuantityTypeIdentifierActiveEnergyBurned', 'HKQuantityTypeIdentifierHeight', 'HKQuantityTypeIdentifierDistanceCycling'];

            $window.plugins.healthkit.requestAuthorization({
              'readTypes': readTypes,
              'writeTypes': writeTypes
            }, function (success) {
              q.resolve(success);
            }, function (err) {
              q.reject(err);
            });

            return q.promise;
          },

          readDateOfBirth: function readDateOfBirth() {
            var q = $q.defer();
            $window.plugins.healthkit.readDateOfBirth(function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });

            return q.promise;
          },

          readGender: function readGender() {
            var q = $q.defer();
            $window.plugins.healthkit.readGender(function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });

            return q.promise;
          },

          saveWeight: function saveWeight(value, units, date) {
            var q = $q.defer();
            $window.plugins.healthkit.saveWeight({
              'unit': units || 'lb',
              'amount': value,
              'date': date || new Date()
            }, function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });
            return q.promise;
          },

          readWeight: function readWeight(units) {
            var q = $q.defer();
            $window.plugins.healthkit.readWeight({
              'unit': units || 'lb'
            }, function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });

            return q.promise;
          },
          saveHeight: function saveHeight(value, units, date) {
            var q = $q.defer();
            $window.plugins.healthkit.saveHeight({
              'unit': units || 'in',
              'amount': value,
              'date': date || new Date()
            }, function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });
            return q.promise;
          },
          readHeight: function readHeight(units) {
            var q = $q.defer();
            $window.plugins.healthkit.readHeight({
              'unit': units || 'in'
            }, function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });

            return q.promise;
          },

          findWorkouts: function findWorkouts() {
            var q = $q.defer();
            $window.plugins.healthkit.findWorkouts({}, function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });
            return q.promise;
          },

          /**
           * Save a workout.
           *
           * Workout param should be of the format:
           {
             'activityType': 'HKWorkoutActivityTypeCycling', // HKWorkoutActivityType constant (https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType)
             'quantityType': 'HKQuantityTypeIdentifierDistanceCycling',
             'startDate': new Date(), // mandatory
             'endDate': null, // optional, use either this or duration
             'duration': 3600, // in seconds, optional, use either this or endDate
             'energy': 300, //
             'energyUnit': 'kcal', // J|cal|kcal
             'distance': 11, // optional
             'distanceUnit': 'km' // probably useful with the former param
             // 'extraData': "", // Not sure how necessary this is
           },
           */
          saveWorkout: function saveWorkout(workout) {
            var q = $q.defer();
            $window.plugins.healthkit.saveWorkout(workout, function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });
            return q.promise;
          },

          /**
           * Sample any kind of health data through a given date range.
           * sampleQuery of the format:
           {
          			'startDate': yesterday, // mandatory
          			'endDate': tomorrow, // mandatory
          			'sampleType': 'HKQuantityTypeIdentifierHeight',
          			'unit' : 'cm'
          	},
           */
          querySampleType: function querySampleType(sampleQuery) {
            var q = $q.defer();
            $window.plugins.healthkit.querySampleType(sampleQuery, function (success) {
              q.resolve(success);
            }, function (err) {
              q.resolve(err);
            });
            return q.promise;
          }
        };
      }]);
    }
  };
});