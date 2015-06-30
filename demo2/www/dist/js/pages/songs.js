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