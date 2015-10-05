// install   :      cordova plugin add cordova-plugin-app-preferences
// link      :      https://github.com/apla/me.apla.cordova.app-preferences

/* globals preferences: true */
angular.module('ngCordova.plugins.preferences', [])

  .factory('$cordovaPreferences', ['$q', function ($q) {

     return {
    	
    	/**
    	 * Decorate the promise object.
    	 * @param promise The promise object.
    	 */
    	decoratePromise: function(promise){
    		promise.success = function(fn) {
	            promise.then(fn);
	            return promise;
	        };

	        promise.error = function(fn) {
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
	    store: function(key, value, dict) {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function error(error){
                deferred.reject(new Error(error));
            }
            
            var storeResult;
            if(arguments.length == 3){
                storeResult = plugins.appPreferences.store(dict, key, value)
            } else {
                storeResult = plugins.appPreferences.store(key, value)
            }
            storeResult.then(ok, error);
            
	    	this.decoratePromise(promise);
	    	return promise;
	    },
	    
	    /**
	     * Fetch the value by the given dictionary and key.
	     * @param key The key of the preference to retrieve.
         * @param dict The dictionary. It's optional.
         * @returns Returns a promise.
	     */
	    fetch: function(key, dict) {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function error(error){
                deferred.reject(new Error(error));
            }
            
            var fetchResult;
            if(arguments.length == 2){
                fetchResult = plugins.appPreferences.fetch(dict, key);
            } else {
                fetchResult = plugins.appPreferences.fetch(key);
            }
	    	fetchResult.then(ok, error);
            
	    	this.decoratePromise(promise);
	    	return promise;
	    },
        
        /**
	     * Remove the value by the given key.
	     * @param key The key of the preference to retrieve.
         * @param dict The dictionary. It's optional.
         * @returns Returns a promise.
	     */
	    remove: function(key, dict) {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function error(error){
                deferred.reject(new Error(error));
            }
            
            var removeResult;
            if(arguments.length == 2){
                removeResult = plugins.appPreferences.remove(dict, key);
            } else {
                removeResult = plugins.appPreferences.remove(key);
            }
            removeResult.then(ok, error);
	    	
	    	this.decoratePromise(promise);
	    	return promise;
	    },
        
        /**
	     * Show the application preferences.
         * @returns Returns a promise.
	     */
	    show: function() {
	    	var deferred = $q.defer();
	    	var promise = deferred.promise;
            
            function ok(value){
                deferred.resolve(value);
            }
            
            function error(error){
                deferred.reject(new Error(error));
            }
            
            plugins.appPreferences.show()
                .then(ok, error);
	    	
	    	this.decoratePromise(promise);
	    	return promise;
	    }
    }

  }]);
