/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: Arial, sans-serif;\\n}\\n\\n.container {\\n  max-width: 1200px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n}\\n\\nheader {\\n  background-color: #f2f2f2;\\n  padding: 20px 80px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.logo {\\n  height: 50px;\\n  width: auto;\\n  margin-right: 10px;\\n}\\n\\nnav ul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\nnav li {\\n  margin: 0 10px;\\n}\\n\\nnav a {\\n  color: #333;\\n  text-decoration: none;\\n}\\n\\nnav a:hover {\\n  text-decoration: underline;\\n}\\n\\n.column {\\n  margin-top: 10px;\\n  width: 33.33%;\\n  float: left;\\n  box-sizing: border-box;\\n}\\n\\n.pokemon-row {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.pokemon-card {\\n  width: 100%;\\n  max-width: 400px;\\n  background-color: #fff;\\n  border-radius: 10px;\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\\n  margin: 0 auto;\\n  margin-bottom: 20px;\\n}\\n\\n.pokemon-card img {\\n  display: block;\\n  max-width: 80%;\\n  height: 200px;\\n  object-fit: contain;\\n  margin: 0 auto;\\n}\\n\\n.pokemon-card h2 {\\n  text-align: center;\\n  margin-top: 10px;\\n  margin-bottom: 0;\\n  text-transform: capitalize;\\n}\\n\\n.pokemon-card .pokemon-actions {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 10px;\\n  background-color: #f5f5f5;\\n  border-radius: 0 0 10px 10px;\\n}\\n\\n.pokemon-card .pokemon-actions i {\\n  font-size: 24px;\\n  color: #ff4d4d;\\n}\\n\\n.pokemon-card .comment-button {\\n  padding: 5px 10px;\\n  font-size: 14px;\\n  background-color: #ff4d4d;\\n  color: #fff;\\n  border: none;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n\\n.pokemon-card .comment-button:hover {\\n  background-color: #f33;\\n}\\n\\nfooter {\\n  margin-left: 45px;\\n  margin-top: 40px;\\n}\\n\\n.popup-container {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.8);\\n  backdrop-filter: blur(5px);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.popup-content {\\n  position: relative;\\n  background-color: #fff;\\n  width: 600px;\\n  max-width: 90%;\\n  padding: 20px;\\n  border-radius: 5px;\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\\n  overflow-y: auto;\\n  max-height: calc(100vh - 100px);\\n}\\n\\n.close-icon {\\n  position: absolute;\\n  top: 10px;\\n  right: 10px;\\n  font-size: 24px;\\n  cursor: pointer;\\n  color: #f33;\\n}\\n\\n.popup-content img {\\n  display: block;\\n  margin: 0 auto 10px;\\n  width: 300px;\\n  max-width: 100%;\\n}\\n\\n.popup-content h3 {\\n  text-align: center;\\n  margin-top: 0;\\n  margin-bottom: 10px;\\n  font-size: 24px;\\n  text-transform: capitalize;\\n}\\n\\n.popup-content ul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n\\n.popup-content ul li {\\n  margin-bottom: 10px;\\n  width: calc(50% - 10px);\\n}\\n\\n.popup-content ul li:first-child {\\n  text-transform: capitalize;\\n}\\n\\n.popup-content form {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.popup-content label {\\n  margin-bottom: 10px;\\n}\\n\\n.popup-content input {\\n  margin-bottom: 10px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n}\\n\\n.popup-content button[type='submit'] {\\n  background-color: #f33;\\n  color: #fff;\\n  padding: 10px 20px;\\n  border-radius: 5px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.popup-content button[type='submit']:hover {\\n  background-color: #d62c2c;\\n}\\n\\n.comment-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-around;\\n  margin-bottom: 10px;\\n}\\n\\n.previous-comments {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  margin-top: 20px;\\n}\\n\\n.previous-comments p {\\n  margin: 5px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  font-size: 16px;\\n  text-align: center;\\n  user-select: all;\\n}\\n\\n.user-name {\\n  font-weight: bold;\\n}\\n\\n.user-comment {\\n  flex: 1;\\n  background-color: #f2f2f2;\\n}\\n\\n.popup-content .form {\\n  margin-top: 20px;\\n}\\n\\n.vertical-line {\\n  margin: 10px 0;\\n  border-top: 3px solid #d62c2c;\\n  width: 30px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst pokemonData = [\n  {\n    name: 'pikachu',\n    image:\n      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png',\n    likes: '',\n  },\n  {\n    name: 'charmander',\n    image:\n      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png',\n    likes: '',\n  },\n  {\n    name: 'mewtwo',\n    image:\n      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/150.png',\n    likes: '',\n  },\n  {\n    name: 'squirtle',\n    image:\n      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png',\n    likes: '',\n  },\n  {\n    name: 'bulbasaur',\n    image:\n      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',\n    likes: '',\n  },\n  {\n    name: 'charizard',\n    image:\n      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png',\n    likes: '',\n  },\n];\n\nconst pokemonListContainer = document.querySelector('.pokemon-list');\n\nconst rowsContainer = document.createElement('div');\nrowsContainer.classList.add('rows-container');\n\npokemonData.forEach((pokemon, index) => {\n  const column = document.createElement('div');\n  column.classList.add('column');\n\n  const pokemonCard = document.createElement('div');\n  pokemonCard.classList.add('pokemon-card');\n\n  const image = document.createElement('img');\n  image.src = pokemon.image;\n\n  const name = document.createElement('h2');\n  name.textContent = pokemon.name;\n\n  const actions = document.createElement('div');\n  actions.classList.add('pokemon-actions');\n\n  const heartIcon = document.createElement('i');\n  heartIcon.classList.add('far', 'fa-heart');\n\n  const commentButton = document.createElement('button');\n  commentButton.classList.add('comment-button');\n  commentButton.textContent = 'Add Comment';\n\n  // Popup window\n  commentButton.addEventListener('click', async () => {\n    const response = await fetch(\n      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`\n    );\n    const data = await response.json();\n\n    const popupContainer = document.createElement('div');\n    popupContainer.classList.add('popup-container');\n\n    const popupContent = document.createElement('div');\n    popupContent.classList.add('popup-content');\n\n    const closeIcon = document.createElement('i');\n    closeIcon.classList.add('fas', 'fa-times', 'close-icon');\n\n    closeIcon.addEventListener('click', () => {\n      popupContainer.remove();\n    });\n\n    const image = document.createElement('img');\n    image.src = data.sprites.other['official-artwork'].front_default;\n\n    const name = document.createElement('h3');\n    name.textContent = pokemon.name;\n\n    const description = document.createElement('ul');\n\n    const species = document.createElement('li');\n    species.textContent = `Species: ${data.species.name}`;\n\n    const height = document.createElement('li');\n    height.textContent = `Height: ${data.height} decimetres`;\n\n    const weight = document.createElement('li');\n    weight.textContent = `Weight: ${data.weight} hectograms`;\n\n    const abilities = document.createElement('li');\n    abilities.textContent = `Abilities: ${data.abilities\n      .map((a) => a.ability.name)\n      .join(', ')}`;\n\n    description.append(species, height, weight, abilities);\n\n    // Comment Section\n    const previousComments = document.createElement('div');\n    previousComments.classList.add('previous-comments');\n    const previousCommentsTitle = document.createElement('h3');\n    previousCommentsTitle.textContent = 'Previous Comments!';\n    previousComments.append(previousCommentsTitle);\n\n    // Display previous comments from API\n\n    function fetchAndDisplayComments() {\n      fetch(\n        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UxVZnVqZUpR0G6vqpeQm/comments?item_id=${pokemon.name}`\n      )\n        .then((response) => response.json())\n        .then((data) => {\n          const commentContainer = document.createElement('div');\n          commentContainer.classList.add('comment-container');\n\n          data.forEach((comment) => {\n            const userName = document.createElement('p');\n            userName.textContent = comment.username;\n            userName.classList.add('user-name');\n\n            const verticalLine = document.createElement('div');\n            verticalLine.classList.add('vertical-line');\n\n            const userComment = document.createElement('p');\n            userComment.textContent = comment.comment;\n            userComment.classList.add('user-comment');\n\n            commentContainer.append(userName, verticalLine, userComment);\n          });\n\n          previousComments.append(commentContainer);\n        })\n        .catch((error) => {\n          console.error(error);\n        });\n    }\n\n    fetchAndDisplayComments();\n\n    //  Add comments to API\n    function addComment(username, commentText) {\n      const comment = {\n        item_id: `${pokemon.name}`,\n        username: username,\n        comment: commentText,\n      };\n      fetch(\n        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UxVZnVqZUpR0G6vqpeQm/comments`,\n        {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify(comment),\n        }\n      );\n    }\n\n    const form = document.createElement('form');\n    const commentTitle = document.createElement('h3');\n    commentTitle.textContent = 'Drop your comment!';\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.placeholder = 'Name';\n\n    const commentInput = document.createElement('input');\n    commentInput.type = 'text';\n    commentInput.placeholder = 'Comment';\n\n    const submitButton = document.createElement('button');\n    submitButton.type = 'submit';\n    submitButton.textContent = 'Submit';\n\n    form.append(commentTitle, nameInput, commentInput, submitButton);\n\n    popupContent.append(\n      closeIcon,\n      image,\n      name,\n      description,\n      previousComments,\n      form\n    );\n\n    popupContainer.append(popupContent);\n    pokemonListContainer.append(popupContainer);\n  });\n\n  //   Addi likes to API\n  const fetchAndUpdateLikes = (pokemon) => {\n    fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tVqztXshPZbS48Z4myPF/likes?item_id=${pokemon.name}`\n    )\n      .then((response) => response.json())\n      .then((data) => {\n        pokemon.likes = data[index].likes;\n        likes.textContent = `${pokemon.likes} likes`;\n      })\n      .catch((error) => console.error(error));\n  };\n  fetchAndUpdateLikes(pokemon);\n\n  heartIcon.addEventListener('click', () => {\n    fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tVqztXshPZbS48Z4myPF/likes`,\n      {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ item_id: pokemon.name }),\n      }\n    );\n    fetchAndUpdateLikes(pokemon);\n  });\n\n  const likes = document.createElement('span');\n  likes.textContent = `${pokemon.likes} likes`;\n\n  actions.append(heartIcon, likes, commentButton);\n  pokemonCard.append(image, name, actions);\n  column.append(pokemonCard);\n\n  rowsContainer.append(column);\n});\n\nlet itemCount = 0;\npokemonData.forEach((pokemon, index) => {\n  itemCount++;\n});\nconsole.log(itemCount);\nconst counter = document.createElement('div');\ncounter.classList.add('counter');\n\nconst itemcounter = document.createElement('h4');\ncounter.classList.add('item-counter');\nitemcounter.textContent = 'Poké Count: ' + itemCount;\n\ncounter.appendChild(itemcounter);\n\npokemonListContainer.append(counter, rowsContainer);\n\n\n//# sourceURL=webpack://webpack/./src/script.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;