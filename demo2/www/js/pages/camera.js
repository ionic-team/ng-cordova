import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

import {SongDetailPage} from './song-detail';

import {Camera} from 'ng-cordova/ng-cordova';

console.log('Camera', Camera);

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  template: `
  <ion-navbar *navbar><ion-title>Camera</ion-navbar>
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
