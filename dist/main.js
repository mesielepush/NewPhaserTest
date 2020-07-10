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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one */ \"./src/js/one.js\");\n\n\nconst config = () => {\n  var config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n      default: 'arcade',\n      arcade: {\n        gravity: {\n          y: 200\n        }\n      }\n    },\n    scene: [_one__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]\n  };\n  var game = new Phaser.Game(config);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n/* this.load.setBaseURL('http://labs.phaser.io'); *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnLmpzPzE0YWMiXSwibmFtZXMiOlsiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJ3aWR0aCIsImhlaWdodCIsInBoeXNpY3MiLCJkZWZhdWx0IiwiYXJjYWRlIiwiZ3Jhdml0eSIsInkiLCJzY2VuZSIsIm9uZSIsImdhbWUiLCJHYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLE1BQUk7QUFDZixNQUFJQSxNQUFNLEdBQUc7QUFDVEMsUUFBSSxFQUFFQyxNQUFNLENBQUNDLElBREo7QUFFVEMsU0FBSyxFQUFFLEdBRkU7QUFHVEMsVUFBTSxFQUFFLEdBSEM7QUFJVEMsV0FBTyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxRQURKO0FBRUxDLFlBQU0sRUFBRTtBQUNKQyxlQUFPLEVBQUU7QUFBRUMsV0FBQyxFQUFFO0FBQUw7QUFETDtBQUZILEtBSkE7QUFVVEMsU0FBSyxFQUFFLENBQUNDLDRDQUFEO0FBVkUsR0FBYjtBQWFBLE1BQUlDLElBQUksR0FBRyxJQUFJWCxNQUFNLENBQUNZLElBQVgsQ0FBZ0JkLE1BQWhCLENBQVg7QUFJSCxDQWxCRDs7QUFvQmVBLHFFQUFmO0FBQ0EiLCJmaWxlIjoiLi9zcmMvanMvY29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9uZSBmcm9tICcuL29uZSdcclxuY29uc3QgY29uZmlnID0gKCk9PntcclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgICAgIGdyYXZpdHk6IHsgeTogMjAwIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NlbmU6IFtvbmVdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59OyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xyXG4vKiB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnaHR0cDovL2xhYnMucGhhc2VyLmlvJyk7ICovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/config.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\nObject(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJjb25maWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBQSx1REFBTSIsImZpbGUiOiIuL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbmNvbmZpZygpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/one.js":
/*!***********************!*\
  !*** ./src/js/one.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass one extends Phaser.Scene {\n  constructor() {\n    super({\n      key: 'one'\n    });\n  }\n\n  preload() {\n    this.load.setBaseURL('http://labs.phaser.io');\n    this.load.image('sky', 'assets/skies/sky1.png');\n    this.load.image('ground', 'assets/platform.png');\n    this.load.image('star', 'assets/particles/sparkle1.png');\n    this.load.image('bomb', 'assets/bomb.png');\n    this.load.spritesheet('dude', 'assets/dude.png', {\n      frameWidth: 32,\n      frameHeight: 48\n    });\n  }\n\n  create() {\n    this.add.image(400, 300, 'sky');\n    this.add.image(400, 300, 'star');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (one);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvb25lLmpzP2E3M2MiXSwibmFtZXMiOlsib25lIiwiUGhhc2VyIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsImtleSIsInByZWxvYWQiLCJsb2FkIiwic2V0QmFzZVVSTCIsImltYWdlIiwic3ByaXRlc2hlZXQiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJjcmVhdGUiLCJhZGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTSxDQUFDQyxLQUF6QixDQUE4QjtBQUUxQkMsYUFBVyxHQUFFO0FBQ1QsVUFBTTtBQUFDQyxTQUFHLEVBQUM7QUFBTCxLQUFOO0FBQ0g7O0FBQ0RDLFNBQU8sR0FBRztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsVUFBVixDQUFxQix1QkFBckI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLEtBQVYsQ0FBZ0IsS0FBaEIsRUFBdUIsdUJBQXZCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVRSxLQUFWLENBQWdCLFFBQWhCLEVBQTBCLHFCQUExQjtBQUNBLFNBQUtGLElBQUwsQ0FBVUUsS0FBVixDQUFnQixNQUFoQixFQUF3QiwrQkFBeEI7QUFDQSxTQUFLRixJQUFMLENBQVVFLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsaUJBQXhCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVRyxXQUFWLENBQXNCLE1BQXRCLEVBQ0ksaUJBREosRUFFSTtBQUFFQyxnQkFBVSxFQUFFLEVBQWQ7QUFBa0JDLGlCQUFXLEVBQUU7QUFBL0IsS0FGSjtBQUlIOztBQUNEQyxRQUFNLEdBQUc7QUFDTCxTQUFLQyxHQUFMLENBQVNMLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEtBQXpCO0FBQ0osU0FBS0ssR0FBTCxDQUFTTCxLQUFULENBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixNQUF6QjtBQUNDOztBQW5CeUI7O0FBdUJmUixrRUFBZiIsImZpbGUiOiIuL3NyYy9qcy9vbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBvbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih7a2V5OidvbmUnfSlcclxuICAgIH1cclxuICAgIHByZWxvYWQgKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNldEJhc2VVUkwoJ2h0dHA6Ly9sYWJzLnBoYXNlci5pbycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnc2t5JywgJ2Fzc2V0cy9za2llcy9za3kxLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZ3JvdW5kJywgJ2Fzc2V0cy9wbGF0Zm9ybS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3N0YXInLCAnYXNzZXRzL3BhcnRpY2xlcy9zcGFya2xlMS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JvbWInLCAnYXNzZXRzL2JvbWIucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdkdWRlJywgXHJcbiAgICAgICAgICAgICdhc3NldHMvZHVkZS5wbmcnLFxyXG4gICAgICAgICAgICB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogNDggfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUgKCl7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoNDAwLCAzMDAsICdza3knKTtcclxuICAgIHRoaXMuYWRkLmltYWdlKDQwMCwgMzAwLCAnc3RhcicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/one.js\n");

/***/ })

/******/ });