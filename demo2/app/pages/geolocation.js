import {bootstrap, NgFor, NgIf, Component, Directive, View} from 'angular2/angular2';
import {IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

//import {Geolocation} from 'ng-cordova/ng-cordova';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, NgIf, Content, List, Item, Navbar, NavbarTemplate],
  template: `
  <ion-navbar *navbar><ion-title>Geolocation</ion-navbar>
  <ion-content padding>
    <button (click)="getPosition()" primary>Get Position</button>
    <button (click)="trackLocation()" primary>Track Location</button>
    <div *ng-if="location">
      Position: {{location.coords.latitude}} {{location.coords.longitude}}
    </div>
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
    Geolocation.watchPosition().source.subscribe((pos) => {
      this.location = pos;
    })
  }
}
