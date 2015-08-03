import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';

import {IonicApp, Register, Aside, NavParams, Nav, NavController,
  Navbar, NavbarTemplate, List, Item, Content, Button} from 'ionic/ionic';

import {CameraPage, GeolocationPage} from './pages/index';

@Component({ selector: 'ion-app' })
@View({
  directives: [NgFor, Aside, Nav, Content, List, Item, Register],
  templateUrl: 'templates/main.html'
})
class MyApp {
  constructor(app: IonicApp) {
    this.app = app;

    this.plugins = [
      { title: 'Camera', component: CameraPage },
      { title: 'Geolocation', component: GeolocationPage },

    ];

    this.firstPage = CameraPage;
  }

  openPage(aside, page) {
    console.log('Opening page', page);

    // Close the side menu
    aside.close();

    // Reset the content nav to have just this page
    let nav = this.app.getComponent('nav');
    nav.setItems([page.component]);
  }
}

export function main(ionicBootstrap){
  ionicBootstrap(MyApp);
}
