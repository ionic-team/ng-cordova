import {App, IonicView, NavController} from 'ionic/ionic';

//import {CameraPage, GeolocationPage} from './pages/index';

console.log('UP HERE');

@App({
  templateUrl: '_app/main.html'
})
class MyApp {
  constructor(app: IonicApp) {
    console.log('Loading app');

    this.app = app;

/*
    this.plugins = [
      { title: 'Camera', component: CameraPage },
      { title: 'Geolocation', component: GeolocationPage },

    ];

    this.firstPage = CameraPage;
    */
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
