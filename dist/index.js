/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js!./src/assets/styles/index.styl":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js!./src/assets/styles/index.styl ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Nunito-Black.woff2 */ "./src/assets/fonts/Nunito-Black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Nunito';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\n  font-weight: 900;\n  font-style: #000;\n}\nbody {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #4daf34;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/styles/index.styl"],"names":[],"mappings":"AAAA;EACE,qBAAY;EACZ,4DAAqC;EACrC,gBAAY;EACZ,gBAAW;AACb;AACA;EACE,eAAS;EACT,MAAI;EACJ,OAAK;EACL,aAAQ;EACR,uBAAgB;EAChB,WAAM;EACN,YAAO;EACP,SAAO;EACP,UAAQ;EACR,gBAAS;EACT,yBAAiB;AACnB","sourcesContent":["@font-face\r\n  font-family 'Nunito'\r\n  src url('../fonts/Nunito-Black.woff2') format('woff2')\r\n  font-weight 900\r\n  font-style black\r\n\r\nbody\r\n  position fixed\r\n  top 0\r\n  left 0\r\n  display flex\r\n  justify-content center\r\n  width 100%\r\n  height 100%\r\n  margin 0\r\n  padding 0\r\n  overflow hidden\r\n  background-color #4DAF34\r\n\t\t\t"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/index.styl":
/*!**************************************!*\
  !*** ./src/assets/styles/index.styl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js */ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_index_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/stylus-loader/dist/cjs.js!./index.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js!./src/assets/styles/index.styl");

      
      
      
      
      
      
      
      
      

var options = {};

;
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_index_styl__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_index_styl__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_index_styl__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_index_styl__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js":
/*!************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js ***!
  \************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join("\n");
  };
}();

/* istanbul ignore next  */
function apply(styleElement, index, remove, obj) {
  var css;
  if (remove) {
    css = "";
  } else {
    css = "";
    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }
    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }
    var needLayer = typeof obj.layer !== "undefined";
    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }
    css += obj.css;
    if (needLayer) {
      css += "}";
    }
    if (obj.media) {
      css += "}";
    }
    if (obj.supports) {
      css += "}";
    }
  }

  // For old IE
  /* istanbul ignore if  */
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = styleElement.childNodes;
    if (childNodes[index]) {
      styleElement.removeChild(childNodes[index]);
    }
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index]);
    } else {
      styleElement.appendChild(cssNode);
    }
  }
}
var singletonData = {
  singleton: null,
  singletonCounter: 0
};

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") return {
    update: function update() {},
    remove: function remove() {}
  };

  // eslint-disable-next-line no-undef,no-use-before-define
  var styleIndex = singletonData.singletonCounter++;
  var styleElement =
  // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton || (
  // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton = options.insertStyleElement(options));
  return {
    update: function update(obj) {
      apply(styleElement, styleIndex, false, obj);
    },
    remove: function remove(obj) {
      apply(styleElement, styleIndex, true, obj);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./src/modules/Assets.js":
/*!*******************************!*\
  !*** ./src/modules/Assets.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Assets)
/* harmony export */ });
class Assets {
	constructor() {
		this._assets = {};
		this._loaded = 0;
	}

	load() {
		return new Promise(resolve => {
			if (!Assets.DATA.length) resolve();
			
			Assets.DATA.forEach(source => {
				const type = source.url.split('.').pop();
				if (Assets.IMAGES_TYPES.includes(type)) this._loadImage(source, resolve);
			})
		})
	}

	_increaseLoaded(resolve) {
		this._loaded += 1;
		if (this._loaded === Assets.DATA.length) resolve();
	}

	_loadImage(source, resolve) {
		const image = new Image();

		image.addEventListener('load', () => {
			this._assets[source.url] = image;
			this._increaseLoaded(resolve);
		})

		image.src = source.data;
	}

	get(url) {
		return this._assets[url];
	}

	static IMAGES_TYPES = ['png'];
	static DATA = [];
}

/***/ }),

/***/ "./src/modules/Button.js":
/*!*******************************!*\
  !*** ./src/modules/Button.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./src/modules/Text.js");
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");




class Button {
  constructor({ position, size, label }) {
    this._position = position;
    this._size = size;
    this._label = label;
  }

  render(ctx) {
    _Draw__WEBPACK_IMPORTED_MODULE_1__["default"].roundedRect(ctx, this._position.x, this._position.y, this._size.width, this._size.height, Button.radius, _Color__WEBPACK_IMPORTED_MODULE_2__["default"].softGrass.key);

    const { textWidth } = _Text__WEBPACK_IMPORTED_MODULE_0__["default"].calcTextMetrics(ctx, this._label, Button.fontSize);

    const labelPositionX = this._position.x + this._size.width / 2 - textWidth / 2;
    const labelPositionY = this._position.y + this._size.height / 2 + Button.fontSize / 3;

    _Draw__WEBPACK_IMPORTED_MODULE_1__["default"].text(ctx, labelPositionX, labelPositionY, this._label, Button.fontSize, _Color__WEBPACK_IMPORTED_MODULE_2__["default"].white.key);
  }

  isPressed(clickPosition) {
    return (
      clickPosition.x > this._position.x && clickPosition.x < this._position.x + this._size.width &&
      clickPosition.y > this._position.y && clickPosition.y < this._position.y + this._size.height
    );
  }

  static fontSize = 32;
  static radius = 37;
}

/***/ }),

/***/ "./src/modules/Cell.js":
/*!*****************************!*\
  !*** ./src/modules/Cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
  constructor({ coords }) {
    this._coords = coords;
    this._brick = null;
    this._detachedBrick = null;
  }

  render(ctx) {
    if (this._brick) this._brick.render(ctx);
  }

  setBrick(brick) {
    this._brick = brick;
    const detachedBrick = this._detachedBrick;
    this._detachedBrick = null;
    return this._brick !== detachedBrick;
  }

  getBrick() {
    return this._brick;
  }

  detachBrick() {
    const brick = this._brick;
    this._detachedBrick = brick;
    this._brick = null;
    return brick;
  }

  getCoords() {
    return this._coords;
  }
}

/***/ }),

