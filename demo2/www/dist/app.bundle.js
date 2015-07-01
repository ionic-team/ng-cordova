System.register('app/app', ['angular2/angular2', 'ionic/ionic', './pages/index'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, IonicApp, Register, Aside, NavParams, Nav, NavController, Navbar, NavbarTemplate, List, Item, Content, Button, CameraPage, GeolocationPage, MyApp;

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
      GeolocationPage = _pagesIndex.GeolocationPage;
    }],
    execute: function () {
      MyApp = (function () {
        function MyApp(app) {
          _classCallCheck(this, MyApp);

          this.app = app;
          this.plugins = [{
            title: 'Camera',
            component: CameraPage
          }, {
            title: 'Geolocation',
            component: GeolocationPage
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
System.register('app/pages/camera', ['angular2/angular2', 'ionic/ionic', 'ng-cordova/ng-cordova'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, Camera, CameraPage;

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
System.register('app/pages/geolocation', ['angular2/angular2', 'ionic/ionic', 'ng-cordova/ng-cordova'], function (_export) {
  'use strict';

  var bootstrap, NgFor, Component, Directive, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, Geolocation, GeolocationPage;

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
    }, function (_ngCordovaNgCordova) {
      Geolocation = _ngCordovaNgCordova.Geolocation;
    }],
    execute: function () {
      GeolocationPage = (function () {
        function GeolocationPage(app, nav) {
          _classCallCheck(this, GeolocationPage);

          this.name = 'Max';
          this.app = app;
        }

        _createClass(GeolocationPage, [{
          key: 'toggleMenu',
          value: function toggleMenu() {
            var aside = this.app.getComponent('mainMenu');
            aside.toggle();
          }
        }, {
          key: 'getPosition',
          value: function getPosition() {
            var _this = this;

            Geolocation.getCurrentPosition().then(function (pos) {
              _this.location = pos;
            });
          }
        }, {
          key: 'trackLocation',
          value: function trackLocation() {
            var _this2 = this;

            Geolocation.trackPosition().source.subscribe(function (pos) {
              _this2.location = pos;
            });
          }
        }]);

        return GeolocationPage;
      })();

      _export('GeolocationPage', GeolocationPage);

      Object.defineProperty(GeolocationPage, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-view' }), new View({
            directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
            template: '\n  <ion-navbar *navbar><ion-title>Geolocation</ion-navbar>\n  <ion-content padding>\n    <button (click)="getPosition()" primary>Get Position</button>\n    <button (click)="trackLocation()" primary>Track Location</button>\n  </ion-content>\n  '
          })];
        } });
      Object.defineProperty(GeolocationPage, 'parameters', { get: function get() {
          return [[IonicApp], [NavController]];
        } });
    }
  };
});
System.register('app/pages/index', ['./camera', './geolocation'], function (_export) {
  'use strict';

  return {
    setters: [function (_camera) {
      for (var _key in _camera) {
        _export(_key, _camera[_key]);
      }
    }, function (_geolocation) {
      for (var _key2 in _geolocation) {
        _export(_key2, _geolocation[_key2]);
      }
    }],
    execute: function () {}
  };
});