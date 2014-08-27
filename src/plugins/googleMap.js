angular.module('ngCordova.plugins.googleMap', [])

.factory('$cordovaGoogleMap', ['$q', function($q) {
  // store the only instance of the map
  var map = null;
  return {
    getMap: function(options) { // create an instance of the map or return the instance previously created
      var q = $q.defer();
      // if map is defined return map
      if(map){q.resolve(map); return q.promise};

      if(!window.plugin.google.maps){
        q.resolve(null);
        return q.promise;
      }else{ // create an instance of the map and bind it to the div #map_canvas
          var div = document.getElementById("map_canvas");
          map=window.plugin.google.maps.Map.getMap(options);
          map.setDiv(div);
          q.resolve(map);
      }
      return q.promise;
    },
    isMapLoaded: function(){ // check if an instance of the map exists
          if(map) return true;
          else return false;
    },
      addMarker: function (markerOptions) { // add a marker to the map with given markerOptions
        var q = $q.defer();
          map.addMarker(markerOptions,function(marker){
            q.resolve(marker); 
          }); 
        
        return q.promise;
      },
     getMapTypeIds: function(){
        return window.plugin.google.maps.mapTypeId;
     },
     setVisible: function (isVisible) {
        var q = $q.defer();
        map.setVisible(isVisible);
       return q.promise;
     },
     // I don't know how to deallocate te map and the google map plugin.
     cleanup: function () {
        map = null;
        delete map;
     },
  }
}]);
