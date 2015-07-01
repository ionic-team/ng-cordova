System.register('app/pages/geolocation', ['angular2/angular2', 'ionic/ionic', 'ng-cordova/ng-cordova'], function (_export) {
  'use strict';

  var bootstrap, NgFor, NgIf, Component, Directive, View, IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content, Geolocation, GeolocationPage;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      NgFor = _angular2Angular2.NgFor;
      NgIf = _angular2Angular2.NgIf;
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

            Geolocation.watchPosition().source.subscribe(function (pos) {
              _this2.location = pos;
            });
          }
        }]);

        return GeolocationPage;
      })();

      _export('GeolocationPage', GeolocationPage);

      Object.defineProperty(GeolocationPage, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-view' }), new View({
            directives: [NgFor, NgIf, Content, List, Item, Navbar, NavbarTemplate],
            template: '\n  <ion-navbar *navbar><ion-title>Geolocation</ion-navbar>\n  <ion-content padding>\n    <button (click)="getPosition()" primary>Get Position</button>\n    <button (click)="trackLocation()" primary>Track Location</button>\n    <div *ng-if="location">\n      Position: {{location.coords.latitude}} {{location.coords.longitude}}\n    </div>\n  </ion-content>\n  '
          })];
        } });
      Object.defineProperty(GeolocationPage, 'parameters', { get: function get() {
          return [[IonicApp], [NavController]];
        } });
    }
  };
});