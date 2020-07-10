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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ \"./src/js/loading.js\");\n\n\nconst config = () => {\n    var config = {\n        type: Phaser.AUTO,\n        width: 920,\n        height: 600,\n        physics: {\n            default: 'arcade',\n            arcade: {\n                gravity: { y: 200 }\n            }\n        },\n        scene: [_loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]\n    };\n\n    var game = new Phaser.Game(config);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n/* this.load.setBaseURL('http://labs.phaser.io'); *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnLmpzPzE0YWMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsImxvYWRpbmciLCJtZW51IiwiZ2FtZSIsIkdhbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNQSxTQUFTLE1BQUk7QUFDZixRQUFJQSxTQUFTO0FBQ1RDLGNBQU1DLE9BQU9DLElBREo7QUFFVEMsZUFBTyxHQUZFO0FBR1RDLGdCQUFRLEdBSEM7QUFJVEMsaUJBQVM7QUFDTEMscUJBQVMsUUFESjtBQUVMQyxvQkFBUTtBQUNKQyx5QkFBUyxFQUFFQyxHQUFHLEdBQUw7QUFETDtBQUZILFNBSkE7QUFVVEMsZUFBTyxDQUFDQyxnREFBRCxFQUFVQyw2Q0FBVjtBQVZFLEtBQWI7O0FBYUEsUUFBSUMsT0FBTyxJQUFJWixPQUFPYSxJQUFYLENBQWdCZixNQUFoQixDQUFYO0FBSUgsQ0FsQkQ7O0FBb0JlQSxxRUFBZjtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBsb2FkaW5nIGZyb20gJy4vbG9hZGluZyc7XHJcbmNvbnN0IGNvbmZpZyA9ICgpPT57XHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgICAgIHdpZHRoOiA5MjAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgcGh5c2ljczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgICAgICBncmF2aXR5OiB7IHk6IDIwMCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjZW5lOiBbbG9hZGluZywgbWVudV1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn07IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnXHJcbi8qIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdodHRwOi8vbGFicy5waGFzZXIuaW8nKTsgKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/config.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\nclass loading extends Phaser.Scene {\n    constructor() {\n        super({ key: \"loading\" });\n    }\n    preload() {\n        let loadingBar = this.add.graphics({\n            fillStyle: {\n                color: 0xffffff\n            }\n        });\n\n        this.load.image('passage', \"../src/images/passage.png\");\n        this.load.image('block', \"../src/images/blocks.png\");\n\n        this.load.spritesheet('house', \"../src/images/sprites/houseSprites.png\", {\n            frameHeight: 510,\n            frameWidth: 511.5\n        });\n        this.load.spritesheet('hero', \"../src/images/sprites/generichero.png\", {\n            frameHeight: 550,\n            frameWidth: 450\n        });\n        this.load.spritesheet('city', \"../src/images/sprites/citys.png\", {\n            frameHeight: 600,\n            frameWidth: 920\n        });\n\n        this.load.on('progress', percent => {\n            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);\n        });\n    }\n    create() {\n        this.scene.start(_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scenes.menu, 'Hellow from the loade scene');\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9hZGluZy5qcz8yZmYyIl0sIm5hbWVzIjpbImxvYWRpbmciLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImxvYWRpbmdCYXIiLCJhZGQiLCJncmFwaGljcyIsImZpbGxTdHlsZSIsImNvbG9yIiwibG9hZCIsImltYWdlIiwic3ByaXRlc2hlZXQiLCJmcmFtZUhlaWdodCIsImZyYW1lV2lkdGgiLCJvbiIsInBlcmNlbnQiLCJmaWxsUmVjdCIsImdhbWUiLCJyZW5kZXJlciIsImhlaWdodCIsIndpZHRoIiwiY3JlYXRlIiwic2NlbmUiLCJzdGFydCIsImNvbnN0YW50cyIsInNjZW5lcyIsIm1lbnUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU1BLE9BQU4sU0FBc0JDLE9BQU9DLEtBQTdCLENBQW1DO0FBQy9CQyxrQkFBYTtBQUNULGNBQU0sRUFBQ0MsS0FBSSxTQUFMLEVBQU47QUFDSDtBQUNEQyxjQUFTO0FBQ0wsWUFBSUMsYUFBYSxLQUFLQyxHQUFMLENBQVNDLFFBQVQsQ0FBa0I7QUFDL0JDLHVCQUFVO0FBQ05DLHVCQUFPO0FBREQ7QUFEcUIsU0FBbEIsQ0FBakI7O0FBT0EsYUFBS0MsSUFBTCxDQUFVQyxLQUFWLENBQWdCLFNBQWhCLEVBQTBCLDJCQUExQjtBQUNBLGFBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQixPQUFoQixFQUF3QiwwQkFBeEI7O0FBR0EsYUFBS0QsSUFBTCxDQUFVRSxXQUFWLENBQXNCLE9BQXRCLEVBQStCLHdDQUEvQixFQUF3RTtBQUNwRUMseUJBQVksR0FEd0Q7QUFFcEVDLHdCQUFXO0FBRnlELFNBQXhFO0FBSUEsYUFBS0osSUFBTCxDQUFVRSxXQUFWLENBQXNCLE1BQXRCLEVBQThCLHVDQUE5QixFQUFzRTtBQUNsRUMseUJBQVksR0FEc0Q7QUFFbEVDLHdCQUFXO0FBRnVELFNBQXRFO0FBSUEsYUFBS0osSUFBTCxDQUFVRSxXQUFWLENBQXNCLE1BQXRCLEVBQThCLGlDQUE5QixFQUFnRTtBQUM1REMseUJBQVksR0FEZ0Q7QUFFNURDLHdCQUFXO0FBRmlELFNBQWhFOztBQU1BLGFBQUtKLElBQUwsQ0FBVUssRUFBVixDQUFhLFVBQWIsRUFBMEJDLE9BQUQsSUFBWTtBQUNqQ1gsdUJBQVdZLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBc0IsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxNQUFuQixHQUE0QixDQUFsRCxFQUFvRCxLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLEtBQW5CLEdBQTJCTCxPQUEvRSxFQUF3RixFQUF4RjtBQUNILFNBRkQ7QUFJSDtBQUNETSxhQUFRO0FBQ0osYUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxrREFBU0EsQ0FBQ0MsTUFBVixDQUFpQkMsSUFBbEMsRUFBdUMsNkJBQXZDO0FBRUg7O0FBdEM4QjtBQXlDcEI1QixzRUFBZiIsImZpbGUiOiIuL3NyYy9qcy9sb2FkaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cydcclxuY2xhc3MgbG9hZGluZyBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKHtrZXk6XCJsb2FkaW5nXCJ9KTtcclxuICAgIH1cclxuICAgIHByZWxvYWQoKXtcclxuICAgICAgICBsZXQgbG9hZGluZ0JhciA9IHRoaXMuYWRkLmdyYXBoaWNzKHtcclxuICAgICAgICAgICAgZmlsbFN0eWxlOntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFzc2FnZScsXCIuLi9zcmMvaW1hZ2VzL3Bhc3NhZ2UucG5nXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmxvY2snLFwiLi4vc3JjL2ltYWdlcy9ibG9ja3MucG5nXCIpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2hvdXNlJywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvaG91c2VTcHJpdGVzLnBuZ1wiLHtcclxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6NTEwLFxyXG4gICAgICAgICAgICBmcmFtZVdpZHRoOjUxMS41XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdoZXJvJywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvZ2VuZXJpY2hlcm8ucG5nXCIse1xyXG4gICAgICAgICAgICBmcmFtZUhlaWdodDo1NTAsXHJcbiAgICAgICAgICAgIGZyYW1lV2lkdGg6NDUwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdjaXR5JywgXCIuLi9zcmMvaW1hZ2VzL3Nwcml0ZXMvY2l0eXMucG5nXCIse1xyXG4gICAgICAgICAgICBmcmFtZUhlaWdodDo2MDAsXHJcbiAgICAgICAgICAgIGZyYW1lV2lkdGg6OTIwXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAocGVyY2VudCkgPT57XHJcbiAgICAgICAgICAgIGxvYWRpbmdCYXIuZmlsbFJlY3QoMCx0aGlzLmdhbWUucmVuZGVyZXIuaGVpZ2h0IC8gMix0aGlzLmdhbWUucmVuZGVyZXIud2lkdGggKiBwZXJjZW50LCA1MClcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoY29uc3RhbnRzLnNjZW5lcy5tZW51LCdIZWxsb3cgZnJvbSB0aGUgbG9hZGUgc2NlbmUnKVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/loading.js\n");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass menu extends Phaser.Scene {\n\n    constructor() {\n        super({ key: 'menu' });\n    }\n    preload() {\n        this.anims.create({\n            key: \"houseColors\",\n            frameRate: 2,\n            frames: this.anims.generateFrameNumbers(\"house\", {\n                start: 0,\n                end: 10\n            })\n        });\n        this.anims.create({\n            key: \"citiesColors\",\n            frameRate: 12,\n            frames: this.anims.generateFrameNumbers(\"city\", {\n                start: 0,\n                end: 6\n            }),\n            repeat: 0\n        });\n        this.anims.create({\n            key: \"right\",\n            frameRate: 8,\n            frames: this.anims.generateFrameNumbers(\"hero\", {\n                start: 4,\n                end: 7\n            }),\n            repeat: 0\n        });\n    }\n    create() {\n        this.city = this.add.sprite(555, 350, \"city\", 0).setDepth(0);\n        this.house = this.add.sprite(700, 350, \"house\", 0).setDepth(1);\n        this.blocks = this.add.sprite(476, 490, \"block\", 0).setDepth(2);\n        this.hero = this.add.sprite(100, 500, \"hero\", 5).setDepth(3).setScale(0.14);\n        this.passsage = this.add.sprite(500, 300, \"passage\", 0).setDepth(4);\n    }\n    update() {\n        this.city.play('citiesColors', true);\n        this.house.play('houseColors', true);\n        this.hero.play('right', true);\n        this.hero.x += 2;\n    }\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcz81YzdmIl0sIm5hbWVzIjpbIm1lbnUiLCJQaGFzZXIiLCJTY2VuZSIsImNvbnN0cnVjdG9yIiwia2V5IiwicHJlbG9hZCIsImFuaW1zIiwiY3JlYXRlIiwiZnJhbWVSYXRlIiwiZnJhbWVzIiwiZ2VuZXJhdGVGcmFtZU51bWJlcnMiLCJzdGFydCIsImVuZCIsInJlcGVhdCIsImNpdHkiLCJhZGQiLCJzcHJpdGUiLCJzZXREZXB0aCIsImhvdXNlIiwiYmxvY2tzIiwiaGVybyIsInNldFNjYWxlIiwicGFzc3NhZ2UiLCJ1cGRhdGUiLCJwbGF5IiwieCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFOLFNBQW1CQyxPQUFPQyxLQUExQixDQUErQjs7QUFFM0JDLGtCQUFhO0FBQ1QsY0FBTSxFQUFDQyxLQUFJLE1BQUwsRUFBTjtBQUNIO0FBQ0RDLGNBQVU7QUFDTixhQUFLQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0I7QUFDZEgsaUJBQUssYUFEUztBQUVkSSx1QkFBVyxDQUZHO0FBR2RDLG9CQUFRLEtBQUtILEtBQUwsQ0FBV0ksb0JBQVgsQ0FBZ0MsT0FBaEMsRUFBeUM7QUFDN0NDLHVCQUFPLENBRHNDO0FBRTdDQyxxQkFBSztBQUZ3QyxhQUF6QztBQUhNLFNBQWxCO0FBUUEsYUFBS04sS0FBTCxDQUFXQyxNQUFYLENBQWtCO0FBQ2RILGlCQUFLLGNBRFM7QUFFZEksdUJBQVcsRUFGRztBQUdkQyxvQkFBUSxLQUFLSCxLQUFMLENBQVdJLG9CQUFYLENBQWdDLE1BQWhDLEVBQXdDO0FBQzVDQyx1QkFBTyxDQURxQztBQUU1Q0MscUJBQUs7QUFGdUMsYUFBeEMsQ0FITTtBQU9kQyxvQkFBTztBQVBPLFNBQWxCO0FBU0EsYUFBS1AsS0FBTCxDQUFXQyxNQUFYLENBQWtCO0FBQ2RILGlCQUFLLE9BRFM7QUFFZEksdUJBQVcsQ0FGRztBQUdkQyxvQkFBUSxLQUFLSCxLQUFMLENBQVdJLG9CQUFYLENBQWdDLE1BQWhDLEVBQXdDO0FBQzVDQyx1QkFBTyxDQURxQztBQUU1Q0MscUJBQUs7QUFGdUMsYUFBeEMsQ0FITTtBQU9kQyxvQkFBTztBQVBPLFNBQWxCO0FBVUg7QUFDRE4sYUFBUztBQUNMLGFBQUtPLElBQUwsR0FBWSxLQUFLQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsRUFBd0IsTUFBeEIsRUFBK0IsQ0FBL0IsRUFBa0NDLFFBQWxDLENBQTJDLENBQTNDLENBQVo7QUFDQSxhQUFLQyxLQUFMLEdBQWEsS0FBS0gsR0FBTCxDQUFTQyxNQUFULENBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLEVBQXdCLE9BQXhCLEVBQWdDLENBQWhDLEVBQW1DQyxRQUFuQyxDQUE0QyxDQUE1QyxDQUFiO0FBQ0EsYUFBS0UsTUFBTCxHQUFjLEtBQUtKLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF3QixPQUF4QixFQUFnQyxDQUFoQyxFQUFtQ0MsUUFBbkMsQ0FBNEMsQ0FBNUMsQ0FBZDtBQUNBLGFBQUtHLElBQUwsR0FBWSxLQUFLTCxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsRUFBd0IsTUFBeEIsRUFBK0IsQ0FBL0IsRUFBa0NDLFFBQWxDLENBQTJDLENBQTNDLEVBQThDSSxRQUE5QyxDQUF1RCxJQUF2RCxDQUFaO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixLQUFLUCxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsRUFBd0IsU0FBeEIsRUFBa0MsQ0FBbEMsRUFBcUNDLFFBQXJDLENBQThDLENBQTlDLENBQWhCO0FBQ0g7QUFDRE0sYUFBUTtBQUNKLGFBQUtULElBQUwsQ0FBVVUsSUFBVixDQUFlLGNBQWYsRUFBOEIsSUFBOUI7QUFDQSxhQUFLTixLQUFMLENBQVdNLElBQVgsQ0FBZ0IsYUFBaEIsRUFBOEIsSUFBOUI7QUFDQSxhQUFLSixJQUFMLENBQVVJLElBQVYsQ0FBZSxPQUFmLEVBQXVCLElBQXZCO0FBQ0EsYUFBS0osSUFBTCxDQUFVSyxDQUFWLElBQWEsQ0FBYjtBQUNIOztBQTlDMEI7QUFpRGhCekIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvanMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIG1lbnUgZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OidtZW51J30pXHJcbiAgICB9XHJcbiAgICBwcmVsb2FkICgpe1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcImhvdXNlQ29sb3JzXCIsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMixcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFwiaG91c2VcIiwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDEwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IFwiY2l0aWVzQ29sb3JzXCIsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTIsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImNpdHlcIiwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDZcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHJlcGVhdDowXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiA4LFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJoZXJvXCIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiA0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiA3XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6MFxyXG4gICAgICAgIH0pOyBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgY3JlYXRlICgpe1xyXG4gICAgICAgIHRoaXMuY2l0eSA9IHRoaXMuYWRkLnNwcml0ZSg1NTUsMzUwLFwiY2l0eVwiLDApLnNldERlcHRoKDApO1xyXG4gICAgICAgIHRoaXMuaG91c2UgPSB0aGlzLmFkZC5zcHJpdGUoNzAwLDM1MCxcImhvdXNlXCIsMCkuc2V0RGVwdGgoMSk7XHJcbiAgICAgICAgdGhpcy5ibG9ja3MgPSB0aGlzLmFkZC5zcHJpdGUoNDc2LDQ5MCxcImJsb2NrXCIsMCkuc2V0RGVwdGgoMik7IFxyXG4gICAgICAgIHRoaXMuaGVybyA9IHRoaXMuYWRkLnNwcml0ZSgxMDAsNTAwLFwiaGVyb1wiLDUpLnNldERlcHRoKDMpLnNldFNjYWxlKDAuMTQpO1xyXG4gICAgICAgIHRoaXMucGFzc3NhZ2UgPSB0aGlzLmFkZC5zcHJpdGUoNTAwLDMwMCxcInBhc3NhZ2VcIiwwKS5zZXREZXB0aCg0KTsgXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLmNpdHkucGxheSgnY2l0aWVzQ29sb3JzJyx0cnVlKTtcclxuICAgICAgICB0aGlzLmhvdXNlLnBsYXkoJ2hvdXNlQ29sb3JzJyx0cnVlKTtcclxuICAgICAgICB0aGlzLmhlcm8ucGxheSgncmlnaHQnLHRydWUpXHJcbiAgICAgICAgdGhpcy5oZXJvLngrPTJcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/menu.js\n");

/***/ })

/******/ });