/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaSQLite
 *
 * @description
 * A service for testing SQLite
 * in an app build with ngCordova.
 */

ngCordovaMocks.factory('$cordovaSQLite', ['$q', function ($q) {

  return {
    /**
     * These properties are here for the purpose of automated testing only.
     **/
    openDBShouldSucceedWith: null,
    executeShouldSucceedWith: null,
    insertCollectionShouldSucceedWith: null,
    nestedExecuteShouldSucceedWith: null,
    deleteDBShouldSucceedWith : null,

    openDB: function (options, background) {
      if (this.openDBShouldSucceedWith !== null) {
        $q.when(this.openDBShouldSucceedWith)
      } else {
        $q.reject()
      }
    },
    execute: function (db, query, binding) {
      if (this.executeShouldSucceedWith !== null) {
        $q.when(this.executeShouldSucceedWith)
      } else {
        $q.reject()
      }
    },
    insertCollection: function (db, query, bindings) {
      if (this.insertCollectionShouldSucceedWith !== null) {
        $q.when(this.insertCollectionShouldSucceedWith)
      } else {
        $q.reject()
      }
    },
    nestedExecute: function (db, query1, query2, binding1, binding2) {
      if (this.nestedExecuteShouldSucceedWith !== null) {
        $q.when(this.nestedExecuteShouldSucceedWith)
      } else {
        $q.reject()
      }
    },
    deleteDB: function (dbName) {
      if (this.deleteDBShouldSucceedWith !== null) {
        $q.when(this.deleteDBShouldSucceedWith)
      } else {
        $q.reject()
      }
    }
  }
}]);
