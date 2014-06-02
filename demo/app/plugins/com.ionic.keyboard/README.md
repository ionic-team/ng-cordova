Keyboard
======

The `Keyboard` object on the `cordova.plugins` object provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.

    cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git

Methods
-------

- cordova.plugins.Keyboard.hideKeyboardAccessoryBar
- cordova.plugins.Keyboard.close
- cordova.plugins.Keyboard.disableScroll

Properties
--------

- cordova.plugins.Keyboard.isVisible

Events
--------

- native.keyboardshow
- native.keyboardhide

Permissions
-----------

#### config.xml

            <feature name="Keyboard">
                <param name="ios-package" value="IonicKeyboard" onload="true" />
            </feature>


Keyboard.hideKeyboardAccessoryBar
=================

Hide the keyboard accessory bar with the next, previous and done buttons.

    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

Supported Platforms
-------------------

- iOS


Keyboard.close
=================

Close the keyboard if it is open.

    cordova.plugins.Keyboard.close();

Supported Platforms
-------------------

- iOS

    
Keyboard.disableScroll
=================

Disable native scrolling, useful if you are using JavaScript to scroll

    cordova.plugins.Keyboard.disableScroll(true);
    cordova.plugins.Keyboard.disableScroll(false);

Supported Platforms
-------------------

- iOS


native.keyboardshow
=================

This event fires when the keyboard will be shown

    window.addEventListener('native.keyboardshow', keyboardShowHandler);
    
    function keyboardShowHandler(e){
        alert('Keyboard height is: ' + e.keyboardHeight);
    }

Properties
-----------

keyboardHeight: the height of the keyboard in pixels 


Supported Platforms
-------------------

- iOS, Android


native.keyboardhide
=================

This event fires when the keyboard will hide

    window.addEventListener('native.keyboardhide', keyboardHideHandler);
    
    function keyboardHideHandler(e){
        alert('Goodnight, sweet prince');
    }

Properties
-----------

None

Supported Platforms
-------------------

- iOS, Android
