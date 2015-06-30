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