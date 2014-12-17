---
layout: docs-common-issues
title: ngCordova - Document and Examples - by the Ionic Framework Team
---

## Common Issues with Cordova

Cordova plugins don't always install correctly, leading to an `undefined` plugin, or other errors which are hard if not impossible to debug and understand. Here are a few steps you can take to overcome these common pitfalls:

#### Make sure you are using the latest version of the Cordova CLI:

```bash
$ npm install -g cordova
```

#### Refresh the `ios.json` / `android.json` file (inside the `/plugin` folder):

```bash
$ cordova platform rm [ios/android]
$ cordova platform add [ios/android]
```

#### Update your project to the latest version of Cordova:

This command updates the `cordova.js` and other Cordova-dependent files to the latest version of Cordova.

```bash
$ cordova platform update [ios/android]
```


#### Only develop on your phone / emulator

Cordova plugins **do not** work while developing in your browser, because each plugin accesses a specific API (such as camera, microphone, accelerometer) which is not available in your browser. Additionally, some plugins don't work in the emulator, such as the Camera plugin, so development on your physical device is required.

