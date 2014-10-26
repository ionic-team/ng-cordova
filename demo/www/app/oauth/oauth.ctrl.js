angular.module('demo.oauth.ctrl', [])

    .controller('OauthCtrl', function ($scope, $cordovaOauth, $ionicModal) {

        $scope.instagramLogin = function() {
            $cordovaOauth.instagram("CLIENT_ID_HERE", ["basic", "likes"]).then(function(result) {
                $scope.oauthResult = result;
            }, function(error) {
                $scope.oauthResult = "OAUTH ERROR (see console)";
                console.log(error);
            });
        }


        /*
        Ionic modal with source code
        */

        $ionicModal.fromTemplateUrl('app/oauth/oauth-source.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        $scope.showSource = function () {
            $scope.modal.show();
        }

    });
