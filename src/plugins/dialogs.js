angular.module('ngCordova.plugins.dialogs', [])

.factory('$cordovaDialogs', [function() {

  return {

    alert: function(message, callback, title, buttonName) {

			if(navigator.notification) {
					return navigator.notification.alert.apply(navigator.notification, arguments);
			}else{
					// Fallbacks to window alert in browser
					return window.alert(message);
			}
	    
    },

    confirm: function(message, callback, title, buttonName) {
			
			if(navigator.notification){
					return navigator.notification.confirm.apply(navigator.notification, arguments);					
			}else{
					// Fallbacks to window confirm in browser
					return window.confirm(message);
			}

    },

    prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
			
			if(navigator.notification){
					return navigator.notification.prompt.apply(navigator.notification, arguments);
			}else{
					// Fallbacks to navigator prompt in browser
					return window.prompt(message);
			}
	  
    },

    beep: function(times) {
			
				if(navigator.notification){
						return navigator.notification.beep(times);
				}else{
						// Just returns false as we can't fake beep in browser
						return false;
				}
				
    }
  
	};

}]);
