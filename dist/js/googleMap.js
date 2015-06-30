System.register('ng-cordova/googleMap', [], function (_export) {
  // install   :
  // link      :

  // Google Maps needs ALOT of work!
  // Not for production use

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.googleMap', []).factory('$cordovaGoogleMap', ['$q', '$window', function ($q, $window) {

        var map = null;

        return {
          getMap: function getMap(options) {
            var q = $q.defer();

            if (!$window.plugin.google.maps) {
              q.reject(null);
            } else {
              var div = document.getElementById('map_canvas');
              map = $window.plugin.google.maps.Map.getMap(options);
              map.setDiv(div);
              q.resolve(map);
            }
            return q.promise;
          },

          isMapLoaded: function isMapLoaded() {
            // check if an instance of the map exists
            return !!map;
          },
          addMarker: function addMarker(markerOptions) {
            // add a marker to the map with given markerOptions
            var q = $q.defer();
            map.addMarker(markerOptions, function (marker) {
              q.resolve(marker);
            });

            return q.promise;
          },
          getMapTypeIds: function getMapTypeIds() {
            return $window.plugin.google.maps.mapTypeId;
          },
          setVisible: function setVisible(isVisible) {
            var q = $q.defer();
            map.setVisible(isVisible);
            return q.promise;
          },
          // I don't know how to deallocate te map and the google map plugin.
          cleanup: function cleanup() {
            map = null;
            // delete map;
          }
        };
      }]);
    }
  };
});