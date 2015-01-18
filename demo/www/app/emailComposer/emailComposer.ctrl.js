angular.module('demo.emailComposer.ctrl', [])

  .controller('EmailComposerCtrl', function ($scope, $cordovaEmailComposer) {

    document.addEventListener("deviceready", function () {
      $cordovaEmailComposer.isAvailable().then(function () {
        alert("Email composer is available")
      }, function () {
        alert("Email composer is NOT available")
      });
    }, false);



    $cordovaEmailComposer.isAvailable().then(function () {
      // is available
    }, function () {
      // not available
    });

    var email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    $cordovaEmailComposer.open(email).then(null, function () {
      // user cancelled email
    });


  });
