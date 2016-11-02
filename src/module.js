
/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ngCordova';
}

angular.module('ngCordova', [
  'ngCordova.plugins'
]);
