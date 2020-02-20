/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors.main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/ts/components/hsh-footer/hsh-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./assets/ts/components/hsh-footer/hsh-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: HshFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HshFooterComponent", function() { return HshFooterComponent; });
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/get */ "./node_modules/@babel/runtime-corejs3/helpers/get.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");











var HshFooterComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(HshFooterComponent, _Component);

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(HshFooterComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return [];
    }
  }]);

  function HshFooterComponent(element) {
    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, HshFooterComponent);

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(HshFooterComponent).call(this, element));

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "autobind", true);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "scope", {});

    _this.init(HshFooterComponent.observedAttributes);

    return _this;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(HshFooterComponent, [{
    key: "init",
    value: function () {
      var _init = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(observedAttributes) {
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(HshFooterComponent.prototype), "init", this).call(this, observedAttributes).then(function (view) {
                  return view;
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "requiredAttributes",
    value: function requiredAttributes() {
      return [];
    }
  }, {
    key: "parsedAttributeChangedCallback",
    value: function parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(HshFooterComponent.prototype), "parsedAttributeChangedCallback", this).call(this, attributeName, oldValue, newValue, namespace);
    } // deconstructor

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(HshFooterComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "template",
    value: function template() {
      return null;
    }
  }]);

  return HshFooterComponent;
}(_ribajs_core__WEBPACK_IMPORTED_MODULE_10__["Component"]);

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(HshFooterComponent, "tagName", 'hsh-footer');

/***/ }),

/***/ "./assets/ts/components/hsh-navbar/hsh-navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./assets/ts/components/hsh-navbar/hsh-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: HshNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HshNavbarComponent", function() { return HshNavbarComponent; });
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _ribajs_bs4_src_components_bs4_navbar_bs4_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ribajs/bs4/src/components/bs4-navbar/bs4-navbar.component */ "./node_modules/@ribajs/bs4/src/components/bs4-navbar/bs4-navbar.component.ts");









var HshNavbarComponent =
/*#__PURE__*/
function (_Bs4NavbarComponent) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(HshNavbarComponent, _Bs4NavbarComponent);

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HshNavbarComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['collapse-selector'];
    }
  }]);

  function HshNavbarComponent(element) {
    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HshNavbarComponent);

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(HshNavbarComponent).call(this, element)); // console.debug('constructor', this);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "autobind", true);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "pjax", void 0);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "scope", {
      toggle: _this.toggle,
      show: _this.show,
      hide: _this.hide,
      isCollapsed: true,
      collapseSelector: '.navbar-collapse',
      animated: true,
      onItemClick: _this.onItemClick
    });

    return _this;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HshNavbarComponent, [{
    key: "onItemClick",
    value: function onItemClick(context, event) {
      if (event) {
        var target = event.target;

        if (!target) {
          return console.warn('Target not found!');
        }

        if (target && this.pjax) {
          event.preventDefault();
          var url = target.href || '/';

          if (_ribajs_core__WEBPACK_IMPORTED_MODULE_7__["Utils"].isAbsoluteUrl(url) && _ribajs_core__WEBPACK_IMPORTED_MODULE_7__["Utils"].isInternalUrl(url)) {
            url = target.pathname + target.search;
          }

          this.pjax.goTo(url);
        }
      }
    }
  }]);

  return HshNavbarComponent;
}(_ribajs_bs4_src_components_bs4_navbar_bs4_navbar_component__WEBPACK_IMPORTED_MODULE_8__["Bs4NavbarComponent"]);

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(HshNavbarComponent, "tagName", 'hsh-navbar');

/***/ }),

/***/ "./assets/ts/components/hsh-sidebar/hsh-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./assets/ts/components/hsh-sidebar/hsh-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: HshSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HshSidebarComponent", function() { return HshSidebarComponent; });
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/get */ "./node_modules/@babel/runtime-corejs3/helpers/get.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _ribajs_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ribajs/router */ "./node_modules/@ribajs/router/src/index.ts");
/* harmony import */ var _ribajs_bs4_src_components_bs4_sidebar_bs4_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ribajs/bs4/src/components/bs4-sidebar/bs4-sidebar.component */ "./node_modules/@ribajs/bs4/src/components/bs4-sidebar/bs4-sidebar.component.ts");
/* harmony import */ var _ribajs_bs4_src_services_collapse_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ribajs/bs4/src/services/collapse.service */ "./node_modules/@ribajs/bs4/src/services/collapse.service.ts");
















