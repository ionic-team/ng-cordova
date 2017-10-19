var ngCordovaMocks = angular.module('ngCordovaMocks', []);
ngCordovaMocks.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);