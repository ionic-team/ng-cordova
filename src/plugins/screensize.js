angular.module('ngCordova.plugins.screensize', [])

    .factory('$cordovaScreenSize', ['$q', '$window', function ($q, $window) {
        return {
            
            get: function () {
                var q = $q.defer();
                $window.plugins.screensize.get(function (result) {
                    q.resolve(result);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            }
        };
    }]);
