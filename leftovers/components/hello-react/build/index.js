/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);

 // Import the stylesheet




const InfoItem = _ref => {
  let {
    title,
    value
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "info-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "component-label"
  }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "component-data"
  }, value)));
};

const HelloReact = props => {
  const {
    ajaxNonce,
    ajaxUrl
  } = props;
  const [message, instance] = props.params;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hello-react"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    class: "title"
  }, "React Component Example"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "icons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://user-images.githubusercontent.com/28566959/177224255-cb1d9437-1222-44ce-a2f9-0f35d1c51a11.png"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InfoItem, {
    title: "RXName:",
    value: "hello-react"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InfoItem, {
    title: "Nonce:",
    value: ajaxNonce
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InfoItem, {
    title: "Message:",
    value: message
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InfoItem, {
    title: "Instance:",
    value: instance
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "commands"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "command"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Develop"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "npm run start")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "command"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Build"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "npm run build")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "command"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Browser sync"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "npm run bs <path>"))))));
};

(function () {
  document.querySelectorAll('[wpchunk-hello-react]').forEach(function (el) {
    let name = el.dataset.wpchunk.replace("-", "_");
    let instance = parseInt(el.dataset.instance);
    let params = window[name][instance];
    (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HelloReact, params), el);
  });
})();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map