var ANIMATED_COLLAPSE = false;
var HshSidebarComponent =
/*#__PURE__*/
function (_Bs4SidebarComponent) {
  _babel_runtime_corejs3_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(HshSidebarComponent, _Bs4SidebarComponent);

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(HshSidebarComponent, null, [{
    key: "observedAttributes",
    get: function get() {
      return ['id', 'container-selector', 'position', 'width', 'auto-show-on-wider-than', 'auto-hide-on-slimmer-than', 'force-hide-on-location-pathnames', 'force-show-on-location-pathnames', 'overlay-on-slimmer-than'];
    }
  }]);

  function HshSidebarComponent(element) {
    var _this;

    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, HshSidebarComponent);

    _this = _babel_runtime_corejs3_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(HshSidebarComponent).call(this, element));

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "autobind", true);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "toggleItems", []);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "pjax", void 0);

    _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(_babel_runtime_corejs3_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "scope", {
      // template properties
      containerSelector: undefined,
      state: 'hidden',
      id: undefined,
      width: '100vw',
      // Options
      position: 'left',
      autoShowOnWiderThan: -1,
      autoHideOnSlimmerThan: -1,
      watchNewPageReadyEvent: false,
      forceHideOnLocationPathnames: [],
      forceShowOnLocationPathnames: [],
      overlayOnSlimmerThan: 1200,
      // template methods
      hide: _this.hide,
      show: _this.show,
      toggle: _this.toggle,
      // custom
      toggleItem: _this.toggleItem,
      onItemClick: _this.onItemClick
    });

    return _this;
  }

  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(HshSidebarComponent, [{
    key: "toggleItem",
    value: function toggleItem(handle, context, event) {
      event.preventDefault();
      event.stopPropagation();
      var toggleItem = this.getToggleItem(handle);

      if (toggleItem) {
        this.closeAllToggleItems(toggleItem);
        toggleItem.collapseService.toggle(ANIMATED_COLLAPSE);
      }

      if (event) {
        var target = event.target;

        if (!target) {
          return console.warn('Target not found!');
        }

        if (target && this.pjax) {
          var url = target.href || '/';

          if (_ribajs_core__WEBPACK_IMPORTED_MODULE_12__["Utils"].isAbsoluteUrl(url) && _ribajs_core__WEBPACK_IMPORTED_MODULE_12__["Utils"].isInternalUrl(url)) {
            url = target.pathname + target.search;
          }

          this.pjax.goTo(url);
        }
      }
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(context, event) {
      if (event) {
        var target = event.target;

        if (!target) {
          return console.warn('Target not found!');
        }

        if (target && this.pjax) {
          event.preventDefault();
          var url = target.href || '/';

          if (_ribajs_core__WEBPACK_IMPORTED_MODULE_12__["Utils"].isAbsoluteUrl(url) && _ribajs_core__WEBPACK_IMPORTED_MODULE_12__["Utils"].isInternalUrl(url)) {
            url = target.pathname + target.search;
          }

          this.hide();
          this.pjax.goTo(url);
        }
      }
    }
  }, {
    key: "closeAllToggleItems",
    value: function closeAllToggleItems(except) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(this.toggleItems), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var toggleItem = _step.value;

          if (!except || toggleItem.handle !== except.handle) {
            toggleItem.collapseService.hide(ANIMATED_COLLAPSE);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "getToggleItem",
    value: function getToggleItem(handle) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(this.toggleItems), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var toggleItem = _step2.value;

          if (toggleItem.handle === handle) {
            return toggleItem;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(HshSidebarComponent.prototype), "connectedCallback", this).call(this);

      var dropdownToggleElements = this.el.querySelectorAll('.collapse');

      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(dropdownToggleElements).call(dropdownToggleElements, function (toggleElement) {
        if (toggleElement.dataset.handle) {
          _this2.toggleItems.push({
            collapseService: new _ribajs_bs4_src_services_collapse_service__WEBPACK_IMPORTED_MODULE_15__["CollapseService"]([toggleElement]),
            handle: toggleElement.dataset.handle
          });
        }
      });
    }
  }, {
    key: "beforeBind",
    value: function () {
      var _beforeBind = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(HshSidebarComponent.prototype), "beforeBind", this).call(this));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function beforeBind() {
        return _beforeBind.apply(this, arguments);
      }

      return beforeBind;
    }()
  }, {
    key: "afterBind",
    value: function () {
      var _afterBind = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(HshSidebarComponent.prototype), "afterBind", this).call(this);

                this.pjax = _ribajs_router__WEBPACK_IMPORTED_MODULE_13__["Pjax"].getInstance('main');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function afterBind() {
        return _afterBind.apply(this, arguments);
      }

      return afterBind;
    }()
  }, {
    key: "requiredAttributes",
    value: function requiredAttributes() {
      return ['id'];
    }
  }, {
    key: "parsedAttributeChangedCallback",
    value: function parsedAttributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(HshSidebarComponent.prototype), "parsedAttributeChangedCallback", this).call(this, attributeName, oldValue, newValue, namespace);
    } // deconstructor

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _babel_runtime_corejs3_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_corejs3_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(HshSidebarComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }]);

  return HshSidebarComponent;
}(_ribajs_bs4_src_components_bs4_sidebar_bs4_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["Bs4SidebarComponent"]);

_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11___default()(HshSidebarComponent, "tagName", 'hsh-sidebar');

/***/ }),

/***/ "./assets/ts/components/index.ts":
/*!***************************************!*\
  !*** ./assets/ts/components/index.ts ***!
  \***************************************/
/*! exports provided: HshNavbarComponent, HshFooterComponent, HshSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hsh_navbar_hsh_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hsh-navbar/hsh-navbar.component */ "./assets/ts/components/hsh-navbar/hsh-navbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HshNavbarComponent", function() { return _hsh_navbar_hsh_navbar_component__WEBPACK_IMPORTED_MODULE_0__["HshNavbarComponent"]; });

/* harmony import */ var _hsh_footer_hsh_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hsh-footer/hsh-footer.component */ "./assets/ts/components/hsh-footer/hsh-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HshFooterComponent", function() { return _hsh_footer_hsh_footer_component__WEBPACK_IMPORTED_MODULE_1__["HshFooterComponent"]; });

