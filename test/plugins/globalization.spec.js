describe('Service: $cordovaGlobalization', function() {

  var $cordovaGlobalization, $rootScope;

  // abstract the functions without parameters
  var functionNames = [
    'getPreferredLanguage',
    'getLocaleName',
    'getFirstDayOfWeek'
  ];

  beforeEach(module('ngCordova.plugins.globalization'));

  beforeEach(inject(function (_$cordovaGlobalization_, _$q_, _$rootScope_) {
    $cordovaGlobalization = _$cordovaGlobalization_;
    $rootScope = _$rootScope_;

    navigator.globalization = {
      dateToString: angular.noop,
      stringToDate: angular.noop,
      getDatePattern: angular.noop,
      getDateNames: angular.noop,
      isDayLightSavingsTime: angular.noop,
      numberToString: angular.noop,
      stringToNumber: angular.noop,
      getNumberPattern: angular.noop,
      getCurrencyPattern: angular.noop
    };

    for (var i = 0; i < functionNames.length; i++) {
      navigator.globalization[functionNames[i]] = angular.noop;
    }
  }));

  for (var i = 0; i < functionNames.length; i++) {
    (function (fnName) {
      it('should call navigator\'s globalization.' + fnName + ' method', function() {

        var result;

        spyOn(navigator.globalization, fnName)
          .and.callFake(function (successCb, errorCb) {
            successCb('some result');
          });

        $cordovaGlobalization[fnName]()
          .then(function (response) {
            result = response;
          });

        $rootScope.$digest();

        expect(result).toBe('some result');
      });

      it('should call errorCb in navigator\'s globalization.' + fnName + ' when error occurs', function() {

        var result;
        var errorObj = { testError: true };

        spyOn(navigator.globalization, fnName)
          .and.callFake(function (successCb, errorCb) {
            errorCb(errorObj);
          });

        $cordovaGlobalization[fnName]()
          .then(angular.noop, function (response) {
            result = response;
          });

        $rootScope.$digest();

        expect(result).toBe(errorObj);
      });
    })(functionNames[i]);
  }

  it('should call navigator\'s globalization.dateToString method', function() {

    var result;
    var date = new Date();
    var options = { someOptions: 1 };

    spyOn(navigator.globalization, 'dateToString')
      .and.callFake(function (date, successCb, errorCb, options) {
        successCb('some result');
      });

    $cordovaGlobalization
      .dateToString(date, options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.dateToString.calls.argsFor(0)[0]).toBe(date);
    expect(navigator.globalization.dateToString.calls.argsFor(0)[3]).toBe(options);
  });

  it('should call errorCb in navigator\'s globalization.dateToString when error occurs', function() {

    var result;
    var date = new Date();
    var options = { someOptions: 1 };
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'dateToString')
      .and.callFake(function (date, successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .dateToString(date, options)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.stringToDate method', function() {

    var result;
    var date = '2013-02-02';
    var options = { someOptions: 1 };

    spyOn(navigator.globalization, 'stringToDate')
      .and.callFake(function (date, successCb, errorCb, options) {
        successCb('some result');
      });

    $cordovaGlobalization
      .stringToDate(date, options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.stringToDate.calls.argsFor(0)[0]).toBe(date);
    expect(navigator.globalization.stringToDate.calls.argsFor(0)[3]).toBe(options);
  });

  it('should call errorCb in navigator\'s globalization.stringToDate when error occurs', function() {

    var result;
    var date = '2013-02-02';
    var options = { someOptions: 1 };
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'stringToDate')
      .and.callFake(function (date, successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .stringToDate(date, options)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.getDatePattern method', function() {

    var result;
    var options = { someOptions: 1 };

    spyOn(navigator.globalization, 'getDatePattern')
      .and.callFake(function (successCb, errorCb, options) {
        successCb('some result');
      });

    $cordovaGlobalization
      .getDatePattern(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.getDatePattern.calls.argsFor(0)[2]).toBe(options);
  });

  it('should call errorCb in navigator\'s globalization.getDatePattern when error occurs', function() {

    var result;
    var options = { someOptions: 1 };
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'getDatePattern')
      .and.callFake(function (successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .getDatePattern(options)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.getDateNames method', function() {

    var result;
    var options = { someOptions: 1 };

    spyOn(navigator.globalization, 'getDateNames')
      .and.callFake(function (successCb, errorCb, options) {
        successCb('some result');
      });

    $cordovaGlobalization
      .getDateNames(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.getDateNames.calls.argsFor(0)[2]).toBe(options);
  });

  it('should call errorCb in navigator\'s globalization.getDateNames when error occurs', function() {

    var result;
    var options = { someOptions: 1 };
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'getDateNames')
      .and.callFake(function (successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .getDateNames(options)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.isDayLightSavingsTime method', function() {

    var result;
    var date = new Date();

    spyOn(navigator.globalization, 'isDayLightSavingsTime')
      .and.callFake(function (date, successCb, errorCb) {
        successCb('some result');
      });

    $cordovaGlobalization
      .isDayLightSavingsTime(date)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.isDayLightSavingsTime.calls.argsFor(0)[0]).toBe(date);
  });

  it('should call errorCb in navigator\'s globalization.isDayLightSavingsTime when error occurs', function() {

    var result;
    var date = new Date();
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'isDayLightSavingsTime')
      .and.callFake(function (date, successCb, errorCb) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .isDayLightSavingsTime(date)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.getNumberPattern method', function() {

    var result;
    var options = { someOptions: 1 };

    spyOn(navigator.globalization, 'getNumberPattern')
      .and.callFake(function (successCb, errorCb, options) {
        successCb('some result');
      });

    $cordovaGlobalization
      .getNumberPattern(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.getNumberPattern.calls.argsFor(0)[2]).toBe(options);
  });

  it('should call errorCb in navigator\'s globalization.getNumberPattern when error occurs', function() {

    var result;
    var options = { someOptions: 1 };
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'getNumberPattern')
      .and.callFake(function (successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .getNumberPattern(options)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.numberToString method', function() {

    var result;
    var number = 2836817;
    var options = { someOptions: 1 };

    spyOn(navigator.globalization, 'numberToString')
      .and.callFake(function (number, successCb, errorCb, options) {
        successCb('some result');
      });

    $cordovaGlobalization
      .numberToString(number, options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.numberToString.calls.argsFor(0)[0]).toBe(number);
    expect(navigator.globalization.numberToString.calls.argsFor(0)[3]).toBe(options);
  });

  it('should call errorCb in navigator\'s globalization.numberToString when error occurs', function() {

    var result;
    var number = 2836817;
    var options = { someOptions: 1 };
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'numberToString')
      .and.callFake(function (number, successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .numberToString(number, options)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.stringToNumber method', function() {

    var result;
    var number = '2222836817';
    var options = { someOptions: 1 };

    spyOn(navigator.globalization, 'stringToNumber')
      .and.callFake(function (number, successCb, errorCb, options) {
        successCb('some result');
      });

    $cordovaGlobalization
      .stringToNumber(number, options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.stringToNumber.calls.argsFor(0)[0]).toBe(number);
    expect(navigator.globalization.stringToNumber.calls.argsFor(0)[3]).toBe(options);
  });

  it('should call errorCb in navigator\'s globalization.stringToNumber when error occurs', function() {

    var result;
    var number = '2222836817';
    var options = { someOptions: 1 };
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'stringToNumber')
      .and.callFake(function (number, successCb, errorCb, options) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .stringToNumber(number, options)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call navigator\'s globalization.getCurrencyPattern method', function() {

    var result;
    var currencyCode = 6;

    spyOn(navigator.globalization, 'getCurrencyPattern')
      .and.callFake(function (currencyCode, successCb, errorCb) {
        successCb('some result');
      });

    $cordovaGlobalization
      .getCurrencyPattern(currencyCode)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe('some result');
    expect(navigator.globalization.getCurrencyPattern.calls.argsFor(0)[0]).toBe(currencyCode);
  });

  it('should call errorCb in navigator\'s globalization.getCurrencyPattern when error occurs', function() {

    var result;
    var currencyCode = 6;
    var errorObj = { testError: true };

    spyOn(navigator.globalization, 'getCurrencyPattern')
      .and.callFake(function (currencyCode, successCb, errorCb) {
        errorCb(errorObj);
      });

    $cordovaGlobalization
      .getCurrencyPattern(currencyCode)
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

});
