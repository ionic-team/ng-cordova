System.register('app/app', ['ionic/ionic', './pages/index'], function (_export) {
  'use strict';

  var App, IonicView, NavController, CameraPage, GeolocationPage, MyApp;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicIonic) {
      App = _ionicIonic.App;
      IonicView = _ionicIonic.IonicView;
      NavController = _ionicIonic.NavController;
    }, function (_pagesIndex) {
      CameraPage = _pagesIndex.CameraPage;
      GeolocationPage = _pagesIndex.GeolocationPage;
    }],
    execute: function () {
      console.log('UP HERE');

      MyApp = (function () {
        function MyApp(app) {
          _classCallCheck(this, MyApp);

          console.log('Loading app');
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
          return [new App({ templateUrl: 'templates/main.html' })];
        } });
      Object.defineProperty(MyApp, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
    }
  };
});