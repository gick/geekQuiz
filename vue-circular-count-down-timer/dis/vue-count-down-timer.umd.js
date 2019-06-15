(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-count-down-timer"] = factory();
	else
		root["vue-count-down-timer"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "2577");
/******/ })
/************************************************************************/
/******/ ({

/***/ "08c7":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "0c5d":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("aeb5");
var cof = __webpack_require__("c684");
var MATCH = __webpack_require__("ee5b")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "102d":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("cdd7")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "1125":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("c4a6");
var enumBugKeys = __webpack_require__("9288");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1859":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "194d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "19e3":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("aeb5");
var anObject = __webpack_require__("80c7");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("ecc0")(Function.call, __webpack_require__("3c96").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "1dc5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5492");
var core = __webpack_require__("a4a4");
var LIBRARY = __webpack_require__("4bdb");
var wksExt = __webpack_require__("9447");
var defineProperty = __webpack_require__("dd92").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "1eae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2d0e");
var document = __webpack_require__("5492").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2577":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("194d")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ../cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"54bfce63-vue-loader-template"}!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../cache-loader/dist/cjs.js??ref--0-0!../vue-loader/lib??vue-loader-options!./src/components/CircularCountDownTimer.vue?vue&type=template&id=63f7f9f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper",style:({width: 'auto', height: _vm.container_height+'px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', 'alignItems': 'center'}),attrs:{"id":"wrapper"}},[_c('div',{style:({width: _vm.container_width+'px', height: _vm.container_height+'px', paddingTop: _vm.padding+'px', margin: '0 auto', boxSizing: 'border-box'}),attrs:{"id":"container"}},[(!_vm.is_single && _vm.showHour)?_c('div',{staticClass:"item",style:({width: _vm.inner_size+'px', height: _vm.inner_size+'px', paddingLeft: _vm.padding+'px', paddingRight: _vm.padding+'px', float: 'left', direction: 'ltr', position: 'relative'})},[_c('div',{style:({width: _vm.inner_size+'px', height: _vm.inner_size+'px', lineHeight: _vm.inner_size+'px', position: 'absolute', fontSize: _vm.number_font_size+'px'})},[_vm._v("\n                "+_vm._s(_vm.factor * _vm.hours)+"\n            ")]),_c('svg',{attrs:{"width":_vm.inner_size,"height":_vm.inner_size,"xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{attrs:{"r":_vm.r,"cy":_vm.cx,"cx":_vm.cy,"stroke-width":_vm.strokeWidth,"stroke":_vm.underneathStrokeColor,"fill":_vm.hoursFillColor}}),_c('circle',{staticClass:"circle_animation",style:({strokeDasharray: _vm.stroke_dasharray_hour, strokeDashoffset: _vm.stroke_dashoffset_hour}),attrs:{"transform":'rotate(-90, '+_vm.cx+', '+_vm.cy+')',"r":_vm.r,"cy":_vm.cx,"cx":_vm.cy,"stroke-width":_vm.strokeWidth,"stroke":_vm.hoursStrokeColor,"fill":"transparent"}})]),(_vm.hourLabel)?_c('div',{ref:"label",style:({height: _vm.label_font_size+'px', fontSize: _vm.label_font_size+'px'})},[_vm._v("\n                "+_vm._s(_vm.hourLabel)+"\n            ")]):_vm._e()]):_vm._e(),(!_vm.is_single && _vm.showMinute)?_c('div',{staticClass:"item",style:({width: _vm.inner_size+'px', height: _vm.inner_size+'px', paddingLeft: _vm.padding+'px', paddingRight: _vm.padding+'px', float: 'left', direction: 'ltr', position: 'relative'})},[_c('div',{style:({width: _vm.inner_size+'px', height: _vm.inner_size+'px', lineHeight: _vm.inner_size+'px', position: 'absolute', fontSize: _vm.number_font_size+'px'})},[_vm._v("\n                "+_vm._s(_vm.factor * _vm.minutes)+"\n            ")]),_c('svg',{attrs:{"width":_vm.inner_size,"height":_vm.inner_size,"xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{attrs:{"r":_vm.r,"cy":_vm.cx,"cx":_vm.cy,"stroke-width":_vm.strokeWidth,"stroke":_vm.underneathStrokeColor,"fill":_vm.minutesFillColor}}),_c('circle',{staticClass:"circle_animation",style:({strokeDasharray: _vm.stroke_dasharray_minute, strokeDashoffset: _vm.stroke_dashoffset_minute}),attrs:{"transform":'rotate(-90, '+_vm.cx+', '+_vm.cy+')',"r":_vm.r,"cy":_vm.cx,"cx":_vm.cy,"stroke-width":_vm.strokeWidth,"stroke":_vm.minutesStrokeColor,"fill":"transparent"}})]),(_vm.minuteLabel)?_c('div',{style:({fontSize: _vm.label_font_size+'px'})},[_vm._v("\n                "+_vm._s(_vm.minuteLabel)+"\n            ")]):_vm._e()]):_vm._e(),(_vm.showSecond)?_c('div',{staticClass:"item",style:({width: _vm.inner_size+'px', height: _vm.inner_size+'px', paddingLeft: _vm.padding+'px', paddingRight: _vm.padding+'px', float: 'left', direction: 'ltr', position: 'relative'})},[_c('div',{style:({width: _vm.inner_size+'px', height: _vm.inner_size+'px', lineHeight: _vm.inner_size+'px', position: 'absolute', fontSize: _vm.number_font_size+'px'})},[_vm._v("\n                "+_vm._s(_vm.factor * _vm.seconds)+"\n            ")]),_c('svg',{attrs:{"width":_vm.inner_size,"height":_vm.inner_size,"xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{attrs:{"r":_vm.r,"cy":_vm.cx,"cx":_vm.cy,"stroke-width":_vm.strokeWidth,"stroke":_vm.underneathStrokeColor,"fill":_vm.secondsFillColor,"fill-opacity":_vm.secondsFillOpacity}}),_c('circle',{staticClass:"circle_animation",style:({strokeDasharray: _vm.stroke_dasharray_second, strokeDashoffset: _vm.stroke_dashoffset_second}),attrs:{"transform":'rotate(-90, '+_vm.cx+', '+_vm.cy+')',"r":_vm.r,"cy":_vm.cx,"cx":_vm.cy,"stroke-width":_vm.strokeWidth,"stroke":_vm.secondsStrokeColor,"fill":"transparent"}})]),(_vm.secondLabel)?_c('div',{style:({fontSize: _vm.label_font_size+'px'})},[_vm._v("\n                "+_vm._s(_vm.secondLabel)+"\n            ")]):_vm._e()]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CircularCountDownTimer.vue?vue&type=template&id=63f7f9f4&scoped=true&

// EXTERNAL MODULE: ../@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("77a9");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ../@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("b157");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ../@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("4f6e");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("7592");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ../@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ../@babel/runtime-corejs2/helpers/esm/objectSpread.js




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ../core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("3034");

// EXTERNAL MODULE: ../core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("e138");

// EXTERNAL MODULE: ../core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("3afb");

// CONCATENATED MODULE: ../cache-loader/dist/cjs.js??ref--12-0!../thread-loader/dist/cjs.js!../babel-loader/lib!../cache-loader/dist/cjs.js??ref--0-0!../vue-loader/lib??vue-loader-options!./src/components/CircularCountDownTimer.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CircularCountDownTimervue_type_script_lang_js_ = ({
  props: {
    initialValue: {
      type: Number,
      required: true,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 5
    },
    secondsStrokeColor: {
      type: String,
      default: "#acdb28"
    },
    minutesStrokeColor: {
      type: String,
      default: "#729adb"
    },
    hoursStrokeColor: {
      type: String,
      default: "#db47a0"
    },
    underneathStrokeColor: {
      type: String,
      default: "#eee"
    },
    secondsFillColor: {
      type: String,
      default: 'none'
    },
    secondsFillOpacity: {
      type: Number,
      default: 1
    },
    minutesFillColor: {
      type: String,
      default: 'none'
    },
    hoursFillColor: {
      type: String,
      default: 'none'
    },
    size: {
      type: Number,
      default: 0
    },
    padding: {
      type: Number,
      default: 5
    },
    hourLabel: {
      type: String,
      default: "hours"
    },
    minuteLabel: {
      type: String,
      default: "minutes"
    },
    secondLabel: {
      type: String,
      default: "seconds"
    },
    showSecond: {
      type: Boolean,
      default: true
    },
    showMinute: {
      type: Boolean,
      default: true
    },
    showHour: {
      type: Boolean,
      default: true
    },
    showNegatives: {
      type: Boolean,
      default: false
    },
    steps: {
      type: Number,
      default: undefined
    },
    paused: {
      type: Boolean,
      default: false
    },
    notifyEvery: {
      type: String,
      default: 'second',
      validator: function validator(val) {
        return ['second', 'minute', 'hour', 'none'].includes(val);
      }
    }
  },
  data: function data() {
    return {
      isMounted: false,
      value: this.initialValue,
      labelFontRatio: 0.15,
      numberFontRatio: 0.2,
      baseTime: 0
    };
  },
  computed: {
    seconds_step: function seconds_step() {
      return this.is_single ? this.steps ? Math.max(this.steps, this.initialValue) : this.initialValue : 60;
    },
    is_single: function is_single() {
      return this.steps !== undefined || !this.showHour && !this.showMinute;
    },
    hours: function hours() {
      return Math.floor(Math.abs(this.value) / 3600);
    },
    minutes: function minutes() {
      return Math.floor((Math.abs(this.value) - this.hours * 3600) / 60);
    },
    seconds: function seconds() {
      return this.is_single ? this.value : Math.abs(this.value) % 60;
    },
    factor: function factor() {
      return this.value >= 0 ? 1 : -1;
    },
    circle_length: function circle_length() {
      return 2 * Math.PI * this.r;
    },
    hour_step_length: function hour_step_length() {
      return this.circle_length / 24;
    },
    minute_step_length: function minute_step_length() {
      return this.circle_length / 60;
    },
    second_step_length: function second_step_length() {
      return this.circle_length / this.seconds_step;
    },
    stroke_dasharray_hour: function stroke_dasharray_hour() {
      return this.circle_length;
    },
    stroke_dasharray_minute: function stroke_dasharray_minute() {
      return this.circle_length;
    },
    stroke_dasharray_second: function stroke_dasharray_second() {
      return this.circle_length;
    },
    stroke_dashoffset_hour: function stroke_dashoffset_hour() {
      return this.circle_length - this.hours * this.hour_step_length;
    },
    stroke_dashoffset_minute: function stroke_dashoffset_minute() {
      return this.circle_length - this.minutes * this.minute_step_length;
    },
    stroke_dashoffset_second: function stroke_dashoffset_second() {
      return this.circle_length - this.seconds * this.second_step_length;
    },
    cx: function cx() {
      return this.inner_size / 2;
    },
    cy: function cy() {
      return this.inner_size / 2;
    },
    r: function r() {
      return (this.inner_size - this.strokeWidth) / 2;
    },
    inner_size: function inner_size() {
      return this.circle_size - this.padding * 2;
    },
    circle_size: function circle_size() {
      var size = this.size === 0 && this.isMounted ? this.$refs.wrapper.parentElement.clientHeight : this.size;
      return this.has_label ? size - size * this.labelFontRatio : size;
    },
    container_height: function container_height() {
      return this.size === 0 && this.isMounted ? this.$refs.wrapper.parentElement.clientHeight : this.size;
    },
    container_width: function container_width() {
      var circles = 0;

      if (this.showSecond) {
        circles++;
      }

      if (!this.is_single && this.showMinute) {
        circles++;
      }

      if (!this.is_single && this.showHour) {
        circles++;
      }

      return this.inner_size * circles + this.padding * (circles * 2);
    },
    has_label: function has_label() {
      return this.hourLabel !== "" || this.minuteLabel !== "" || this.secondLabel !== "";
    },
    label_font_size: function label_font_size() {
      return this.circle_size * this.labelFontRatio;
    },
    number_font_size: function number_font_size() {
      return this.circle_size * this.numberFontRatio;
    }
  },
  methods: {
    notifyChange: function notifyChange() {
      var output = {
        value: this.value
      };

      if (!this.is_single) {
        output = _objectSpread({}, output, {
          seconds: this.seconds,
          minutes: this.minutes,
          hours: this.hours
        });
      }

      this.$emit('update', output);
    },
    updateTime: function updateTime(seconds) {
      if (this.value) this.value += seconds;

      if (this.value < 0) {
        this.$emit('finish');
      }
    },
    resetTime: function resetTime(seconds) {
      this.value = seconds;
    }
  },
  watch: {
    seconds: function seconds() {
      if (this.notifyEvery === 'second') {
        this.notifyChange();
      }
    },
    minutes: function minutes() {
      if (this.notifyEvery === 'minute' && !this.is_single) {
        this.notifyChange();
      }
    },
    hours: function hours() {
      if (this.notifyEvery === 'hour' && !this.is_single) {
        this.notifyChange();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.isMounted = true;

      if (_this.value) {
        var interval = setInterval(function () {
          if (this.paused) {
            return;
          }

          var delta = 1;
          this.value -= delta;

          if (this.value === 0) {
            this.$emit('finish');
          }
        }.bind(_this), 1000);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/CircularCountDownTimer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CircularCountDownTimervue_type_script_lang_js_ = (CircularCountDownTimervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CircularCountDownTimer.vue?vue&type=style&index=0&id=63f7f9f4&scoped=true&lang=css&
var CircularCountDownTimervue_type_style_index_0_id_63f7f9f4_scoped_true_lang_css_ = __webpack_require__("f0e0");

// CONCATENATED MODULE: ../vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/CircularCountDownTimer.vue






/* normalize component */

var component = normalizeComponent(
  components_CircularCountDownTimervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "63f7f9f4",
  null
  
)

/* harmony default export */ var CircularCountDownTimer = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js


/* harmony default export */ var components = ({
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("circular-count-down-timer", CircularCountDownTimer);
    }
});

// CONCATENATED MODULE: ../@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "26be":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("630c")('wks');
var uid = __webpack_require__("d89d");
var Symbol = __webpack_require__("5492").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2a0c":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("a589");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "2a74":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("ee5b")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "2d0e":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "2ecd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("dd92");
var createDesc = __webpack_require__("4f14");
module.exports = __webpack_require__("102d") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3034":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5b4c");
var $includes = __webpack_require__("4900")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("a237")('includes');


/***/ }),

/***/ "31c5":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "344a":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "3569":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "35bc":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("630c")('keys');
var uid = __webpack_require__("d89d");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "361f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("420e");
var $Object = __webpack_require__("a4a4").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "3afb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3e98");
var has = __webpack_require__("78cc");
var cof = __webpack_require__("c684");
var inheritIfRequired = __webpack_require__("5568");
var toPrimitive = __webpack_require__("40f8");
var fails = __webpack_require__("d101");
var gOPN = __webpack_require__("e5b0").f;
var gOPD = __webpack_require__("3c96").f;
var dP = __webpack_require__("4756").f;
var $trim = __webpack_require__("9841").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("d280")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("95bd") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("9017")(global, NUMBER, $Number);
}


/***/ }),

/***/ "3c6b":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("808e");
var core = __webpack_require__("a4a4");
var fails = __webpack_require__("cdd7");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "3c96":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("8340");
var createDesc = __webpack_require__("31c5");
var toIObject = __webpack_require__("65ea");
var toPrimitive = __webpack_require__("40f8");
var has = __webpack_require__("78cc");
var IE8_DOM_DEFINE = __webpack_require__("f1ff");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("95bd") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "3e98":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "3fa4":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("78cc");
var toIObject = __webpack_require__("65ea");
var arrayIndexOf = __webpack_require__("4900")(false);
var IE_PROTO = __webpack_require__("631c")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "40bd":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("b4a3");
module.exports = __webpack_require__("a4a4").Object.keys;


/***/ }),

/***/ "40f8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("aeb5");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "420e":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("808e");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("102d"), 'Object', { defineProperty: __webpack_require__("dd92").f });


/***/ }),

/***/ "46f7":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3e98").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "4756":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("80c7");
var IE8_DOM_DEFINE = __webpack_require__("f1ff");
var toPrimitive = __webpack_require__("40f8");
var dP = Object.defineProperty;

exports.f = __webpack_require__("95bd") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "4900":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("65ea");
var toLength = __webpack_require__("bfbc");
var toAbsoluteIndex = __webpack_require__("e79c");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "4906":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("ed76");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "4bdb":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "4f14":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4f6e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("40bd");

/***/ }),

