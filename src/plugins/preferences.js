// install   :      cordova plugin add cordova-plugin-app-preferences
// link      :      https://github.com/apla/me.apla.cordova.app-preferences

angular.module('ngCordova.plugins.preferences', [])

  .factory('$cordovaPreferences', ['$window', '$q', function ($window, $q) {

     return {
         
         pluginNotEnabledMessage: 'Plugin not enabled',
    	
    	/**
    	 * Decorate the promise object.
    	 * @param promise The promise object.
    	 */
    	decoratePromise: function (promise){
    		promise.success = function (fn) {
	            promise.then(fn);
	            return promise;
	        };

	        promise.error = function (fn) {
	            promise.then(null, fn);
	            return promise;
	        };
    	},
    	
    	/**
    	 * Store the value of the given dictionary and key.
    	 * @param key The key of the preference.
    	 * @param value The value to set.
         * @param dict The dictionary. It's optional.
         * @returns Returns a promise.
    	 */
	    store: function (key, value, dict) {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function errorCallback(error){
                deferred.reject(new Error(error));
            }
            
            if($window.plugins){
                var storeResult;
                if(arguments.length === 3){
                    storeResult = $window.plugins.appPreferences.store(dict, key, value);
                } else {
                    storeResult = $window.plugins.appPreferences.store(key, value);
                }
                
                storeResult.then(ok, errorCallback);
            } else {
                deferred.reject(new Error(this.pluginNotEnabledMessage));
            }
            
	    	this.decoratePromise(promise);
	    	return promise;
	    },
	    
	    /**
	     * Fetch the value by the given dictionary and key.
	     * @param key The key of the preference to retrieve.
         * @param dict The dictionary. It's optional.
         * @returns Returns a promise.
	     */
	    fetch: function (key, dict) {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function errorCallback(error){
                deferred.reject(new Error(error));
            }
            
            if($window.plugins){
                var fetchResult;
                if(arguments.length === 2){
                    fetchResult = $window.plugins.appPreferences.fetch(dict, key);
                } else {
                    fetchResult = $window.plugins.appPreferences.fetch(key);
                }
                fetchResult.then(ok, errorCallback);
            } else {
                deferred.reject(new Error(this.pluginNotEnabledMessage));
            }
            
	    	this.decoratePromise(promise);
	    	return promise;
	    },
        
        /**
	     * Remove the value by the given key.
	     * @param key The key of the preference to retrieve.
         * @param dict The dictionary. It's optional.
         * @returns Returns a promise.
	     */
	    remove: function (key, dict) {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function errorCallback(error){
                deferred.reject(new Error(error));
            }
            
            if($window.plugins){
                var removeResult;
                if(arguments.length === 2){
                    removeResult = $window.plugins.appPreferences.remove(dict, key);
                } else {
                    removeResult = $window.plugins.appPreferences.remove(key);
                }
                removeResult.then(ok, errorCallback);
            } else {
                deferred.reject(new Error(this.pluginNotEnabledMessage));
            }
	    	
	    	this.decoratePromise(promise);
	    	return promise;
	    },
        
        /**
	     * Show the application preferences.
         * @returns Returns a promise.
	     */
	    show: function () {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function errorCallback(error){
                deferred.reject(new Error(error));
            }
            
            if($window.plugins){
                $window.plugins.appPreferences.show()
                    .then(ok, errorCallback);
            } else {
                deferred.reject(new Error(this.pluginNotEnabledMessage));
            }
	    	
	    	this.decoratePromise(promise);
	    	return promise;
	    }
    };

  }]);
