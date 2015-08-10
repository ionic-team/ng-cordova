System.register("app/songs/songs", ["angular2/angular2", "ionic/ionic", "./song-detail"], function (_export) {
    "use strict";

    var NgFor, Component, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, SongDetailPage, __decorate, __metadata, SongsPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            NgFor = _angular2Angular2.NgFor;
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
        }, function (_songDetail) {
            SongDetailPage = _songDetail.SongDetailPage;
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

            SongsPage = (function () {
                var _class = function SongsPage(app, nav) {
                    _classCallCheck(this, _class);

                    this.name = "Max";
                    this.nav = nav;
                    this.app = app;
                    this.songs = [{ title: "Linoleum", artist: "NOFX" }, { title: "Rise Above", artist: "Black Flag" }, { title: "Ruby Soho", artist: "Rancid" }, { title: "Blitzkrieg Bop", artist: "Ramones" }, { title: "Where Eagles Dare", artist: "Misfits" }, { title: "Superman", artist: "Goldfinger" }, { title: "Give Me The Cure", artist: "Fugazi" }];
                };

                _createClass(_class, [{
                    key: "openSong",
                    value: function openSong(song) {
                        this.nav.push(SongDetailPage, {
                            song: song
                        });
                    }
                }, {
                    key: "toggleMenu",
                    value: function toggleMenu() {
                        var aside = this.app.getComponent("mainMenu");
                        aside.toggle();
                    }
                }]);

                return _class;
            })();

            _export("SongsPage", SongsPage);

            _export("SongsPage", SongsPage = __decorate([Component({ selector: "ion-view" }), View({
                directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
                templateUrl: "_app/songs/songs.html"
            }), __metadata("design:paramtypes", [typeof IonicApp !== "undefined" && IonicApp || Object, typeof NavController !== "undefined" && NavController || Object])], SongsPage));
        }
    };
});