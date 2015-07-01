// install   :     cordova plugin add cordova-plugin-geolocation
// link      :     https://github.com/apache/cordova-plugin-geolocation

export class Geolocation {
  getCurrentPosition(options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(function (result) {
        resolve(result);
      }, function (err) {
        reject(err);
      }, options);
    });
  }

  watchPosition(options) {
    let watchID;

    let source = Observable.create((observer) => {
      watchID = navigator.geolocation.watchPosition(function (result) {
        observer.onNext(result)
      }, function(err) {
        observer.onError(err, observer);
      }, options);
    })

    return {
      watchID: watchID,
      clear: () => {
        navigator.geolocation.clearWatch(watchID);
      }
    }
  }

  clearWatch(watchID) {
    return navigator.geolocation.clearWatch(watchID);
  }
}
