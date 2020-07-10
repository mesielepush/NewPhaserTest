/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ \"./src/js/loading.js\");\n\n\nconst config = () => {\n    var config = {\n        type: Phaser.AUTO,\n        width: 800,\n        height: 600,\n        physics: {\n            default: 'arcade',\n            arcade: {\n                gravity: { y: 200 }\n            }\n        },\n        scene: [_loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]\n    };\n\n    var game = new Phaser.Game(config);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n/* this.load.setBaseURL('http://labs.phaser.io'); *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnLmpzPzE0YWMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsImxvYWRpbmciLCJtZW51IiwiZ2FtZSIsIkdhbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNQSxTQUFTLE1BQUk7QUFDZixRQUFJQSxTQUFTO0FBQ1RDLGNBQU1DLE9BQU9DLElBREo7QUFFVEMsZUFBTyxHQUZFO0FBR1RDLGdCQUFRLEdBSEM7QUFJVEMsaUJBQVM7QUFDTEMscUJBQVMsUUFESjtBQUVMQyxvQkFBUTtBQUNKQyx5QkFBUyxFQUFFQyxHQUFHLEdBQUw7QUFETDtBQUZILFNBSkE7QUFVVEMsZUFBTyxDQUFDQyxnREFBRCxFQUFVQyw2Q0FBVjtBQVZFLEtBQWI7O0FBYUEsUUFBSUMsT0FBTyxJQUFJWixPQUFPYSxJQUFYLENBQWdCZixNQUFoQixDQUFYO0FBSUgsQ0FsQkQ7O0FBb0JlQSxxRUFBZjtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBsb2FkaW5nIGZyb20gJy4vbG9hZGluZyc7XHJcbmNvbnN0IGNvbmZpZyA9ICgpPT57XHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgcGh5c2ljczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5OiB7IHk6IDIwMCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjZW5lOiBbbG9hZGluZywgbWVudV1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn07IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXHJcbi8qIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdodHRwOi8vbGFicy5waGFzZXIuaW8nKTsgKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/config.js\n");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\n    scenes: {\n        menu: 'menu'\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzPzU5ZjkiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwic2NlbmVzIiwibWVudSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxZQUFZO0FBQ2RDLFlBQU87QUFDSEMsY0FBSztBQURGO0FBRE8sQ0FBbEI7QUFLZUYsd0VBQWYiLCJmaWxlIjoiLi9zcmMvanMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uc3RhbnRzID0ge1xyXG4gICAgc2NlbmVzOntcclxuICAgICAgICBtZW51OidtZW51J1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/constants.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\nObject(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJjb25maWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBQSx1REFBTUEiLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG5jb25maWcoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/loading.js":
/*!***************************!*\
  !*** ./src/js/loading.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\nclass loading extends Phaser.Scene {\n    constructor() {\n        super({ key: \"loading\" });\n    }\n    preload() {\n\n        this.load.image('logo', \"../src/images/logo.png\");\n    }\n    create() {\n        this.scene.start(_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scenes.menu, 'Hellow from the loade scene');\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9hZGluZy5qcz8yZmYyIl0sIm5hbWVzIjpbImxvYWRpbmciLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImxvYWQiLCJpbWFnZSIsImNyZWF0ZSIsInNjZW5lIiwic3RhcnQiLCJjb25zdGFudHMiLCJzY2VuZXMiLCJtZW51Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNQSxPQUFOLFNBQXNCQyxPQUFPQyxLQUE3QixDQUFtQztBQUMvQkMsa0JBQWE7QUFDVCxjQUFNLEVBQUNDLEtBQUksU0FBTCxFQUFOO0FBQ0g7QUFDREMsY0FBUzs7QUFFTCxhQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBdUIsd0JBQXZCO0FBR0g7QUFDREMsYUFBUTtBQUNKLGFBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsa0RBQVNBLENBQUNDLE1BQVYsQ0FBaUJDLElBQWxDLEVBQXVDLDZCQUF2QztBQUVIOztBQWI4QjtBQWdCcEJiLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL2xvYWRpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJ1xyXG5jbGFzcyBsb2FkaW5nIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoe2tleTpcImxvYWRpbmdcIn0pO1xyXG4gICAgfVxyXG4gICAgcHJlbG9hZCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnbG9nbycsXCIuLi9zcmMvaW1hZ2VzL2xvZ28ucG5nXCIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KGNvbnN0YW50cy5zY2VuZXMubWVudSwnSGVsbG93IGZyb20gdGhlIGxvYWRlIHNjZW5lJylcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/loading.js\n");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass menu extends Phaser.Scene {\n\n    constructor() {\n        super({ key: 'menu' });\n    }\n    preload() {\n        this.load.setBaseURL('http://labs.phaser.io');\n        this.load.image('sky', 'assets/skies/sky1.png');\n        this.load.image('ground', 'assets/platform.png');\n        this.load.image('star', 'assets/particles/sparkle1.png');\n        this.load.image('bomb', 'assets/bomb.png');\n        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });\n    }\n    create() {\n        this.add.image(400, 300, 'sky');\n        this.add.image(400, 300, 'star');\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcz81YzdmIl0sIm5hbWVzIjpbIm1lbnUiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImxvYWQiLCJzZXRCYXNlVVJMIiwiaW1hZ2UiLCJzcHJpdGVzaGVldCIsImZyYW1lV2lkdGgiLCJmcmFtZUhlaWdodCIsImNyZWF0ZSIsImFkZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFOLFNBQW1CQyxPQUFPQyxLQUExQixDQUErQjs7QUFFM0JDLGtCQUFhO0FBQ1QsY0FBTSxFQUFDQyxLQUFJLE1BQUwsRUFBTjtBQUNIO0FBQ0RDLGNBQVU7QUFDTixhQUFLQyxJQUFMLENBQVVDLFVBQVYsQ0FBcUIsdUJBQXJCO0FBQ0EsYUFBS0QsSUFBTCxDQUFVRSxLQUFWLENBQWdCLEtBQWhCLEVBQXVCLHVCQUF2QjtBQUNBLGFBQUtGLElBQUwsQ0FBVUUsS0FBVixDQUFnQixRQUFoQixFQUEwQixxQkFBMUI7QUFDQSxhQUFLRixJQUFMLENBQVVFLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsK0JBQXhCO0FBQ0EsYUFBS0YsSUFBTCxDQUFVRSxLQUFWLENBQWdCLE1BQWhCLEVBQXdCLGlCQUF4QjtBQUNBLGFBQUtGLElBQUwsQ0FBVUcsV0FBVixDQUFzQixNQUF0QixFQUNJLGlCQURKLEVBRUksRUFBRUMsWUFBWSxFQUFkLEVBQWtCQyxhQUFhLEVBQS9CLEVBRko7QUFJSDtBQUNEQyxhQUFTO0FBQ0wsYUFBS0MsR0FBTCxDQUFTTCxLQUFULENBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixLQUF6QjtBQUNBLGFBQUtLLEdBQUwsQ0FBU0wsS0FBVCxDQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsTUFBekI7QUFDSDs7QUFuQjBCO0FBdUJoQlIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIG1lbnUgZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OidtZW51J30pXHJcbiAgICB9XHJcbiAgICBwcmVsb2FkICgpe1xyXG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdodHRwOi8vbGFicy5waGFzZXIuaW8nKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3NreScsICdhc3NldHMvc2tpZXMvc2t5MS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dyb3VuZCcsICdhc3NldHMvcGxhdGZvcm0ucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdzdGFyJywgJ2Fzc2V0cy9wYXJ0aWNsZXMvc3BhcmtsZTEucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdib21iJywgJ2Fzc2V0cy9ib21iLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZHVkZScsIFxyXG4gICAgICAgICAgICAnYXNzZXRzL2R1ZGUucG5nJyxcclxuICAgICAgICAgICAgeyBmcmFtZVdpZHRoOiAzMiwgZnJhbWVIZWlnaHQ6IDQ4IH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlICgpe1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKDQwMCwgMzAwLCAnc2t5Jyk7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoNDAwLCAzMDAsICdzdGFyJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/menu.js\n");

/***/ })

/******/ });