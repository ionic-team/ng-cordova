angular.module('ngCordova.plugins.toast', [])

.factory('$cordovaToast', ['$q', function ($q) {
			

	return {
		show : function(msg, duration, position){
			var q = $q.defer();

			window.plugins.toast.show(
				msg,
				duration,
				position,
				function (res){
					q.resolve(res);
				},
				function (err){
					q.reject(err);
				});

			return q.promise;
		},

		showShortTop : function (message) {
			
			var q = $q.defer();

			window.plugins.toast.showShortTop(
				message,
				function (res){
					q.resolve(res);
				},
				function (err){
					q.reject(err);
				});

			return q.promise;
		},

		showShortCenter : function (message) {
			
			var q = $q.defer();

			window.plugins.toast.showShortCenter(
				message,
				function (res){
					q.resolve(res);
				},
				function (err){
					q.reject(err);
				});

			return q.promise;
		},

		showShortBottom : function (message) {
			
			var q = $q.defer();

			window.plugins.toast.showShortBottom(
				message,
				function (res){
					q.resolve(res);
				},
				function (err){
					q.reject(err);
				});

			return q.promise;
		},

		showLongTop : function (message) {
			
			var q = $q.defer();

			window.plugins.toast.showLongTop(
				message,
				function (res){
					q.resolve(res);
				},
				function (err){
					q.reject(err);
				});

			return q.promise;
		},

		showLongCenter : function (message) {

			var q = $q.defer();

			window.plugins.toast.showLongCenter(
				message,
				function (res){
					q.resolve(res);
				},
				function (err){
					q.reject(err);
				});

			return q.promise;
		},

		showLongBottom : function (message) {
			
			var q = $q.defer();

			window.plugins.toast.showLongBottom(
				message,
				function (res){
					q.resolve(res);
				},
				function (err){
					q.reject(err);
				});

			return q.promise;
		}
	};
}]);