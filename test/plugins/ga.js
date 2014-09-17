describe('Service: $cordovaGA', function() {

  var $cordovaGA, $rootScope, $window;

  beforeEach(module('ngCordova.plugins.ga'));

  beforeEach(inject(function (_$cordovaGA_, _$window_, _$rootScope_) {
    $cordovaGA = _$cordovaGA_;
    $window = _$window_;
    $rootScope = _$rootScope_;

    $window.analytics = {
      startTrackerWithId: angular.noop,
      setUserId: angular.noop,
      debugMode: angular.noop,
      trackView: angular.noop,
      addCustomDimension: angular.noop,
      trackEvent: angular.noop,
      addTransaction: angular.noop,
      addTransactionItem: angular.noop,
    };
  }));

  it('should call $window\'s analytics.startTrackerWithId method', function() {

    var result;

    spyOn($window.analytics, 'startTrackerWithId')
      .andCallFake(function (id, successCb, errorCb) {
        successCb('tracker started');
      });

    $cordovaGA
      .startTrackerWithId('UA-000000-01')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('tracker started');
    expect($window.analytics.startTrackerWithId.calls[0].args[0]).toBe('UA-000000-01');
  });

  it('should call errorCb when in $window\'s analytics.startTrackerWithId a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'startTrackerWithId')
      .andCallFake(function (id, successCb, errorCb) {
        errorCb('tracker id is not valid');
      });

    $cordovaGA.startTrackerWithId()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('tracker id is not valid');
  });

  it('should call $window\'s analytics.setUserId method', function() {

    var result;

    spyOn($window.analytics, 'setUserId')
      .andCallFake(function (id, successCb, errorCb) {
        successCb('Set user id: ' + id);
      });

    $cordovaGA
      .setUserId('USER_ID')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Set user id: USER_ID');
    expect($window.analytics.setUserId.calls[0].args[0]).toBe('USER_ID');
  });

  it('should call errorCb when in $window\'s analytics.setUserId a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'setUserId')
      .andCallFake(function (id, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGA.setUserId()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s analytics.debugMode method', function() {

    var result;

    spyOn($window.analytics, 'debugMode')
      .andCallFake(function (successCb, errorCb) {
        successCb('debugMode enabled');
      });

    $cordovaGA
      .debugMode()
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('debugMode enabled');
  });

  it('should call errorCb when in $window\'s analytics.debugMode a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'debugMode')
      .andCallFake(function (successCb, errorCb) {
        errorCb();
      });

    $cordovaGA.debugMode()
      .then(angular.noop, function (response) {
        result = 'error orccurs';
      });

    $rootScope.$digest();

    expect(result).toBe('error orccurs');
  });

  it('should call $window\'s analytics.trackView method', function() {

    var result;

    spyOn($window.analytics, 'trackView')
      .andCallFake(function (screenName, successCb, errorCb) {
        successCb('Track Screen: ' + screenName);
      });

    $cordovaGA
      .trackView('Home Screen')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Track Screen: Home Screen');
    expect($window.analytics.trackView.calls[0].args[0]).toBe('Home Screen');
  });

  it('should call errorCb when in $window\'s analytics.trackView a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'trackView')
      .andCallFake(function (screenName, successCb, errorCb) {
        errorCb('Expected one non-empty string argument');
      });

    $cordovaGA.trackView()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Expected one non-empty string argument');
  });

  it('should call $window\'s analytics.addCustomDimension method', function() {

    var result;

    spyOn($window.analytics, 'addCustomDimension')
      .andCallFake(function (key, value, successCb, errorCb) {
        successCb();
      });

    $cordovaGA
      .addCustomDimension('dimension1', 'Level 1')
      .then(function (response) {
        result = 'success';
      });

    $rootScope.$digest();

    expect(result).toBe('success');
    expect($window.analytics.addCustomDimension.calls[0].args[0]).toBe('dimension1');
    expect($window.analytics.addCustomDimension.calls[0].args[1]).toBe('Level 1');
  });

  it('should call errorCb when in $window\'s analytics.addCustomDimension a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'addCustomDimension')
      .andCallFake(function (key, value, successCb, errorCb) {
        errorCb('Expected one non-empty string argument');
      });

    $cordovaGA.addCustomDimension()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Expected one non-empty string argument');
  });

  it('should call $window\'s analytics.trackEvent method', function() {

    var result;

    spyOn($window.analytics, 'trackEvent')
      .andCallFake(function (category, action, label, value, successCb, errorCb) {
        successCb('Track Event: ' + category);
      });

    $cordovaGA
      .trackEvent('Videos', 'Video Load Time', 'Gone With the Wind', 100)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Track Event: Videos');
    expect($window.analytics.trackEvent).toHaveBeenCalledWith(
      'Videos', 'Video Load Time', 'Gone With the Wind', 100,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s analytics.trackEvent a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'trackEvent')
      .andCallFake(function (category, action, label, value, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGA.trackEvent()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s analytics.addTransaction method', function() {

    var result;

    spyOn($window.analytics, 'addTransaction')
      .andCallFake(function (transactionId, affiliation, revenue, tax, shipping, currencyCode, successCb, errorCb) {
        successCb('Add Transaction: ' + transactionId);
      });

    $cordovaGA
      .addTransaction('1234', 'Acme Clothing', '11.99', '5', '1.29', 'EUR')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Add Transaction: 1234');
    expect($window.analytics.addTransaction).toHaveBeenCalledWith(
      '1234', 'Acme Clothing', '11.99', '5', '1.29', 'EUR',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s analytics.addTransaction a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'addTransaction')
      .andCallFake(function (transactionId, affiliation, revenue, tax, shipping, currencyCode, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGA.addTransaction()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s analytics.addTransactionItem method', function() {

    var result;

    spyOn($window.analytics, 'addTransactionItem')
      .andCallFake(function (transactionId, name ,sku, category, price, quantity, currencyCode, successCb, errorCb) {
        successCb('Add Transaction Item: ' + transactionId);
      });

    $cordovaGA
      .addTransactionItem('1234', 'Fluffy Pink Bunnies', 'DD23444', 'Party Toys', '11.99', '1', 'GBP')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Add Transaction Item: 1234');
    expect($window.analytics.addTransactionItem).toHaveBeenCalledWith(
      '1234', 'Fluffy Pink Bunnies', 'DD23444', 'Party Toys', '11.99', '1', 'GBP',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s analytics.addTransactionItem a error orccurs', function() {

    var result;

    spyOn($window.analytics, 'addTransactionItem')
      .andCallFake(function (transactionId, name ,sku, category, price, quantity, currencyCode, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGA.addTransactionItem()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

});
