// install   :      cordova plugin add cordova-plugin-tts
// link      :      https://github.com/smcpjames/cordova-plugin-tts

/* globals TTS: true */
angular.module('ngCordova.plugins.tts', [])

.factory('$cordovaTTS', function () {
    return {
        speak: function (text, onfulfilled, onrejected) {
            return TTS.speak(text, onfulfilled, onrejected);
        }
    };
});