// install   :      cordova plugin add cordova-plugin-recentscontrol
// link      :      https://github.com/smcpjames/cordova-plugin-recentscontrol

/* globals RecentsControl: true */
angular.module('ngCordova.plugins.recentsControl', [])

.factory('$cordovaRecents', function () {
    return {
        setColor: function (color) {
            return RecentsControl.setColor(color);
        },

        setDescription: function (desc) {
            return RecentsControl.setDescription(desc);
        },

        setOptions: function (colorStr, desc) {
            return RecentsControl.setOptions(colorStr, desc);
        }
    };
});