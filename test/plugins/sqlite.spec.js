describe('Service: $cordovaSQLite', function() {

  var $cordovaSQLite, $rootScope, dbMock;

  beforeEach(module('ngCordova.plugins.sqlite'));

  beforeEach(inject(function (_$cordovaSQLite_, _$rootScope_) {
    $cordovaSQLite = _$cordovaSQLite_;
    $rootScope = _$rootScope_;

    window.sqlitePlugin = {
      openDatabase: angular.noop,
      deleteDatabase: angular.noop
    };
  }));

  it('should call window\'s sqlitePlugin.open method without background', function() {

    var dbName = 'someDbName';
    spyOn(window.sqlitePlugin, 'openDatabase');
    $cordovaSQLite.openDB(dbName);

    expect(window.sqlitePlugin.openDatabase).toHaveBeenCalledWith({
      name: dbName,
      bgType: 0
    });
  });

  it('should call window\'s sqlitePlugin.open method with background', function() {

    var dbName = 'someDbName';
    var bgType = 2;
    spyOn(window.sqlitePlugin, 'openDatabase');
    $cordovaSQLite.openDB(dbName, bgType);

    expect(window.sqlitePlugin.openDatabase).toHaveBeenCalledWith({
      name: dbName,
      bgType: bgType
    });
  });

  it('should call window\'s sqlitePlugin.deleteDB method', function() {

    var result;
    var dbName = 'someDbName';

    spyOn(window.sqlitePlugin, 'deleteDatabase')
      .andCallFake(function (dbName, successCb, errorCb) {
        successCb(true);
      });

    $cordovaSQLite.deleteDB(dbName)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
  });

  it('should call errorCb when in window\'s sqlitePlugin.deleteDatabase a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };
    var dbName = 'someDbName';

    spyOn(window.sqlitePlugin, 'deleteDatabase')
      .andCallFake(function (dbName, successCb, errorCb) {
        errorCb(errorObj);
      });

    $cordovaSQLite.deleteDB(dbName)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

});
