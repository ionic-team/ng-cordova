describe('ngCordovaMocks', function() {
  beforeEach(function() {
    module('ngCordovaMocks');
  });

  describe('cordovaLocalNotification', function () {
    var $cordovaLocalNotification = null;
    var $timeout = null;
    var $rootScope = null;

    beforeEach(inject(function (_$timeout_, _$rootScope_, _$cordovaLocalNotification_) {
      $cordovaLocalNotification = _$cordovaLocalNotification_;
      $timeout = _$timeout_;
      $rootScope = _$rootScope_;

      localStorage.removeItem("ngCordLocNotif-1");
      localStorage.removeItem("ngCordLocNotif-2");
    }));

    it('should set a scheduled notification', function(done) {
      $cordovaLocalNotification.schedule({id : 1, mydata : "my data string"}).then(
        function(){
          var myNotif = JSON.parse(localStorage.getItem("ngCordLocNotif-1"));
          expect(myNotif.id).toBe(1);
        },
        function() { expect(false).toBe(true); }
      ).finally(function() { done(); })
      $rootScope.$digest();
    });

    it('should cancel a scheduled notification', function(done) {      
      localStorage.setItem("ngCordLocNotif-1", "{mydata: 'mydata'}");
      $cordovaLocalNotification.cancel(1).then(
        function(){
          var myNotif = localStorage.getItem("ngCordLocNotif-1");
          expect(myNotif).toBe(null);
        },
        function() { expect(false).toBe(true); }
      ).finally(function() { done(); })
      $rootScope.$digest();
    });

    it('should find a scheduled notification', function(done) {
      localStorage.setItem("ngCordLocNotif-1", "{mydata: 'mydata'}");
      $cordovaLocalNotification.isScheduled(1).then(
        function(res){
          expect(res).toBe(true);
        },
        function() { expect(false).toBe(true); }
      ).finally(function() { done(); })
      $rootScope.$digest();
    });

    it('should not find a scheduled notification', function(done) {
      $cordovaLocalNotification.isScheduled(1).then(
        function(res){
          expect(res).toBe(false);
        },
        function() { expect(false).toBe(true); }
      ).finally(function() { done(); })
      $rootScope.$digest();
    });

    it('should return 2 keys', function(done) {
      localStorage.setItem("ngCordLocNotif-1", "{mydata: 'mydata'}");
      localStorage.setItem("ngCordLocNotif-2", "{mydata: 'mydata2'}");
      $cordovaLocalNotification.getAllIds(1).then(
        function(res){
          expect(res).toContain(1);
          expect(res).toContain(2);
          expect(res.length).toBe(2);
        },
        function() { expect(false).toBe(true); }
      ).finally(function() { done(); })
      $rootScope.$digest();
    });

    it('should return 2 keys', function(done) {
      localStorage.setItem("ngCordLocNotif-1", "{mydata: 'mydata'}");
      localStorage.setItem("ngCordLocNotif-2", "{mydata: 'mydata2'}");
      $cordovaLocalNotification.getIds(1).then(
        function(res){
          expect(res).toContain(1);
          expect(res).toContain(2);
          expect(res.length).toBe(2);
        },
        function() { expect(false).toBe(true); }
      ).finally(function() { done(); })
      $rootScope.$digest();
    });

  });
})