/***/ "./src/modules/Color.js":
/*!******************************!*\
  !*** ./src/modules/Color.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
class Color {
  static grass = {
    id: 1,
    key: '#4DAF34',
  };
  static blueDeep = {
    id: 2,
    key: '#1D3753',
  };
  static blueNight = {
    id: 3,
    key: '#203E60',
  };
  static blue = {
    id: 4,
    key: '#4A5AEC',
  };
  static green = {
    id: 5,
    key: '#73AE37',
  };
  static sea = {
    id: 6,
    key: '#4BD5F5',
  };
  static red = {
    id: 7,
    key: '#D74E23',
  };
  static purple = {
    id: 8,
    key: '#E436EE',
  };
  static orange = {
    id: 9,
    key: '#FF891C',
  };
  static yellow = {
    id: 10,
    key: '#FFC530',
  };
  static white = {
    id: 11,
    key: '#FFFFFF',
  };
  static softGrass = {
    id: 12,
    key: '#5DBB46',
  }
}

/***/ }),

/***/ "./src/modules/CoreScene.js":
/*!**********************************!*\
  !*** ./src/modules/CoreScene.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoreScene)
/* harmony export */ });
/* harmony import */ var _LevelPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LevelPreview */ "./src/modules/LevelPreview.js");
/* harmony import */ var _LevelController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LevelController */ "./src/modules/LevelController.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ "./src/modules/Field.js");
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/modules/Button.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");
/* harmony import */ var _assets_json_levels_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/json/levels.json */ "./src/assets/json/levels.json");









class CoreScene {
	constructor({ canvas, assets, state, sceneManager }) {
		this._canvas = canvas;
		this._assets = assets;
		this._state = state;
		this._sceneManager = sceneManager;

    this._level = _assets_json_levels_json__WEBPACK_IMPORTED_MODULE_6__[state.getLevel()];

    this._levelPreview = new _LevelPreview__WEBPACK_IMPORTED_MODULE_0__["default"]({
      map: this._level.map,
    });

    this._passLevelButton = null;
    this._randomLevelButton = null;
    this._initButtons();

    this._levelController = new _LevelController__WEBPACK_IMPORTED_MODULE_1__["default"]({
      map: this._level.map,
    })

		this._field = new _Field__WEBPACK_IMPORTED_MODULE_2__["default"]({
			canvas: this._canvas,
			assets: this._assets,
			state: this._state,
			sceneManager: this._sceneManager,
      levelController: this._levelController,
		});
	}

	update(time) {

	}

	render(ctx) {
    _Draw__WEBPACK_IMPORTED_MODULE_3__["default"].rect(ctx, 0, 0, this._canvas.width, this._canvas.height, _Color__WEBPACK_IMPORTED_MODULE_5__["default"].grass.key);

    this._levelPreview.render(ctx);

    if (this._passLevelButton) this._passLevelButton.render(ctx);
    if (this._randomLevelButton) this._randomLevelButton.render(ctx);

		this._field.render(ctx);
	}

	handleClick({ position }) {
    if (this._passLevelButton.isPressed(position)) {
      this._state.increaseLevel();
      this._sceneManager.showCoreScene();
    } else if (this._randomLevelButton.isPressed(position)) {
      this._state.setRandomLevel();
      this._sceneManager.showCoreScene();
    }
	}

	handleStartDragging(event) {
		this._field.handleStartDragging(event);
	}

	handleMoveDragging(event) {
		this._field.handleMoveDragging(event);
	}

	handleEndDragging(event) {
		this._field.handleEndDragging(event);
	}

  _initButtons() {
    this._passLevelButton = new _Button__WEBPACK_IMPORTED_MODULE_4__["default"]({
      position: {
        x: this._canvas.width - CoreScene.passLevelButtonWidth - 21,
        y: CoreScene.passLevelButtonPositionY,
      },
      size: {
        width: CoreScene.passLevelButtonWidth,
        height: CoreScene.buttonsHeight,
      },
      label: 'Пропустить уровень',
    })

    this._randomLevelButton = new _Button__WEBPACK_IMPORTED_MODULE_4__["default"]({
      position: {
        x: this._canvas.width - CoreScene.randomLevelButtonWidth - 21,
        y: CoreScene.randomLevelButtonPositionY,
      },
      size: {
        width: CoreScene.randomLevelButtonWidth,
        height: CoreScene.buttonsHeight,
      },
      label: 'Случайный уровень',
    })
  }

  static passLevelButtonPositionY = 21;
  static passLevelButtonWidth = 414;
  static randomLevelButtonPositionY = 109;
  static randomLevelButtonWidth = 409;
  static buttonsHeight = 74;
}

/***/ }),

/***/ "./src/modules/Draw.js":
/*!*****************************!*\
  !*** ./src/modules/Draw.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Draw)
/* harmony export */ });
class Draw {
  static rect(ctx, x, y, width, height, color, opacity = 1) {
    ctx.globalAlpha = opacity;
		ctx.fillStyle = color;
		ctx.fillRect(x, y, width, height);
    ctx.globalAlpha = 1;
  }

  static roundedRect(ctx, x, y, width, height, radius, color, opacity = 1) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  
  static stroke(ctx, thickness, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.stroke();
  }
  
  static text(ctx, x, y, text, size, color) {
    ctx.fillStyle = color;
    ctx.font = `${size}px Nunito`;
    ctx.fillText(text, x, y);
  }
}

/***/ }),

/***/ "./src/modules/Field.js":
/*!******************************!*\
  !*** ./src/modules/Field.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ "./src/modules/Tile.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./src/modules/Cell.js");
/* harmony import */ var _Random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Random */ "./src/modules/Random.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");






