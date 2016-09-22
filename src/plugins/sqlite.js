// install   :      cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
// link      :      https://github.com/litehelpers/Cordova-sqlite-storage

angular.module('ngCordova.plugins.sqlite', [])

  .factory('$cordovaSQLite', ['$q', '$window', function ($q, $window) {

    return {
      openDB: function (options, background) {
        var q = $q.defer();
        if (angular.isObject(options) && !angular.isString(options)) {
            if (typeof background !== 'undefined') {
                options.bgType = background;
            }
        }
        else {
            options = {
                name: options,
                bgType: background
            };
        }
        $window.sqlitePlugin.openDatabase(options, q.resolve, q.reject);
        return q.promise;
      },

      execute: function (db, query, binding) {
        var q = $q.defer();
        db.executeSql(query, binding, function (result) {
          q.resolve(result);
        },
        function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      batch: function (db, queries) {
        var q = $q.defer();
        db.sqlBatch(queries, function () {
          q.resolve();
        },
        function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      insertCollection: function (db, query, bindings) {
        if (!bindings || bindings.constructor !== Array) {
          throw new Error('insertCollection expects an array');
        }

        var q = $q.defer();

        if (db.sqlBatch) {
          var queryBatch = [], i = 0, len = bindings.length;

          for (i; i < len; i++) {
            queryBatch.push([query, bindings[i]]);
          }

          db.sqlBatch(queryBatch, 
            function() {
              q.resolve();
            }, function(error) {
              q.reject(error);
            });
        } else {
          var coll = bindings.slice(0); // clone collection

          db.transaction(function (tx) {
            (function insertOne() {
              var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
              try {
                tx.executeSql(query, record, function (tx, result) {
                  if (coll.length === 0) {
                    q.resolve(result);
                  } else {
                    insertOne();
                  }
                }, function (transaction, error) {
                  q.reject(error);
                  return;
                });
              } catch (exception) {
                q.reject(exception);
              }
            })();
          });
        }

        return q.promise;
      },

      nestedExecute: function (db, query1, query2, binding1, binding2) {
        var q = $q.defer();

        db.transaction(function (tx) {
            tx.executeSql(query1, binding1, function (tx, result) {
              q.resolve(result);
              tx.executeSql(query2, binding2, function (tx, res) {
                q.resolve(res);
              });
            });
          },
          function (transaction, error) {
            q.reject(error);
          });

        return q.promise;
      },

      closeDB: function (db) {
        var q = $q.defer();

        db.close(function (success) {
          q.resolve(success);
        }, function (error) {
          q.reject(error);
        });

        return q.promise;
      },

      deleteDB: function (dbName) {
        var q = $q.defer();

        $window.sqlitePlugin.deleteDatabase(dbName, function (success) {
          q.resolve(success);
        }, function (error) {
          q.reject(error);
        });

        return q.promise;
      }
    };
  }]);
