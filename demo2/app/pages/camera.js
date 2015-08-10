import {NgFor, Component, Directive, View} from 'angular2/angular2';
import {IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

import {Camera} from 'ng-cordova/ng-cordova';

console.log('Camera', Camera);

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  template: `
  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)="app.getComponent('mainMenu').toggle()"><i class="icon ion-navicon"></i></button></ion-nav-items><ion-title>Camera</ion-title></ion-navbar>
  <ion-content padding>
    <button (click)="takePicture()" primary>Take Picture</button>
  </ion-content>
  `
})
export class CameraPage {
  constructor(app: IonicApp, nav: NavController) {
    this.name = 'Max';
    this.app = app;
  }
  toggleMenu() {
    let aside = this.app.getComponent('mainMenu');
    aside.toggle();
  }
  takePicture() {
    Camera.getPicture().then((imageData) => {
      console.log('GOT PICTURE');
    }, (err) => {
      console.error('Couldn\'t take picture!', err)
    })
  }
}
