---
layout: docs-plugins
title: ngCordova - Document and Examples - by the Ionic Framework Team

plugin-name: $cordovaProgress
source: https://github.com/driftyco/ng-cordova/blob/master/src/plugins/progressIndicator.js
official-docs: http://pbernasconi.github.io/cordova-progressIndicator/
icon-apple: true
icon-android: true
icon-windows: false
---

Various Progress Dialogs for indicating loading or downloading.


<table class="table table-docs text-center" style="width: auto">
    <thead >
        <tr>
            <th class="table-border-right"></th>
            <th>Simple </th>
            <th>Determin</th>
            <th>Annular</th>
            <th>Bar</th>
            <th>Success</th>
            <th>Text</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="table-border-right">Example</td>
            <td><img class="img-responsive" src="/img/progressIndicator/simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/determinate-simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/annular-simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/bar-simple.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/success.jpg"></td>
            <td><img class="img-responsive" src="/img/progressIndicator/text-top.jpg"></td>
        </tr>
        <tr>
            <td class="table-border-right">Requires hide</td>
            <td>true</td>
            <td>false</td>
            <td>false</td>
            <td>false</td>
            <td>true</td>
            <td>true</td>
        </tr>

    </tbody>
</table>

```
cordova plugin add org.pbernasconi.progressindicator
```

```javascript
module.controller('MyCtrl', function($scope, $cordovaProgress) {

$cordovaProgress.showSimple(true)  // requires .hide()

$cordovaProgress.showSimpleWithLabel(true, "Loading") // .hide()

$cordovaProgress.showSimpleWithLabelDetail(true, "Loading", "detail")
    // requires .hide()

$cordovaProgress.hide()


$cordovaProgress.showDeterminate(false, 100000)

$cordovaProgress.showDeterminateWithLabel(true, 50000, "Loading")

$cordovaProgress.showAnnular(true, 50000)

$cordovaProgress.showAnnularWithLabel(false, 100000, "Loading")

$cordovaProgress.showBar(true, 50000)

$cordovaProgress.showBarWithLabel(false, 100000, "Loading")


$cordovaProgress.showSuccess(true, "Success!") // requires .hide()

$cordovaProgress.showText(false, 100000, "Loading")

});
```