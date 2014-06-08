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

        }

    };

}]);