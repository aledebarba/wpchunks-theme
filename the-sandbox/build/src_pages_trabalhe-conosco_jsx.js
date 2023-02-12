"use strict";
(self["webpackChunktheme_frontend"] = self["webpackChunktheme_frontend"] || []).push([["src_pages_trabalhe-conosco_jsx"],{

/***/ "./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wpchunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wpchunk */ "./src/wpchunk.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.8.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@4.1.0_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");




const menuItemClasses = "flex gap-x-1 justify-center items-center text-slate-100 hover:text-white transition-all duration-500 ease-in-out";
const Navbar = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "absolute z-10 left-0 top-0 w-screen h-10 bg-slate-500 flex justify-center items-center "
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "flex gap-x-4"
}, _wpchunk__WEBPACK_IMPORTED_MODULE_1__._app.primaryMenu().map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, item.object === 'page' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, item.slug === 'home' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
  to: "/",
  className: menuItemClasses
}, item.attr && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  icon: item.attr
}), item.title), item.slug !== 'home' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
  to: `/${item.slug}`,
  className: menuItemClasses
}, item.attr && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  icon: item.attr
}), item.title)), item.object === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
  href: item.url,
  target: item.target,
  className: menuItemClasses
}, item.attr && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  icon: item.attr
}), item.title)))));

/***/ }),

/***/ "./src/pages/trabalhe-conosco.jsx":
/*!****************************************!*\
  !*** ./src/pages/trabalhe-conosco.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.jsx");


const TrabalheConosco = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "page-content"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Trabalhe Conosco ")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrabalheConosco);

/***/ })

}]);
//# sourceMappingURL=src_pages_trabalhe-conosco_jsx.js.map