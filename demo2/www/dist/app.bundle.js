System.register('app/app', ['angular2/angular2', 'ionic/ionic', './pages/index'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, IonicApp, Register, Aside, NavParams, Nav, NavController, Navbar, NavbarTemplate, List, Item, Content, Button, CameraPage, MyApp;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  _export('main', main);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function main(ionicBootstrap) {
    ionicBootstrap(MyApp);
  }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      NgFor = _angular2Angular2.NgFor;
      Component = _angular2Angular2.ComponentAnnotation;
      Directive = _angular2Angular2.DirectiveAnnotation;
      View = _angular2Angular2.ViewAnnotation;
    }, function (_ionicIonic) {
      IonicApp = _ionicIonic.IonicApp;
      Register = _ionicIonic.Register;
      Aside = _ionicIonic.Aside;
      NavParams = _ionicIonic.NavParams;
      Nav = _ionicIonic.Nav;
      NavController = _ionicIonic.NavController;
      Navbar = _ionicIonic.Navbar;
      NavbarTemplate = _ionicIonic.NavbarTemplate;
      List = _ionicIonic.List;
      Item = _ionicIonic.Item;
      Content = _ionicIonic.Content;
      Button = _ionicIonic.Button;
    }, function (_pagesIndex) {
      CameraPage = _pagesIndex.CameraPage;
    }],
    execute: function () {
      MyApp = (function () {
        function MyApp(app) {
          _classCallCheck(this, MyApp);

          this.app = app;
          this.plugins = [{
            title: 'Camera',
            component: CameraPage
          }];
          this.firstPage = CameraPage;
        }

        _createClass(MyApp, [{
          key: 'openPage',
          value: function openPage(aside, page) {
            console.log('Opening page', page);
            aside.close();
            var nav = this.app.getComponent('nav');
            nav.setItems([page.component]);
          }
        }]);

        return MyApp;
      })();

      Object.defineProperty(MyApp, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-app' }), new View({
            directives: [NgFor, Aside, Nav, Content, List, Item, Register],
            templateUrl: 'templates/main.html'
          })];
        } });
      Object.defineProperty(MyApp, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
    }
  };
});
System.register('app/pages/camera', ['angular2/angular2', 'ionic/ionic', './song-detail', 'ng-cordova/ng-cordova'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, SongDetailPage, Camera, CameraPage;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      NgFor = _angular2Angular2.NgFor;
      Component = _angular2Angular2.ComponentAnnotation;
      Directive = _angular2Angular2.DirectiveAnnotation;
      View = _angular2Angular2.ViewAnnotation;
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
    }, function (_ngCordovaNgCordova) {
      Camera = _ngCordovaNgCordova.Camera;
    }],
    execute: function () {
      console.log('Camera', Camera);

      CameraPage = (function () {
        function CameraPage(app, nav) {
          _classCallCheck(this, CameraPage);

          this.name = 'Max';
          this.app = app;
        }

        _createClass(CameraPage, [{
          key: 'toggleMenu',
          value: function toggleMenu() {
            var aside = this.app.getComponent('mainMenu');
            aside.toggle();
          }
        }, {
          key: 'takePicture',
          value: function takePicture() {
            Camera.getPicture().then(function (imageData) {
              console.log('GOT PICTURE');
            }, function (err) {
              console.error('Couldn\'t take picture!', err);
            });
          }
        }]);

        return CameraPage;
      })();

      _export('CameraPage', CameraPage);

      Object.defineProperty(CameraPage, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-view' }), new View({
            directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
            template: '\n  <ion-navbar *navbar><ion-title>Camera</ion-navbar>\n  <ion-content padding>\n    <button (click)="takePicture()" primary>Take Picture</button>\n  </ion-content>\n  '
          })];
        } });
      Object.defineProperty(CameraPage, 'parameters', { get: function get() {
          return [[IonicApp], [NavController]];
        } });
    }
  };
});
System.register('app/pages/index', ['./camera'], function (_export) {
  'use strict';

  return {
    setters: [function (_camera) {
      for (var _key in _camera) {
        _export(_key, _camera[_key]);
      }
    }],
    execute: function () {}
  };
});
System.register("app/pages/pages", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});
System.register('app/pages/playlists', ['angular2/angular2', 'ionic/ionic'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, PlaylistsPage;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      NgFor = _angular2Angular2.NgFor;
      Component = _angular2Angular2.ComponentAnnotation;
      Directive = _angular2Angular2.DirectiveAnnotation;
      View = _angular2Angular2.ViewAnnotation;
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
      PlaylistsPage = (function () {
        function PlaylistsPage(app, nav) {
          _classCallCheck(this, PlaylistsPage);

          this.app = app;
          this.playlists = [{ title: '90\'s Punk' }, { title: '80\'s Revival' }];
        }

        _createClass(PlaylistsPage, [{
          key: 'toggleMenu',
          value: function toggleMenu() {
            var aside = this.app.getComponent('mainMenu');
            aside.toggle();
          }
        }]);

        return PlaylistsPage;
      })();

      _export('PlaylistsPage', PlaylistsPage);

      Object.defineProperty(PlaylistsPage, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-view' }), new View({
            directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
            templateUrl: 'templates/pages/playlists.html'
          })];
        } });
      Object.defineProperty(PlaylistsPage, 'parameters', { get: function get() {
          return [[IonicApp], [NavController]];
        } });
    }
  };
});
System.register('app/pages/song-detail', ['angular2/angular2', 'ionic/ionic'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, NavParams, NavController, Navbar, NavbarTemplate, Content, Button, SongDetailPage;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      NgFor = _angular2Angular2.NgFor;
      Component = _angular2Angular2.ComponentAnnotation;
      Directive = _angular2Angular2.DirectiveAnnotation;
      View = _angular2Angular2.ViewAnnotation;
    }, function (_ionicIonic) {
      NavParams = _ionicIonic.NavParams;
      NavController = _ionicIonic.NavController;
      Navbar = _ionicIonic.Navbar;
      NavbarTemplate = _ionicIonic.NavbarTemplate;
      Content = _ionicIonic.Content;
      Button = _ionicIonic.Button;
    }],
    execute: function () {
      SongDetailPage = function SongDetailPage(nav, navParams) {
        _classCallCheck(this, SongDetailPage);

        this.nav = nav;
        this.song = navParams.song;
        console.log('Showing song', this.song);
      };

      _export('SongDetailPage', SongDetailPage);

      Object.defineProperty(SongDetailPage, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-view' }), new View({
            directives: [Content, Button, Navbar, NavbarTemplate],
            templateUrl: 'templates/pages/song_detail.html'
          })];
        } });
      Object.defineProperty(SongDetailPage, 'parameters', { get: function get() {
          return [[NavController], [NavParams]];
        } });
    }
  };
});
System.register('app/pages/songs', ['angular2/angular2', 'ionic/ionic', './song-detail'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, SongDetailPage, SongsPage;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      NgFor = _angular2Angular2.NgFor;
      Component = _angular2Angular2.ComponentAnnotation;
      Directive = _angular2Angular2.DirectiveAnnotation;
      View = _angular2Angular2.ViewAnnotation;
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
      SongsPage = (function () {
        function SongsPage(app, nav) {
          _classCallCheck(this, SongsPage);

          this.name = 'Max';
          this.app = app;
          this.songs = [{
            title: 'Linoleum',
            artist: 'NOFX'
          }, {
            title: 'Rise Above',
            artist: 'Black Flag'
          }, {
            title: 'Ruby Soho',
            artist: 'Rancid'
          }, {
            title: 'Blitzkrieg Bop',
            artist: 'Ramones'
          }, {
            title: 'Where Eagles Dare',
            artist: 'Misfits'
          }, {
            title: 'Superman',
            artist: 'Goldfinger'
          }, {
            title: 'Give Me The Cure',
            artist: 'Fugazi'
          }];
        }

        _createClass(SongsPage, [{
          key: 'openSong',
          value: function openSong(song) {
            this.nav.push(SongDetailPage, { song: song });
          }
        }, {
          key: 'toggleMenu',
          value: function toggleMenu() {
            var aside = this.app.getComponent('mainMenu');
            aside.toggle();
          }
        }]);

        return SongsPage;
      })();

      _export('SongsPage', SongsPage);

      Object.defineProperty(SongsPage, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-view' }), new View({
            directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
            templateUrl: 'templates/pages/songs.html'
          })];
        } });
      Object.defineProperty(SongsPage, 'parameters', { get: function get() {
          return [[IonicApp], [NavController]];
        } });
    }
  };
});