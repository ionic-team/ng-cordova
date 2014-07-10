angular.module('ngCordova.plugins.clipboard', [])

.factory('$cordovaClipboard', [function () {
    return {
        copy: function(text){
            var deferred = Q.defer();

            cordova.plugins.clipboard.copy(text,function(message){
                deferred.resolve(message);
            },function(message){
                deferred.reject(message);
            });

            return deferred.promise;
        },
        paste: function(){
            var deferred = Q.defer();

            cordova.plugins.clipboard.paste(function(message){
                deferred.resolve(message);
            },function(message){
                deferred.reject(message);
            });

            return deferred.promise;
        }
    }
}]);