class Field {
  constructor({ canvas, assets, state, sceneManager, levelController }) {
    this._canvas = canvas;
    this._assets = assets;
    this._state = state;
    this._sceneManager = sceneManager;
    this._levelController = levelController;

    this._position = {
      x: 0,
      y: 0,
    };
    this._size = {
      width: 0,
      height: 0,
    };
    //this._rowHeight = 0;
    //this._columnWidth = 0;
    this._maxOutOfBoundsX = 0;
    this._maxOutOfBoundsY = 0;
    this._setMetrics();

    this._map = [];
    this._setMap();
    this._setBricks();

    this._startDraggingPosition = null;
    this._startDraggingCoords = null;
    this._prevDraggingMovePosition = null;
    this._draggingAxis = null;
    this._detachedBricks = [];
    this._levelComplete = false;

    this._movesCounter = 0;
  }

  render(ctx) {
    _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].roundedRect(ctx, this._position.x, this._position.y, this._size.width, this._size.height, Field.radius, _Color__WEBPACK_IMPORTED_MODULE_4__["default"].blueDeep.key);

    this._map.forEach(row => {
      row.forEach(cell => cell.render(ctx));
    });

    this._detachedBricks.forEach(brick => brick.render(ctx));
  }

  handleStartDragging({ position }) {
    if (this._levelComplete || !this._isFieldIncludesPosition(position)) return;

    this._startDraggingPosition = position;
    this._startDraggingCoords = this.getCoordsByPosition(position);

    this._prevDraggingMovePosition = position;
  }

  handleMoveDragging({ position }) {
    if (!this._startDraggingPosition || !this._startDraggingCoords) return;

    if (!this._draggingAxis) this._setDraggingAxis(position);

    if (!this._detachedBricks.length) this._detachBricks();

    if (this._draggingAxis === 'x') this._moveRow(position);
    else this._moveColumn(position);

    this._prevDraggingMovePosition = position;
  }

  _setDraggingAxis(draggingPosition) {
    const xOffset = this._startDraggingPosition.x - draggingPosition.x;
    const yOffset = this._startDraggingPosition.y - draggingPosition.y;

    this._draggingAxis = Math.abs(xOffset) > Math.abs(yOffset) ? 'x' : 'y';
  }

  handleEndDragging(event) {
    if (!this._detachedBricks.length) return;

    const axis = this._draggingAxis;
    this._detachedBricks.sort((a, b) => a.getPosition()[axis] - b.getPosition()[axis]);

    let bricksWasUpdated = false;

    if (axis === 'x') {
      this._map[this._startDraggingCoords.y].forEach(cell => {
        const brickWasUpdated = this._attachFirstDetachedBrickToCell(cell);
        bricksWasUpdated = bricksWasUpdated || brickWasUpdated;
      });
    } else {
      this._map.forEach(row => {
        const cell = row[this._startDraggingCoords.x];
        const brickWasUpdated = this._attachFirstDetachedBrickToCell(cell);
        bricksWasUpdated = bricksWasUpdated || brickWasUpdated;
      });
    }

    if (bricksWasUpdated) this._movesCounter += 1;

    this._startDraggingPosition = null;
    this._startDraggingCoords = null;
    this._prevDraggingMovePosition = null;
    this._draggingAxis = null;

    this._handleDraggingResult();
  }

  _attachFirstDetachedBrickToCell(cell) {
    const coords = cell.getCoords();
    const brick = this._detachedBricks.shift();

    const position = this.getPositionByCoords(coords);
    brick.setPosition(position);
    brick.setOpacity(1);

    return cell.setBrick(brick);
  }

  _handleDraggingResult() {
    this._levelComplete = this._levelController.isMatch(this._map);
    if (this._levelComplete) {
      setTimeout(() => {
        this._sceneManager.showResultScene(this._movesCounter);
      }, 1500)
    }
  }

  _detachBricks() {
    this._detachedBricks = this._draggingAxis === 'x' ?
      this._map[this._startDraggingCoords.y].map(cell => cell.detachBrick()) :
      this._map.map(row => row[this._startDraggingCoords.x].detachBrick());
  }

  _moveRow(position) {
    const offset = position.x - this._prevDraggingMovePosition.x;

    this._detachedBricks.forEach(brick => {
      const currentPosition = brick.getPosition();

      const newPosition = {
        x: currentPosition.x + offset,
        y: currentPosition.y,
      }

      if (offset < 0 && newPosition.x < this._position.x + Field.padding - this._maxOutOfBoundsX) {
        newPosition.x += this._detachedBricks.length * (_Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width + Field.gap);
      } else if (offset > 0 && newPosition.x + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width > this._position.x + this._size.width - Field.padding + this._maxOutOfBoundsX) {
        newPosition.x -= this._detachedBricks.length * (_Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width + Field.gap);
      }

      let opacity = 1;

      if (newPosition.x < this._position.x + Field.padding) {
        opacity = 1 - (this._position.x + Field.padding - newPosition.x) / this._maxOutOfBoundsX;
      } else if (newPosition.x + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width > this._position.x + this._size.width - Field.padding) {
        opacity = 1 - (newPosition.x + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width - (this._position.x + this._size.width - Field.padding)) / this._maxOutOfBoundsX;
      }

      brick.setOpacity(opacity);
      brick.setPosition(newPosition);
    })
  }

  _moveColumn(position) {
    const offset = position.y - this._prevDraggingMovePosition.y;

    this._detachedBricks.forEach(brick => {
      const currentPosition = brick.getPosition();

      const newPosition = {
        x: currentPosition.x,
        y: currentPosition.y + offset,
      }

      if (offset < 0 && newPosition.y < this._position.y + Field.padding - this._maxOutOfBoundsY) {
        newPosition.y += this._detachedBricks.length * (_Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height + Field.gap);
      } else if (offset > 0 && newPosition.y + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height > this._position.y + this._size.height - Field.padding + this._maxOutOfBoundsY) {
        newPosition.y -= this._detachedBricks.length * (_Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height + Field.gap);
      }

      let opacity = 1;

      if (newPosition.y < this._position.y + Field.padding) {
        opacity = 1 - (this._position.y + Field.padding - newPosition.y) / this._maxOutOfBoundsY;
      } else if (newPosition.y + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height > this._position.y + this._size.height - Field.padding) {
        opacity = 1 - (newPosition.y + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height - (this._position.y + this._size.height - Field.padding)) / this._maxOutOfBoundsY;
      }

      brick.setOpacity(opacity);
      brick.setPosition(newPosition);
    })
  }

  getCoordsByPosition(position) {
    return {
      x: Math.floor((position.x - this._position.x - Field.padding) / (Field.gap + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width)),
      y: Math.floor((position.y - this._position.y - Field.padding) / (Field.gap + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height)),
    }
  }

  getPositionByCoords(coords) {
    return {
      x: this._position.x + coords.x * (Field.gap + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width) + Field.padding,
      y: this._position.y + coords.y * (Field.gap + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height) + Field.padding,
    }
  }

  _getCellByCoords(coords) {
    return this._map[coords.y][coords.x]
  }

  _isFieldIncludesPosition(position) {
    return (
      position.x > this._position.x + Field.padding && position.x < this._position.x + this._size.width - Field.padding &&
      position.y > this._position.y + Field.padding && position.y < this._position.y + this._size.height - Field.padding
    );
  }

  _setMetrics() {
    const { x, y } = this._levelController.getMapLengths();

    this._size.width = x * _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width + (x - 1) * Field.gap + Field.padding * 2;
    this._size.height = y * _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height + (y - 1) * Field.gap + Field.padding * 2;

    this._position.x = this._canvas.width / 2 - this._size.width / 2;
    this._position.y = this._canvas.height / 2 - this._size.height / 2;

    this._maxOutOfBoundsX = (Field.gap + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].width) / 2;
    this._maxOutOfBoundsY = (Field.gap + _Tile__WEBPACK_IMPORTED_MODULE_1__["default"].height) / 2;
  }

  _setMap() {
    const { x: xLength, y: yLength} = this._levelController.getMapLengths();

    for (let y = 0; y < yLength; y++) {

      const row = [];
      for (let x = 0; x < xLength; x++) {
        const cell = new _Cell__WEBPACK_IMPORTED_MODULE_2__["default"]({ coords: { x, y }});
        row.push(cell);
      }

      this._map.push(row);
    }
  }

  _setBricks() {
    let colorsCounters = this._levelController.getColorsCounters();

    this._map.forEach(row => {
      row.forEach(cell => {
        const coords = cell.getCoords();

        colorsCounters = colorsCounters.filter(colorCounter => colorCounter.counter);
        const randomIndex = _Random__WEBPACK_IMPORTED_MODULE_3__["default"].getRandomFromRange(0, colorsCounters.length - 1);
        const colorCounter = colorsCounters[randomIndex];
        colorCounter.counter -= 1;

        const brick = this._createBrick(coords, colorCounter.color);
        cell.setBrick(brick);
      })
    })
  }

  _createBrick(coords, color) {
    const position = this.getPositionByCoords(coords);
    return new _Tile__WEBPACK_IMPORTED_MODULE_1__["default"]({ color, position });
  }

  static padding = 19;
  static gap = 10;
  static radius = 44;
}

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets */ "./src/modules/Assets.js");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State */ "./src/modules/State.js");
/* harmony import */ var _SceneManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SceneManager */ "./src/modules/SceneManager.js");
/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer */ "./src/modules/Renderer.js");





