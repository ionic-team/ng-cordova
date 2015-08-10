'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _ionicConfigComponent = require('ionic/config/component');

var _ionicComponentsAsideAside = require('ionic/components/aside/aside');

var AsideConfig = new _ionicConfigComponent.ComponentConfig(_ionicComponentsAsideAside.Aside);
exports.AsideConfig = AsideConfig;
AsideConfig.classes('side', 'type');
AsideConfig.delegate('gesture').when({ side: 'left' }, gestures.LeftAsideGesture).when({ side: 'right' }, gestures.RightAsideGesture).when({ side: 'top' }, gestures.TopAsideGesture).when({ side: 'bottom' }, gestures.BottomAsideGesture);
AsideConfig.delegate('type').when({ type: 'overlay' }, types.AsideTypeOverlay).when({ type: 'push' }, types.AsideTypePush).when({ type: 'reveal' }, types.AsideTypeReveal);
AsideConfig.platform('android').defaults({ type: 'overlay' });
AsideConfig.platform('ios').defaults({ type: 'reveal' });