/***/ "5161":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("57c3");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5492":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "5568":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("aeb5");
var setPrototypeOf = __webpack_require__("19e3").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "55b9":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("f7b7");
var defined = __webpack_require__("57c3");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "569d":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ed76");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "57c3":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "59ff":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "5abd":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("55b9");
var gOPN = __webpack_require__("d694").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "5b4c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3e98");
var core = __webpack_require__("08c7");
var hide = __webpack_require__("8fc4");
var redefine = __webpack_require__("9017");
var ctx = __webpack_require__("ecc0");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5e2d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("102d") && !__webpack_require__("cdd7")(function () {
  return Object.defineProperty(__webpack_require__("1eae")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "608e":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("d6ef");
var dPs = __webpack_require__("9d53");
var enumBugKeys = __webpack_require__("9288");
var IE_PROTO = __webpack_require__("35bc")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1eae")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("b3ac").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "62c0":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("1125");
var gOPS = __webpack_require__("1859");
var pIE = __webpack_require__("ad9e");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "630c":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a4a4");
var global = __webpack_require__("5492");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("4bdb") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "631c":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("7ec8")('keys');
var uid = __webpack_require__("3569");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "64a6":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "65ea":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("cc57");
var defined = __webpack_require__("d622");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "718e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a65c");
var $Object = __webpack_require__("a4a4").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "7592":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("361f");

/***/ }),