class Game {
	constructor(canvas) {
		this._canvas = canvas;
		this._ctx = canvas.getContext('2d');
		this._setRenderSize()

		this._assets = new _Assets__WEBPACK_IMPORTED_MODULE_0__["default"]();

		this._state = new _State__WEBPACK_IMPORTED_MODULE_1__["default"]({
			assets: this._assets,
		});

		this._sceneManager = new _SceneManager__WEBPACK_IMPORTED_MODULE_2__["default"]({
			canvas: this._canvas,
			assets: this._assets,
			state: this._state,
		});

		this._renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_3__["default"]({
			canvas: this._canvas,
			ctx: this._ctx,
			sceneManager: this._sceneManager,
		});

		this._prevTimestamp = null;
		this._draggingStarted = false;

		this._addEventHandlers();
		this._startGame();
	}

	async _startGame() {
		await this._assets.load();
		this._sceneManager.showOpenScene();

		requestAnimationFrame(timestamp => {
			this._gameLoop(timestamp);
		});
	}
	
	_gameLoop(timestamp) {
		requestAnimationFrame(nextTimestamp => {
			this._gameLoop(nextTimestamp);
		});

		const prevTimestamp = this._prevTimestamp || timestamp;
		const prevFrameDuration = timestamp - prevTimestamp;
		const delta = prevFrameDuration / 1000;
		this._sceneManager.update({ delta, prevFrameDuration, timestamp });
		this._prevTimestamp = timestamp;

		this._renderer.render();
	}

	_addEventHandlers() {
		this._canvas.addEventListener('click', event => this._handleClick(event))
		this._canvas.addEventListener('mousedown', event => this._handleStartDragging(event))
		window.addEventListener('mousemove', event => this._handleMoveDragging(event))
		window.addEventListener('mouseup', event => this._handleEndDragging(event))
		this._canvas.addEventListener('touchstart', event => this._handleStartDragging(event));
		window.addEventListener('touchmove', event => this._handleMoveDragging(event));
		window.addEventListener('touchend', event => this._handleEndDragging(event));
		window.addEventListener('resize', () => this._setRenderSize());
	}

