System.register('ionic/components', ['ionic/components/app/app', 'ionic/components/action-menu/action-menu', 'ionic/components/aside/aside', 'ionic/components/checkbox/checkbox', 'ionic/components/content/content', 'ionic/components/icon/icon', 'ionic/components/item/item', 'ionic/components/form/form', 'ionic/components/form/input/input', 'ionic/components/form/label/label', 'ionic/components/list/list', 'ionic/components/modal/modal', 'ionic/components/nav/nav', 'ionic/components/nav/nav-controller', 'ionic/components/nav/nav-push', 'ionic/components/nav-bar/nav-bar', 'ionic/components/slides/slides', 'ionic/components/radio/radio', 'ionic/components/scroll/pull-to-refresh', 'ionic/components/search-bar/search-bar', 'ionic/components/segment/segment', 'ionic/components/switch/switch', 'ionic/components/view/view', 'ionic/components/tabs/tabs', 'ionic/components/tabs/tab'], function (_export) {
  'use strict';

  return {
    setters: [function (_ionicComponentsAppApp) {
      for (var _key in _ionicComponentsAppApp) {
        _export(_key, _ionicComponentsAppApp[_key]);
      }
    }, function (_ionicComponentsActionMenuActionMenu) {
      for (var _key2 in _ionicComponentsActionMenuActionMenu) {
        _export(_key2, _ionicComponentsActionMenuActionMenu[_key2]);
      }
    }, function (_ionicComponentsAsideAside) {
      for (var _key3 in _ionicComponentsAsideAside) {
        _export(_key3, _ionicComponentsAsideAside[_key3]);
      }
    }, function (_ionicComponentsCheckboxCheckbox) {
      for (var _key4 in _ionicComponentsCheckboxCheckbox) {
        _export(_key4, _ionicComponentsCheckboxCheckbox[_key4]);
      }
    }, function (_ionicComponentsContentContent) {
      for (var _key5 in _ionicComponentsContentContent) {
        _export(_key5, _ionicComponentsContentContent[_key5]);
      }
    }, function (_ionicComponentsIconIcon) {
      for (var _key6 in _ionicComponentsIconIcon) {
        _export(_key6, _ionicComponentsIconIcon[_key6]);
      }
    }, function (_ionicComponentsItemItem) {
      for (var _key7 in _ionicComponentsItemItem) {
        _export(_key7, _ionicComponentsItemItem[_key7]);
      }
    }, function (_ionicComponentsFormForm) {
      for (var _key8 in _ionicComponentsFormForm) {
        _export(_key8, _ionicComponentsFormForm[_key8]);
      }
    }, function (_ionicComponentsFormInputInput) {
      for (var _key9 in _ionicComponentsFormInputInput) {
        _export(_key9, _ionicComponentsFormInputInput[_key9]);
      }
    }, function (_ionicComponentsFormLabelLabel) {
      for (var _key10 in _ionicComponentsFormLabelLabel) {
        _export(_key10, _ionicComponentsFormLabelLabel[_key10]);
      }
    }, function (_ionicComponentsListList) {
      for (var _key11 in _ionicComponentsListList) {
        _export(_key11, _ionicComponentsListList[_key11]);
      }
    }, function (_ionicComponentsModalModal) {
      for (var _key12 in _ionicComponentsModalModal) {
        _export(_key12, _ionicComponentsModalModal[_key12]);
      }
    }, function (_ionicComponentsNavNav) {
      for (var _key13 in _ionicComponentsNavNav) {
        _export(_key13, _ionicComponentsNavNav[_key13]);
      }
    }, function (_ionicComponentsNavNavController) {
      for (var _key14 in _ionicComponentsNavNavController) {
        _export(_key14, _ionicComponentsNavNavController[_key14]);
      }
    }, function (_ionicComponentsNavNavPush) {
      for (var _key15 in _ionicComponentsNavNavPush) {
        _export(_key15, _ionicComponentsNavNavPush[_key15]);
      }
    }, function (_ionicComponentsNavBarNavBar) {
      for (var _key16 in _ionicComponentsNavBarNavBar) {
        _export(_key16, _ionicComponentsNavBarNavBar[_key16]);
      }
    }, function (_ionicComponentsSlidesSlides) {
      for (var _key17 in _ionicComponentsSlidesSlides) {
        _export(_key17, _ionicComponentsSlidesSlides[_key17]);
      }
    }, function (_ionicComponentsRadioRadio) {
      for (var _key18 in _ionicComponentsRadioRadio) {
        _export(_key18, _ionicComponentsRadioRadio[_key18]);
      }
    }, function (_ionicComponentsScrollPullToRefresh) {
      for (var _key19 in _ionicComponentsScrollPullToRefresh) {
        _export(_key19, _ionicComponentsScrollPullToRefresh[_key19]);
      }
    }, function (_ionicComponentsSearchBarSearchBar) {
      for (var _key20 in _ionicComponentsSearchBarSearchBar) {
        _export(_key20, _ionicComponentsSearchBarSearchBar[_key20]);
      }
    }, function (_ionicComponentsSegmentSegment) {
      for (var _key21 in _ionicComponentsSegmentSegment) {
        _export(_key21, _ionicComponentsSegmentSegment[_key21]);
      }
    }, function (_ionicComponentsSwitchSwitch) {
      for (var _key22 in _ionicComponentsSwitchSwitch) {
        _export(_key22, _ionicComponentsSwitchSwitch[_key22]);
      }
    }, function (_ionicComponentsViewView) {
      for (var _key23 in _ionicComponentsViewView) {
        _export(_key23, _ionicComponentsViewView[_key23]);
      }
    }, function (_ionicComponentsTabsTabs) {
      for (var _key24 in _ionicComponentsTabsTabs) {
        _export(_key24, _ionicComponentsTabsTabs[_key24]);
      }
    }, function (_ionicComponentsTabsTab) {
      for (var _key25 in _ionicComponentsTabsTab) {
        _export(_key25, _ionicComponentsTabsTab[_key25]);
      }
    }],
    execute: function () {}
  };
});
System.register("ionic/index", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});
/*
 * export everything here
 */