/***/ "77a9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("718e");

/***/ }),

/***/ "78cc":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "7ec8":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("08c7");
var global = __webpack_require__("3e98");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("8994") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "808e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5492");
var core = __webpack_require__("a4a4");
var ctx = __webpack_require__("d279");
var hide = __webpack_require__("2ecd");
var has = __webpack_require__("64a6");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "80c7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("aeb5");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "8340":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "85fa":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("2d0e");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "86ab":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("b0bf");
module.exports = __webpack_require__("a4a4").Object.getOwnPropertySymbols;


/***/ }),

/***/ "8994":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "8fc4":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4756");
var createDesc = __webpack_require__("31c5");
module.exports = __webpack_require__("95bd") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9017":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3e98");
var hide = __webpack_require__("8fc4");
var has = __webpack_require__("78cc");
var SRC = __webpack_require__("3569")('src');
var $toString = __webpack_require__("b68d");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("08c7").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "903d":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "9288":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "9447":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("26be");


/***/ }),

/***/ "9546":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("aeb5");
var document = __webpack_require__("3e98").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "95bd":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("d101")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9841":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5b4c");
var defined = __webpack_require__("d622");
var fails = __webpack_require__("d101");
var spaces = __webpack_require__("903d");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "9b97":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("55b9");
var toLength = __webpack_require__("4906");
var toAbsoluteIndex = __webpack_require__("569d");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "9cd6":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("d89d")('meta');
var isObject = __webpack_require__("2d0e");
var has = __webpack_require__("64a6");
var setDesc = __webpack_require__("dd92").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("cdd7")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "9d53":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("dd92");
var anObject = __webpack_require__("d6ef");
var getKeys = __webpack_require__("1125");

