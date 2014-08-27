# PhoneGap Toast plugin

for Android, iOS and WP8, by [Eddy Verbruggen](http://www.x-services.nl/phonegap-toast-plugin/796)

## 0. Index

1. [Description](#1-description)
2. [Screenshots](#2-screenshots)
3. [Installation](#3-installation)
	3. [Automatically (CLI / Plugman)](#automatically-cli--plugman)
	3. [Manually](#manually)
	3. [PhoneGap Build](#phonegap-build)
4. [Usage](#4-usage)
5. [Credits](#5-credits)
6. [Changelog](#6-changelog)
7. [License](#7-license)

## 1. Description

This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8.
It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
* You can choose where to show the Toast: at the top, center or bottom of the screen.
* You can choose two durations: short (approx. 2 seconds), or long (approx. 5 seconds), after which the Toast automatically disappears.
* Compatible with [Cordova Plugman](https://github.com/apache/cordova-plugman).
* Officially supported by [PhoneGap Build](https://build.phonegap.com/plugins).
* Minimum iOS version is [6](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin/issues/7).

Example usages:
* "There were validation errors"
* "Account created successfully"
* "The record was deleted"
* "Login successful"
* "The battery is almost dead"
* "You are now logged out"
* "Connection failure, please try again later"

## 2. Screenshots

iOS

![ScreenShot](screenshots/screenshot-ios-toast.png)

Android

![ScreenShot](screenshots/screenshot-android-toast.png)

Windows Phone 8

![ScreenShot](screenshots/screenshot-wp8.jpg)

## 3. Installation

### Automatically (CLI / Plugman)
Toast is compatible with [Cordova Plugman](https://github.com/apache/cordova-plugman), compatible with [PhoneGap 3.0 CLI](http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html#The%20Command-line%20Interface_add_features), here's how it works with the CLI (backup your project first!):

```
$ phonegap local plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
```
or
```
$ cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
$ cordova prepare
```

Toast.js is brought in automatically. There is no need to change or add anything in your html.

### Manually

1\. Add the following xml to your `config.xml` in the root directory of your `www` folder:
```xml
<!-- for iOS -->
<feature name="Toast">
  <param name="ios-package" value="Toast" />
</feature>
```
```xml
<!-- for Android -->
<feature name="Toast">
  <param name="android-package" value="nl.xservices.plugins.Toast" />
</feature>
```
```xml
<!-- for WP8 -->
<feature name="Toast">
  <param name="wp-package" value="Toast"/>
</feature>
```

For iOS, you'll need to add the `QuartzCore.framework` to your project (it's for automatically removing the Toast after a few seconds).
Click your project, Build Phases, Link Binary With Libraries, search for and add `QuartzCore.framework`.

2\. Grab a copy of Toast.js, add it to your project and reference it in `index.html`:
```html
<script type="text/javascript" src="js/Toast.js"></script>
```

3\. Download the source files and copy them to your project.

iOS: Copy the two `.h` and two `.m` files to `platforms/ios/<ProjectName>/Plugins`

Android: Copy `Toast.java` to `platforms/android/src/nl/xservices/plugins` (create the folders)

WP8: Copy `Toast.cs` to `platforms/wp8/Plugins/nl.x-services.plugins.toast` (create the folders)

### PhoneGap Build

Toast works with PhoneGap build too, but only with PhoneGap 3.0 and up.

Just add the following xml to your `config.xml` to always use the latest version of this plugin:
```xml
<gap:plugin name="nl.x-services.plugins.toast" />
```
or to use this exact version:
```xml
<gap:plugin name="nl.x-services.plugins.toast" version="1.0" />
```

Toast.js is brought in automatically. There is no need to change or add anything in your html.

## 4. Usage
You have two choices to make when showing a Toast: where to show it and for how long.
* show(message, duration, position)
 * duration: 'short', 'long'
 * position: 'top', 'center', 'bottom'

You can also use any of these convenience methods:
* showShortTop(message)
* showShortCenter(message)
* showShortBottom(message)
* showLongTop(message)
* showLongCenter(message)
* showLongBottom(message)

You can copy-paste these lines of code for a quick test:
```html
<button onclick="window.plugins.toast.showShortTop('Hello there!', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})">Toast showShortTop</button>
<button onclick="window.plugins.toast.showLongBottom('Hello there!', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})">Toast showLongBottom</button>
<button onclick="window.plugins.toast.show('Hello there!', 'long', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})">Toast show long center</button>
```

### WP8 quircks
The WP8 implementation needs a little more work, but it's perfectly useable when you keep this in mind:
* You can't show two Toasts simultaneously.
* Wait until the first Toast is hidden before the second is shown, otherwise the second one will be hidden quickly.
* The positioning of the bottom-aligned Toast is not perfect, but keep it down to 1 or 2 lines of text and you're fine.


## 5. CREDITS

This plugin was enhanced for Plugman / PhoneGap Build by [Eddy Verbruggen](http://www.x-services.nl).
The Android code was entirely created by me.
For iOS most credits go to this excellent [Toast for iOS project by Charles Scalesse] (https://github.com/scalessec/Toast).

## 6. CHANGELOG
2.0: WP8 support

1.0: initial version supporting Android and iOS

## 7. License

[The MIT License (MIT)](http://www.opensource.org/licenses/mit-license.html)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