/* harmony import */ var _hsh_sidebar_hsh_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsh-sidebar/hsh-sidebar.component */ "./assets/ts/components/hsh-sidebar/hsh-sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HshSidebarComponent", function() { return _hsh_sidebar_hsh_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["HshSidebarComponent"]; });





/***/ }),

/***/ "./assets/ts/main.ts":
/*!***************************!*\
  !*** ./assets/ts/main.ts ***!
  \***************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ribajs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ribajs/core */ "./node_modules/@ribajs/core/src/index.ts");
/* harmony import */ var _ribajs_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ribajs/router */ "./node_modules/@ribajs/router/src/index.ts");
/* harmony import */ var _ribajs_bs4_src_components_bs4_icon_bs4_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ribajs/bs4/src/components/bs4-icon/bs4-icon.component */ "./node_modules/@ribajs/bs4/src/components/bs4-icon/bs4-icon.component.ts");
/* harmony import */ var _ribajs_bs4_src_components_bs4_button_bs4_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ribajs/bs4/src/components/bs4-button/bs4-button.component */ "./node_modules/@ribajs/bs4/src/components/bs4-button/bs4-button.component.ts");
/* harmony import */ var _ribajs_bs4_src_components_bs4_toggle_button_bs4_toggle_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ribajs/bs4/src/components/bs4-toggle-button/bs4-toggle-button.component */ "./node_modules/@ribajs/bs4/src/components/bs4-toggle-button/bs4-toggle-button.component.ts");
/* harmony import */ var _ribajs_bs4_src_components_bs4_accordion_bs4_accordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ribajs/bs4/src/components/bs4-accordion/bs4-accordion.component */ "./node_modules/@ribajs/bs4/src/components/bs4-accordion/bs4-accordion.component.ts");
/* harmony import */ var _ribajs_bs4_src_components_bs4_slideshow_bs4_slideshow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ribajs/bs4/src/components/bs4-slideshow/bs4-slideshow.component */ "./node_modules/@ribajs/bs4/src/components/bs4-slideshow/bs4-slideshow.component.ts");
/* harmony import */ var _ribajs_extras_src_binders_data_scroll_position_y_binder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ribajs/extras/src/binders/data-scroll-position-y.binder */ "./node_modules/@ribajs/extras/src/binders/data-scroll-position-y.binder.ts");
/* harmony import */ var _ribajs_jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ribajs/jquery */ "./node_modules/@ribajs/jquery/src/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./assets/ts/components/index.ts");




 // BS4 Components







 // import * as CustomBinders from './binders';


