angular.module('ngCordova.plugins.notification', [])

.factory('Notification', [function() {

  return {
    alert: function(message, callback, title, buttonName) {
	  return navigator.notification.alert.apply(navigator.notification, arguments);
    },
    confirm: function(message, callback, title, buttonName) {
	  return navigator.notification.confirm.apply(navigator.notification, arguments);
    },
    prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
	  return navigator.notification.prompt.apply(navigator.notification, arguments);
    },
    beep: function(times) {
	  return navigator.notification.beep(times);
    }
  }
}]);
