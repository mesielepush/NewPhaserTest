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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuScene1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuScene1 */ \"./src/js/menuScene1.js\");\n/* harmony import */ var _menuScene0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuScene0 */ \"./src/js/menuScene0.js\");\n/* harmony import */ var _menuScene2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuScene2 */ \"./src/js/menuScene2.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/js/loading.js\");\n\n\n\n\n\nconst config = () => {\n    var config = {\n        type: Phaser.AUTO,\n        width: 920,\n        height: 600,\n        physics: {\n            default: 'arcade',\n            arcade: {\n                gravity: { y: 200 }\n            }\n        },\n        scene: [_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _menuScene0__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _menuScene1__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _menuScene2__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\n    };\n\n    var game = new Phaser.Game(config);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n/* this.load.setBaseURL('http://labs.phaser.io'); *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnLmpzPzE0YWMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsImxvYWRpbmciLCJtZW51U2NlbmUwIiwibWVudVNjZW5lMSIsIm1lbnVTY2VuZTIiLCJnYW1lIiwiR2FtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsTUFBSTtBQUNmLFFBQUlBLFNBQVM7QUFDVEMsY0FBTUMsT0FBT0MsSUFESjtBQUVUQyxlQUFPLEdBRkU7QUFHVEMsZ0JBQVEsR0FIQztBQUlUQyxpQkFBUztBQUNMQyxxQkFBUyxRQURKO0FBRUxDLG9CQUFRO0FBQ0pDLHlCQUFTLEVBQUVDLEdBQUcsR0FBTDtBQURMO0FBRkgsU0FKQTtBQVVUQyxlQUFPLENBQUNDLGdEQUFELEVBQVVDLG1EQUFWLEVBQXFCQyxtREFBckIsRUFBZ0NDLG1EQUFoQztBQVZFLEtBQWI7O0FBYUEsUUFBSUMsT0FBTyxJQUFJZCxPQUFPZSxJQUFYLENBQWdCakIsTUFBaEIsQ0FBWDtBQUlILENBbEJEOztBQW9CZUEscUVBQWY7QUFDQSIsImZpbGUiOiIuL3NyYy9qcy9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVudVNjZW5lMSBmcm9tICcuL21lbnVTY2VuZTEnO1xyXG5pbXBvcnQgbWVudVNjZW5lMCBmcm9tICcuL21lbnVTY2VuZTAnO1xyXG5pbXBvcnQgbWVudVNjZW5lMiBmcm9tICcuL21lbnVTY2VuZTInO1xyXG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xyXG5cclxuY29uc3QgY29uZmlnID0gKCk9PntcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgd2lkdGg6IDkyMCxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMjAwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NlbmU6IFtsb2FkaW5nLCBtZW51U2NlbmUwLG1lbnVTY2VuZTEsbWVudVNjZW5lMl1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn07IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXHJcbi8qIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdodHRwOi8vbGFicy5waGFzZXIuaW8nKTsgKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/config.js\n");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\n    scenes: {\n        menu0: 'menu0'\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzPzU5ZjkiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwic2NlbmVzIiwibWVudTAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsWUFBWTtBQUNkQyxZQUFPO0FBQ0hDLGVBQU07QUFESDtBQURPLENBQWxCO0FBS2VGLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnN0YW50cyA9IHtcclxuICAgIHNjZW5lczp7XHJcbiAgICAgICAgbWVudTA6J21lbnUwJ1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/constants.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\nclass loading extends Phaser.Scene {\n    constructor() {\n        super({ key: \"loading\" });\n    }\n    preload() {\n        let loadingBar = this.add.graphics({\n            fillStyle: {\n                color: 0xffffff\n            }\n        });\n\n        this.load.image('passage', \"../src/images/passage.png\");\n        this.load.image('block', \"../src/images/blocks.png\");\n        this.load.image('bg3', \"../src/images/menu3.png\");\n\n        this.load.spritesheet('house', \"../src/images/sprites/houseSprites.png\", {\n            frameHeight: 510,\n            frameWidth: 511.5\n        });\n        this.load.spritesheet('hero', \"../src/images/sprites/generichero.png\", {\n            frameHeight: 590,\n            frameWidth: 450\n        });\n        this.load.spritesheet('city', \"../src/images/sprites/citys.png\", {\n            frameHeight: 600,\n            frameWidth: 920\n        });\n        this.load.spritesheet('countryhouse', \"../src/images/sprites/menuScene0.png\", {\n            frameHeight: 326,\n            frameWidth: 540\n        });\n        this.load.spritesheet('second', \"../src/images/sprites/second.png\", {\n            frameHeight: 108,\n            frameWidth: 109\n        });\n\n        this.load.on('progress', percent => {\n            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);\n        });\n    }\n    create() {\n        this.scene.start('menu2', 'Hellow from the loade scene');\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9hZGluZy5qcz8yZmYyIl0sIm5hbWVzIjpbImxvYWRpbmciLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImxvYWRpbmdCYXIiLCJhZGQiLCJncmFwaGljcyIsImZpbGxTdHlsZSIsImNvbG9yIiwibG9hZCIsImltYWdlIiwic3ByaXRlc2hlZXQiLCJmcmFtZUhlaWdodCIsImZyYW1lV2lkdGgiLCJvbiIsInBlcmNlbnQiLCJmaWxsUmVjdCIsImdhbWUiLCJyZW5kZXJlciIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlIiwic2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTUEsT0FBTixTQUFzQkMsT0FBT0MsS0FBN0IsQ0FBbUM7QUFDL0JDLGtCQUFhO0FBQ1QsY0FBTSxFQUFDQyxLQUFJLFNBQUwsRUFBTjtBQUNIO0FBQ0RDLGNBQVM7QUFDTCxZQUFJQyxhQUFhLEtBQUtDLEdBQUwsQ0FBU0MsUUFBVCxDQUFrQjtBQUMvQkMsdUJBQVU7QUFDTkMsdUJBQU87QUFERDtBQURxQixTQUFsQixDQUFqQjs7QUFPQSxhQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsU0FBaEIsRUFBMEIsMkJBQTFCO0FBQ0EsYUFBS0QsSUFBTCxDQUFVQyxLQUFWLENBQWdCLE9BQWhCLEVBQXdCLDBCQUF4QjtBQUNBLGFBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQixLQUFoQixFQUFzQix5QkFBdEI7O0FBTUEsYUFBS0QsSUFBTCxDQUFVRSxXQUFWLENBQXNCLE9BQXRCLEVBQStCLHdDQUEvQixFQUF3RTtBQUNwRUMseUJBQVksR0FEd0Q7QUFFcEVDLHdCQUFXO0FBRnlELFNBQXhFO0FBSUEsYUFBS0osSUFBTCxDQUFVRSxXQUFWLENBQXNCLE1BQXRCLEVBQThCLHVDQUE5QixFQUFzRTtBQUNsRUMseUJBQVksR0FEc0Q7QUFFbEVDLHdCQUFXO0FBRnVELFNBQXRFO0FBSUEsYUFBS0osSUFBTCxDQUFVRSxXQUFWLENBQXNCLE1BQXRCLEVBQThCLGlDQUE5QixFQUFnRTtBQUM1REMseUJBQVksR0FEZ0Q7QUFFNURDLHdCQUFXO0FBRmlELFNBQWhFO0FBSUEsYUFBS0osSUFBTCxDQUFVRSxXQUFWLENBQXNCLGNBQXRCLEVBQXNDLHNDQUF0QyxFQUE2RTtBQUN6RUMseUJBQVksR0FENkQ7QUFFekVDLHdCQUFXO0FBRjhELFNBQTdFO0FBSUEsYUFBS0osSUFBTCxDQUFVRSxXQUFWLENBQXNCLFFBQXRCLEVBQWdDLGtDQUFoQyxFQUFtRTtBQUMvREMseUJBQVksR0FEbUQ7QUFFL0RDLHdCQUFXO0FBRm9ELFNBQW5FOztBQU9BLGFBQUtKLElBQUwsQ0FBVUssRUFBVixDQUFhLFVBQWIsRUFBMEJDLE9BQUQsSUFBWTtBQUNqQ1gsdUJBQVdZLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBc0IsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxNQUFuQixHQUE0QixDQUFsRCxFQUFvRCxLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLEtBQW5CLEdBQTJCTCxPQUEvRSxFQUF3RixFQUF4RjtBQUNILFNBRkQ7QUFJSDtBQUNETSxhQUFRO0FBQ0osYUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCLE9BQWpCLEVBQXlCLDZCQUF6QjtBQUVIOztBQW5EOEI7QUFzRHBCekIsc0VBQWYiLCJmaWxlIjoiLi9zcmMvanMvbG9hZGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXHJcbmNsYXNzIGxvYWRpbmcgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OlwibG9hZGluZ1wifSk7XHJcbiAgICB9XHJcbiAgICBwcmVsb2FkKCl7XHJcbiAgICAgICAgbGV0IGxvYWRpbmdCYXIgPSB0aGlzLmFkZC5ncmFwaGljcyh7XHJcbiAgICAgICAgICAgIGZpbGxTdHlsZTp7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogMHhmZmZmZmZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Bhc3NhZ2UnLFwiLi4vc3JjL2ltYWdlcy9wYXNzYWdlLnBuZ1wiKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Jsb2NrJyxcIi4uL3NyYy9pbWFnZXMvYmxvY2tzLnBuZ1wiKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JnMycsXCIuLi9zcmMvaW1hZ2VzL21lbnUzLnBuZ1wiKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2hvdXNlJywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvaG91c2VTcHJpdGVzLnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6NTEwLFxyXG4gICAgICAgICAgICBmcmFtZVdpZHRoOjUxMS41XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdoZXJvJywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvZ2VuZXJpY2hlcm8ucG5nXCIse1xyXG4gICAgICAgICAgICBmcmFtZUhlaWdodDo1OTAsXHJcbiAgICAgICAgICAgIGZyYW1lV2lkdGg6NDUwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdjaXR5JywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvY2l0eXMucG5nXCIse1xyXG4gICAgICAgICAgICBmcmFtZUhlaWdodDo2MDAsXHJcbiAgICAgICAgICAgIGZyYW1lV2lkdGg6OTIwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdjb3VudHJ5aG91c2UnLCBcIi4uL3NyYy9pbWFnZXMvc3ByaXRlcy9tZW51U2NlbmUwLnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6MzI2LFxyXG4gICAgICAgICAgICBmcmFtZVdpZHRoOjU0MFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc2Vjb25kJywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvc2Vjb25kLnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6MTA4LFxyXG4gICAgICAgICAgICBmcmFtZVdpZHRoOjEwOVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsIChwZXJjZW50KSA9PntcclxuICAgICAgICAgICAgbG9hZGluZ0Jhci5maWxsUmVjdCgwLHRoaXMuZ2FtZS5yZW5kZXJlci5oZWlnaHQgLyAyLHRoaXMuZ2FtZS5yZW5kZXJlci53aWR0aCAqIHBlcmNlbnQsIDUwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnbWVudTInLCdIZWxsb3cgZnJvbSB0aGUgbG9hZGUgc2NlbmUnKVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/loading.js\n");

/***/ }),

/***/ "./src/js/menuScene0.js":
/*!******************************!*\
  !*** ./src/js/menuScene0.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass menuScene0 extends Phaser.Scene {\n\n    constructor() {\n        super({ key: 'menu0' });\n    }\n    preload() {\n        this.anims.create({\n            key: \"country\",\n            frameRate: 24,\n            frames: this.anims.generateFrameNumbers(\"countryhouse\", {\n                start: 0,\n                end: 79\n            })\n        });\n\n        this.anims.create({\n            key: \"right\",\n            frameRate: 8,\n            frames: this.anims.generateFrameNumbers(\"hero\", {\n                start: 4,\n                end: 7\n            }),\n            repeat: 0\n        });\n    }\n    create() {\n        this.bg = this.add.sprite(460, 300, \"countryhouse\", 0).setDepth(0).setScale(1.7);\n        this.hero = this.add.sprite(100, 380, \"hero\", 5).setDepth(3).setScale(0.2);\n    }\n    update() {\n        this.bg.play('country', true);\n        this.hero.play('right', true);\n        this.hero.x += 2;\n        if (this.hero.x >= 1100) {\n            this.scene.start('menu', 'Hellow from the loade scene');\n        }\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuScene0);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudVNjZW5lMC5qcz83Mjc1Il0sIm5hbWVzIjpbIm1lbnVTY2VuZTAiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImFuaW1zIiwiY3JlYXRlIiwiZnJhbWVSYXRlIiwiZnJhbWVzIiwiZ2VuZXJhdGVGcmFtZU51bWJlcnMiLCJzdGFydCIsImVuZCIsInJlcGVhdCIsImJnIiwiYWRkIiwic3ByaXRlIiwic2V0RGVwdGgiLCJzZXRTY2FsZSIsImhlcm8iLCJ1cGRhdGUiLCJwbGF5IiwieCIsInNjZW5lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFVBQU4sU0FBeUJDLE9BQU9DLEtBQWhDLENBQXFDOztBQUVqQ0Msa0JBQWE7QUFDVCxjQUFNLEVBQUNDLEtBQUksT0FBTCxFQUFOO0FBQ0g7QUFDREMsY0FBVTtBQUNOLGFBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQjtBQUNkSCxpQkFBSyxTQURTO0FBRWRJLHVCQUFXLEVBRkc7QUFHZEMsb0JBQVEsS0FBS0gsS0FBTCxDQUFXSSxvQkFBWCxDQUFnQyxjQUFoQyxFQUFnRDtBQUNwREMsdUJBQU8sQ0FENkM7QUFFcERDLHFCQUFLO0FBRitDLGFBQWhEO0FBSE0sU0FBbEI7O0FBU0EsYUFBS04sS0FBTCxDQUFXQyxNQUFYLENBQWtCO0FBQ2RILGlCQUFLLE9BRFM7QUFFZEksdUJBQVcsQ0FGRztBQUdkQyxvQkFBUSxLQUFLSCxLQUFMLENBQVdJLG9CQUFYLENBQWdDLE1BQWhDLEVBQXdDO0FBQzVDQyx1QkFBTyxDQURxQztBQUU1Q0MscUJBQUs7QUFGdUMsYUFBeEMsQ0FITTtBQU9kQyxvQkFBTztBQVBPLFNBQWxCO0FBVUg7QUFDRE4sYUFBUztBQUNMLGFBQUtPLEVBQUwsR0FBVSxLQUFLQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsRUFBd0IsY0FBeEIsRUFBdUMsQ0FBdkMsRUFBMENDLFFBQTFDLENBQW1ELENBQW5ELEVBQXNEQyxRQUF0RCxDQUErRCxHQUEvRCxDQUFWO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLEtBQUtKLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixNQUF4QixFQUErQixDQUEvQixFQUFrQ0MsUUFBbEMsQ0FBMkMsQ0FBM0MsRUFBOENDLFFBQTlDLENBQXVELEdBQXZELENBQVo7QUFFSDtBQUNERSxhQUFRO0FBQ0osYUFBS04sRUFBTCxDQUFRTyxJQUFSLENBQWEsU0FBYixFQUF1QixJQUF2QjtBQUNBLGFBQUtGLElBQUwsQ0FBVUUsSUFBVixDQUFlLE9BQWYsRUFBdUIsSUFBdkI7QUFDQSxhQUFLRixJQUFMLENBQVVHLENBQVYsSUFBYSxDQUFiO0FBQ0EsWUFBSSxLQUFLSCxJQUFMLENBQVVHLENBQVYsSUFBZSxJQUFuQixFQUF3QjtBQUNwQixpQkFBS0MsS0FBTCxDQUFXWixLQUFYLENBQWlCLE1BQWpCLEVBQXdCLDZCQUF4QjtBQUVIO0FBQ0o7O0FBdkNnQztBQTBDdEJYLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL21lbnVTY2VuZTAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBtZW51U2NlbmUwIGV4dGVuZHMgUGhhc2VyLlNjZW5le1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoe2tleTonbWVudTAnfSlcclxuICAgIH1cclxuICAgIHByZWxvYWQgKCl7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IFwiY291bnRyeVwiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDI0LFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJjb3VudHJ5aG91c2VcIiwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDc5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiA4LFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJoZXJvXCIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiA0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiA3XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6MFxyXG4gICAgICAgIH0pOyBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgY3JlYXRlICgpe1xyXG4gICAgICAgIHRoaXMuYmcgPSB0aGlzLmFkZC5zcHJpdGUoNDYwLDMwMCxcImNvdW50cnlob3VzZVwiLDApLnNldERlcHRoKDApLnNldFNjYWxlKDEuNyk7XHJcbiAgICAgICAgdGhpcy5oZXJvID0gdGhpcy5hZGQuc3ByaXRlKDEwMCwzODAsXCJoZXJvXCIsNSkuc2V0RGVwdGgoMykuc2V0U2NhbGUoMC4yKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuYmcucGxheSgnY291bnRyeScsdHJ1ZSlcclxuICAgICAgICB0aGlzLmhlcm8ucGxheSgncmlnaHQnLHRydWUpXHJcbiAgICAgICAgdGhpcy5oZXJvLngrPTJcclxuICAgICAgICBpZiAodGhpcy5oZXJvLnggPj0gMTEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ21lbnUnLCdIZWxsb3cgZnJvbSB0aGUgbG9hZGUgc2NlbmUnKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZW51U2NlbmUwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/menuScene0.js\n");

/***/ }),

