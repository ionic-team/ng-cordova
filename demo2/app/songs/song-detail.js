import {bootstrap, NgFor, Component, Directive, View} from 'angular2/angular2';
import {NavParams, NavController, Navbar, NavbarTemplate, Content} from 'ionic/ionic';

@Component({ selector: 'ion-view' })
@View({
  directives: [Content, Navbar, NavbarTemplate],
  templateUrl: '_app/songs/song_detail.html'
})
export class SongDetailPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;

    this.song = navParams.song;

    console.log('Showing song', this.song);
  }
}
