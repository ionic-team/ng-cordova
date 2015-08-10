System.register("app/app", ["ionic/ionic", "./pages/camera", "./pages/geolocation"], function (_export) {
    "use strict";

    var App, IonicApp, CameraPage, GeolocationPage, __decorate, __metadata, MyApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicApp = _ionicIonic.IonicApp;
        }, function (_pagesCamera) {
            CameraPage = _pagesCamera.CameraPage;
        }, function (_pagesGeolocation) {
            GeolocationPage = _pagesGeolocation.GeolocationPage;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            MyApp = (function () {
                var _class = function MyApp(app) {
                    _classCallCheck(this, _class);

                    console.log("IonicApp Start");
                    this.app = app;
                    this.pages = [{ title: "Songs", component: CameraPage }, { title: "Playlists", component: GeolocationPage }];
                    this.firstPage = CameraPage;
                };

                _createClass(_class, [{
                    key: "openPage",
                    value: function openPage(aside, page) {
                        console.log("Opening page", page);
                        // Close the side menu
                        aside.close();
                        // Reset the content nav to have just this page
                        var nav = this.app.getComponent("nav");
                        nav.setItems([page.component]);
                    }
                }]);

                return _class;
            })();

            MyApp = __decorate([App({
                templateUrl: "_app/app.html"
            }), __metadata("design:paramtypes", [typeof IonicApp !== "undefined" && IonicApp || Object])], MyApp);
        }
    };
});