/***/ "./src/js/menuScene1.js":
/*!******************************!*\
  !*** ./src/js/menuScene1.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass menuScene1 extends Phaser.Scene {\n\n    constructor() {\n        super({ key: 'menu' });\n    }\n    preload() {\n        this.anims.create({\n            key: \"houseColors\",\n            frameRate: 3,\n            frames: this.anims.generateFrameNumbers(\"house\", {\n                start: 0,\n                end: 10\n            })\n        });\n        this.anims.create({\n            key: \"citiesColors\",\n            frameRate: 10,\n            frames: this.anims.generateFrameNumbers(\"city\", {\n                start: 0,\n                end: 6\n            }),\n            repeat: 0\n        });\n        this.anims.create({\n            key: \"right\",\n            frameRate: 8,\n            frames: this.anims.generateFrameNumbers(\"hero\", {\n                start: 4,\n                end: 7\n            }),\n            repeat: 0\n        });\n    }\n    create() {\n        this.city = this.add.sprite(555, 350, \"city\", 0).setDepth(0);\n        this.house = this.add.sprite(700, 350, \"house\", 0).setDepth(1);\n        this.blocks = this.add.sprite(476, 490, \"block\", 0).setDepth(2);\n        this.hero = this.add.sprite(100, 525, \"hero\", 5).setDepth(3).setScale(0.14);\n        this.passsage = this.add.sprite(500, 300, \"passage\", 0).setDepth(4);\n    }\n    update() {\n        this.city.play('citiesColors', true);\n        this.house.play('houseColors', true);\n        this.hero.play('right', true);\n        this.hero.x += 2;\n        if (this.hero.x >= 1100) {\n            this.scene.start('menu2', 'Hellow from the loade scene');\n        }\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuScene1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudVNjZW5lMS5qcz80ZGUyIl0sIm5hbWVzIjpbIm1lbnVTY2VuZTEiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImFuaW1zIiwiY3JlYXRlIiwiZnJhbWVSYXRlIiwiZnJhbWVzIiwiZ2VuZXJhdGVGcmFtZU51bWJlcnMiLCJzdGFydCIsImVuZCIsInJlcGVhdCIsImNpdHkiLCJhZGQiLCJzcHJpdGUiLCJzZXREZXB0aCIsImhvdXNlIiwiYmxvY2tzIiwiaGVybyIsInNldFNjYWxlIiwicGFzc3NhZ2UiLCJ1cGRhdGUiLCJwbGF5IiwieCIsInNjZW5lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFVBQU4sU0FBeUJDLE9BQU9DLEtBQWhDLENBQXFDOztBQUVqQ0Msa0JBQWE7QUFDVCxjQUFNLEVBQUNDLEtBQUksTUFBTCxFQUFOO0FBQ0g7QUFDREMsY0FBVTtBQUNOLGFBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQjtBQUNkSCxpQkFBSyxhQURTO0FBRWRJLHVCQUFXLENBRkc7QUFHZEMsb0JBQVEsS0FBS0gsS0FBTCxDQUFXSSxvQkFBWCxDQUFnQyxPQUFoQyxFQUF5QztBQUM3Q0MsdUJBQU8sQ0FEc0M7QUFFN0NDLHFCQUFLO0FBRndDLGFBQXpDO0FBSE0sU0FBbEI7QUFRQSxhQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0I7QUFDZEgsaUJBQUssY0FEUztBQUVkSSx1QkFBVyxFQUZHO0FBR2RDLG9CQUFRLEtBQUtILEtBQUwsQ0FBV0ksb0JBQVgsQ0FBZ0MsTUFBaEMsRUFBd0M7QUFDNUNDLHVCQUFPLENBRHFDO0FBRTVDQyxxQkFBSztBQUZ1QyxhQUF4QyxDQUhNO0FBT2RDLG9CQUFPO0FBUE8sU0FBbEI7QUFTQSxhQUFLUCxLQUFMLENBQVdDLE1BQVgsQ0FBa0I7QUFDZEgsaUJBQUssT0FEUztBQUVkSSx1QkFBVyxDQUZHO0FBR2RDLG9CQUFRLEtBQUtILEtBQUwsQ0FBV0ksb0JBQVgsQ0FBZ0MsTUFBaEMsRUFBd0M7QUFDNUNDLHVCQUFPLENBRHFDO0FBRTVDQyxxQkFBSztBQUZ1QyxhQUF4QyxDQUhNO0FBT2RDLG9CQUFPO0FBUE8sU0FBbEI7QUFVSDtBQUNETixhQUFTO0FBQ0wsYUFBS08sSUFBTCxHQUFZLEtBQUtDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixNQUF4QixFQUErQixDQUEvQixFQUFrQ0MsUUFBbEMsQ0FBMkMsQ0FBM0MsQ0FBWjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxLQUFLSCxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsRUFBd0IsT0FBeEIsRUFBZ0MsQ0FBaEMsRUFBbUNDLFFBQW5DLENBQTRDLENBQTVDLENBQWI7QUFDQSxhQUFLRSxNQUFMLEdBQWMsS0FBS0osR0FBTCxDQUFTQyxNQUFULENBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLEVBQXdCLE9BQXhCLEVBQWdDLENBQWhDLEVBQW1DQyxRQUFuQyxDQUE0QyxDQUE1QyxDQUFkO0FBQ0EsYUFBS0csSUFBTCxHQUFZLEtBQUtMLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixNQUF4QixFQUErQixDQUEvQixFQUFrQ0MsUUFBbEMsQ0FBMkMsQ0FBM0MsRUFBOENJLFFBQTlDLENBQXVELElBQXZELENBQVo7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLEtBQUtQLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixTQUF4QixFQUFrQyxDQUFsQyxFQUFxQ0MsUUFBckMsQ0FBOEMsQ0FBOUMsQ0FBaEI7QUFDSDtBQUNETSxhQUFRO0FBQ0osYUFBS1QsSUFBTCxDQUFVVSxJQUFWLENBQWUsY0FBZixFQUE4QixJQUE5QjtBQUNBLGFBQUtOLEtBQUwsQ0FBV00sSUFBWCxDQUFnQixhQUFoQixFQUE4QixJQUE5QjtBQUNBLGFBQUtKLElBQUwsQ0FBVUksSUFBVixDQUFlLE9BQWYsRUFBdUIsSUFBdkI7QUFDQSxhQUFLSixJQUFMLENBQVVLLENBQVYsSUFBYSxDQUFiO0FBQ0EsWUFBSSxLQUFLTCxJQUFMLENBQVVLLENBQVYsSUFBZSxJQUFuQixFQUF3QjtBQUNwQixpQkFBS0MsS0FBTCxDQUFXZixLQUFYLENBQWlCLE9BQWpCLEVBQXlCLDZCQUF6QjtBQUVIO0FBQ0o7O0FBbERnQztBQXFEdEJYLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL21lbnVTY2VuZTEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBtZW51U2NlbmUxIGV4dGVuZHMgUGhhc2VyLlNjZW5le1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoe2tleTonbWVudSd9KVxyXG4gICAgfVxyXG4gICAgcHJlbG9hZCAoKXtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJob3VzZUNvbG9yc1wiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDMsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImhvdXNlXCIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgZW5kOiAxMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcImNpdGllc0NvbG9yc1wiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJjaXR5XCIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgZW5kOiA2XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6MFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogOCxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFwiaGVyb1wiLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogNCxcclxuICAgICAgICAgICAgICAgIGVuZDogN1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcmVwZWF0OjBcclxuICAgICAgICB9KTsgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGNyZWF0ZSAoKXtcclxuICAgICAgICB0aGlzLmNpdHkgPSB0aGlzLmFkZC5zcHJpdGUoNTU1LDM1MCxcImNpdHlcIiwwKS5zZXREZXB0aCgwKTtcclxuICAgICAgICB0aGlzLmhvdXNlID0gdGhpcy5hZGQuc3ByaXRlKDcwMCwzNTAsXCJob3VzZVwiLDApLnNldERlcHRoKDEpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tzID0gdGhpcy5hZGQuc3ByaXRlKDQ3Niw0OTAsXCJibG9ja1wiLDApLnNldERlcHRoKDIpOyBcclxuICAgICAgICB0aGlzLmhlcm8gPSB0aGlzLmFkZC5zcHJpdGUoMTAwLDUyNSxcImhlcm9cIiw1KS5zZXREZXB0aCgzKS5zZXRTY2FsZSgwLjE0KTtcclxuICAgICAgICB0aGlzLnBhc3NzYWdlID0gdGhpcy5hZGQuc3ByaXRlKDUwMCwzMDAsXCJwYXNzYWdlXCIsMCkuc2V0RGVwdGgoNCk7IFxyXG4gICAgfSBcclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuY2l0eS5wbGF5KCdjaXRpZXNDb2xvcnMnLHRydWUpO1xyXG4gICAgICAgIHRoaXMuaG91c2UucGxheSgnaG91c2VDb2xvcnMnLHRydWUpO1xyXG4gICAgICAgIHRoaXMuaGVyby5wbGF5KCdyaWdodCcsdHJ1ZSlcclxuICAgICAgICB0aGlzLmhlcm8ueCs9MlxyXG4gICAgICAgIGlmICh0aGlzLmhlcm8ueCA+PSAxMTAwKXtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnbWVudTInLCdIZWxsb3cgZnJvbSB0aGUgbG9hZGUgc2NlbmUnKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZW51U2NlbmUxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/menuScene1.js\n");

/***/ }),