	_handleClick(event) {
		const { clientX: x, clientY: y } = event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleClick({ position });
	}

	_handleStartDragging(event) {
		this._draggingStarted = true;
		const { clientX: x, clientY: y } = event.touches?.[0] || event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleStartDragging({ position });
	}

	_handleEndDragging(event) {
		this._draggingStarted = false;
		const { clientX: x, clientY: y } = event.touches?.[0] || event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleEndDragging({ position });
	}

	_handleMoveDragging(event) {
		if (!this._draggingStarted) return;
		const { clientX: x, clientY: y } = event.touches?.[0] || event;
		const position = this._transformClickPosition({ x, y });
		this._sceneManager.handleMoveDragging({ position });
	}

	_transformClickPosition({ x, y }) {
		x = x - this._canvas.getBoundingClientRect().left;
		x = x * (this._canvas.width / parseFloat(this._canvas.style.width));
		y = y - this._canvas.getBoundingClientRect().top;
		y = y * (this._canvas.height / parseFloat(this._canvas.style.height));
		return { x, y };
	}

	_setRenderSize() {
		const screenWidth = document.documentElement.clientWidth;
		const screenHeight = document.documentElement.clientHeight;
		
		let aspectRatio = this._canvas.width / this._canvas.height;

		let renderHeight = screenHeight;
		let renderWidth = renderHeight * aspectRatio;

		if (renderWidth > screenWidth) {
			aspectRatio = this._canvas.height / this._canvas.width;

			renderWidth = screenWidth;
			renderHeight = renderWidth * aspectRatio;
		}

		this._canvas.style.width = renderWidth + 'px';
		this._canvas.style.height = renderHeight + 'px';
	}
}


/***/ }),

/***/ "./src/modules/LevelController.js":
/*!****************************************!*\
  !*** ./src/modules/LevelController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelController)
/* harmony export */ });
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "./src/modules/Tile.js");


class LevelController {
  constructor({ map }) {
    this._map = map;
  }

  isMatch(currentFieldMap) {
    return currentFieldMap.every((row, y) => {
      return row.every((cell, x) => cell.getBrick().getColor().id === this._map[y][x]);
    })
  }

  getMapLengths() {
    return {
      x: this._map[0].length,
      y: this._map.length,
    }
  }

  getColorsCounters() {
    const colorsId = this._map.flat();
    const uniqueColorsId = Array.from(new Set(colorsId));
    return uniqueColorsId.map(id => {
      return {
        color: _Tile__WEBPACK_IMPORTED_MODULE_0__["default"].colors.find(color => color.id === id),
        counter: colorsId.filter(colorId => colorId === id).length,
      }
    })
  }
}

/***/ }),

/***/ "./src/modules/LevelPreview.js":
/*!*************************************!*\
  !*** ./src/modules/LevelPreview.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelPreview)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/modules/Tile.js");




class LevelPreview {
  constructor({ map }) {
    this._map = map;
  }

  render(ctx) {
    const width = LevelPreview.padding * 2 + this._map[0].length * LevelPreview.brickWidth + LevelPreview.gap * (this._map[0].length - 1);
    const height = LevelPreview.padding * 2 + this._map.length * LevelPreview.brickHeight + LevelPreview.gap * (this._map.length - 1);

    _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].roundedRect(ctx, LevelPreview.positionX, LevelPreview.positionY, width, height, LevelPreview.radius, _Color__WEBPACK_IMPORTED_MODULE_1__["default"].blueDeep.key);

    this._map.forEach((row, y) => {
      row.forEach((colorId, x) => {
        const brickPositionX = LevelPreview.positionX + LevelPreview.padding + (LevelPreview.brickWidth + LevelPreview.gap) * x;
        const brickPositionY = LevelPreview.positionY + LevelPreview.padding + (LevelPreview.brickHeight + LevelPreview.gap) * y;

        const brickColor = _Tile__WEBPACK_IMPORTED_MODULE_2__["default"].colors.find(color => color.id === colorId);

        _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].roundedRect(ctx, brickPositionX, brickPositionY, LevelPreview.brickWidth, LevelPreview.brickHeight, LevelPreview.brickRadius, brickColor.key);
      });
    });
  }

  static positionX = 21;
  static positionY = 21;
  static padding = 6;
  static gap = 2;
  static radius = 16;
  static brickWidth = 26;
  static brickHeight = 26;
  static brickRadius = 10;
}

/***/ }),

