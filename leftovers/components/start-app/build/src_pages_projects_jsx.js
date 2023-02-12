"use strict";
(self["webpackChunkstart_app"] = self["webpackChunkstart_app"] || []).push([["src_pages_projects_jsx"],{

/***/ "./src/pages/projects.jsx":
/*!********************************!*\
  !*** ./src/pages/projects.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




const Projects = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectsGrid, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectCard, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectImage, {
    src: "https://picsum.photos/200/300",
    alt: "project image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectTitle, null, "Project Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectDescription, null, "Project Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectLink, {
    href: "#"
  }, "Project Link")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectCard, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectImage, {
    src: "https://picsum.photos/200/300",
    alt: "project image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectTitle, null, "Project Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectDescription, null, "Project Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectLink, {
    href: "#"
  }, "Project Link")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectCard, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectImage, {
    src: "https://picsum.photos/200/300",
    alt: "project image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectTitle, null, "Project Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectDescription, null, "Project Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectLink, {
    href: "#"
  }, "Project Link")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectCard, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectImage, {
    src: "https://picsum.photos/200/300",
    alt: "project image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectTitle, null, "Project Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectDescription, null, "Project Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectLink, {
    href: "#"
  }, "Project Link")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectCard, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectImage, {
    src: "https://picsum.photos/200/300",
    alt: "project image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectTitle, null, "Project Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectDescription, null, "Project Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectLink, {
    href: "#"
  }, "Project Link")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectCard, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectImage, {
    src: "https://picsum.photos/200/300",
    alt: "project image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectTitle, null, "Project Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectDescription, null, "Project Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectLink, {
    href: "#"
  }, "Project Link")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectCard, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectImage, {
    src: "https://picsum.photos/200/300",
    alt: "project image"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectTitle, null, "Project Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectDescription, null, "Project Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProjectLink, {
    href: "#"
  }, "Project Link")));
};
const ProjectsGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    height: auto;
    background-color: #f5f5f5;
`;
const ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
`;

// create the styled component ProjectImage with a max width of 100% and a max height of 300px
const ProjectImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
`;

// create the styled component ProjectTitle with a text align of center and a font size of 1.5rem
const ProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2`
    text-align: center;
    font-size: 1.5rem;
`;

// create the styled component ProjectDescription with a text align of center and a font size of 1rem
const ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
    text-align: center;
    font-size: 1rem;
`;

// create the styled component ProjectLink with a text align of center and a font size of 1rem
const ProjectLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a`
    text-align: center;
    font-size: 1rem;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ })

}]);
//# sourceMappingURL=src_pages_projects_jsx.js.map