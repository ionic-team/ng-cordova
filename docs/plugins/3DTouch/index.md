---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordova3DTouch
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/3dtouch.js
official-docs: https://github.com/nickplesha/ng-cordova-3dtouch
icon-apple: true
icon-android: false
icon-windows: false
---

Cordova Plugin for home screen quick actions and handling 3D touch events on iOS.

```
cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-3dtouch
```

#### Methods

##### `addQuickAction(type, title, iconType, iconTemplate, subtitle, handler)`

Adds a quick action to the home screen menu.

| Param         | Type           | Detail  |
| ------------- |----------------| --------|
| type          | `String`       | Unique name that identifies the action (UIApplicationShortcutItemType) |
| title         | `String`       | Title that will be visible in the menu (UIApplicationShortcutItemTitle) |
| iconType      | `String`       | Name of the built-in icon (UIApplicationShortcutItemIconType) |
| iconTemplate  | `String`       | Name of your custom icon file in the Resources folder (UIApplicationShortcutItemIconFile) |
| subtitle      | `String`       | Subtitle that will be visible in the menu (UIApplicationShortcutItemSubtitle) |
| handler       | `Function`     | Function that is called when this quick link is pressed |

##### `addQuickActionHandler(type, handler)`

Adds a quick action handler. Used for static actions defined in the .plist file.

| Param         | Type           | Detail  |
| ------------- |----------------| --------|
| type          | `String`       | Unique name that identifies the action (UIApplicationShortcutItemType) |
| handler       | `Function`     | Function that is called when this quick link is pressed |

##### `enableLinkPreview()`

Enable link previews (Peek and Pop) when a link is force pressed.

##### `addForceTouchHandler(handler)`

Add a handler function for force touch events.

##### `isAvailable()`

Check if the plugin is loaded and the device supports 3D touch.

#### Example

```javascript
$ionicPlatform.ready(function() {

    //Add a dynamic quick action with title "Saved" and a built-in "Favorite" icon
    $cordova3DTouch.addQuickAction('saved', 'Saved', 'Favorite', null, 'Posts you saved for later', function() {
        //Navigate to target state when the quick action was pressed on home screen
        $state.go('tab.saved');
    });

    //Add a dynamic quick action with title "Frontpage" and a custom 'customicon' icon from the Resources folder
    $cordova3DTouch.addQuickAction('frontpage', 'Frontpage', null, 'customicon', 'Latest posts', function() {
        //Navigate to target state when the quick action was pressed on home screen
        $state.go('tab.frontpage');
    });
}
```