/***/ "./src/js/menuScene2.js":
/*!******************************!*\
  !*** ./src/js/menuScene2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass menuScene2 extends Phaser.Scene {\n\n    constructor() {\n        super({ key: 'menu2' });\n    }\n    preload() {\n\n        this.anims.create({\n            key: \"right\",\n            frameRate: 8,\n            frames: this.anims.generateFrameNumbers(\"hero\", {\n                start: 4,\n                end: 7\n            }),\n            repeat: 0\n        });\n        this.anims.create({\n            key: \"down\",\n            frameRate: 5,\n            frames: this.anims.generateFrameNumbers(\"second\", {\n                start: 0,\n                end: 9\n            }),\n            loop: false,\n            killOnComplete: true\n        });\n    }\n    create() {\n        this.bg3 = this.add.sprite(460, 300, \"bg3\", 0).setDepth(0).setScale(1);\n        this.hero = this.add.sprite(-100, 442, \"hero\", 5).setDepth(3).setScale(0.1);\n        this.second = this.add.sprite(550, 480, \"second\", 0).setDepth(2).setScale(0.7);\n\n        this.animationPlayed = false;\n        let secondText = this.add.text(250, 350, 'I try to stop him... I failed... ', { fontFamily: 'Georgia, \"Goudy Bookletter 1911\", Times, serif', fontSize: 20 });\n        secondText.setInteractive();\n    }\n    update() {\n\n        this.hero.play('right', true);\n\n        if (this.animationPlayed === false) {\n\n            this.animationPlayed = true;\n            console.log('TRUE once');\n            this.second.play('down', true);\n        }\n        this.hero.x += 2;\n        console.log(this.hero.x);\n        if (this.hero.x >= 75) {\n            this.hero.y = 452;\n        }\n        if (this.hero.x >= 95) {\n            this.hero.y = 475;\n        }\n        if (this.hero.x >= 115) {\n            this.hero.y = 490;\n        }\n\n        if (this.hero.x == 380) {\n\n            this.waiting();\n        }\n\n        if (this.hero.x > 670) {\n            this.hero.y -= 15;\n        }\n        if (this.hero.x > 695) {\n            this.hero.y -= 15;\n        }\n        if (this.hero.x > 715) {\n            this.hero.y -= 15;\n        }if (this.hero.x > 740) {\n            this.hero.y -= 20;\n        }if (this.hero.x > 775) {\n            this.hero.y -= 25;\n        }if (this.hero.x > 805) {\n            this.hero.y -= 25;\n        }\n        if (this.hero.x > 845) {\n            this.hero.y -= 25;\n        }\n        if (this.hero.x > 900) {\n            this.scene.start();\n        }\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuScene2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudVNjZW5lMi5qcz9jNTQyIl0sIm5hbWVzIjpbIm1lbnVTY2VuZTIiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImFuaW1zIiwiY3JlYXRlIiwiZnJhbWVSYXRlIiwiZnJhbWVzIiwiZ2VuZXJhdGVGcmFtZU51bWJlcnMiLCJzdGFydCIsImVuZCIsInJlcGVhdCIsImxvb3AiLCJraWxsT25Db21wbGV0ZSIsImJnMyIsImFkZCIsInNwcml0ZSIsInNldERlcHRoIiwic2V0U2NhbGUiLCJoZXJvIiwic2Vjb25kIiwiYW5pbWF0aW9uUGxheWVkIiwic2Vjb25kVGV4dCIsInRleHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJzZXRJbnRlcmFjdGl2ZSIsInVwZGF0ZSIsInBsYXkiLCJjb25zb2xlIiwibG9nIiwieCIsInkiLCJ3YWl0aW5nIiwic2NlbmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsVUFBTixTQUF5QkMsT0FBT0MsS0FBaEMsQ0FBcUM7O0FBRWpDQyxrQkFBYTtBQUNULGNBQU0sRUFBQ0MsS0FBSSxPQUFMLEVBQU47QUFDSDtBQUNEQyxjQUFVOztBQUdOLGFBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQjtBQUNkSCxpQkFBSyxPQURTO0FBRWRJLHVCQUFXLENBRkc7QUFHZEMsb0JBQVEsS0FBS0gsS0FBTCxDQUFXSSxvQkFBWCxDQUFnQyxNQUFoQyxFQUF3QztBQUM1Q0MsdUJBQU8sQ0FEcUM7QUFFNUNDLHFCQUFLO0FBRnVDLGFBQXhDLENBSE07QUFPZEMsb0JBQU87QUFQTyxTQUFsQjtBQVNBLGFBQUtQLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQjtBQUNkSCxpQkFBSyxNQURTO0FBRWRJLHVCQUFXLENBRkc7QUFHZEMsb0JBQVEsS0FBS0gsS0FBTCxDQUFXSSxvQkFBWCxDQUFnQyxRQUFoQyxFQUEwQztBQUM5Q0MsdUJBQU8sQ0FEdUM7QUFFOUNDLHFC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QUFDSCxhQUFJLEtBQUtiLElBQUwsQ0FBVVksQ0FBVixHQUFjLEdBQWxCLEVBQXNCO0FBQ25CLGlCQUFLWixJQUFMLENBQVVhLENBQVYsSUFBYyxFQUFkO0FBQ0g7QUFDRCxZQUFJLEtBQUtiLElBQUwsQ0FBVVksQ0FBVixHQUFjLEdBQWxCLEVBQXNCO0FBQ2xCLGlCQUFLWixJQUFMLENBQVVhLENBQVYsSUFBYyxFQUFkO0FBQ0g7QUFDRCxZQUFJLEtBQUtiLElBQUwsQ0FBVVksQ0FBVixHQUFhLEdBQWpCLEVBQXFCO0FBQ2pCLGlCQUFLRyxLQUFMLENBQVd6QixLQUFYO0FBQ0g7QUFDSjs7QUEzRmdDO0FBOEZ0QlgseUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvbWVudVNjZW5lMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIG1lbnVTY2VuZTIgZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OidtZW51Mid9KVxyXG4gICAgfVxyXG4gICAgcHJlbG9hZCAoKXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDgsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImhlcm9cIiwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDdcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHJlcGVhdDowXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IFwiZG93blwiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDUsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcInNlY29uZFwiLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgICAgIGVuZDogOVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbG9vcDpmYWxzZSxcclxuICAgICAgICAgICAga2lsbE9uQ29tcGxldGU6dHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBjcmVhdGUgKCl7XHJcbiAgICAgICAgdGhpcy5iZzMgPSB0aGlzLmFkZC5zcHJpdGUoNDYwLDMwMCxcImJnM1wiLDApLnNldERlcHRoKDApLnNldFNjYWxlKDEpO1xyXG4gICAgICAgIHRoaXMuaGVybyA9IHRoaXMuYWRkLnNwcml0ZSgtMTAwLDQ0MixcImhlcm9cIiw1KS5zZXREZXB0aCgzKS5zZXRTY2FsZSgwLjEpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kID0gdGhpcy5hZGQuc3ByaXRlKDU1MCw0ODAsXCJzZWNvbmRcIiwwKS5zZXREZXB0aCgyKS5zZXRTY2FsZSgwLjcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUGxheWVkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNlY29uZFRleHQgPSB0aGlzLmFkZC50ZXh0KDI1MCwzNTAsICdJIHRyeSB0byBzdG9wIGhpbS4uLiBJIGZhaWxlZC4uLiAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJyxmb250U2l6ZToyMCB9KTtcclxuICAgICAgICBzZWNvbmRUZXh0LnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5oZXJvLnBsYXkoJ3JpZ2h0Jyx0cnVlKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZih0aGlzLmFuaW1hdGlvblBsYXllZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uUGxheWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RSVUUgb25jZScpXHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kLnBsYXkoJ2Rvd24nLHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlcm8ueCs9MlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVyby54KVxyXG4gICAgICAgIGlmICh0aGlzLmhlcm8ueCA+PSA3NSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyby55ID0gNDUyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhlcm8ueCA+PSA5NSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyby55ID0gNDc1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhlcm8ueCA+PSAxMTUpe1xyXG4gICAgICAgICAgICB0aGlzLmhlcm8ueSA9IDQ5MFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5oZXJvLnggPT0zODApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy53YWl0aW5nKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmhlcm8ueCA+IDY3MCl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyby55IC09MTVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGVyby54ID4gNjk1KXtcclxuICAgICAgICAgICAgdGhpcy5oZXJvLnkgLT0xNVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oZXJvLnggPiA3MTUpe1xyXG4gICAgICAgICAgICB0aGlzLmhlcm8ueSAtPTE1XHJcbiAgICAgICAgfWlmICh0aGlzLmhlcm8ueCA+IDc0MCl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyby55IC09MjBcclxuICAgICAgICB9aWYgKHRoaXMuaGVyby54ID4gNzc1KXtcclxuICAgICAgICAgICAgdGhpcy5oZXJvLnkgLT0yNVxyXG4gICAgICAgIH1pZiAodGhpcy5oZXJvLnggPiA4MDUpe1xyXG4gICAgICAgICAgICB0aGlzLmhlcm8ueSAtPTI1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhlcm8ueCA+IDg0NSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVyby55IC09MjVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGVyby54ID45MDApe1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZW51U2NlbmUyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/menuScene2.js\n");

/***/ })

/******/ });