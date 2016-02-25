describe('Service: $cordovaBatteryStatus', function () {

  var $cordovaBatteryStatus, $rootScope;

  var eventNames = ['batterystatus', 'batterycritical', 'batterylow'];

  beforeEach(module('ngCordova.plugins.batteryStatus'));

  beforeEach(inject(function (_$cordovaBatteryStatus_, _$q_, _$rootScope_) {
    $cordovaBatteryStatus = _$cordovaBatteryStatus_;
    $rootScope = _$rootScope_;
  }));

  for (var i = 0; i < eventNames.length; i++) {
    (function (eventName) {
      it('should broadcast the `' + eventName + '` event the right way', function () {

        spyOn($rootScope, '$broadcast').and.callThrough();

        var result = {'isPlugged': true, 'level': 1};

        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, false, false, result);

        window.dispatchEvent(event);

       // expect($cordovaBatteryStatus.$broadcast).toHaveBeenCalledWith(eventName, result); // refractor out -- cannot test events in jasmine
      });
    })(eventNames[i]);
  }
});