module.exports = __webpack_require__("102d") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "a237":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("ee5b")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("8fc4")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "a4a4":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a589":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "a65c":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("55b9");
var $getOwnPropertyDescriptor = __webpack_require__("c42e").f;

__webpack_require__("3c6b")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "ad9e":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "aeb5":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "b0bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("5492");
var has = __webpack_require__("64a6");
var DESCRIPTORS = __webpack_require__("102d");
var $export = __webpack_require__("808e");
var redefine = __webpack_require__("ed12");
var META = __webpack_require__("9cd6").KEY;
var $fails = __webpack_require__("cdd7");
var shared = __webpack_require__("630c");
var setToStringTag = __webpack_require__("cd2b");
var uid = __webpack_require__("d89d");
var wks = __webpack_require__("26be");
var wksExt = __webpack_require__("9447");
var wksDefine = __webpack_require__("1dc5");
var enumKeys = __webpack_require__("62c0");
var isArray = __webpack_require__("2a0c");
var anObject = __webpack_require__("d6ef");
var isObject = __webpack_require__("2d0e");
var toObject = __webpack_require__("5161");
var toIObject = __webpack_require__("55b9");
var toPrimitive = __webpack_require__("85fa");
var createDesc = __webpack_require__("4f14");
var _create = __webpack_require__("608e");
var gOPNExt = __webpack_require__("5abd");
var $GOPD = __webpack_require__("c42e");
var $GOPS = __webpack_require__("1859");
var $DP = __webpack_require__("dd92");
var $keys = __webpack_require__("1125");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("d694").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("ad9e").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("4bdb")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("2ecd")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "b157":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("86ab");

