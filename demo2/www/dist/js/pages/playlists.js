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