System.register('ionic/ionic', ['ionic/config/config', 'ionic/config/annotations', 'ionic/net/http', 'ionic/registry', 'ionic/components', 'ionic/platform/platform', 'ionic/platform/registry', 'ionic/routing/router', 'ionic/util/click-block', 'ionic/util/focus', 'ionic/util/tap', 'ionic/animations/animation', 'ionic/animations/builtins', 'ionic/transitions/transition', 'ionic/transitions/ios-transition'], function (_export) {
  'use strict';

  return {
    setters: [function (_ionicConfigConfig) {
      for (var _key in _ionicConfigConfig) {
        _export(_key, _ionicConfigConfig[_key]);
      }
    }, function (_ionicConfigAnnotations) {
      for (var _key2 in _ionicConfigAnnotations) {
        _export(_key2, _ionicConfigAnnotations[_key2]);
      }
    }, function (_ionicNetHttp) {
      for (var _key3 in _ionicNetHttp) {
        _export(_key3, _ionicNetHttp[_key3]);
      }
    }, function (_ionicRegistry) {
      for (var _key4 in _ionicRegistry) {
        _export(_key4, _ionicRegistry[_key4]);
      }
    }, function (_ionicComponents) {
      for (var _key5 in _ionicComponents) {
        _export(_key5, _ionicComponents[_key5]);
      }
    }, function (_ionicPlatformPlatform) {
      for (var _key6 in _ionicPlatformPlatform) {
        _export(_key6, _ionicPlatformPlatform[_key6]);
      }
    }, function (_ionicPlatformRegistry) {
      for (var _key7 in _ionicPlatformRegistry) {
        _export(_key7, _ionicPlatformRegistry[_key7]);
      }
    }, function (_ionicRoutingRouter) {
      for (var _key8 in _ionicRoutingRouter) {
        _export(_key8, _ionicRoutingRouter[_key8]);
      }
    }, function (_ionicUtilClickBlock) {
      for (var _key9 in _ionicUtilClickBlock) {
        _export(_key9, _ionicUtilClickBlock[_key9]);
      }
    }, function (_ionicUtilFocus) {
      for (var _key10 in _ionicUtilFocus) {
        _export(_key10, _ionicUtilFocus[_key10]);
      }
    }, function (_ionicUtilTap) {
      for (var _key11 in _ionicUtilTap) {
        _export(_key11, _ionicUtilTap[_key11]);
      }
    }, function (_ionicAnimationsAnimation) {
      for (var _key12 in _ionicAnimationsAnimation) {
        _export(_key12, _ionicAnimationsAnimation[_key12]);
      }
    }, function (_ionicAnimationsBuiltins) {
      for (var _key13 in _ionicAnimationsBuiltins) {
        _export(_key13, _ionicAnimationsBuiltins[_key13]);
      }
    }, function (_ionicTransitionsTransition) {
      for (var _key14 in _ionicTransitionsTransition) {
        _export(_key14, _ionicTransitionsTransition[_key14]);
      }
    }, function (_ionicTransitionsIosTransition) {
      for (var _key15 in _ionicTransitionsIosTransition) {
        _export(_key15, _ionicTransitionsIosTransition[_key15]);
      }
    }],
    execute: function () {}
  };
});
System.register('ionic/registry', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/facade/lang', 'angular2/forms', 'ionic/util', 'ionic/ionic'], function (_export) {
  'use strict';

  var ElementRef, For, Parent, onInit, Component, Directive, View, Ancestor, Self, Type, FormBuilder, Validators, FormDirectives, ControlGroup, Log, IonicApp, Register;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      For = _angular2Angular2.For;
      Parent = _angular2Angular2.Parent;
      onInit = _angular2Angular2.onInit;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
      Self = _angular2SrcCoreAnnotations_implVisibility.Self;
    }, function (_angular2SrcFacadeLang) {
      Type = _angular2SrcFacadeLang.Type;
    }, function (_angular2Forms) {
      FormBuilder = _angular2Forms.FormBuilder;
      Validators = _angular2Forms.Validators;
      FormDirectives = _angular2Forms.FormDirectives;
      ControlGroup = _angular2Forms.ControlGroup;
    }, function (_ionicUtil) {
      Log = _ionicUtil.Log;
    }, function (_ionicIonic) {
      IonicApp = _ionicIonic.IonicApp;
    }],
    execute: function () {
      Register = (function () {
        function Register(app) {
          _classCallCheck(this, Register);

          this.app = app;
        }

        _createClass(Register, [{
          key: 'onInit',
          value: function onInit() {
            if (!this.register || !this.registerId) {
              return;
            }
            this.app.register(this.registerId, this.register);
          }
        }]);

        return Register;
      })();

      _export('Register', Register);

      Object.defineProperty(Register, 'annotations', { get: function get() {
          return [new Directive({
            selector: '[register]',
            properties: ['register', 'registerId: register-id'],
            host: { 'this.register-id': 'registerId' },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(Register, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
    }
  };
});
System.register('ionic/util', ['ionic/util/dom', 'ionic/util/util'], function (_export) {
  'use strict';

  var domUtil, dom;
  return {
    setters: [function (_ionicUtilDom) {
      domUtil = _ionicUtilDom;
    }, function (_ionicUtilUtil) {
      for (var _key in _ionicUtilUtil) {
        _export(_key, _ionicUtilUtil[_key]);
      }
    }],
    execute: function () {
      dom = domUtil;

      _export('dom', dom);
    }
  };
});
System.register('ionic/animations/animation', ['../util/dom'], function (_export) {
  'use strict';

  var CSS, RENDER_DELAY, AnimationRegistry, Animation, Animate, TRANSFORMS, ANIMATE_PROPERTIES, CUBIC_BEZIERS, EASING_FN;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function insertEffects(effects, fromEffect, toEffect, easingConfig) {
    easingConfig.opts = easingConfig.opts || {};
    var increment = easingConfig.opts.increment || 0.04;
    var easingFn = EASING_FN[easingConfig.name];
    var pos = undefined,
        tweenEffect = undefined,
        addEffect = undefined,
        property = undefined,
        toProperty = undefined,
        fromValue = undefined,
        diffValue = undefined;
    for (pos = increment; pos <= 1 - increment; pos += increment) {
      tweenEffect = {};
      addEffect = false;
      for (property in toEffect) {
        toProperty = toEffect[property];
        if (toProperty.tween) {
          fromValue = fromEffect[property].num;
          diffValue = toProperty.num - fromValue;
          tweenEffect[property] = { value: roundValue(easingFn(pos, easingConfig.opts) * diffValue + fromValue) + toProperty.unit };
          addEffect = true;
        }
      }
      if (addEffect) {
        effects.push(convertProperties(tweenEffect));
      }
    }
  }
  function parseEffect(inputEffect) {
    var val = undefined,
        r = undefined,
        num = undefined,
        property = undefined;
    var outputEffect = {};
    for (property in inputEffect) {
      val = inputEffect[property];
      r = val.toString().match(/(\d*\.?\d*)(.*)/);
      num = parseFloat(r[1]);
      outputEffect[property] = {
        value: val,
        num: num,
        unit: r[0] != r[2] ? r[2] : '',
        tween: !isNaN(num) && ANIMATE_PROPERTIES.indexOf(property) > -1
      };
    }
    return outputEffect;
  }
  function convertProperties(inputEffect) {
    var outputEffect = {};
    var transforms = [];
    var value = undefined,
        property = undefined;
    for (property in inputEffect) {
      value = inputEffect[property].value;
      if (TRANSFORMS.indexOf(property) > -1) {
        transforms.push(property + '(' + value + ')');
      } else {
        outputEffect[property] = value;
      }
    }
    if (transforms.length) {
      transforms.push('translateZ(0px)');
      outputEffect.transform = transforms.join(' ');
    }
    return outputEffect;
  }
  function inlineStyle(ele, effect) {
    if (ele && effect) {
      var transforms = [];
      var value = undefined,
          property = undefined;
      for (property in effect) {
        value = effect[property].value;
        if (TRANSFORMS.indexOf(property) > -1) {
          transforms.push(property + '(' + value + ')');
        } else {
          ele.style[property] = value;
        }
      }
      if (transforms.length) {
        transforms.push('translateZ(0px)');
        ele.style[CSS.transform] = transforms.join(' ');
      }
    }
  }
  function roundValue(val) {
    return Math.round(val * 10000) / 10000;
  }
  return {
    setters: [function (_utilDom) {
      CSS = _utilDom.CSS;
    }],
    execute: function () {
      RENDER_DELAY = 36;
      AnimationRegistry = {};

      Animation = (function () {
        function Animation(ele) {
          _classCallCheck(this, Animation);

          this._el = [];
          this._chld = [];
          this._ani = [];
          this._bfAdd = [];
          this._bfRmv = [];
          this._afAdd = [];
          this._afRmv = [];
          this._readys = [];
          this._plays = [];
          this._finishes = [];
          this.elements(ele);
        }

        _createClass(Animation, [{
          key: 'elements',
          value: function elements(ele) {
            if (ele) {
              if (typeof ele === 'string') {
                ele = document.querySelectorAll(ele);
              }
              if (ele.length) {
                for (var i = 0; i < ele.length; i++) {
                  this.addElement(ele[i]);
                }
              } else {
                this.addElement(ele);
              }
            }
            return this;
          }
        }, {
          key: 'addElement',
          value: function addElement(ele) {
            if (ele) {
              if (ele.nativeElement) {
                ele = ele.nativeElement;
              }
              if (ele.nodeType === 1) {
                this._el.push(ele);
              }
            }
          }
        }, {
          key: 'parent',
          value: function parent(parentAnimation) {
            this._parent = parentAnimation;
            return this;
          }
        }, {
          key: 'add',
          value: function add(childAnimations) {
            childAnimations = Array.isArray(childAnimations) ? childAnimations : arguments;
            for (var i = 0; i < childAnimations.length; i++) {
              childAnimations[i].parent(this);
              this._chld.push(childAnimations[i]);
            }
            return this;
          }
        }, {
          key: 'duration',
          value: function duration(value) {
            if (arguments.length) {
              this._duration = value;
              return this;
            }
            return this._duration || this._parent && this._parent.duration();
          }
        }, {
          key: 'easing',
          value: function easing(name, opts) {
            if (arguments.length) {
              this._easing = {
                name: name,
                opts: opts
              };
              return this;
            }
            return this._easing || this._parent && this._parent.easing();
          }
        }, {
          key: 'playbackRate',
          value: function playbackRate(value) {
            if (arguments.length) {
              this._rate = value;
              var i = undefined;
              for (i = 0; i < this._chld.length; i++) {
                this._chld[i].playbackRate(value);
              }
              for (i = 0; i < this._ani.length; i++) {
                this._ani[i].playbackRate(value);
              }
              return this;
            }
            return this._rate || this._parent && this._parent.playbackRate();
          }
        }, {
          key: 'from',
          value: function from(property, value) {
            if (!this._from) {
              this._from = {};
            }
            this._from[property] = value;
            return this;
          }
        }, {
          key: 'to',
          value: function to(property, value) {
            if (!this._to) {
              this._to = {};
            }
            this._to[property] = value;
            return this;
          }
        }, {
          key: 'fromTo',
          value: function fromTo(property, from, to) {
            return this.from(property, from).to(property, to);
          }
        }, {
          key: 'fadeIn',
          value: function fadeIn() {
            return this.fromTo('opacity', 0, 1);
          }
        }, {
          key: 'fadeOut',
          value: function fadeOut() {
            return this.fromTo('opacity', 1, 0);
          }
        }, {
          key: 'play',
          value: function play() {
            var _this = this;

            var self = this;
            var animations = self._ani;
            var children = self._chld;
            var promises = [];
            var i = undefined,
                l = undefined;
            function beginPlay() {
              var i = undefined,
                  l = undefined;
              var promises = [];
              for (i = 0, l = children.length; i < l; i++) {
                promises.push(children[i].play());
              }
              for (i = 0, l = animations.length; i < l; i++) {
                promises.push(animations[i].play());
              }
              return Promise.all(promises);
            }
            if (!self._parent) {
              var _ret = (function () {
                var kickoff = function () {
                  self._onPlay();
                  beginPlay().then(function () {
                    self._onFinish();
                    resolve();
                  });
                };

                self.stage();
                var resolve = undefined;
                var promise = new Promise(function (res) {
                  resolve = res;
                });

                if (_this._duration > RENDER_DELAY) {
                  setTimeout(kickoff, RENDER_DELAY);
                } else {
                  kickoff();
                }
                return {
                  v: promise
                };
              })();

              if (typeof _ret === 'object') return _ret.v;
            }
            return beginPlay();
          }
        }, {
          key: 'stage',
          value: function stage() {
            if (!this._isStaged) {
              this._isStaged = true;
              var i = undefined,
                  l = undefined,
                  j = undefined,
                  ele = undefined,
                  animation = undefined;
              for (i = 0, l = this._chld.length; i < l; i++) {
                this._chld[i].stage();
              }
              for (i = 0; i < this._el.length; i++) {
                ele = this._el[i];
                for (j = 0; j < this._bfAdd.length; j++) {
                  ele.classList.add(this._bfAdd[j]);
                }
                for (j = 0; j < this._bfRmv.length; j++) {
                  ele.classList.remove(this._bfRmv[j]);
                }
              }
              if (this._to) {
                for (i = 0; i < this._el.length; i++) {
                  animation = new Animate(this._el[i], this._from, this._to, this.duration(), this.easing(), this.playbackRate());
                  if (animation.shouldAnimate) {
                    this._ani.push(animation);
                  }
                }
              }
              for (i = 0; i < this._readys.length; i++) {
                this._readys[i](this);
              }
            }
          }
        }, {
          key: '_onPlay',
          value: function _onPlay() {
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
              this._chld[i]._onPlay();
            }
            for (i = 0; i < this._plays.length; i++) {
              this._plays[i](this);
            }
          }
        }, {
          key: '_onFinish',
          value: function _onFinish() {
            if (!this._isFinished) {
              this._isFinished = true;
              var i = undefined,
                  j = undefined,
                  ele = undefined;
              for (i = 0; i < this._chld.length; i++) {
                this._chld[i]._onFinish();
              }
              if (this.playbackRate() < 0) {
                for (i = 0; i < this._el.length; i++) {
                  ele = this._el[i];
                  for (j = 0; j < this._bfAdd.length; j++) {
                    ele.classList.remove(this._bfAdd[j]);
                  }
                  for (j = 0; j < this._bfRmv.length; j++) {
                    ele.classList.add(this._bfRmv[j]);
                  }
                }
              } else {
                for (i = 0; i < this._el.length; i++) {
                  ele = this._el[i];
                  for (j = 0; j < this._afAdd.length; j++) {
                    ele.classList.add(this._afAdd[j]);
                  }
                  for (j = 0; j < this._afRmv.length; j++) {
                    ele.classList.remove(this._afRmv[j]);
                  }
                }
              }
              for (i = 0; i < this._finishes.length; i++) {
                this._finishes[i](this);
              }
            }
          }
        }, {
          key: 'pause',
          value: function pause() {
            this._hasFinished = false;
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
              this._chld[i].pause();
            }
            for (i = 0; i < this._ani.length; i++) {
              this._ani[i].pause();
            }
          }
        }, {
          key: 'progress',
          value: function progress(value) {
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
              this._chld[i].progress(value);
            }
            if (!this._initProgress) {
              this._initProgress = true;
              this.play();
              this.pause();
            }
            for (i = 0; i < this._ani.length; i++) {
              this._ani[i].progress(value);
            }
          }
        }, {
          key: 'onReady',
          value: function onReady(fn) {
            this._readys.push(fn);
          }
        }, {
          key: 'onPlay',
          value: function onPlay(fn) {
            this._plays.push(fn);
          }
        }, {
          key: 'onFinish',
          value: function onFinish(fn) {
            this._finishes.push(fn);
          }
        }, {
          key: 'dispose',
          value: function dispose() {
            var i = undefined;
            for (i = 0; i < this._chld.length; i++) {
              this._chld[i].dispose();
            }
            for (i = 0; i < this._ani.length; i++) {
              this._ani[i].dispose();
            }
            this._el = this._parent = this._chld = this._ani = this._readys = this._plays = this._finishes = null;
          }
        }, {
          key: 'before',
          get: function () {
            var _this2 = this;

            return {
              addClass: function addClass(className) {
                _this2._bfAdd.push(className);
                return _this2;
              },
              removeClass: function removeClass(className) {
                _this2._bfRmv.push(className);
                return _this2;
              }
            };
          }
        }, {
          key: 'after',
          get: function () {
            var _this3 = this;

            return {
              addClass: function addClass(className) {
                _this3._afAdd.push(className);
                return _this3;
              },
              removeClass: function removeClass(className) {
                _this3._afRmv.push(className);
                return _this3;
              }
            };
          }
        }], [{
          key: 'create',
          value: function create(element, name) {
            var AnimationClass = AnimationRegistry[name];
            if (!AnimationClass) {
              AnimationClass = Animation;
            }
            return new AnimationClass(element);
          }
        }, {
          key: 'register',
          value: function register(name, AnimationClass) {
            AnimationRegistry[name] = AnimationClass;
          }
        }]);

        return Animation;
      })();

      _export('Animation', Animation);

      Animate = (function () {
        function Animate(ele, fromEffect, toEffect, duration, easingConfig, playbackRate) {
          var _this4 = this;

          _classCallCheck(this, Animate);

          this.toEffect = parseEffect(toEffect);
          this.shouldAnimate = duration > RENDER_DELAY;
          if (!this.shouldAnimate) {
            return inlineStyle(ele, this.toEffect);
          }
          this.ele = ele;
          this.promise = new Promise(function (res) {
            _this4.resolve = res;
          });
          fromEffect = parseEffect(fromEffect);
          inlineStyle(ele, fromEffect);
          this.duration = duration;
          this.rate = playbackRate;
          this.easing = easingConfig && easingConfig.name || 'linear';
          this.effects = [convertProperties(fromEffect)];
          if (this.easing in EASING_FN) {
            insertEffects(this.effects, fromEffect, this.toEffect, easingConfig);
          } else if (this.easing in CUBIC_BEZIERS) {
            this.easing = 'cubic-bezier(' + CUBIC_BEZIERS[this.easing] + ')';
          }
          this.effects.push(convertProperties(this.toEffect));
        }

        _createClass(Animate, [{
          key: 'play',
          value: function play() {
            var self = this;
            if (self.player) {
              self.player.play();
            } else {
              self.player = self.ele.animate(self.effects, {
                duration: self.duration || 0,
                easing: self.easing,
                playbackRate: self.rate || 1
              });
              self.player.onfinish = function () {
                inlineStyle(self.ele, self.rate < 0 ? self.fromEffect : self.toEffect);
                self.resolve();
              };
            }
            return self.promise;
          }
        }, {
          key: 'pause',
          value: function pause() {
            this.player && this.player.pause();
          }
        }, {
          key: 'progress',
          value: function progress(value) {
            var player = this.player;
            if (player) {
              value = Math.max(0, Math.min(1, value));
              if (value >= 1) {
                player.currentTime = this.duration * 0.999;
                return player.play();
              }
              if (player.playState !== 'paused') {
                player.pause();
              }
              player.currentTime = this.duration * value;
            }
          }
        }, {
          key: 'playbackRate',
          value: function playbackRate(value) {
            this.rate = value;
            if (this.player) {
              this.player.playbackRate = value;
            }
          }
        }, {
          key: 'dispose',
          value: function dispose() {
            this.ele = this.player = this.effects = this.toEffect = null;
          }
        }]);

        return Animate;
      })();

      TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'perspective'];
      ANIMATE_PROPERTIES = TRANSFORMS.concat('opacity');
      CUBIC_BEZIERS = {
        'ease-in-cubic': '0.55,0.055,0.675,0.19',
        'ease-out-cubic': '0.215,0.61,0.355,1',
        'ease-in-Out-cubic': '0.645,0.045,0.355,1',
        'ease-in-circ': '0.6,0.04,0.98,0.335',
        'ease-out-circ': '0.075,0.82,0.165,1',
        'ease-in-out-circ': '0.785,0.135,0.15,0.86',
        'ease-in-expo': '0.95,0.05,0.795,0.035',
        'ease-out-expo': '0.19,1,0.22,1',
        'ease-in-out-expo': '1,0,0,1',
        'ease-in-quad': '0.55,0.085,0.68,0.53',
        'ease-out-quad': '0.25,0.46,0.45,0.94',
        'ease-in-out-quad': '0.455,0.03,0.515,0.955',
        'ease-in-quart': '0.895,0.03,0.685,0.22',
        'ease-out-quart': '0.165,0.84,0.44,1',
        'ease-in-out-quart': '0.77,0,0.175,1',
        'ease-in-quint': '0.755,0.05,0.855,0.06',
        'ease-out-quint': '0.23,1,0.32,1',
        'ease-in-out-quint': '0.86,0,0.07,1',
        'ease-in-sine': '0.47,0,0.745,0.715',
        'ease-out-sine': '0.39,0.575,0.565,1',
        'ease-in-out-sine': '0.445,0.05,0.55,0.95',
        'ease-in-back': '0.6,-0.28,0.735,0.045',
        'ease-out-back': '0.175,0.885,0.32,1.275',
        'ease-in-out-back': '0.68,-0.55,0.265,1.55'
      };
      EASING_FN = {
        'elastic': function elastic(pos) {
          return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
        },
        'swing-from-to': function swingFromTo(pos, opts) {
          var s = opts.s || 1.70158;
          return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
        },
        'swing-from': function swingFrom(pos, opts) {
          var s = opts.s || 1.70158;
          return pos * pos * ((s + 1) * pos - s);
        },
        'swing-to': function swingTo(pos, opts) {
          var s = opts.s || 1.70158;
          return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
        },
        'bounce': function bounce(pos) {
          if (pos < 1 / 2.75) {
            return 7.5625 * pos * pos;
          } else if (pos < 2 / 2.75) {
            return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
          } else if (pos < 2.5 / 2.75) {
            return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
          }
          return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
        },
        'bounce-past': function bouncePast(pos) {
          if (pos < 1 / 2.75) {
            return 7.5625 * pos * pos;
          } else if (pos < 2 / 2.75) {
            return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
          } else if (pos < 2.5 / 2.75) {
            return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
          }
          return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
        },
        'ease-out-bounce': function easeOutBounce(pos) {
          if (pos < 1 / 2.75) {
            return 7.5625 * pos * pos;
          } else if (pos < 2 / 2.75) {
            return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
          } else if (pos < 2.5 / 2.75) {
            return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
          }
          return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
        },
        'ease-from-to': function easeFromTo(pos) {
          if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 4);
          return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
        },
        'ease-from': function easeFrom(pos, opts) {
          return Math.pow(pos, opts.s || 4);
        },
        'ease-to': function easeTo(pos, opts) {
          return Math.pow(pos, opts.s || 0.25);
        },
        'spring': function spring(pos, opts) {
          var damping = opts.damping || 4.5;
          var elasticity = opts.elasticity || 6;
          return 1 - Math.cos(pos * damping * Math.PI) * Math.exp(-pos * elasticity);
        },
        'sinusoidal': function sinusoidal(pos) {
          return -Math.cos(pos * Math.PI) / 2 + 0.5;
        }
      };
    }
  };
});
System.register('ionic/animations/builtins', ['./animation'], function (_export) {
  'use strict';

  var Animation, SlideIn, SlideOut, FadeIn, FadeOut;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_animation) {
      Animation = _animation.Animation;
    }],
    execute: function () {
      SlideIn = (function (_Animation) {
        function SlideIn(element) {
          _classCallCheck(this, SlideIn);

          _get(Object.getPrototypeOf(SlideIn.prototype), 'constructor', this).call(this, element);
          this.easing('cubic-bezier(0.1,0.7,0.1,1)').duration(400).fromTo('translateY', '100%', '0%');
        }

        _inherits(SlideIn, _Animation);

        return SlideIn;
      })(Animation);

      Animation.register('slide-in', SlideIn);

      SlideOut = (function (_Animation2) {
        function SlideOut(element) {
          _classCallCheck(this, SlideOut);

          _get(Object.getPrototypeOf(SlideOut.prototype), 'constructor', this).call(this, element);
          this.easing('ease-out').duration(250).fromTo('translateY', '0%', '100%');
        }

        _inherits(SlideOut, _Animation2);

        return SlideOut;
      })(Animation);

      Animation.register('slide-out', SlideOut);

      FadeIn = (function (_Animation3) {
        function FadeIn(element) {
          _classCallCheck(this, FadeIn);

          _get(Object.getPrototypeOf(FadeIn.prototype), 'constructor', this).call(this, element);
          this.easing('ease-in').duration(400).fadeIn();
        }

        _inherits(FadeIn, _Animation3);

        return FadeIn;
      })(Animation);

      Animation.register('fade-in', FadeIn);

      FadeOut = (function (_Animation4) {
        function FadeOut(element) {
          _classCallCheck(this, FadeOut);

          _get(Object.getPrototypeOf(FadeOut.prototype), 'constructor', this).call(this, element);
          this.easing('ease-out').duration(250).fadeOut();
        }

        _inherits(FadeOut, _Animation4);

        return FadeOut;
      })(Animation);

      Animation.register('fade-out', FadeOut);
    }
  };
});
System.register('ionic/config/annotations', ['angular2/angular2', 'angular2/src/core/annotations_impl/view', 'ionic/util', './config', 'ionic/ionic'], function (_export) {
  'use strict';

  var coreDirectives, Component, Directive, View, util, IonicConfig, Aside, Content, Refresher, Slides, Slide, SlidePager, Tabs, Tab, List, Item, Icon, Checkbox, Switch, Label, Input, Segment, SegmentButton, SegmentControlValueAccessor, RadioGroup, RadioButton, SearchBar, Nav, NavbarTemplate, Navbar, NavPush, NavPop, IonicView, IonicDirective, IonicComponent, platformMode;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function appendModeConfig(ComponentType) {
    if (!ComponentType) {
      return {};
    }
    if (typeof ComponentType === 'object') {
      return ComponentType;
    }
    var config = ComponentType.config;
    config.host = config.host || {};
    var defaultProperties = config.defaultProperties;
    config.properties = config.properties || [];
    for (var prop in defaultProperties) {
      config.properties.push(prop);
      config.host['[attr.' + util.pascalCaseToDashCase(prop) + ']'] = prop;
    }
    ComponentType.applyConfig = function (instance) {
      for (var prop in defaultProperties) {
        if (instance[prop]) {
          continue;
        }
        var configVal = IonicConfig.global.setting(prop);
        if (configVal) {
          instance[prop] = configVal;
          continue;
        }
        instance[prop] = defaultProperties[prop];
      }
    };
    if (config.delegates) {
      ComponentType.getDelegate = function (instance, delegateName) {
        var cases = config.delegates[delegateName] || [];
        for (var i = 0; i < cases.length; i++) {
          var delegateCase = cases[i];
          if (util.isArray(delegateCase)) {
            var _delegateCase = _slicedToArray(delegateCase, 2);

            var check = _delegateCase[0];
            var DelegateConstructor = _delegateCase[1];

            if (check(instance)) {
              return new DelegateConstructor(instance);
            }
          } else {
            return new delegateCase(instance);
          }
        }
      };
    }
    if (!platformMode) {
      platformMode = IonicConfig.global.setting('mode');
    }
    var id = config.classId || config.selector && config.selector.replace('ion-', '');
    config.host['class'] = id + ' ' + id + '-' + platformMode;
    return config;
  }
  return {
    setters: [function (_angular2Angular2) {
      coreDirectives = _angular2Angular2.coreDirectives;
      Component = _angular2Angular2.Component;
      Directive = _angular2Angular2.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_config) {
      IonicConfig = _config.IonicConfig;
    }, function (_ionicIonic) {
      Aside = _ionicIonic.Aside;
      Content = _ionicIonic.Content;
      Refresher = _ionicIonic.Refresher;
      Slides = _ionicIonic.Slides;
      Slide = _ionicIonic.Slide;
      SlidePager = _ionicIonic.SlidePager;
      Tabs = _ionicIonic.Tabs;
      Tab = _ionicIonic.Tab;
      List = _ionicIonic.List;
      Item = _ionicIonic.Item;
      Icon = _ionicIonic.Icon;
      Checkbox = _ionicIonic.Checkbox;
      Switch = _ionicIonic.Switch;
      Label = _ionicIonic.Label;
      Input = _ionicIonic.Input;
      Segment = _ionicIonic.Segment;
      SegmentButton = _ionicIonic.SegmentButton;
      SegmentControlValueAccessor = _ionicIonic.SegmentControlValueAccessor;
      RadioGroup = _ionicIonic.RadioGroup;
      RadioButton = _ionicIonic.RadioButton;
      SearchBar = _ionicIonic.SearchBar;
      Nav = _ionicIonic.Nav;
      NavbarTemplate = _ionicIonic.NavbarTemplate;
      Navbar = _ionicIonic.Navbar;
      NavPush = _ionicIonic.NavPush;
      NavPop = _ionicIonic.NavPop;
    }],
    execute: function () {
      IonicView = (function (_View) {
        function IonicView(config) {
          _classCallCheck(this, IonicView);

          var directives = [coreDirectives, Aside, Content, Refresher, List, Item, Slides, Slide, SlidePager, Tabs, Tab, Icon, Segment, SegmentButton, SegmentControlValueAccessor, Nav, NavbarTemplate, Navbar, NavPush, NavPop];
          config.directives = (config.directives || []).concat(directives);
          _get(Object.getPrototypeOf(IonicView.prototype), 'constructor', this).call(this, config);
        }

        _inherits(IonicView, _View);

        return IonicView;
      })(View);

      _export('IonicView', IonicView);

      IonicDirective = (function (_Directive) {
        function IonicDirective(ComponentType) {
          _classCallCheck(this, IonicDirective);

          _get(Object.getPrototypeOf(IonicDirective.prototype), 'constructor', this).call(this, appendModeConfig(ComponentType));
        }

        _inherits(IonicDirective, _Directive);

        return IonicDirective;
      })(Directive);

      _export('IonicDirective', IonicDirective);

      IonicComponent = (function (_Component) {
        function IonicComponent(ComponentType) {
          _classCallCheck(this, IonicComponent);

          _get(Object.getPrototypeOf(IonicComponent.prototype), 'constructor', this).call(this, appendModeConfig(ComponentType));
        }

        _inherits(IonicComponent, _Component);

        return IonicComponent;
      })(Component);

      _export('IonicComponent', IonicComponent);

      platformMode = null;
    }
  };
});
System.register('ionic/config/component', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/render/api', 'ionic/util', 'ionic/platform/platform', '../components/app/app'], function (_export) {
  'use strict';

  var Component, Directive, DirectiveMetadata, util, Platform, GlobalIonicConfig, IonicDirective, IonicComponent, platformMode;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function appendModeConfig(ComponentType) {
    var config = ComponentType.config;
    config.host = config.host || {};
    var defaultProperties = config.defaultProperties;
    config.properties = config.properties || [];
    for (var prop in defaultProperties) {
      config.properties.push(prop);
      config.host['[attr.' + util.pascalCaseToDashCase(prop) + ']'] = prop;
    }
    ComponentType.applyConfig = function (instance) {
      for (var prop in defaultProperties) {
        if (instance[prop]) {
          continue;
        }
        var configVal = GlobalIonicConfig.setting(prop);
        if (configVal) {
          instance[prop] = globalPropertyValue;
          continue;
        }
        instance[prop] = defaultProperties[prop];
      }
    };
    if (config.delegates) {
      ComponentType.getDelegate = function (instance, delegateName) {
        var cases = config.delegates[delegateName] || [];
        for (var i = 0; i < cases.length; i++) {
          var delegateCase = cases[i];
          if (util.isArray(delegateCase)) {
            var _delegateCase = _slicedToArray(delegateCase, 2);

            var check = _delegateCase[0];
            var DelegateConstructor = _delegateCase[1];

            if (check(instance)) {
              return new DelegateConstructor(instance);
            }
          } else {
            return new delegateCase(instance);
          }
        }
      };
    }
    if (!platformMode) {
      platformMode = GlobalIonicConfig.setting('mode');
    }
    var id = config.classId || config.selector && config.selector.replace('ion-', '');
    config.host['class'] = id + ' ' + id + '-' + platformMode;
    return config;
  }
  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcRenderApi) {
      DirectiveMetadata = _angular2SrcRenderApi.DirectiveMetadata;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_ionicPlatformPlatform) {
      Platform = _ionicPlatformPlatform.Platform;
    }, function (_componentsAppApp) {
      GlobalIonicConfig = _componentsAppApp.GlobalIonicConfig;
    }],
    execute: function () {
      IonicDirective = (function (_Directive) {
        function IonicDirective(ComponentType) {
          _classCallCheck(this, IonicDirective);

          _get(Object.getPrototypeOf(IonicDirective.prototype), 'constructor', this).call(this, appendModeConfig(ComponentType));
        }

        _inherits(IonicDirective, _Directive);

        return IonicDirective;
      })(Directive);

      _export('IonicDirective', IonicDirective);

      IonicComponent = (function (_Component) {
        function IonicComponent(ComponentType) {
          _classCallCheck(this, IonicComponent);

          _get(Object.getPrototypeOf(IonicComponent.prototype), 'constructor', this).call(this, appendModeConfig(ComponentType));
        }

        _inherits(IonicComponent, _Component);

        return IonicComponent;
      })(Component);

      _export('IonicComponent', IonicComponent);

      platformMode = null;
    }
  };
});
System.register('ionic/config/config', ['../util/util'], function (_export) {
  'use strict';

  var isObject, isDefined, isFunction, extend, IonicConfig, globalConfig;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_utilUtil) {
      isObject = _utilUtil.isObject;
      isDefined = _utilUtil.isDefined;
      isFunction = _utilUtil.isFunction;
      extend = _utilUtil.extend;
    }],
    execute: function () {
      IonicConfig = (function () {
        function IonicConfig(settings) {
          _classCallCheck(this, IonicConfig);

          this._settings = { platform: 'ios' };
          if (settings) {
            extend(this._settings, settings);
          }
        }

        _createClass(IonicConfig, [{
          key: 'setting',
          value: function setting() {
            var args = arguments;
            var arg0 = args[0];
            var arg1 = args[1];
            var s = this._settings;
            switch (args.length) {
              case 0:
                return s;
              case 1:
                if (isObject(arg0)) {
                  this._settings = arg0;
                  return this;
                }
                if (!isDefined(s[arg0])) {
                  s[arg0] = null;
                  var activePlatformKeys = this._platforms;
                  var platformSettings = s.platforms;
                  var platformObj = null;
                  if (platformSettings) {
                    var platformValue = undefined;
                    for (var i = 0; i < activePlatformKeys.length; i++) {
                      platformObj = platformSettings[activePlatformKeys[i]];
                      if (platformObj && isDefined(platformObj[arg0])) {
                        platformValue = platformObj[arg0];
                      }
                    }
                    if (isDefined(platformValue)) {
                      s[arg0] = platformValue;
                    }
                  }
                }
                if (isFunction(s[arg0])) {
                  return s[arg0]();
                }
                return s[arg0];
              case 2:
                if (isObject(arg1)) {
                  s.platforms = s.platforms || {};
                  s.platforms[arg0] = arg1;
                } else {
                  s[arg0] = arg1;
                }
                return this;
              case 3:
                s.platforms = s.platforms || {};
                s.platforms[arg0] = s.platforms[arg0] || {};
                s.platforms[arg0][arg1] = args[2];
                return this;
            }
          }
        }, {
          key: 'setPlatform',
          value: function setPlatform(platform) {
            this._platforms = platform.platforms();
            this._settings.platforms = extend(platform.settings(), this._settings.platforms || {});
          }
        }], [{
          key: 'global',
          set: function (config) {
            globalConfig = config;
          },
          get: function () {
            return globalConfig;
          }
        }]);

        return IonicConfig;
      })();

      _export('IonicConfig', IonicConfig);

      globalConfig = null;
    }
  };
});
System.register('ionic/config/ionic-view', ['angular2/angular2', 'angular2/src/core/annotations_impl/view', 'ionic/ionic'], function (_export) {
  'use strict';

  var coreDirectives, View, Aside, Content, Refresher, Slides, Slide, SlidePager, Tabs, Tab, List, Item, Icon, Checkbox, Switch, Label, Input, Segment, SegmentButton, SegmentControlValueAccessor, RadioGroup, RadioButton, SearchBar, Nav, NavbarTemplate, Navbar, NavPush, NavPop, IonicView;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Angular2) {
      coreDirectives = _angular2Angular2.coreDirectives;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicIonic) {
      Aside = _ionicIonic.Aside;
      Content = _ionicIonic.Content;
      Refresher = _ionicIonic.Refresher;
      Slides = _ionicIonic.Slides;
      Slide = _ionicIonic.Slide;
      SlidePager = _ionicIonic.SlidePager;
      Tabs = _ionicIonic.Tabs;
      Tab = _ionicIonic.Tab;
      List = _ionicIonic.List;
      Item = _ionicIonic.Item;
      Icon = _ionicIonic.Icon;
      Checkbox = _ionicIonic.Checkbox;
      Switch = _ionicIonic.Switch;
      Label = _ionicIonic.Label;
      Input = _ionicIonic.Input;
      Segment = _ionicIonic.Segment;
      SegmentButton = _ionicIonic.SegmentButton;
      SegmentControlValueAccessor = _ionicIonic.SegmentControlValueAccessor;
      RadioGroup = _ionicIonic.RadioGroup;
      RadioButton = _ionicIonic.RadioButton;
      SearchBar = _ionicIonic.SearchBar;
      Nav = _ionicIonic.Nav;
      NavbarTemplate = _ionicIonic.NavbarTemplate;
      Navbar = _ionicIonic.Navbar;
      NavPush = _ionicIonic.NavPush;
      NavPop = _ionicIonic.NavPop;
    }],
    execute: function () {
      IonicView = (function (_View) {
        function IonicView(config) {
          _classCallCheck(this, IonicView);

          var directives = [coreDirectives, Aside, Content, Refresher, List, Item, Slides, Slide, SlidePager, Tabs, Tab, Icon, Segment, SegmentButton, SegmentControlValueAccessor, Nav, NavbarTemplate, Navbar, NavPush, NavPop];
          config.directives = (config.directives || []).concat(directives);
          _get(Object.getPrototypeOf(IonicView.prototype), 'constructor', this).call(this, config);
        }

        _inherits(IonicView, _View);

        return IonicView;
      })(View);

      _export('IonicView', IonicView);
    }
  };
});
System.register('ionic/engine/engine', ['ionic/util'], function (_export) {
  'use strict';

  var util, registry, defaultEngine, activeEngine, EngineController, Engine;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      registry = {};
      defaultEngine = undefined;
      activeEngine = undefined;

      EngineController = (function () {
        function EngineController() {
          var _this = this;

          _classCallCheck(this, EngineController);

          var self = this;
          var proxyMethods = 'ready fullScreen showStatusBar exitApp'.split(' ');

          var _loop = function (x) {
            _this[proxyMethods[x]] = function () {
              return self.proxy(proxyMethods[x], arguments);
            };
          };

          for (var x = 0; x < proxyMethods.length; x++) {
            _loop(x);
          }
        }

        _createClass(EngineController, [{
          key: 'proxy',
          value: function proxy(target, args) {
            var eng = this.get();
            if (eng && eng[target]) {
              return eng[target].apply(this, args);
            }
            return new Promise(function (resolve) {}, function (reject) {
              reject();
            });
          }
        }, {
          key: 'is',
          value: function is(name) {
            return this.name === name;
          }
        }, {
          key: 'getName',
          value: function getName() {
            return this.get().name;
          }
        }, {
          key: 'get',
          value: function get() {
            if (util.isUndefined(activeEngine)) {
              this.set(this.detect());
            }
            return activeEngine || defaultEngine;
          }
        }, {
          key: 'set',
          value: function set(engine) {
            activeEngine = engine;
          }
        }, {
          key: 'setDefault',
          value: function setDefault(engine) {
            defaultEngine = engine;
          }
        }, {
          key: 'register',
          value: function register(engine) {
            registry[engine.name] = engine;
          }
        }, {
          key: 'detect',
          value: function detect() {
            for (var _name in registry) {
              if (registry[_name].isMatch()) {
                return registry[_name];
              }
            }
            return null;
          }
        }]);

        return EngineController;
      })();

      Engine = new EngineController();

      _export('Engine', Engine);

      Engine.setDefault({
        name: 'default',
        ready: util.dom.windowLoad
      });
    }
  };
});
System.register("ionic/components/ion", [], function (_export) {
  "use strict";

  var Ion;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Ion = (function () {
        function Ion(elementRef) {
          _classCallCheck(this, Ion);

          console.log("ION INIT", elementRef);
          this.elementRef = elementRef;
        }

        _createClass(Ion, [{
          key: "getNativeElement",
          value: function getNativeElement() {
            return this.elementRef.nativeElement;
          }
        }]);

        return Ion;
      })();

      _export("Ion", Ion);

      Object.defineProperty(Ion, "parameters", { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});
System.register('ionic/gestures/drag-gesture', ['ionic/gestures/gesture', 'ionic/util'], function (_export) {
  'use strict';

  var Gesture, util, DragGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicGesturesGesture) {
      Gesture = _ionicGesturesGesture.Gesture;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      DragGesture = (function (_Gesture) {
        function DragGesture(element) {
          var opts = arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, DragGesture);

          util.defaults(opts, {});
          _get(Object.getPrototypeOf(DragGesture.prototype), 'constructor', this).call(this, element, opts);
        }

        _inherits(DragGesture, _Gesture);

        _createClass(DragGesture, [{
          key: 'listen',
          value: function listen() {
            var _this = this;

            _get(Object.getPrototypeOf(DragGesture.prototype), 'listen', this).call(this);
            this.on('panstart', function (ev) {
              if (_this.onDragStart(ev) !== false) {
                _this.dragging = true;
              }
            });
            this.on('panmove', function (ev) {
              if (!_this.dragging) return;
              if (_this.onDrag(ev) === false) {
                _this.dragging = false;
              }
            });
            this.on('panend', function (ev) {
              if (!_this.dragging) return;
              _this.onDragEnd(ev);
              _this.dragging = false;
            });
          }
        }, {
          key: 'onDrag',
          value: function onDrag() {}
        }, {
          key: 'onDragStart',
          value: function onDragStart() {}
        }, {
          key: 'onDragEnd',
          value: function onDragEnd() {}
        }]);

        return DragGesture;
      })(Gesture);

      _export('DragGesture', DragGesture);
    }
  };
});
System.register('ionic/gestures/gesture', ['ionic/util', 'ionic/gestures/hammer'], function (_export) {
  'use strict';

  var util, Hammer, Gesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_ionicGesturesHammer) {
      Hammer = _ionicGesturesHammer.Hammer;
    }],
    execute: function () {
      Gesture = (function () {
        function Gesture(element) {
          var opts = arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, Gesture);

          util.defaults(opts, { domEvents: true });
          this.element = element;
          this.direction = opts.direction || 'x';
          opts.direction = this.direction === 'x' ? Hammer.DIRECTION_HORIZONTAL : Hammer.DIRECTION_VERTICAL;
          this._options = opts;
          this._callbacks = {};
        }

        _createClass(Gesture, [{
          key: 'options',
          value: function options() {
            var opts = arguments[0] === undefined ? {} : arguments[0];

            util.extend(this._options, opts);
          }
        }, {
          key: 'on',
          value: function on(type, cb) {
            this.hammertime.on(type, util.noop);
            (this._callbacks[type] || (this._callbacks[type] = [])).push(cb);
            this.element.addEventListener(type, cb);
          }
        }, {
          key: 'listen',
          value: function listen() {
            this.hammertime = Hammer(this.element, this._options);
          }
        }, {
          key: 'unlisten',
          value: function unlisten() {
            this.hammertime.destroy();
            this.hammertime = null;
            for (var type in this._callbacks) {
              for (var i = 0; i < this._callbacks[type].length; i++) {
                this.element.removeEventListener(type, this._callbacks[type][i]);
              }
            }
            this._callbacks = {};
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.unlisten();
          }
        }]);

        return Gesture;
      })();

      _export('Gesture', Gesture);
    }
  };
});
System.register('ionic/gestures/hammer', [], function (_export) {
  'use strict';

  var VENDOR_PREFIXES, TEST_ELEMENT, TYPE_FUNCTION, round, abs, now, _uniqueId, MOBILE_REGEX, SUPPORT_TOUCH, SUPPORT_POINTER_EVENTS, SUPPORT_ONLY_TOUCH, INPUT_TYPE_TOUCH, INPUT_TYPE_PEN, INPUT_TYPE_MOUSE, INPUT_TYPE_KINECT, COMPUTE_INTERVAL, INPUT_START, INPUT_MOVE, INPUT_END, INPUT_CANCEL, DIRECTION_NONE, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, DIRECTION_ALL, PROPS_XY, PROPS_CLIENT_XY, MOUSE_INPUT_MAP, MOUSE_ELEMENT_EVENTS, MOUSE_WINDOW_EVENTS, POINTER_INPUT_MAP, IE10_POINTER_TYPE_ENUM, POINTER_ELEMENT_EVENTS, POINTER_WINDOW_EVENTS, SINGLE_TOUCH_INPUT_MAP, SINGLE_TOUCH_TARGET_EVENTS, SINGLE_TOUCH_WINDOW_EVENTS, TOUCH_INPUT_MAP, TOUCH_TARGET_EVENTS, PREFIXED_TOUCH_ACTION, NATIVE_TOUCH_ACTION, TOUCH_ACTION_COMPUTE, TOUCH_ACTION_AUTO, TOUCH_ACTION_MANIPULATION, TOUCH_ACTION_NONE, TOUCH_ACTION_PAN_X, TOUCH_ACTION_PAN_Y, STATE_POSSIBLE, STATE_BEGAN, STATE_CHANGED, STATE_ENDED, STATE_RECOGNIZED, STATE_CANCELLED, STATE_FAILED, STOP, FORCED_STOP;

  function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
  }
  function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
      each(arg, context[fn], context);
      return true;
    }
    return false;
  }
  function each(obj, iterator, context) {
    var i;
    if (!obj) {
      return;
    }
    if (obj.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
      i = 0;
      while (i < obj.length) {
        iterator.call(context, obj[i], i, obj);
        i++;
      }
    } else {
      for (i in obj) {
        obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
      }
    }
  }
  function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
      if (!merge || merge && dest[keys[i]] === undefined) {
        dest[keys[i]] = src[keys[i]];
      }
      i++;
    }
    return dest;
  }
  function merge(dest, src) {
    return extend(dest, src, true);
  }
  function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
      extend(childP, properties);
    }
  }
  function bindFn(fn, context) {
    return function boundFn() {
      return fn.apply(context, arguments);
    };
  }
  function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
      return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
  }
  function ifUndefined(val1, val2) {
    return val1 === undefined ? val2 : val1;
  }
  function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.addEventListener(type, handler, false);
    });
  }
  function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
      target.removeEventListener(type, handler, false);
    });
  }
  function hasParent(node, parent) {
    while (node) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  function inStr(str, find) {
    return str.indexOf(find) > -1;
  }
  function splitStr(str) {
    return str.trim().split(/\s+/g);
  }
  function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
      return src.indexOf(find);
    } else {
      var i = 0;
      while (i < src.length) {
        if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
          return i;
        }
        i++;
      }
      return -1;
    }
  }
  function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
  }
  function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
      var val = key ? src[i][key] : src[i];
      if (inArray(values, val) < 0) {
        results.push(src[i]);
      }
      values[i] = val;
      i++;
    }
    if (sort) {
      if (!key) {
        results = results.sort();
      } else {
        results = results.sort(function sortUniqueArray(a, b) {
          return a[key] > b[key];
        });
      }
    }
    return results;
  }
  function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
      prefix = VENDOR_PREFIXES[i];
      prop = prefix ? prefix + camelProp : property;
      if (prop in obj) {
        return prop;
      }
      i++;
    }
    return undefined;
  }

  function uniqueId() {
    return _uniqueId++;
  }
  function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return doc.defaultView || doc.parentWindow;
  }

  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;
    this.domHandler = function (ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };
    this.init();
  }

  function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
      Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
      Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
      Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
      Type = MouseInput;
    } else {
      Type = TouchMouseInput;
    }
    return new Type(manager, inputHandler);
  }
  function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
    var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
      manager.session = {};
    }
    input.eventType = eventType;
    computeInputData(manager, input);
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
  }
  function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;
    if (!session.firstInput) {
      session.firstInput = simpleCloneInputData(input);
    }
    if (pointersLength > 1 && !session.firstMultiple) {
      session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
      session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    computeIntervalInputData(session, input);
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
      target = input.srcEvent.target;
    }
    input.target = target;
  }
  function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
      prevDelta = session.prevDelta = {
        x: prevInput.deltaX || 0,
        y: prevInput.deltaY || 0
      };
      offset = session.offsetDelta = {
        x: center.x,
        y: center.y
      };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
  }
  function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity,
        velocityX,
        velocityY,
        direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
      var deltaX = last.deltaX - input.deltaX;
      var deltaY = last.deltaY - input.deltaY;
      var v = getVelocity(deltaTime, deltaX, deltaY);
      velocityX = v.x;
      velocityY = v.y;
      velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
      direction = getDirection(deltaX, deltaY);
      session.lastInterval = input;
    } else {
      velocity = last.velocity;
      velocityX = last.velocityX;
      velocityY = last.velocityY;
      direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
  }
  function simpleCloneInputData(input) {
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
      pointers[i] = {
        clientX: round(input.pointers[i].clientX),
        clientY: round(input.pointers[i].clientY)
      };
      i++;
    }
    return {
      timeStamp: now(),
      pointers: pointers,
      center: getCenter(pointers),
      deltaX: input.deltaX,
      deltaY: input.deltaY
    };
  }
  function getCenter(pointers) {
    var pointersLength = pointers.length;
    if (pointersLength === 1) {
      return {
        x: round(pointers[0].clientX),
        y: round(pointers[0].clientY)
      };
    }
    var x = 0,
        y = 0,
        i = 0;
    while (i < pointersLength) {
      x += pointers[i].clientX;
      y += pointers[i].clientY;
      i++;
    }
    return {
      x: round(x / pointersLength),
      y: round(y / pointersLength)
    };
  }
  function getVelocity(deltaTime, x, y) {
    return {
      x: x / deltaTime || 0,
      y: y / deltaTime || 0
    };
  }
  function getDirection(x, y) {
    if (x === y) {
      return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
      return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
  }
  function getDistance(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.sqrt(x * x + y * y);
  }
  function getAngle(p1, p2, props) {
    if (!props) {
      props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
  }
  function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
  }

  function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.allow = true;
    this.pressed = false;
    Input.apply(this, arguments);
  }

  function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = this.manager.session.pointerEvents = [];
  }

  function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
  }

  function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
      all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
  }

  function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
  }

  function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
      targetIds[allTouches[0].identifier] = true;
      return [allTouches, allTouches];
    }
    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;
    targetTouches = allTouches.filter(function (touch) {
      return hasParent(touch.target, target);
    });
    if (type === INPUT_START) {
      i = 0;
      while (i < targetTouches.length) {
        targetIds[targetTouches[i].identifier] = true;
        i++;
      }
    }
    i = 0;
    while (i < changedTouches.length) {
      if (targetIds[changedTouches[i].identifier]) {
        changedTargetTouches.push(changedTouches[i]);
      }
      if (type & (INPUT_END | INPUT_CANCEL)) {
        delete targetIds[changedTouches[i].identifier];
      }
      i++;
    }
    if (!changedTargetTouches.length) {
      return;
    }
    return [uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
  }
  function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
  }

  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }

  function cleanTouchActions(actions) {
    if (inStr(actions, TOUCH_ACTION_NONE)) {
      return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
    if (hasPanX && hasPanY) {
      return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }
    if (hasPanX || hasPanY) {
      return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
      return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
  }

  function Recognizer(options) {
    this.id = uniqueId();
    this.manager = null;
    this.options = merge(options || {}, this.defaults);
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }

  function stateStr(state) {
    if (state & STATE_CANCELLED) {
      return 'cancel';
    } else if (state & STATE_ENDED) {
      return 'end';
    } else if (state & STATE_CHANGED) {
      return 'move';
    } else if (state & STATE_BEGAN) {
      return 'start';
    }
    return '';
  }
  function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
      return 'down';
    } else if (direction == DIRECTION_UP) {
      return 'up';
    } else if (direction == DIRECTION_LEFT) {
      return 'left';
    } else if (direction == DIRECTION_RIGHT) {
      return 'right';
    }
    return '';
  }
  function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
      return manager.get(otherRecognizer);
    }
    return otherRecognizer;
  }
  function AttrRecognizer() {
    Recognizer.apply(this, arguments);
  }

  function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
  }

  function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }

  function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
  }

  function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }

  function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
  }

  function TapRecognizer() {
    Recognizer.apply(this, arguments);
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }

  function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }

  function Manager(element, options) {
    options = options || {};
    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(options.recognizers, function (item) {
      var recognizer = this.add(new item[0](item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }

  function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function (value, name) {
      element.style[prefixed(element.style, name)] = add ? value : '';
    });
  }
  function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
  }
  return {
    setters: [],
    execute: function () {
      VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
      TEST_ELEMENT = document.createElement('div');
      TYPE_FUNCTION = 'function';
      round = Math.round;
      abs = Math.abs;
      now = Date.now;
      _uniqueId = 1;
      MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
      SUPPORT_TOUCH = 'ontouchstart' in window;
      SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
      SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
      INPUT_TYPE_TOUCH = 'touch';
      INPUT_TYPE_PEN = 'pen';
      INPUT_TYPE_MOUSE = 'mouse';
      INPUT_TYPE_KINECT = 'kinect';
      COMPUTE_INTERVAL = 25;
      INPUT_START = 1;
      INPUT_MOVE = 2;
      INPUT_END = 4;
      INPUT_CANCEL = 8;
      DIRECTION_NONE = 1;
      DIRECTION_LEFT = 2;
      DIRECTION_RIGHT = 4;
      DIRECTION_UP = 8;
      DIRECTION_DOWN = 16;
      DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
      DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
      DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
      PROPS_XY = ['x', 'y'];
      PROPS_CLIENT_XY = ['clientX', 'clientY'];
      Input.prototype = {
        handler: function handler() {},
        init: function init() {
          this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },
        destroy: function destroy() {
          this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
      };MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
      };
      MOUSE_ELEMENT_EVENTS = 'mousedown';
      MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
      inherit(MouseInput, Input, { handler: function MEhandler(ev) {
          var eventType = MOUSE_INPUT_MAP[ev.type];
          if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
          }
          if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
          }
          if (!this.pressed || !this.allow) {
            return;
          }
          if (eventType & INPUT_END) {
            this.pressed = false;
          }
          this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
          });
        } });
      POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
      };
      IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT
      };
      POINTER_ELEMENT_EVENTS = 'pointerdown';
      POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

      if (window.MSPointerEvent) {
        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
      }inherit(PointerEventInput, Input, { handler: function PEhandler(ev) {
          var store = this.store;
          var removePointer = false;
          var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
          var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
          var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
          var isTouch = pointerType == INPUT_TYPE_TOUCH;
          var storeIndex = inArray(store, ev.pointerId, 'pointerId');
          if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
              store.push(ev);
              storeIndex = store.length - 1;
            }
          } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
          }
          if (storeIndex < 0) {
            return;
          }
          store[storeIndex] = ev;
          this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
          });
          if (removePointer) {
            store.splice(storeIndex, 1);
          }
        } });
      SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
      SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
      inherit(SingleTouchInput, Input, { handler: function TEhandler(ev) {
          var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
          if (type === INPUT_START) {
            this.started = true;
          }
          if (!this.started) {
            return;
          }
          var touches = normalizeSingleTouches.call(this, ev, type);
          if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
          }
          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        } });TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
      inherit(TouchInput, Input, { handler: function MTEhandler(ev) {
          var type = TOUCH_INPUT_MAP[ev.type];
          var touches = getTouches.call(this, ev, type);
          if (!touches) {
            return;
          }
          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        } });inherit(TouchMouseInput, Input, {
        handler: function TMEhandler(manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
              isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
          if (isTouch) {
            this.mouse.allow = false;
          } else if (isMouse && !this.mouse.allow) {
            return;
          }
          if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
          }
          this.callback(manager, inputEvent, inputData);
        },
        destroy: function destroy() {
          this.touch.destroy();
          this.mouse.destroy();
        }
      });
      PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
      NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
      TOUCH_ACTION_COMPUTE = 'compute';
      TOUCH_ACTION_AUTO = 'auto';
      TOUCH_ACTION_MANIPULATION = 'manipulation';
      TOUCH_ACTION_NONE = 'none';
      TOUCH_ACTION_PAN_X = 'pan-x';
      TOUCH_ACTION_PAN_Y = 'pan-y';
      TouchAction.prototype = {
        set: function set(value) {
          if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
          }
          if (NATIVE_TOUCH_ACTION) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
          }
          this.actions = value.toLowerCase().trim();
        },
        update: function update() {
          this.set(this.manager.options.touchAction);
        },
        compute: function compute() {
          var actions = [];
          each(this.manager.recognizers, function (recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
              actions = actions.concat(recognizer.getTouchAction());
            }
          });
          return cleanTouchActions(actions.join(' '));
        },
        preventDefaults: function preventDefaults(input) {
          if (NATIVE_TOUCH_ACTION) {
            return;
          }
          var srcEvent = input.srcEvent;
          var direction = input.offsetDirection;
          if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
          }
          var actions = this.actions;
          var hasNone = inStr(actions, TOUCH_ACTION_NONE);
          var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
          var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
          if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
            return this.preventSrc(srcEvent);
          }
        },
        preventSrc: function preventSrc(srcEvent) {
          this.manager.session.prevented = true;
          srcEvent.preventDefault();
        }
      };STATE_POSSIBLE = 1;
      STATE_BEGAN = 2;
      STATE_CHANGED = 4;
      STATE_ENDED = 8;
      STATE_RECOGNIZED = STATE_ENDED;
      STATE_CANCELLED = 16;
      STATE_FAILED = 32;
      Recognizer.prototype = {
        defaults: {},
        set: function set(options) {
          extend(this.options, options);
          this.manager && this.manager.touchAction.update();
          return this;
        },
        recognizeWith: function recognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
          }
          var simultaneous = this.simultaneous;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
          }
          return this;
        },
        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
          }
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          delete this.simultaneous[otherRecognizer.id];
          return this;
        },
        requireFailure: function requireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
          }
          var requireFail = this.requireFail;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
          }
          return this;
        },
        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
          }
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          var index = inArray(this.requireFail, otherRecognizer);
          if (index > -1) {
            this.requireFail.splice(index, 1);
          }
          return this;
        },
        hasRequireFailures: function hasRequireFailures() {
          return this.requireFail.length > 0;
        },
        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
          return !!this.simultaneous[otherRecognizer.id];
        },
        emit: function emit(input) {
          var self = this;
          var state = this.state;
          function emit(withState) {
            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
          }
          if (state < STATE_ENDED) {
            emit(true);
          }
          emit();
          if (state >= STATE_ENDED) {
            emit(true);
          }
        },
        tryEmit: function tryEmit(input) {
          if (this.canEmit()) {
            return this.emit(input);
          }
          this.state = STATE_FAILED;
        },
        canEmit: function canEmit() {
          var i = 0;
          while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
              return false;
            }
            i++;
          }
          return true;
        },
        recognize: function recognize(inputData) {
          var inputDataClone = extend({}, inputData);
          if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
          }
          if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
          }
          this.state = this.process(inputDataClone);
          if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
          }
        },
        process: function process(inputData) {},
        getTouchAction: function getTouchAction() {},
        reset: function reset() {}
      };inherit(AttrRecognizer, Recognizer, {
        defaults: { pointers: 1 },
        attrTest: function attrTest(input) {
          var optionPointers = this.options.pointers;
          return optionPointers === 0 || input.pointers.length === optionPointers;
        },
        process: function process(input) {
          var state = this.state;
          var eventType = input.eventType;
          var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
          var isValid = this.attrTest(input);
          if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
          } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
              return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
              return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
          }
          return STATE_FAILED;
        }
      });inherit(PanRecognizer, AttrRecognizer, {
        defaults: {
          event: 'pan',
          threshold: 10,
          pointers: 1,
          direction: DIRECTION_ALL
        },
        getTouchAction: function getTouchAction() {
          var direction = this.options.direction;
          var actions = [];
          if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
          }
          if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
          }
          return actions;
        },
        directionTest: function directionTest(input) {
          var options = this.options;
          var hasMoved = true;
          var distance = input.distance;
          var direction = input.direction;
          var x = input.deltaX;
          var y = input.deltaY;
          if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
              direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
              hasMoved = x != this.pX;
              distance = Math.abs(input.deltaX);
            } else {
              direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
              hasMoved = y != this.pY;
              distance = Math.abs(input.deltaY);
            }
          }
          input.direction = direction;
          return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function attrTest(input) {
          return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function emit(input) {
          this.pX = input.deltaX;
          this.pY = input.deltaY;
          var direction = directionStr(input.direction);
          if (direction) {
            this.manager.emit(this.options.event + direction, input);
          }
          this._super.emit.call(this, input);
        }
      });inherit(PinchRecognizer, AttrRecognizer, {
        defaults: {
          event: 'pinch',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function emit(input) {
          this._super.emit.call(this, input);
          if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            this.manager.emit(this.options.event + inOut, input);
          }
        }
      });inherit(PressRecognizer, Recognizer, {
        defaults: {
          event: 'press',
          pointers: 1,
          time: 500,
          threshold: 5
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_AUTO];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTime = input.deltaTime > options.time;
          this._input = input;
          if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
            this.reset();
          } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.time, this);
          } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
          }
          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit(input) {
          if (this.state !== STATE_RECOGNIZED) {
            return;
          }
          if (input && input.eventType & INPUT_END) {
            this.manager.emit(this.options.event + 'up', input);
          } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
          }
        }
      });inherit(RotateRecognizer, AttrRecognizer, {
        defaults: {
          event: 'rotate',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
      });inherit(SwipeRecognizer, AttrRecognizer, {
        defaults: {
          event: 'swipe',
          threshold: 10,
          velocity: 0.65,
          direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
          pointers: 1
        },
        getTouchAction: function getTouchAction() {
          return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function attrTest(input) {
          var direction = this.options.direction;
          var velocity;
          if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.velocity;
          } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.velocityX;
          } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.velocityY;
          }
          return this._super.attrTest.call(this, input) && direction & input.direction && input.distance > this.options.threshold && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function emit(input) {
          var direction = directionStr(input.direction);
          if (direction) {
            this.manager.emit(this.options.event + direction, input);
          }
          this.manager.emit(this.options.event, input);
        }
      });inherit(TapRecognizer, Recognizer, {
        defaults: {
          event: 'tap',
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 2,
          posThreshold: 10
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_MANIPULATION];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTouchTime = input.deltaTime < options.time;
          this.reset();
          if (input.eventType & INPUT_START && this.count === 0) {
            return this.failTimeout();
          }
          if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
              return this.failTimeout();
            }
            var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;
            if (!validMultiTap || !validInterval) {
              this.count = 1;
            } else {
              this.count += 1;
            }
            this._input = input;
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
              if (!this.hasRequireFailures()) {
                return STATE_RECOGNIZED;
              } else {
                this._timer = setTimeoutContext(function () {
                  this.state = STATE_RECOGNIZED;
                  this.tryEmit();
                }, options.interval, this);
                return STATE_BEGAN;
              }
            }
          }
          return STATE_FAILED;
        },
        failTimeout: function failTimeout() {
          this._timer = setTimeoutContext(function () {
            this.state = STATE_FAILED;
          }, this.options.interval, this);
          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit() {
          if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
          }
        }
      });Hammer.VERSION = '2.0.4';
      Hammer.defaults = {
        domEvents: false,
        touchAction: TOUCH_ACTION_COMPUTE,
        enable: true,
        inputTarget: null,
        inputClass: null,
        preset: [[RotateRecognizer, { enable: false }], [PinchRecognizer, { enable: false }, ['rotate']], [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }], [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']], [TapRecognizer], [TapRecognizer, {
          event: 'doubletap',
          taps: 2
        }, ['tap']], [PressRecognizer]],
        cssProps: {
          userSelect: 'none',
          touchSelect: 'none',
          touchCallout: 'none',
          contentZooming: 'none',
          userDrag: 'none',
          tapHighlightColor: 'rgba(0,0,0,0)'
        }
      };
      STOP = 1;
      FORCED_STOP = 2;
      Manager.prototype = {
        set: function set(options) {
          extend(this.options, options);
          if (options.touchAction) {
            this.touchAction.update();
          }
          if (options.inputTarget) {
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
          }
          return this;
        },
        stop: function stop(force) {
          this.session.stopped = force ? FORCED_STOP : STOP;
        },
        recognize: function recognize(inputData) {
          var session = this.session;
          if (session.stopped) {
            return;
          }
          this.touchAction.preventDefaults(inputData);
          var recognizer;
          var recognizers = this.recognizers;
          var curRecognizer = session.curRecognizer;
          if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
            curRecognizer = session.curRecognizer = null;
          }
          var i = 0;
          while (i < recognizers.length) {
            recognizer = recognizers[i];
            if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || recognizer.canRecognizeWith(curRecognizer))) {
              recognizer.recognize(inputData);
            } else {
              recognizer.reset();
            }
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
              curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
          }
        },
        get: function get(recognizer) {
          if (recognizer instanceof Recognizer) {
            return recognizer;
          }
          var recognizers = this.recognizers;
          for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
              return recognizers[i];
            }
          }
          return null;
        },
        add: function add(recognizer) {
          if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
          }
          var existing = this.get(recognizer.options.event);
          if (existing) {
            this.remove(existing);
          }
          this.recognizers.push(recognizer);
          recognizer.manager = this;
          this.touchAction.update();
          return recognizer;
        },
        remove: function remove(recognizer) {
          if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
          }
          var recognizers = this.recognizers;
          recognizer = this.get(recognizer);
          recognizers.splice(inArray(recognizers, recognizer), 1);
          this.touchAction.update();
          return this;
        },
        on: function on(events, handler) {
          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          });
          return this;
        },
        off: function off(events, handler) {
          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            if (!handler) {
              delete handlers[event];
            } else {
              handlers[event].splice(inArray(handlers[event], handler), 1);
            }
          });
          return this;
        },
        emit: function emit(event, data) {
          if (this.options.domEvents) {
            triggerDomEvent(event, data);
          }
          var handlers = this.handlers[event] && this.handlers[event].slice();
          if (!handlers || !handlers.length) {
            return;
          }
          data.type = event;
          data.preventDefault = function () {
            data.srcEvent.preventDefault();
          };
          var i = 0;
          while (i < handlers.length) {
            handlers[i](data);
            i++;
          }
        },
        destroy: function destroy() {
          this.element && toggleCssProps(this, false);
          this.handlers = {};
          this.session = {};
          this.input.destroy();
          this.element = null;
        }
      };extend(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
      });

      _export('Hammer', Hammer);
    }
  };
});
System.register('ionic/gestures/slide-edge-gesture', ['ionic/gestures/slide-gesture', 'ionic/util'], function (_export) {
  'use strict';

  var SlideGesture, util, SlideEdgeGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicGesturesSlideGesture) {
      SlideGesture = _ionicGesturesSlideGesture.SlideGesture;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      SlideEdgeGesture = (function (_SlideGesture) {
        function SlideEdgeGesture(element) {
          var opts = arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, SlideEdgeGesture);

          util.defaults(opts, {
            edge: 'left',
            threshold: 50
          });
          _get(Object.getPrototypeOf(SlideEdgeGesture.prototype), 'constructor', this).call(this, element, opts);
          this.edges = opts.edge.split(' ');
          this.threshold = opts.threshold;
        }

        _inherits(SlideEdgeGesture, _SlideGesture);

        _createClass(SlideEdgeGesture, [{
          key: 'canStart',
          value: function canStart(ev) {
            var _this = this;

            this._containerRect = this.getContainerDimensions();
            return this.edges.every(function (edge) {
              return _this._checkEdge(edge, ev.gesture.center);
            });
          }
        }, {
          key: 'getContainerDimensions',
          value: function getContainerDimensions() {
            return {
              left: 0,
              top: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          }
        }, {
          key: '_checkEdge',
          value: function _checkEdge(edge, pos) {
            switch (edge) {
              case 'left':
                return pos.x <= this._containerRect.left + this.threshold;
              case 'right':
                return pos.x >= this._containerRect.width - this.threshold;
              case 'top':
                return pos.y <= this._containerRect.top + this.threshold;
              case 'bottom':
                return pos.y >= this._containerRect.height - this.threshold;
            }
          }
        }]);

        return SlideEdgeGesture;
      })(SlideGesture);

      _export('SlideEdgeGesture', SlideEdgeGesture);

      Object.defineProperty(SlideEdgeGesture, 'parameters', { get: function get() {
          return [[Element], [Object]];
        } });
    }
  };
});
System.register('ionic/gestures/slide-gesture', ['ionic/gestures/drag-gesture', 'ionic/util'], function (_export) {
  'use strict';

  var DragGesture, util, SlideGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicGesturesDragGesture) {
      DragGesture = _ionicGesturesDragGesture.DragGesture;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      SlideGesture = (function (_DragGesture) {
        function SlideGesture(element) {
          var opts = arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, SlideGesture);

          _get(Object.getPrototypeOf(SlideGesture.prototype), 'constructor', this).call(this, element, opts);
          this.element = element;
        }

        _inherits(SlideGesture, _DragGesture);

        _createClass(SlideGesture, [{
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries(slide, ev) {
            return {
              min: 0,
              max: this.element.offsetWidth
            };
          }
        }, {
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return 0;
          }
        }, {
          key: 'canStart',
          value: function canStart() {
            return true;
          }
        }, {
          key: 'onDragStart',
          value: function onDragStart(ev) {
            var _this = this;

            if (!this.canStart(ev)) return false;
            this.slide = {};
            var promise = this.onSlideBeforeStart(this.slide, ev) || Promise.resolve();
            promise.then(function () {
              var _getSlideBoundaries = _this.getSlideBoundaries(_this.slide, ev);

              var min = _getSlideBoundaries.min;
              var max = _getSlideBoundaries.max;

              _this.slide.min = min;
              _this.slide.max = max;
              _this.slide.elementStartPos = _this.getElementStartPos(_this.slide, ev);
              _this.slide.pointerStartPos = ev.gesture.center[_this.direction];
              _this.slide.started = true;
              _this.onSlideStart(_this.slide, ev);
            })['catch'](function () {
              _this.slide = null;
            });
          }
        }, {
          key: 'onDrag',
          value: function onDrag(ev) {
            if (!this.slide || !this.slide.started) return;
            this.slide.pos = ev.gesture.center[this.direction];
            this.slide.distance = util.clamp(this.slide.min, this.slide.pos - this.slide.pointerStartPos + this.slide.elementStartPos, this.slide.max);
            this.slide.delta = this.slide.pos - this.slide.pointerStartPos;
            this.onSlide(this.slide, ev);
          }
        }, {
          key: 'onDragEnd',
          value: function onDragEnd(ev) {
            if (!this.slide || !this.slide.started) return;
            this.onSlideEnd(this.slide, ev);
            this.slide = null;
          }
        }, {
          key: 'onSlideBeforeStart',
          value: function onSlideBeforeStart() {}
        }, {
          key: 'onSlideStart',
          value: function onSlideStart() {}
        }, {
          key: 'onSlide',
          value: function onSlide() {}
        }, {
          key: 'onSlideEnd',
          value: function onSlideEnd() {}
        }]);

        return SlideGesture;
      })(DragGesture);

      _export('SlideGesture', SlideGesture);
    }
  };
});
System.register('ionic/net/http', ['ionic/util'], function (_export) {
  'use strict';

  var util, Http;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      Http = (function () {
        function Http() {
          _classCallCheck(this, Http);
        }

        _createClass(Http, null, [{
          key: 'fetch',
          value: (function (_fetch) {
            function fetch(_x, _x2) {
              return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
              return _fetch.toString();
            };

            return fetch;
          })(function (url, options) {
            return fetch(url, options).then(function (response) {
              if (response.status === 200 || response.status === 0) {
                if (response.headers.get('Content-Type') === 'application/json') {
                  return response.json();
                }
                return response.text();
              } else {
                return Promise.reject(response, new Error(response.statusText));
              }
            })['catch'](function (err) {
              return Promise.reject(err);
            });
          })
        }, {
          key: '_method',
          value: function _method(method, url, data, options, sendsJson) {
            options = util.defaults(options, {
              method: method,
              headers: { 'Accept': 'application/json,text/plain,*/*' },
              body: typeof data === 'string' ? data : JSON.stringify(data)
            });
            if (sendsJson) {
              options.headers['Content-Type'] = 'application/json';
            }
            return Http.fetch(url, options);
          }
        }, {
          key: 'get',
          value: function get(url) {
            var options = arguments[1] === undefined ? {} : arguments[1];

            return Http._method('get', url, {}, options);
          }
        }, {
          key: 'post',
          value: function post(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('post', url, data, options, true);
          }
        }, {
          key: 'put',
          value: function put(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('put', url, data, options, true);
          }
        }, {
          key: 'delete',
          value: function _delete(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('delete', url, data, options, true);
          }
        }, {
          key: 'patch',
          value: function patch(url) {
            var data = arguments[1] === undefined ? {} : arguments[1];
            var options = arguments[2] === undefined ? {} : arguments[2];

            return Http._method('patch', url, data, options, true);
          }
        }]);

        return Http;
      })();

      _export('Http', Http);
    }
  };
});
System.register('ionic/platform/platform', ['../util/util', '../util/dom'], function (_export) {
  'use strict';

  var util, dom, PlatformCtrl, PlatformNode, Platform;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function matchPlatform(platformName, platform) {
    var platformNode = new PlatformNode(platformName);
    var tmpPlatform = platformNode.getRoot(platform, 0);
    if (tmpPlatform) {
      tmpPlatform.depth = 0;
      var childPlatform = tmpPlatform.child();
      while (childPlatform) {
        tmpPlatform.depth++;
        childPlatform = childPlatform.child();
      }
    }
    return tmpPlatform;
  }
  function insertSuperset(platformNode) {
    var supersetPlaformName = platformNode.superset();
    if (supersetPlaformName) {
      var supersetPlatform = new PlatformNode(supersetPlaformName);
      supersetPlatform.parent(platformNode.parent());
      supersetPlatform.child(platformNode);
      if (supersetPlatform.parent()) {
        supersetPlatform.parent().child(supersetPlatform);
      }
      platformNode.parent(supersetPlatform);
    }
  }
  return {
    setters: [function (_utilUtil) {
      util = _utilUtil;
    }, function (_utilDom) {
      dom = _utilDom;
    }],
    execute: function () {
      PlatformCtrl = (function () {
        function PlatformCtrl() {
          var _this = this;

          _classCallCheck(this, PlatformCtrl);

          this._settings = {};
          this._platforms = [];
          this._versions = {};
          this._registry = {};
          this._default = null;
          this._readyPromise = new Promise(function (res) {
            _this._readyResolve = res;
          });
        }

        _createClass(PlatformCtrl, [{
          key: 'is',
          value: function is(platformName) {
            return this._platforms.indexOf(platformName) > -1;
          }
        }, {
          key: 'platforms',
          value: function platforms() {
            return this._platforms;
          }
        }, {
          key: 'versions',
          value: function versions(platformName) {
            if (arguments.length) {
              return this._versions[platformName];
            }
            return this._versions;
          }
        }, {
          key: 'ready',
          value: function ready() {
            return this._readyPromise;
          }
        }, {
          key: 'prepareReady',
          value: function prepareReady(config) {
            var self = this;
            function resolve() {
              self._readyResolve(config);
            }
            if (this._engineReady) {
              this._engineReady(resolve);
            } else {
              dom.ready(resolve);
            }
          }
        }, {
          key: 'domReady',
          value: function domReady() {
            return dom.ready.apply(this, arguments);
          }
        }, {
          key: 'windowLoad',
          value: function windowLoad() {
            return dom.windowLoad.apply(this, arguments);
          }
        }, {
          key: 'on',
          value: function on() {}
        }, {
          key: 'onHardwareBackButton',
          value: function onHardwareBackButton() {}
        }, {
          key: 'registerBackButtonAction',
          value: function registerBackButtonAction() {}
        }, {
          key: 'exitApp',
          value: function exitApp() {}
        }, {
          key: 'fullScreen',
          value: function fullScreen() {}
        }, {
          key: 'showStatusBar',
          value: function showStatusBar() {}
        }, {
          key: 'url',
          value: function url(val) {
            if (arguments.length) {
              this._url = val;
              this._qs = util.getQuerystring(val);
            }
            return this._url;
          }
        }, {
          key: 'query',
          value: function query(key) {
            return (this._qs || {})[key];
          }
        }, {
          key: 'userAgent',
          value: function userAgent(val) {
            if (arguments.length) {
              this._ua = val;
            }
            return this._ua;
          }
        }, {
          key: 'width',
          value: function width(val) {
            if (arguments.length) {
              this._w = val;
            }
            return this._w || 0;
          }
        }, {
          key: 'height',
          value: function height(val) {
            if (arguments.length) {
              this._h = val;
            }
            return this._h || 0;
          }
        }, {
          key: 'register',
          value: function register(platformConfig) {
            this._registry[platformConfig.name] = platformConfig;
          }
        }, {
          key: 'registry',
          value: function registry() {
            return this._registry;
          }
        }, {
          key: 'setDefault',
          value: function setDefault(platformName) {
            this._default = platformName;
          }
        }, {
          key: 'testQuery',
          value: function testQuery(queryValue) {
            var val = this.query('ionicplatform');
            if (val) {
              var valueSplit = val.toLowerCase().split(';');
              for (var i = 0; i < valueSplit.length; i++) {
                if (valueSplit[i] == queryValue) {
                  return true;
                }
              }
            }
            return false;
          }
        }, {
          key: 'testUserAgent',
          value: function testUserAgent(userAgentExpression) {
            var rx = new RegExp(userAgentExpression, 'i');
            return rx.test(this._ua);
          }
        }, {
          key: 'matchUserAgentVersion',
          value: function matchUserAgentVersion(userAgentExpression) {
            var val = this._ua.match(userAgentExpression);
            if (val) {
              return {
                major: val[1],
                minor: val[2]
              };
            }
          }
        }, {
          key: 'isPlatform',
          value: function isPlatform(queryValue, userAgentExpression) {
            if (!userAgentExpression) {
              userAgentExpression = queryValue;
            }
            return this.testQuery(queryValue) || this.testUserAgent(userAgentExpression);
          }
        }, {
          key: 'load',
          value: function load(config) {
            alert('Checking platforms');
            var rootPlatformNode = null;
            var engineNode = null;
            var self = this;
            this.platformOverride = config.setting('platform');
            var tmpPlatform = null;
            for (var platformName in this._registry) {
              tmpPlatform = matchPlatform(platformName, this);
              if (tmpPlatform) {
                if (tmpPlatform.isEngine) {
                  engineNode = tmpPlatform;
                } else if (!rootPlatformNode || tmpPlatform.depth > rootPlatformNode.depth) {
                  rootPlatformNode = tmpPlatform;
                }
              }
            }
            if (!rootPlatformNode) {
              rootPlatformNode = new PlatformNode(this._default);
            }
            if (rootPlatformNode) {
              if (engineNode) {
                alert('Found engine node: ' + engineNode.name);
                engineNode.child(rootPlatformNode);
                rootPlatformNode.parent(engineNode);
                rootPlatformNode = engineNode;
                var engineMethods = engineNode.methods();
                engineMethods._engineReady = engineMethods.ready;
                delete engineMethods.ready;
                util.extend(this, engineMethods);
              }
              var platformNode = rootPlatformNode;
              while (platformNode) {
                insertSuperset(platformNode);
                platformNode = platformNode.child();
              }
              platformNode = rootPlatformNode.parent();
              while (platformNode) {
                rootPlatformNode = platformNode;
                platformNode = platformNode.parent();
              }
              platformNode = rootPlatformNode;
              while (platformNode) {
                this._platforms.push(platformNode.name());
                this._settings[platformNode.name()] = util.extend({}, platformNode.settings());
                this._versions[platformNode.name()] = platformNode.version(this);
                platformNode = platformNode.child();
              }
            }
          }
        }, {
          key: 'settings',
          value: function settings(val) {
            if (arguments.length) {
              this._settings = val;
            }
            return this._settings;
          }
        }, {
          key: 'get',
          value: function get(platformName) {
            return this._registry[platformName] || {};
          }
        }]);

        return PlatformCtrl;
      })();

      _export('PlatformCtrl', PlatformCtrl);

      PlatformNode = (function () {
        function PlatformNode(platformName) {
          _classCallCheck(this, PlatformNode);

          this.c = Platform.get(platformName);
          this.isEngine = this.c.isEngine;
        }

        _createClass(PlatformNode, [{
          key: 'name',
          value: function name() {
            return this.c.name;
          }
        }, {
          key: 'settings',
          value: function settings() {
            return this.c.settings || {};
          }
        }, {
          key: 'superset',
          value: function superset() {
            return this.c.superset;
          }
        }, {
          key: 'methods',
          value: function methods() {
            return this.c.methods || {};
          }
        }, {
          key: 'parent',
          value: function parent(val) {
            if (arguments.length) {
              this._parent = val;
            }
            return this._parent;
          }
        }, {
          key: 'child',
          value: function child(val) {
            if (arguments.length) {
              this._child = val;
            }
            return this._child;
          }
        }, {
          key: 'isMatch',
          value: function isMatch(p) {
            alert('Checking if match:' + p.name + ' ' + this.c.isMatched);
            if (typeof this.c.isMatched !== 'boolean') {
              if (p.platformOverride) {
                this.c.isMatched = p.platformOverride === this.c.name;
              } else if (!this.c.isMatch) {
                this.c.isMatched = false;
              } else {
                console.log('Is match?');
                this.c.isMatched = this.c.isMatch(p);
                console.log(this.c.isMatched);
              }
            }
            return this.c.isMatched;
          }
        }, {
          key: 'version',
          value: function version(p) {
            if (this.c.versionParser) {
              var v = this.c.versionParser(p);
              if (v) {
                var str = v.major + '.' + v.minor;
                return {
                  str: str,
                  num: parseFloat(str),
                  major: parseInt(v.major, 10),
                  minor: parseInt(v.minor, 10)
                };
              }
            }
          }
        }, {
          key: 'getRoot',
          value: function getRoot(p) {
            if (this.isMatch(p)) {
              var parents = this.getSubsetParents(this.name());
              if (!parents.length) {
                return this;
              }
              var platform = null;
              var rootPlatform = null;
              for (var i = 0; i < parents.length; i++) {
                platform = new PlatformNode(parents[i]);
                platform.child(this);
                rootPlatform = platform.getRoot(p);
                if (rootPlatform) {
                  this.parent(platform);
                  return rootPlatform;
                }
              }
            }
            return null;
          }
        }, {
          key: 'getSubsetParents',
          value: function getSubsetParents(subsetPlatformName) {
            var registry = Platform.registry();
            var parentPlatformNames = [];
            var platform = null;
            for (var platformName in registry) {
              platform = registry[platformName];
              if (platform.subsets && platform.subsets.indexOf(subsetPlatformName) > -1) {
                parentPlatformNames.push(platformName);
              }
            }
            return parentPlatformNames;
          }
        }]);

        return PlatformNode;
      })();

      Platform = new PlatformCtrl();

      _export('Platform', Platform);
    }
  };
});
System.register('ionic/platform/registry', ['./platform'], function (_export) {
  'use strict';

  var Platform;
  return {
    setters: [function (_platform) {
      Platform = _platform.Platform;
    }],
    execute: function () {
      Platform.register({
        name: 'core',
        settings: { mode: 'core' }
      });
      Platform.setDefault('core');
      Platform.register({ name: 'mobile' });
      Platform.register({
        name: 'phablet',
        isMatch: function isMatch(p) {
          var smallest = Math.min(p.width(), p.height());
          var largest = Math.max(p.width(), p.height());
          return smallest > 390 && smallest < 520 && (largest > 620 && largest < 800);
        }
      });
      Platform.register({
        name: 'tablet',
        isMatch: function isMatch(p) {
          var smallest = Math.min(p.width(), p.height());
          var largest = Math.max(p.width(), p.height());
          return smallest > 460 && smallest < 820 && (largest > 780 && largest < 1400);
        }
      });
      Platform.register({
        name: 'android',
        superset: 'mobile',
        subsets: ['phablet', 'tablet'],
        settings: { mode: 'md' },
        isMatch: function isMatch(p) {
          var re = 'android| silk';
          return p.isPlatform('android', re);
        },
        versionParser: function versionParser(p) {
          return p.matchUserAgentVersion(/Android (\d+).(\d+)?/);
        }
      });
      Platform.register({
        name: 'ios',
        superset: 'mobile',
        subsets: ['ipad', 'iphone'],
        settings: {
          mode: 'ios',
          viewTransition: 'ios',
          tapPolyfill: true
        },
        isMatch: function isMatch(p) {
          return p.isPlatform('ios', 'iphone|ipad|ipod');
        },
        versionParser: function versionParser(p) {
          return p.matchUserAgentVersion(/OS (\d+)_(\d+)?/);
        }
      });
      Platform.register({
        name: 'ipad',
        superset: 'tablet',
        isMatch: function isMatch(p) {
          return p.isPlatform('ipad');
        }
      });
      Platform.register({
        name: 'iphone',
        subsets: ['phablet'],
        isMatch: function isMatch(p) {
          return p.isPlatform('iphone');
        }
      });
      Platform.register({
        name: 'windowsphone',
        superset: 'mobile',
        subsets: ['phablet', 'tablet'],
        settings: { mode: 'wp' },
        isMatch: function isMatch(p) {
          return p.isPlatform('windowsphone', 'windows phone');
        },
        versionParser: function versionParser(p) {
          return p.matchUserAgentVersion(/Windows Phone (\d+).(\d+)?/);
        }
      });
      Platform.register({
        name: 'cordova',
        isEngine: true,
        methods: { ready: function ready(resolve) {
            alert('Cordova ready?');
            Platform.windowLoad(function () {
              alert('YES');
              document.addEventListener('deviceready', resolve);
            });
          } },
        isMatch: function isMatch(p) {
          alert('Checking cordova');
          return !!(window.cordova || window.PhoneGap || window.phonegap);
        }
      });
    }
  };
});
System.register('ionic/routing/path-recognizer', ['angular2/src/facade/lang', 'angular2/src/facade/collection'], function (_export) {
  'use strict';

  var RegExp, RegExpWrapper, RegExpMatcherWrapper, StringWrapper, isPresent, isBlank, BaseException, normalizeBlank, Map, MapWrapper, StringMap, StringMapWrapper, List, ListWrapper, ContinuationSegment, StaticSegment, DynamicSegment, StarSegment, paramMatcher, wildcardMatcher, PathRecognizer, specialCharacters, escapeRe;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function parsePathString(route) {
    if (StringWrapper.startsWith(route, '/')) {
      route = StringWrapper.substring(route, 1);
    }
    var segments = splitBySlash(route);
    var results = [];
    var specificity = 0;
    if (segments.length > 98) {
      throw new BaseException('\'' + route + '\' has more than the maximum supported number of segments.');
    }
    var limit = segments.length - 1;
    for (var i = 0; i <= limit; i++) {
      var segment = segments[i],
          match;
      if (isPresent(match = RegExpWrapper.firstMatch(paramMatcher, segment))) {
        results.push(new DynamicSegment(match[1]));
        specificity += 100 - i;
      } else if (isPresent(match = RegExpWrapper.firstMatch(wildcardMatcher, segment))) {
        results.push(new StarSegment(match[1]));
      } else if (segment == '...') {
        if (i < limit) {
          throw new BaseException('Unexpected "..." before the end of the path for "' + route + '".');
        }
        results.push(new ContinuationSegment());
      } else if (segment.length > 0) {
        results.push(new StaticSegment(segment));
        specificity += 100 * (100 - i);
      }
    }
    return {
      segments: results,
      specificity: specificity
    };
  }

  function splitBySlash(url) {
    return url.split('/');
  }

  function escapeRegex(string) {
    return StringWrapper.replaceAllMapped(string, escapeRe, function (match) {
      return '\\' + match;
    });
  }
  return {
    setters: [function (_angular2SrcFacadeLang) {
      RegExp = _angular2SrcFacadeLang.RegExp;
      RegExpWrapper = _angular2SrcFacadeLang.RegExpWrapper;
      RegExpMatcherWrapper = _angular2SrcFacadeLang.RegExpMatcherWrapper;
      StringWrapper = _angular2SrcFacadeLang.StringWrapper;
      isPresent = _angular2SrcFacadeLang.isPresent;
      isBlank = _angular2SrcFacadeLang.isBlank;
      BaseException = _angular2SrcFacadeLang.BaseException;
      normalizeBlank = _angular2SrcFacadeLang.normalizeBlank;
    }, function (_angular2SrcFacadeCollection) {
      Map = _angular2SrcFacadeCollection.Map;
      MapWrapper = _angular2SrcFacadeCollection.MapWrapper;
      StringMap = _angular2SrcFacadeCollection.StringMap;
      StringMapWrapper = _angular2SrcFacadeCollection.StringMapWrapper;
      List = _angular2SrcFacadeCollection.List;
      ListWrapper = _angular2SrcFacadeCollection.ListWrapper;
    }],
    execute: function () {
      ContinuationSegment = (function () {
        function ContinuationSegment() {
          _classCallCheck(this, ContinuationSegment);
        }

        _createClass(ContinuationSegment, [{
          key: 'generate',
          value: function generate(params) {
            return '';
          }
        }]);

        return ContinuationSegment;
      })();

      StaticSegment = (function () {
        function StaticSegment(string) {
          _classCallCheck(this, StaticSegment);

          this.name = '';
          this.regex = escapeRegex(string);
        }

        _createClass(StaticSegment, [{
          key: 'generate',
          value: function generate(params) {
            return this.string;
          }
        }]);

        return StaticSegment;
      })();

      DynamicSegment = (function () {
        function DynamicSegment(name) {
          _classCallCheck(this, DynamicSegment);

          this.regex = '([^/]+)';
        }

        _createClass(DynamicSegment, [{
          key: 'generate',
          value: function generate(params) {
            if (!StringMapWrapper.contains(params, this.name)) {
              throw new BaseException('Route generator for \'' + this.name + '\' was not included in parameters passed.');
            }
            return normalizeBlank(StringMapWrapper.get(params, this.name));
          }
        }]);

        return DynamicSegment;
      })();

      StarSegment = (function () {
        function StarSegment(name) {
          _classCallCheck(this, StarSegment);

          this.regex = '(.+)';
        }

        _createClass(StarSegment, [{
          key: 'generate',
          value: function generate(params) {
            return normalizeBlank(StringMapWrapper.get(params, this.name));
          }
        }]);

        return StarSegment;
      })();

      paramMatcher = RegExpWrapper.create('^:([^/]+)$');
      wildcardMatcher = RegExpWrapper.create('^\\*([^/]+)$');
      Object.defineProperty(parsePathString, 'parameters', { get: function get() {
          return [[string]];
        } });Object.defineProperty(splitBySlash, 'parameters', { get: function get() {
          return [[string]];
        } });

      PathRecognizer = (function () {
        function PathRecognizer(path) {
          var _this = this;

          _classCallCheck(this, PathRecognizer);

          this.segments = [];
          var parsed = parsePathString(path);
          var specificity = parsed['specificity'];
          var segments = parsed['segments'];
          var regexString = '^';
          ListWrapper.forEach(segments, function (segment) {
            if (segment instanceof ContinuationSegment) {
              _this.terminal = false;
            } else {
              regexString += '/' + segment.regex;
            }
          });
          if (this.terminal) {
            regexString += '$';
          }
          this.regex = RegExpWrapper.create(regexString);
          this.segments = segments;
          this.specificity = specificity;
        }

        _createClass(PathRecognizer, [{
          key: 'parseParams',
          value: function parseParams(url) {
            var params = StringMapWrapper.create();
            var urlPart = url;
            for (var i = 0; i < this.segments.length; i++) {
              var segment = this.segments[i];
              if (segment instanceof ContinuationSegment) {
                continue;
              }
              var match = RegExpWrapper.firstMatch(RegExpWrapper.create('/' + segment.regex), urlPart);
              urlPart = StringWrapper.substring(urlPart, match[0].length);
              if (segment.name.length > 0) {
                StringMapWrapper.set(params, segment.name, match[1]);
              }
            }
            return params;
          }
        }, {
          key: 'generate',
          value: function generate(params) {
            return ListWrapper.join(ListWrapper.map(this.segments, function (segment) {
              return '/' + segment.generate(params);
            }), '');
          }
        }]);

        return PathRecognizer;
      })();

      _export('PathRecognizer', PathRecognizer);

      specialCharacters = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
      escapeRe = RegExpWrapper.create('(\\' + specialCharacters.join('|\\') + ')', 'g');
    }
  };
});
System.register('ionic/routing/router', ['angular2/src/facade/lang', '../util/util', './path-recognizer'], function (_export) {
  'use strict';

  var RegExp, RegExpWrapper, RegExpMatcherWrapper, StringWrapper, isPresent, isBlank, BaseException, normalizeBlank, util, PathRecognizer, IonicRouter, Routable, Route, RouteMatch;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcFacadeLang) {
      RegExp = _angular2SrcFacadeLang.RegExp;
      RegExpWrapper = _angular2SrcFacadeLang.RegExpWrapper;
      RegExpMatcherWrapper = _angular2SrcFacadeLang.RegExpMatcherWrapper;
      StringWrapper = _angular2SrcFacadeLang.StringWrapper;
      isPresent = _angular2SrcFacadeLang.isPresent;
      isBlank = _angular2SrcFacadeLang.isBlank;
      BaseException = _angular2SrcFacadeLang.BaseException;
      normalizeBlank = _angular2SrcFacadeLang.normalizeBlank;
    }, function (_utilUtil) {
      util = _utilUtil;
    }, function (_pathRecognizer) {
      PathRecognizer = _pathRecognizer.PathRecognizer;
    }],
    execute: function () {
      IonicRouter = (function () {
        function IonicRouter(config) {
          _classCallCheck(this, IonicRouter);

          this._routes = {};
          this._viewCtrls = [];
          this.config(config);
        }

        _createClass(IonicRouter, [{
          key: 'app',
          value: function app(_app) {
            this._app = _app;
          }
        }, {
          key: 'config',
          value: function config(_config) {
            for (var routeName in _config) {
              this.addRoute(routeName, _config[routeName]);
            }
          }
        }, {
          key: 'addRoute',
          value: function addRoute(routeName, routeConfig) {
            if (routeName && routeConfig && routeConfig.path) {
              this._routes[routeName] = new Route(routeName, routeConfig);
            }
          }
        }, {
          key: 'init',
          value: function init() {
            var rootViewCtrl = this.activeViewController();
            if (rootViewCtrl) {
              var matchedRoute = this.match(this.getCurrentPath()) || this.otherwise();
              this.push(rootViewCtrl, matchedRoute);
            }
          }
        }, {
          key: 'match',
          value: function match(path) {
            var matchedRoute = null;
            var routeMatch = null;
            var highestSpecifity = 0;
            for (var routeName in this._routes) {
              routeMatch = this._routes[routeName].match(path);
              if (routeMatch.match && (!matchedRoute || routeMatch.specificity > highestSpecifity)) {
                matchedRoute = this._routes[routeName];
                highestSpecifity = routeMatch.specificity;
              }
            }
            return matchedRoute;
          }
        }, {
          key: 'otherwise',
          value: function otherwise(val) {
            if (arguments.length) {
              this._otherwise = val;
            } else if (this._otherwise) {
              return this._routes[this._otherwise];
            }
          }
        }, {
          key: 'push',
          value: function push(viewCtrl, route) {
            var self = this;
            function run() {
              self._app.zone().run(function () {
                viewCtrl.push(route.cls);
              });
            }
            if (viewCtrl && route) {
              if (route.cls) {
                run();
              } else if (route.module) {
                System['import'](route.module).then(function (m) {
                  if (m) {
                    route.cls = m[route.name];
                    run();
                  }
                });
              }
            }
          }
        }, {
          key: 'stateChange',
          value: function stateChange(activeView) {
            if (activeView && activeView.ComponentType) {
              var routeConfig = activeView.ComponentType.route;
              if (routeConfig) {
                var matchedRoute = this.match(routeConfig.path);
                if (matchedRoute) {
                  this.updateState(matchedRoute);
                }
              }
            }
          }
        }, {
          key: 'updateState',
          value: function updateState(route) {
            var newPath = route.path;
            if (window.location.hash !== '#' + newPath) {
              console.log('updateState', newPath);
              window.location.hash = newPath;
            }
          }
        }, {
          key: 'addViewController',
          value: function addViewController(viewCtrl) {
            this._viewCtrls.push(viewCtrl);
          }
        }, {
          key: 'activeViewController',
          value: function activeViewController() {
            if (this._viewCtrls.length) {
              return this._viewCtrls[this._viewCtrls.length - 1];
            }
            return null;
          }
        }, {
          key: 'getCurrentPath',
          value: function getCurrentPath() {
            var hash = window.location.hash;
            return hash.slice(1);
          }
        }]);

        return IonicRouter;
      })();

      _export('IonicRouter', IonicRouter);

      Routable = function Routable(cls, routeConfig) {
        _classCallCheck(this, Routable);

        cls.route = routeConfig;
      };

      _export('Routable', Routable);

      Route = (function () {
        function Route(name, routeConfig) {
          _classCallCheck(this, Route);

          this.name = name;
          this.cls = null;
          util.extend(this, routeConfig);
          this.recognizer = new PathRecognizer(this.path);
        }

        _createClass(Route, [{
          key: 'match',
          value: function match(matchPath) {
            var routeMatch = new RouteMatch(this, matchPath);
            if (routeMatch) {
              return routeMatch;
            }
            return false;
          }
        }]);

        return Route;
      })();

      RouteMatch = function RouteMatch(route, matchPath) {
        _classCallCheck(this, RouteMatch);

        this.route = route;
        this.specificity = route.recognizer.specificity;
        this.match = RegExpWrapper.firstMatch(route.recognizer.regex, matchPath);
      };
    }
  };
});
System.register('ionic/transitions/ios-transition', ['./transition', '../animations/animation'], function (_export) {
  'use strict';

  var Transition, Animation, DURATION, EASING, OPACITY, TRANSLATEX, OFF_RIGHT, OFF_LEFT, CENTER, OFF_OPACITY, IOSTransition;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_transition) {
      Transition = _transition.Transition;
    }, function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }],
    execute: function () {
      DURATION = 600;
      EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
      OPACITY = 'opacity';
      TRANSLATEX = 'translateX';
      OFF_RIGHT = '100%';
      OFF_LEFT = '-33%';
      CENTER = '0%';
      OFF_OPACITY = 0.8;

      IOSTransition = (function (_Transition) {
        function IOSTransition(nav, opts) {
          _classCallCheck(this, IOSTransition);

          _get(Object.getPrototypeOf(IOSTransition.prototype), 'constructor', this).call(this, nav, opts);
          this.duration(DURATION);
          this.easing(EASING);
          this.enteringView.to(TRANSLATEX, CENTER).to(OPACITY, 1);
          this.enteringTitle.fadeIn().to(TRANSLATEX, CENTER);
          this.leavingView.from(TRANSLATEX, CENTER).from(OPACITY, 1);
          this.leavingTitle.from(TRANSLATEX, CENTER).from(OPACITY, 1);
          if (opts.direction === 'back') {
            this.enteringView.from(TRANSLATEX, OFF_LEFT).from(OPACITY, OFF_OPACITY).to(OPACITY, 1);
            this.enteringTitle.from(TRANSLATEX, OFF_LEFT);
            this.leavingView.to(TRANSLATEX, OFF_RIGHT).to(OPACITY, 1);
            this.leavingTitle.to(TRANSLATEX, OFF_RIGHT).to(OPACITY, 0);
            if (this.leaving.enableBack() && this.viewWidth() > 200) {
              var leavingBackButtonText = new Animation(this.leaving.backButtonTextElement());
              leavingBackButtonText.fromTo(TRANSLATEX, CENTER, this.viewWidth() / 2 + 'px');
              this.leavingNavbar.add(leavingBackButtonText);
            }
          } else {
            this.enteringView.from(TRANSLATEX, OFF_RIGHT).from(OPACITY, 1);
            this.enteringTitle.from(TRANSLATEX, OFF_RIGHT);
            this.leavingView.to(TRANSLATEX, OFF_LEFT).to(OPACITY, OFF_OPACITY);
            this.leavingTitle.to(TRANSLATEX, OFF_LEFT).to(OPACITY, 0);
            if (this.entering.enableBack() && this.viewWidth() > 200) {
              var enteringBackButtonText = new Animation(this.entering.backButtonTextElement());
              enteringBackButtonText.fromTo(TRANSLATEX, this.viewWidth() / 2 + 'px', CENTER);
              this.enteringNavbar.add(enteringBackButtonText);
            }
          }
        }

        _inherits(IOSTransition, _Transition);

        return IOSTransition;
      })(Transition);

      Transition.register('ios', IOSTransition);
    }
  };
});
System.register('ionic/transitions/transition', ['../animations/animation', '../config/config'], function (_export) {
  'use strict';

  var Animation, IonicConfig, SHOW_NAVBAR_CSS, SHOW_VIEW_CSS, SHOW_BACK_BUTTON, TransitionRegistry, Transition;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }, function (_configConfig) {
      IonicConfig = _configConfig.IonicConfig;
    }],
    execute: function () {
      SHOW_NAVBAR_CSS = 'show-navbar';
      SHOW_VIEW_CSS = 'show-view';
      SHOW_BACK_BUTTON = 'show-back-button';
      TransitionRegistry = {};

      Transition = (function (_Animation) {
        function Transition(nav, opts) {
          _classCallCheck(this, Transition);

          _get(Object.getPrototypeOf(Transition.prototype), 'constructor', this).call(this);
          var enteringItem = this.entering = nav.getStagedEnteringItem();
          var leavingItem = this.leaving = nav.getStagedLeavingItem();
          this.enteringView = new Animation(enteringItem.viewElement());
          this.enteringView.before.addClass(SHOW_VIEW_CSS);
          this.enteringView.onPlay(function () {
            enteringItem.postRender();
          });
          this.add(this.enteringView);
          if (opts.navbar !== false) {
            var enteringNavbar = this.enteringNavbar = new Animation(enteringItem.navbarElement());
            enteringNavbar.before.addClass(SHOW_NAVBAR_CSS);
            if (enteringItem.enableBack()) {
              var enteringBackButton = this.enteringBackButton = new Animation(enteringItem.backButtonElement());
              enteringBackButton.before.addClass(SHOW_BACK_BUTTON).fadeIn();
              enteringNavbar.add(enteringBackButton);
            }
            this.enteringTitle = new Animation(enteringItem.titleElement());
            enteringNavbar.add(this.enteringTitle);
            this.add(enteringNavbar);
            this.enteringNavbarItems = new Animation(enteringItem.navbarItemElements());
            this.enteringNavbarItems.fadeIn();
            enteringNavbar.add(this.enteringNavbarItems);
          }
          if (leavingItem) {
            this.leavingView = new Animation(leavingItem.viewElement());
            this.leavingView.after.removeClass(SHOW_VIEW_CSS);
            var leavingNavbar = this.leavingNavbar = new Animation(leavingItem.navbarElement());
            leavingNavbar.after.removeClass(SHOW_NAVBAR_CSS);
            var leavingBackButton = this.leavingBackButton = new Animation(leavingItem.backButtonElement());
            leavingBackButton.after.removeClass(SHOW_BACK_BUTTON).fadeOut();
            leavingNavbar.add(leavingBackButton);
            this.leavingTitle = new Animation(leavingItem.titleElement());
            leavingNavbar.add(this.leavingTitle);
            this.leavingNavbarItems = new Animation(leavingItem.navbarItemElements());
            this.leavingNavbarItems.fadeOut();
            leavingNavbar.add(this.leavingNavbarItems);
            this.add(this.leavingView, leavingNavbar);
          }
        }

        _inherits(Transition, _Animation);

        _createClass(Transition, [{
          key: 'viewWidth',
          value: function viewWidth() {
            return this._w || (this._w = this.leaving && this.leaving.viewElement().offsetWidth);
          }
        }], [{
          key: 'create',
          value: function create(nav) {
            var opts = arguments[1] === undefined ? {} : arguments[1];

            var name = opts.animation || IonicConfig.global.setting('viewTransition');
            var TransitionClass = TransitionRegistry[name];
            if (!TransitionClass) {
              TransitionClass = Transition;
            }
            return new TransitionClass(nav, opts);
          }
        }, {
          key: 'register',
          value: function register(name, TransitionClass) {
            TransitionRegistry[name] = TransitionClass;
          }
        }]);

        return Transition;
      })(Animation);

      _export('Transition', Transition);
    }
  };
});
System.register('ionic/util/click-block', [], function (_export) {
  'use strict';

  var CSS_CLICK_BLOCK, DEFAULT_EXPIRE, cbEle, fallbackTimerId, isShowing, ClickBlock;

  function show(expire) {
    clearTimeout(fallbackTimerId);
    fallbackTimerId = setTimeout(hide, expire || DEFAULT_EXPIRE);
    if (!isShowing) {
      isShowing = true;
      if (cbEle) {
        cbEle.classList.add(CSS_CLICK_BLOCK);
      } else {
        cbEle = document.createElement('div');
        cbEle.className = 'click-block ' + CSS_CLICK_BLOCK;
        document.body.appendChild(cbEle);
      }
    }
  }
  function hide() {
    clearTimeout(fallbackTimerId);
    if (isShowing) {
      cbEle.classList.remove(CSS_CLICK_BLOCK);
      isShowing = false;
    }
  }
  return {
    setters: [],
    execute: function () {
      CSS_CLICK_BLOCK = 'click-block-active';
      DEFAULT_EXPIRE = 330;
      cbEle = undefined;
      fallbackTimerId = undefined;
      isShowing = false;

      ClickBlock = function ClickBlock(shouldShow, expire) {
        (shouldShow ? show : hide)(expire);
      };

      _export('ClickBlock', ClickBlock);
    }
  };
});
System.register('ionic/util/dom', ['angular2/src/facade/async'], function (_export) {
  'use strict';

  var Promise, nativeRaf, nativeCancelRaf, raf, rafCancel, CSS;

  _export('rafPromise', rafPromise);

  _export('transitionEnd', transitionEnd);

  _export('animationStart', animationStart);

  _export('animationEnd', animationEnd);

  _export('ready', ready);

  _export('windowLoad', windowLoad);

  function rafPromise() {
    return new Promise(function (resolve) {
      return raf(resolve);
    });
  }

  function transitionEnd(el) {
    return cssPromise(el, CSS.transitionEnd);
  }

  function animationStart(el, animationName) {
    return cssPromise(el, CSS.animationStart, animationName);
  }

  function animationEnd(el, animationName) {
    return cssPromise(el, CSS.animationEnd, animationName);
  }

  function cssPromise(el, eventNames, animationName) {
    return new Promise(function (resolve) {
      eventNames.split(' ').forEach(function (eventName) {
        el.addEventListener(eventName, onEvent);
      });
      function onEvent(ev) {
        if (ev.animationName && animationName) {
          if (ev.animationName !== animationName) {
            return;
          }
        } else if (ev.target !== el) {
          return;
        }
        ev.stopPropagation();
        eventNames.split(' ').forEach(function (eventName) {
          el.removeEventListener(eventName, onEvent);
        });
        resolve(ev);
      }
    });
  }

  function ready(callback) {
    var promise = null;
    if (!callback) {
      promise = new Promise(function (resolve) {
        callback = resolve;
      });
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      callback();
    } else {
      (function () {
        var completed = function () {
          document.removeEventListener('DOMContentLoaded', completed, false);
          window.removeEventListener('load', completed, false);
          callback();
        };

        document.addEventListener('DOMContentLoaded', completed, false);
        window.addEventListener('load', completed, false);
      })();
    }
    return promise;
  }

  function windowLoad(callback) {
    var promise = null;
    if (!callback) {
      promise = new Promise(function (resolve) {
        callback = resolve;
      });
    }
    if (document.readyState === 'complete') {
      callback();
    } else {
      (function () {
        var completed = function () {
          window.removeEventListener('load', completed, false);
          callback();
        };

        window.addEventListener('load', completed, false);
      })();
    }
    return promise;
  }

  return {
    setters: [function (_angular2SrcFacadeAsync) {
      Promise = _angular2SrcFacadeAsync.Promise;
    }],
    execute: function () {
      nativeRaf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      nativeCancelRaf = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame;

      raf = nativeRaf || function (callback) {
        var timeCurrent = new Date().getTime(),
            timeDelta = undefined;
        timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
        timeLast = timeCurrent + timeDelta;
        return setTimeout(function () {
          callback(timeCurrent + timeDelta);
        }, timeDelta);
      };

      _export('raf', raf);

      rafCancel = nativeRaf ? nativeCancelRaf : function (id) {
        return window.cancelTimeout(id);
      };

      _export('rafCancel', rafCancel);

      CSS = {};

      _export('CSS', CSS);

      (function () {
        var i,
            keys = ['webkitTransform', 'transform', '-webkit-transform', 'webkit-transform', '-moz-transform', 'moz-transform', 'MozTransform', 'mozTransform', 'msTransform'];
        for (i = 0; i < keys.length; i++) {
          if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transform = keys[i];
            break;
          }
        }
        keys = ['webkitTransition', 'mozTransition', 'msTransition', 'transition'];
        for (i = 0; i < keys.length; i++) {
          if (document.documentElement.style[keys[i]] !== undefined) {
            CSS.transition = keys[i];
            break;
          }
        }
        var isWebkit = CSS.transition.indexOf('webkit') > -1;
        CSS.prefix = isWebkit ? '-webkit-' : '';
        CSS.transitionDuration = (isWebkit ? '-webkit-' : '') + 'transition-duration';
        CSS.transitionEnd = (isWebkit ? 'webkitTransitionEnd ' : '') + 'transitionend';
      })();
      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        CSS.animation = 'WebkitAnimation';
        CSS.animationStart = 'webkitAnimationStart animationstart';
        CSS.animationEnd = 'webkitAnimationEnd animationend';
      } else {
        CSS.animation = 'animation';
        CSS.animationStart = 'animationstart';
        CSS.animationEnd = 'animationend';
      }

      Object.defineProperty(transitionEnd, 'parameters', { get: function get() {
          return [[Element]];
        } });

      Object.defineProperty(animationStart, 'parameters', { get: function get() {
          return [[Element], []];
        } });

      Object.defineProperty(animationEnd, 'parameters', { get: function get() {
          return [[Element], []];
        } });Object.defineProperty(cssPromise, 'parameters', { get: function get() {
          return [[Element], [], []];
        } });
    }
  };
});
System.register('ionic/util/focus', ['./dom'], function (_export) {
  'use strict';

  var raf, ready, isKeyInputEnabled;

  function keyDown(ev) {
    if (!isKeyInputEnabled && ev.keyCode == 9) {
      isKeyInputEnabled = true;
      raf(enableKeyInput);
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
    raf(enableKeyInput);
  }
  return {
    setters: [function (_dom) {
      raf = _dom.raf;
      ready = _dom.ready;
    }],
    execute: function () {
      isKeyInputEnabled = false;
      ready().then(function () {
        document.addEventListener('keydown', keyDown);
      });
    }
  };
});
System.register('ionic/util/tap', ['./dom', '../platform/platform'], function (_export) {
  'use strict';

  var dom, Platform, tapDoc, tapActiveEle, tapEnabledTouchEvents, tapMouseResetTimer, tapPointerMoved, tapPointerStart, tapTouchFocusedInput, tapLastTouchTarget, tapTouchMoveListener, TAP_RELEASE_TOLERANCE, TAP_RELEASE_BUTTON_TOLERANCE, tapEventListeners, Tap;

  function tapEventListener(type, enable, useCapture) {
    if (enable !== false) {
      tapDoc.addEventListener(type, tapEventListeners[type], useCapture);
    } else {
      tapDoc.removeEventListener(type, tapEventListeners[type]);
    }
  }
  function tapClick(e) {
    var container = tapContainingElement(e.target);
    var ele = tapTargetElement(container);
    if (Tap.requiresNativeClick(ele) || tapPointerMoved) return false;
    var c = Tap.pointerCoord(e);
    triggerMouseEvent('click', ele, c.x, c.y);
    tapHandleFocus(ele);
  }
  function triggerMouseEvent(type, ele, x, y) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(type, true, true, window, 1, 0, 0, x, y, false, false, false, false, 0, null);
    clickEvent.isIonicTap = true;
    ele.dispatchEvent(clickEvent);
  }
  function tapClickGateKeeper(e) {
    if (e.target.type == 'submit' && e.detail === 0) {
      return null;
    }
    if (!e.isIonicTap && !Tap.requiresNativeClick(e.target)) {
      e.stopPropagation();
      if (!Tap.isLabelWithTextInput(e.target)) {
        e.preventDefault();
      }
      return false;
    }
  }
  function tapMouseDown(e) {
    if (e.isIonicTap || tapIgnoreEvent(e)) return null;
    if (tapEnabledTouchEvents) {
      console.log('mousedown', 'stop event');
      e.stopPropagation();
      if ((!Tap.isTextInput(e.target) || tapLastTouchTarget !== e.target) && !/^(select|option)$/i.test(e.target.tagName)) {
        e.preventDefault();
      }
      return false;
    }
    tapPointerMoved = false;
    tapPointerStart = Tap.pointerCoord(e);
    tapEventListener('mousemove');
  }
  function tapMouseUp(e) {
    if (tapEnabledTouchEvents) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
    if (tapIgnoreEvent(e) || /^(select|option)$/i.test(e.target.tagName)) return false;
    if (!tapHasPointerMoved(e)) {
      tapClick(e);
    }
    tapEventListener('mousemove', false);
    tapPointerMoved = false;
  }
  function tapMouseMove(e) {
    if (tapHasPointerMoved(e)) {
      tapEventListener('mousemove', false);
      tapPointerMoved = true;
      return false;
    }
  }
  function tapTouchStart(e) {
    if (tapIgnoreEvent(e)) return;
    tapPointerMoved = false;
    tapEnableTouchEvents();
    tapPointerStart = Tap.pointerCoord(e);
    tapEventListener(tapTouchMoveListener);
    if (Tap.isLabelWithTextInput(e.target)) {
      var textInput = tapTargetElement(tapContainingElement(e.target));
      if (textInput !== tapActiveEle) {
        e.preventDefault();
      }
    }
  }
  function tapTouchEnd(e) {
    if (tapIgnoreEvent(e)) return;
    tapEnableTouchEvents();
    if (!tapHasPointerMoved(e)) {
      tapClick(e);
      if (/^(select|option)$/i.test(e.target.tagName)) {
        e.preventDefault();
      }
    }
    tapLastTouchTarget = e.target;
    tapTouchCancel();
  }
  function tapTouchMove(e) {
    if (tapHasPointerMoved(e)) {
      tapPointerMoved = true;
      tapEventListener(tapTouchMoveListener, false);
      return false;
    }
  }
  function tapTouchCancel() {
    tapEventListener(tapTouchMoveListener, false);
    tapPointerMoved = false;
  }
  function tapEnableTouchEvents() {
    tapEnabledTouchEvents = true;
    clearTimeout(tapMouseResetTimer);
    tapMouseResetTimer = setTimeout(function () {
      tapEnabledTouchEvents = false;
    }, 600);
  }
  function tapIgnoreEvent(e) {
    if (e.isTapHandled) return true;
    e.isTapHandled = true;
    if (Tap.containsOrIsTextInput(e.target)) {
      e.preventDefault();
      return true;
    }
  }
  function tapHandleFocus(ele) {
    tapTouchFocusedInput = null;
    var triggerFocusIn = false;
    if (ele.tagName == 'SELECT') {
      triggerMouseEvent('mousedown', ele, 0, 0);
      ele.focus && ele.focus();
      triggerFocusIn = true;
    } else if (tapActiveElement() === ele) {
      triggerFocusIn = true;
    } else if (/^(input|textarea)$/i.test(ele.tagName) || ele.isContentEditable) {
      triggerFocusIn = true;
      ele.focus && ele.focus();
      ele.value = ele.value;
      if (tapEnabledTouchEvents) {
        tapTouchFocusedInput = ele;
      }
    } else {
      tapFocusOutActive();
    }
    if (triggerFocusIn) {
      tapActiveElement(ele);
    }
  }
  function tapFocusOutActive() {
    var ele = tapActiveElement();
    if (ele && (/^(input|textarea|select)$/i.test(ele.tagName) || ele.isContentEditable)) {
      console.log('tapFocusOutActive', ele.tagName);
      ele.blur();
    }
    tapActiveElement(null);
  }
  function tapFocusIn(e) {
    if (tapEnabledTouchEvents && Tap.isTextInput(tapActiveElement()) && Tap.isTextInput(tapTouchFocusedInput) && tapTouchFocusedInput !== e.target) {
      console.log('focusin', 'tapTouchFocusedInput');
      tapTouchFocusedInput.focus();
      tapTouchFocusedInput = null;
    }
  }
  function tapFocusOut() {
    tapActiveElement(null);
  }
  function tapActiveElement(ele) {
    if (arguments.length) {
      tapActiveEle = ele;
    }
    return tapActiveEle || document.activeElement;
  }
  function tapHasPointerMoved(endEvent) {
    if (!endEvent || endEvent.target.nodeType !== 1 || !tapPointerStart || tapPointerStart.x === 0 && tapPointerStart.y === 0) {
      return false;
    }
    var endCoordinates = Tap.pointerCoord(endEvent);
    var hasClassList = !!(endEvent.target.classList && endEvent.target.classList.contains && typeof endEvent.target.classList.contains === 'function');
    var releaseTolerance = hasClassList && endEvent.target.classList.contains('button') ? TAP_RELEASE_BUTTON_TOLERANCE : TAP_RELEASE_TOLERANCE;
    return Math.abs(tapPointerStart.x - endCoordinates.x) > releaseTolerance || Math.abs(tapPointerStart.y - endCoordinates.y) > releaseTolerance;
  }
  function tapContainingElement(ele, allowSelf) {
    var climbEle = ele;
    for (var x = 0; x < 6; x++) {
      if (!climbEle) break;
      if (climbEle.tagName === 'LABEL') return climbEle;
      climbEle = climbEle.parentElement;
    }
    if (allowSelf !== false) return ele;
  }
  function tapTargetElement(ele) {
    if (ele && ele.tagName === 'LABEL') {
      if (ele.control) return ele.control;
      if (ele.querySelector) {
        var control = ele.querySelector('input,textarea,select');
        if (control) return control;
      }
    }
    return ele;
  }
  return {
    setters: [function (_dom) {
      dom = _dom.dom;
    }, function (_platformPlatform) {
      Platform = _platformPlatform.Platform;
    }],
    execute: function () {
      tapTouchMoveListener = 'touchmove';
      TAP_RELEASE_TOLERANCE = 12;
      TAP_RELEASE_BUTTON_TOLERANCE = 50;
      tapEventListeners = {
        'click': tapClickGateKeeper,
        'mousedown': tapMouseDown,
        'mouseup': tapMouseUp,
        'mousemove': tapMouseMove,
        'touchstart': tapTouchStart,
        'touchend': tapTouchEnd,
        'touchcancel': tapTouchCancel,
        'touchmove': tapTouchMove,
        'focusin': tapFocusIn,
        'focusout': tapFocusOut
      };

      Platform.ready().then(function (config) {
        if (config.setting('tapPolyfill')) {
          console.log('Tap.register, tapPolyfill');
          Tap.register(document);
        }
      });
      Tap = {
        register: function register(ele) {
          tapDoc = ele;
          tapEventListener('click', true, true);
          tapEventListener('mouseup');
          tapEventListener('mousedown');
          tapEventListener('touchstart');
          tapEventListener('touchend');
          tapEventListener('touchcancel');
          tapEventListener('focusin');
          tapEventListener('focusout');
          return function () {
            for (var type in tapEventListeners) {
              tapEventListener(type, false);
            }
            tapDoc = null;
            tapActiveEle = null;
            tapEnabledTouchEvents = false;
            tapPointerMoved = false;
            tapPointerStart = null;
          };
        },
        ignoreScrollStart: function ignoreScrollStart(e) {
          return e.defaultPrevented || /^(file|range)$/i.test(e.target.type) || (e.target.dataset ? e.target.dataset.preventScroll : e.target.getAttribute('data-prevent-scroll')) == 'true' || !!/^(object|embed)$/i.test(e.target.tagName) || Tap.isElementTapDisabled(e.target);
        },
        isTextInput: function isTextInput(ele) {
          return !!ele && (ele.tagName == 'TEXTAREA' || ele.contentEditable === 'true' || ele.tagName == 'INPUT' && !/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(ele.type));
        },
        isDateInput: function isDateInput(ele) {
          return !!ele && (ele.tagName == 'INPUT' && /^(date|time|datetime-local|month|week)$/i.test(ele.type));
        },
        isKeyboardElement: function isKeyboardElement(ele) {
          if (Platform.isDevice('ipad')) {
            return Tap.isTextInput(ele) && !Tap.isDateInput(ele);
          } else {
            return Tap.isTextInput(ele) || !!ele && ele.tagName == 'SELECT';
          }
        },
        isLabelWithTextInput: function isLabelWithTextInput(ele) {
          var container = tapContainingElement(ele, false);
          return !!container && Tap.isTextInput(tapTargetElement(container));
        },
        containsOrIsTextInput: function containsOrIsTextInput(ele) {
          return Tap.isTextInput(ele) || Tap.isLabelWithTextInput(ele);
        },
        cloneFocusedInput: function cloneFocusedInput(container) {
          if (Tap.hasCheckedClone) return;
          Tap.hasCheckedClone = true;
          dom.raf(function () {
            var focusInput = container.querySelector(':focus');
            if (Tap.isTextInput(focusInput)) {
              var clonedInput = focusInput.cloneNode(true);
              clonedInput.value = focusInput.value;
              clonedInput.classList.add('cloned-text-input');
              clonedInput.readOnly = true;
              if (focusInput.isContentEditable) {
                clonedInput.contentEditable = focusInput.contentEditable;
                clonedInput.innerHTML = focusInput.innerHTML;
              }
              focusInput.parentElement.insertBefore(clonedInput, focusInput);
              focusInput.classList.add('previous-input-focus');
              clonedInput.scrollTop = focusInput.scrollTop;
            }
          });
        },
        hasCheckedClone: false,
        removeClonedInputs: function removeClonedInputs(container) {
          Tap.hasCheckedClone = false;
          dom.raf(function () {
            var clonedInputs = container.querySelectorAll('.cloned-text-input');
            var previousInputFocus = container.querySelectorAll('.previous-input-focus');
            var x;
            for (x = 0; x < clonedInputs.length; x++) {
              clonedInputs[x].parentElement.removeChild(clonedInputs[x]);
            }
            for (x = 0; x < previousInputFocus.length; x++) {
              previousInputFocus[x].classList.remove('previous-input-focus');
              previousInputFocus[x].style.top = '';
            }
          });
        },
        requiresNativeClick: function requiresNativeClick(ele) {
          if (!ele || ele.disabled || /^(file|range)$/i.test(ele.type) || /^(object|video)$/i.test(ele.tagName) || Tap.isLabelContainingFileInput(ele)) {
            return true;
          }
          return Tap.isElementTapDisabled(ele);
        },
        isLabelContainingFileInput: function isLabelContainingFileInput(ele) {
          var lbl = tapContainingElement(ele);
          if (lbl.tagName !== 'LABEL') return false;
          var fileInput = lbl.querySelector('input[type=file]');
          if (fileInput && fileInput.disabled === false) return true;
          return false;
        },
        isElementTapDisabled: function isElementTapDisabled(ele) {
          if (ele && ele.nodeType === 1) {
            var element = ele;
            while (element) {
              if ((element.dataset ? element.dataset.tapDisabled : element.getAttribute('data-tap-disabled')) == 'true') {
                return true;
              }
              element = element.parentElement;
            }
          }
          return false;
        },
        setTolerance: function setTolerance(releaseTolerance, releaseButtonTolerance) {
          TAP_RELEASE_TOLERANCE = releaseTolerance;
          TAP_RELEASE_BUTTON_TOLERANCE = releaseButtonTolerance;
        },
        cancelClick: function cancelClick() {
          tapPointerMoved = true;
        },
        pointerCoord: function pointerCoord(event) {
          var c = {
            x: 0,
            y: 0
          };
          if (event) {
            var touches = event.touches && event.touches.length ? event.touches : [event];
            var e = event.changedTouches && event.changedTouches[0] || touches[0];
            if (e) {
              c.x = e.clientX || e.pageX || 0;
              c.y = e.clientY || e.pageY || 0;
            }
          }
          return c;
        }
      };

      _export('Tap', Tap);
    }
  };
});
System.register('ionic/util/util', [], function (_export) {
  'use strict';

  var isString, isNumber, isFunction, isDefined, isUndefined, isBlank, isObject, isArray, uid, Log, array;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  _export('noop', noop);

  _export('clamp', clamp);

  _export('extend', extend);

  _export('merge', merge);

  _export('defaults', defaults);

  _export('pascalCaseToDashCase', pascalCaseToDashCase);

  _export('nextUid', nextUid);

  _export('getQuerystring', getQuerystring);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function noop() {}

  function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
  }

  function extend(dst) {
    return _baseExtend(dst, [].slice.call(arguments, 1), false);
  }

  function merge(dst) {
    return _baseExtend(dst, [].slice.call(arguments, 1), true);
  }

  function _baseExtend(dst, objs, deep) {
    for (var i = 0, ii = objs.length; i < ii; ++i) {
      var obj = objs[i];
      if (!obj || !isObject(obj) && !isFunction(obj)) continue;
      var keys = Object.keys(obj);
      for (var j = 0, jj = keys.length; j < jj; j++) {
        var key = keys[j];
        var src = obj[key];
        if (deep && isObject(src)) {
          if (!isObject(dst[key])) dst[key] = isArray(src) ? [] : {};
          _baseExtend(dst[key], [src], true);
        } else {
          dst[key] = src;
        }
      }
    }
    return dst;
  }

  function defaults(dest) {
    for (var i = arguments.length - 1; i >= 1; i--) {
      var source = arguments[i] || {};
      for (var key in source) {
        if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
    return dest;
  }

  function pascalCaseToDashCase() {
    var str = arguments[0] === undefined ? '' : arguments[0];

    return str.charAt(0).toLowerCase() + str.substring(1).replace(/[A-Z]/g, function (match) {
      return '-' + match.toLowerCase();
    });
  }

  function nextUid() {
    return ++uid;
  }

  function getQuerystring(url, key) {
    var queryParams = {};
    if (url) {
      var startIndex = url.indexOf('?');
      if (startIndex !== -1) {
        var queries = url.slice(startIndex + 1).split('&');
        if (queries.length) {
          queries.forEach(function (param) {
            var split = param.split('=');
            queryParams[split[0]] = split[1];
          });
        }
      }
      if (key) {
        return queryParams[key] || '';
      }
    }
    return queryParams;
  }

  return {
    setters: [],
    execute: function () {
      ;

      isString = function isString(val) {
        return typeof val === 'string';
      };

      _export('isString', isString);

      isNumber = function isNumber(val) {
        return typeof val === 'number';
      };

      _export('isNumber', isNumber);

      isFunction = function isFunction(val) {
        return typeof val === 'function';
      };

      _export('isFunction', isFunction);

      isDefined = function isDefined(val) {
        return typeof val !== 'undefined';
      };

      _export('isDefined', isDefined);

      isUndefined = function isUndefined(val) {
        return typeof val === 'undefined';
      };

      _export('isUndefined', isUndefined);

      isBlank = function isBlank(val) {
        return val === undefined || val === null;
      };

      _export('isBlank', isBlank);

      isObject = function isObject(val) {
        return typeof val === 'object';
      };

      _export('isObject', isObject);

      isArray = Array.isArray;

      _export('isArray', isArray);

      uid = 0;

      Log = (function () {
        function Log() {
          _classCallCheck(this, Log);
        }

        _createClass(Log, null, [{
          key: 'log',
          value: function log() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            console.log.apply(console, args);
          }
        }, {
          key: 'info',
          value: function info() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            console.info.apply(console, args);
          }
        }, {
          key: 'warn',
          value: function warn() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            console.warn.apply(console, args);
          }
        }, {
          key: 'error',
          value: function error() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            console.error.apply(console, args);
          }
        }]);

        return Log;
      })();

      _export('Log', Log);

      array = {
        find: function find(arr, cb) {
          for (var i = 0, ii = arr.length; i < ii; i++) {
            if (cb(arr[i], i)) return arr[i];
          }
        },
        remove: function remove(arr, itemOrIndex) {
          var index = -1;
          if (isNumber(itemOrIndex)) {
            index = itemOrIndex;
          } else {
            index = arr.indexOf(itemOrIndex);
          }
          if (index < 0) {
            return false;
          }
          arr.splice(index, 1);
          return true;
        }
      };

      _export('array', array);
    }
  };
});
System.register('ionic/engine/cordova/cordova', ['../engine'], function (_export) {
  'use strict';

  var Engine;
  return {
    setters: [function (_engine) {
      Engine = _engine.Engine;
    }],
    execute: function () {
      Engine.register({
        name: 'cordova',
        isMatch: function isMatch() {
          return !(!window.cordova && !window.PhoneGap && !window.phonegap);
        },
        ready: function ready() {
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        },
        fullScreen: function fullScreen(shouldShow) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(shouldShow);
            }, 1000);
          });
        },
        showStatusBar: function showStatusBar(shouldShow) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(shouldShow);
            }, 1000);
          });
        },
        exitApp: function exitApp() {
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        }
      });
    }
  };
});
System.register('ionic/engine/electron/electron', ['ionic/util', '../engine'], function (_export) {
  'use strict';

  var util, Engine;
  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_engine) {
      Engine = _engine.Engine;
    }],
    execute: function () {
      Engine.register({
        name: 'electron',
        isMatch: function isMatch() {
          try {
            return util.isDefined(process) && util.isDefined(require) && util.isDefined(require('nw.gui'));
          } catch (e) {}
          return false;
        },
        ready: function ready() {
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        },
        fullScreen: function fullScreen(shouldShow) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(shouldShow);
            }, 1000);
          });
        },
        showStatusBar: function showStatusBar(shouldShow) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(shouldShow);
            }, 1000);
          });
        },
        exitApp: function exitApp() {
          return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
          });
        }
      });
    }
  };
});
System.register("ionic/components/alert/alert", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});

