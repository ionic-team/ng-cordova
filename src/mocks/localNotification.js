
/**
 * @ngdoc service
 * @name ngCordovaMocks.localNotification
 *
 * @description
 * A service for testing LocalNotificatio
 * in an app build with ngCordovaMocks.
 */

ngCordovaMocks.factory('$cordovaLocalNotification', ['$q', function ($q) {

  var storageKeyPfx  = "ngCordLocNotif-";
  
  function pfxId(id) {
    return storageKeyPfx + id;
  }

  function getAllIds(){
    var defer = $q.defer();
    var locNotifIds = [];
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      if (localStorage.key( i ).indexOf(storageKeyPfx) > -1)
        locNotifIds.push(parseInt(localStorage.key( i ).split("-")[1]));
    }
    defer.resolve(locNotifIds);
    return defer.promise;
  }


  return {
    cancel: function (ids) {
      var defer = $q.defer();
      if (typeof(ids) == "number") ids = [ids];
      ids.forEach(function (id){
        localStorage.removeItem([pfxId(id)]);
      });      
      defer.resolve();
      return defer.promise;
    },
    cancelAll: function () {
      var defer = $q.defer();
      // TODO
      defer.resolve();
      return defer.promise;
    },
    clear: function (ids) {
      if (typeof(ids) == "number") ids = [ids];
      var defer = $q.defer();
      ids.forEach(function (id){
        localStorage.removeItem([pfxId(id)]);
      });      
      defer.resolve();
      return defer.promise;
    },
    clearAll: function () {
      var defer = $q.defer();
      // TODO
      // defer.resolve();
      return defer.promise;
    },
    isScheduled: function (id){
      var defer = $q.defer();
      if (localStorage[pfxId(id)]) {
        defer.resolve(true);
      } else {
        defer.resolve(false);
      }
      return defer.promise;
    },
    isPresent: function (id){
      var defer = $q.defer();
      if (localStorage[pfxId(id)]) {
        defer.resolve(true);
      } else {
        defer.resolve(false);
      }
      return defer.promise;
    },
    isTriggered: function (id){
      var defer = $q.defer();
      if (localStorage[pfxId(id)]) {
        defer.resolve(false);
      } else {
        defer.resolve(true);
      }
      return defer.promise;
    },
    getAllIds: function () {
      return getAllIds();
    },
    getIds: function () {
      return getAllIds();
    },
    getScheduledIds:  function () {
      return getAllIds();
    },
    getTriggeredIds: function () {
      var defer = $q.defer();
      defer.resolve([]);
      return defer.promise;
    },
    hasPermission: function (id){
      var defer = $q.defer();
      defer.resolve(true);
      return defer.promise;
    },
    schedule: function (data){
      var defer = $q.defer();
      var id = pfxId(data.id);
      localStorage[id] = JSON.stringify(data);
      defer.resolve();
      return defer.promise;
    },
    update: function (data){
      var defer = $q.defer();
      var id = pfxId(data.id);
      localStorage[id] = JSON.stringify(data);
      defer.resolve();
      return defer.promise;
    }
  };
}]);