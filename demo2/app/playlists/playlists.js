import {bootstrap, NgFor, Component, Directive, View} from 'angular2/angular2';
import {IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  templateUrl: '_app/playlists/playlists.html'
})
export class PlaylistsPage {
  constructor(app: IonicApp, nav: NavController) {
    this.app = app;

    this.playlists = [
      { title: '90\'s Punk' },
      { title: '80\'s Revival' }
    ];

  }

  toggleMenu() {
    let aside = this.app.getComponent('mainMenu');
    aside.toggle();
  }
}