/*
@Component({
  selector: 'ion-alert'
})
@NgView({
  template: `
    <div class="overlay-backdrop"></div>
    <div class="overlay-container">
      <div class="alert-container">
        <div class="alert-header">
          Do you like cookies?
        </div>
        <div class="alert-content">
          Seriously, who does not like cookies.
        </div>
        <div class="alert-actions">
          <button primary>OK</button>
        </div>
      </div>
    </div>`
})
export class Alert {}
*/
System.register('ionic/components/action-menu/action-menu', ['angular2/angular2', 'angular2/src/core/annotations_impl/view', 'angular2/di', 'ionic/ionic', '../app/app', 'ionic/util', '../overlay/overlay', '../../config/annotations', 'ionic/animations/animation'], function (_export) {
  'use strict';

  var NgIf, NgFor, View, Injectable, Icon, IonicApp, util, Overlay, IonicComponent, Animation, ActionMenu, OVERLAY_TYPE, ActionMenuAnimation, ActionMenuSlideIn, ActionMenuSlideOut;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Angular2) {
      NgIf = _angular2Angular2.NgIf;
      NgFor = _angular2Angular2.NgFor;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Di) {
      Injectable = _angular2Di.Injectable;
    }, function (_ionicIonic) {
      Icon = _ionicIonic.Icon;
    }, function (_appApp) {
      IonicApp = _appApp.IonicApp;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }, function (_overlayOverlay) {
      Overlay = _overlayOverlay.Overlay;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
    }, function (_ionicAnimationsAnimation) {
      Animation = _ionicAnimationsAnimation.Animation;
    }],
    execute: function () {
      ActionMenu = (function (_Overlay) {
        function ActionMenu(app) {
          _classCallCheck(this, ActionMenu);

          _get(Object.getPrototypeOf(ActionMenu.prototype), 'constructor', this).call(this, app);
          this.extendOptions({
            destructiveButtonClicked: util.noop,
            buttonClicked: util.noop,
            cancel: util.noop,
            enterAnimation: 'action-menu-slide-in',
            leaveAnimation: 'action-menu-slide-out'
          });
        }

        _inherits(ActionMenu, _Overlay);

        _createClass(ActionMenu, [{
          key: 'cancel',
          value: function cancel() {
            this.options.cancel();
            this.close();
          }
        }, {
          key: '_destructiveButtonClicked',
          value: function _destructiveButtonClicked() {
            var shouldClose = this.options.destructiveButtonClicked();
            if (shouldClose === true) {
              return this.close();
            }
          }
        }, {
          key: '_buttonClicked',
          value: function _buttonClicked(index) {
            var shouldClose = this.options.buttonClicked(index);
            if (shouldClose === true) {
              return this.close();
            }
          }
        }, {
          key: 'open',
          value: function open(opts) {
            return this.create(OVERLAY_TYPE, ActionMenu, opts);
          }
        }, {
          key: 'get',
          value: function get() {
            return Modal.getByType(OVERLAY_TYPE);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-action-menu',
              host: { '[style.z-index]': 'zIndex' }
            };
          }
        }]);

        return ActionMenu;
      })(Overlay);

      _export('ActionMenu', ActionMenu);

      Object.defineProperty(ActionMenu, 'annotations', { get: function get() {
          return [new IonicComponent(ActionMenu), new View({
            template: '\n    <div class="action-menu-backdrop" (click)="cancel()"></div>\n    <div class="action-menu-wrapper">\n      <div class="action-menu-container">\n        <div class="action-menu-group action-menu-options">\n          <div class="action-menu-title" *ng-if="options.titleText">{{options.titleText}}</div>\n          <button (click)="_buttonClicked(index)" *ng-for="#b of options.buttons; #index = index" class="action-menu-option">{{b.text}}</button>\n          <button *ng-if="options.destructiveText" (click)="_destructiveButtonClicked()" class="destructive action-menu-destructive">{{options.destructiveText}}</button>\n        </div>\n        <div class="action-menu-group action-menu-cancel" *ng-if="options.cancelText">\n          <button (click)="cancel()">{{options.cancelText}}</button>\n        </div>\n      </div>\n    </div>',
            directives: [Icon, NgIf, NgFor]
          }), new Injectable()];
        } });
      Object.defineProperty(ActionMenu, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
      OVERLAY_TYPE = 'actionmenu';

      ActionMenuAnimation = (function (_Animation) {
        function ActionMenuAnimation(element) {
          _classCallCheck(this, ActionMenuAnimation);

          _get(Object.getPrototypeOf(ActionMenuAnimation.prototype), 'constructor', this).call(this, element);
          this.easing('cubic-bezier(.36, .66, .04, 1)').duration(400);
          this.backdrop = new Animation(element.querySelector('.action-menu-backdrop'));
          this.wrapper = new Animation(element.querySelector('.action-menu-wrapper'));
          this.add(this.backdrop, this.wrapper);
        }

        _inherits(ActionMenuAnimation, _Animation);

        return ActionMenuAnimation;
      })(Animation);

      ActionMenuSlideIn = (function (_ActionMenuAnimation) {
        function ActionMenuSlideIn(element) {
          _classCallCheck(this, ActionMenuSlideIn);

          _get(Object.getPrototypeOf(ActionMenuSlideIn.prototype), 'constructor', this).call(this, element);
          this.backdrop.fromTo('opacity', 0, 0.4);
          this.wrapper.fromTo('translateY', '100%', '0%');
        }

        _inherits(ActionMenuSlideIn, _ActionMenuAnimation);

        return ActionMenuSlideIn;
      })(ActionMenuAnimation);

      Animation.register('action-menu-slide-in', ActionMenuSlideIn);

      ActionMenuSlideOut = (function (_ActionMenuAnimation2) {
        function ActionMenuSlideOut(element) {
          _classCallCheck(this, ActionMenuSlideOut);

          _get(Object.getPrototypeOf(ActionMenuSlideOut.prototype), 'constructor', this).call(this, element);
          this.backdrop.fromTo('opacity', 0.4, 0);
          this.wrapper.fromTo('translateY', '0%', '100%');
        }

        _inherits(ActionMenuSlideOut, _ActionMenuAnimation2);

        return ActionMenuSlideOut;
      })(ActionMenuAnimation);

      Animation.register('action-menu-slide-out', ActionMenuSlideOut);
    }
  };
});
System.register('ionic/components/app/app', ['angular2/angular2', 'angular2/src/core/compiler/view_manager', 'angular2/src/core/compiler/element_ref', 'angular2/di', 'angular2/src/core/compiler/view_container_ref', 'angular2/src/core/zone/ng_zone', '../../routing/router', '../../config/config', '../../platform/platform', '../../registry', '../../util/util'], function (_export) {
  'use strict';

  var bootstrap, Compiler, AppViewManager, ElementRef, bind, ViewContainerRef, NgZone, IonicRouter, IonicConfig, Platform, Registry, util, IonicApp;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  _export('ionicBootstrap', ionicBootstrap);

  _export('load', load);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function initApp(window, document, config) {
    var app = new IonicApp();
    app.isRTL(document.documentElement.getAttribute('dir') == 'rtl');
    Platform.url(window.location.href);
    Platform.userAgent(window.navigator.userAgent);
    Platform.width(window.innerWidth);
    Platform.height(window.innerHeight);
    Platform.load(config);
    return app;
  }

  function ionicBootstrap(ComponentType, config, router) {
    return new Promise(function (resolve, reject) {
      try {
        (function () {
          config = config || new IonicConfig();
          var app = initApp(window, document, config);
          config.setPlatform(Platform);
          IonicConfig.global = config;
          app.applyCss(document.body, Platform, config);
          Platform.prepareReady(config);
          router = router || new IonicRouter();
          router.app(app);
          app.router = router;
          var injectableBindings = [bind(IonicApp).toValue(app), bind(IonicConfig).toValue(config), bind(IonicRouter).toValue(router)];
          bootstrap(ComponentType, injectableBindings).then(function (appRef) {
            app.load(appRef);
            router.init();
            resolve(app);
          })['catch'](function (err) {
            console.error('ionicBootstrap', err);
            reject(err);
          });
        })();
      } catch (err) {
        console.error('ionicBootstrap', err);
        reject(err);
      }
    });
  }

  function load(app) {
    if (!app) {
      console.error('Invalid app module');
    } else if (!app.main) {
      console.error('App module missing main()');
    } else {
      app.main(ionicBootstrap);
    }
  }

  return {
    setters: [function (_angular2Angular2) {
      bootstrap = _angular2Angular2.bootstrap;
      Compiler = _angular2Angular2.Compiler;
    }, function (_angular2SrcCoreCompilerView_manager) {
      AppViewManager = _angular2SrcCoreCompilerView_manager.AppViewManager;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      bind = _angular2Di.bind;
    }, function (_angular2SrcCoreCompilerView_container_ref) {
      ViewContainerRef = _angular2SrcCoreCompilerView_container_ref.ViewContainerRef;
    }, function (_angular2SrcCoreZoneNg_zone) {
      NgZone = _angular2SrcCoreZoneNg_zone.NgZone;
    }, function (_routingRouter) {
      IonicRouter = _routingRouter.IonicRouter;
    }, function (_configConfig) {
      IonicConfig = _configConfig.IonicConfig;
    }, function (_platformPlatform) {
      Platform = _platformPlatform.Platform;
    }, function (_registry) {
      Registry = _registry.Registry;
    }, function (_utilUtil) {
      util = _utilUtil;
    }],
    execute: function () {
      IonicApp = (function () {
        function IonicApp() {
          _classCallCheck(this, IonicApp);

          this.overlays = [];
          this.components = {};
          this._activeViewId = null;
        }

        _createClass(IonicApp, [{
          key: 'load',
          value: function load(appRef) {
            this.ref(appRef);
            this.zone(this.injector().get(NgZone));
          }
        }, {
          key: 'ref',
          value: function ref(val) {
            if (arguments.length) {
              this._ref = val;
            }
            return this._ref;
          }
        }, {
          key: 'injector',
          value: function injector() {
            return this._ref.injector;
          }
        }, {
          key: 'zone',
          value: function zone(val) {
            if (arguments.length) {
              this._zone = val;
            }
            return this._zone;
          }
        }, {
          key: 'stateChange',
          value: function stateChange(activeView, viewCtrl) {
            if (this._activeViewId !== activeView.id) {
              this.router.stateChange(activeView, viewCtrl);
              this._activeViewId = activeView.id;
            }
          }
        }, {
          key: 'register',
          value: function register(key, component) {
            this.components[key] = component;
            console.log('App: Registered component', key, component);
          }
        }, {
          key: 'getComponent',
          value: function getComponent(key) {
            return this.components[key];
          }
        }, {
          key: 'appendComponent',
          value: function appendComponent(ComponentType) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var injector = _this.injector();
              var compiler = injector.get(Compiler);
              var viewMngr = injector.get(AppViewManager);
              var rootComponentRef = _this._ref._hostComponent;
              var viewContainerLocation = rootComponentRef.location;
              compiler.compileInHost(ComponentType).then(function (protoViewRef) {
                var atIndex = 0;
                var context = null;
                var hostViewRef = viewMngr.createViewInContainer(viewContainerLocation, atIndex, protoViewRef, context, injector);
                hostViewRef.elementRef = new ElementRef(hostViewRef, 0, viewMngr._renderer);
                hostViewRef.instance = viewMngr.getComponent(hostViewRef.elementRef);
                hostViewRef.dispose = function () {
                  viewMngr.destroyViewInContainer(viewContainerLocation, 0, 0, hostViewRef.viewRef);
                };
                resolve(hostViewRef);
              })['catch'](function (err) {
                console.error('IonicApp appendComponent:', err);
                reject(err);
              });
            });
          }
        }, {
          key: 'applyCss',
          value: function applyCss(bodyEle, platform, config) {
            var className = bodyEle.className;
            var versions = platform.versions();
            platform.platforms().forEach(function (platformName) {
              var platformClass = ' platform-' + platformName;
              className += platformClass;
              var platformVersion = versions[platformName];
              if (platformVersion) {
                platformClass += '_' + platformVersion.major;
                className += platformClass + platformClass + '_' + platformVersion.minor;
              }
            });
            className += ' mode-' + config.setting('mode');
            bodyEle.className = className.trim();
          }
        }, {
          key: 'isRTL',
          value: function isRTL(val) {
            if (arguments.length) {
              this._rtl = val;
            }
            return this._rtl;
          }
        }]);

        return IonicApp;
      })();

      _export('IonicApp', IonicApp);

      Object.defineProperty(IonicApp.prototype.appendComponent, 'parameters', { get: function get() {
          return [[Type]];
        } });
    }
  };
});
System.register('ionic/components/aside/aside', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', '../../config/annotations', './extensions/types', './extensions/gestures', 'ionic/util'], function (_export) {
  'use strict';

  var EventEmitter, ElementRef, onInit, View, IonicComponent, types, gestures, dom, Aside;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      EventEmitter = _angular2Angular2.EventEmitter;
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
    }, function (_extensionsTypes) {
      types = _extensionsTypes;
    }, function (_extensionsGestures) {
      gestures = _extensionsGestures;
    }, function (_ionicUtil) {
      dom = _ionicUtil.dom;
    }],
    execute: function () {
      Aside = (function () {
        function Aside(elementRef) {
          var _this = this;

          _classCallCheck(this, Aside);

          this.ele = elementRef.nativeElement;
          this.opening = new EventEmitter('opening');
          this.ele.addEventListener('transitionend', function (ev) {
            _this.setChanging(false);
          });
        }

        _createClass(Aside, [{
          key: 'onInit',
          value: function onInit() {
            this.contentElement = this.content instanceof Node ? this.content : this.content.getNativeElement();
            console.log('Aside content', this.content, this.contentElement);
            Aside.applyConfig(this);
            this.gestureDelegate = Aside.getDelegate(this, 'gesture');
            this.typeDelegate = Aside.getDelegate(this, 'type');
          }
        }, {
          key: 'getContentElement',
          value: function getContentElement() {
            return this.contentElement;
          }
        }, {
          key: 'setOpenAmt',
          value: function setOpenAmt(v) {
            this.opening.next(v);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(transform) {
            this.typeDelegate.setTransform(transform);
          }
        }, {
          key: 'setSliding',
          value: function setSliding(isSliding) {
            if (isSliding !== this.isSliding) {
              this.typeDelegate.setSliding(isSliding);
            }
          }
        }, {
          key: 'setChanging',
          value: function setChanging(isChanging) {
            if (isChanging !== this.isChanging) {
              this.isChanging = isChanging;
              this.ele.classList[isChanging ? 'add' : 'remove']('changing');
            }
          }
        }, {
          key: 'setOpen',
          value: function setOpen(isOpen) {
            var _this2 = this;

            if (isOpen !== this.isOpen) {
              this.isOpen = isOpen;
              this.setChanging(true);
              this.setOpenAmt(isOpen ? 1 : 0);
              return dom.rafPromise().then(function () {
                _this2.typeDelegate.setOpen(isOpen);
              });
            }
          }
        }, {
          key: 'open',
          value: function open() {
            return this.setOpen(true);
          }
        }, {
          key: 'close',
          value: function close() {
            return this.setOpen(false);
          }
        }, {
          key: 'toggle',
          value: function toggle() {
            return this.setOpen(!this.isOpen);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-aside',
              properties: ['content', 'dragThreshold'],
              defaultProperties: {
                'side': 'left',
                'type': 'reveal'
              },
              delegates: {
                gesture: [[function (instance) {
                  return instance.side == 'top';
                }, gestures.TopAsideGesture], [function (instance) {
                  return instance.side == 'bottom';
                }, gestures.BottomAsideGesture], [function (instance) {
                  return instance.side == 'right';
                }, gestures.RightAsideGesture], [function (instance) {
                  return instance.side == 'left';
                }, gestures.LeftAsideGesture]],
                type: [[function (instance) {
                  return instance.type == 'overlay';
                }, types.AsideTypeOverlay], [function (instance) {
                  return instance.type == 'reveal';
                }, types.AsideTypeReveal], [function (instance) {
                  return instance.type == 'push';
                }, types.AsideTypePush]]
              },
              events: ['opening']
            };
          }
        }]);

        return Aside;
      })();

      _export('Aside', Aside);

      Object.defineProperty(Aside, 'annotations', { get: function get() {
          return [new IonicComponent(Aside), new View({ template: '<content></content>' })];
        } });
      Object.defineProperty(Aside, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/aside/config', ['ionic/config/component', 'ionic/components/aside/aside', 'ionic/components/aside/extensions/types', 'ionic/components/aside/extensions/gestures'], function (_export) {
  'use strict';

  var ComponentConfig, Aside, asideTypes, asideGestures, AsideConfig;
  return {
    setters: [function (_ionicConfigComponent) {
      ComponentConfig = _ionicConfigComponent.ComponentConfig;
    }, function (_ionicComponentsAsideAside) {
      Aside = _ionicComponentsAsideAside.Aside;
    }, function (_ionicComponentsAsideExtensionsTypes) {
      asideTypes = _ionicComponentsAsideExtensionsTypes;
    }, function (_ionicComponentsAsideExtensionsGestures) {
      asideGestures = _ionicComponentsAsideExtensionsGestures;
    }],
    execute: function () {
      AsideConfig = new ComponentConfig(Aside);

      _export('AsideConfig', AsideConfig);

      AsideConfig.classes('side', 'type');
      AsideConfig.delegate('gesture').when({ side: 'left' }, gestures.LeftAsideGesture).when({ side: 'right' }, gestures.RightAsideGesture).when({ side: 'top' }, gestures.TopAsideGesture).when({ side: 'bottom' }, gestures.BottomAsideGesture);
      AsideConfig.delegate('type').when({ type: 'overlay' }, types.AsideTypeOverlay).when({ type: 'push' }, types.AsideTypePush).when({ type: 'reveal' }, types.AsideTypeReveal);
      AsideConfig.platform('android').defaults({ type: 'overlay' });
      AsideConfig.platform('ios').defaults({ type: 'reveal' });
    }
  };
});
System.register('ionic/components/checkbox/checkbox', ['angular2/angular2', 'angular2/src/facade/lang', 'angular2/src/forms/directives/shared', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/view', 'angular2/forms', '../../config/annotations', '../icon/icon'], function (_export) {
  'use strict';

  var ElementRef, Renderer, EventEmitter, onChange, onInit, isPresent, setProperty, Component, Directive, Ancestor, View, NgControl, IonicComponent, Icon, Checkbox;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      Renderer = _angular2Angular2.Renderer;
      EventEmitter = _angular2Angular2.EventEmitter;
      onChange = _angular2Angular2.onChange;
      onInit = _angular2Angular2.onInit;
    }, function (_angular2SrcFacadeLang) {
      isPresent = _angular2SrcFacadeLang.isPresent;
    }, function (_angular2SrcFormsDirectivesShared) {
      setProperty = _angular2SrcFormsDirectivesShared.setProperty;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Forms) {
      NgControl = _angular2Forms.NgControl;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
    }, function (_iconIcon) {
      Icon = _iconIcon.Icon;
    }],
    execute: function () {
      Checkbox = (function () {
        function Checkbox(ngControl, renderer, elementRef) {
          _classCallCheck(this, Checkbox);

          this.ngControl = ngControl;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.ngControl.valueAccessor = this;
        }

        _createClass(Checkbox, [{
          key: 'onInit',
          value: function onInit() {
            Checkbox.applyConfig(this);
          }
        }, {
          key: 'writeValue',
          value: function writeValue(value) {
            this.checked = !!value;
          }
        }, {
          key: 'onClick',
          value: function onClick() {
            this.checked = !this.checked;
          }
        }, {
          key: 'registerOnChange',
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: 'registerOnTouched',
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: 'checked',
          set: function (checked) {
            this._checked = checked;
            setProperty(this.renderer, this.elementRef, 'checked', checked);
          },
          get: function () {
            return this._checked;
          }
        }, {
          key: 'ngClassUntouched',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.untouched : false;
          }
        }, {
          key: 'ngClassTouched',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.touched : false;
          }
        }, {
          key: 'ngClassPristine',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.pristine : false;
          }
        }, {
          key: 'ngClassDirty',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.dirty : false;
          }
        }, {
          key: 'ngClassValid',
          get: function () {
            return isPresent(this.ngControl.control) ? this.ngControl.control.valid : false;
          }
        }, {
          key: 'ngClassInvalid',
          get: function () {
            return isPresent(this.ngControl.control) ? !this.ngControl.control.valid : false;
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-checkbox',
              properties: ['checked', 'disabled', 'value'],
              defaultProperties: {
                'iconOff': 'ion-ios-circle-outline',
                'iconOn': 'ion-ios-checkmark'
              },
              host: {
                '(^click)': 'onClick($event)',
                '(blur)': 'onTouched()',
                '[checked]': 'checked',
                '[attr.aria-checked]': 'checked',
                '[attr.aria-disabled]': 'disabled',
                '[attr.value]': 'value',
                'role': 'checkbox',
                'class': 'item',
                '[class.ng-untouched]': 'ngClassUntouched',
                '[class.ng-touched]': 'ngClassTouched',
                '[class.ng-pristine]': 'ngClassPristine',
                '[class.ng-dirty]': 'ngClassDirty',
                '[class.ng-valid]': 'ngClassValid',
                '[class.ng-invalid]': 'ngClassInvalid'
              },
              appInjector: [NgControl]
            };
          }
        }]);

        return Checkbox;
      })();

      _export('Checkbox', Checkbox);

      Object.defineProperty(Checkbox, 'annotations', { get: function get() {
          return [new IonicComponent(Checkbox), new View({
            template: '\n  <div class="item-media media-checkbox">\n    <icon [name]="iconOff" class="checkbox-off"></icon>\n    <icon [name]="iconOn" class="checkbox-on"></icon>\n  </div>\n  <div class="item-content">\n    <div class="item-label">\n      <content></content>\n    </div>\n  </div>',
            directives: [Icon]
          })];
        } });
      Object.defineProperty(Checkbox, 'parameters', { get: function get() {
          return [[NgControl], [Renderer], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/content/content', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', '../ion'], function (_export) {
  'use strict';

  var ElementRef, Component, View, Ion, Content;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ion) {
      Ion = _ion.Ion;
    }],
    execute: function () {
      Content = (function (_Ion) {
        function Content(elementRef) {
          var _this = this;

          _classCallCheck(this, Content);

          _get(Object.getPrototypeOf(Content.prototype), 'constructor', this).call(this, elementRef);
          setTimeout(function () {
            _this.scrollElement = elementRef.nativeElement.children[0];
          });
        }

        _inherits(Content, _Ion);

        _createClass(Content, [{
          key: 'addScrollEventListener',
          value: function addScrollEventListener(handler) {
            var _this2 = this;

            if (!this.scrollElement) {
              return;
            }
            this.scrollElement.addEventListener('scroll', handler);
            return function () {
              _this2.scrollElement.removeEventListener('scroll', handler);
            };
          }
        }]);

        return Content;
      })(Ion);

      _export('Content', Content);

      Object.defineProperty(Content, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-content' }), new View({ template: '<div class="scroll-content"><content></content></div>' })];
        } });
      Object.defineProperty(Content, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});
