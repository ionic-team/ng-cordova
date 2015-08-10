System.register("app/pages/geolocation", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var NgFor, NgIf, Component, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, __decorate, __metadata, GeolocationPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            NgFor = _angular2Angular2.NgFor;
            NgIf = _angular2Angular2.NgIf;
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
        }, function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            NavController = _ionicIonic.NavController;
            Navbar = _ionicIonic.Navbar;
            NavbarTemplate = _ionicIonic.NavbarTemplate;
            List = _ionicIonic.List;
            Item = _ionicIonic.Item;
            Content = _ionicIonic.Content;
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

            //import {Geolocation} from 'ng-cordova/ng-cordova';

            GeolocationPage = (function () {
                var _class = function GeolocationPage(app, nav) {
                    _classCallCheck(this, _class);

                    this.name = "Max";
                    this.app = app;
                };

                _createClass(_class, [{
                    key: "toggleMenu",
                    value: function toggleMenu() {
                        var aside = this.app.getComponent("mainMenu");
                        aside.toggle();
                    }
                }, {
                    key: "getPosition",
                    value: function getPosition() {
                        var _this = this;

                        Geolocation.getCurrentPosition().then(function (pos) {
                            _this.location = pos;
                        });
                    }
                }, {
                    key: "trackLocation",
                    value: function trackLocation() {
                        var _this2 = this;

                        Geolocation.watchPosition().source.subscribe(function (pos) {
                            _this2.location = pos;
                        });
                    }
                }]);

                return _class;
            })();

            _export("GeolocationPage", GeolocationPage);

            _export("GeolocationPage", GeolocationPage = __decorate([Component({ selector: "ion-view" }), View({
                directives: [NgFor, NgIf, Content, List, Item, Navbar, NavbarTemplate],
                template: "\n  <ion-navbar *navbar><ion-title>Geolocation</ion-navbar>\n  <ion-content padding>\n    <button (click)=\"getPosition()\" primary>Get Position</button>\n    <button (click)=\"trackLocation()\" primary>Track Location</button>\n    <div *ng-if=\"location\">\n      Position: {{location.coords.latitude}} {{location.coords.longitude}}\n    </div>\n  </ion-content>\n  "
            }), __metadata("design:paramtypes", [typeof IonicApp !== "undefined" && IonicApp || Object, typeof NavController !== "undefined" && NavController || Object])], GeolocationPage));
        }
    };
});