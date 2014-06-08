angular.module('ngCordova.plugins.push', [])

.factory('$cordovaPush', ['$q', function ($q) {
    return {
        register: function (config) {
            var q = $q.defer();
            window.plugins.pushNotification.register(
            function (result) {
                q.resolve(result);
            },
            function (error) {
                q.reject(error);
            },
            config);
            
            return q.promise;
        },
        
        unregister: function (options) {
            var q = $q.defer();
            window.plugins.pushNotification.unregister(
            function (result) {
                q.resolve(result);
            },
            function (error) {
                q.reject(error);
            },
            options);
            
            return q.promise;
        },
        
        // iOS only
        setBadgeNumber: function(number) {
        	var q = $q.defer();
            window.plugins.pushNotification.setApplicationIconBadgeNumber(
            function (result) {
                q.resolve(result);
            },
            function (error) {
                q.reject(error);
            },
            number);
            return q.promise;
        }
    };
}]);