System.register("ionic/components/form/form", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});
// form
System.register('ionic/components/icon/icon', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/compiler/element_ref'], function (_export) {
  'use strict';

  var Directive, onInit, ElementRef, Icon;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }],
    execute: function () {
      Icon = (function () {
        function Icon(elementRef) {
          _classCallCheck(this, Icon);

          this.ele = elementRef.nativeElement;
        }

        _createClass(Icon, [{
          key: 'onInit',
          value: function onInit() {
            if (this.name) {
              this.ele.classList.add(this.name);
              this.label = this.name;
            }
          }
        }]);

        return Icon;
      })();

      _export('Icon', Icon);

      Object.defineProperty(Icon, 'annotations', { get: function get() {
          return [new Directive({
            selector: 'icon',
            properties: ['name'],
            host: {
              '[attr.aria-label]': 'label',
              'role': 'img'
            },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(Icon, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});
System.register("ionic/components/item/item-options", [], function (_export) {
    "use strict";

    var ItemPrimaryOptions, ItemSecondaryOptions;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            ItemPrimaryOptions = function ItemPrimaryOptions() {
                _classCallCheck(this, ItemPrimaryOptions);
            };

            _export("ItemPrimaryOptions", ItemPrimaryOptions);

            Object.defineProperty(ItemPrimaryOptions, "annotations", { get: function get() {
                    return [new Decorator({ selector: "ion-primary-options" })];
                } });

            ItemSecondaryOptions = function ItemSecondaryOptions() {
                _classCallCheck(this, ItemSecondaryOptions);
            };

            _export("ItemSecondaryOptions", ItemSecondaryOptions);

            Object.defineProperty(ItemSecondaryOptions, "annotations", { get: function get() {
                    return [new Decorator({ selector: "ion-secondary-options" })];
                } });
        }
    };
});
System.register('ionic/components/item/item-swipe-buttons', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'ionic/components/item/item', 'ionic/gestures/slide-gesture'], function (_export) {
  'use strict';

  var ElementRef, Parent, Directive, Item, SlideGesture, ItemPrimarySwipeButtons, ItemSecondarySwipeButtons, ItemSlideGesture;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      Parent = _angular2Angular2.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_ionicComponentsItemItem) {
      Item = _ionicComponentsItemItem.Item;
    }, function (_ionicGesturesSlideGesture) {
      SlideGesture = _ionicGesturesSlideGesture.SlideGesture;
    }],
    execute: function () {
      ItemPrimarySwipeButtons = (function () {
        function ItemPrimarySwipeButtons(elementRef, item) {
          _classCallCheck(this, ItemPrimarySwipeButtons);

          item.primarySwipeButtons = this;
          this.ele = elementRef.nativeElement;
          this.parentItem = item;
          this.gesture = new ItemSlideGesture(this);
          this.gesture.listen();
        }

        _createClass(ItemPrimarySwipeButtons, [{
          key: 'setOpen',
          value: function setOpen(isOpen) {
            var _this = this;

            if (isOpen !== this.isOpen) {
              this.isOpen = isOpen;
              requestAnimationFrame(function () {
                _this.ele.classList[isOpen ? 'add' : 'remove'](isOpen);
              });
            }
          }
        }]);

        return ItemPrimarySwipeButtons;
      })();

      _export('ItemPrimarySwipeButtons', ItemPrimarySwipeButtons);

      Object.defineProperty(ItemPrimarySwipeButtons, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-primary-swipe-buttons' })];
        } });
      Object.defineProperty(ItemPrimarySwipeButtons, 'parameters', { get: function get() {
          return [[ElementRef], [Item, new Parent()]];
        } });

      ItemSecondarySwipeButtons = function ItemSecondarySwipeButtons() {
        _classCallCheck(this, ItemSecondarySwipeButtons);
      };

      _export('ItemSecondarySwipeButtons', ItemSecondarySwipeButtons);

      Object.defineProperty(ItemSecondarySwipeButtons, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-secondary-swipe-buttons' })];
        } });

      ItemSlideGesture = (function (_SlideGesture) {
        function ItemSlideGesture(buttons) {
          _classCallCheck(this, ItemSlideGesture);

          _get(Object.getPrototypeOf(ItemSlideGesture.prototype), 'constructor', this).call(this, buttons.parentItem.ele);
          this.buttons = buttons;
        }

        _inherits(ItemSlideGesture, _SlideGesture);

        _createClass(ItemSlideGesture, [{
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: -this.buttons.ele.offsetWidth,
              max: 0
            };
          }
        }, {
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.buttons.isOpen ? slide.max : slide.min;
          }
        }, {
          key: 'onSlideBeforeStart',
          value: function onSlideBeforeStart() {
            this.buttons.ele.classList.add('changing');
            this.buttons.ele.classList.add('no-transition');
            return new Promise(function (resolve) {
              requestAnimationFrame(resolve);
            });
          }
        }, {
          key: 'onSlide',
          value: function onSlide(slide, ev) {
            this.buttons.ele.style.transform = 'translate3d(' + slide.distance + 'px,0,0)';
          }
        }, {
          key: 'onSlideEnd',
          value: function onSlideEnd(slide, ev) {
            this.buttons.ele.style.transform = '';
            this.buttons.ele.classList.remove('no-transition');
            if (Math.abs(ev.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
              this.buttons.setOpen(!this.buttons.isOpen);
            }
          }
        }]);

        return ItemSlideGesture;
      })(SlideGesture);
    }
  };
});
System.register('ionic/components/item/item', ['angular2/angular2', './item-options', './item-swipe-buttons', '../../config/annotations', 'ionic/util'], function (_export) {
  'use strict';

  var ElementRef, ItemPrimaryOptions, ItemSecondaryOptions, ItemPrimarySwipeButtons, ItemSecondarySwipeButtons, IonicComponent, IonicView, dom, Item, Slideable, ItemSlideGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_itemOptions) {
      ItemPrimaryOptions = _itemOptions.ItemPrimaryOptions;
      ItemSecondaryOptions = _itemOptions.ItemSecondaryOptions;
    }, function (_itemSwipeButtons) {
      ItemPrimarySwipeButtons = _itemSwipeButtons.ItemPrimarySwipeButtons;
      ItemSecondarySwipeButtons = _itemSwipeButtons.ItemSecondarySwipeButtons;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
      IonicView = _configAnnotations.IonicView;
    }, function (_ionicUtil) {
      dom = _ionicUtil.dom;
    }],
    execute: function () {
      Item = (function () {
        function Item(elementRef) {
          _classCallCheck(this, Item);

          this._isOpen = false;
          this._isSlideActive = false;
          this._isTransitioning = false;
          this._transform = '';
          this.ele = elementRef.nativeElement;
          this.swipeButtons = {};
          this.optionButtons = {};
        }

        _createClass(Item, [{
          key: 'onInit',
          value: function onInit() {
            Item.applyConfig(this);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-item',
              properties: []
            };
          }
        }]);

        return Item;
      })();

      _export('Item', Item);

      Object.defineProperty(Item, 'annotations', { get: function get() {
          return [new IonicComponent(Item), new IonicView({ template: '\n    <!--\n    <content select="ion-primary-options"></content>\n    <content select="ion-primary-swipe-buttons"></content>\n    -->\n    <div class="item-content">\n      <div class="item-media">\n      </div>\n      <div class="item-accessory">\n        <!--<content select="ion-item-accessory"></content>-->\n      </div>\n      <div class="item-label">\n        <content></content>\n      </div>\n    </div>\n    <!--\n    <content select="ion-secondary-options"></content>\n    <content select="ion-secondary-swipe-buttons"></content>\n    -->\n  ' })];
        } });
      Object.defineProperty(Item, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });

      Slideable = (function () {
        function Slideable(slideElement) {
          _classCallCheck(this, Slideable);
        }

        _createClass(Slideable, [{
          key: 'onTransform',
          value: function onTransform(str) {}
        }, {
          key: 'onTransitionActive',
          value: function onTransitionActive(active) {}
        }, {
          key: 'onSlideActive',
          value: function onSlideActive(active) {}
        }, {
          key: 'transform',
          value: function transform(str) {
            if (arguments.length && str !== this._transform) {
              this.onTransform();
            }
          }
        }, {
          key: 'isTransitionActive',
          value: function isTransitionActive(active) {
            if (arguments.length && active !== this._isTransitionActive) {
              this._isTransitionActive = active;
              this.onSetTransitionActive(active);
            }
            return this._isTransitioning;
          }
        }, {
          key: 'isSlideActive',
          value: function isSlideActive(active) {
            if (arguments.length && active !== this._isSlideActive) {
              this._isSlideActive = active;
              this.onSetDragActive(active);
            }
            return this._isSlideActive;
          }
        }, {
          key: 'isOpen',
          value: (function (_isOpen) {
            function isOpen(_x) {
              return _isOpen.apply(this, arguments);
            }

            isOpen.toString = function () {
              return _isOpen.toString();
            };

            return isOpen;
          })(function (open) {
            var _this = this;

            if (arguments.length && open !== this._isOpen) {
              this.isTransitionActive(true);
              dom.raf(function () {
                _this.isOpen = isOpen;
                _this.onSetIsOpen(open);
              });
            }
          })
        }]);

        return Slideable;
      })();

      Object.defineProperty(Slideable, 'parameters', { get: function get() {
          return [[Element]];
        } });
      Object.defineProperty(Slideable.prototype.onTransform, 'parameters', { get: function get() {
          return [[String]];
        } });
      Object.defineProperty(Slideable.prototype.onTransitionActive, 'parameters', { get: function get() {
          return [[Boolean]];
        } });
      Object.defineProperty(Slideable.prototype.onSlideActive, 'parameters', { get: function get() {
          return [[boolean]];
        } });
      Object.defineProperty(Slideable.prototype.transform, 'parameters', { get: function get() {
          return [[String]];
        } });
      Object.defineProperty(Slideable.prototype.isTransitionActive, 'parameters', { get: function get() {
          return [[Boolean]];
        } });
      Object.defineProperty(Slideable.prototype.isSlideActive, 'parameters', { get: function get() {
          return [[Boolean]];
        } });
      Object.defineProperty(Slideable.prototype.isOpen, 'parameters', { get: function get() {
          return [[Boolean]];
        } });

      ItemSlideGesture = function ItemSlideGesture() {
        _classCallCheck(this, ItemSlideGesture);
      };
    }
  };
});
System.register('ionic/components/layout/layout', ['angular2/angular2'], function (_export) {
  'use strict';

  var ElementRef, Component, View, Parent, Layout;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      Component = _angular2Angular2.Component;
      View = _angular2Angular2.View;
      Parent = _angular2Angular2.Parent;
    }],
    execute: function () {
      Layout = (function () {
        function Layout(elementRef) {
          var _this = this;

          _classCallCheck(this, Layout);

          this.ele = ngElement.nativeElement;
          this.eqEle = this.ele.lastElementChild;
          window.requestAnimationFrame(function () {
            _this.initLayout();
          });
        }

        _createClass(Layout, [{
          key: 'initLayout',
          value: function initLayout() {
            var _this2 = this;

            this.mqs = {};

            var _loop = function (x) {
              var attr = _this2.ele.attributes[x];
              var val = attr.nodeValue;
              var mqClassname = attr.nodeName;
              if (val.indexOf('(') > -1 && val.indexOf(')') > -1) {
                var mql = _this2.eqEle.contentDocument.defaultView.matchMedia(val);
                if (mql.media !== 'not all') {
                  _this2.mqs[mql.media] = function (mql) {
                    console.log(mql.media, mql.matches, mqClassname);
                    window.requestAnimationFrame(function () {
                      _this2.ele.classList[mql.matches ? 'add' : 'remove'](mqClassname);
                    });
                  };
                  _this2.mqs[mql.media](mql);
                  mql.addListener(_this2.mqs[mql.media]);
                }
              }
            };

            for (var x = 0; x < this.ele.attributes.length; x++) {
              _loop(x);
            }
          }
        }]);

        return Layout;
      })();

      _export('Layout', Layout);

      Object.defineProperty(Layout, 'annotations', { get: function get() {
          return [new Component({ selector: 'layout,[layout]' }), new View({ template: '\n    <content></content>\n    <object class="ele-qry" data="about:blank"></object>\n  ' })];
        } });
      Object.defineProperty(Layout, 'parameters', { get: function get() {
          return [[ElementRef, new ElementRef()]];
        } });
    }
  };
});
System.register('ionic/components/list/list', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', '../../config/annotations', './virtual', 'ionic/util'], function (_export) {
  'use strict';

  var ElementRef, onInit, IonicDirective, ListVirtualScroll, util, List;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_configAnnotations) {
      IonicDirective = _configAnnotations.IonicDirective;
    }, function (_virtual) {
      ListVirtualScroll = _virtual.ListVirtualScroll;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      List = (function () {
        function List(elementRef) {
          _classCallCheck(this, List);

          this.ele = elementRef.nativeElement;
        }

        _createClass(List, [{
          key: 'onInit',
          value: function onInit() {
            if (util.isDefined(this.virtual)) {
              console.log('Content', this.content);
              console.log('Virtual?', this.virtual);
              console.log('Items?', this.items.length, 'of \'em');
              this._initVirtualScrolling();
            }
          }
        }, {
          key: '_initVirtualScrolling',
          value: function _initVirtualScrolling() {
            if (!this.content) {
              return;
            }
            this._virtualScrollingManager = new ListVirtualScroll(this);
          }
        }, {
          key: 'setItemTemplate',
          value: function setItemTemplate(item) {
            this.itemTemplate = item;
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-list',
              properties: ['items', 'virtual', 'content']
            };
          }
        }]);

        return List;
      })();

      _export('List', List);

      Object.defineProperty(List, 'annotations', { get: function get() {
          return [new IonicDirective(List)];
        } });
      Object.defineProperty(List, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/list/virtual', [], function (_export) {
  'use strict';

  var ListVirtualScroll, VirtualItemRef;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ListVirtualScroll = (function () {
        function ListVirtualScroll(list) {
          var _this = this;

          _classCallCheck(this, ListVirtualScroll);

          this.list = list;
          this.content = this.list.content;
          this.viewportHeight = this.content.ele.offsetHeight;
          this.viewContainer = this.list.itemTemplate.viewContainer;
          this.itemHeight = 60;
          this.shownItems = {};
          this.enteringItems = [];
          this.leavingItems = [];
          setTimeout(function () {
            _this.resize();
            _this._handleVirtualScroll({ target: _this.content.scrollElement });
          });
          this.content.addScrollEventListener(function (event) {
            _this._handleVirtualScroll(event);
          });
        }

        _createClass(ListVirtualScroll, [{
          key: 'resize',
          value: function resize() {
            this.viewportHeight = this.content.ele.offsetHeight;
            this.viewportScrollHeight = this.content.scrollElement.scrollHeight;
            this.virtualHeight = this.list.items.length * this.itemHeight;
            this.itemsPerScreen = this.viewportHeight / this.itemHeight;
            console.log('VIRTUAL: resize(viewportHeight:', this.viewportHeight, 'viewportScrollHeight:', this.viewportScrollHeight, 'virtualHeight:', this.virtualHeight, ', itemsPerScreen:', this.itemsPerScreen, ')');
          }
        }, {
          key: '_handleVirtualScroll',
          value: function _handleVirtualScroll(event) {
            var item = undefined;
            var shownItemRef = undefined;
            var st = event.target.scrollTop;
            var sh = event.target.scrollHeight;
            var topIndex = Math.floor(st / this.itemHeight);
            var bottomIndex = Math.floor(st / this.itemHeight + this.itemsPerScreen);
            var items = this.list.items;
            for (var i in this.shownItems) {
              if (i < topIndex || i > bottomIndex) {
                this.leavingItems.push(this.shownItems[i]);
                delete this.shownItems[i];
              }
            }
            var realIndex = 0;
            for (var i = topIndex, _realIndex = 0; i < bottomIndex && i < items.length; i++, _realIndex++) {
              item = items[i];
              console.log('Drawing item', i, item.title);
              shownItemRef = this.shownItems[i];
              if (!shownItemRef) {
                var itemView = this.viewContainer.create(this.list.itemTemplate.protoViewRef, _realIndex);
                itemView.setLocal('$implicit', item);
                itemView.setLocal('$item', item);
                shownItemRef = new VirtualItemRef(item, i, _realIndex, itemView);
                this.shownItems[i] = shownItemRef;
                this.enteringItems.push(shownItemRef);
              }
            }
            while (this.leavingItems.length) {
              var itemRef = this.leavingItems.pop();
              console.log('Removing item', itemRef.item, itemRef.realIndex);
              this.viewContainer.remove(itemRef.realIndex);
            }
            console.log('VIRTUAL SCROLL: scroll(scrollTop:', st, 'topIndex:', topIndex, 'bottomIndex:', bottomIndex, ')');
            console.log('Container has', this.list.ele.children.length, 'children');
          }
        }, {
          key: 'cellAtIndex',
          value: function cellAtIndex(index) {}
        }]);

        return ListVirtualScroll;
      })();

      _export('ListVirtualScroll', ListVirtualScroll);

      VirtualItemRef = function VirtualItemRef(item, index, realIndex, view) {
        _classCallCheck(this, VirtualItemRef);

        this.item = item;
        this.index = index;
        this.realIndex = realIndex;
        this.view = view;
      };
    }
  };
});
System.register('ionic/components/modal/modal', ['angular2/di', '../overlay/overlay', '../../animations/animation', '../app/app'], function (_export) {
  'use strict';

  var Injectable, Overlay, Animation, IonicApp, Modal, OVERLAY_TYPE, ModalSlideIn, ModalSlideOut;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Di) {
      Injectable = _angular2Di.Injectable;
    }, function (_overlayOverlay) {
      Overlay = _overlayOverlay.Overlay;
    }, function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }, function (_appApp) {
      IonicApp = _appApp.IonicApp;
    }],
    execute: function () {
      Modal = (function (_Overlay) {
        function Modal(app) {
          _classCallCheck(this, Modal);

          _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, app);
          this.extendOptions({
            enterAnimation: 'modal-slide-in',
            leaveAnimation: 'modal-slide-out'
          });
        }

        _inherits(Modal, _Overlay);

        _createClass(Modal, [{
          key: 'open',
          value: function open(ComponentType, opts) {
            return this.create(OVERLAY_TYPE, ComponentType, opts);
          }
        }, {
          key: 'get',
          value: function get() {
            return this.getByType(OVERLAY_TYPE);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-modal',
              host: { '[style.z-index]': 'zIndex' }
            };
          }
        }]);

        return Modal;
      })(Overlay);

      _export('Modal', Modal);

      Object.defineProperty(Modal, 'annotations', { get: function get() {
          return [new Injectable()];
        } });
      Object.defineProperty(Modal, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
      Object.defineProperty(Modal.prototype.open, 'parameters', { get: function get() {
          return [[Type], []];
        } });
      OVERLAY_TYPE = 'modal';

      ModalSlideIn = (function (_Animation) {
        function ModalSlideIn(element) {
          _classCallCheck(this, ModalSlideIn);

          _get(Object.getPrototypeOf(ModalSlideIn.prototype), 'constructor', this).call(this, element);
          this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).fromTo('translateY', '100%', '0%');
        }

        _inherits(ModalSlideIn, _Animation);

        return ModalSlideIn;
      })(Animation);

      Animation.register('modal-slide-in', ModalSlideIn);

      ModalSlideOut = (function (_Animation2) {
        function ModalSlideOut(element) {
          _classCallCheck(this, ModalSlideOut);

          _get(Object.getPrototypeOf(ModalSlideOut.prototype), 'constructor', this).call(this, element);
          this.easing('ease-out').duration(250).fromTo('translateY', '0%', '100%');
        }

        _inherits(ModalSlideOut, _Animation2);

        return ModalSlideOut;
      })(Animation);

      Animation.register('modal-slide-out', ModalSlideOut);
    }
  };
});
System.register('ionic/components/nav/nav-controller', ['../../util/util'], function (_export) {
  'use strict';

  var extend, NavController, NavParams;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_utilUtil) {
      extend = _utilUtil.extend;
    }],
    execute: function () {
      NavController = (function () {
        function NavController(nav) {
          _classCallCheck(this, NavController);

          this._nav = nav;
        }

        _createClass(NavController, [{
          key: 'setItems',
          value: function setItems(items) {
            return this._nav.setItems(items);
          }
        }, {
          key: 'clear',
          value: function clear() {
            return this._nav.clear();
          }
        }, {
          key: 'push',
          value: function push() {
            return this._nav.push.apply(this._nav, arguments);
          }
        }, {
          key: 'pop',
          value: function pop() {
            return this._nav.pop.apply(this._nav, arguments);
          }
        }]);

        return NavController;
      })();

      _export('NavController', NavController);

      NavParams = function NavParams(params) {
        _classCallCheck(this, NavParams);

        extend(this, params);
      };

      _export('NavParams', NavParams);
    }
  };
});
System.register('ionic/components/nav/nav-params', ['ionic/util'], function (_export) {
  'use strict';

  var util, NavParams;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      NavParams = function NavParams(params) {
        _classCallCheck(this, NavParams);

        util.extend(this, params);
      };

      _export('NavParams', NavParams);
    }
  };
});
System.register('ionic/components/nav/nav-push', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/di/annotations_impl', 'angular2/angular2', 'angular2/src/core/compiler/element_ref', 'angular2/di', '../view/view-controller', './nav-controller'], function (_export) {
  'use strict';

  var Directive, onInit, Optional, Compiler, ElementRef, Injector, ViewController, NavController, NavPush, NavPop;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_angular2Angular2) {
      Compiler = _angular2Angular2.Compiler;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_navController) {
      NavController = _navController.NavController;
    }],
    execute: function () {
      NavPush = (function () {
        function NavPush(nav) {
          _classCallCheck(this, NavPush);

          this.nav = nav;
        }

        _createClass(NavPush, [{
          key: 'onClick',
          value: function onClick(event) {
            this.nav.push(this.navPush, this.pushData);
          }
        }]);

        return NavPush;
      })();

      _export('NavPush', NavPush);

      Object.defineProperty(NavPush, 'annotations', { get: function get() {
          return [new Directive({
            selector: '[nav-push]',
            properties: ['navPush', 'pushData'],
            host: {
              '(^click)': 'onClick($event)',
              'role': 'link'
            }
          })];
        } });
      Object.defineProperty(NavPush, 'parameters', { get: function get() {
          return [[NavController]];
        } });

      NavPop = (function () {
        function NavPop(nav) {
          _classCallCheck(this, NavPop);

          this.nav = nav;
        }

        _createClass(NavPop, [{
          key: 'onClick',
          value: function onClick(event) {
            this.nav.pop();
          }
        }]);

        return NavPop;
      })();

      _export('NavPop', NavPop);

      Object.defineProperty(NavPop, 'annotations', { get: function get() {
          return [new Directive({
            selector: '[nav-pop]',
            host: {
              '(^click)': 'onClick($event)',
              'role': 'link'
            }
          })];
        } });
      Object.defineProperty(NavPop, 'parameters', { get: function get() {
          return [[NavController]];
        } });
    }
  };
});
System.register('ionic/components/nav/nav', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/di/annotations_impl', 'angular2/src/core/compiler/element_ref', 'angular2/di', '../view/view-controller'], function (_export) {
  'use strict';

  var Component, Directive, onInit, View, Parent, Optional, ElementRef, Injector, ViewController, Nav, PaneAnchor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }],
    execute: function () {
      Nav = (function (_ViewController) {
        function Nav(parentViewCtrl, injector, elementRef) {
          _classCallCheck(this, Nav);

          _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, parentViewCtrl, injector, elementRef);
        }

        _inherits(Nav, _ViewController);

        _createClass(Nav, [{
          key: 'onInit',
          value: function onInit() {
            this.push(this.root);
          }
        }]);

        return Nav;
      })(ViewController);

      _export('Nav', Nav);

      Object.defineProperty(Nav, 'annotations', { get: function get() {
          return [new Component({
            selector: 'ion-nav',
            properties: ['root'],
            lifecycle: [onInit]
          }), new View({
            template: '<template pane-anchor></template>',
            directives: [PaneAnchor]
          })];
        } });
      Object.defineProperty(Nav, 'parameters', { get: function get() {
          return [[ViewController, new Optional()], [Injector], [ElementRef]];
        } });

      PaneAnchor = function PaneAnchor(nav, elementRef) {
        _classCallCheck(this, PaneAnchor);

        nav.anchorElementRef(elementRef);
      };

      Object.defineProperty(PaneAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[pane-anchor]' })];
        } });
      Object.defineProperty(PaneAnchor, 'parameters', { get: function get() {
          return [[Nav, new Parent()], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/nav/pane', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/compiler/view_container_ref', 'angular2/src/core/compiler/element_ref', 'angular2/di', '../view/view-controller', './swipe-handle', '../../config/annotations'], function (_export) {
  'use strict';

  var Component, Directive, View, Parent, ViewContainerRef, ElementRef, bind, ViewController, SwipeHandle, IonicComponent, PaneController, Pane, PaneAnchor, PaneContentAnchor, NavBarContainer, NavBarAnchor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreCompilerView_container_ref) {
      ViewContainerRef = _angular2SrcCoreCompilerView_container_ref.ViewContainerRef;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      bind = _angular2Di.bind;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_swipeHandle) {
      SwipeHandle = _swipeHandle.SwipeHandle;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
    }],
    execute: function () {
      PaneController = (function () {
        function PaneController(viewCtrl) {
          _classCallCheck(this, PaneController);

          this.panes = {};
          this.viewCtrl = viewCtrl;
        }

        _createClass(PaneController, [{
          key: 'get',
          value: function get(itemStructure, callback) {
            var _this = this;

            var key = itemStructure.key;
            var viewCtrl = this.viewCtrl;
            var pane = this.panes[key];
            if (pane) {
              callback(pane);
            } else {
              this.panes[key] = null;
              var injector = viewCtrl.injector.resolveAndCreateChild([bind(ViewController).toValue(viewCtrl)]);
              viewCtrl.loader.loadNextToLocation(Pane, viewCtrl.anchorElementRef(), injector).then(function () {
                pane = _this.panes[key];
                var sectionAnchorElementRef = pane && pane.sectionAnchorElementRef;
                if (!sectionAnchorElementRef) {
                  return callback();
                }
                var promises = [];
                var sectionsToAdd = [];
                if (itemStructure.navbar) {
                  sectionsToAdd.push(NavBarContainer);
                }
                sectionsToAdd.forEach(function (SectionClass) {
                  promises.push(viewCtrl.loader.loadNextToLocation(SectionClass, sectionAnchorElementRef));
                });
                Promise.all(promises).then(function () {
                  callback(pane);
                });
              });
            }
          }
        }, {
          key: 'add',
          value: function add(pane) {
            for (var np in this.panes) {
              if (this.panes[np] === null) {
                this.panes[np] = pane;
                return;
              }
            }
          }
        }]);

        return PaneController;
      })();

      _export('PaneController', PaneController);

      Object.defineProperty(PaneController, 'parameters', { get: function get() {
          return [[ViewController]];
        } });

      Pane = (function () {
        function Pane(viewCtrl, elementRef) {
          _classCallCheck(this, Pane);

          this.ele = elementRef.nativeElement;
          viewCtrl.panes.add(this);
        }

        _createClass(Pane, [{
          key: 'width',
          value: function width() {
            return this.ele.offsetWidth;
          }
        }, {
          key: 'showPane',
          value: function showPane(val) {
            this.ele.classList[val ? 'add' : 'remove']('show-pane');
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-pane',
              classId: 'nav'
            };
          }
        }]);

        return Pane;
      })();

      _export('Pane', Pane);

      Object.defineProperty(Pane, 'annotations', { get: function get() {
          return [new IonicComponent(Pane), new View({
            template: '\n    <template pane-anchor></template>\n    <section class="content-container">\n      <template content-anchor></template>\n      <div class="swipe-handle"></div>\n    </section>\n  ',
            directives: [PaneAnchor, PaneContentAnchor, SwipeHandle]
          })];
        } });
      Object.defineProperty(Pane, 'parameters', { get: function get() {
          return [[ViewController], [ElementRef]];
        } });

      PaneAnchor = function PaneAnchor(pane, elementRef) {
        _classCallCheck(this, PaneAnchor);

        pane.sectionAnchorElementRef = elementRef;
      };

      Object.defineProperty(PaneAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[pane-anchor]' })];
        } });
      Object.defineProperty(PaneAnchor, 'parameters', { get: function get() {
          return [[Pane, new Parent()], [ElementRef]];
        } });

      PaneContentAnchor = function PaneContentAnchor(pane, viewContainerRef) {
        _classCallCheck(this, PaneContentAnchor);

        pane.contentContainerRef = viewContainerRef;
      };

      Object.defineProperty(PaneContentAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[content-anchor]' })];
        } });
      Object.defineProperty(PaneContentAnchor, 'parameters', { get: function get() {
          return [[Pane, new Parent()], [ViewContainerRef]];
        } });

      NavBarContainer = function NavBarContainer() {
        _classCallCheck(this, NavBarContainer);
      };

      Object.defineProperty(NavBarContainer, 'annotations', { get: function get() {
          return [new Component({
            selector: 'section',
            host: { 'class': 'navbar-container' }
          }), new View({
            template: '<template navbar-anchor></template>',
            directives: [NavBarAnchor]
          })];
        } });

      NavBarAnchor = function NavBarAnchor(viewCtrl, viewContainerRef) {
        _classCallCheck(this, NavBarAnchor);

        viewCtrl.navbarViewContainer(viewContainerRef);
      };

      Object.defineProperty(NavBarAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[navbar-anchor]' })];
        } });
      Object.defineProperty(NavBarAnchor, 'parameters', { get: function get() {
          return [[ViewController], [ViewContainerRef]];
        } });
    }
  };
});
System.register('ionic/components/nav/swipe-handle', ['angular2/src/core/annotations_impl/visibility', 'angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/di/annotations_impl', '../view/view-controller', './pane', 'ionic/gestures/gesture'], function (_export) {
  'use strict';

  var Parent, ElementRef, Directive, Optional, ViewController, Pane, Gesture, SwipeHandle;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_pane) {
      Pane = _pane.Pane;
    }, function (_ionicGesturesGesture) {
      Gesture = _ionicGesturesGesture.Gesture;
    }],
    execute: function () {
      SwipeHandle = (function () {
        function SwipeHandle(viewCtrl, pane, elementRef) {
          _classCallCheck(this, SwipeHandle);

          if (!viewCtrl || !pane) return;
          var self = this;
          self.pane = pane;
          self.viewCtrl = viewCtrl;
          var gesture = self.gesture = new Gesture(elementRef.nativeElement);
          gesture.listen();
          function dragHorizontal(ev) {
            self.onDragHorizontal(ev);
          }
          gesture.on('panend', function (ev) {
            self.onDragEnd(ev);
          });
          gesture.on('panleft', dragHorizontal);
          gesture.on('panright', dragHorizontal);
          self.startX = null;
          self.width = null;
        }

        _createClass(SwipeHandle, [{
          key: 'onDragEnd',
          value: function onDragEnd(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var progress = (ev.gesture.center.x - this.startX) / this.width;
            var completeSwipeBack = progress > 0.5;
            var playbackRate = 4;
            if (completeSwipeBack) {
              if (progress > 0.9) {
                playbackRate = 1;
              } else if (progress > 0.8) {
                playbackRate = 2;
              } else if (progress > 0.7) {
                playbackRate = 3;
              }
            } else {
              if (progress < 0.1) {
                playbackRate = 1;
              } else if (progress < 0.2) {
                playbackRate = 2;
              } else if (progress < 0.3) {
                playbackRate = 3;
              }
            }
            this.viewCtrl.swipeBackEnd(completeSwipeBack, progress, playbackRate);
            this.startX = null;
          }
        }, {
          key: 'onDragHorizontal',
          value: function onDragHorizontal(ev) {
            if (this.startX === null) {
              ev.preventDefault();
              ev.stopPropagation();
              this.startX = ev.gesture.center.x;
              this.width = this.pane.width() - this.startX;
              this.viewCtrl.swipeBackStart();
            }
            this.viewCtrl.swipeBackProgress((ev.gesture.center.x - this.startX) / this.width);
          }
        }, {
          key: 'showHandle',
          get: function () {
            return this.viewCtrl ? this.viewCtrl.swipeBackEnabled() : false;
          }
        }]);

        return SwipeHandle;
      })();

      _export('SwipeHandle', SwipeHandle);

      Object.defineProperty(SwipeHandle, 'annotations', { get: function get() {
          return [new Directive({
            selector: '.swipe-handle',
            host: { '[class.show-handle]': 'showHandle' }
          })];
        } });
      Object.defineProperty(SwipeHandle, 'parameters', { get: function get() {
          return [[ViewController, new Optional()], [Pane, new Parent()], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/nav-bar/nav-bar', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/view_ref', 'angular2/src/core/zone/ng_zone', '../view/view-item', '../../util/dom'], function (_export) {
  'use strict';

  var Parent, Component, Directive, View, ElementRef, ProtoViewRef, NgZone, ViewItem, dom, Navbar, BackButton, BackButtonText, Title, NavbarItem, NavbarTemplate;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcCoreCompilerView_ref) {
      ProtoViewRef = _angular2SrcCoreCompilerView_ref.ProtoViewRef;
    }, function (_angular2SrcCoreZoneNg_zone) {
      NgZone = _angular2SrcCoreZoneNg_zone.NgZone;
    }, function (_viewViewItem) {
      ViewItem = _viewViewItem.ViewItem;
    }, function (_utilDom) {
      dom = _utilDom;
    }],
    execute: function () {
      Navbar = (function () {
        function Navbar(item, elementRef) {
          _classCallCheck(this, Navbar);

          this.eleRef = elementRef;
          this.itemEles = [];
          item.navbarView(this);
          this.bbDefault = 'Back';
          this.bbText = '';
        }

        _createClass(Navbar, [{
          key: 'element',
          value: function element() {
            return this.eleRef;
          }
        }, {
          key: 'backButtonElement',
          value: function backButtonElement(eleRef) {
            if (arguments.length) {
              this._bbEle = eleRef;
            }
            return this._bbEle;
          }
        }, {
          key: 'backButtonTextElement',
          value: function backButtonTextElement(eleRef) {
            if (arguments.length) {
              this._bbTxEle = eleRef;
            }
            return this._bbTxEle;
          }
        }, {
          key: 'titleElement',
          value: function titleElement(eleRef) {
            if (arguments.length) {
              this._nbTlEle = eleRef;
            }
            return this._nbTlEle;
          }
        }, {
          key: 'itemElements',
          value: function itemElements(eleRef) {
            if (arguments.length) {
              this.itemEles.push(eleRef);
            }
            return this.itemEles;
          }
        }, {
          key: 'titleText',
          value: function titleText(eleRef) {
            if (arguments.length) {
              this._ttTxt.push(eleRef);
            }
            return this._ttTxt;
          }
        }, {
          key: 'alignTitle',
          value: function alignTitle() {
            var navbarEle = this.eleRef.nativeElement;
            var titleEle = this._ttEle || (this._ttEle = navbarEle.querySelector('ion-title'));
            if (!titleEle) return;
            var titleStyle = this._ttStyle || (this._ttStyle = window.getComputedStyle(titleEle));
            if (titleStyle.textAlign !== 'center') return;
            var titleOffsetLeft = titleEle.offsetLeft;
            var titleOffsetRight = navbarEle.offsetWidth - (titleOffsetLeft + titleEle.offsetWidth);
            var marginLeft = 0;
            var marginRight = 0;
            if (titleOffsetLeft < titleOffsetRight) {
              marginLeft = titleOffsetRight - titleOffsetLeft + 5;
            } else if (titleOffsetLeft > titleOffsetRight) {
              marginRight = titleOffsetLeft - titleOffsetRight - 5;
            }
            var margin = '0 ' + marginRight + 'px 0 ' + marginLeft + 'px';
            if ((marginLeft || marginRight) && margin !== this._ttMargin) {
              var innerTitleEle = this._innerTtEle || (this._innerTtEle = navbarEle.querySelector('.navbar-inner-title'));
              innerTitleEle.style.margin = this._ttMargin = margin;
            }
          }
        }, {
          key: 'didEnter',
          value: function didEnter() {
            var _this = this;

            setTimeout(function () {
              var titleEle = _this._ttEle || (_this._ttEle = _this.eleRef.nativeElement.querySelector('ion-title'));
            }, 32);
          }
        }]);

        return Navbar;
      })();

      _export('Navbar', Navbar);

      Object.defineProperty(Navbar, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-navbar' }), new View({
            template: '\n    <div class="navbar-inner">\n      <button class="back-button button">\n        <icon class="back-button-icon ion-ios-arrow-back"></icon>\n        <span class="back-button-text">\n          <span class="back-default" [inner-text]="bbDefault"></span>\n          <span class="back-title" [inner-text]="bbText"></span>\n        </span>\n      </button>\n      <div class="navbar-title">\n        <div class="navbar-inner-title">\n          <content select="ion-title"></content>\n        </div>\n      </div>\n      <div class="navbar-item navbar-primary-item">\n        <content select="[primary]"></content>\n      </div>\n      <div class="navbar-item navbar-secondary-item">\n        <content select="[secondary]"></content>\n      </div>\n    </div>\n  ',
            directives: [BackButton, BackButtonText, Title, NavbarItem]
          })];
        } });
      Object.defineProperty(Navbar, 'parameters', { get: function get() {
          return [[ViewItem], [ElementRef]];
        } });

      BackButton = (function () {
        function BackButton(navbar, item, elementRef) {
          _classCallCheck(this, BackButton);

          this.item = item;
          navbar.backButtonElement(elementRef);
        }

        _createClass(BackButton, [{
          key: 'goBack',
          value: function goBack(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            this.item.viewCtrl.pop();
          }
        }]);

        return BackButton;
      })();

      Object.defineProperty(BackButton, 'annotations', { get: function get() {
          return [new Directive({
            selector: '.back-button',
            host: { '(^click)': 'goBack($event)' }
          })];
        } });
      Object.defineProperty(BackButton, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ViewItem], [ElementRef]];
        } });

      BackButtonText = function BackButtonText(navbar, elementRef) {
        _classCallCheck(this, BackButtonText);

        navbar.backButtonTextElement(elementRef);
      };

      Object.defineProperty(BackButtonText, 'annotations', { get: function get() {
          return [new Directive({ selector: '.back-button-text' })];
        } });
      Object.defineProperty(BackButtonText, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ElementRef]];
        } });

      Title = function Title(navbar, elementRef) {
        _classCallCheck(this, Title);

        navbar.titleElement(elementRef);
      };

      Object.defineProperty(Title, 'annotations', { get: function get() {
          return [new Directive({ selector: '.navbar-title' })];
        } });
      Object.defineProperty(Title, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ElementRef]];
        } });

      NavbarItem = function NavbarItem(navbar, elementRef) {
        _classCallCheck(this, NavbarItem);

        navbar.itemElements(elementRef);
      };

      Object.defineProperty(NavbarItem, 'annotations', { get: function get() {
          return [new Directive({ selector: '.navbar-item' })];
        } });
      Object.defineProperty(NavbarItem, 'parameters', { get: function get() {
          return [[Navbar, new Parent()], [ElementRef]];
        } });

      NavbarTemplate = function NavbarTemplate(item, protoViewRef) {
        _classCallCheck(this, NavbarTemplate);

        item.addProtoViewRef('navbar', protoViewRef);
      };

      _export('NavbarTemplate', NavbarTemplate);

      Object.defineProperty(NavbarTemplate, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[navbar]' })];
        } });
      Object.defineProperty(NavbarTemplate, 'parameters', { get: function get() {
          return [[ViewItem], [ProtoViewRef]];
        } });
    }
  };
});
System.register('ionic/components/overlay/overlay', ['../app/app', '../../animations/animation', '../../util/click-block', 'ionic/util'], function (_export) {
  'use strict';

  var IonicApp, Animation, ClickBlock, util, Overlay, ROOT_Z_INDEX;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_appApp) {
      IonicApp = _appApp.IonicApp;
    }, function (_animationsAnimation) {
      Animation = _animationsAnimation.Animation;
    }, function (_utilClickBlock) {
      ClickBlock = _utilClickBlock.ClickBlock;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      Overlay = (function () {
        function Overlay(app) {
          _classCallCheck(this, Overlay);

          this.setApp(app);
        }

        _createClass(Overlay, [{
          key: 'setApp',
          value: function setApp(app) {
            this.app = app;
          }
        }, {
          key: 'create',
          value: function create(overlayType, ComponentType, opts) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var app = _this.app;
              app.appendComponent(ComponentType).then(function (ref) {
                var overlay = ref.instance;
                overlay._dispose = ref.dispose;
                overlay.setApp(app);
                overlay._type = overlayType;
                overlay._handle = opts && opts.handle;
                overlay._ele = ref.elementRef.nativeElement;
                overlay.extendOptions(opts);
                overlay.zIndex = ROOT_Z_INDEX;
                for (var i = 0; i < app.overlays.length; i++) {
                  if (app.overlays[i].zIndex >= overlay.zIndex) {
                    overlay.zIndex = app.overlays[i].zIndex + 1;
                  }
                }
                app.overlays.push(overlay);
                overlay._open(opts);
                resolve(overlay);
              })['catch'](function (err) {
                console.error('Overlay create:', err);
                reject(err);
              });
            });
          }
        }, {
          key: '_open',
          value: function _open(opts) {
            var animationName = opts && opts.animation || this.options.enterAnimation;
            var enterAnimation = Animation.create(this._ele, animationName);
            enterAnimation.before.addClass('ion-app');
            enterAnimation.before.addClass('show-overlay');
            ClickBlock(true, enterAnimation.duration() + 200);
            return new Promise(function (resolve) {
              enterAnimation.play().then(function () {
                ClickBlock(false);
                enterAnimation.dispose();
                resolve();
              });
            });
          }
        }, {
          key: 'close',
          value: function close(opts) {
            var _this2 = this;

            return new Promise(function (resolve) {
              var animationName = opts && opts.animation || _this2.options.leaveAnimation;
              var leavingAnimation = Animation.create(_this2._ele, animationName);
              leavingAnimation.after.removeClass('show-overlay');
              ClickBlock(true, leavingAnimation.duration() + 200);
              leavingAnimation.play().then(function () {
                _this2.dispose();
                ClickBlock(false);
                leavingAnimation.dispose();
                resolve();
              });
            });
          }
        }, {
          key: 'getByType',
          value: function getByType(overlayType) {
            if (this.app) {
              for (var i = this.app.overlays.length - 1; i >= 0; i--) {
                if (overlayType === this.app.overlays[i]._type) {
                  return this.app.overlays[i];
                }
              }
            }
            return null;
          }
        }, {
          key: 'getByHandle',
          value: function getByHandle(handle) {
            if (this.app) {
              for (var i = this.app.overlays.length - 1; i >= 0; i--) {
                if (handle === this.app.overlays[i]._handle) {
                  return this.app.overlays[i];
                }
              }
            }
            return null;
          }
        }, {
          key: 'extendOptions',
          value: function extendOptions(opts) {
            if (!this.options) this.options = {};
            util.extend(this.options, opts);
          }
        }, {
          key: 'dispose',
          value: function dispose() {
            this._dispose && this._dispose();
            if (this.app) {
              util.array.remove(this.app.overlays, this);
            }
          }
        }]);

        return Overlay;
      })();

      _export('Overlay', Overlay);

      Object.defineProperty(Overlay, 'parameters', { get: function get() {
          return [[IonicApp]];
        } });
      Object.defineProperty(Overlay.prototype.create, 'parameters', { get: function get() {
          return [[], [Type], []];
        } });
      ROOT_Z_INDEX = 1000;
    }
  };
});
System.register('ionic/components/radio/radio', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/visibility', '../../config/annotations'], function (_export) {
  'use strict';

  var ElementRef, Component, Directive, Ancestor, IonicDirective, IonicComponent, IonicView, RadioGroup, RadioButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_configAnnotations) {
      IonicDirective = _configAnnotations.IonicDirective;
      IonicComponent = _configAnnotations.IonicComponent;
      IonicView = _configAnnotations.IonicView;
    }],
    execute: function () {
      RadioGroup = (function () {
        function RadioGroup(elementRef) {
          _classCallCheck(this, RadioGroup);

          this.ele = elementRef.nativeElement;
          this.ele.classList.add('list');
          this.buttons = [];
        }

        _createClass(RadioGroup, [{
          key: 'writeValue',
          value: function writeValue(value) {
            var _this = this;

            this.value = value;
            setTimeout(function () {
              _this.selectFromValue(value);
            });
          }
        }, {
          key: 'register',
          value: function register(radioButton) {
            var _this2 = this;

            this.buttons.push(radioButton);
            if (!this.value && this.buttons.length === 1) {
              setTimeout(function () {
                _this2.selected(radioButton);
              });
            }
          }
        }, {
          key: 'selectFromValue',
          value: function selectFromValue(value) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var button = _step.value;

                if (button.value === value) {
                  this.selected(button);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: 'selected',
          value: function selected(radioButton) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var button = _step2.value;

                button.setActive(false);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            radioButton.setActive(true);
            this.value = radioButton.value;
            this.controlDirective._control().updateValue(this.value);
          }
        }], [{
          key: 'config',
          get: function () {
            return { selector: 'ion-radio-group' };
          }
        }]);

        return RadioGroup;
      })();

      _export('RadioGroup', RadioGroup);

      Object.defineProperty(RadioGroup, 'annotations', { get: function get() {
          return [new IonicDirective(RadioGroup)];
        } });
      Object.defineProperty(RadioGroup, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });

      RadioButton = (function () {
        function RadioButton(group, elementRef) {
          _classCallCheck(this, RadioButton);

          this.ele = elementRef.ele;
          this.ele.classList.add('item');
          this.ele.setAttribute('aria-checked', true);
          this.group = group;
          group.register(this);
        }

        _createClass(RadioButton, [{
          key: 'setActive',
          value: function setActive(isActive) {
            if (isActive) {
              this.ele.classList.add('active');
              this.ele.setAttribute('aria-checked', true);
            } else {
              this.ele.classList.remove('active');
              this.ele.setAttribute('aria-checked', false);
            }
          }
        }, {
          key: 'buttonClicked',
          value: function buttonClicked(event) {
            this.group.selected(this, event);
            event.preventDefault();
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-radio',
              properties: ['value'],
              host: { '(^click)': 'buttonClicked($event)' }
            };
          }
        }]);

        return RadioButton;
      })();

      _export('RadioButton', RadioButton);

      Object.defineProperty(RadioButton, 'annotations', { get: function get() {
          return [new IonicComponent(RadioButton), new IonicView({ template: '\n    <div class="item-content">\n\n      <div class="item-title">\n        <content></content>\n      </div>\n\n      <div class="item-media media-radio">\n        <icon class="radio-off"></icon>\n        <icon class="ion-ios-checkmark-empty radio-on"></icon>\n      </div>\n\n    </div>\n  ' })];
        } });
      Object.defineProperty(RadioButton, 'parameters', { get: function get() {
          return [[RadioGroup, new Ancestor()], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/scroll/pull-to-refresh', ['angular2/angular2', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'ionic/ionic'], function (_export) {
  'use strict';

  var Renderer, ElementRef, EventEmitter, Parent, Component, Directive, View, Content, Refresher;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Renderer = _angular2Angular2.Renderer;
      ElementRef = _angular2Angular2.ElementRef;
      EventEmitter = _angular2Angular2.EventEmitter;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_ionicIonic) {
      Content = _ionicIonic.Content;
    }],
    execute: function () {
      Refresher = (function () {
        function Refresher(content, element) {
          _classCallCheck(this, Refresher);

          this.ele = element.nativeElement;
          this.ele.classList.add('content');
          this.refresh = new EventEmitter('refresh');
          setTimeout(function () {
            content.scrollElement.addEventListener('scroll', function (e) {
              console.log('CONTENT: scroll', e.target.scrollTop);
            });
          }, 1000);
        }

        _createClass(Refresher, [{
          key: 'doRefresh',
          value: function doRefresh() {
            console.log('REFRESH');
            this.refresh.next({ amt: 0 });
          }
        }]);

        return Refresher;
      })();

      _export('Refresher', Refresher);

      Object.defineProperty(Refresher, 'annotations', { get: function get() {
          return [new Component({
            selector: 'ion-refresher',
            events: ['refresh']
          }), new View({ template: '<div class="refresher"></div>' })];
        } });
      Object.defineProperty(Refresher, 'parameters', { get: function get() {
          return [[Content, new Parent()], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/search-bar/search-bar', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', '../../config/annotations'], function (_export) {
  'use strict';

  var ElementRef, Pipe, onInit, IonicComponent, IonicView, SearchBar;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
      Pipe = _angular2Angular2.Pipe;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
      IonicView = _configAnnotations.IonicView;
    }],
    execute: function () {
      SearchBar = (function () {
        function SearchBar(elementRef) {
          _classCallCheck(this, SearchBar);

          this.ele = elementRef.nativeElement;
          this.query = '';
        }

        _createClass(SearchBar, [{
          key: 'onInit',
          value: function onInit() {
            SearchBar.applyConfig(this);
          }
        }, {
          key: 'writeValue',
          value: function writeValue(value) {
            this.value = value;
          }
        }, {
          key: 'inputChanged',
          value: function inputChanged(event) {
            this.value = event.target.value;
            console.log('Search changed', this.value);
            this.controlDirective._control().updateValue(event.target.value);
          }
        }, {
          key: 'inputFocused',
          value: function inputFocused() {
            this.isFocused = true;
            this.shouldLeftAlign = true;
          }
        }, {
          key: 'inputBlurred',
          value: function inputBlurred() {
            this.isFocused = false;
            this.shouldLeftAlign = this.value.trim() != '';
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-search-bar',
              properties: ['list', 'query'],
              defaultProperties: {
                'cancelText': 'Cancel',
                'placeholder': 'Search'
              }
            };
          }
        }]);

        return SearchBar;
      })();

      _export('SearchBar', SearchBar);

      Object.defineProperty(SearchBar, 'annotations', { get: function get() {
          return [new IonicComponent(SearchBar), new IonicView({ template: '\n  <div class="search-bar-input-container" [class.left-align]="shouldLeftAlign">\n    <div class="search-bar-icon"></div>\n    <input (focus)="inputFocused()" (blur)="inputBlurred()"\n    (input)="inputChanged($event)" class="search-bar-input" type="search" [attr.placeholder]="placeholder">\n  </div>\n  <button class="search-bar-cancel">{{cancelText}}</button>' })];
        } });
      Object.defineProperty(SearchBar, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/segment/segment', ['angular2/angular2', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/view', 'angular2/forms', 'ionic/util', '../../config/annotations'], function (_export) {
  'use strict';

  var Renderer, ElementRef, EventEmitter, onInit, Ancestor, View, Control, NgControl, NgFormControl, ControlGroup, ControlDirective, dom, IonicDirective, IonicComponent, IonicView, SegmentControlValueAccessor, Segment, SegmentButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Renderer = _angular2Angular2.Renderer;
      ElementRef = _angular2Angular2.ElementRef;
      EventEmitter = _angular2Angular2.EventEmitter;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Forms) {
      Control = _angular2Forms.Control;
      NgControl = _angular2Forms.NgControl;
      NgFormControl = _angular2Forms.NgFormControl;
      ControlGroup = _angular2Forms.ControlGroup;
      ControlDirective = _angular2Forms.ControlDirective;
    }, function (_ionicUtil) {
      dom = _ionicUtil.dom;
    }, function (_configAnnotations) {
      IonicDirective = _configAnnotations.IonicDirective;
      IonicComponent = _configAnnotations.IonicComponent;
      IonicView = _configAnnotations.IonicView;
    }],
    execute: function () {
      SegmentControlValueAccessor = (function () {
        function SegmentControlValueAccessor(cd, renderer, elementRef, segment) {
          _classCallCheck(this, SegmentControlValueAccessor);

          this.onChange = function (_) {};
          this.onTouched = function (_) {};
          this.cd = cd;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.segment = segment;
          cd.valueAccessor = this;
        }

        _createClass(SegmentControlValueAccessor, [{
          key: 'writeValue',
          value: function writeValue(value) {
            this.value = !value ? '' : value;
            this.renderer.setElementProperty(this.elementRef.parentView.render, this.elementRef.boundElementIndex, 'value', this.value);
            this.segment.value = this.value;
            this.segment.selectFromValue(value);
          }
        }, {
          key: 'registerOnChange',
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: 'registerOnTouched',
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }]);

        return SegmentControlValueAccessor;
      })();

      _export('SegmentControlValueAccessor', SegmentControlValueAccessor);

      Object.defineProperty(SegmentControlValueAccessor, 'annotations', { get: function get() {
          return [new IonicDirective({
            selector: 'ion-segment',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()',
              '[value]': 'value',
              '[class.ng-untouched]': 'cd.control?.untouched == true',
              '[class.ng-touched]': 'cd.control?.touched == true',
              '[class.ng-pristine]': 'cd.control?.pristine == true',
              '[class.ng-dirty]': 'cd.control?.dirty == true',
              '[class.ng-valid]': 'cd.control?.valid == true',
              '[class.ng-invalid]': 'cd.control?.valid == false'
            }
          })];
        } });
      Object.defineProperty(SegmentControlValueAccessor, 'parameters', { get: function get() {
          return [[NgControl], [Renderer], [ElementRef], [Segment]];
        } });

      Segment = (function () {
        function Segment(cd, elementRef, renderer) {
          _classCallCheck(this, Segment);

          this.ele = elementRef.nativeElement;
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.change = new EventEmitter('change');
          this.input = new EventEmitter('input');
          this.cd = cd;
          this.buttons = [];
        }

        _createClass(Segment, [{
          key: 'onInit',
          value: function onInit() {
            Segment.applyConfig(this);
          }
        }, {
          key: 'register',
          value: function register(segmentButton) {
            this.buttons.push(segmentButton);
            if (this.value == segmentButton.value) {
              this.selected(segmentButton);
            }
          }
        }, {
          key: 'selectFromValue',
          value: function selectFromValue(value) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var button = _step.value;

                if (button.value === value) {
                  button.isActive = true;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: 'selected',
          value: function selected(segmentButton) {
            var _this = this;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var button = _step2.value;

                button.isActive = false;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            segmentButton.isActive = true;
            setTimeout(function () {
              _this.value = segmentButton.value;
              _this.cd.valueAccessor.writeValue(segmentButton.value);
              _this.selectFromValue(segmentButton.value);
              _this.cd.control.updateValue(segmentButton.value);
              _this.change.next();
            });
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-segment',
              appInjector: [NgControl],
              properties: ['value'],
              lifecycle: [onInit],
              host: {
                '(click)': 'buttonClicked($event)',
                '(change)': 'onChange($event)',
                '[value]': 'value',
                '[class.ng-untouched]': 'cd.control?.untouched == true',
                '[class.ng-touched]': 'cd.control?.touched == true',
                '[class.ng-pristine]': 'cd.control?.pristine == true',
                '[class.ng-dirty]': 'cd.control?.dirty == true',
                '[class.ng-valid]': 'cd.control?.valid == true',
                '[class.ng-invalid]': 'cd.control?.valid == false'
              }
            };
          }
        }]);

        return Segment;
      })();

      _export('Segment', Segment);

      Object.defineProperty(Segment, 'annotations', { get: function get() {
          return [new IonicComponent(Segment), new IonicView({
            template: '<div class="ion-segment">\n    <content></content>\n  </div>\n  ',
            directives: [SegmentButton]
          })];
        } });
      Object.defineProperty(Segment, 'parameters', { get: function get() {
          return [[NgControl], [ElementRef], [Renderer]];
        } });

      SegmentButton = (function () {
        function SegmentButton(segment, elementRef) {
          _classCallCheck(this, SegmentButton);

          this.ele = elementRef.ele;
          this.segment = segment;
        }

        _createClass(SegmentButton, [{
          key: 'onInit',
          value: function onInit() {
            this.segment.register(this);
          }
        }, {
          key: 'buttonClicked',
          value: function buttonClicked(event) {
            this.segment.selected(this, event);
            event.preventDefault();
          }
        }]);

        return SegmentButton;
      })();

      _export('SegmentButton', SegmentButton);

      Object.defineProperty(SegmentButton, 'annotations', { get: function get() {
          return [new IonicDirective({
            selector: 'ion-segment-button',
            properties: ['value'],
            host: {
              '(click)': 'buttonClicked($event)',
              '[class.active]': 'isActive'
            },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(SegmentButton, 'parameters', { get: function get() {
          return [[Segment, new Ancestor()], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/slides/slides', ['angular2/angular2', 'angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'ionic/gestures/drag-gesture', 'ionic/util', '../../config/annotations', 'ionic/gestures/hammer'], function (_export) {
  'use strict';

  var ElementRef, Ancestor, onInit, DragGesture, util, dom, IonicComponent, IonicDirective, IonicView, Hammer, Slides, Slide, SlidePager, SlidesGesture;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2SrcCoreAnnotations_implVisibility) {
      Ancestor = _angular2SrcCoreAnnotations_implVisibility.Ancestor;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_ionicGesturesDragGesture) {
      DragGesture = _ionicGesturesDragGesture.DragGesture;
    }, function (_ionicUtil) {
      util = _ionicUtil;
      dom = _ionicUtil.dom;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
      IonicDirective = _configAnnotations.IonicDirective;
      IonicView = _configAnnotations.IonicView;
    }, function (_ionicGesturesHammer) {
      Hammer = _ionicGesturesHammer.Hammer;
    }],
    execute: function () {
      Slides = (function () {
        function Slides(elementRef) {
          _classCallCheck(this, Slides);

          this.ele = elementRef.nativeElement;
          this.slides = [];
          this.currentIndex = 0;
          this.animateSpeed = 300;
          this.slideDelay = 0;
          this.bounce = false;
          this.gesture = new SlidesGesture(this);
          this.gesture.listen();
        }

        _createClass(Slides, [{
          key: 'onInit',
          value: function onInit() {
            this.continuous = util.isDefined(this.loop) && (this.slides.length > 1 ? true : false);
            this.wrapperElement = this.ele.children[0];
            this.resize();
            if (this.slideDelay) {
              this.startShow();
            }
          }
        }, {
          key: 'startShow',
          value: function startShow() {
            this._showTimeout = setTimeout(this.next.bind(this), this.slideDelay);
          }
        }, {
          key: 'stopShow',
          value: function stopShow() {
            clearTimeout(this._showTimout);
          }
        }, {
          key: 'setPager',
          value: function setPager(pager) {
            this._pager = pager;
          }
        }, {
          key: 'resize',
          value: function resize() {
            this.containerWidth = this.ele.offsetWidth || this.ele.getBoundingClientRect().width;
            this.wrapperElement.style.width = this.containerWidth * this.slides.length + 'px';
            this._bump();
          }
        }, {
          key: 'add',
          value: function add(slide) {
            this._append(slide);
          }
        }, {
          key: 'slide',
          value: function slide(to, slideSpeed) {
            var index = this.currentIndex;
            var width = this.containerWidth;
            if (index == to) return;
            var direction = Math.abs(index - to) / (index - to);
            if (this.continuous) {
              var natural_direction = direction;
              direction = -this.slides[this._circle(to)].x / width;
              if (direction !== natural_direction) to = -direction * this.slides.length + to;
            }
            var diff = Math.abs(index - to) - 1;
            while (diff--) this._move(this._circle((to > index ? to : index) - diff - 1), width * direction, 0);
            to = this._circle(to);
            this._move(index, width * direction, slideSpeed || this.animateSpeed);
            this._move(to, 0, slideSpeed || this.animateSpeed);
            if (this.continuous) this._move(this._circle(to - direction), -(width * direction), 0);
            this.currentIndex = to;
          }
        }, {
          key: 'prev',
          value: function prev() {
            if (this.continuous) {
              this.slide(this.currentIndex - 1);
            } else if (this.currentIndex > 0) {
              this.slide(this.currentIndex - 1);
            }
          }
        }, {
          key: 'next',
          value: function next() {
            if (this.continuous) {
              this.slide(this.currentIndex + 1);
            } else if (this.currentIndex < this.slides.length - 1) {
              this.slide(this.currentIndex + 1);
            }
          }
        }, {
          key: '_bump',
          value: function _bump() {
            var slide = undefined;
            var tx = undefined;
            var i = this.slides.length;
            while (i--) {
              slide = this.slides[i];
              slide.left = i * -this.containerWidth;
              slide.width = this.containerWidth;
              tx = 0;
              if (this.currentIndex > i) {
                tx = -this.containerWidth;
              } else if (this.currentIndex < i) {
                tx = this.containerWidth;
              }
              this._move(i, tx);
            }
            if (this.continuous) {
              var index1 = this._circle(this.currentIndex - 1);
              var index2 = this._circle(this.currentIndex + 1);
              this._move(index1, -this.containerWidth);
              this._move(index2, this.containerWidth);
            }
          }
        }, {
          key: '_dragStart',
          value: function _dragStart(event) {
            this._isScrolling = undefined;
          }
        }, {
          key: '_dragPre',
          value: function _dragPre(event) {
            var dx = event.gesture.deltaX;
            var dy = event.gesture.deltaY;
            if (this.disableScroll) {
              event.preventDefault();
            }
            if (typeof this._isScrolling == 'undefined') {
              this._isScrolling = !!(this._isScrolling || Math.abs(dx) < Math.abs(dy));
            }
            if (this._isScrolling) {
              return false;
            }
          }
        }, {
          key: '_drag',
          value: function _drag(event) {
            var dx = event.gesture.deltaX;
            var width = this.containerWidth;
            var index = this.currentIndex;
            var shouldRun = this._dragPre(event);
            if (shouldRun === false) {
              return;
            }
            event.preventDefault();
            var index1 = undefined,
                index2 = undefined,
                index3 = undefined;
            if (this.continuous) {
              index1 = this._circle(this.currentIndex - 1);
              index2 = this.currentIndex;
              index3 = this._circle(this.currentIndex + 1);
            } else {
              index1 = this.currentIndex - 1;
              index2 = this.currentIndex;
              index3 = this.currentIndex + 1;
              var isPastBounds = index == 0 && dx > 0 || index == this.slides.length - 1 && dx < 0;
              if (this.bounce) {
                dx = dx / (!index && dx > 0 || index == this.slides.length - 1 && dx < 0 ? Math.abs(dx) / width + 1 : 1);
              } else if (isPastBounds) {
                var slide = this.slides[index];
                return;
              }
            }
            var s1 = this.slides[index1];
            var s2 = this.slides[index2];
            var s3 = this.slides[index3];
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
          key: '_endDrag',
          value: function _endDrag(event, drag) {
            this._finish(event, drag);
          }
        }, {
          key: '_finish',
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
            var duration = +new Date() - drag.time;
            var isValidSlide = Number(duration) < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > width / 3;
            var isPastBounds = !index && delta.x > 0 || index == slides.length - 1 && delta.x < 0;
            if (this.continuous) isPastBounds = false;
            var direction = delta.x < 0;
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
          }
        }, {
          key: '_move',
          value: function _move(pos, translateX, speed) {
            var slide = this.slides[pos];
            if (!slide) {
              return;
            }
            slide.translate(translateX, speed);
            slide.x = translateX;
          }
        }, {
          key: '_circle',
          value: function _circle(i) {
            return (this.slides.length + i % this.slides.length) % this.slides.length;
          }
        }, {
          key: '_append',
          value: function _append(slide) {
            this.slides.push(slide);
          }
        }, {
          key: '_prepend',
          value: function _prepend(slide) {
            this.slides.unshift(slide);
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-slides',
              properties: ['loop', 'index', 'bounce']
            };
          }
        }]);

        return Slides;
      })();

      _export('Slides', Slides);

      Object.defineProperty(Slides, 'annotations', { get: function get() {
          return [new IonicComponent(Slides), new IonicView({
            template: '<div class="slides-view"><content></content></div>',
            directives: [Slide, SlidePager]
          })];
        } });
      Object.defineProperty(Slides, 'parameters', { get: function get() {
          return [[ElementRef]];
        } });

      Slide = (function () {
        function Slide(slides, elementRef) {
          _classCallCheck(this, Slide);

          this.ele = elementRef.nativeElement;
          slides.add(this);
        }

        _createClass(Slide, [{
          key: 'translate',
          value: function translate(x, duration) {
            this._translateX = x;
            duration = duration || 0;
            this.ele.style[dom.CSS.transition + 'Duration'] = duration + 'ms';
            this.ele.style[dom.CSS.transform] = 'translate3d(' + x + 'px, 0, 0)';
          }
        }, {
          key: 'translateX',
          get: function () {
            return this._translateX;
          }
        }, {
          key: 'left',
          set: function (x) {
            this._left = x;
            this.ele.style.left = x + 'px';
          },
          get: function () {
            return this._left;
          }
        }, {
          key: 'width',
          set: function (width) {
            this._width = width;
            this.ele.style.width = width + 'px';
          },
          get: function () {
            return this._width;
          }
        }], [{
          key: 'config',
          get: function () {
            return { selector: 'ion-slide' };
          }
        }]);

        return Slide;
      })();

      _export('Slide', Slide);

      Object.defineProperty(Slide, 'annotations', { get: function get() {
          return [new IonicDirective(Slide)];
        } });
      Object.defineProperty(Slide, 'parameters', { get: function get() {
          return [[Slides, new Ancestor()], [ElementRef]];
        } });

      SlidePager = (function () {
        function SlidePager(slides, elementRef) {
          _classCallCheck(this, SlidePager);

          this.ele = elementRef.nativeElement;
          this.slides = slides;
          this.slides.setPager(this);
        }

        _createClass(SlidePager, [{
          key: 'getSlides',
          value: function getSlides() {
            return this.slides.slides;
          }
        }], [{
          key: 'config',
          get: function () {
            return { selector: 'ion-pager' };
          }
        }]);

        return SlidePager;
      })();

      _export('SlidePager', SlidePager);

      Object.defineProperty(SlidePager, 'annotations', { get: function get() {
          return [new IonicComponent({ selector: 'ion-pager' }), new IonicView({ template: '<span class="slide-pager-page" *ng-for="#page of getSlides()">{{page.width}}<i class="icon ion-record"></i>X</span>' })];
        } });
      Object.defineProperty(SlidePager, 'parameters', { get: function get() {
          return [[Slides, new Ancestor()], [ElementRef]];
        } });

      SlidesGesture = (function (_DragGesture) {
        function SlidesGesture(slides) {
          _classCallCheck(this, SlidesGesture);

          _get(Object.getPrototypeOf(SlidesGesture.prototype), 'constructor', this).call(this, slides.ele);
          this.slides = slides;
        }

        _inherits(SlidesGesture, _DragGesture);

        _createClass(SlidesGesture, [{
          key: 'onDrag',
          value: function onDrag(event) {
            var x = event.gesture.center.x;
            var y = event.gesture.center.y;
            this._drag.x = x;
            this._drag.y = y;
            this.slides._drag(event);
          }
        }, {
          key: 'onDragStart',
          value: function onDragStart(event) {
            this._drag = {
              startX: event.gesture.center.x,
              startY: event.gesture.center.y,
              time: +new Date()
            };
            this.slides._dragStart(event, this._drag);
          }
        }, {
          key: 'onDragEnd',
          value: function onDragEnd(event) {
            this.slides._endDrag(event, this._drag);
          }
        }]);

        return SlidesGesture;
      })(DragGesture);

      _export('SlidesGesture', SlidesGesture);
    }
  };
});
System.register("ionic/components/split-view/split-nav-view", [], function (_export) {
  "use strict";

  var SplitNavView;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [],
    execute: function () {
      SplitNavView = (function (_NavView) {
        function SplitNavView() {
          _classCallCheck(this, SplitNavView);

          if (_NavView != null) {
            _NavView.apply(this, arguments);
          }
        }

        _inherits(SplitNavView, _NavView);

        return SplitNavView;
      })(NavView);

      _export("SplitNavView", SplitNavView);
    }
  };
});
System.register('ionic/components/split-view/split-view', ['angular2/angular2', 'ionic/components/nav/nav', 'ionic/util'], function (_export) {
  'use strict';

  var Component, Parent, Decorator, View, ElementRef, Nav, util, SplitViewportDecorator, SplitView;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Component = _angular2Angular2.Component;
      Parent = _angular2Angular2.Parent;
      Decorator = _angular2Angular2.Decorator;
      View = _angular2Angular2.View;
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_ionicComponentsNavNav) {
      Nav = _ionicComponentsNavNav.Nav;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      SplitViewportDecorator = function SplitViewportDecorator(splitView, navViewport) {
        _classCallCheck(this, SplitViewportDecorator);

        splitView.setNav(navViewport);
      };

      Object.defineProperty(SplitViewportDecorator, 'annotations', { get: function get() {
          return [new Decorator({ selector: 'ion-nav[split-viewport]' })];
        } });
      Object.defineProperty(SplitViewportDecorator, 'parameters', { get: function get() {
          return [[SplitView, new Parent()], [Nav]];
        } });

      SplitView = (function () {
        function SplitView(elementRef, navPane) {
          _classCallCheck(this, SplitView);

          this.ele = elementRef.nativeElement;
          this.navPane = navPane;
          this.setEnabled(true);
        }

        _createClass(SplitView, [{
          key: 'isActive',
          value: function isActive(Class) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.splitViewport._stack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                if (item.Class === Class) return true;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return false;
          }
        }, {
          key: 'setNav',
          value: function setNav(viewport) {
            var _this = this;

            this.splitViewport = viewport;
            this.navPane.__$push = this.navPane.push;
            this.navPane.push = function (Class, opts) {
              if (_this.isEnabled) {
                opts = opts || {};
                util.defaults(opts, { sync: true });
                if (_this.splitViewport.containsClass(Class)) {
                  return _this.splitViewport.popTo(0);
                } else {
                  _this.splitViewport.popAll();
                  return _this.splitViewport.push(Class, opts);
                }
              } else {
                return _this.navPane.__$push(Class, opts);
              }
            };
          }
        }, {
          key: 'setEnabled',
          value: function setEnabled(isEnabled) {
            if (isEnabled !== this.isEnabled) {
              if (isEnabled) {
                this.splitViewport;
              }
              this.isEnabled = isEnabled;
            }
          }
        }, {
          key: 'defaultView',
          set: function (DefaultClass) {
            this.splitViewport.push(DefaultClass, { sync: true });
          }
        }]);

        return SplitView;
      })();

      _export('SplitView', SplitView);

      Object.defineProperty(SplitView, 'annotations', { get: function get() {
          return [new Component({
            selector: 'ion-split-view',
            properties: ['defaultView', 'navTitle']
          }), new View({
            template: '\n  <ion-view [nav-title]="navTitle" class="split-view">\n    <div class="pane-container">\n      <content></content>\n    </div>\n  </ion-view>\n  <ion-nav split-viewport>\n  </ion-nav>\n<style>\nion-split-view {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\nion-split-view > .view.split-view {\n  max-width: 300px;\n  border-right: 1px solid black;\n  z-index: 1;\n  background: white;\n}\nion-split-view > [split-viewport] {\n  left: 300px !important;\n  width: calc(100% - 300px);\n}\n\n</style>\n  ',
            directives: [SplitViewportDecorator, Nav]
          })];
        } });
      Object.defineProperty(SplitView, 'parameters', { get: function get() {
          return [[ElementRef], [NavPane, new Parent()]];
        } });
    }
  };
});
System.register('ionic/components/switch/switch', ['angular2/angular2', 'angular2/forms', '../../config/annotations'], function (_export) {
  'use strict';

  var ElementRef, ControlGroup, ControlDirective, IonicComponent, IonicView, Switch;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_angular2Forms) {
      ControlGroup = _angular2Forms.ControlGroup;
      ControlDirective = _angular2Forms.ControlDirective;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
      IonicView = _configAnnotations.IonicView;
    }],
    execute: function () {
      Switch = (function () {
        function Switch(elementRef, cd) {
          var _this = this;

          _classCallCheck(this, Switch);

          this.ele = elementRef.nativeElement;
          this.config = Switch.config.invoke(this);
          this.controlDirective = cd;
          cd.valueAccessor = this;
          var setAriaRole = function setAriaRole(v) {
            return _this.ele.setAttribute('aria-role', v);
          };
          var setAriaChecked = function setAriaChecked(v) {
            return _this.ele.setAttribute('aria-checked', v);
          };
          var setAriaInvalid = function setAriaInvalid(v) {
            return _this.ele.setAttribute('aria-invalid', v);
          };
          var setAriaDisabled = function setAriaDisabled(v) {
            return _this.ele.setAttribute('aria-disabled', v);
          };
          this.ele.classList.add('item');
          this.setCheckedProperty = setAriaChecked;
        }

        _createClass(Switch, [{
          key: 'writeValue',
          value: function writeValue(value) {
            this.checked = !!value;
          }
        }, {
          key: 'switchClicked',
          value: function switchClicked(event) {
            this.checked = !this.checked;
          }
        }, {
          key: 'checked',
          set: function (checked) {
            this._checked = checked;
            this.setCheckedProperty(checked);
            this.controlDirective._control().updateValue(this._checked);
          },
          get: function () {
            return this._checked;
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-switch',
              properties: ['checked'],
              host: { '(click)': 'switchClicked($event)' }
            };
          }
        }]);

        return Switch;
      })();

      _export('Switch', Switch);

      Object.defineProperty(Switch, 'annotations', { get: function get() {
          return [new IonicComponent(Switch), new IonicView({ template: '\n  <div class="item-content">\n    <div class="item-title">\n      <content></content>\n    </div>\n    <div class="item-media media-switch">\n      <div class="switch-toggle"></div>\n    </div>\n  </div>' })];
        } });
      Object.defineProperty(Switch, 'parameters', { get: function get() {
          return [[ElementRef], [ControlDirective]];
        } });
    }
  };
});
System.register('ionic/components/tabs/tab-bar', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/angular2', './tab-button', '../icon/icon'], function (_export) {
  'use strict';

  var Parent, Component, View, NgFor, TabButton, Icon, TabBar;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Angular2) {
      NgFor = _angular2Angular2.NgFor;
    }, function (_tabButton) {
      TabButton = _tabButton.TabButton;
    }, function (_iconIcon) {
      Icon = _iconIcon.Icon;
    }],
    execute: function () {
      TabBar = function TabBar(tabs) {
        _classCallCheck(this, TabBar);

        console.log('TabBar constructor', this.id);
      };

      _export('TabBar', TabBar);

      Object.defineProperty(TabBar, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-tab-bar' }), new View({
            template: '\n    <div class="tab-bar" role="tablist">\n      <button *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">\n        <icon [name]="t.tabIcon" class="tab-button-icon"></icon>\n        <span class="tab-button-text">{{t.tabTitle}}</span>\n      </button>\n    </div>\n  ',
            directives: [NgFor, TabButton, Icon]
          })];
        } });
      Object.defineProperty(TabBar, 'parameters', { get: function get() {
          return [[Tabs, new Parent()]];
        } });
    }
  };
});
System.register('ionic/components/tabs/tab-button', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', './tabs'], function (_export) {
  'use strict';

  var Parent, Directive, onInit, Tabs, TabButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_tabs) {
      Tabs = _tabs.Tabs;
    }],
    execute: function () {
      TabButton = (function () {
        function TabButton(tabs) {
          _classCallCheck(this, TabButton);

          this.tabs = tabs;
        }

        _createClass(TabButton, [{
          key: 'onInit',
          value: function onInit() {
            var id = this.tab.item.id;
            this.btnId = 'tab-button-' + id;
            this.panelId = 'tab-panel-' + id;
          }
        }, {
          key: 'onClick',
          value: function onClick(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            this.tabs.select(this.tab);
          }
        }]);

        return TabButton;
      })();

      _export('TabButton', TabButton);

      Object.defineProperty(TabButton, 'annotations', { get: function get() {
          return [new Directive({
            selector: 'button.tab-button',
            properties: ['tab'],
            host: {
              '[attr.id]': 'btnId',
              '[attr.aria-controls]': 'panelId',
              '[attr.aria-selected]': 'tab.isSelected',
              '(^click)': 'onClick($event)'
            },
            lifecycle: [onInit]
          })];
        } });
      Object.defineProperty(TabButton, 'parameters', { get: function get() {
          return [[Tabs, new Parent()]];
        } });
    }
  };
});
System.register('ionic/components/tabs/tab', ['angular2/src/core/annotations_impl/visibility', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/compiler/element_ref', 'angular2/di', '../view/view-controller', '../view/view-item', './tabs'], function (_export) {
  'use strict';

  var Parent, Directive, Component, onInit, View, ElementRef, Injector, ViewController, ViewItem, Tabs, Tab, TabPaneAnchor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implVisibility) {
      Parent = _angular2SrcCoreAnnotations_implVisibility.Parent;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_viewViewItem) {
      ViewItem = _viewViewItem.ViewItem;
    }, function (_tabs) {
      Tabs = _tabs.Tabs;
    }],
    execute: function () {
      Tab = (function (_ViewController) {
        function Tab(tabs, elementRef, injector) {
          var _this = this;

          _classCallCheck(this, Tab);

          _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).call(this, tabs, injector, elementRef);
          this.tabs = tabs;
          this.childNavbar(true);
          var item = this.item = new ViewItem(tabs.parent);
          item.setInstance(this);
          item.viewElement(elementRef.nativeElement);
          tabs.addTab(this);
          this.navbarView = item.navbarView = function () {
            var activeItem = _this.getActive();
            return activeItem && activeItem.navbarView();
          };
          item.enableBack = function () {
            var activeItem = _this.getActive();
            return activeItem && activeItem.enableBack();
          };
          this.panelId = 'tab-panel-' + item.id;
          this.labeledBy = 'tab-button-' + item.id;
        }

        _inherits(Tab, _ViewController);

        _createClass(Tab, [{
          key: 'onInit',
          value: function onInit() {
            var _this2 = this;

            if (this._initialResolve) {
              this.tabs.select(this).then(function () {
                _this2._initialResolve();
                _this2._initialResolve = null;
              });
            }
          }
        }, {
          key: 'load',
          value: function load(callback) {
            if (!this._loaded && this.root) {
              var opts = {
                animate: false,
                navbar: false
              };
              this.push(this.root, null, opts).then(function () {
                callback && callback();
              });
              this._loaded = true;
            } else {
              callback && callback();
            }
          }
        }, {
          key: 'queueInitial',
          value: function queueInitial() {
            var _this3 = this;

            return new Promise(function (res) {
              _this3._initialResolve = res;
            });
          }
        }, {
          key: 'isSelected',
          get: function () {
            return this.tabs.isActive(this.item);
          }
        }, {
          key: 'isNotSelected',
          get: function () {
            return !this.tabs.isActive(this.item);
          }
        }]);

        return Tab;
      })(ViewController);

      _export('Tab', Tab);

      Object.defineProperty(Tab, 'annotations', { get: function get() {
          return [new Component({
            selector: 'ion-tab',
            properties: ['root', 'tabTitle', 'tabIcon'],
            host: {
              '[attr.id]': 'panelId',
              '[attr.aria-labelledby]': 'labeledBy',
              '[attr.aria-hidden]': 'isNotSelected',
              '[class.tab-selected]': 'isSelected',
              'role': 'tabpanel'
            }
          }), new View({
            template: '<template pane-anchor></template><content></content>',
            directives: [TabPaneAnchor]
          })];
        } });
      Object.defineProperty(Tab, 'parameters', { get: function get() {
          return [[Tabs, new Parent()], [ElementRef], [Injector]];
        } });

      TabPaneAnchor = function TabPaneAnchor(tab, elementRef) {
        _classCallCheck(this, TabPaneAnchor);

        tab.anchorElementRef(elementRef);
      };

      Object.defineProperty(TabPaneAnchor, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[pane-anchor]' })];
        } });
      Object.defineProperty(TabPaneAnchor, 'parameters', { get: function get() {
          return [[Tab, new Parent()], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/tabs/tabs', ['angular2/src/di/annotations_impl', 'angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/di', 'angular2/angular2', '../view/view-controller', '../view/view-item', './tab-button', '../icon/icon', '../../config/annotations'], function (_export) {
  'use strict';

  var Optional, Component, onInit, View, Injector, NgFor, ElementRef, ViewController, ViewItem, TabButton, Icon, IonicComponent, Tabs;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      onInit = _angular2SrcCoreAnnotations_implAnnotations.onInit;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_angular2Angular2) {
      NgFor = _angular2Angular2.NgFor;
      ElementRef = _angular2Angular2.ElementRef;
    }, function (_viewViewController) {
      ViewController = _viewViewController.ViewController;
    }, function (_viewViewItem) {
      ViewItem = _viewViewItem.ViewItem;
    }, function (_tabButton) {
      TabButton = _tabButton.TabButton;
    }, function (_iconIcon) {
      Icon = _iconIcon.Icon;
    }, function (_configAnnotations) {
      IonicComponent = _configAnnotations.IonicComponent;
    }],
    execute: function () {
      Tabs = (function (_ViewController) {
        function Tabs(parentViewCtrl, viewItem, injector, elementRef) {
          var _this = this;

          _classCallCheck(this, Tabs);

          _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this, parentViewCtrl, injector, elementRef);
          if (viewItem) {
            this.item = viewItem;
            viewItem.navbarView = function () {
              var activeTab = _this.getActive();
              if (activeTab && activeTab.instance) {
                return activeTab.instance.navbarView();
              }
            };
            viewItem.enableBack = function () {
              return false;
            };
          }
        }

        _inherits(Tabs, _ViewController);

        _createClass(Tabs, [{
          key: 'onInit',
          value: function onInit() {
            Tabs.applyConfig(this);
          }
        }, {
          key: 'addTab',
          value: function addTab(tab) {
            this.add(tab.item);
            if (this.length() === 1) {
              var promise = tab.queueInitial();
              this.item && this.item.addPromise(promise);
            }
          }
        }, {
          key: 'select',
          value: function select(tab) {
            var _this2 = this;

            var enteringItem = null;
            if (typeof tab === 'number') {
              enteringItem = this.getByIndex(tab);
            } else {
              enteringItem = this.getByInstance(tab);
            }
            if (!enteringItem || !enteringItem.instance || this.isTransitioning()) {
              return Promise.reject();
            }
            return new Promise(function (resolve) {
              enteringItem.instance.load(function () {
                var opts = { animate: false };
                var leavingItem = _this2.getActive() || new ViewItem();
                leavingItem.shouldDestroy = false;
                leavingItem.shouldCache = true;
                _this2.transition(enteringItem, leavingItem, opts, function () {
                  resolve();
                });
              });
            });
          }
        }, {
          key: 'tabs',
          get: function () {
            return this.instances();
          }
        }], [{
          key: 'config',
          get: function () {
            return {
              selector: 'ion-tabs',
              defaultProperties: {
                'tabBarPlacement': 'bottom',
                'tabBarIcons': 'top'
              }
            };
          }
        }]);

        return Tabs;
      })(ViewController);

      _export('Tabs', Tabs);

      Object.defineProperty(Tabs, 'annotations', { get: function get() {
          return [new IonicComponent(Tabs), new View({
            template: '\n    <nav class="tab-bar-container">\n      <div class="tab-bar" role="tablist">\n        <button *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">\n          <icon [name]="t.tabIcon" class="tab-button-icon"></icon>\n          <span class="tab-button-text">{{t.tabTitle}}</span>\n        </button>\n      </div>\n    </nav>\n    <section class="content-container">\n      <content></content>\n    </section>\n  ',
            directives: [NgFor, TabButton, Icon]
          })];
        } });
      Object.defineProperty(Tabs, 'parameters', { get: function get() {
          return [[ViewController, new Optional()], [ViewItem, new Optional()], [Injector], [ElementRef]];
        } });
    }
  };
});
System.register('ionic/components/toolbar/toolbar', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/annotations_impl/view', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/view_ref', 'angular2/src/core/zone/ng_zone', 'ionic/platform/platform', '../../util/dom'], function (_export) {
  'use strict';

  var Component, Directive, View, ElementRef, ProtoViewRef, NgZone, Platform, dom, Toolbar, ToolbarTemplate;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreAnnotations_implView) {
      View = _angular2SrcCoreAnnotations_implView.View;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcCoreCompilerView_ref) {
      ProtoViewRef = _angular2SrcCoreCompilerView_ref.ProtoViewRef;
    }, function (_angular2SrcCoreZoneNg_zone) {
      NgZone = _angular2SrcCoreZoneNg_zone.NgZone;
    }, function (_ionicPlatformPlatform) {
      Platform = _ionicPlatformPlatform.Platform;
    }, function (_utilDom) {
      dom = _utilDom;
    }],
    execute: function () {
      Toolbar = (function () {
        function Toolbar(elementRef, ngZone) {
          _classCallCheck(this, Toolbar);

          this.ele = elementRef.nativeElement;
          Toolbar.config.invoke(this);
        }

        _createClass(Toolbar, [{
          key: 'alignTitle',
          value: function alignTitle() {
            var _this = this;

            var toolbarEle = this.ele;
            var innerTitleEle = this._innerTitleEle || (this._innerTitleEle = toolbarEle.querySelector('.toolbar-inner-title'));
            var titleEle = this._titleEle || (this._titleEle = innerTitleEle.querySelector('ion-title'));
            var style = this._style || (this._style = window.getComputedStyle(titleEle));
            var titleOffsetWidth = titleEle.offsetWidth;
            var titleOffsetLeft = titleEle.offsetLeft;
            var titleScrollWidth = titleEle.scrollWidth;
            var toolbarOffsetWidth = toolbarEle.offsetWidth;
            if (window.getComputedStyle(innerTitleEle).margin !== '0px') {
              this._showTitle();
              return;
            }
            if (style.textAlign !== 'center' || titleOffsetWidth < titleScrollWidth) {
              this._showTitle();
            } else {
              var rightMargin = toolbarOffsetWidth - (titleOffsetLeft + titleOffsetWidth);
              var centerMargin = titleOffsetLeft - rightMargin;
              innerTitleEle.style.margin = '0 ' + centerMargin + 'px 0 0';
              dom.raf(function () {
                if (titleEle.offsetWidth < titleEle.scrollWidth) {
                  innerTitleEle.style.margin = '';
                  innerTitleEle.style.textAlign = 'left';
                }
                _this._showTitle();
              });
            }
          }
        }, {
          key: '_showTitle',
          value: function _showTitle() {
            if (!this._shown) {
              this._shown = true;
              this._innerTitleEle.classList.remove('toolbar-title-hide');
            }
          }
        }]);

        return Toolbar;
      })();

      _export('Toolbar', Toolbar);

      Object.defineProperty(Toolbar, 'annotations', { get: function get() {
          return [new Component({ selector: 'ion-toolbar' }), new View({
            template: '<div class="toolbar-inner"><content></content></div>',
            directives: []
          })];
        } });
      Object.defineProperty(Toolbar, 'parameters', { get: function get() {
          return [[ElementRef], [NgZone]];
        } });

      ToolbarTemplate = function ToolbarTemplate(item, protoViewRef) {
        _classCallCheck(this, ToolbarTemplate);

        item.addProtoViewRef('toolbar', protoViewRef);
      };

      _export('ToolbarTemplate', ToolbarTemplate);

      Object.defineProperty(ToolbarTemplate, 'annotations', { get: function get() {
          return [new Directive({ selector: 'template[toolbar]' })];
        } });
      Object.defineProperty(ToolbarTemplate, 'parameters', { get: function get() {
          return [[ViewItem], [ProtoViewRef]];
        } });
    }
  };
});
System.register('ionic/components/view/view-controller', ['angular2/angular2', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/src/core/compiler/view_manager', 'angular2/di', '../ion', '../app/app', '../../routing/router', './view-item', '../nav/nav-controller', '../nav/pane', '../../transitions/transition', '../../util/click-block', 'ionic/util'], function (_export) {
  'use strict';

  var Compiler, ElementRef, DynamicComponentLoader, AppViewManager, Injector, bind, Ion, IonicApp, IonicRouter, ViewItem, NavController, PaneController, Transition, ClickBlock, util, ViewController, ACTIVE_STATE, CACHED_STATE, STAGED_ENTERING_STATE, STAGED_LEAVING_STATE, ctrlIds;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2Angular2) {
      Compiler = _angular2Angular2.Compiler;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcCoreCompilerDynamic_component_loader) {
      DynamicComponentLoader = _angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader;
    }, function (_angular2SrcCoreCompilerView_manager) {
      AppViewManager = _angular2SrcCoreCompilerView_manager.AppViewManager;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
      bind = _angular2Di.bind;
    }, function (_ion) {
      Ion = _ion.Ion;
    }, function (_appApp) {
      IonicApp = _appApp.IonicApp;
    }, function (_routingRouter) {
      IonicRouter = _routingRouter.IonicRouter;
    }, function (_viewItem) {
      ViewItem = _viewItem.ViewItem;
    }, function (_navNavController) {
      NavController = _navNavController.NavController;
    }, function (_navPane) {
      PaneController = _navPane.PaneController;
    }, function (_transitionsTransition) {
      Transition = _transitionsTransition.Transition;
    }, function (_utilClickBlock) {
      ClickBlock = _utilClickBlock.ClickBlock;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      ViewController = (function (_Ion) {
        function ViewController(parentViewCtrl, injector, elementRef) {
          _classCallCheck(this, ViewController);

          _get(Object.getPrototypeOf(ViewController.prototype), 'constructor', this).call(this, elementRef);
          this.parent = parentViewCtrl;
          this.compiler = injector.get(Compiler);
          this.loader = injector.get(DynamicComponentLoader);
          this.viewMngr = injector.get(AppViewManager);
          this.router = injector.get(IonicRouter);
          this.app = injector.get(IonicApp);
          this.router.addViewController(this);
          this.items = [];
          this.panes = new PaneController(this);
          this.sbTransition = null;
          this.sbActive = false;
          this.id = ++ctrlIds;
          this._ids = -1;
          this.injector = injector.resolveAndCreateChild([bind(ViewController).toValue(this), bind(NavController).toValue(new NavController(this))]);
        }

        _inherits(ViewController, _Ion);

        _createClass(ViewController, [{
          key: 'push',
          value: function push(ComponentType) {
            var params = arguments[1] === undefined ? {} : arguments[1];
            var opts = arguments[2] === undefined ? {} : arguments[2];

            if (!ComponentType || this.isTransitioning()) {
              return Promise.reject();
            }
            var resolve = undefined;
            var promise = new Promise(function (res) {
              resolve = res;
            });
            if (!this.items.length) {
              opts.animation = 'none';
            }
            opts.direction = opts.direction || 'forward';
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = false;
            leavingItem.shouldCache = true;
            var enteringItem = new ViewItem(this, ComponentType, params);
            this.add(enteringItem);
            this.app.stateChange(enteringItem, this);
            this.transition(enteringItem, leavingItem, opts, function () {
              resolve();
            });
            return promise;
          }
        }, {
          key: 'pop',
          value: function pop() {
            var opts = arguments[0] === undefined ? {} : arguments[0];

            if (this.isTransitioning() || this.items.length < 2) {
              return Promise.reject();
            }
            var resolve = undefined;
            var promise = new Promise(function (res) {
              resolve = res;
            });
            opts.direction = opts.direction || 'back';
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = true;
            leavingItem.shouldCache = false;
            leavingItem.willUnload();
            var enteringItem = this.getPrevious(leavingItem);
            if (enteringItem) {
              this.app.stateChange(enteringItem, this);
              this.transition(enteringItem, leavingItem, opts, function () {
                resolve();
              });
            } else {
              this.transitionComplete();
              resolve();
            }
            return promise;
          }
        }, {
          key: 'transition',
          value: function transition(enteringItem, leavingItem, opts, callback) {
            var _this = this;

            if (!enteringItem || enteringItem === leavingItem) {
              return callback();
            }
            if (opts.animate === false) {
              opts.animation = 'none';
            }
            opts.animate = opts.animation !== 'none';
            enteringItem.stage(function () {
              enteringItem.shouldDestroy = false;
              enteringItem.shouldCache = false;
              enteringItem.willEnter();
              leavingItem.willLeave();
              enteringItem.state = STAGED_ENTERING_STATE;
              leavingItem.state = STAGED_LEAVING_STATE;
              var transAnimation = Transition.create(_this, opts);
              if (!opts.animate) {
                transAnimation.duration(0);
              }
              var duration = transAnimation.duration();
              if (duration > 64) {
                ClickBlock(true, duration + 200);
              }
              transAnimation.play().then(function () {
                enteringItem.state = ACTIVE_STATE;
                leavingItem.state = CACHED_STATE;
                transAnimation.dispose();
                enteringItem.didEnter();
                leavingItem.didLeave();
                _this.transitionComplete();
                callback();
              });
            });
          }
        }, {
          key: 'swipeBackStart',
          value: function swipeBackStart() {
            var _this2 = this;

            if (this.isTransitioning() || this.items.length < 2) {
              return;
            }
            this.sbActive = true;
            this.sbResolve = null;
            var opts = { direction: 'back' };
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = true;
            leavingItem.shouldCache = false;
            leavingItem.willLeave();
            leavingItem.willUnload();
            var enteringItem = this.getPrevious(leavingItem);
            enteringItem.shouldDestroy = false;
            enteringItem.shouldCache = false;
            enteringItem.willEnter();
            enteringItem.stage(function () {
              enteringItem.state = STAGED_ENTERING_STATE;
              leavingItem.state = STAGED_LEAVING_STATE;
              _this2.sbTransition = Transition.create(_this2, opts);
              _this2.sbTransition.easing('linear');
              _this2.sbTransition.stage();
              var swipeBackPromise = new Promise(function (res) {
                _this2.sbResolve = res;
              });
              swipeBackPromise.then(function (completeSwipeBack) {
                if (completeSwipeBack) {
                  enteringItem.state = ACTIVE_STATE;
                  leavingItem.state = CACHED_STATE;
                  enteringItem.didEnter();
                  leavingItem.didLeave();
                  _this2.app.stateChange(enteringItem, _this2);
                } else {
                  leavingItem.state = ACTIVE_STATE;
                  enteringItem.state = CACHED_STATE;
                  leavingItem.willEnter();
                  leavingItem.didEnter();
                  enteringItem.didLeave();
                  leavingItem.shouldDestroy = false;
                  enteringItem.shouldDestroy = false;
                }
                _this2.transitionComplete();
              });
            });
          }
        }, {
          key: 'swipeBackProgress',
          value: function swipeBackProgress(progress) {
            if (this.sbTransition) {
              ClickBlock(true, 4000);
              this.sbTransition.progress(Math.min(1, Math.max(0, progress)));
            }
          }
        }, {
          key: 'swipeBackEnd',
          value: function swipeBackEnd(completeSwipeBack, progress, playbackRate) {
            var _this3 = this;

            if (this.sbTransition && this.sbActive) {
              this.sbActive = false;
              if (progress <= 0) {
                this.swipeBackProgress(0.0001);
              } else if (progress >= 1) {
                this.swipeBackProgress(0.9999);
              }
              if (!completeSwipeBack) {
                playbackRate = playbackRate * -1;
              }
              this.sbTransition.playbackRate(playbackRate);
              this.sbTransition.play().then(function () {
                _this3.sbResolve && _this3.sbResolve(completeSwipeBack);
                _this3.sbTransition && _this3.sbTransition.dispose();
                _this3.sbResolve = _this3.sbTransition = null;
              });
            }
          }
        }, {
          key: 'swipeBackEnabled',
          value: function swipeBackEnabled() {
            var activeItem = this.getActive();
            if (activeItem) {
              return activeItem.enableBack();
            }
            return false;
          }
        }, {
          key: 'transitionComplete',
          value: function transitionComplete() {
            var _this4 = this;

            this.items.forEach(function (item) {
              if (item) {
                if (item.shouldDestroy) {
                  _this4.remove(item);
                  item.destroy();
                } else if (item.state === CACHED_STATE && item.shouldCache) {
                  item.shouldCache = false;
                }
              }
            });
            ClickBlock(false);
          }
        }, {
          key: 'isTransitioning',
          value: function isTransitioning() {
            var state = undefined;
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              state = this.items[i].state;
              if (state === STAGED_ENTERING_STATE || state === STAGED_LEAVING_STATE) {
                return true;
              }
            }
            return false;
          }
        }, {
          key: 'getActive',
          value: function getActive() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              if (this.items[i].state === ACTIVE_STATE) {
                return this.items[i];
              }
            }
            return null;
          }
        }, {
          key: 'getByInstance',
          value: function getByInstance(instance) {
            if (instance) {
              for (var i = 0, ii = this.items.length; i < ii; i++) {
                if (this.items[i].instance === instance) {
                  return this.items[i];
                }
              }
            }
            return null;
          }
        }, {
          key: 'getByIndex',
          value: function getByIndex(index) {
            if (index < this.items.length && index > -1) {
              return this.items[index];
            }
            return null;
          }
        }, {
          key: 'getPrevious',
          value: function getPrevious(item) {
            if (item) {
              return this.items[this.items.indexOf(item) - 1];
            }
            return null;
          }
        }, {
          key: 'getStagedEnteringItem',
          value: function getStagedEnteringItem() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              if (this.items[i].state === STAGED_ENTERING_STATE) {
                return this.items[i];
              }
            }
            return null;
          }
        }, {
          key: 'getStagedLeavingItem',
          value: function getStagedLeavingItem() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              if (this.items[i].state === STAGED_LEAVING_STATE) {
                return this.items[i];
              }
            }
            return null;
          }
        }, {
          key: 'navbarViewContainer',
          value: function navbarViewContainer(nbContainer) {
            if (nbContainer) {
              this._nbContainer = nbContainer;
            }
            if (this._nbContainer) {
              return this._nbContainer;
            }
            if (this.parent) {
              return this.parent.navbarViewContainer();
            }
          }
        }, {
          key: 'anchorElementRef',
          value: function anchorElementRef() {
            if (arguments.length) {
              this._anchorER = arguments[0];
            }
            return this._anchorER;
          }
        }, {
          key: 'anchorViewContainerRef',
          value: function anchorViewContainerRef() {
            if (arguments.length) {
              this._anchorVC = arguments[0];
            }
            return this._anchorVC;
          }
        }, {
          key: 'childNavbar',
          value: function childNavbar() {
            if (arguments.length) {
              this._childNavbar = arguments[0];
            }
            return this._childNavbar;
          }
        }, {
          key: 'add',
          value: function add(item) {
            item.id = this.id + '' + ++this._ids;
            this.items.push(item);
          }
        }, {
          key: 'remove',
          value: function remove(itemOrIndex) {
            util.array.remove(this.items, itemOrIndex);
          }
        }, {
          key: 'length',
          value: function length() {
            return this.items.length;
          }
        }, {
          key: 'setItems',
          value: function setItems(components) {
            this.clear();
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = true;
            leavingItem.shouldCache = false;
            leavingItem.willUnload();
            this.transitionComplete();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var c = _step.value;

                this.push(c, { animate: false });
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: 'clear',
          value: function clear() {
            var pops = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                pops.push(this.pop({ animate: false }));
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            return Promise.all(pops);
          }
        }, {
          key: 'instances',
          value: function instances() {
            var instances = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var item = _step3.value;

                if (item.instance) {
                  instances.push(item.instance);
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                  _iterator3['return']();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return instances;
          }
        }, {
          key: 'isActive',
          value: function isActive(item) {
            return item && item.state === ACTIVE_STATE;
          }
        }, {
          key: 'isStagedEntering',
          value: function isStagedEntering(item) {
            return item && item.state === STAGED_ENTERING_STATE;
          }
        }]);

        return ViewController;
      })(Ion);

      _export('ViewController', ViewController);

      Object.defineProperty(ViewController, 'parameters', { get: function get() {
          return [[ViewController], [Injector], [ElementRef]];
        } });
      ACTIVE_STATE = 1;
      CACHED_STATE = 2;
      STAGED_ENTERING_STATE = 3;
      STAGED_LEAVING_STATE = 4;
      ctrlIds = -1;
    }
  };
});
System.register('ionic/components/view/view-item', ['angular2/angular2', 'angular2/src/core/compiler/element_ref', 'angular2/di', '../nav/nav-controller'], function (_export) {
  'use strict';

  var EventEmitter, ElementRef, bind, NavParams, ViewItem;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function isComponent(elementBinder, id) {
    return elementBinder && elementBinder.componentDirective && elementBinder.componentDirective.metadata.id == id;
  }
  return {
    setters: [function (_angular2Angular2) {
      EventEmitter = _angular2Angular2.EventEmitter;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2Di) {
      bind = _angular2Di.bind;
    }, function (_navNavController) {
      NavParams = _navNavController.NavParams;
    }],
    execute: function () {
      ViewItem = (function () {
        function ViewItem(viewCtrl, ComponentType) {
          var params = arguments[2] === undefined ? {} : arguments[2];

          _classCallCheck(this, ViewItem);

          this.viewCtrl = viewCtrl;
          this.ComponentType = ComponentType;
          this.params = new NavParams(params);
          this.instance = null;
          this.state = 0;
          this.disposals = [];
          this.protos = {};
          this._nbItms = [];
          this._promises = [];
        }

        _createClass(ViewItem, [{
          key: 'addProtoViewRef',
          value: function addProtoViewRef(name, protoViewRef) {
            this.protos[name] = protoViewRef;
          }
        }, {
          key: 'stage',
          value: function stage(callback) {
            var _this = this;

            var viewCtrl = this.viewCtrl;
            if (this.instance || !viewCtrl) {
              return callback();
            }
            viewCtrl.compiler.compileInHost(this.ComponentType).then(function (componentProtoViewRef) {
              var itemStructure = _this.sturcture = _this.inspectStructure(componentProtoViewRef);
              viewCtrl.panes.get(itemStructure, function (pane) {
                _this.pane = pane;
                var injector = viewCtrl.injector.resolveAndCreateChild([bind(NavParams).toValue(_this.params), bind(ViewItem).toValue(_this)]);
                var contentContainer = pane.contentContainerRef;
                var hostViewRef = contentContainer.create(componentProtoViewRef, -1, null, injector);
                _this.setInstance(viewCtrl.viewMngr.getComponent(new ElementRef(hostViewRef, 0)));
                _this.viewElement(hostViewRef._view.render._view.rootNodes[0]);
                _this.disposals.push(function () {
                  contentContainer.remove(contentContainer.indexOf(hostViewRef));
                });
                var context = {
                  boundElementIndex: 0,
                  parentView: { _view: hostViewRef._view.componentChildViews[0] }
                };
                var navbarViewContainer = viewCtrl.navbarViewContainer();
                var navbarProtoView = _this.protos.navbar;
                if (navbarViewContainer && navbarProtoView) {
                  (function () {
                    var navbarView = navbarViewContainer.create(navbarProtoView, -1, context, injector);
                    _this.disposals.push(function () {
                      navbarViewContainer.remove(navbarViewContainer.indexOf(navbarView));
                    });
                  })();
                }
                try {
                  _this.loaded();
                } catch (e) {
                  console.error(e);
                }
                Promise.all(_this._promises).then(function () {
                  callback();
                  _this._promises = [];
                });
              });
            });
          }
        }, {
          key: 'addPromise',
          value: function addPromise(childPromise) {
            this._promises.push(childPromise);
          }
        }, {
          key: 'inspectStructure',
          value: function inspectStructure(componentProtoViewRef) {
            var navbar = false;
            var key = '_';
            componentProtoViewRef._protoView.elementBinders.forEach(function (rootElementBinder) {
              if (!rootElementBinder.componentDirective || !rootElementBinder.nestedProtoView) return;
              rootElementBinder.nestedProtoView.elementBinders.forEach(function (nestedElementBinder) {
                if (isComponent(nestedElementBinder, 'Tabs')) {
                  navbar = true;
                }
                if (!nestedElementBinder.componentDirective && nestedElementBinder.nestedProtoView) {
                  nestedElementBinder.nestedProtoView.elementBinders.forEach(function (templatedElementBinder) {
                    if (isComponent(templatedElementBinder, 'Navbar')) {
                      navbar = true;
                    }
                  });
                }
              });
            });
            if (this.viewCtrl.childNavbar()) {
              navbar = false;
            }
            if (navbar) key += 'n';
            return {
              navbar: navbar,
              key: key
            };
          }
        }, {
          key: 'enableBack',
          value: function enableBack() {
            if (this.viewCtrl) {
              return !!this.viewCtrl.getPrevious(this);
            }
            return false;
          }
        }, {
          key: 'setInstance',
          value: function setInstance(instance) {
            this.instance = instance;
            this.instance._viewItem = this;
            this.instance._viewDidEnter = new EventEmitter('viewDidEnter');
            this.instance._viewWillEnter = new EventEmitter('viewWillEnter');
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            for (var i = 0; i < this.disposals.length; i++) {
              this.disposals[i]();
            }
            this.didUnload();
            for (var _name in this) {
              if (this.hasOwnProperty(_name)) {
                this[_name] = null;
              }
            }
          }
        }, {
          key: 'viewElement',
          value: function viewElement() {
            if (arguments.length) {
              this._vwEle = arguments[0];
              this._vwEle && this._vwEle.classList.add('nav-item');
            }
            return this._vwEle;
          }
        }, {
          key: 'navbarView',
          value: function navbarView() {
            if (arguments.length) {
              this._nbView = arguments[0];
            }
            return this._nbView;
          }
        }, {
          key: 'navbarElement',
          value: function navbarElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.element();
            }
          }
        }, {
          key: 'titleElement',
          value: function titleElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.titleElement();
            }
          }
        }, {
          key: 'backButtonElement',
          value: function backButtonElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.backButtonElement();
            }
          }
        }, {
          key: 'backButtonTextElement',
          value: function backButtonTextElement() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.backButtonTextElement();
            }
          }
        }, {
          key: 'navbarItemElements',
          value: function navbarItemElements() {
            var navbarView = this.navbarView();
            if (navbarView) {
              return navbarView.itemElements();
            }
          }
        }, {
          key: 'postRender',
          value: function postRender() {
            var navbarView = this.navbarView();
            if (navbarView) {
              navbarView.alignTitle();
            }
          }
        }, {
          key: 'loaded',
          value: function loaded() {
            this.instance && this.instance.viewLoaded && this.instance.viewLoaded();
          }
        }, {
          key: 'willEnter',
          value: function willEnter() {
            this.instance && this.instance.viewWillEnter && this.instance.viewWillEnter();
          }
        }, {
          key: 'didEnter',
          value: function didEnter() {
            this.pane && this.pane.showPane(true);
            var navbarView = this.navbarView();
            if (navbarView) {
              navbarView.didEnter();
            }
            this.instance && this.instance.viewDidEnter && this.instance.viewDidEnter();
          }
        }, {
          key: 'willLeave',
          value: function willLeave() {
            this.instance && this.instance.viewWillLeave && this.instance.viewWillLeave();
          }
        }, {
          key: 'didLeave',
          value: function didLeave() {
            this.instance && this.instance.viewDidLeave && this.instance.viewDidLeave();
          }
        }, {
          key: 'willUnload',
          value: function willUnload() {
            this.instance && this.instance.viewWillUnload && this.instance.viewWillUnload();
          }
        }, {
          key: 'didUnload',
          value: function didUnload() {
            this.instance && this.instance.viewDidUnload && this.instance.viewDidUnload();
          }
        }]);

        return ViewItem;
      })();

      _export('ViewItem', ViewItem);
    }
  };
});
System.register('ionic/components/view/view', ['angular2/src/core/annotations_impl/annotations', 'angular2/src/core/compiler/element_ref', 'angular2/src/di/annotations_impl', './view-item', '../ion'], function (_export) {
  'use strict';

  var Directive, ElementRef, Optional, ViewItem, Ion, IonView;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcDiAnnotations_impl) {
      Optional = _angular2SrcDiAnnotations_impl.Optional;
    }, function (_viewItem) {
      ViewItem = _viewItem.ViewItem;
    }, function (_ion) {
      Ion = _ion.Ion;
    }],
    execute: function () {
      IonView = (function (_Ion) {
        function IonView(item, elementRef) {
          _classCallCheck(this, IonView);

          _get(Object.getPrototypeOf(IonView.prototype), 'constructor', this).call(this, elementRef);
          this.ele = elementRef.nativeElement;
        }

        _inherits(IonView, _Ion);

        return IonView;
      })(Ion);

      _export('IonView', IonView);

      Object.defineProperty(IonView, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-view' })];
        } });
      Object.defineProperty(IonView, 'parameters', { get: function get() {
          return [[ViewItem, new Optional()], [ElementRef]];
        } });
    }
  };
});
System.register("ionic/util/render/dom", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});
/**
 * TODO: Wait until the new ElementRef stuff lands in Angular2.
import {RenderedElement} from 'ionic/util/render/element';

export class DomRenderedElement extends RenderedElement {
  constructor(domElement: Element) {
    super(domElement)
  }

  removeClass(className) {
    this.element.classList.remove(classList);
  }
  addClass(...classNames) {
    for(let c of classNames) {
      this.element.classList.add(c);
    }
  }
  removeClass(...classNames) {
    for(let c of classes) {
      this.element.classList.remove(c);
    }
  }
}
*/
System.register("ionic/util/render/element", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});
/**
 * TODO: Wait until the new ElementRef stuff lands in Angular2
export class RenderedElement {
  constructor(element) {
    this.element = element;
}
  _notImplemented(fnName) {
    console.error("RenderedElement." + fnName + "addClass is not implemented. Use a concrete class like DomRenderedElement instead.");
  }
  addClass(...classNames)       { this._notImplemented('addClass'); }
  removeClass(className)    { this._notImplemented('removeClass'); }
  removeClasses(...classNames)  { this._notImplemented('removeClasses'); }
}

 */
