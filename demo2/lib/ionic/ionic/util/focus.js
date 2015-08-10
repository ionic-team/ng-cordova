'use strict';

var _dom = require('./dom');

/* Focus Outline
 * --------------------------------------------------
 * When a keydown event happens, from a tab key, then the
 * 'key-input' class is added to the body element so focusable
 * elements have an outline. On a mousedown or touchstart
 * event then the 'key-input' class is removed.
 */
var isKeyInputEnabled = false;
function keyDown(ev) {
    if (!isKeyInputEnabled && ev.keyCode == 9) {
        isKeyInputEnabled = true;
        (0, _dom.raf)(enableKeyInput);
    }
}
function enableKeyInput() {
    document.body.classList[isKeyInputEnabled ? 'add' : 'remove']('key-input');
    if (isKeyInputEnabled) {
        document.addEventListener('mousedown', pointerDown);
        document.addEventListener('touchstart', pointerDown);
    } else {
        document.removeEventListener('mousedown', pointerDown);
        document.removeEventListener('touchstart', pointerDown);
    }
}
function pointerDown() {
    isKeyInputEnabled = false;
    (0, _dom.raf)(enableKeyInput);
}
(0, _dom.ready)().then(function () {
    document.addEventListener('keydown', keyDown);
});