var Main = function Main() {
  var _context;

  _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Main);

  _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "riba", new _ribajs_core__WEBPACK_IMPORTED_MODULE_3__["Riba"]());

  this.riba.module.regist(_ribajs_core__WEBPACK_IMPORTED_MODULE_3__["coreModule"]);
  this.riba.module.regist(_ribajs_jquery__WEBPACK_IMPORTED_MODULE_11__["jqueryModule"]);
  this.riba.module.regist(_ribajs_router__WEBPACK_IMPORTED_MODULE_4__["default"]); // selected elements from modules

  this.riba.module.regist({
    components: {
      Bs4ButtonComponent: _ribajs_bs4_src_components_bs4_button_bs4_button_component__WEBPACK_IMPORTED_MODULE_6__["Bs4ButtonComponent"],
      Bs4IconComponent: _ribajs_bs4_src_components_bs4_icon_bs4_icon_component__WEBPACK_IMPORTED_MODULE_5__["Bs4IconComponent"],
      Bs4ToggleButtonComponent: _ribajs_bs4_src_components_bs4_toggle_button_bs4_toggle_button_component__WEBPACK_IMPORTED_MODULE_7__["Bs4ToggleButtonComponent"],
      Bs4AccordionComponent: _ribajs_bs4_src_components_bs4_accordion_bs4_accordion_component__WEBPACK_IMPORTED_MODULE_8__["Bs4AccordionComponent"],
      Bs4SlideshowComponent: _ribajs_bs4_src_components_bs4_slideshow_bs4_slideshow_component__WEBPACK_IMPORTED_MODULE_9__["Bs4SlideshowComponent"]
    },
    binders: {
      dataScrollPositionYBinder: _ribajs_extras_src_binders_data_scroll_position_y_binder__WEBPACK_IMPORTED_MODULE_10__["dataScrollPositionYBinder"]
    }
  }); // Regist custom components

  this.riba.module.regist({
    components: _components__WEBPACK_IMPORTED_MODULE_12__ // binders: CustomBinders,

  });

  _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.riba).call(_context, document.body, window.model);
};
_ribajs_core__WEBPACK_IMPORTED_MODULE_3__["Utils"].domIsReady(function () {
  new Main();
});

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./assets/ts/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assets/ts/main.ts */"./assets/ts/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzL2NvbXBvbmVudHMvaHNoLWZvb3Rlci9oc2gtZm9vdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvY29tcG9uZW50cy9oc2gtbmF2YmFyL2hzaC1uYXZiYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy9jb21wb25lbnRzL2hzaC1zaWRlYmFyL2hzaC1zaWRlYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvbWFpbi50cyJdLCJuYW1lcyI6WyJIc2hGb290ZXJDb21wb25lbnQiLCJlbGVtZW50IiwiaW5pdCIsIm9ic2VydmVkQXR0cmlidXRlcyIsInRoZW4iLCJ2aWV3IiwiYXR0cmlidXRlTmFtZSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lc3BhY2UiLCJDb21wb25lbnQiLCJIc2hOYXZiYXJDb21wb25lbnQiLCJ0b2dnbGUiLCJzaG93IiwiaGlkZSIsImlzQ29sbGFwc2VkIiwiY29sbGFwc2VTZWxlY3RvciIsImFuaW1hdGVkIiwib25JdGVtQ2xpY2siLCJjb250ZXh0IiwiZXZlbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwid2FybiIsInBqYXgiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsImhyZWYiLCJVdGlscyIsImlzQWJzb2x1dGVVcmwiLCJpc0ludGVybmFsVXJsIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnb1RvIiwiQnM0TmF2YmFyQ29tcG9uZW50IiwiQU5JTUFURURfQ09MTEFQU0UiLCJIc2hTaWRlYmFyQ29tcG9uZW50IiwiY29udGFpbmVyU2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJzdGF0ZSIsImlkIiwid2lkdGgiLCJwb3NpdGlvbiIsImF1dG9TaG93T25XaWRlclRoYW4iLCJhdXRvSGlkZU9uU2xpbW1lclRoYW4iLCJ3YXRjaE5ld1BhZ2VSZWFkeUV2ZW50IiwiZm9yY2VIaWRlT25Mb2NhdGlvblBhdGhuYW1lcyIsImZvcmNlU2hvd09uTG9jYXRpb25QYXRobmFtZXMiLCJvdmVybGF5T25TbGltbWVyVGhhbiIsInRvZ2dsZUl0ZW0iLCJoYW5kbGUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRUb2dnbGVJdGVtIiwiY2xvc2VBbGxUb2dnbGVJdGVtcyIsImNvbGxhcHNlU2VydmljZSIsImV4Y2VwdCIsInRvZ2dsZUl0ZW1zIiwiZHJvcGRvd25Ub2dnbGVFbGVtZW50cyIsImVsIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZUVsZW1lbnQiLCJkYXRhc2V0IiwicHVzaCIsIkNvbGxhcHNlU2VydmljZSIsIlBqYXgiLCJnZXRJbnN0YW5jZSIsIkJzNFNpZGViYXJDb21wb25lbnQiLCJNYWluIiwiUmliYSIsInJpYmEiLCJtb2R1bGUiLCJyZWdpc3QiLCJjb3JlTW9kdWxlIiwianF1ZXJ5TW9kdWxlIiwicm91dGVyTW9kdWxlIiwiY29tcG9uZW50cyIsIkJzNEJ1dHRvbkNvbXBvbmVudCIsIkJzNEljb25Db21wb25lbnQiLCJCczRUb2dnbGVCdXR0b25Db21wb25lbnQiLCJCczRBY2NvcmRpb25Db21wb25lbnQiLCJCczRTbGlkZXNob3dDb21wb25lbnQiLCJiaW5kZXJzIiwiZGF0YVNjcm9sbFBvc2l0aW9uWUJpbmRlciIsIkN1c3RvbUNvbXBvbmVudHMiLCJkb2N1bWVudCIsImJvZHkiLCJ3aW5kb3ciLCJtb2RlbCIsImRvbUlzUmVhZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBSUE7O0FBQ0E7QUFFTyxJQUFNK0IsSUFBYixHQUdJLGdCQUFjO0FBQUE7O0FBQUE7O0FBQUEscUdBRkMsSUFBSUMsaURBQUosRUFFRDs7QUFDVixPQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWpCLENBQXdCQyx1REFBeEI7QUFDQSxPQUFLSCxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWpCLENBQXdCRSw0REFBeEI7QUFDQSxPQUFLSixJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWpCLENBQXdCRyxzREFBeEIsRUFIVSxDQUtWOztBQUNBLE9BQUtMLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsTUFBakIsQ0FBd0I7QUFDcEJJLGNBQVUsRUFBRTtBQUNSQyx3QkFBa0IsRUFBbEJBLDZHQURRO0FBRVJDLHNCQUFnQixFQUFoQkEsdUdBRlE7QUFHUkMsOEJBQXdCLEVBQXhCQSxpSUFIUTtBQUlSQywyQkFBcUIsRUFBckJBLHNIQUpRO0FBS1JDLDJCQUFxQixFQUFyQkEsc0hBQXFCQTtBQUxiLEtBRFE7QUFRcEJDLFdBQU8sRUFBRTtBQUFFQywrQkFBeUIsRUFBekJBLG1IQUF5QkE7QUFBM0I7QUFSVyxHQUF4QixFQU5VLENBaUJWOztBQUNBLE9BQUtiLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsTUFBakIsQ0FBd0I7QUFDcEJJLGNBQVUsRUFBRVEseUNBRFEsQ0FFcEI7O0FBRm9CLEdBQXhCOztBQUtBLDZHQUFLZCxJQUFMLGlCQUFlZSxRQUFRLENBQUNDLElBQXhCLEVBQThCQyxNQUFNLENBQUNDLEtBQXJDO0FBQ0gsQ0EzQkw7QUE4QkEzRCxrREFBSyxDQUFDNEQsVUFBTixDQUFpQixZQUFNO0FBQ25CLE1BQUlyQixJQUFKO0FBQ0gsQ0FGRCxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnMubWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0ByaWJhanMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIc2hGb290ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgdGFnTmFtZSA9ICdoc2gtZm9vdGVyJztcblxuICAgIHByb3RlY3RlZCBhdXRvYmluZCA9IHRydWU7XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY29wZTogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW5pdChIc2hGb290ZXJDb21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgaW5pdChvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pbml0KG9ic2VydmVkQXR0cmlidXRlcykudGhlbih2aWV3ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVxdWlyZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBhcnNlZEF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcbiAgICAgICAgYXR0cmlidXRlTmFtZTogc3RyaW5nLFxuICAgICAgICBvbGRWYWx1ZTogYW55LFxuICAgICAgICBuZXdWYWx1ZTogYW55LFxuICAgICAgICBuYW1lc3BhY2U6IHN0cmluZyB8IG51bGwsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyLnBhcnNlZEF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgLy8gZGVjb25zdHJ1Y3RvclxuICAgIHByb3RlY3RlZCBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJpbmRlciwgVXRpbHMgfSBmcm9tICdAcmliYWpzL2NvcmUnO1xuXG5pbXBvcnQgeyBQamF4IH0gZnJvbSAnQHJpYmFqcy9yb3V0ZXInO1xuXG5pbXBvcnQgeyBCczROYXZiYXJDb21wb25lbnQgfSBmcm9tICdAcmliYWpzL2JzNC9zcmMvY29tcG9uZW50cy9iczQtbmF2YmFyL2JzNC1uYXZiYXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIEhzaE5hdmJhckNvbXBvbmVudCBleHRlbmRzIEJzNE5hdmJhckNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyB0YWdOYW1lID0gJ2hzaC1uYXZiYXInO1xuXG4gICAgcHJvdGVjdGVkIGF1dG9iaW5kID0gdHJ1ZTtcblxuICAgIHByb3RlY3RlZCBwamF4PzogUGpheDtcblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gWydjb2xsYXBzZS1zZWxlY3RvciddO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY29wZTogYW55ID0ge1xuICAgICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICAgIGhpZGU6IHRoaXMuaGlkZSxcbiAgICAgICAgaXNDb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGNvbGxhcHNlU2VsZWN0b3I6ICcubmF2YmFyLWNvbGxhcHNlJyxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIG9uSXRlbUNsaWNrOiB0aGlzLm9uSXRlbUNsaWNrLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ2NvbnN0cnVjdG9yJywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbUNsaWNrKGNvbnRleHQ/OiBCaW5kZXI8YW55PiwgZXZlbnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCdUYXJnZXQgbm90IGZvdW5kIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRoaXMucGpheCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSB0YXJnZXQuaHJlZiB8fCAnLyc7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaXNBYnNvbHV0ZVVybCh1cmwpICYmIFV0aWxzLmlzSW50ZXJuYWxVcmwodXJsKSkge1xuICAgICAgICAgICAgICB1cmwgPSB0YXJnZXQucGF0aG5hbWUgKyB0YXJnZXQuc2VhcmNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wamF4LmdvVG8odXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ0ByaWJhanMvY29yZSc7XG5cbmltcG9ydCB7IFBqYXgsIFByZWZldGNoIH0gZnJvbSAnQHJpYmFqcy9yb3V0ZXInO1xuXG5pbXBvcnQgeyBCczRTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnQHJpYmFqcy9iczQvc3JjL2NvbXBvbmVudHMvYnM0LXNpZGViYXIvYnM0LXNpZGViYXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29sbGFwc2VTZXJ2aWNlIH0gZnJvbSAnQHJpYmFqcy9iczQvc3JjL3NlcnZpY2VzL2NvbGxhcHNlLnNlcnZpY2UnO1xuXG50eXBlIFN0YXRlID0gJ292ZXJsYXktbGVmdCcgfCAnb3ZlcmxheS1yaWdodCcgfCAnc2lkZS1sZWZ0JyB8ICdzaWRlLXJpZ2h0JyB8ICdoaWRkZW4nO1xuXG5pbnRlcmZhY2UgVG9nZ2xlSXRlbSB7XG4gICAgY29sbGFwc2VTZXJ2aWNlOiBDb2xsYXBzZVNlcnZpY2U7XG4gICAgaGFuZGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFOSU1BVEVEX0NPTExBUFNFID0gZmFsc2U7XG5cbmludGVyZmFjZSBTY29wZSB7XG4gICAgLyoqXG4gICAgICogU2VsZWN0b3Igc3RyaW5nIHRvIGdldCB0aGUgY29udGFpbmVyIGVsZW1lbnQgZnJvbSBET01cbiAgICAgKi9cbiAgICBjb250YWluZXJTZWxlY3Rvcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2lkZWJhciwgY2FuIGJlIGAnaGlkZGVuJ2AsIGAnc2lkZS1sZWZ0J2AsIGAnc2lkZS1yaWdodCdgLCBgJ292ZXJsYXktbGVmdCdgIG9yIGAnb3ZlcmxheS1yaWdodCdgXG4gICAgICovXG4gICAgc3RhdGU6IFN0YXRlO1xuICAgIC8qKlxuICAgICAqIFRoZSAnaWQnIGlzIHJlcXVpcmVkIHRvIHJlYWN0IHRvIGV2ZW50cyBvZiB0aGUgYGJzNC10b2dnbGUtYnV0dG9uYCwgdGhlIGB0YXJnZXQtaWRgIGF0dHJpYnV0ZSBvZiB0aGUgYGJzNC10b2dnbGUtYnV0dG9uYCBtdXN0IGJlIGlkZW50aWNhbCB0byB0aGlzIGBpZGBcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIHNpZGViYXJcbiAgICAgKi9cbiAgICB3aWR0aDogc3RyaW5nO1xuXG4gICAgLy8gT3B0aW9uc1xuICAgIC8qKlxuICAgICAqIFRoZSBzaWRlYmFyIGNhbiBiZSBwb3NpdGlvbmVkIGByaWdodGAgb3IgYGxlZnRgXG4gICAgICovXG4gICAgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCc7XG4gICAgLyoqXG4gICAgICogQXV0byBzaG93IHRoZSBzaWRlYmFyIGlmIHRoZSB2aWV3cG9ydCB3aWR0aCBpcyB3aWRlciB0aGFuIHRoaXMgdmFsdWVcbiAgICAgKi9cbiAgICBhdXRvU2hvd09uV2lkZXJUaGFuOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQXV0byBoaWRlIHRoZSBzaWRlYmFyIGlmIHRoZSB2aWV3cG9ydCB3aWR0aCBpcyBzbGltbWVyIHRoYW4gdGhpcyB2YWx1ZVxuICAgICAqL1xuICAgIGF1dG9IaWRlT25TbGltbWVyVGhhbjogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEF1dG8gaGlkZSB0aGUgc2lkZWJhciBpZiB0aGUgcm91dGUgY2hhbmdlc1xuICAgICAqL1xuICAgIHdhdGNoTmV3UGFnZVJlYWR5RXZlbnQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBmb3JjZSB0byBoaWRlIHRoZSBzaWRlYmFyIG9uIGNvcnJlc3BvbmRpbmcgVVJMIHBhdGhhbWVzIGUuZy4geW91IGNhbiBoaWRlIHRoZSBzaWRlYmFyIG9uIGhvbWUgd2l0aCBgWycvJ11gLlxuICAgICAqL1xuICAgIGZvcmNlSGlkZU9uTG9jYXRpb25QYXRobmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgLyoqXG4gICAgICogTGlrZSBgZm9yY2UtaGlkZS1vbi1sb2NhdGlvbi1wYXRobmFtZXNgLCBidXQgdG8gZm9yY2UgdG8gb3BlbiB0aGUgc2lkZWJhclxuICAgICAqL1xuICAgIGZvcmNlU2hvd09uTG9jYXRpb25QYXRobmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgLyoqXG4gICAgICogSWYgdGhlIHZpZXdwb3J0IHdpZHRoIGlzIHdpZGVyIHRoYW4gdGhpcyB2YWx1ZSB0aGUgc2lkZWJhciBhZGRzIGEgbWFyZ2luIHRvIHRoZSBjb250YWluZXIgKGRldGVjdGVkIHdpdGggdGhlIGBjb250YWluZXItc2VsZWN0b3JgKSB0byByZWR1Y2UgaXRzIGNvbnRlbnQsIGlmIHRoZSB2aWV3cG9ydCB3aWR0aCBpcyBzbGltbWVyIHRoYW4gdGhpcyB2YWx1ZSB0aGUgc2lkZWJhciBvcGVucyBvdmVyIHRoZSBjb250ZW50XG4gICAgICovXG4gICAgb3ZlcmxheU9uU2xpbW1lclRoYW46IG51bWJlcjtcblxuICAgIC8vIFRlbXBsYXRlIG1ldGhvZHNcbiAgICAvKipcbiAgICAgKiBIaWRlcyAvIGNsb3NlcyB0aGUgc2lkZWJhclxuICAgICAqL1xuICAgIGhpZGU6IEhzaFNpZGViYXJDb21wb25lbnRbJ2hpZGUnXTtcbiAgICAvKipcbiAgICAgKiBTaG93cyAvIG9wZW5zIHRoZSBzaWRlYmFyXG4gICAgICovXG4gICAgc2hvdzogSHNoU2lkZWJhckNvbXBvbmVudFsnc2hvdyddO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgKGNsb3NlcyBvciBvcGVucykgdGhlIHNpZGViYXJcbiAgICAgKi9cbiAgICB0b2dnbGU6IEhzaFNpZGViYXJDb21wb25lbnRbJ3RvZ2dsZSddO1xuXG4gICAgLy8gQ3VzdG9tXG4gICAgdG9nZ2xlSXRlbTogSHNoU2lkZWJhckNvbXBvbmVudFsndG9nZ2xlSXRlbSddO1xuXG4gICAgb25JdGVtQ2xpY2s6IEhzaFNpZGViYXJDb21wb25lbnRbJ29uSXRlbUNsaWNrJ107XG59XG5cbmV4cG9ydCBjbGFzcyBIc2hTaWRlYmFyQ29tcG9uZW50IGV4dGVuZHMgQnM0U2lkZWJhckNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyB0YWdOYW1lID0gJ2hzaC1zaWRlYmFyJztcblxuICAgIHByb3RlY3RlZCBhdXRvYmluZCA9IHRydWU7XG5cbiAgICBwcm90ZWN0ZWQgdG9nZ2xlSXRlbXM6IEFycmF5PFRvZ2dsZUl0ZW0+ID0gW107XG5cbiAgICBwcm90ZWN0ZWQgcGpheD86IFBqYXg7XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAnY29udGFpbmVyLXNlbGVjdG9yJyxcbiAgICAgICAgICAgICdwb3NpdGlvbicsXG4gICAgICAgICAgICAnd2lkdGgnLFxuICAgICAgICAgICAgJ2F1dG8tc2hvdy1vbi13aWRlci10aGFuJyxcbiAgICAgICAgICAgICdhdXRvLWhpZGUtb24tc2xpbW1lci10aGFuJyxcbiAgICAgICAgICAgICdmb3JjZS1oaWRlLW9uLWxvY2F0aW9uLXBhdGhuYW1lcycsXG4gICAgICAgICAgICAnZm9yY2Utc2hvdy1vbi1sb2NhdGlvbi1wYXRobmFtZXMnLFxuICAgICAgICAgICAgJ292ZXJsYXktb24tc2xpbW1lci10aGFuJyxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2NvcGU6IFNjb3BlID0ge1xuICAgICAgICAvLyB0ZW1wbGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlOiAnaGlkZGVuJyxcbiAgICAgICAgaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgd2lkdGg6ICcxMDB2dycsXG5cbiAgICAgICAgLy8gT3B0aW9uc1xuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICBhdXRvU2hvd09uV2lkZXJUaGFuOiAtMSxcbiAgICAgICAgYXV0b0hpZGVPblNsaW1tZXJUaGFuOiAtMSxcbiAgICAgICAgd2F0Y2hOZXdQYWdlUmVhZHlFdmVudDogZmFsc2UsXG4gICAgICAgIGZvcmNlSGlkZU9uTG9jYXRpb25QYXRobmFtZXM6IFtdLFxuICAgICAgICBmb3JjZVNob3dPbkxvY2F0aW9uUGF0aG5hbWVzOiBbXSxcbiAgICAgICAgb3ZlcmxheU9uU2xpbW1lclRoYW46IDEyMDAsXG5cbiAgICAgICAgLy8gdGVtcGxhdGUgbWV0aG9kc1xuICAgICAgICBoaWRlOiB0aGlzLmhpZGUsXG4gICAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZSxcblxuICAgICAgICAvLyBjdXN0b21cbiAgICAgICAgdG9nZ2xlSXRlbTogdGhpcy50b2dnbGVJdGVtLFxuICAgICAgICBvbkl0ZW1DbGljazogdGhpcy5vbkl0ZW1DbGljayxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVJdGVtKGhhbmRsZTogc3RyaW5nLCBjb250ZXh0OiBhbnksIGV2ZW50OiBFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdG9nZ2xlSXRlbSA9IHRoaXMuZ2V0VG9nZ2xlSXRlbShoYW5kbGUpO1xuICAgICAgICBpZiAodG9nZ2xlSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFsbFRvZ2dsZUl0ZW1zKHRvZ2dsZUl0ZW0pO1xuICAgICAgICAgICAgdG9nZ2xlSXRlbS5jb2xsYXBzZVNlcnZpY2UudG9nZ2xlKEFOSU1BVEVEX0NPTExBUFNFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybignVGFyZ2V0IG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGhpcy5wamF4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHRhcmdldC5ocmVmIHx8ICcvJztcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuaXNBYnNvbHV0ZVVybCh1cmwpICYmIFV0aWxzLmlzSW50ZXJuYWxVcmwodXJsKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB0YXJnZXQucGF0aG5hbWUgKyB0YXJnZXQuc2VhcmNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBqYXguZ29Ubyh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbUNsaWNrKGNvbnRleHQ/OiBhbnksIGV2ZW50PzogRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCdUYXJnZXQgbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRoaXMucGpheCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHRhcmdldC5ocmVmIHx8ICcvJztcbiAgICAgICAgICAgICAgICBpZiAoVXRpbHMuaXNBYnNvbHV0ZVVybCh1cmwpICYmIFV0aWxzLmlzSW50ZXJuYWxVcmwodXJsKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB0YXJnZXQucGF0aG5hbWUgKyB0YXJnZXQuc2VhcmNoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGpheC5nb1RvKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xvc2VBbGxUb2dnbGVJdGVtcyhleGNlcHQ/OiBUb2dnbGVJdGVtKSB7XG4gICAgICAgIGZvciAoY29uc3QgdG9nZ2xlSXRlbSBvZiB0aGlzLnRvZ2dsZUl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWV4Y2VwdCB8fCB0b2dnbGVJdGVtLmhhbmRsZSAhPT0gZXhjZXB0LmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZUl0ZW0uY29sbGFwc2VTZXJ2aWNlLmhpZGUoQU5JTUFURURfQ09MTEFQU0UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRvZ2dsZUl0ZW0oaGFuZGxlOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChjb25zdCB0b2dnbGVJdGVtIG9mIHRoaXMudG9nZ2xlSXRlbXMpIHtcbiAgICAgICAgICAgIGlmICh0b2dnbGVJdGVtLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZUl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICBjb25zdCBkcm9wZG93blRvZ2dsZUVsZW1lbnRzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGFwc2UnKSBhcyBOb2RlTGlzdE9mPFxuICAgICAgICAgICAgSFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudFxuICAgICAgICA+O1xuICAgICAgICBkcm9wZG93blRvZ2dsZUVsZW1lbnRzLmZvckVhY2godG9nZ2xlRWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAodG9nZ2xlRWxlbWVudC5kYXRhc2V0LmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlU2VydmljZTogbmV3IENvbGxhcHNlU2VydmljZShbdG9nZ2xlRWxlbWVudF0pLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IHRvZ2dsZUVsZW1lbnQuZGF0YXNldC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBiZWZvcmVCaW5kKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuYmVmb3JlQmluZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBhZnRlckJpbmQoKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyQmluZCgpO1xuICAgICAgICB0aGlzLnBqYXggPSBQamF4LmdldEluc3RhbmNlKCdtYWluJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlcXVpcmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnaWQnXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFyc2VkQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsXG4gICAgICAgIG9sZFZhbHVlOiBhbnksXG4gICAgICAgIG5ld1ZhbHVlOiBhbnksXG4gICAgICAgIG5hbWVzcGFjZTogc3RyaW5nIHwgbnVsbCxcbiAgICApIHtcbiAgICAgICAgc3VwZXIucGFyc2VkQXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICAvLyBkZWNvbnN0cnVjdG9yXG4gICAgcHJvdGVjdGVkIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IEhzaE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vaHNoLW5hdmJhci9oc2gtbmF2YmFyLmNvbXBvbmVudCc7XG5leHBvcnQgeyBIc2hGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2hzaC1mb290ZXIvaHNoLWZvb3Rlci5jb21wb25lbnQnO1xuZXhwb3J0IHsgSHNoU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vaHNoLXNpZGViYXIvaHNoLXNpZGViYXIuY29tcG9uZW50JztcbiIsImltcG9ydCB7IFJpYmEsIGNvcmVNb2R1bGUsIFV0aWxzIH0gZnJvbSAnQHJpYmFqcy9jb3JlJztcbmltcG9ydCByb3V0ZXJNb2R1bGUgZnJvbSAnQHJpYmFqcy9yb3V0ZXInO1xuXG4vLyBCUzQgQ29tcG9uZW50c1xuaW1wb3J0IHsgQnM0SWNvbkNvbXBvbmVudCB9IGZyb20gJ0ByaWJhanMvYnM0L3NyYy9jb21wb25lbnRzL2JzNC1pY29uL2JzNC1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCczRCdXR0b25Db21wb25lbnQgfSBmcm9tICdAcmliYWpzL2JzNC9zcmMvY29tcG9uZW50cy9iczQtYnV0dG9uL2JzNC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEJzNFRvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ0ByaWJhanMvYnM0L3NyYy9jb21wb25lbnRzL2JzNC10b2dnbGUtYnV0dG9uL2JzNC10b2dnbGUtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCczRBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICdAcmliYWpzL2JzNC9zcmMvY29tcG9uZW50cy9iczQtYWNjb3JkaW9uL2JzNC1hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJzNFNsaWRlc2hvd0NvbXBvbmVudCB9IGZyb20gJ0ByaWJhanMvYnM0L3NyYy9jb21wb25lbnRzL2JzNC1zbGlkZXNob3cvYnM0LXNsaWRlc2hvdy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBkYXRhU2Nyb2xsUG9zaXRpb25ZQmluZGVyIH0gZnJvbSAnQHJpYmFqcy9leHRyYXMvc3JjL2JpbmRlcnMvZGF0YS1zY3JvbGwtcG9zaXRpb24teS5iaW5kZXInO1xuXG5pbXBvcnQgeyBqcXVlcnlNb2R1bGUgfSBmcm9tICdAcmliYWpzL2pxdWVyeSc7XG5cbi8vIGltcG9ydCAqIGFzIEN1c3RvbUJpbmRlcnMgZnJvbSAnLi9iaW5kZXJzJztcbmltcG9ydCAqIGFzIEN1c3RvbUNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIE1haW4ge1xuICAgIHByaXZhdGUgcmliYSA9IG5ldyBSaWJhKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yaWJhLm1vZHVsZS5yZWdpc3QoY29yZU1vZHVsZSk7XG4gICAgICAgIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KGpxdWVyeU1vZHVsZSk7XG4gICAgICAgIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KHJvdXRlck1vZHVsZSk7XG5cbiAgICAgICAgLy8gc2VsZWN0ZWQgZWxlbWVudHMgZnJvbSBtb2R1bGVzXG4gICAgICAgIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBCczRCdXR0b25Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgQnM0SWNvbkNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBCczRUb2dnbGVCdXR0b25Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgQnM0QWNjb3JkaW9uQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIEJzNFNsaWRlc2hvd0NvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kZXJzOiB7IGRhdGFTY3JvbGxQb3NpdGlvbllCaW5kZXIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVnaXN0IGN1c3RvbSBjb21wb25lbnRzXG4gICAgICAgIHRoaXMucmliYS5tb2R1bGUucmVnaXN0KHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IEN1c3RvbUNvbXBvbmVudHMsXG4gICAgICAgICAgICAvLyBiaW5kZXJzOiBDdXN0b21CaW5kZXJzLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJpYmEuYmluZChkb2N1bWVudC5ib2R5LCB3aW5kb3cubW9kZWwpO1xuICAgIH1cbn1cblxuVXRpbHMuZG9tSXNSZWFkeSgoKSA9PiB7XG4gICAgbmV3IE1haW4oKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==