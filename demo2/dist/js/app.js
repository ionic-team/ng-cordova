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