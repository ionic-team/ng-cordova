'use strict';

var _platform = require('./platform');

_platform.Platform.register({
    name: 'core',
    settings: {
        backButtonText: 'Back',
        backButtonIcon: 'ion-ios-arrow-back',
        forwardIcon: 'ion-ios-arrow-forward',
        mode: 'ios',
        iconMode: 'ios',
        navTitleAlign: 'center',
        viewTransition: 'ios'
    }
});
_platform.Platform.setDefault('core');
_platform.Platform.register({
    name: 'mobile'
});
_platform.Platform.register({
    name: 'phablet',
    isMatch: function isMatch(p) {
        var smallest = Math.min(p.width(), p.height());
        var largest = Math.max(p.width(), p.height());
        // http://www.mydevice.io/devices/
        return smallest > 390 && smallest < 520 && (largest > 620 && largest < 800);
    }
});
_platform.Platform.register({
    name: 'tablet',
    isMatch: function isMatch(p) {
        var smallest = Math.min(p.width(), p.height());
        var largest = Math.max(p.width(), p.height());
        // http://www.mydevice.io/devices/
        return smallest > 460 && smallest < 820 && (largest > 780 && largest < 1400);
    }
});
_platform.Platform.register({
    name: 'android',
    superset: 'mobile',
    subsets: ['phablet', 'tablet'],
    settings: {
        backButtonText: '',
        backButtonIcon: 'ion-android-arrow-back',
        forwardIcon: '',
        mode: 'md',
        iconMode: 'md',
        type: 'overlay',
        keyboardScrollAssist: true,
        mdRipple: true,
        tabBarPlacement: 'top',
        navTitleAlign: 'left',
        viewTransition: 'md'
    },
    isMatch: function isMatch(p) {
        // "silk" is kindle fire
        return p.isPlatform('android', 'android| silk');
    },
    versionParser: function versionParser(p) {
        return p.matchUserAgentVersion(/Android (\d+).(\d+)?/);
    }
});
_platform.Platform.register({
    name: 'ios',
    superset: 'mobile',
    subsets: ['ipad', 'iphone'],
    settings: {
        backButtonText: 'Back',
        backButtonIcon: 'ion-ios-arrow-back',
        forwardIcon: 'ion-ios-arrow-forward',
        mode: 'ios',
        iconMode: 'ios',
        tapPolyfill: function tapPolyfill() {
            // this ensures it's actually a physical iOS device
            // and not just an a spoofed user-agent string
            return /iphone|ipad|ipod/i.test(_platform.Platform.navigatorPlatform());
        },
        keyboardScrollAssist: true,
        viewTransition: 'ios',
        navTitleAlign: 'center',
        mdRipple: false
    },
    isMatch: function isMatch(p) {
        return p.isPlatform('ios', 'iphone|ipad|ipod');
    },
    versionParser: function versionParser(p) {
        return p.matchUserAgentVersion(/OS (\d+)_(\d+)?/);
    }
});
_platform.Platform.register({
    name: 'ipad',
    superset: 'tablet',
    isMatch: function isMatch(p) {
        return p.isPlatform('ipad');
    }
});
_platform.Platform.register({
    name: 'iphone',
    subsets: ['phablet'],
    isMatch: function isMatch(p) {
        return p.isPlatform('iphone');
    }
});
_platform.Platform.register({
    name: 'windowsphone',
    superset: 'mobile',
    subsets: ['phablet', 'tablet'],
    settings: {
        mode: 'wp',
        iconMode: 'md',
        viewTransition: 'md'
    },
    isMatch: function isMatch(p) {
        return p.isPlatform('windowsphone', 'windows phone');
    },
    versionParser: function versionParser(p) {
        return p.matchUserAgentVersion(/Windows Phone (\d+).(\d+)?/);
    }
});
_platform.Platform.register({
    name: 'cordova',
    isEngine: true,
    methods: {
        ready: function ready(resolve) {
            _platform.Platform.windowLoad(function () {
                document.addEventListener('deviceready', resolve);
            });
        }
    },
    isMatch: function isMatch(p) {
        return !!(window.cordova || window.PhoneGap || window.phonegap);
    }
});