/***/ "./src/modules/OpenScene.js":
/*!**********************************!*\
  !*** ./src/modules/OpenScene.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenScene)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./src/modules/Text.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/modules/Button.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");





class OpenScene {
  constructor({ canvas, assets, state, sceneManager }) {
    this._canvas = canvas;
		this._assets = assets;
		this._state = state;
    this._sceneManager = sceneManager;

    this._startButton = null;
    this._randomLevelButton = null;
    this._initButtons();
  }

  update(time) {
    
  }

  render(ctx) {
    _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].rect(ctx, 0, 0, this._canvas.width, this._canvas.height, _Color__WEBPACK_IMPORTED_MODULE_3__["default"].grass.key);

    OpenScene.label.split(' ').forEach((string, index) => {
      const { textWidth } = _Text__WEBPACK_IMPORTED_MODULE_1__["default"].calcTextMetrics(ctx, string, OpenScene.fontSize);

      const stringPositionX = this._canvas.width / 2 - textWidth / 2;
      const stringPositionY = OpenScene.labelPositionY + (index * OpenScene.lineHeight) + OpenScene.fontSize;

      _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].text(ctx, stringPositionX, stringPositionY, string, OpenScene.fontSize, _Color__WEBPACK_IMPORTED_MODULE_3__["default"].white.key);
    })

    if (this._startButton) this._startButton.render(ctx);
    if (this._randomLevelButton) this._randomLevelButton.render(ctx);
  }

  handleClick({ position }) {
    if (this._startButton.isPressed(position)) {
      this._sceneManager.showCoreScene();
    } else if (this._randomLevelButton.isPressed(position)) {
      this._state.setRandomLevel();
      this._sceneManager.showCoreScene();
    }
  }

  handleStartDragging() {

  }

  handleMoveDragging() {

  }

  handleEndDragging() {

  }

  _initButtons() {
    this._startButton = new _Button__WEBPACK_IMPORTED_MODULE_2__["default"]({
      position: {
        x: this._canvas.width / 2 - OpenScene.startButtonWidth / 2,
        y: OpenScene.startButtonPositionY,
      },
      size: {
        width: OpenScene.startButtonWidth,
        height: OpenScene.buttonsHeight,
      },
      label: 'От простого к сложному',
    })

    this._randomLevelButton = new _Button__WEBPACK_IMPORTED_MODULE_2__["default"]({
      position: {
        x: this._canvas.width / 2 - OpenScene.randomLevelButtonWidth / 2,
        y: OpenScene.randomLevelButtonPositionY,
      },
      size: {
        width: OpenScene.randomLevelButtonWidth,
        height: OpenScene.buttonsHeight,
      },
      label: 'Случайный уровень',
    })
  }

  static label = 'Colored Tiles';
  static fontSize = 96;
  static lineHeight = 100;
  static labelPositionY = 401;
  static startButtonPositionY = 681;
  static startButtonWidth = 482;
  static randomLevelButtonPositionY = 769;
  static randomLevelButtonWidth = 409;
  static buttonsHeight = 74;
}

/***/ }),

/***/ "./src/modules/Random.js":
/*!*******************************!*\
  !*** ./src/modules/Random.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Random)
/* harmony export */ });
class Random {
  static getRandomFromRange(from, to) {
    return from === to ? from : from + Math.round(Math.random() * (to - from));
  }
}

/***/ }),

/***/ "./src/modules/Renderer.js":
/*!*********************************!*\
  !*** ./src/modules/Renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
class Renderer {
	constructor({ ctx, canvas, sceneManager }) {
		this._canvas = canvas;
		this._ctx = ctx;
		this._sceneManager = sceneManager;
	}

	render() {
		this._clear();
		this._renderScene();
	}

	_clear() {
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
	}

	_renderScene() {
		this._sceneManager.render(this._ctx);
	}
}

/***/ }),

/***/ "./src/modules/ResultScene.js":
/*!************************************!*\
  !*** ./src/modules/ResultScene.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResultScene)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./src/modules/Text.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/modules/Button.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");





class ResultScene {
  constructor({ canvas, assets, state, sceneManager, movesCounter }) {
    this._canvas = canvas;
		this._assets = assets;
		this._state = state;
    this._sceneManager = sceneManager;
    this._movesCounter = movesCounter;

    this._continueButton = null;
    this._randomLevelButton = null;
    this._initButtons();
  }

  update(time) {
    
  }

  render(ctx) {
    _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].rect(ctx, 0, 0, this._canvas.width, this._canvas.height, _Color__WEBPACK_IMPORTED_MODULE_3__["default"].grass.key);

    this._renderLabel(ctx);

    this._renderMovesCounter(ctx);

    if (this._continueButton) this._continueButton.render(ctx);
    if (this._randomLevelButton) this._randomLevelButton.render(ctx);
  }

  _renderLabel(ctx) {
    ResultScene.label.split(' ').forEach((string, index) => {
      const { textWidth } = _Text__WEBPACK_IMPORTED_MODULE_1__["default"].calcTextMetrics(ctx, string, ResultScene.fontSize);

      const stringPositionX = this._canvas.width / 2 - textWidth / 2;
      const stringPositionY = ResultScene.labelPositionY + (index * ResultScene.lineHeight) + ResultScene.fontSize;

      _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].text(ctx, stringPositionX, stringPositionY, string, ResultScene.fontSize, _Color__WEBPACK_IMPORTED_MODULE_3__["default"].white.key);
    })
  }

  _renderMovesCounter(ctx) {
    const { textWidth: movesCounterHintWidth } = _Text__WEBPACK_IMPORTED_MODULE_1__["default"].calcTextMetrics(ctx, ResultScene.movesCounterHint, ResultScene.movesCounterHintFontSize);
    const movesCounterHintPositionX = this._canvas.width / 2 - movesCounterHintWidth / 2;
    const movesCounterHintPositionY = ResultScene.movesCounterHintPositionY + ResultScene.movesCounterHintFontSize;
    _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].text(ctx, movesCounterHintPositionX, movesCounterHintPositionY, ResultScene.movesCounterHint, ResultScene.movesCounterHintFontSize, _Color__WEBPACK_IMPORTED_MODULE_3__["default"].yellow.key);

    const { textWidth: movesCounterWidth } = _Text__WEBPACK_IMPORTED_MODULE_1__["default"].calcTextMetrics(ctx, this._movesCounter, ResultScene.movesCounterFontSize);
    const movesCounterPositionX = this._canvas.width / 2 - movesCounterWidth / 2;
    const movesCounterPositionY = ResultScene.movesCounterPositionY + ResultScene.movesCounterFontSize;
    _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].text(ctx, movesCounterPositionX, movesCounterPositionY, this._movesCounter, ResultScene.movesCounterFontSize, _Color__WEBPACK_IMPORTED_MODULE_3__["default"].yellow.key);
  }

  handleClick({ position }) {
    if (this._continueButton.isPressed(position)) {
      this._state.increaseLevel();
      this._sceneManager.showCoreScene();
    } else if (this._randomLevelButton.isPressed(position)) {
      this._state.setRandomLevel();
      this._sceneManager.showCoreScene();
    }
  }

  handleStartDragging() {

  }

  handleMoveDragging() {

  }

  handleEndDragging() {

  }

  _initButtons() {
    this._continueButton = new _Button__WEBPACK_IMPORTED_MODULE_2__["default"]({
      position: {
        x: this._canvas.width / 2 - ResultScene.continueButtonWidth / 2,
        y: ResultScene.continueButtonPositionY,
      },
      size: {
        width: ResultScene.continueButtonWidth,
        height: ResultScene.buttonsHeight,
      },
      label: 'Следующий уровень',
    })

    this._randomLevelButton = new _Button__WEBPACK_IMPORTED_MODULE_2__["default"]({
      position: {
        x: this._canvas.width / 2 - ResultScene.randomLevelButtonWidth / 2,
        y: ResultScene.randomLevelButtonPositionY,
      },
      size: {
        width: ResultScene.randomLevelButtonWidth,
        height: ResultScene.buttonsHeight,
      },
      label: 'Случайный уровень',
    })
  }

  static label = 'Уровень пройден!';
  static fontSize = 72;
  static lineHeight = 76;
  static labelPositionY = 318;
  static movesCounterHint = 'Ходов:';
  static movesCounterHintFontSize = 48;
  static movesCounterHintPositionY = 530;
  static movesCounterFontSize = 96;
  static movesCounterPositionY = 584;
  static continueButtonPositionY = 765;
  static continueButtonWidth = 420;
  static randomLevelButtonPositionY = 853;
  static randomLevelButtonWidth = 409;
  static buttonsHeight = 74;
}

/***/ }),

