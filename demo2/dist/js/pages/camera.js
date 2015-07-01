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