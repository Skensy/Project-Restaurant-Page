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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nconst about = document.createElement(\"p\");\r\n\r\nabout.textContent = \"Storia in preparazione\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/heading.js":
/*!************************!*\
  !*** ./src/heading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   heading: () => (/* binding */ heading)\n/* harmony export */ });\n\r\nconst heading = document.createElement(\"h1\");\r\n\r\nheading.textContent = \"Best Restaurant in the Country\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/heading.js?");

/***/ }),

/***/ "./src/image.js":
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   image: () => (/* binding */ image)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n\r\n\r\nconst image = document.createElement(\"img\");\r\nimage.src = _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\nimage.style.width = \"auto\";\r\nimage.style.height = \"200px\";\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/image.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.js */ \"./src/image.js\");\n/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading.js */ \"./src/heading.js\");\n/* harmony import */ var _paragraph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paragraph.js */ \"./src/paragraph.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst div = document.querySelector(\"#content\");\r\nconst btnMenu = document.querySelector(\"#menu\")\r\nconst btnHome = document.querySelector(\"#home\");\r\nconst btnAbout = document.querySelector(\"#about\")\r\n\r\n\r\nbtnHome.addEventListener(\"click\", () => {\r\n    if (div.contains(_about_js__WEBPACK_IMPORTED_MODULE_4__.about)) {\r\n        div.removeChild(_about_js__WEBPACK_IMPORTED_MODULE_4__.about);\r\n    }\r\n    if (div.contains(_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)) {\r\n        div.removeChild(_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu);\r\n    }\r\n    div.appendChild(_image_js__WEBPACK_IMPORTED_MODULE_0__.image);\r\n    div.appendChild(_heading_js__WEBPACK_IMPORTED_MODULE_1__.heading);\r\n    div.appendChild(_paragraph_js__WEBPACK_IMPORTED_MODULE_2__.paragraph);\r\n})\r\n\r\nbtnMenu.addEventListener(\"click\", () => {\r\n    if (div.contains(_image_js__WEBPACK_IMPORTED_MODULE_0__.image)) {\r\n        div.removeChild(_image_js__WEBPACK_IMPORTED_MODULE_0__.image);\r\n    }\r\n    if (div.contains(_heading_js__WEBPACK_IMPORTED_MODULE_1__.heading)) {\r\n        div.removeChild(_heading_js__WEBPACK_IMPORTED_MODULE_1__.heading);\r\n    }\r\n    if (div.contains(_paragraph_js__WEBPACK_IMPORTED_MODULE_2__.paragraph)) {\r\n        div.removeChild(_paragraph_js__WEBPACK_IMPORTED_MODULE_2__.paragraph);\r\n    }\r\n    if (div.contains(_about_js__WEBPACK_IMPORTED_MODULE_4__.about)) {\r\n        div.removeChild(_about_js__WEBPACK_IMPORTED_MODULE_4__.about);\r\n    }\r\n    div.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu);\r\n})\r\n\r\nbtnAbout.addEventListener(\"click\", () => {\r\n    if (div.contains(_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)) {\r\n        div.removeChild(_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu);\r\n    }\r\n    if (div.contains(_image_js__WEBPACK_IMPORTED_MODULE_0__.image)) {\r\n        div.removeChild(_image_js__WEBPACK_IMPORTED_MODULE_0__.image);\r\n    }\r\n    if (div.contains(_heading_js__WEBPACK_IMPORTED_MODULE_1__.heading)) {\r\n        div.removeChild(_heading_js__WEBPACK_IMPORTED_MODULE_1__.heading);\r\n    }\r\n    if (div.contains(_paragraph_js__WEBPACK_IMPORTED_MODULE_2__.paragraph)) {\r\n        div.removeChild(_paragraph_js__WEBPACK_IMPORTED_MODULE_2__.paragraph);\r\n    }\r\n    div.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_4__.about);\r\n})\r\n\r\ndiv.appendChild(_image_js__WEBPACK_IMPORTED_MODULE_0__.image);\r\ndiv.appendChild(_heading_js__WEBPACK_IMPORTED_MODULE_1__.heading);\r\ndiv.appendChild(_paragraph_js__WEBPACK_IMPORTED_MODULE_2__.paragraph);\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = document.createElement(\"p\")\r\n\r\nmenu.textContent = \"Menù in lavorazione\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/paragraph.js":
/*!**************************!*\
  !*** ./src/paragraph.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   paragraph: () => (/* binding */ paragraph)\n/* harmony export */ });\nconst paragraph = document.createElement(\"p\");\r\n\r\nparagraph.textContent = \"The best restaurant in the world is a subjective concept, as different people have different tastes and preferences. However, there are a few restaurants that consistently rank among the top in the world, according to various rankings and surveys. These restaurants typically offer an exceptional dining experience, with innovative cuisine, impeccable service, and a luxurious ambiance.\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/paragraph.js?");

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c07e3f7f575ebef840cd.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/restaurant.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;