/***/ "./src/modules/SceneManager.js":
/*!*************************************!*\
  !*** ./src/modules/SceneManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneManager)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");
/* harmony import */ var _OpenScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenScene */ "./src/modules/OpenScene.js");
/* harmony import */ var _CoreScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoreScene */ "./src/modules/CoreScene.js");
/* harmony import */ var _ResultScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResultScene */ "./src/modules/ResultScene.js");






class SceneManager {
	constructor({ canvas, assets, state }) {
		this._canvas = canvas;
		this._assets = assets;
		this._state = state;

		this._currentScene = null;
		this._futureScene = null;

		this._transitionOverlayOffsetX = 1;
	}

	update(time) {
		if (this._currentScene) this._currentScene.update(time);

		if (this._futureScene) this._updateSceneOut(time);
		else if (this._transitionOverlayOffsetX <= 0) this._updateSceneIn(time);
	}

	_updateSceneOut({ prevFrameDuration }) {
		if (!this._currentScene || this._transitionOverlayOffsetX === 0) {
			this._currentScene = this._futureScene;
			this._futureScene = null;
		} else  {
			this._transitionOverlayOffsetX = Math.max(this._transitionOverlayOffsetX - prevFrameDuration / SceneManager.transitionDuration, 0);
		}
	}

	_updateSceneIn({ prevFrameDuration }) {
		this._transitionOverlayOffsetX = Math.max(this._transitionOverlayOffsetX - prevFrameDuration / SceneManager.transitionDuration, -1);

		if (this._transitionOverlayOffsetX === -1) this._transitionOverlayOffsetX = 1;
	}

	render(ctx) {
		if (this._currentScene) this._currentScene.render(ctx);
		if (this._transitionOverlayOffsetX !== 1) this._renderTransitionOverlay(ctx);
	}

	_renderTransitionOverlay(ctx) {
		const overlayPositionX = this._canvas.width * this._transitionOverlayOffsetX;
		_Draw__WEBPACK_IMPORTED_MODULE_0__["default"].rect(ctx, overlayPositionX, 0, this._canvas.width, this._canvas.height, _Color__WEBPACK_IMPORTED_MODULE_1__["default"].grass.key)
	}

	_getScenesCommonProps() {
		return {
			canvas: this._canvas,
			assets: this._assets,
			state: this._state,
			sceneManager: this,
		}
	}

	_isInTransition() {
		return this._futureScene || this._transitionOverlayOffsetX !== 1;
	}

	handleClick(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleClick(event);
	}

	handleStartDragging(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleStartDragging(event);
	}

	handleMoveDragging(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleMoveDragging(event);
	}

	handleEndDragging(event) {
		if (this._isInTransition()) return;

		if (this._currentScene) this._currentScene.handleEndDragging(event);
	}

	showOpenScene() {
		this._futureScene = new _OpenScene__WEBPACK_IMPORTED_MODULE_2__["default"](this._getScenesCommonProps());
	}

	showCoreScene() {
		this._futureScene = new _CoreScene__WEBPACK_IMPORTED_MODULE_3__["default"](this._getScenesCommonProps());
	}

	showResultScene(movesCounter) {
		this._futureScene = new _ResultScene__WEBPACK_IMPORTED_MODULE_4__["default"]({ ...this._getScenesCommonProps(), movesCounter });
	}

	static transitionDuration = 300;
}

/***/ }),

/***/ "./src/modules/State.js":
/*!******************************!*\
  !*** ./src/modules/State.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _assets_json_levels_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/json/levels.json */ "./src/assets/json/levels.json");
/* harmony import */ var _Random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Random */ "./src/modules/Random.js");




class State {
	constructor({ assets }) {
		this._assets = assets;

		this._level = 1;
		this._gold = 0;
	}

	increaseLevel() {
		const nextLevel = this._level + 1;
		if (_assets_json_levels_json__WEBPACK_IMPORTED_MODULE_0__[nextLevel]) this._level = nextLevel;
		else this._level = 1;
	}

	resetLevel() {
		this._level = 1;
	}

	setRandomLevel() {
		const levelsKeys = Object.keys(_assets_json_levels_json__WEBPACK_IMPORTED_MODULE_0__);

		let level = null;

		do {
			const randomIndex = _Random__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomFromRange(0, levelsKeys.length - 1);
			level = parseInt(levelsKeys[randomIndex]);
		} while (level === this._level)
		
		this._level = level;
	}

