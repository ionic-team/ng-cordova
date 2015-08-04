module.controller('MyCtrl', function($cordovaInsomnia) {

  //Keep Screen on | prevent  screen sleep
  $cordovaInsomnia.keepAwake();

  //return to standard. Aloow Sleep Again
  $cordovaInsomnia.allowSleepAgain();

});