System.register('ionic/util/test/util.spec', ['ionic/util'], function (_export) {
  'use strict';

  var util;

  _export('run', run);

  function run() {
    describe('extend', function () {
      it('should extend simple', function () {
        var obj = {
          a: '0',
          c: '0'
        };
        expect(util.extend(obj, {
          a: '1',
          b: '2'
        })).toBe(obj);
        expect(obj).toEqual({
          a: '1',
          b: '2',
          c: '0'
        });
      });
      it('should extend complex', function () {
        expect(util.extend({
          a: '0',
          b: '0'
        }, {
          b: '1',
          c: '1'
        }, {
          c: '2',
          d: '2'
        })).toEqual({
          a: '0',
          b: '1',
          c: '2',
          d: '2'
        });
      });
    });
    describe('defaults', function () {
      it('should simple defaults', function () {
        var obj = { a: '1' };
        expect(util.defaults(obj, {
          a: '2',
          b: '2'
        })).toBe(obj);
        expect(obj).toEqual({
          a: '1',
          b: '2'
        });
      });
      it('should complex defaults', function () {
        expect(util.defaults({
          a: '0',
          b: '0'
        }, {
          b: '1',
          c: '1',
          e: '1'
        }, {
          c: '2',
          d: '2'
        })).toEqual({
          a: '0',
          b: '0',
          c: '2',
          d: '2',
          e: '1'
        });
      });
    });
  }

  return {
    setters: [function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {}
  };
});
System.register('ionic/components/aside/extensions/gestures', ['ionic/components/aside/aside', 'ionic/gestures/slide-edge-gesture'], function (_export) {
  'use strict';

  var Aside, SlideEdgeGesture, AsideGesture, LeftAsideGesture, RightAsideGesture, TopAsideGesture, BottomAsideGesture;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_ionicComponentsAsideAside) {
      Aside = _ionicComponentsAsideAside.Aside;
    }, function (_ionicGesturesSlideEdgeGesture) {
      SlideEdgeGesture = _ionicGesturesSlideEdgeGesture.SlideEdgeGesture;
    }],
    execute: function () {
      AsideGesture = (function (_SlideEdgeGesture) {
        function AsideGesture(aside) {
          _classCallCheck(this, AsideGesture);

          var slideElement = aside.getContentElement();
          _get(Object.getPrototypeOf(AsideGesture.prototype), 'constructor', this).call(this, slideElement, {
            direction: aside.side === 'left' || aside.side === 'right' ? 'x' : 'y',
            edge: aside.side,
            threshold: 75
          });
          this.aside = aside;
          this.slideElement = slideElement;
          this.listen();
        }

        _inherits(AsideGesture, _SlideEdgeGesture);

        _createClass(AsideGesture, [{
          key: 'canStart',
          value: function canStart(ev) {
            return this.aside.isOpen ? true : _get(Object.getPrototypeOf(AsideGesture.prototype), 'canStart', this).call(this, ev);
          }
        }, {
          key: 'onSlideBeforeStart',
          value: function onSlideBeforeStart(slide, ev) {
            this.aside.setSliding(true);
            this.aside.setChanging(true);
            return new Promise(function (resolve) {
              requestAnimationFrame(resolve);
            });
          }
        }, {
          key: 'onSlide',
          value: function onSlide(slide, ev) {
            this.aside.setOpenAmt(slide.distance / slide.max);
            this.aside.setTransform('translate3d(' + slide.distance + 'px,0,0)');
          }
        }, {
          key: 'onSlideEnd',
          value: function onSlideEnd(slide, ev) {
            this.aside.setTransform('');
            this.aside.setSliding(false);
            if (Math.abs(ev.gesture.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5) {
              this.aside.setOpen(!this.aside.isOpen);
            }
          }
        }, {
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.max : slide.min;
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: 0,
              max: this.aside.ele.offsetWidth
            };
          }
        }]);

        return AsideGesture;
      })(SlideEdgeGesture);

      Object.defineProperty(AsideGesture, 'parameters', { get: function get() {
          return [[Aside]];
        } });

      LeftAsideGesture = (function (_AsideGesture) {
        function LeftAsideGesture() {
          _classCallCheck(this, LeftAsideGesture);

          if (_AsideGesture != null) {
            _AsideGesture.apply(this, arguments);
          }
        }

        _inherits(LeftAsideGesture, _AsideGesture);

        return LeftAsideGesture;
      })(AsideGesture);

      _export('LeftAsideGesture', LeftAsideGesture);

      RightAsideGesture = (function (_LeftAsideGesture) {
        function RightAsideGesture() {
          _classCallCheck(this, RightAsideGesture);

          if (_LeftAsideGesture != null) {
            _LeftAsideGesture.apply(this, arguments);
          }
        }

        _inherits(RightAsideGesture, _LeftAsideGesture);

        _createClass(RightAsideGesture, [{
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.min : slide.max;
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: -this.aside.ele.offsetWidth,
              max: 0
            };
          }
        }]);

        return RightAsideGesture;
      })(LeftAsideGesture);

      _export('RightAsideGesture', RightAsideGesture);

      TopAsideGesture = (function (_AsideGesture2) {
        function TopAsideGesture() {
          _classCallCheck(this, TopAsideGesture);

          if (_AsideGesture2 != null) {
            _AsideGesture2.apply(this, arguments);
          }
        }

        _inherits(TopAsideGesture, _AsideGesture2);

        _createClass(TopAsideGesture, [{
          key: 'onSlide',
          value: function onSlide(slide, ev) {
            this.aside.setTransform('translate3d(0,' + slide.distance + 'px,0)');
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: 0,
              max: this.aside.ele.offsetHeight
            };
          }
        }]);

        return TopAsideGesture;
      })(AsideGesture);

      _export('TopAsideGesture', TopAsideGesture);

      BottomAsideGesture = (function (_TopAsideGesture) {
        function BottomAsideGesture() {
          _classCallCheck(this, BottomAsideGesture);

          if (_TopAsideGesture != null) {
            _TopAsideGesture.apply(this, arguments);
          }
        }

        _inherits(BottomAsideGesture, _TopAsideGesture);

        _createClass(BottomAsideGesture, [{
          key: 'getElementStartPos',
          value: function getElementStartPos(slide, ev) {
            return this.aside.isOpen ? slide.min : slide.max;
          }
        }, {
          key: 'getSlideBoundaries',
          value: function getSlideBoundaries() {
            return {
              min: -this.aside.ele.offsetHeight,
              max: 0
            };
          }
        }]);

        return BottomAsideGesture;
      })(TopAsideGesture);

      _export('BottomAsideGesture', BottomAsideGesture);
    }
  };
});
System.register('ionic/components/aside/extensions/types', ['ionic/components/aside/aside', 'ionic/util/dom'], function (_export) {
  'use strict';

  var Aside, CSS, asideManipulator, contentManipulator, AsideType, AsideTypeOverlay, AsideTypePush, AsideTypeReveal;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_ionicComponentsAsideAside) {
      Aside = _ionicComponentsAsideAside.Aside;
    }, function (_ionicUtilDom) {
      CSS = _ionicUtilDom.CSS;
    }],
    execute: function () {
      asideManipulator = {
        setSliding: function setSliding(sliding) {
          this.aside.ele.classList[sliding ? 'add' : 'remove']('no-transition');
        },
        setOpen: function setOpen(open) {
          this.aside.ele.classList[open ? 'add' : 'remove']('open');
        },
        setTransform: function setTransform(t) {
          this.aside.ele.style[CSS.transform] = t;
        }
      };
      contentManipulator = {
        setSliding: function setSliding(sliding) {
          this.aside.contentElement.classList[sliding ? 'add' : 'remove']('no-transition');
        },
        setOpen: function setOpen(open) {
          this.aside.contentElement.classList[open ? 'add' : 'remove']('aside-open-' + this.aside.side);
        },
        setTransform: function setTransform(t) {
          this.aside.contentElement.style[CSS.transform] = t;
        }
      };

      AsideType = function AsideType(aside) {
        _classCallCheck(this, AsideType);

        this.aside = aside;
        setTimeout(function () {
          aside.contentElement.classList.add('aside-content');
        });
      };

      _export('AsideType', AsideType);

      Object.defineProperty(AsideType, 'parameters', { get: function get() {
          return [[Aside]];
        } });

      AsideTypeOverlay = (function (_AsideType) {
        function AsideTypeOverlay() {
          _classCallCheck(this, AsideTypeOverlay);

          if (_AsideType != null) {
            _AsideType.apply(this, arguments);
          }
        }

        _inherits(AsideTypeOverlay, _AsideType);

        _createClass(AsideTypeOverlay, [{
          key: 'setSliding',
          value: function setSliding(sliding) {
            asideManipulator.setSliding.call(this, sliding);
          }
        }, {
          key: 'setOpen',
          value: function setOpen(open) {
            asideManipulator.setOpen.call(this, open);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(t) {
            asideManipulator.setTransform.call(this, t);
          }
        }]);

        return AsideTypeOverlay;
      })(AsideType);

      _export('AsideTypeOverlay', AsideTypeOverlay);

      AsideTypePush = (function (_AsideType2) {
        function AsideTypePush() {
          _classCallCheck(this, AsideTypePush);

          if (_AsideType2 != null) {
            _AsideType2.apply(this, arguments);
          }
        }

        _inherits(AsideTypePush, _AsideType2);

        _createClass(AsideTypePush, [{
          key: 'setSliding',
          value: function setSliding(sliding) {
            asideManipulator.setSliding.call(this, sliding);
            contentManipulator.setSliding.call(this, sliding);
          }
        }, {
          key: 'setOpen',
          value: function setOpen(open) {
            asideManipulator.setOpen.call(this, open);
            contentManipulator.setOpen.call(this, open);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(t) {
            asideManipulator.setTransform.call(this, t);
            contentManipulator.setTransform.call(this, t);
          }
        }]);

        return AsideTypePush;
      })(AsideType);

      _export('AsideTypePush', AsideTypePush);

      AsideTypeReveal = (function (_AsideType3) {
        function AsideTypeReveal() {
          _classCallCheck(this, AsideTypeReveal);

          if (_AsideType3 != null) {
            _AsideType3.apply(this, arguments);
          }
        }

        _inherits(AsideTypeReveal, _AsideType3);

        _createClass(AsideTypeReveal, [{
          key: 'setSliding',
          value: function setSliding(sliding) {
            contentManipulator.setSliding.call(this, sliding);
          }
        }, {
          key: 'setOpen',
          value: function setOpen(sliding) {
            contentManipulator.setOpen.call(this, sliding);
          }
        }, {
          key: 'setTransform',
          value: function setTransform(t) {
            contentManipulator.setTransform.call(this, t);
          }
        }]);

        return AsideTypeReveal;
      })(AsideType);

      _export('AsideTypeReveal', AsideTypeReveal);
    }
  };
});
System.register('ionic/components/form/input/input', ['angular2/src/core/annotations_impl/annotations'], function (_export) {
  'use strict';

  var Component, Directive, Input;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }],
    execute: function () {
      Input = function Input() {
        _classCallCheck(this, Input);

        console.log('INPUT');
      };

      _export('Input', Input);

      Object.defineProperty(Input, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-input' })];
        } });
    }
  };
});
System.register('ionic/components/form/label/label', ['angular2/src/core/annotations_impl/annotations'], function (_export) {
  'use strict';

  var Component, Directive, Label;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2SrcCoreAnnotations_implAnnotations) {
      Component = _angular2SrcCoreAnnotations_implAnnotations.Component;
      Directive = _angular2SrcCoreAnnotations_implAnnotations.Directive;
    }],
    execute: function () {
      Label = function Label() {
        _classCallCheck(this, Label);
      };

      _export('Label', Label);

      Object.defineProperty(Label, 'annotations', { get: function get() {
          return [new Directive({ selector: 'ion-label' })];
        } });
    }
  };
});

(function(){

  var ionicImport = System.import('ionic/components/app/app');

  function importApp(module) {
    if (module) {
      var appImport = System.import(module);
      ionicImport.then(function(ionic) {
        appImport.then(function(app) {
          ionic.load(app);
        });
      });
    }
  }

  var ele = document.querySelectorAll('[module]');
  for (var i = 0; i < ele.length; i++) {
    importApp(ele[i].getAttribute('module'));
  }

})();