	setLevel(level) {
		this._level = level;
	}

	getLevel() {
		return this._level;
	}
}

/***/ }),

/***/ "./src/modules/Text.js":
/*!*****************************!*\
  !*** ./src/modules/Text.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
class Text {
  static calcTextMetrics(ctx, text, fontSize) {
    ctx.font = `${fontSize}px Nunito`;
    const { width, actualBoundingBoxAscent, actualBoundingBoxDescent } = ctx.measureText(text);
    return { textWidth: width, textHeight: actualBoundingBoxAscent + actualBoundingBoxDescent }
  }
}

/***/ }),

/***/ "./src/modules/Tile.js":
/*!*****************************!*\
  !*** ./src/modules/Tile.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/modules/Draw.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ "./src/modules/Color.js");



class Tile {
  constructor({ color, position }) {
    this._color = color;
    this._position = position;
    this._opacity = 1;
  }

  render(ctx) {
    _Draw__WEBPACK_IMPORTED_MODULE_0__["default"].roundedRect(ctx, this._position.x, this._position.y, Tile.width, Tile.height, Tile.radius, this._color.key, this._opacity);
  }

  getPosition() {
    return this._position;
  }

  setPosition(position) {
    this._position = position;
  }

  getColor() {
    return this._color;
  }

  getOpacity() {
    return this._opacity;
  }

  setOpacity(opacity) {
    this._opacity = opacity;
  }

  static width = 95;
  static height = 95;
  static radius = 30;
  static colors = [
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].blueNight,
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].blue,
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].green,
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].sea,
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].red,
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].purple,
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].orange,
    _Color__WEBPACK_IMPORTED_MODULE_1__["default"].yellow,
  ];

  static getRandomBrickColor() {
    const index = Random.getRandomFromRange(0, Tile.colors.length - 1);
    return Tile.colors[index];
  }
}

/***/ }),

/***/ "./src/assets/fonts/Nunito-Black.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Nunito-Black.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Nunito-Black.woff2";

/***/ }),

/***/ "./src/assets/json/levels.json":
/*!*************************************!*\
  !*** ./src/assets/json/levels.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"1":{"map":[[3,3,3,3,3,3],[3,3,3,5,3,3],[3,3,9,5,5,3],[3,9,9,9,3,3],[3,9,9,3,3,3],[3,3,3,3,3,3]],"movesCounter":16},"2":{"map":[[3,3,3,3,3,3],[3,3,4,4,3,3],[3,4,4,4,6,3],[3,4,6,6,6,3],[3,3,6,6,3,3],[3,3,3,3,3,3]]},"3":{"map":[[3,3,3,3,3,3],[3,3,3,10,10,3],[6,3,3,10,10,3],[6,6,3,3,3,3],[6,6,6,3,3,6],[3,3,3,3,6,6]]},"4":{"map":[[3,3,3,3,3,3],[3,3,5,5,3,3],[3,7,9,5,5,3],[3,7,7,7,5,3],[3,7,7,7,3,3],[3,3,3,3,3,3]]},"5":{"map":[[3,3,5,5,3,3],[3,3,8,5,5,3],[3,8,8,8,8,3],[3,8,8,8,8,3],[3,3,8,8,3,3],[3,3,3,8,3,3]]},"6":{"map":[[3,7,7,7,3,3],[3,7,10,7,3,3],[3,7,7,7,5,3],[3,3,5,5,3,3],[3,3,3,5,3,3],[3,3,3,5,5,3]]},"7":{"map":[[3,3,3,3,3,3],[3,4,3,4,3,4],[4,3,4,3,4,3],[3,3,3,3,3,3],[3,4,3,4,3,4],[4,3,4,3,4,3]]},"8":{"map":[[4,4,4,4,4,4],[4,3,3,3,3,4],[4,3,4,4,3,4],[4,3,4,4,3,4],[4,3,3,3,3,4],[4,4,4,4,4,4]]},"9":{"map":[[6,3,6,6,3,6],[3,6,4,4,6,3],[6,4,6,6,4,6],[6,4,6,6,4,6],[3,6,4,4,6,3],[6,3,6,6,3,6]]},"10":{"map":[[3,4,3,4,3,4],[4,6,4,6,4,6],[6,3,6,3,6,3],[3,4,3,4,3,4],[4,6,4,6,4,6],[6,3,6,3,6,3]]},"11":{"map":[[10,10,10,9,9,9],[10,10,10,9,9,9],[10,10,10,9,9,9],[5,5,5,7,7,7],[5,5,5,7,7,7],[5,5,5,7,7,7]]},"12":{"map":[[7,7,9,9,7,7],[7,9,10,10,9,7],[9,10,10,10,10,9],[9,10,10,10,10,9],[7,9,10,10,9,7],[7,7,9,9,7,7]]},"13":{"map":[[4,4,6,10,9,10],[4,6,6,10,10,10],[6,6,10,10,9,5],[10,10,10,10,5,5],[10,9,10,5,5,5],[10,10,5,5,5,5]]},"14":{"map":[[6,4,4,4,4,4],[6,4,6,6,6,6],[6,4,6,4,4,6],[6,4,6,6,4,6],[6,4,4,4,4,6],[6,6,6,6,6,6]]},"15":{"map":[[3,7,9,9,7,3],[7,9,10,10,9,7],[9,10,5,5,10,9],[10,5,6,6,5,10],[5,6,4,4,6,5],[6,4,8,8,4,6]]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/index.styl */ "./src/assets/styles/index.styl");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");




addEventListener('DOMContentLoaded', () => {
	new _modules_Game__WEBPACK_IMPORTED_MODULE_1__["default"](document.getElementById('colored-tiles'));
})
})();

/******/ })()
;
//# sourceMappingURL=index.js.map