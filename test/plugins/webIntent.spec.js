describe('Service: $webIntent', function() {

  var $webIntent, $rootScope;

  beforeEach(module('ngCordova.plugins.webIntent'));

  beforeEach(inject(function (_$webIntent_, _$q_, _$rootScope_) {
    $webIntent = _$webIntent_;
    $rootScope = _$rootScope_;

    window.plugins.webintent = {
	ACTION_SEND: "actionSend",
	ACTION_VIEW: "actionView",
	EXTRA_TEXT: "extraText",
	EXTRA_SUBJECT: "extraSubject",
	EXTRA_STREAM: "extraStream",
	EXTRA_EMAIL: "extraEmail",
	ACTION_CALL: "actionCall",
	ACTION_SENDTO: "actionSendTo",
	startActivity: jasmine.createSpy(),
	hasExtra: jasmine.createSpy(),
	getUri: jasmine.createSpy(),
	getExtra: jasmine.createSpy(),
	onNewIntent: jasmine.createSpy(),
	sendBroadcast: jasmine.createSpy()
    };
  }));

  it('should return window.plugins.webintent.ACTION_SEND on actionSend', function() {
    expect($webIntent.actionSend()).toBe(window.plugins.webintent.ACTION_SEND);
  });

  it('should return window.plugins.webintent.ACTION_VIEW on actionView', function() {
    expect($webIntent.actionView()).toBe(window.plugins.webintent.ACTION_VIEW);
  });

  it('should return window.plugins.webintent.EXTRA_TEXT on extraText', function() {
    expect($webIntent.extraText()).toBe(window.plugins.webintent.EXTRA_TEXT);
  });

  it('should return window.plugins.webintent.EXTRA_SUBJECT on extraSubject', function() {
    expect($webIntent.extraSubject()).toBe(window.plugins.webintent.EXTRA_SUBJECT);
  });

  it('should return window.plugins.webintent.EXTRA_STREAM on extraStream', function() {
    expect($webIntent.extraStream()).toBe(window.plugins.webintent.EXTRA_STREAM);
  });

  it('should return window.plugins.webintent.EXTRA_EMAIL on extraEmail', function() {
    expect($webIntent.extraEmail()).toBe(window.plugins.webintent.EXTRA_EMAIL);
  });

  it('should return window.plugins.webintent.ACTION_CALL on actionCall', function() {
    expect($webIntent.actionCall()).toBe(window.plugins.webintent.ACTION_CALL);
  });

  it('should return window.plugins.webintent.ACTION_SENDTO on actionSendTo', function() {
    expect($webIntent.actionSendTo()).toBe(window.plugins.webintent.ACTION_SENDTO);
  });


  it('should call window.plugins.webintent.startActivity on startActivity', function() {
      $webIntent.startActivity("myFile");
      expect(window.plugins.webintent.startActivity).toHaveBeenCalled();
  });

  it('should call window.plugins.webintent.hasExtra on hasExtra', function() {
      $webIntent.hasExtra($webIntent.extraText());
      expect(window.plugins.webintent.hasExtra).toHaveBeenCalled();
  });

  it('should call window.plugins.webintent.getExtra on getExtra', function() {
      $webIntent.getExtra($webIntent.extraText());
      expect(window.plugins.webintent.getExtra).toHaveBeenCalled();
  });

  it('should call window.plugins.webintent.getUri on getUri', function() {
      $webIntent.getUri();
      expect(window.plugins.webintent.getUri).toHaveBeenCalled();
  });

  it('should call window.plugins.webintent.onNewIntent on onNewIntent', function() {
      $webIntent.onNewIntent(function() {});
      expect(window.plugins.webintent.onNewIntent).toHaveBeenCalled();
  });

  it('should call window.plugins.webintent.sendBroadcast on sendBroadcast', function() {
      $webIntent.sendBroadcast("myFile");
      expect(window.plugins.webintent.sendBroadcast).toHaveBeenCalled();
  });

});
