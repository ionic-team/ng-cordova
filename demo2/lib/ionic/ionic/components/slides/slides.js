"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _ionicGesturesDragGesture = require("ionic/gestures/drag-gesture");

var _configAnnotations = require("../../config/annotations");

var _ionicUtil = require("ionic/util");

var util = _interopRequireWildcard(_ionicUtil);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

/**
 * Slides is a slide box implementation based off of swipe.js
 * and the ionic1 implementation.
 *
 * May 21st, 2015
 * @maxlynch
 *
 * * TODO: Finish the slideshow, should continue on transition end or a
 *         similar event.
 * * TODO: Add support for 2 slide cloning
 * * TODO: Test support for N-slide sliding (like go 2 slides ahead)
 * * TODO: Analyze performance, add request animation frame if necessary
 * * TODO: Test mouse support
 * * TODO: Port over mouse handling
 */
var Slides = (function () {
    var _class = function Slides(elementRef) {
        _classCallCheck(this, _class);

        // Grab the main container, and the slides-view wrapper
        this.ele = elementRef.nativeElement;
        this.slides = [];
        this.currentIndex = 0;
        // How quickly to animate between slides
        this.animateSpeed = 300;
        // How often to switch slides automatically. Zero is no auto sliding
        this.slideDelay = 0; //3000;
        // Whether to bounce on the edges if not continuous (overscrolling)
        this.bounce = false;
        // Initialize our slides gesture handler
        this.gesture = new SlidesGesture(this);
        this.gesture.listen();
    };

    _createClass(_class, [{
        key: "onInit",
        value: function onInit() {
            this.continuous = util.isDefined(this.loop) && (this.slides.length > 1 ? true : false);
            // Grab the wrapper element that contains the slides
            this.wrapperElement = this.ele.children[0];
            this.resize();
            if (this.slideDelay) {
                this.startShow();
            }
            //special case if two slides
            /*
            if (this.continuous && this.slides.length < 3) {
              this.element.appendChild(this.slides[0].clone())//cloneNode(true));
              element.appendChild(element.children[1].cloneNode(true));
              slides = element.children;
            }
            */
        }
    }, {
        key: "startShow",

        /**
         * Start the slideshow.
         */
        value: function startShow() {
            this._showTimeout = setTimeout(this.next.bind(this), this.slideDelay);
        }
    }, {
        key: "stopShow",

        /**
         * End the slideshow.
         */
        value: function stopShow() {
            clearTimeout(this._showTimout);
        }
    }, {
        key: "setPager",

        /**
         * Set the pager element for handling rendering of page icons and
         * switching slides through clicks, etc.
         */
        value: function setPager(pager) {
            this._pager = pager;
        }
    }, {
        key: "resize",
        value: function resize() {
            // Get the width of the container, which is the viewport
            // that the user will actually see.
            this.containerWidth = this.ele.offsetWidth || this.ele.getBoundingClientRect().width;
            // Set the wrapper element to the total width of the child elements
            this.wrapperElement.style.width = this.containerWidth * this.slides.length + "px";
            // Position all the child slides
            this._bump();
        }
    }, {
        key: "add",

        /**
         * Add a new slide to the slides.
         */
        value: function add(slide) {
            this._append(slide);
        }
    }, {
        key: "slide",
        value: function slide(to, slideSpeed) {
            var index = this.currentIndex;
            var width = this.containerWidth;
            // do nothing if already on requested slide
            if (index == to) return;
            var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward
            // get the actual position of the slide
            if (this.continuous) {
                var natural_direction = direction;
                direction = -this.slides[this._circle(to)].x / width;
                // if going forward but to < index, use to = slides.length + to
                // if going backward but to > index, use to = -slides.length + to
                if (direction !== natural_direction) to = -direction * this.slides.length + to;
            }
            var diff = Math.abs(index - to) - 1;
            // move all the slides between index and to in the right direction
            while (diff--) this._move(this._circle((to > index ? to : index) - diff - 1), width * direction, 0);
            to = this._circle(to);
            this._move(index, width * direction, slideSpeed || this.animateSpeed);
            this._move(to, 0, slideSpeed || this.animateSpeed);
            if (this.continuous) this._move(this._circle(to - direction), -(width * direction), 0); // we need to get the next in place
            this.currentIndex = to;
            //offloadFn(options.callback && options.callback(index, slides[index]));
        }
    }, {
        key: "prev",

        /**
         * Slide left, possibly wrapping around in continuous mode.
         */
        value: function prev() {
            if (this.continuous) {
                // Always allow us to go back
                this.slide(this.currentIndex - 1);
            } else if (this.currentIndex > 0) {
                // If we have one slide to the left
                this.slide(this.currentIndex - 1);
            }
        }
    }, {
        key: "next",

        /**
         * Slide right, possibly wrapping around in continuous mode.
         */
        value: function next() {
            if (this.continuous) {
                // Always allow us to go next
                this.slide(this.currentIndex + 1);
            } else if (this.currentIndex < this.slides.length - 1) {
                // If not in continuous mode, only slide if we have a right slide
                this.slide(this.currentIndex + 1);
            }
        }
    }, {
        key: "_bump",

        // Reposition all the existing slides so they are in the right position
        value: function _bump() {
            var slide = undefined;
            var tx = undefined;
            var i = this.slides.length;
            while (i--) {
                slide = this.slides[i];
                // Set the slide's left position to a negative of the current index and its width
                slide.left = i * -this.containerWidth;
                slide.width = this.containerWidth;
                // Check if this slide is before or after the currently active one,
                // since we have to position it before or after it
                tx = 0;
                if (this.currentIndex > i) {
                    tx = -this.containerWidth;
                } else if (this.currentIndex < i) {
                    tx = this.containerWidth;
                }
                this._move(i, tx);
            }
            if (this.continuous) {
                // If we are in continuous mode, we need to wrap the previous and
                // last element to get a complete "circle"
                var index1 = this._circle(this.currentIndex - 1);
                var index2 = this._circle(this.currentIndex + 1);
                this._move(index1, -this.containerWidth); //, 0);
                this._move(index2, this.containerWidth); //, 0);
            }
        }
    }, {
        key: "_dragStart",
        value: function _dragStart(event) {
            this._isScrolling = undefined;
        }
    }, {
        key: "_dragPre",

        /**
         * Code to run before operating on a drag.
         */
        value: function _dragPre(event) {
            var dx = event.gesture.deltaX;
            var dy = event.gesture.deltaY;
            if (this.disableScroll) {
                event.preventDefault();
            }
            // determine if scrolling test has run - one time test
            if (typeof this._isScrolling == "undefined") {
                this._isScrolling = !!(this._isScrolling || Math.abs(dx) < Math.abs(dy));
            }
            // If we're scrolling, never run the drag
            if (this._isScrolling) {
                return false;
            }
        }
    }, {
        key: "_drag",

        // Process a drag, with a deltaX value
        value: function _drag(event) {
            var dx = event.gesture.deltaX;
            var width = this.containerWidth;
            var index = this.currentIndex;
            // Check if we should run (scroll detection, etc)
            var shouldRun = this._dragPre(event);
            if (shouldRun === false) {
                return;
            }
            // We're doing this
            event.preventDefault();
            var index1 = undefined,
                index2 = undefined,
                index3 = undefined;
            if (this.continuous) {
                // Grab the left/center/right slides
                index1 = this._circle(this.currentIndex - 1);
                index2 = this.currentIndex;
                index3 = this._circle(this.currentIndex + 1);
            } else {
                index1 = this.currentIndex - 1;
                index2 = this.currentIndex;
                index3 = this.currentIndex + 1;
                var isPastBounds = index == 0 && dx > 0 // if first slide and slide amt is greater than 0
                || index == this.slides.length - 1 && dx < 0; // or if last slide and slide amt is less than 0
                if (this.bounce) {
                    // If we have drag bouncing/overscroll enabled,
                    // let's slow down the drag on the edges
                    // if first slide and sliding left
                    // or if last slide and sliding right
                    // and if sliding at all,
                    // Adjust resistance
                    dx = dx / (!index && dx > 0 || index == this.slides.length - 1 && dx < 0 ? Math.abs(dx) / width + 1 : 1);
                } else if (isPastBounds) {
                    // We aren't overscrolling (bouncing), and we're past the bounds
                    var slide = this.slides[index];
                    return;
                }
            }
            var s1 = this.slides[index1];
            var s2 = this.slides[index2];
            var s3 = this.slides[index3];
            // Translate the left/center/right slides based on the deltaX of the drag
            if (s1) {
                s1.translate(dx + s1.x);
            }
            if (s2) {
                s2.translate(dx + s2.x);
            }
            if (s3) {
                s3.translate(dx + s3.x);
            }
        }
    }, {
        key: "_endDrag",
        value: function _endDrag(event, drag) {
            this._finish(event, drag);
        }
    }, {
        key: "_finish",
        value: function _finish(event, drag) {
            var delta = {
                x: event.gesture.deltaX,
                y: event.gesture.deltaY
            };
            var width = this.containerWidth;
            var index = this.currentIndex;
            var slides = this.slides;
            var move = this._move.bind(this);
            var circle = this._circle.bind(this);
            var isScrolling = this._isScrolling;
            var speed = this.animateSpeed;
            // measure duration
            var duration = +new Date() - drag.time;
            // determine if slide attempt triggers next/prev slide
            var isValidSlide = Number(duration) < 250 // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20 // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width / 3; // or if slide amt is greater than half the width
            // determine if slide attempt is past start and end
            var isPastBounds = !index && delta.x > 0 // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0; // or if last slide and slide amt is less than 0
            if (this.continuous) isPastBounds = false;
            // determine direction of swipe (true:right, false:left)
            var direction = delta.x < 0;
            // if not scrolling vertically
            if (!isScrolling) {
                if (isValidSlide && !isPastBounds) {
                    if (direction) {
                        if (this.continuous) {
                            move(circle(index - 1), -width, 0);
                            move(circle(index + 2), width, 0);
                        } else {
                            move(index - 1, -width, 0);
                        }
                        move(index, slides[index].x - width, speed);
                        move(circle(index + 1), slides[circle(index + 1)].x - width, speed);
                        this.currentIndex = circle(index + 1);
                    } else {
                        if (this.continuous) {
                            move(circle(index + 1), width, 0);
                            move(circle(index - 2), -width, 0);
                        } else {
                            move(index + 1, width, 0);
                        }
                        move(index, slides[index].x + width, speed);
                        move(circle(index - 1), slides[circle(index - 1)].x + width, speed);
                        this.currentIndex = circle(index - 1);
                    }
                } else {
                    if (this.continuous) {
                        move(circle(index - 1), -width, speed);
                        move(index, 0, speed);
                        move(circle(index + 1), width, speed);
                    } else {
                        move(index - 1, -width, speed);
                        move(index, 0, speed);
                        move(index + 1, width, speed);
                    }
                }
            }
            // kill touchmove and touchend event listeners until touchstart called again
            //element.removeEventListener('touchmove', events, false)
            //element.removeEventListener('touchend', events, false)
        }
    }, {
        key: "_move",
        value: function _move(pos, translateX, speed) {
            // Should already be wrapped with circle
            var slide = this.slides[pos];
            if (!slide) {
                return;
            }
            slide.translate(translateX, speed);
            slide.x = translateX;
        }
    }, {
        key: "_circle",

        // A modulo "circle" to stay in the bounds of the slide array
        value: function _circle(i) {
            return (this.slides.length + i % this.slides.length) % this.slides.length;
        }
    }, {
        key: "_append",
        value: function _append(slide) {
            this.slides.push(slide);
        }
    }, {
        key: "_prepend",
        value: function _prepend(slide) {
            this.slides.unshift(slide);
        }
    }]);

    return _class;
})();
exports.Slides = Slides;
exports.Slides = Slides = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-slides",
    properties: ["loop", "index", "bounce"]
}), (0, _angular2Angular2.View)({
    template: "<div class=\"slides-view\"><ng-content></ng-content></div>"
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], Slides);
var Slide = (function () {
    var _class2 = function Slide(slides, elementRef) {
        _classCallCheck(this, _class2);

        this.ele = elementRef.nativeElement;
        slides.add(this);
    };

    _createClass(_class2, [{
        key: "translate",
        value: function translate(x, duration) {
            this._translateX = x;
            duration = duration || 0;
            this.ele.style[_ionicUtil.dom.CSS.transition + "Duration"] = duration + "ms";
            this.ele.style[_ionicUtil.dom.CSS.transform] = "translate3d(" + x + "px, 0, 0)";
        }
    }, {
        key: "translateX",
        get: function get() {
            return this._translateX;
        }
    }, {
        key: "left",
        set: function set(x) {
            this._left = x;
            this.ele.style.left = x + "px";
        },
        get: function get() {
            return this._left;
        }
    }, {
        key: "width",
        set: function set(width) {
            this._width = width;
            this.ele.style.width = width + "px";
        },
        get: function get() {
            return this._width;
        }
    }]);

    return _class2;
})();
exports.Slide = Slide;
exports.Slide = Slide = __decorate([(0, _configAnnotations.IonicDirective)({
    selector: "ion-slide"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Slides, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], Slide);
var SlidePager = (function () {
    var _class3 = function SlidePager(slides, elementRef) {
        _classCallCheck(this, _class3);

        this.ele = elementRef.nativeElement;
        this.slides = slides;
        this.slides.setPager(this);
    };

    _createClass(_class3, [{
        key: "getSlides",
        value: function getSlides() {
            return this.slides.slides;
        }
    }]);

    return _class3;
})();
exports.SlidePager = SlidePager;
exports.SlidePager = SlidePager = __decorate([(0, _angular2Angular2.Component)({
    selector: "ion-pager"
}), (0, _angular2Angular2.View)({
    //[class.active]="$index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>',
    template: "<span class=\"slide-pager-page\" *ng-for=\"#page of getSlides()\">{{page.width}}<i class=\"icon ion-record\"></i>X</span>",
    directives: [_angular2Angular2.NgFor]
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Slides, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], SlidePager);

var SlidesGesture = (function (_DragGesture) {
    function SlidesGesture(slides) {
        _classCallCheck(this, SlidesGesture);

        _get(Object.getPrototypeOf(SlidesGesture.prototype), "constructor", this).call(this, slides.ele);
        this.slides = slides;
    }

    _inherits(SlidesGesture, _DragGesture);

    _createClass(SlidesGesture, [{
        key: "onDrag",
        value: function onDrag(event) {
            var x = event.gesture.center.x;
            var y = event.gesture.center.y;
            this._drag.x = x;
            this._drag.y = y;
            this.slides._drag(event);
        }
    }, {
        key: "onDragStart",
        value: function onDragStart(event) {
            this._drag = {
                startX: event.gesture.center.x,
                startY: event.gesture.center.y,
                time: +new Date()
            };
            this.slides._dragStart(event, this._drag);
        }
    }, {
        key: "onDragEnd",
        value: function onDragEnd(event) {
            this.slides._endDrag(event, this._drag);
        }
    }]);

    return SlidesGesture;
})(_ionicGesturesDragGesture.DragGesture);

exports.SlidesGesture = SlidesGesture;
// determine resistance level