import {bootstrap, NgFor, Component, Directive, View} from 'angular2/angular2';
import {IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

import {SongDetailPage} from './song-detail';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  templateUrl: '_app/songs/songs.html'
})
export class SongsPage {
  constructor(app: IonicApp, nav: NavController) {
    this.name = 'Max';
    this.nav = nav;
    this.app = app;

    this.songs = [
      { title: 'Linoleum', artist: 'NOFX' },
      { title: 'Rise Above', artist: 'Black Flag' },
      { title: 'Ruby Soho', artist: 'Rancid' },
      { title: 'Blitzkrieg Bop', artist: 'Ramones' },
      { title: 'Where Eagles Dare', artist: 'Misfits' },
      { title: 'Superman', artist: 'Goldfinger' },
      { title: 'Give Me The Cure', artist: 'Fugazi' }
    ];
  }

  openSong(song) {
    this.nav.push(SongDetailPage, {
      song: song
    });
  }

  toggleMenu() {
    let aside = this.app.getComponent('mainMenu');
    aside.toggle();
  }
}
