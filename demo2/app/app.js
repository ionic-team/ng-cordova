
import {App, IonicApp} from 'ionic/ionic';

import {CameraPage} from './pages/camera';
import {GeolocationPage} from './pages/geolocation';

@App({
  templateUrl: '_app/app.html'
})
class MyApp {
  constructor(app: IonicApp) {
    console.log('IonicApp Start');

    this.app = app;

    this.pages = [
      { title: 'Songs', component: CameraPage },
      { title: 'Playlists', component: GeolocationPage },
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
