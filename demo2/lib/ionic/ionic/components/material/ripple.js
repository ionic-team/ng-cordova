/**
 * Lovingly Adapted from Material Design Lite
 * Copyright Google, 2015, Licensed under the Apache 2 license.
 * https://github.com/google/material-design-lite
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MaterialRippleEffect = (function () {
    function MaterialRippleEffect(button) {
        _classCallCheck(this, MaterialRippleEffect);

        this.elementRef = button.elementRef;
        this.element = this.elementRef.nativeElement;
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add('md-ripple-container');
        rippleContainer.setAttribute('aria-hidden', 'true');
        this.rippleElement = document.createElement('span');
        this.rippleElement.classList.add('md-ripple');
        rippleContainer.appendChild(this.rippleElement);
        this.recentering = false; //this.element.classList.contains(this.CssClasses_.RIPPLE_CENTER);
        this.INITIAL_SCALE = 'scale(0.0001, 0.0001)';
        this.INITIAL_SIZE = '1px';
        this.INITIAL_OPACITY = '0.4';
        this.FINAL_OPACITY = '0';
        this.FINAL_SCALE = '';
        //this.boundRippleBlurHandler = this.blurHandler.bind(this);
        //this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
        this.elementRef.nativeElement.appendChild(rippleContainer);
        this._initRipple();
    }

    _createClass(MaterialRippleEffect, [{
        key: '_initRipple',
        value: function _initRipple() {
            this.frameCount = 0;
            this.rippleSize = 0;
            this.x = 0;
            this.y = 0;
            // Touch start produces a compat mouse down event, which would cause a
            // second ripples. To avoid that, we use this property to ignore the first
            // mouse down after a touch start.
            this.ignoringMouseDown = false;
            this.boundDownHandler = this.downHandler.bind(this);
            this.element.addEventListener('mousedown', this.boundDownHandler);
            this.element.addEventListener('touchstart', this.boundDownHandler);
            this.boundUpHandler = this.upHandler.bind(this);
            this.element.addEventListener('mouseup', this.boundUpHandler);
            this.element.addEventListener('mouseleave', this.boundUpHandler);
            this.element.addEventListener('touchend', this.boundUpHandler);
            this.element.addEventListener('blur', this.boundUpHandler);
        }
    }, {
        key: 'downHandler',

        /**
         * Handle mouse / finger down on element.
         * @param {Event} event The event that fired.
         * @private
         */
        value: function downHandler(event) {
            'use strict';
            if (!this.rippleElement.style.width && !this.rippleElement.style.height) {
                var rect = this.element.getBoundingClientRect();
                this.boundHeight = rect.height;
                this.boundWidth = rect.width;
                this.rippleSize = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
                this.rippleElement.style.width = this.rippleSize + 'px';
                this.rippleElement.style.height = this.rippleSize + 'px';
            }
            this.rippleElement.classList.add('is-visible');
            if (event.type === 'mousedown' && this.ignoringMouseDown) {
                this.ignoringMouseDown = false;
            } else {
                if (event.type === 'touchstart') {
                    this.ignoringMouseDown = true;
                }
                var frameCount = this.getFrameCount();
                if (frameCount > 0) {
                    return;
                }
                this.setFrameCount(1);
                var bound = event.currentTarget.getBoundingClientRect();
                var x;
                var y;
                // Check if we are handling a keyboard click.
                if (event.clientX === 0 && event.clientY === 0) {
                    x = Math.round(bound.width / 2);
                    y = Math.round(bound.height / 2);
                } else {
                    var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
                    var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
                    x = Math.round(clientX - bound.left);
                    y = Math.round(clientY - bound.top);
                }
                this.setRippleXY(x, y);
                this.setRippleStyles(true);
                window.requestAnimationFrame(this.animFrameHandler.bind(this));
            }
        }
    }, {
        key: 'upHandler',

        /**
         * Handle mouse / finger up on element.
         * @param {Event} event The event that fired.
         * @private
         */
        value: function upHandler(event) {
            'use strict';

            var _this = this;

            // Don't fire for the artificial "mouseup" generated by a double-click.
            if (event && event.detail !== 2) {
                setTimeout(function () {
                    _this.rippleElement.classList.remove('is-visible');
                });
            }
        }
    }, {
        key: 'getFrameCount',
        value: function getFrameCount() {
            return this.frameCount;
        }
    }, {
        key: 'setFrameCount',
        value: function setFrameCount(fC) {
            this.frameCount = fC;
        }
    }, {
        key: 'getRippleElement',
        value: function getRippleElement() {
            return this.rippleElement;
        }
    }, {
        key: 'setRippleXY',
        value: function setRippleXY(newX, newY) {
            this.x = newX;
            this.y = newY;
        }
    }, {
        key: 'setRippleStyles',
        value: function setRippleStyles(start) {
            if (this.rippleElement !== null) {
                var transformString;
                var scale;
                var size;
                var offset = 'translate(' + this.x + 'px, ' + this.y + 'px)';
                if (start) {
                    scale = this.INITIAL_SCALE;
                    size = this.INITIAL_SIZE;
                } else {
                    scale = this.FINAL_SCALE;
                    size = this.rippleSize + 'px';
                    if (this.recentering) {
                        offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
                    }
                }
                transformString = 'translate(-50%, -50%) ' + offset + scale;
                this.rippleElement.style.webkitTransform = transformString;
                this.rippleElement.style.msTransform = transformString;
                this.rippleElement.style.transform = transformString;
                if (start) {
                    this.rippleElement.classList.remove('md-ripple-animating');
                } else {
                    this.rippleElement.classList.add('md-ripple-animating');
                }
            }
        }
    }, {
        key: 'animFrameHandler',
        value: function animFrameHandler() {
            if (this.frameCount-- > 0) {
                window.requestAnimationFrame(this.animFrameHandler.bind(this));
            } else {
                this.setRippleStyles(false);
            }
        }
    }, {
        key: 'elementClicked',
        value: function elementClicked(event) {}
    }]);

    return MaterialRippleEffect;
})();

exports.MaterialRippleEffect = MaterialRippleEffect;