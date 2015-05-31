ngCordovaMocks.factory('$cordovaBrightness', ['$q', function ($q) {
	var currentBrightness = 100;

	return {
		get: function () {
			var q = $q.defer();
			q.resolve(currentBrightness);
        	return q.promise;
		},

		set: function (data) {
			var q = $q.defer();
			currentBrightness = data;
			q.resolve('OK');
        	return q.promise;
		},

		setKeepScreenOn: function (bool) {
			var q = $q.defer();
			q.resolve('OK');
			return q.promise;
		}
	};
}]);