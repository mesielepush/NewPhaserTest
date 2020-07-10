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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuScene1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuScene1 */ \"./src/js/menuScene1.js\");\n/* harmony import */ var _menuScene0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuScene0 */ \"./src/js/menuScene0.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading */ \"./src/js/loading.js\");\n\n\n\n\nconst config = () => {\n    var config = {\n        type: Phaser.AUTO,\n        width: 920,\n        height: 600,\n        physics: {\n            default: 'arcade',\n            arcade: {\n                gravity: { y: 200 }\n            }\n        },\n        scene: [_loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _menuScene0__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _menuScene1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]\n    };\n\n    var game = new Phaser.Game(config);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n/* this.load.setBaseURL('http://labs.phaser.io'); *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnLmpzPzE0YWMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsImxvYWRpbmciLCJtZW51U2NlbmUwIiwibWVudVNjZW5lMSIsImdhbWUiLCJHYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNQSxTQUFTLE1BQUk7QUFDZixRQUFJQSxTQUFTO0FBQ1RDLGNBQU1DLE9BQU9DLElBREo7QUFFVEMsZUFBTyxHQUZFO0FBR1RDLGdCQUFRLEdBSEM7QUFJVEMsaUJBQVM7QUFDTEMscUJBQVMsUUFESjtBQUVMQyxvQkFBUTtBQUNKQyx5QkFBUyxFQUFFQyxHQUFHLEdBQUw7QUFETDtBQUZILFNBSkE7QUFVVEMsZUFBTyxDQUFDQyxnREFBRCxFQUFVQyxtREFBVixFQUFxQkMsbURBQXJCO0FBVkUsS0FBYjs7QUFhQSxRQUFJQyxPQUFPLElBQUliLE9BQU9jLElBQVgsQ0FBZ0JoQixNQUFoQixDQUFYO0FBSUgsQ0FsQkQ7O0FBb0JlQSxxRUFBZjtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW51U2NlbmUxIGZyb20gJy4vbWVudVNjZW5lMSc7XHJcbmltcG9ydCBtZW51U2NlbmUwIGZyb20gJy4vbWVudVNjZW5lMCc7XHJcblxyXG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xyXG5jb25zdCBjb25maWcgPSAoKT0+e1xyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgICAgICB3aWR0aDogOTIwLFxyXG4gICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgIHBoeXNpY3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICAgICAgZ3Jhdml0eTogeyB5OiAyMDAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY2VuZTogW2xvYWRpbmcsIG1lbnVTY2VuZTAsbWVudVNjZW5lMV1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn07IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXHJcbi8qIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdodHRwOi8vbGFicy5waGFzZXIuaW8nKTsgKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/config.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\nclass loading extends Phaser.Scene {\n    constructor() {\n        super({ key: \"loading\" });\n    }\n    preload() {\n        let loadingBar = this.add.graphics({\n            fillStyle: {\n                color: 0xffffff\n            }\n        });\n\n        this.load.image('passage', \"../src/images/passage.png\");\n        this.load.image('block', \"../src/images/blocks.png\");\n\n        this.load.spritesheet('house', \"../src/images/sprites/houseSprites.png\", {\n            frameHeight: 510,\n            frameWidth: 511.5\n        });\n        this.load.spritesheet('hero', \"../src/images/sprites/generichero.png\", {\n            frameHeight: 590,\n            frameWidth: 450\n        });\n        this.load.spritesheet('city', \"../src/images/sprites/citys.png\", {\n            frameHeight: 600,\n            frameWidth: 920\n        });\n        this.load.spritesheet('countryhouse', \"../src/images/sprites/menuScene0.png\", {\n            frameHeight: 326,\n            frameWidth: 540\n        });\n\n        this.load.on('progress', percent => {\n            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);\n        });\n    }\n    create() {\n        this.scene.start('menu0', 'Hellow from the loade scene');\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9hZGluZy5qcz8yZmYyIl0sIm5hbWVzIjpbImxvYWRpbmciLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImxvYWRpbmdCYXIiLCJhZGQiLCJncmFwaGljcyIsImZpbGxTdHlsZSIsImNvbG9yIiwibG9hZCIsImltYWdlIiwic3ByaXRlc2hlZXQiLCJmcmFtZUhlaWdodCIsImZyYW1lV2lkdGgiLCJvbiIsInBlcmNlbnQiLCJmaWxsUmVjdCIsImdhbWUiLCJyZW5kZXJlciIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlIiwic2NlbmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTUEsT0FBTixTQUFzQkMsT0FBT0MsS0FBN0IsQ0FBbUM7QUFDL0JDLGtCQUFhO0FBQ1QsY0FBTSxFQUFDQyxLQUFJLFNBQUwsRUFBTjtBQUNIO0FBQ0RDLGNBQVM7QUFDTCxZQUFJQyxhQUFhLEtBQUtDLEdBQUwsQ0FBU0MsUUFBVCxDQUFrQjtBQUMvQkMsdUJBQVU7QUFDTkMsdUJBQU87QUFERDtBQURxQixTQUFsQixDQUFqQjs7QUFPQSxhQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsU0FBaEIsRUFBMEIsMkJBQTFCO0FBQ0EsYUFBS0QsSUFBTCxDQUFVQyxLQUFWLENBQWdCLE9BQWhCLEVBQXdCLDBCQUF4Qjs7QUFHQSxhQUFLRCxJQUFMLENBQVVFLFdBQVYsQ0FBc0IsT0FBdEIsRUFBK0Isd0NBQS9CLEVBQXdFO0FBQ3BFQyx5QkFBWSxHQUR3RDtBQUVwRUMsd0JBQVc7QUFGeUQsU0FBeEU7QUFJQSxhQUFLSixJQUFMLENBQVVFLFdBQVYsQ0FBc0IsTUFBdEIsRUFBOEIsdUNBQTlCLEVBQXNFO0FBQ2xFQyx5QkFBWSxHQURzRDtBQUVsRUMsd0JBQVc7QUFGdUQsU0FBdEU7QUFJQSxhQUFLSixJQUFMLENBQVVFLFdBQVYsQ0FBc0IsTUFBdEIsRUFBOEIsaUNBQTlCLEVBQWdFO0FBQzVEQyx5QkFBWSxHQURnRDtBQUU1REMsd0JBQVc7QUFGaUQsU0FBaEU7QUFJQSxhQUFLSixJQUFMLENBQVVFLFdBQVYsQ0FBc0IsY0FBdEIsRUFBc0Msc0NBQXRDLEVBQTZFO0FBQ3pFQyx5QkFBWSxHQUQ2RDtBQUV6RUMsd0JBQVc7QUFGOEQsU0FBN0U7O0FBTUEsYUFBS0osSUFBTCxDQUFVSyxFQUFWLENBQWEsVUFBYixFQUEwQkMsT0FBRCxJQUFZO0FBQ2pDWCx1QkFBV1ksUUFBWCxDQUFvQixDQUFwQixFQUFzQixLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLE1BQW5CLEdBQTRCLENBQWxELEVBQW9ELEtBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkUsS0FBbkIsR0FBMkJMLE9BQS9FLEVBQXdGLEVBQXhGO0FBQ0gsU0FGRDtBQUlIO0FBQ0RNLGFBQVE7QUFDSixhQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUIsT0FBakIsRUFBeUIsNkJBQXpCO0FBRUg7O0FBMUM4QjtBQTZDcEJ6QixzRUFBZiIsImZpbGUiOiIuL3NyYy9qcy9sb2FkaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcclxuY2xhc3MgbG9hZGluZyBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKHtrZXk6XCJsb2FkaW5nXCJ9KTtcclxuICAgIH1cclxuICAgIHByZWxvYWQoKXtcclxuICAgICAgICBsZXQgbG9hZGluZ0JhciA9IHRoaXMuYWRkLmdyYXBoaWNzKHtcclxuICAgICAgICAgICAgZmlsbFN0eWxlOntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFzc2FnZScsXCIuLi9zcmMvaW1hZ2VzL3Bhc3NhZ2UucG5nXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmxvY2snLFwiLi4vc3JjL2ltYWdlcy9ibG9ja3MucG5nXCIpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2hvdXNlJywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvaG91c2VTcHJpdGVzLnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6NTEwLFxyXG4gICAgICAgICAgICBmcmFtZVdpZHRoOjUxMS41XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdoZXJvJywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvZ2VuZXJpY2hlcm8ucG5nXCIse1xyXG4gICAgICAgICAgICBmcmFtZUhlaWdodDo1OTAsXHJcbiAgICAgICAgICAgIGZyYW1lV2lkdGg6NDUwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdjaXR5JywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvY2l0eXMucG5nXCIse1xyXG4gICAgICAgICAgICBmcmFtZUhlaWdodDo2MDAsXHJcbiAgICAgICAgICAgIGZyYW1lV2lkdGg6OTIwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdjb3VudHJ5aG91c2UnLCBcIi4uL3NyYy9pbWFnZXMvc3ByaXRlcy9tZW51U2NlbmUwLnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6MzI2LFxyXG4gICAgICAgICAgICBmcmFtZVdpZHRoOjU0MFxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHBlcmNlbnQpID0+e1xyXG4gICAgICAgICAgICBsb2FkaW5nQmFyLmZpbGxSZWN0KDAsdGhpcy5nYW1lLnJlbmRlcmVyLmhlaWdodCAvIDIsdGhpcy5nYW1lLnJlbmRlcmVyLndpZHRoICogcGVyY2VudCwgNTApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdtZW51MCcsJ0hlbGxvdyBmcm9tIHRoZSBsb2FkZSBzY2VuZScpXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/loading.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass menuScene1 extends Phaser.Scene {\n\n    constructor() {\n        super({ key: 'menu' });\n    }\n    preload() {\n        this.anims.create({\n            key: \"houseColors\",\n            frameRate: 3,\n            frames: this.anims.generateFrameNumbers(\"house\", {\n                start: 0,\n                end: 10\n            })\n        });\n        this.anims.create({\n            key: \"citiesColors\",\n            frameRate: 10,\n            frames: this.anims.generateFrameNumbers(\"city\", {\n                start: 0,\n                end: 6\n            }),\n            repeat: 0\n        });\n        this.anims.create({\n            key: \"right\",\n            frameRate: 8,\n            frames: this.anims.generateFrameNumbers(\"hero\", {\n                start: 4,\n                end: 7\n            }),\n            repeat: 0\n        });\n    }\n    create() {\n        this.city = this.add.sprite(555, 350, \"city\", 0).setDepth(0);\n        this.house = this.add.sprite(700, 350, \"house\", 0).setDepth(1);\n        this.blocks = this.add.sprite(476, 490, \"block\", 0).setDepth(2);\n        this.hero = this.add.sprite(100, 525, \"hero\", 5).setDepth(3).setScale(0.14);\n        this.passsage = this.add.sprite(500, 300, \"passage\", 0).setDepth(4);\n    }\n    update() {\n        this.city.play('citiesColors', true);\n        this.house.play('houseColors', true);\n        this.hero.play('right', true);\n        this.hero.x += 2;\n        if (this.hero.x >= 1100) {\n            this.scene.start('menu0', 'Hellow from the loade scene');\n        }\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuScene1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudVNjZW5lMS5qcz80ZGUyIl0sIm5hbWVzIjpbIm1lbnVTY2VuZTEiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImFuaW1zIiwiY3JlYXRlIiwiZnJhbWVSYXRlIiwiZnJhbWVzIiwiZ2VuZXJhdGVGcmFtZU51bWJlcnMiLCJzdGFydCIsImVuZCIsInJlcGVhdCIsImNpdHkiLCJhZGQiLCJzcHJpdGUiLCJzZXREZXB0aCIsImhvdXNlIiwiYmxvY2tzIiwiaGVybyIsInNldFNjYWxlIiwicGFzc3NhZ2UiLCJ1cGRhdGUiLCJwbGF5IiwieCIsInNjZW5lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFVBQU4sU0FBeUJDLE9BQU9DLEtBQWhDLENBQXFDOztBQUVqQ0Msa0JBQWE7QUFDVCxjQUFNLEVBQUNDLEtBQUksTUFBTCxFQUFOO0FBQ0g7QUFDREMsY0FBVTtBQUNOLGFBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQjtBQUNkSCxpQkFBSyxhQURTO0FBRWRJLHVCQUFXLENBRkc7QUFHZEMsb0JBQVEsS0FBS0gsS0FBTCxDQUFXSSxvQkFBWCxDQUFnQyxPQUFoQyxFQUF5QztBQUM3Q0MsdUJBQU8sQ0FEc0M7QUFFN0NDLHFCQUFLO0FBRndDLGFBQXpDO0FBSE0sU0FBbEI7QUFRQSxhQUFLTixLQUFMLENBQVdDLE1BQVgsQ0FBa0I7QUFDZEgsaUJBQUssY0FEUztBQUVkSSx1QkFBVyxFQUZHO0FBR2RDLG9CQUFRLEtBQUtILEtBQUwsQ0FBV0ksb0JBQVgsQ0FBZ0MsTUFBaEMsRUFBd0M7QUFDNUNDLHVCQUFPLENBRHFDO0FBRTVDQyxxQkFBSztBQUZ1QyxhQUF4QyxDQUhNO0FBT2RDLG9CQUFPO0FBUE8sU0FBbEI7QUFTQSxhQUFLUCxLQUFMLENBQVdDLE1BQVgsQ0FBa0I7QUFDZEgsaUJBQUssT0FEUztBQUVkSSx1QkFBVyxDQUZHO0FBR2RDLG9CQUFRLEtBQUtILEtBQUwsQ0FBV0ksb0JBQVgsQ0FBZ0MsTUFBaEMsRUFBd0M7QUFDNUNDLHVCQUFPLENBRHFDO0FBRTVDQyxxQkFBSztBQUZ1QyxhQUF4QyxDQUhNO0FBT2RDLG9CQUFPO0FBUE8sU0FBbEI7QUFVSDtBQUNETixhQUFTO0FBQ0wsYUFBS08sSUFBTCxHQUFZLEtBQUtDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixNQUF4QixFQUErQixDQUEvQixFQUFrQ0MsUUFBbEMsQ0FBMkMsQ0FBM0MsQ0FBWjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxLQUFLSCxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsRUFBd0IsT0FBeEIsRUFBZ0MsQ0FBaEMsRUFBbUNDLFFBQW5DLENBQTRDLENBQTVDLENBQWI7QUFDQSxhQUFLRSxNQUFMLEdBQWMsS0FBS0osR0FBTCxDQUFTQyxNQUFULENBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLEVBQXdCLE9BQXhCLEVBQWdDLENBQWhDLEVBQW1DQyxRQUFuQyxDQUE0QyxDQUE1QyxDQUFkO0FBQ0EsYUFBS0csSUFBTCxHQUFZLEtBQUtMLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixNQUF4QixFQUErQixDQUEvQixFQUFrQ0MsUUFBbEMsQ0FBMkMsQ0FBM0MsRUFBOENJLFFBQTlDLENBQXVELElBQXZELENBQVo7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLEtBQUtQLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixTQUF4QixFQUFrQyxDQUFsQyxFQUFxQ0MsUUFBckMsQ0FBOEMsQ0FBOUMsQ0FBaEI7QUFDSDtBQUNETSxhQUFRO0FBQ0osYUFBS1QsSUFBTCxDQUFVVSxJQUFWLENBQWUsY0FBZixFQUE4QixJQUE5QjtBQUNBLGFBQUtOLEtBQUwsQ0FBV00sSUFBWCxDQUFnQixhQUFoQixFQUE4QixJQUE5QjtBQUNBLGFBQUtKLElBQUwsQ0FBVUksSUFBVixDQUFlLE9BQWYsRUFBdUIsSUFBdkI7QUFDQSxhQUFLSixJQUFMLENBQVVLLENBQVYsSUFBYSxDQUFiO0FBQ0EsWUFBSSxLQUFLTCxJQUFMLENBQVVLLENBQVYsSUFBZSxJQUFuQixFQUF3QjtBQUNwQixpQkFBS0MsS0FBTCxDQUFXZixLQUFYLENBQWlCLE9BQWpCLEVBQXlCLDZCQUF6QjtBQUVIO0FBQ0o7O0FBbERnQztBQXFEdEJYLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2pzL21lbnVTY2VuZTEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBtZW51U2NlbmUxIGV4dGVuZHMgUGhhc2VyLlNjZW5le1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoe2tleTonbWVudSd9KVxyXG4gICAgfVxyXG4gICAgcHJlbG9hZCAoKXtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJob3VzZUNvbG9yc1wiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDMsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImhvdXNlXCIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgZW5kOiAxMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcImNpdGllc0NvbG9yc1wiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJjaXR5XCIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgZW5kOiA2XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6MFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogOCxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFwiaGVyb1wiLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogNCxcclxuICAgICAgICAgICAgICAgIGVuZDogN1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcmVwZWF0OjBcclxuICAgICAgICB9KTsgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGNyZWF0ZSAoKXtcclxuICAgICAgICB0aGlzLmNpdHkgPSB0aGlzLmFkZC5zcHJpdGUoNTU1LDM1MCxcImNpdHlcIiwwKS5zZXREZXB0aCgwKTtcclxuICAgICAgICB0aGlzLmhvdXNlID0gdGhpcy5hZGQuc3ByaXRlKDcwMCwzNTAsXCJob3VzZVwiLDApLnNldERlcHRoKDEpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tzID0gdGhpcy5hZGQuc3ByaXRlKDQ3Niw0OTAsXCJibG9ja1wiLDApLnNldERlcHRoKDIpOyBcclxuICAgICAgICB0aGlzLmhlcm8gPSB0aGlzLmFkZC5zcHJpdGUoMTAwLDUyNSxcImhlcm9cIiw1KS5zZXREZXB0aCgzKS5zZXRTY2FsZSgwLjE0KTtcclxuICAgICAgICB0aGlzLnBhc3NzYWdlID0gdGhpcy5hZGQuc3ByaXRlKDUwMCwzMDAsXCJwYXNzYWdlXCIsMCkuc2V0RGVwdGgoNCk7IFxyXG4gICAgfSBcclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuY2l0eS5wbGF5KCdjaXRpZXNDb2xvcnMnLHRydWUpO1xyXG4gICAgICAgIHRoaXMuaG91c2UucGxheSgnaG91c2VDb2xvcnMnLHRydWUpO1xyXG4gICAgICAgIHRoaXMuaGVyby5wbGF5KCdyaWdodCcsdHJ1ZSlcclxuICAgICAgICB0aGlzLmhlcm8ueCs9MlxyXG4gICAgICAgIGlmICh0aGlzLmhlcm8ueCA+PSAxMTAwKXtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnbWVudTAnLCdIZWxsb3cgZnJvbSB0aGUgbG9hZGUgc2NlbmUnKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZW51U2NlbmUxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/menuScene1.js\n");

/***/ })

/******/ });