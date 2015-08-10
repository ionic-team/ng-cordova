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
System.register("app/pages/camera", ["angular2/angular2", "ionic/ionic", "ng-cordova/ng-cordova"], function (_export) {
    "use strict";

    var NgFor, Component, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, Camera, __decorate, __metadata, CameraPage;

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
        }, function (_ngCordovaNgCordova) {
            Camera = _ngCordovaNgCordova.Camera;
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

            console.log("Camera", Camera);

            CameraPage = (function () {
                var _class = function CameraPage(app, nav) {
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
                    key: "takePicture",
                    value: function takePicture() {
                        Camera.getPicture().then(function (imageData) {
                            console.log("GOT PICTURE");
                        }, function (err) {
                            console.error("Couldn't take picture!", err);
                        });
                    }
                }]);

                return _class;
            })();

            _export("CameraPage", CameraPage);

            _export("CameraPage", CameraPage = __decorate([Component({ selector: "ion-view" }), View({
                directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
                template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)=\"app.getComponent('mainMenu').toggle()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Camera</ion-title></ion-navbar>\n  <ion-content padding>\n    <button (click)=\"takePicture()\" primary>Take Picture</button>\n  </ion-content>\n  "
            }), __metadata("design:paramtypes", [typeof IonicApp !== "undefined" && IonicApp || Object, typeof NavController !== "undefined" && NavController || Object])], CameraPage));
        }
    };
});
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
System.register('app/pages/index', ['./camera', './geolocation'], function (_export) {
  'use strict';

  return {
    setters: [function (_camera) {
      for (var _key in _camera) {
        if (_key !== 'default') _export(_key, _camera[_key]);
      }
    }, function (_geolocation) {
      for (var _key2 in _geolocation) {
        if (_key2 !== 'default') _export(_key2, _geolocation[_key2]);
      }
    }],
    execute: function () {}
  };
});
System.register("app/playlists/playlists", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var NgFor, Component, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, __decorate, __metadata, PlaylistsPage;

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

            PlaylistsPage = (function () {
                var _class = function PlaylistsPage(app, nav) {
                    _classCallCheck(this, _class);

                    this.app = app;
                    this.playlists = [{ title: "90's Punk" }, { title: "80's Revival" }];
                };

                _createClass(_class, [{
                    key: "toggleMenu",
                    value: function toggleMenu() {
                        var aside = this.app.getComponent("mainMenu");
                        aside.toggle();
                    }
                }]);

                return _class;
            })();

            _export("PlaylistsPage", PlaylistsPage);

            _export("PlaylistsPage", PlaylistsPage = __decorate([Component({ selector: "ion-view" }), View({
                directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
                templateUrl: "_app/playlists/playlists.html"
            }), __metadata("design:paramtypes", [typeof IonicApp !== "undefined" && IonicApp || Object, typeof NavController !== "undefined" && NavController || Object])], PlaylistsPage));
        }
    };
});
System.register("app/songs/song-detail", ["angular2/angular2", "ionic/ionic"], function (_export) {
    "use strict";

    var Component, View, NavParams, NavController, Navbar, NavbarTemplate, Content, __decorate, __metadata, SongDetailPage;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
        }, function (_ionicIonic) {
            NavParams = _ionicIonic.NavParams;
            NavController = _ionicIonic.NavController;
            Navbar = _ionicIonic.Navbar;
            NavbarTemplate = _ionicIonic.NavbarTemplate;
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

            SongDetailPage = (function () {
                var _class = function SongDetailPage(nav, navParams) {
                    _classCallCheck(this, _class);

                    this.nav = nav;
                    this.song = navParams.song;
                    console.log("Showing song", this.song);
                };

                return _class;
            })();

            _export("SongDetailPage", SongDetailPage);

            _export("SongDetailPage", SongDetailPage = __decorate([Component({ selector: "ion-view" }), View({
                directives: [Content, Navbar, NavbarTemplate],
                templateUrl: "_app/songs/song_detail.html"
            }), __metadata("design:paramtypes", [typeof NavController !== "undefined" && NavController || Object, typeof NavParams !== "undefined" && NavParams || Object])], SongDetailPage));
        }
    };
});
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