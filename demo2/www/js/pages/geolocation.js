import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

import {Geolocation} from 'ng-cordova/ng-cordova';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  template: `
  <ion-navbar *navbar><ion-title>Geolocation</ion-navbar>
  <ion-content padding>
    <button (click)="getPosition()" primary>Get Position</button>
    <button (click)="trackLocation()" primary>Track Location</button>
  </ion-content>
  `
})
export class GeolocationPage {
  constructor(app: IonicApp, nav: NavController) {
    this.name = 'Max';
    this.app = app;
  }
  toggleMenu() {
    let aside = this.app.getComponent('mainMenu');
    aside.toggle();
  }
  getPosition() {
    Geolocation.getCurrentPosition().then((pos) => {
      this.location = pos;
    })
  }
  trackLocation() {
    Geolocation.trackPosition().source.subscribe((pos) => {
      this.location = pos;
    })
  }
}
