angular.module('ngCordova.plugins.customURLScheme', [])

.factory('$cordovaCustomURLScheme', [function ($scope) {
    return {
        onLaunch: function(handler){
            $scope.$on("CUSTOM_URL_LAUNCH", handler);
        }
    }
}
}]);

function handleOpenURL(url) {
    var c = document.querySelectorAll("[ng-app]")[0];
    var scope = angular.element(c).scope;
    scope.$broadcast("CUSTOM_URL_LAUNCH", url);
};