ngCordovaMocks.factory('$webIntent', ['$q', '$rootScope', function($q, $rootScope) {
    var scope = $rootScope.$new();
    var has = true;
    var url = "http://url.mock/ressource";
    var throwsError = false;

    return{
        has: has,
        url: url,
	throwsError: throwsError,

        startActivity: function (params) {
            var q = $q.defer();
            if(this.throwsError) {
                q.reject(new Error());
            } else {
                q.resolve();
            }
            return q.promise;
        },
        hasExtra: function (params) {
            var q = $q.defer();
            if(this.throwsError) {
                q.reject(new Error());
            } else {
                q.resolve(has);
            }
            return q.promise;
        },
        getUri: function () {
            var q = $q.defer();
            if(this.throwsError) {
                q.reject(new Error());
            } else {
                q.resolve(url);
            }
            return q.promise;
        },
        getExtra: function (params) {
            var q = $q.defer();
            if(this.throwsError) {
                q.reject(new Error());
            } else {
                q.resolve(url);
            }
            return q.promise;
        },
        onNewIntent: function (callback) {
            scope.$on('newIntent', function() {
                callback(url);
            });
        },
        newIntent: function() {
            scope.$broadcast('newIntent')
        },
        sendBroadcast: function (params) {
            var q = $q.defer();
            if(this.throwsError) {
                q.reject(new Error());
            } else {
                 q.resolve();
            }
            return q.promise;
        },
        actionSend: function() {return "actionSend"},
        actionView: function() {return "actionView"},
        actionCall: function() {return "actionCall"},
        actionSendTo: function() {return "actionSendTo"},
        extraText: function() {return "extraText"},
        extraSubject: function() {return "extraSubject"},
        extraStream: function() {return "extraStream"},
        extraEmail: function() {return "extraEmail"}
    }

}]);
