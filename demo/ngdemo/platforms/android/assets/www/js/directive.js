angular.module('starter.directive', [])

    .directive('gmapper', function () {
    return {
        // required to make it work as an element
        restrict: 'E',

        // replace <gmapper> with this html
        template: '<figure><img/><figcaption/></figure>',
        replace: true,

        // observe and manipulate the DOM
        link: function ($scope, element, attrs) {
            // attribute names change to camel case
            attrs.$observe('mapSrc', function (value) {
                element.find('img').attr('src', value)
            });

            attrs.$observe('caption', function(value) {
                element.find('figcaption').text(value)
            })
        }
    }

        .directive('campic', function () {
            return {
                // required to make it work as an element
                restrict: 'E',

                // replace <campic> with this html
                template: '<img/>',
                replace: true,

                // observe and manipulate the DOM
                link: function ($scope, element, attrs) {
                    // attribute names change to camel case
                    attrs.$observe('cameraimage', function (value) {
                        element.find('img').attr('src', value)
                    });
                }
            }
        })
});

