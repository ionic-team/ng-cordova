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