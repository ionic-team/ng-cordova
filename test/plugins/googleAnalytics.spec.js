describe('Service: $cordovaGoogleAnalytics', function() {

  var $cordovaGoogleAnalytics, $rootScope, $window;

  beforeEach(module('ngCordova.plugins.googleAnalytics'));

  beforeEach(inject(function (_$cordovaGoogleAnalytics_, _$window_, _$rootScope_) {
    $cordovaGoogleAnalytics = _$cordovaGoogleAnalytics_;
    $window = _$window_;
    $rootScope = _$rootScope_;

    $window.ga = {
      startTrackerWithId: angular.noop,
      setUserId: angular.noop,
      setAppVersion: angular.noop,
      debugMode: angular.noop,
      trackView: angular.noop,
      addCustomDimension: angular.noop,
      trackEvent: angular.noop,
      trackMetric: angular.noop,
      trackException: angular.noop,
      trackTiming: angular.noop,
      addTransaction: angular.noop,
      addTransactionItem: angular.noop,
      setAnonymizeIp: angular.noop,
      setAllowIDFACollection: angular.noop,
      enableUncaughtExceptionReporting: angular.noop
    };
  }));

  it('should call $window\'s ga.startTrackerWithId method', function() {

    var result;

    spyOn($window.ga, 'startTrackerWithId')
      .and.callFake(function (id, dispatchPeriod, successCb, errorCb) {
        successCb('tracker started');
      });

    $cordovaGoogleAnalytics
      .startTrackerWithId('UA-000000-01')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('tracker started');
    expect($window.ga.startTrackerWithId.calls.argsFor(0)[0]).toBe('UA-000000-01');
  });

  it('should call errorCb when in $window\'s ga.startTrackerWithId a error orccurs', function() {

    var result;

    spyOn($window.ga, 'startTrackerWithId')
      .and.callFake(function (id, dispatchPeriod, successCb, errorCb) {
        errorCb('tracker id is not valid');
      });

    $cordovaGoogleAnalytics.startTrackerWithId()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('tracker id is not valid');
  });

  it('should call $window\'s ga.setUserId method', function() {

    var result;

    spyOn($window.ga, 'setUserId')
      .and.callFake(function (id, successCb, errorCb) {
        successCb('Set user id: ' + id);
      });

    $cordovaGoogleAnalytics
      .setUserId('USER_ID')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Set user id: USER_ID');
    expect($window.ga.setUserId.calls.argsFor(0)[0]).toBe('USER_ID');
  });

  it('should call errorCb when in $window\'s ga.setUserId a error orccurs', function() {

    var result;

    spyOn($window.ga, 'setUserId')
      .and.callFake(function (id, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGoogleAnalytics.setUserId()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s ga.setAppVersion method', function () {

    var result;

    spyOn($window.ga, 'setAppVersion')
      .and.callFake(function (version, successCb, errorCb) {
        successCb('Set app version: ' + version);
      });

    $cordovaGoogleAnalytics
      .setAppVersion('VERSION')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Set app version: VERSION');
    expect($window.ga.setAppVersion).toHaveBeenCalledWith(
      'VERSION',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.setAppVersion a error orccurs', function() {

    var result;

    spyOn($window.ga, 'setAppVersion')
      .and.callFake(function (version, successCb, errorCb) {
        errorCb('error orccurs');
      });

    $cordovaGoogleAnalytics.setAppVersion()
      .then(angular.noop, function (response) {
        result = response;
      });

      $rootScope.$digest();

      expect(result).toBe('error orccurs');
  });

  it('should call $window\'s ga.debugMode method', function() {

    var result;

    spyOn($window.ga, 'debugMode')
      .and.callFake(function (successCb, errorCb) {
        successCb('debugMode enabled');
      });

    $cordovaGoogleAnalytics
      .debugMode()
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('debugMode enabled');
  });

  it('should call errorCb when in $window\'s ga.debugMode a error orccurs', function() {

    var result;

    spyOn($window.ga, 'debugMode')
      .and.callFake(function (successCb, errorCb) {
        errorCb();
      });

    $cordovaGoogleAnalytics.debugMode()
      .then(angular.noop, function (response) {
        result = 'error orccurs';
      });

    $rootScope.$digest();

    expect(result).toBe('error orccurs');
  });

  it('should call $window\'s ga.trackView method', function() {

    var result;

    spyOn($window.ga, 'trackView')
      .and.callFake(function (screenName, campaingUrl, newSession, successCb, errorCb) {
        successCb('Track Screen: ' + screenName);
      });

    $cordovaGoogleAnalytics
      .trackView('Home Screen')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Track Screen: Home Screen');
    expect($window.ga.trackView.calls.argsFor(0)[0]).toBe('Home Screen');
  });

  it('should call errorCb when in $window\'s ga.trackView a error orccurs', function() {

    var result;

    spyOn($window.ga, 'trackView')
      .and.callFake(function (screenName, campaingUrl, newSession, successCb, errorCb) {
        errorCb('Expected one non-empty string argument');
      });

    $cordovaGoogleAnalytics.trackView()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Expected one non-empty string argument');
  });

  it('should call $window\'s ga.addCustomDimension method', function() {

    var result;

    spyOn($window.ga, 'addCustomDimension')
      .and.callFake(function (key, value, successCb, errorCb) {
        successCb();
      });

    $cordovaGoogleAnalytics
      .addCustomDimension(1, 'Level 1')
      .then(function (response) {
        result = 'success';
      });

    $rootScope.$digest();

    expect(result).toBe('success');
    expect($window.ga.addCustomDimension.calls.argsFor(0)[0]).toBe(1);
    expect($window.ga.addCustomDimension.calls.argsFor(0)[1]).toBe('Level 1');
  });

  it('should call errorCb when in $window\'s ga.addCustomDimension a error orccurs', function() {

    var result;

    spyOn($window.ga, 'addCustomDimension')
      .and.callFake(function (key, value, successCb, errorCb) {
        errorCb('Parameter "key" must be an integer.');
      });

    $cordovaGoogleAnalytics.addCustomDimension()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Parameter "key" must be an integer.');
  });

  it('should call $window\'s ga.trackEvent method', function() {

    var result;

    spyOn($window.ga, 'trackEvent')
      .and.callFake(function (category, action, label, value, newSession, successCb, errorCb) {
        successCb('Track Event: ' + category);
      });

    $cordovaGoogleAnalytics
      .trackEvent('Videos', 'Video Load Time', 'Gone With the Wind', 100, false)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Track Event: Videos');
    expect($window.ga.trackEvent).toHaveBeenCalledWith(
      'Videos', 'Video Load Time', 'Gone With the Wind', 100, false,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.trackEvent a error orccurs', function() {

    var result;

    spyOn($window.ga, 'trackEvent')
      .and.callFake(function (category, action, label, value, newSession, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGoogleAnalytics
      .trackEvent()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s ga.trackMetric method', function() {

    var result;

    spyOn($window.ga, 'trackMetric')
      .and.callFake(function (key, value, successCb, errorCb) {
        successCb('Track Metric: ' + key);
      });

    $cordovaGoogleAnalytics
      .trackMetric('Custom', 1)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Track Metric: Custom');
    expect($window.ga.trackMetric).toHaveBeenCalledWith(
      'Custom', 1,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.trackMetric a error orccurs', function() {

    var result;

    spyOn($window.ga, 'trackMetric')
      .and.callFake(function (key, value, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGoogleAnalytics
      .trackMetric()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  }); 

  it('should call $window\'s ga.trackException method', function() {

    var result;

    spyOn($window.ga, 'trackException')
      .and.callFake(function (description, fatal, successCb, errorCb) {
        successCb('Track Exception: ' + description);
      });

    $cordovaGoogleAnalytics
      .trackException('Video player exception', false)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Track Exception: Video player exception');
    expect($window.ga.trackException).toHaveBeenCalledWith(
      'Video player exception', false,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.trackException a error orccurs', function() {

    var result;

    spyOn($window.ga, 'trackException')
      .and.callFake(function (description, fatal, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGoogleAnalytics
      .trackException()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s ga.trackTiming method', function() {

    var result;

    spyOn($window.ga, 'trackTiming')
      .and.callFake(function (category, milliseconds, variable, label, successCb, errorCb) {
        successCb('Track Timing: ' + category);
      });

    $cordovaGoogleAnalytics
      .trackTiming('Videos', 100, 'Video Load Time', 'Gone With the Wind')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Track Timing: Videos');
    expect($window.ga.trackTiming).toHaveBeenCalledWith(
      'Videos', 100, 'Video Load Time', 'Gone With the Wind',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.trackTiming a error orccurs', function() {

    var result;

    spyOn($window.ga, 'trackTiming')
      .and.callFake(function (category, milliseconds, variable, label, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGoogleAnalytics
      .trackTiming()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s ga.addTransaction method', function() {

    var result;

    spyOn($window.ga, 'addTransaction')
      .and.callFake(function (transactionId, affiliation, revenue, tax, shipping, currencyCode, successCb, errorCb) {
        successCb('Add Transaction: ' + transactionId);
      });

    $cordovaGoogleAnalytics
      .addTransaction('1234', 'Acme Clothing', '11.99', '5', '1.29', 'EUR')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Add Transaction: 1234');
    expect($window.ga.addTransaction).toHaveBeenCalledWith(
      '1234', 'Acme Clothing', '11.99', '5', '1.29', 'EUR',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.addTransaction a error orccurs', function() {

    var result;

    spyOn($window.ga, 'addTransaction')
      .and.callFake(function (transactionId, affiliation, revenue, tax, shipping, currencyCode, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGoogleAnalytics.addTransaction()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s ga.addTransactionItem method', function() {

    var result;

    spyOn($window.ga, 'addTransactionItem')
      .and.callFake(function (transactionId, name ,sku, category, price, quantity, currencyCode, successCb, errorCb) {
        successCb('Add Transaction Item: ' + transactionId);
      });

    $cordovaGoogleAnalytics
      .addTransactionItem('1234', 'Fluffy Pink Bunnies', 'DD23444', 'Party Toys', '11.99', '1', 'GBP')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Add Transaction Item: 1234');
    expect($window.ga.addTransactionItem).toHaveBeenCalledWith(
      '1234', 'Fluffy Pink Bunnies', 'DD23444', 'Party Toys', '11.99', '1', 'GBP',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.addTransactionItem a error orccurs', function() {

    var result;

    spyOn($window.ga, 'addTransactionItem')
      .and.callFake(function (transactionId, name ,sku, category, price, quantity, currencyCode, successCb, errorCb) {
        errorCb('Tracker not started');
      });

    $cordovaGoogleAnalytics.addTransactionItem()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Tracker not started');
  });

  it('should call $window\'s ga.setAnonymizeIp method', function() {

    var result;

    spyOn($window.ga, 'setAnonymizeIp')
      .and.callFake(function (anonymize, successCb, errorCb) {
        successCb('Set anonymize: ' + anonymize);
      });

    $cordovaGoogleAnalytics
      .setAnonymizeIp(true)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Set anonymize: true');
    expect($window.ga.setAnonymizeIp).toHaveBeenCalledWith(
      true,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.setAnonymizeIp a error orccurs', function() {

    var result;

    spyOn($window.ga, 'setAnonymizeIp')
      .and.callFake(function (anonymize, successCb, errorCb) {
        errorCb('error orccurs');
      });

    $cordovaGoogleAnalytics.setAnonymizeIp()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('error orccurs');
  });

  it('should call $window\'s ga.setAllowIDFACollection method', function() {

    var result;

    spyOn($window.ga, 'setAllowIDFACollection')
      .and.callFake(function (enable, successCb, errorCb) {
        successCb('Set allow IDFA collection: ' + enable);
      });

    $cordovaGoogleAnalytics
      .setAllowIDFACollection(true)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Set allow IDFA collection: true');
    expect($window.ga.setAllowIDFACollection).toHaveBeenCalledWith(
      true,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.setAllowIDFACollection a error orccurs', function() {

    var result;

    spyOn($window.ga, 'setAllowIDFACollection')
      .and.callFake(function (enable, successCb, errorCb) {
        errorCb('error orccurs');
      });

    $cordovaGoogleAnalytics.setAllowIDFACollection()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('error orccurs');
  });

  it('should call $window\'s ga.enableUncaughtExceptionReporting method', function() {

    var result;

    spyOn($window.ga, 'enableUncaughtExceptionReporting')
      .and.callFake(function (enable, successCb, errorCb) {
        successCb('Enable uncaught exception reporting: ' + enable);
      });

    $cordovaGoogleAnalytics
      .enableUncaughtExceptionReporting(true)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('Enable uncaught exception reporting: true');
    expect($window.ga.enableUncaughtExceptionReporting).toHaveBeenCalledWith(
      true,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s ga.enableUncaughtExceptionReporting a error orccurs', function() {

    var result;

    spyOn($window.ga, 'enableUncaughtExceptionReporting')
      .and.callFake(function (enable, successCb, errorCb) {
        errorCb('error orccurs');
      });

    $cordovaGoogleAnalytics.enableUncaughtExceptionReporting()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('error orccurs');
  });
});