/***/ }),

/***/ "b34f":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "b3ac":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("5492").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "b4a3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("5161");
var $keys = __webpack_require__("1125");

__webpack_require__("3c6b")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "b68d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7ec8")('native-function-to-string', Function.toString);


/***/ }),

/***/ "b78d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba14":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("3fa4");
var enumBugKeys = __webpack_require__("e865");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "bfbc":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("59ff");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "c068":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("0c5d");
var defined = __webpack_require__("d622");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "c42e":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("ad9e");
var createDesc = __webpack_require__("4f14");
var toIObject = __webpack_require__("55b9");
var toPrimitive = __webpack_require__("85fa");
var has = __webpack_require__("64a6");
var IE8_DOM_DEFINE = __webpack_require__("5e2d");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("102d") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c4a6":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("64a6");
var toIObject = __webpack_require__("55b9");
var arrayIndexOf = __webpack_require__("9b97")(false);
var IE_PROTO = __webpack_require__("35bc")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "c684":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "cc57":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("c684");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "cd2b":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("dd92").f;
var has = __webpack_require__("64a6");
var TAG = __webpack_require__("26be")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "cdd7":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "d101":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "d279":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("b34f");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d280":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("80c7");
var dPs = __webpack_require__("f305");
var enumBugKeys = __webpack_require__("e865");
var IE_PROTO = __webpack_require__("631c")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("9546")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("46f7").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "d622":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "d694":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("c4a6");
var hiddenKeys = __webpack_require__("9288").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "d6ef":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2d0e");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d89d":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "dd92":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("d6ef");
var IE8_DOM_DEFINE = __webpack_require__("5e2d");
var toPrimitive = __webpack_require__("85fa");
var dP = Object.defineProperty;

exports.f = __webpack_require__("102d") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "e138":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5b4c");
var context = __webpack_require__("c068");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("2a74")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "e5b0":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("3fa4");
var hiddenKeys = __webpack_require__("e865").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "e79c":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("59ff");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "e865":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "ecc0":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("344a");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "ed12":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2ecd");


/***/ }),

/***/ "ed76":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "ee5b":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("7ec8")('wks');
var uid = __webpack_require__("3569");
var Symbol = __webpack_require__("3e98").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "f0e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CircularCountDownTimer_vue_vue_type_style_index_0_id_63f7f9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b78d");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CircularCountDownTimer_vue_vue_type_style_index_0_id_63f7f9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CircularCountDownTimer_vue_vue_type_style_index_0_id_63f7f9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CircularCountDownTimer_vue_vue_type_style_index_0_id_63f7f9f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f1ff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("95bd") && !__webpack_require__("d101")(function () {
  return Object.defineProperty(__webpack_require__("9546")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "f305":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4756");
var anObject = __webpack_require__("80c7");
var getKeys = __webpack_require__("ba14");

module.exports = __webpack_require__("95bd") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "f7b7":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("a589");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ })

/******/ });
});
//# sourceMappingURL=vue-count-down-timer.umd.js.map