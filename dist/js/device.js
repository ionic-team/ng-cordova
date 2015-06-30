System.register('ng-cordova/device', [], function (_export) {
  // install   :     cordova plugin add cordova-plugin-device
  // link      :     https://github.com/apache/cordova-plugin-device

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.device', []).factory('$cordovaDevice', [function () {

        return {
          /**
           * Returns the whole device object.
           * @see https://github.com/apache/cordova-plugin-device
           * @returns {Object} The device object.
           */
          getDevice: function getDevice() {
            return device;
          },

          /**
           * Returns the Cordova version.
           * @see https://github.com/apache/cordova-plugin-device#devicecordova
           * @returns {String} The Cordova version.
           */
          getCordova: function getCordova() {
            return device.cordova;
          },

          /**
           * Returns the name of the device's model or product.
           * @see https://github.com/apache/cordova-plugin-device#devicemodel
           * @returns {String} The name of the device's model or product.
           */
          getModel: function getModel() {
            return device.model;
          },

          /**
           * @deprecated device.name is deprecated as of version 2.3.0. Use device.model instead.
           * @returns {String}
           */
          getName: function getName() {
            return device.name;
          },

          /**
           * Returns the device's operating system name.
           * @see https://github.com/apache/cordova-plugin-device#deviceplatform
           * @returns {String} The device's operating system name.
           */
          getPlatform: function getPlatform() {
            return device.platform;
          },

          /**
           * Returns the device's Universally Unique Identifier.
           * @see https://github.com/apache/cordova-plugin-device#deviceuuid
           * @returns {String} The device's Universally Unique Identifier
           */
          getUUID: function getUUID() {
            return device.uuid;
          },

          /**
           * Returns the operating system version.
           * @see https://github.com/apache/cordova-plugin-device#deviceversion
           * @returns {String}
           */
          getVersion: function getVersion() {
            return device.version;
          }
        };
      }]);
    }
  };
});