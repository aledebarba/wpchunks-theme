/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EditPostButton.js":
/*!*******************************!*\
  !*** ./src/EditPostButton.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPostButton": () => (/* binding */ EditPostButton)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function EditPostButton(_ref) {
  let {
    post_id,
    size,
    type = "primary"
  } = _ref;
  const styles = type == "link" ? {
    padding: 0,
    margin: 0
  } : {};
  return post_id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: type,
    isSmall: size == "small",
    href: window.location.origin + "/wp-admin/post.php?post=" + post_id + "&action=edit",
    text: "Editar o projeto",
    label: "Selecione para editar o projeto",
    style: {
      ...styles,
      border: "2px solid #fff3"
    }
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
}

/***/ }),

/***/ "./src/FullScreenImagePreview.js":
/*!***************************************!*\
  !*** ./src/FullScreenImagePreview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenImagePreview": () => (/* binding */ FullScreenImagePreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _default_screen_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-screen-preview */ "./src/default-screen-preview.jsx");
/* harmony import */ var _isNulled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNulled */ "./src/isNulled.js");
/* harmony import */ var _RenderPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RenderPreview */ "./src/RenderPreview.js");





function FullScreenImagePreview(_ref) {
  let {
    props,
    project
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, {
    className: "screen-type"
  }, (0,_isNulled__WEBPACK_IMPORTED_MODULE_3__.isNulled)(project.image) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderPreview__WEBPACK_IMPORTED_MODULE_4__.RenderPreview, {
    props: props,
    project: project
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_screen_preview__WEBPACK_IMPORTED_MODULE_2__.DefaultScreenPreview, {
    message: "Esse projeto n\xE3o possui uma imagem de capa (ou poster), por isso n\xE3o \xE9 poss\xEDvel visualizar a tela de apresenta\xE7\xE3o. Voc\xEA pode usar o bot\xE3o [ Editar Projeto ] para adicionar uma imagem de capa ao projeto."
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderPreview__WEBPACK_IMPORTED_MODULE_4__.RenderPreview, {
    props: props,
    project: project
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "screen-type--image",
    src: project.image
  })));
}

/***/ }),

/***/ "./src/HeroHeaderLayoutPreview.js":
/*!****************************************!*\
  !*** ./src/HeroHeaderLayoutPreview.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroHeaderLayoutPreview": () => (/* binding */ HeroHeaderLayoutPreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isNulled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNulled */ "./src/isNulled.js");


function HeroHeaderLayoutPreview(_ref) {
  let {
    bg = "",
    img = ""
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "layout-header-preview",
    style: {
      "--bg": bg
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "media-chooser"
  }, (0,_isNulled__WEBPACK_IMPORTED_MODULE_1__.isNulled)(img) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "no-image"
  }, "Esse projeto n\xE3o tem uma imagem de capa / poster.") : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: img,
    className: "image-preview"
  })));
}

/***/ }),

/***/ "./src/Loading.js":
/*!************************!*\
  !*** ./src/Loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const css = /*css*/`
#loading-component-cssom-styles {
    color: #0008
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 2rem;
    border: 1px solid gray;
    border-left: 3px solid dodgerblue;
    display: flex;
    gap: 16px;
    }
`;
const Loading = _ref => {
  let {
    message
  } = _ref;
  let style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(css);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "loading-component-cssom-styles"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, message || "Carregando..."));
};

/***/ }),

/***/ "./src/MormalSliderPreview.js":
/*!************************************!*\
  !*** ./src/MormalSliderPreview.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MormalSliderPreview": () => (/* binding */ MormalSliderPreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_screen_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-screen-preview */ "./src/default-screen-preview.jsx");



// TODO: ADD COLOR PICKER 

function MormalSliderPreview(_ref) {
  let {
    images
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, images.length == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_screen_preview__WEBPACK_IMPORTED_MODULE_1__.DefaultScreenPreview, {
    message: "Esse projeto não tem imagens de slide. Use o botão [ Editar Projeto ] e adicione imagens de sldeshow antes de selecionar essa opção"
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "screen-type--mormal-slider"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inner"
  }, images.map((image, index) => {
    // get a random number between -15 and 15
    let randomY = (Math.floor(Math.random() * 31) - 15).toString() + "%";
    let randomDelay = ((Math.floor(Math.random() * 5) + 1) / 10).toString() + "s";
    console.log(randomY, randomDelay);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image,
      key: index,
      className: "slider-image",
      style: {
        "--startY": randomY,
        "--delay": randomDelay
      }
    });
  }))));
}

/***/ }),

/***/ "./src/PickGradientControl.js":
/*!************************************!*\
  !*** ./src/PickGradientControl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PickGradientControl": () => (/* binding */ PickGradientControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function PickGradientControl(_ref) {
  let {
    props,
    setGradient
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "control-label",
    style: {
      marginTop: 16
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Preenchimento")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gradient-picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    __nextHasNoMargin: true,
    value: props.attributes.gradient,
    onChange: currentGradient => {
      setGradient(currentGradient);
      props.setAttributes({
        gradient: currentGradient
      });
    },
    gradients: [{
      name: "JShine",
      gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
      slug: "jshine"
    }, {
      name: "Moonlit Asteroid",
      gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
      slug: "moonlit-asteroid"
    }, {
      name: "Rastafarie",
      gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
      slug: "rastafari"
    }]
  })));
}

/***/ }),

/***/ "./src/RenderPreview.js":
/*!******************************!*\
  !*** ./src/RenderPreview.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPreview": () => (/* binding */ RenderPreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isNulled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNulled */ "./src/isNulled.js");


const RenderPreview = function (_ref) {
  let {
    children,
    props,
    project
  } = _ref;
  const {
    gradient,
    showLongTitle,
    showChannel,
    showTitle,
    showType
  } = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "screen-type",
    style: {
      pointerEvents: "all"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview-wrapper--inner"
  }, !(0,_isNulled__WEBPACK_IMPORTED_MODULE_1__.isNulled)(gradient) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "background",
    style: {
      "--bg": gradient
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "children"
  }, children), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overlay-elements"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text"
  }, showTitle === true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title"
  }, project.title.rendered), showLongTitle === true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "long-title"
  }, project.title_ext), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "info"
  }, showType === true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "type"
  }, project.tipo), showChannel === true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "channel"
  }, project.canal)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button"
  }, "Ver Projeto")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "graphics"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dots"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scroll-icon"
  }))))));
};

/***/ }),

/***/ "./src/SliderPreview.js":
/*!******************************!*\
  !*** ./src/SliderPreview.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderPreview": () => (/* binding */ SliderPreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_screen_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-screen-preview */ "./src/default-screen-preview.jsx");


function SliderPreview(_ref) {
  let {
    images
  } = _ref;
  let styles = `
        .screen-type--slider .inner {
            width: ${images.length * 100}%;
            left: 0;
            animation: slide ${images.length * 2}s ease-in-out infinite alternate 1s;
        }

        .screen-type--slider .slider-image {
            width: calc( 100% / ${images.length} );
        }
        .screen-type--slider .slider-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @keyframes slide {
    `;
  let extra = 100 / images.length;
  for (let i = 0; i < images.length - 2; i++) {
    styles += `${i / images.length * 100}% { left: ${i * -(100 + extra)}% }`;
  }
  styles += "} }";
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, styles), images.length == 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_screen_preview__WEBPACK_IMPORTED_MODULE_1__.DefaultScreenPreview, {
    message: "Esse projeto não tem imagens de slide. Use o botão [ Editar Projeto ] e adicione imagens de sldeshow antes de selecionar essa opção"
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "screen-type--slider"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inner"
  }, images.map((image, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image,
    key: index,
    className: "slider-image"
  })))));
}

/***/ }),

/***/ "./src/TextElements.js":
/*!*****************************!*\
  !*** ./src/TextElements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextElements": () => (/* binding */ TextElements)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _isNulled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNulled */ "./src/isNulled.js");




function TextElements(_ref) {
  let {
    props,
    project
  } = _ref;
  const [toggles, setToggles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: (0,_isNulled__WEBPACK_IMPORTED_MODULE_2__.isNulled)(props.attributes.showTitle) ? true : props.attributes.showTitle,
    longTitle: (0,_isNulled__WEBPACK_IMPORTED_MODULE_2__.isNulled)(props.attributes.showLongTitle) ? false : props.attributes.showLongTitle,
    channel: (0,_isNulled__WEBPACK_IMPORTED_MODULE_2__.isNulled)(props.attributes.showChannel) ? true : props.attributes.showChannel,
    type: (0,_isNulled__WEBPACK_IMPORTED_MODULE_2__.isNulled)(props.attributes.showType) ? true : props.attributes.showType
  });
  const handleToggles = (name, value) => {
    const newToggles = toggles;
    if (name == "title") {
      newToggles.longTitle = !value;
    }
    if (name == "longTitle") {
      newToggles.title = !value;
    }
    newToggles[name] = value;
    setToggles({
      ...toggles,
      ...newToggles
    });
    props.setAttributes({
      showTitle: toggles.title,
      showLongTitle: toggles.longTitle,
      showChannel: toggles.channel,
      showType: toggles.type
    });
  };
  if ((0,_isNulled__WEBPACK_IMPORTED_MODULE_2__.isNulled)(project)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-elements--wrapper"
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-elements--wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "header control-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Op\xE7\xF5es de texto")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-elements--title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: toggles.title,
    onChange: value => {
      handleToggles("title", value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Mostrar titulo"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      opacity: toggles.title ? 1 : 0.5
    }
  }, project.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-elements--long-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: toggles.longTitle,
    onChange: value => {
      handleToggles("longTitle", value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Mostrar titulo longo"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      opacity: toggles.longTitle ? 1 : 0.5
    }
  }, project.title_ext)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-elements--channel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: toggles.channel,
    onChange: value => {
      handleToggles("channel", value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Mostrar Canal"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      opacity: toggles.channel ? 1 : 0.5
    }
  }, project.canal)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-elements--type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: toggles.type,
    onChange: value => {
      handleToggles("type", value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Mostrar Tipo"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      opacity: toggles.type ? 1 : 0.5
    }
  }, project.tipo)));
}

/***/ }),

/***/ "./src/VideoPreview.js":
/*!*****************************!*\
  !*** ./src/VideoPreview.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoPreview": () => (/* binding */ VideoPreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/index.js");
/* harmony import */ var _default_screen_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-screen-preview */ "./src/default-screen-preview.jsx");
/* harmony import */ var _isNulled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNulled */ "./src/isNulled.js");




function VideoPreview(_ref) {
  let {
    videoUrl = "",
    poster = ""
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "layout-video-preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-container"
  }, (0,_isNulled__WEBPACK_IMPORTED_MODULE_3__.isNulledOrEmpty)(videoUrl) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_screen_preview__WEBPACK_IMPORTED_MODULE_2__.DefaultScreenPreview, {
    message: "N\xE3o h\xE1 nenhum video selecionado."
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !(0,_isNulled__WEBPACK_IMPORTED_MODULE_3__.isNulledOrEmpty)(poster) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: poster,
    alt: "Poster",
    className: "renderPosterImage"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_player__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: videoUrl,
    width: "100%%",
    height: "100%",
    controls: false,
    muted: true,
    autoplay: true,
    playing: true,
    config: {
      youtube: {
        playerVars: {
          showinfo: 1
        }
      },
      vimeo: {
        responsive: true
      }
    },
    vimeoConfig: {
      responsive: true,
      loop: true
    }
  }))));
}

/***/ }),

/***/ "./src/default-screen-preview.jsx":
/*!****************************************!*\
  !*** ./src/default-screen-preview.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultScreenPreview": () => (/* binding */ DefaultScreenPreview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isNulled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNulled */ "./src/isNulled.js");


const DefaultScreenPreview = _ref => {
  let {
    width = "100%",
    height = "100%",
    message = ""
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      left: 0,
      top: 0,
      position: "absolute",
      width: width,
      height: height,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='849' height='629' viewBox='0 0 849 629' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.8'%3E%3Cpath d='M402.285 101.697H259.285C254.867 101.697 251.285 105.278 251.285 109.697V395.697C251.285 400.115 254.867 403.697 259.285 403.697H402.285C406.704 403.697 410.285 400.115 410.285 395.697V109.697C410.285 105.278 406.704 101.697 402.285 101.697Z' fill='%23F2F2F2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M330.285 384.697C338.569 384.697 345.285 377.981 345.285 369.697C345.285 361.413 338.569 354.697 330.285 354.697C322.001 354.697 315.285 361.413 315.285 369.697C315.285 377.981 322.001 384.697 330.285 384.697Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M317.285 121.697C318.39 121.697 319.285 120.801 319.285 119.697C319.285 118.592 318.39 117.697 317.285 117.697C316.18 117.697 315.285 118.592 315.285 119.697C315.285 120.801 316.18 121.697 317.285 121.697Z' fill='white'/%3E%3Cpath d='M343.285 117.697H326.285C325.181 117.697 324.285 118.592 324.285 119.697C324.285 120.801 325.181 121.697 326.285 121.697H343.285C344.39 121.697 345.285 120.801 345.285 119.697C345.285 118.592 344.39 117.697 343.285 117.697Z' fill='white'/%3E%3Cpath d='M392.285 129.697H269.285C267.076 129.697 265.285 131.488 265.285 133.697V179.697C265.285 181.906 267.076 183.697 269.285 183.697H392.285C394.495 183.697 396.285 181.906 396.285 179.697V133.697C396.285 131.488 394.495 129.697 392.285 129.697Z' fill='white'/%3E%3Cmask id='mask0_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='304' y='145' width='74' height='23'%3E%3Cpath d='M377.285 145.897H304.285V167.497H377.285V145.897Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_108_3)'%3E%3Cpath d='M374.285 145.897H307.285C305.629 145.897 304.285 147.24 304.285 148.897V150.997C304.285 152.654 305.629 153.997 307.285 153.997H374.285C375.942 153.997 377.285 152.654 377.285 150.997V148.897C377.285 147.24 375.942 145.897 374.285 145.897Z' fill='%23DDE3E9'/%3E%3Cpath d='M350.285 159.397H307.285C305.629 159.397 304.285 160.74 304.285 162.397V164.497C304.285 166.154 305.629 167.497 307.285 167.497H350.285C351.942 167.497 353.285 166.154 353.285 164.497V162.397C353.285 160.74 351.942 159.397 350.285 159.397Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M286.285 168.697C292.912 168.697 298.285 163.324 298.285 156.697C298.285 150.07 292.912 144.697 286.285 144.697C279.658 144.697 274.285 150.07 274.285 156.697C274.285 163.324 279.658 168.697 286.285 168.697Z' fill='%23C5CFD6'/%3E%3Cpath d='M392.285 191.697H269.285C267.076 191.697 265.285 193.488 265.285 195.697V229.697C265.285 231.906 267.076 233.697 269.285 233.697H392.285C394.495 233.697 396.285 231.906 396.285 229.697V195.697C396.285 193.488 394.495 191.697 392.285 191.697Z' fill='white'/%3E%3Cmask id='mask1_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='304' y='204' width='74' height='18'%3E%3Cpath d='M377.285 204.297H304.285V221.097H377.285V204.297Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask1_108_3)'%3E%3Cpath d='M374.285 204.297H307.285C305.629 204.297 304.285 205.64 304.285 207.297V207.597C304.285 209.253 305.629 210.597 307.285 210.597H374.285C375.942 210.597 377.285 209.253 377.285 207.597V207.297C377.285 205.64 375.942 204.297 374.285 204.297Z' fill='%23DDE3E9'/%3E%3Cpath d='M350.285 214.797H307.285C305.629 214.797 304.285 216.14 304.285 217.797V218.097C304.285 219.753 305.629 221.097 307.285 221.097H350.285C351.942 221.097 353.285 219.753 353.285 218.097V217.797C353.285 216.14 351.942 214.797 350.285 214.797Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M286.285 224.697C292.912 224.697 298.285 219.324 298.285 212.697C298.285 206.07 292.912 200.697 286.285 200.697C279.658 200.697 274.285 206.07 274.285 212.697C274.285 219.324 279.658 224.697 286.285 224.697Z' fill='%23C5CFD6'/%3E%3Cpath d='M392.285 241.697H269.285C267.076 241.697 265.285 243.488 265.285 245.697V279.697C265.285 281.906 267.076 283.697 269.285 283.697H392.285C394.495 283.697 396.285 281.906 396.285 279.697V245.697C396.285 243.488 394.495 241.697 392.285 241.697Z' fill='white'/%3E%3Cmask id='mask2_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='304' y='254' width='74' height='18'%3E%3Cpath d='M377.285 254.297H304.285V271.097H377.285V254.297Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask2_108_3)'%3E%3Cpath d='M374.285 254.297H307.285C305.629 254.297 304.285 255.64 304.285 257.297V257.597C304.285 259.253 305.629 260.597 307.285 260.597H374.285C375.942 260.597 377.285 259.253 377.285 257.597V257.297C377.285 255.64 375.942 254.297 374.285 254.297Z' fill='%23DDE3E9'/%3E%3Cpath d='M350.285 264.797H307.285C305.629 264.797 304.285 266.14 304.285 267.797V268.097C304.285 269.753 305.629 271.097 307.285 271.097H350.285C351.942 271.097 353.285 269.753 353.285 268.097V267.797C353.285 266.14 351.942 264.797 350.285 264.797Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M286.285 274.697C292.912 274.697 298.285 269.324 298.285 262.697C298.285 256.07 292.912 250.697 286.285 250.697C279.658 250.697 274.285 256.07 274.285 262.697C274.285 269.324 279.658 274.697 286.285 274.697Z' fill='%23AFB9C5'/%3E%3Cpath d='M392.285 291.697H269.285C267.076 291.697 265.285 293.488 265.285 295.697V329.697C265.285 331.906 267.076 333.697 269.285 333.697H392.285C394.495 333.697 396.285 331.906 396.285 329.697V295.697C396.285 293.488 394.495 291.697 392.285 291.697Z' fill='white'/%3E%3Cmask id='mask3_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='304' y='304' width='74' height='18'%3E%3Cpath d='M377.285 304.297H304.285V321.097H377.285V304.297Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask3_108_3)'%3E%3Cpath d='M374.285 304.297H307.285C305.629 304.297 304.285 305.64 304.285 307.297V307.597C304.285 309.253 305.629 310.597 307.285 310.597H374.285C375.942 310.597 377.285 309.253 377.285 307.597V307.297C377.285 305.64 375.942 304.297 374.285 304.297Z' fill='%23DDE3E9'/%3E%3Cpath d='M350.285 314.797H307.285C305.629 314.797 304.285 316.14 304.285 317.797V318.097C304.285 319.753 305.629 321.097 307.285 321.097H350.285C351.942 321.097 353.285 319.753 353.285 318.097V317.797C353.285 316.14 351.942 314.797 350.285 314.797Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M286.285 324.697C292.912 324.697 298.285 319.324 298.285 312.697C298.285 306.07 292.912 300.697 286.285 300.697C279.658 300.697 274.285 306.07 274.285 312.697C274.285 319.324 279.658 324.697 286.285 324.697Z' fill='%23C5CFD6'/%3E%3Cpath d='M463.785 144.197H320.785C316.367 144.197 312.785 147.778 312.785 152.197V438.197C312.785 442.615 316.367 446.197 320.785 446.197H463.785C468.204 446.197 471.785 442.615 471.785 438.197V152.197C471.785 147.778 468.204 144.197 463.785 144.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M391.785 427.197C400.069 427.197 406.785 420.481 406.785 412.197C406.785 403.913 400.069 397.197 391.785 397.197C383.501 397.197 376.785 403.913 376.785 412.197C376.785 420.481 383.501 427.197 391.785 427.197Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M378.785 164.197C379.89 164.197 380.785 163.302 380.785 162.197C380.785 161.092 379.89 160.197 378.785 160.197C377.68 160.197 376.785 161.092 376.785 162.197C376.785 163.302 377.68 164.197 378.785 164.197Z' fill='white'/%3E%3Cpath d='M404.785 160.197H387.785C386.681 160.197 385.785 161.092 385.785 162.197C385.785 163.301 386.681 164.197 387.785 164.197H404.785C405.89 164.197 406.785 163.301 406.785 162.197C406.785 161.092 405.89 160.197 404.785 160.197Z' fill='white'/%3E%3Cpath d='M453.785 172.197H330.785C328.576 172.197 326.785 173.987 326.785 176.197V222.197C326.785 224.406 328.576 226.197 330.785 226.197H453.785C455.995 226.197 457.785 224.406 457.785 222.197V176.197C457.785 173.987 455.995 172.197 453.785 172.197Z' fill='white'/%3E%3Cmask id='mask4_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='335' y='188' width='74' height='22'%3E%3Cpath d='M408.785 188.397H335.785V209.997H408.785V188.397Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask4_108_3)'%3E%3Cpath d='M405.785 188.397H338.785C337.129 188.397 335.785 189.74 335.785 191.397V193.497C335.785 195.153 337.129 196.497 338.785 196.497H405.785C407.442 196.497 408.785 195.153 408.785 193.497V191.397C408.785 189.74 407.442 188.397 405.785 188.397Z' fill='%23DDE3E9'/%3E%3Cpath d='M381.785 201.897H338.785C337.129 201.897 335.785 203.24 335.785 204.897V206.997C335.785 208.653 337.129 209.997 338.785 209.997H381.785C383.442 209.997 384.785 208.653 384.785 206.997V204.897C384.785 203.24 383.442 201.897 381.785 201.897Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M443.785 206.197C447.651 206.197 450.785 203.063 450.785 199.197C450.785 195.331 447.651 192.197 443.785 192.197C439.919 192.197 436.785 195.331 436.785 199.197C436.785 203.063 439.919 206.197 443.785 206.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M443.785 202.197C445.442 202.197 446.785 200.854 446.785 199.197C446.785 197.54 445.442 196.197 443.785 196.197C442.128 196.197 440.785 197.54 440.785 199.197C440.785 200.854 442.128 202.197 443.785 202.197Z' fill='%23F2F2F2'/%3E%3Cpath d='M453.785 234.197H330.785C328.576 234.197 326.785 235.987 326.785 238.197V272.197C326.785 274.406 328.576 276.197 330.785 276.197H453.785C455.995 276.197 457.785 274.406 457.785 272.197V238.197C457.785 235.987 455.995 234.197 453.785 234.197Z' fill='white'/%3E%3Cmask id='mask5_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='365' y='246' width='74' height='18'%3E%3Cpath d='M438.785 246.797H365.785V263.597H438.785V246.797Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask5_108_3)'%3E%3Cpath d='M435.785 246.797H368.785C367.129 246.797 365.785 248.14 365.785 249.797V250.096C365.785 251.753 367.129 253.096 368.785 253.096H435.785C437.442 253.096 438.785 251.753 438.785 250.096V249.797C438.785 248.14 437.442 246.797 435.785 246.797Z' fill='%23DDE3E9'/%3E%3Cpath d='M411.785 257.297H368.785C367.129 257.297 365.785 258.64 365.785 260.297V260.596C365.785 262.253 367.129 263.596 368.785 263.596H411.785C413.442 263.596 414.785 262.253 414.785 260.596V260.297C414.785 258.64 413.442 257.297 411.785 257.297Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M347.785 267.197C354.412 267.197 359.785 261.824 359.785 255.197C359.785 248.57 354.412 243.197 347.785 243.197C341.158 243.197 335.785 248.57 335.785 255.197C335.785 261.824 341.158 267.197 347.785 267.197Z' fill='%23B5BDC2'/%3E%3Cpath d='M453.785 284.197H330.785C328.576 284.197 326.785 285.987 326.785 288.197V322.197C326.785 324.406 328.576 326.197 330.785 326.197H453.785C455.995 326.197 457.785 324.406 457.785 322.197V288.197C457.785 285.987 455.995 284.197 453.785 284.197Z' fill='white'/%3E%3Cmask id='mask6_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='335' y='296' width='74' height='18'%3E%3Cpath d='M408.785 296.797H335.785V313.597H408.785V296.797Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask6_108_3)'%3E%3Cpath d='M405.785 296.797H338.785C337.129 296.797 335.785 298.14 335.785 299.797V300.096C335.785 301.753 337.129 303.096 338.785 303.096H405.785C407.442 303.096 408.785 301.753 408.785 300.096V299.797C408.785 298.14 407.442 296.797 405.785 296.797Z' fill='%23DDE3E9'/%3E%3Cpath d='M381.785 307.297H338.785C337.129 307.297 335.785 308.64 335.785 310.297V310.596C335.785 312.253 337.129 313.596 338.785 313.596H381.785C383.442 313.596 384.785 312.253 384.785 310.596V310.297C384.785 308.64 383.442 307.297 381.785 307.297Z' fill='%23AFB9C5'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M443.785 312.197C447.651 312.197 450.785 309.063 450.785 305.197C450.785 301.331 447.651 298.197 443.785 298.197C439.919 298.197 436.785 301.331 436.785 305.197C436.785 309.063 439.919 312.197 443.785 312.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M443.785 308.197C445.442 308.197 446.785 306.854 446.785 305.197C446.785 303.54 445.442 302.197 443.785 302.197C442.128 302.197 440.785 303.54 440.785 305.197C440.785 306.854 442.128 308.197 443.785 308.197Z' fill='%23F2F2F2'/%3E%3Cpath d='M453.785 334.197H330.785C328.576 334.197 326.785 335.987 326.785 338.197V372.197C326.785 374.406 328.576 376.197 330.785 376.197H453.785C455.995 376.197 457.785 374.406 457.785 372.197V338.197C457.785 335.987 455.995 334.197 453.785 334.197Z' fill='white'/%3E%3Cmask id='mask7_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='365' y='346' width='74' height='18'%3E%3Cpath d='M438.785 346.797H365.785V363.597H438.785V346.797Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask7_108_3)'%3E%3Cpath d='M435.785 346.797H368.785C367.129 346.797 365.785 348.14 365.785 349.797V350.096C365.785 351.753 367.129 353.096 368.785 353.096H435.785C437.442 353.096 438.785 351.753 438.785 350.096V349.797C438.785 348.14 437.442 346.797 435.785 346.797Z' fill='%23DDE3E9'/%3E%3Cpath d='M411.785 357.297H368.785C367.129 357.297 365.785 358.64 365.785 360.297V360.596C365.785 362.253 367.129 363.596 368.785 363.596H411.785C413.442 363.596 414.785 362.253 414.785 360.596V360.297C414.785 358.64 413.442 357.297 411.785 357.297Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M347.785 367.197C354.412 367.197 359.785 361.824 359.785 355.197C359.785 348.57 354.412 343.197 347.785 343.197C341.158 343.197 335.785 348.57 335.785 355.197C335.785 361.824 341.158 367.197 347.785 367.197Z' fill='%23B5BDC2'/%3E%3Cpath d='M710.285 186.697H391.285C386.867 186.697 383.285 190.278 383.285 194.697V524.697C383.285 529.115 386.867 532.697 391.285 532.697H710.285C714.704 532.697 718.285 529.115 718.285 524.697V194.697C718.285 190.278 714.704 186.697 710.285 186.697Z' fill='%23F2F2F2'/%3E%3Cpath d='M694.285 229.697H640.285C635.867 229.697 632.285 233.278 632.285 237.697V302.697C632.285 307.115 635.867 310.697 640.285 310.697H694.285C698.704 310.697 702.285 307.115 702.285 302.697V237.697C702.285 233.278 698.704 229.697 694.285 229.697Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M667.285 276.697C676.122 276.697 683.285 269.534 683.285 260.697C683.285 251.86 676.122 244.697 667.285 244.697C658.448 244.697 651.285 251.86 651.285 260.697C651.285 269.534 658.448 276.697 667.285 276.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M689.285 280.697H645.285C643.629 280.697 642.285 282.04 642.285 283.697C642.285 285.354 643.629 286.697 645.285 286.697H689.285C690.942 286.697 692.285 285.354 692.285 283.697C692.285 282.04 690.942 280.697 689.285 280.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M681.285 290.697H653.285C651.629 290.697 650.285 292.04 650.285 293.697C650.285 295.354 651.629 296.697 653.285 296.697H681.285C682.942 296.697 684.285 295.354 684.285 293.697C684.285 292.04 682.942 290.697 681.285 290.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M383.285 194.697C383.285 190.279 386.867 186.697 391.285 186.697H710.285C714.703 186.697 718.285 190.279 718.285 194.697V213.697H383.285V194.697Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M396.285 204.697C398.494 204.697 400.285 202.906 400.285 200.697C400.285 198.488 398.494 196.697 396.285 196.697C394.076 196.697 392.285 198.488 392.285 200.697C392.285 202.906 394.076 204.697 396.285 204.697Z' fill='%23F2F2F2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M408.285 204.697C410.494 204.697 412.285 202.906 412.285 200.697C412.285 198.488 410.494 196.697 408.285 196.697C406.076 196.697 404.285 198.488 404.285 200.697C404.285 202.906 406.076 204.697 408.285 204.697Z' fill='%23F2F2F2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M420.285 204.697C422.494 204.697 424.285 202.906 424.285 200.697C424.285 198.488 422.494 196.697 420.285 196.697C418.076 196.697 416.285 198.488 416.285 200.697C416.285 202.906 418.076 204.697 420.285 204.697Z' fill='%23F2F2F2'/%3E%3Cpath d='M694.285 318.697H640.285C635.867 318.697 632.285 322.278 632.285 326.697V504.697C632.285 509.115 635.867 512.697 640.285 512.697H694.285C698.704 512.697 702.285 509.115 702.285 504.697V326.697C702.285 322.278 698.704 318.697 694.285 318.697Z' fill='white'/%3E%3Cpath d='M680.285 336.697H654.285C652.076 336.697 650.285 338.488 650.285 340.697V358.697C650.285 360.906 652.076 362.697 654.285 362.697H680.285C682.495 362.697 684.285 360.906 684.285 358.697V340.697C684.285 338.488 682.495 336.697 680.285 336.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M680.285 370.697H654.285C652.076 370.697 650.285 372.488 650.285 374.697V391.697C650.285 393.906 652.076 395.697 654.285 395.697H680.285C682.495 395.697 684.285 393.906 684.285 391.697V374.697C684.285 372.488 682.495 370.697 680.285 370.697Z' fill='%23AFB9C5'/%3E%3Cpath d='M680.285 403.697H654.285C652.076 403.697 650.285 405.488 650.285 407.697V424.697C650.285 426.906 652.076 428.697 654.285 428.697H680.285C682.495 428.697 684.285 426.906 684.285 424.697V407.697C684.285 405.488 682.495 403.697 680.285 403.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M680.285 469.697H654.285C652.076 469.697 650.285 471.488 650.285 473.697V490.697C650.285 492.906 652.076 494.697 654.285 494.697H680.285C682.495 494.697 684.285 492.906 684.285 490.697V473.697C684.285 471.488 682.495 469.697 680.285 469.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M680.285 436.697H654.285C652.076 436.697 650.285 438.488 650.285 440.697V457.697C650.285 459.906 652.076 461.697 654.285 461.697H680.285C682.495 461.697 684.285 459.906 684.285 457.697V440.697C684.285 438.488 682.495 436.697 680.285 436.697Z' fill='%23C5CFD6'/%3E%3Cpath d='M620.285 230.697H403.285C401.076 230.697 399.285 232.488 399.285 234.697V273.697C399.285 275.906 401.076 277.697 403.285 277.697H620.285C622.495 277.697 624.285 275.906 624.285 273.697V234.697C624.285 232.488 622.495 230.697 620.285 230.697Z' fill='white'/%3E%3Cmask id='mask8_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='408' y='244' width='168' height='20'%3E%3Cpath d='M575.285 244.797H408.285V263.597H575.285V244.797Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask8_108_3)'%3E%3Cpath d='M572.285 244.797H411.285C409.629 244.797 408.285 246.14 408.285 247.797V248.847C408.285 250.503 409.629 251.847 411.285 251.847H572.285C573.942 251.847 575.285 250.503 575.285 248.847V247.797C575.285 246.14 573.942 244.797 572.285 244.797Z' fill='%23DDE3E9'/%3E%3Cpath d='M517.381 256.547H411.285C409.629 256.547 408.285 257.89 408.285 259.547V260.597C408.285 262.253 409.629 263.597 411.285 263.597H517.381C519.038 263.597 520.381 262.253 520.381 260.597V259.547C520.381 257.89 519.038 256.547 517.381 256.547Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 261.197C604.105 261.197 607.239 258.063 607.239 254.197C607.239 250.331 604.105 247.197 600.239 247.197C596.373 247.197 593.239 250.331 593.239 254.197C593.239 258.063 596.373 261.197 600.239 261.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 257.197C601.896 257.197 603.239 255.854 603.239 254.197C603.239 252.54 601.896 251.197 600.239 251.197C598.582 251.197 597.239 252.54 597.239 254.197C597.239 255.854 598.582 257.197 600.239 257.197Z' fill='%23F2F2F2'/%3E%3Cpath d='M620.285 285.697H403.285C401.076 285.697 399.285 287.488 399.285 289.697V320.697C399.285 322.906 401.076 324.697 403.285 324.697H620.285C622.495 324.697 624.285 322.906 624.285 320.697V289.697C624.285 287.488 622.495 285.697 620.285 285.697Z' fill='white'/%3E%3Cmask id='mask9_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='408' y='297' width='168' height='16'%3E%3Cpath d='M575.285 297.397H408.285V312.997H575.285V297.397Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask9_108_3)'%3E%3Cpath d='M572.36 297.397H411.21C409.595 297.397 408.285 298.706 408.285 300.322C408.285 301.937 409.595 303.247 411.21 303.247H572.36C573.976 303.247 575.285 301.937 575.285 300.322C575.285 298.706 573.976 297.397 572.36 297.397Z' fill='%23DDE3E9'/%3E%3Cpath d='M517.456 307.147H411.21C409.595 307.147 408.285 308.456 408.285 310.072C408.285 311.687 409.595 312.997 411.21 312.997H517.456C519.072 312.997 520.381 311.687 520.381 310.072C520.381 308.456 519.072 307.147 517.456 307.147Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 312.197C604.105 312.197 607.239 309.063 607.239 305.197C607.239 301.331 604.105 298.197 600.239 298.197C596.373 298.197 593.239 301.331 593.239 305.197C593.239 309.063 596.373 312.197 600.239 312.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 308.197C601.896 308.197 603.239 306.854 603.239 305.197C603.239 303.54 601.896 302.197 600.239 302.197C598.582 302.197 597.239 303.54 597.239 305.197C597.239 306.854 598.582 308.197 600.239 308.197Z' fill='%23F2F2F2'/%3E%3Cpath d='M620.285 332.697H403.285C401.076 332.697 399.285 334.488 399.285 336.697V367.697C399.285 369.906 401.076 371.697 403.285 371.697H620.285C622.495 371.697 624.285 369.906 624.285 367.697V336.697C624.285 334.488 622.495 332.697 620.285 332.697Z' fill='white'/%3E%3Cmask id='mask10_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='408' y='344' width='168' height='16'%3E%3Cpath d='M575.285 344.397H408.285V359.997H575.285V344.397Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask10_108_3)'%3E%3Cpath d='M572.36 344.397H411.21C409.595 344.397 408.285 345.706 408.285 347.322C408.285 348.937 409.595 350.247 411.21 350.247H572.36C573.976 350.247 575.285 348.937 575.285 347.322C575.285 345.706 573.976 344.397 572.36 344.397Z' fill='%23DDE3E9'/%3E%3Cpath d='M517.456 354.147H411.21C409.595 354.147 408.285 355.456 408.285 357.072C408.285 358.687 409.595 359.997 411.21 359.997H517.456C519.072 359.997 520.381 358.687 520.381 357.072C520.381 355.456 519.072 354.147 517.456 354.147Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 359.197C604.105 359.197 607.239 356.063 607.239 352.197C607.239 348.331 604.105 345.197 600.239 345.197C596.373 345.197 593.239 348.331 593.239 352.197C593.239 356.063 596.373 359.197 600.239 359.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 355.197C601.896 355.197 603.239 353.854 603.239 352.197C603.239 350.54 601.896 349.197 600.239 349.197C598.582 349.197 597.239 350.54 597.239 352.197C597.239 353.854 598.582 355.197 600.239 355.197Z' fill='%23AFB9C5'/%3E%3Cpath d='M620.285 473.697H403.285C401.076 473.697 399.285 475.488 399.285 477.697V508.697C399.285 510.906 401.076 512.697 403.285 512.697H620.285C622.495 512.697 624.285 510.906 624.285 508.697V477.697C624.285 475.488 622.495 473.697 620.285 473.697Z' fill='white'/%3E%3Cmask id='mask11_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='408' y='485' width='168' height='16'%3E%3Cpath d='M575.285 485.397H408.285V500.997H575.285V485.397Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask11_108_3)'%3E%3Cpath d='M572.36 485.397H411.21C409.595 485.397 408.285 486.706 408.285 488.322C408.285 489.937 409.595 491.247 411.21 491.247H572.36C573.976 491.247 575.285 489.937 575.285 488.322C575.285 486.706 573.976 485.397 572.36 485.397Z' fill='%23DDE3E9'/%3E%3Cpath d='M517.456 495.147H411.21C409.595 495.147 408.285 496.456 408.285 498.072C408.285 499.687 409.595 500.997 411.21 500.997H517.456C519.072 500.997 520.381 499.687 520.381 498.072C520.381 496.456 519.072 495.147 517.456 495.147Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 500.197C604.105 500.197 607.239 497.063 607.239 493.197C607.239 489.331 604.105 486.197 600.239 486.197C596.373 486.197 593.239 489.331 593.239 493.197C593.239 497.063 596.373 500.197 600.239 500.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 496.197C601.896 496.197 603.239 494.854 603.239 493.197C603.239 491.54 601.896 490.197 600.239 490.197C598.582 490.197 597.239 491.54 597.239 493.197C597.239 494.854 598.582 496.197 600.239 496.197Z' fill='%23F2F2F2'/%3E%3Cpath d='M620.285 426.697H403.285C401.076 426.697 399.285 428.488 399.285 430.697V461.697C399.285 463.906 401.076 465.697 403.285 465.697H620.285C622.495 465.697 624.285 463.906 624.285 461.697V430.697C624.285 428.488 622.495 426.697 620.285 426.697Z' fill='white'/%3E%3Cmask id='mask12_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='408' y='438' width='168' height='16'%3E%3Cpath d='M575.285 438.397H408.285V453.997H575.285V438.397Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask12_108_3)'%3E%3Cpath d='M572.36 438.397H411.21C409.595 438.397 408.285 439.706 408.285 441.322C408.285 442.937 409.595 444.247 411.21 444.247H572.36C573.976 444.247 575.285 442.937 575.285 441.322C575.285 439.706 573.976 438.397 572.36 438.397Z' fill='%23DDE3E9'/%3E%3Cpath d='M517.456 448.147H411.21C409.595 448.147 408.285 449.456 408.285 451.072C408.285 452.687 409.595 453.997 411.21 453.997H517.456C519.072 453.997 520.381 452.687 520.381 451.072C520.381 449.456 519.072 448.147 517.456 448.147Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 453.197C604.105 453.197 607.239 450.063 607.239 446.197C607.239 442.331 604.105 439.197 600.239 439.197C596.373 439.197 593.239 442.331 593.239 446.197C593.239 450.063 596.373 453.197 600.239 453.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 449.197C601.896 449.197 603.239 447.854 603.239 446.197C603.239 444.54 601.896 443.197 600.239 443.197C598.582 443.197 597.239 444.54 597.239 446.197C597.239 447.854 598.582 449.197 600.239 449.197Z' fill='%23F2F2F2'/%3E%3Cpath d='M620.285 379.697H403.285C401.076 379.697 399.285 381.488 399.285 383.697V414.697C399.285 416.906 401.076 418.697 403.285 418.697H620.285C622.495 418.697 624.285 416.906 624.285 414.697V383.697C624.285 381.488 622.495 379.697 620.285 379.697Z' fill='white'/%3E%3Cmask id='mask13_108_3' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='408' y='391' width='168' height='16'%3E%3Cpath d='M575.285 391.397H408.285V406.997H575.285V391.397Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask13_108_3)'%3E%3Cpath d='M572.36 391.397H411.21C409.595 391.397 408.285 392.706 408.285 394.322C408.285 395.937 409.595 397.247 411.21 397.247H572.36C573.976 397.247 575.285 395.937 575.285 394.322C575.285 392.706 573.976 391.397 572.36 391.397Z' fill='%23DDE3E9'/%3E%3Cpath d='M517.456 401.147H411.21C409.595 401.147 408.285 402.456 408.285 404.072C408.285 405.687 409.595 406.997 411.21 406.997H517.456C519.072 406.997 520.381 405.687 520.381 404.072C520.381 402.456 519.072 401.147 517.456 401.147Z' fill='%23DDE3E9'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 406.197C604.105 406.197 607.239 403.063 607.239 399.197C607.239 395.331 604.105 392.197 600.239 392.197C596.373 392.197 593.239 395.331 593.239 399.197C593.239 403.063 596.373 406.197 600.239 406.197Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M600.239 402.197C601.896 402.197 603.239 400.854 603.239 399.197C603.239 397.54 601.896 396.197 600.239 396.197C598.582 396.197 597.239 397.54 597.239 399.197C597.239 400.854 598.582 402.197 600.239 402.197Z' fill='%23F2F2F2'/%3E%3Cpath d='M662.285 136.697C662.285 135.04 660.942 133.697 659.285 133.697C657.628 133.697 656.285 135.04 656.285 136.697V155.697C656.285 157.354 657.628 158.697 659.285 158.697C660.942 158.697 662.285 157.354 662.285 155.697V136.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M676.285 120.697C676.285 119.04 674.942 117.697 673.285 117.697C671.628 117.697 670.285 119.04 670.285 120.697V155.697C670.285 157.354 671.628 158.697 673.285 158.697C674.942 158.697 676.285 157.354 676.285 155.697V120.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M690.285 112.697C690.285 111.04 688.942 109.697 687.285 109.697C685.628 109.697 684.285 111.04 684.285 112.697V155.697C684.285 157.354 685.628 158.697 687.285 158.697C688.942 158.697 690.285 157.354 690.285 155.697V112.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M704.285 120.697C704.285 119.04 702.942 117.697 701.285 117.697C699.628 117.697 698.285 119.04 698.285 120.697V155.697C698.285 157.354 699.628 158.697 701.285 158.697C702.942 158.697 704.285 157.354 704.285 155.697V120.697Z' fill='%23DDE3E9'/%3E%3Cpath d='M718.285 104.697C718.285 103.04 716.942 101.697 715.285 101.697C713.628 101.697 712.285 103.04 712.285 104.697V155.697C712.285 157.354 713.628 158.697 715.285 158.697C716.942 158.697 718.285 157.354 718.285 155.697V104.697Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M129.827 210.58C129.827 199.441 138.829 190.324 149.827 190.324V210.58L136.159 225.324C132.271 221.719 129.827 216.431 129.827 210.58Z' fill='%23F2F2F2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M149.298 210.324H169.495C169.495 215.545 167.365 220.437 163.998 223.992C160.295 227.88 155.022 230.324 149.298 230.324C144.025 230.324 139.199 228.215 135.495 224.881L149.298 210.324Z' fill='%23AFB9C5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M169.827 210.324C169.827 199.326 160.825 190.324 149.827 190.324V210.324H169.827ZM139.827 190.324L147.827 208.324L129.827 200.324C131.607 195.658 135.604 192.104 139.827 190.324Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M167.593 285.403C165.672 287.443 162.95 288.724 159.922 288.724C154.105 288.724 149.389 284.023 149.389 278.224C149.389 272.425 154.105 267.724 159.922 267.724V248.224C143.373 248.224 129.827 261.727 129.827 278.224C129.827 294.721 143.373 308.224 159.922 308.224C168.615 308.224 176.472 304.558 181.827 298.726L167.593 285.403Z' fill='%23F2F2F2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M159.827 248.224V267.724C165.626 267.724 170.327 272.425 170.327 278.224H189.827C189.827 261.727 176.324 248.224 159.827 248.224Z' fill='%23AFB9C5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M169.924 278.224C169.924 281.631 168.319 284.659 165.827 286.615L178.089 302.224C185.226 296.636 189.827 287.973 189.827 278.224H169.924Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M615.336 130.201C613.858 131.765 611.764 132.747 609.435 132.747C604.96 132.747 601.333 129.143 601.333 124.697C601.333 120.251 604.96 116.647 609.435 116.647V101.697C596.705 101.697 586.285 112.049 586.285 124.697C586.285 137.344 596.705 147.697 609.435 147.697C616.122 147.697 622.165 144.886 626.285 140.415L615.336 130.201Z' fill='%23F2F2F2'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M609.285 101.697V116.647C613.731 116.647 617.335 120.251 617.335 124.697H632.285C632.285 112.049 621.933 101.697 609.285 101.697Z' fill='%23AFB9C5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M617.358 124.697C617.358 127.252 616.154 129.523 614.285 130.99L623.481 142.697C628.835 138.505 632.285 132.009 632.285 124.697H617.358Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M177.834 153.683C177.83 153.693 177.826 153.703 177.82 153.715C177.826 153.705 177.834 153.665 177.834 153.683Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M177.825 153.698C177.825 153.7 177.823 153.704 177.823 153.708C177.823 153.698 177.841 153.668 177.825 153.698Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M177.894 153.529C177.88 153.569 177.862 153.607 177.846 153.647C177.854 153.627 177.862 153.611 177.87 153.591C177.662 154.111 177.794 153.773 177.894 153.529Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M177.849 153.65C177.841 153.668 177.833 153.688 177.825 153.706C177.767 153.818 177.849 153.65 177.849 153.65Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M177.817 153.713C177.873 153.621 177.805 153.737 177.817 153.713Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M177.825 153.699L177.829 153.695C177.827 153.697 177.827 153.699 177.825 153.699Z' fill='%23C5CFD6'/%3E%3Cpath d='M220.827 101.697H133.827C131.618 101.697 129.827 103.488 129.827 105.697V160.697C129.827 162.906 131.618 164.697 133.827 164.697H220.827C223.036 164.697 224.827 162.906 224.827 160.697V105.697C224.827 103.488 223.036 101.697 220.827 101.697Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M165.827 119.697L137.827 164.697H193.827L165.827 119.697Z' fill='%23AFB9C5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M193.327 131.697L168.827 164.697H217.827L193.327 131.697Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M203.827 131.697C208.798 131.697 212.827 127.667 212.827 122.697C212.827 117.726 208.798 113.697 203.827 113.697C198.856 113.697 194.827 117.726 194.827 122.697C194.827 127.667 198.856 131.697 203.827 131.697Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M214.048 512.513C214.053 512.525 214.057 512.536 214.065 512.551C214.057 512.539 214.048 512.491 214.048 512.513Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M214.059 512.53C214.059 512.533 214.061 512.537 214.061 512.542C214.061 512.53 214.04 512.495 214.059 512.53Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M213.977 512.33C213.993 512.377 214.015 512.422 214.034 512.47C214.024 512.446 214.015 512.427 214.005 512.403C214.252 513.02 214.095 512.619 213.977 512.33Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M214.03 512.473C214.04 512.495 214.049 512.518 214.059 512.54C214.127 512.673 214.03 512.473 214.03 512.473Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M214.068 512.548C214.002 512.439 214.082 512.577 214.068 512.548Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M214.059 512.532L214.054 512.527C214.056 512.529 214.056 512.532 214.059 512.532Z' fill='%23C5CFD6'/%3E%3Cpath d='M134.572 421.182H293.54C296.161 421.182 298.285 423.307 298.285 425.928V527.951C298.285 530.572 296.161 532.697 293.54 532.697H134.572C131.952 532.697 129.827 530.572 129.827 527.951V425.928C129.827 423.307 131.952 421.182 134.572 421.182Z' fill='%23DDE3E9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M235.735 453.213L284.44 532.697H187.031L235.735 453.213Z' fill='%23AFB9C5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M185.518 474.504L228.576 532.697H142.46L185.518 474.504Z' fill='%23C5CFD6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M167.196 474.567C158.351 474.567 151.181 467.397 151.181 458.552C151.181 449.706 158.351 442.536 167.196 442.536C176.042 442.536 183.212 449.706 183.212 458.552C183.212 467.397 176.042 474.567 167.196 474.567Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A")`
    }
  }), (0,_isNulled__WEBPACK_IMPORTED_MODULE_1__.notNulledOrEmpty)(message) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      left: 0,
      top: 0,
      position: "absolute",
      width: width,
      height: height,
      color: "black",
      display: "grid",
      placeItems: "center",
      textAlign: "left",
      padding: "2rem"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      border: "1px solid #0002",
      borderLeft: "4px solid red",
      padding: 24,
      backgroundColor: "#fffc"
    }
  }, message)));
};

/***/ }),

/***/ "./src/isNulled.js":
/*!*************************!*\
  !*** ./src/isNulled.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNulled": () => (/* binding */ isNulled),
/* harmony export */   "isNulledOrEmpty": () => (/* binding */ isNulledOrEmpty),
/* harmony export */   "isntNulled": () => (/* binding */ isntNulled),
/* harmony export */   "notNulledOrEmpty": () => (/* binding */ notNulledOrEmpty)
/* harmony export */ });
function isNulled(value) {
  return value === undefined || value === null || value === "";
}
function isntNulled(value) {
  return !isNulled(value);
}
function isNulledOrEmpty(value) {
  return isNulled(value) || value === "";
}
function notNulledOrEmpty(value) {
  return !isNulledOrEmpty(value);
}

/***/ }),

/***/ "./node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js ***!
  \********************************************************************************/
/***/ ((module) => {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/memoize-one@5.2.1/node_modules/memoize-one/dist/memoize-one.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/memoize-one@5.2.1/node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./src/wp-chunk-flip-screen.scss":
/*!***************************************!*\
  !*** ./src/wp-chunk-flip-screen.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/.pnpm/react-fast-compare@3.2.0/node_modules/react-fast-compare/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-fast-compare@3.2.0/node_modules/react-fast-compare/index.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/Player.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/Player.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/.pnpm/react-fast-compare@3.2.0/node_modules/react-fast-compare/index.js"));

var _props = __webpack_require__(/*! ./props */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/props.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SEEK_ON_PLAY_EXPIRY = 5000;

var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "isReady", false);

    _defineProperty(_assertThisInitialized(_this), "isPlaying", false);

    _defineProperty(_assertThisInitialized(_this), "isLoading", true);

    _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);

    _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);

    _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);

    _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);

    _defineProperty(_assertThisInitialized(_this), "handlePlayerMount", function (player) {
      if (_this.player) {
        _this.progress(); // Ensure onProgress is still called in strict mode


        return; // Return here to prevent loading twice in strict mode
      }

      _this.player = player;

      _this.player.load(_this.props.url);

      _this.progress();
    });

    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
      if (!_this.player) return null;
      return _this.player[key];
    });

    _defineProperty(_assertThisInitialized(_this), "progress", function () {
      if (_this.props.url && _this.player && _this.isReady) {
        var playedSeconds = _this.getCurrentTime() || 0;

        var loadedSeconds = _this.getSecondsLoaded();

        var duration = _this.getDuration();

        if (duration) {
          var progress = {
            playedSeconds: playedSeconds,
            played: playedSeconds / duration
          };

          if (loadedSeconds !== null) {
            progress.loadedSeconds = loadedSeconds;
            progress.loaded = loadedSeconds / duration;
          } // Only call onProgress if values have changed


          if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
            _this.props.onProgress(progress);
          }

          _this.prevPlayed = progress.playedSeconds;
          _this.prevLoaded = progress.loadedSeconds;
        }
      }

      _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
      if (!_this.mounted) return;
      _this.isReady = true;
      _this.isLoading = false;
      var _this$props = _this.props,
          onReady = _this$props.onReady,
          playing = _this$props.playing,
          volume = _this$props.volume,
          muted = _this$props.muted;
      onReady();

      if (!muted && volume !== null) {
        _this.player.setVolume(volume);
      }

      if (_this.loadOnReady) {
        _this.player.load(_this.loadOnReady, true);

        _this.loadOnReady = null;
      } else if (playing) {
        _this.player.play();
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
      _this.isPlaying = true;
      _this.isLoading = false;
      var _this$props2 = _this.props,
          onStart = _this$props2.onStart,
          onPlay = _this$props2.onPlay,
          playbackRate = _this$props2.playbackRate;

      if (_this.startOnPlay) {
        if (_this.player.setPlaybackRate && playbackRate !== 1) {
          _this.player.setPlaybackRate(playbackRate);
        }

        onStart();
        _this.startOnPlay = false;
      }

      onPlay();

      if (_this.seekOnPlay) {
        _this.seekTo(_this.seekOnPlay);

        _this.seekOnPlay = null;
      }

      _this.handleDurationCheck();
    });

    _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
      _this.isPlaying = false;

      if (!_this.isLoading) {
        _this.props.onPause(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
      var _this$props3 = _this.props,
          activePlayer = _this$props3.activePlayer,
          loop = _this$props3.loop,
          onEnded = _this$props3.onEnded;

      if (activePlayer.loopOnEnded && loop) {
        _this.seekTo(0);
      }

      if (!loop) {
        _this.isPlaying = false;
        onEnded();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      var _this$props4;

      _this.isLoading = false;

      (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
      clearTimeout(_this.durationCheckTimeout);

      var duration = _this.getDuration();

      if (duration) {
        if (!_this.onDurationCalled) {
          _this.props.onDuration(duration);

          _this.onDurationCalled = true;
        }
      } else {
        _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
      // Sometimes we know loading has stopped but onReady/onPlay are never called
      // so this provides a way for players to avoid getting stuck
      _this.isLoading = false;
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.progressTimeout);
      clearTimeout(this.durationCheckTimeout);

      if (this.isReady && this.props.stopOnUnmount) {
        this.player.stop();

        if (this.player.disablePIP) {
          this.player.disablePIP();
        }
      }

      this.mounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // If there isn’t a player available, don’t do anything
      if (!this.player) {
        return;
      } // Invoke player methods based on changed props


      var _this$props5 = this.props,
          url = _this$props5.url,
          playing = _this$props5.playing,
          volume = _this$props5.volume,
          muted = _this$props5.muted,
          playbackRate = _this$props5.playbackRate,
          pip = _this$props5.pip,
          loop = _this$props5.loop,
          activePlayer = _this$props5.activePlayer,
          disableDeferredLoading = _this$props5.disableDeferredLoading;

      if (!(0, _reactFastCompare["default"])(prevProps.url, url)) {
        if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, _utils.isMediaStream)(url)) {
          console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
          this.loadOnReady = url;
          return;
        }

        this.isLoading = true;
        this.startOnPlay = true;
        this.onDurationCalled = false;
        this.player.load(url, this.isReady);
      }

      if (!prevProps.playing && playing && !this.isPlaying) {
        this.player.play();
      }

      if (prevProps.playing && !playing && this.isPlaying) {
        this.player.pause();
      }

      if (!prevProps.pip && pip && this.player.enablePIP) {
        this.player.enablePIP();
      }

      if (prevProps.pip && !pip && this.player.disablePIP) {
        this.player.disablePIP();
      }

      if (prevProps.volume !== volume && volume !== null) {
        this.player.setVolume(volume);
      }

      if (prevProps.muted !== muted) {
        if (muted) {
          this.player.mute();
        } else {
          this.player.unmute();

          if (volume !== null) {
            // Set volume next tick to fix a bug with DailyMotion
            setTimeout(function () {
              return _this2.player.setVolume(volume);
            });
          }
        }
      }

      if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
        this.player.setPlaybackRate(playbackRate);
      }

      if (prevProps.loop !== loop && this.player.setLoop) {
        this.player.setLoop(loop);
      }
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.isReady) return null;
      return this.player.getDuration();
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.isReady) return null;
      return this.player.getCurrentTime();
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.isReady) return null;
      return this.player.getSecondsLoaded();
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount, type) {
      var _this3 = this;

      // When seeking before player is ready, store value and seek later
      if (!this.isReady) {
        if (amount !== 0) {
          this.seekOnPlay = amount;
          setTimeout(function () {
            _this3.seekOnPlay = null;
          }, SEEK_ON_PLAY_EXPIRY);
        }

        return;
      }

      var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';

      if (isFraction) {
        // Convert fraction to seconds based on duration
        var duration = this.player.getDuration();

        if (!duration) {
          console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
          return;
        }

        this.player.seekTo(duration * amount);
        return;
      }

      this.player.seekTo(amount);
    }
  }, {
    key: "render",
    value: function render() {
      var Player = this.props.activePlayer;

      if (!Player) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }));
    }
  }]);

  return Player;
}(_react.Component);

exports["default"] = Player;

_defineProperty(Player, "displayName", 'Player');

_defineProperty(Player, "propTypes", _props.propTypes);

_defineProperty(Player, "defaultProps", _props.defaultProps);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/Preview.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/Preview.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_SIZE = '64px';
var cache = {};

var Preview = /*#__PURE__*/function (_Component) {
  _inherits(Preview, _Component);

  var _super = _createSuper(Preview);

  function Preview() {
    var _this;

    _classCallCheck(this, Preview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      image: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onClick();
      }
    });

    return _this;
  }

  _createClass(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.fetchImage(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          url = _this$props.url,
          light = _this$props.light;

      if (prevProps.url !== url || prevProps.light !== light) {
        this.fetchImage(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "fetchImage",
    value: function fetchImage(_ref) {
      var _this2 = this;

      var url = _ref.url,
          light = _ref.light,
          oEmbedUrl = _ref.oEmbedUrl;

      if ( /*#__PURE__*/_react["default"].isValidElement(light)) {
        return;
      }

      if (typeof light === 'string') {
        this.setState({
          image: light
        });
        return;
      }

      if (cache[url]) {
        this.setState({
          image: cache[url]
        });
        return;
      }

      this.setState({
        image: null
      });
      return window.fetch(oEmbedUrl.replace('{url}', url)).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.thumbnail_url && _this2.mounted) {
          var image = data.thumbnail_url.replace('height=100', 'height=480');

          _this2.setState({
            image: image
          });

          cache[url] = image;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          light = _this$props2.light,
          onClick = _this$props2.onClick,
          playIcon = _this$props2.playIcon,
          previewTabIndex = _this$props2.previewTabIndex;
      var image = this.state.image;

      var isElement = /*#__PURE__*/_react["default"].isValidElement(light);

      var flexCenter = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
      var styles = {
        preview: _objectSpread({
          width: '100%',
          height: '100%',
          backgroundImage: image && !isElement ? "url(".concat(image, ")") : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer'
        }, flexCenter),
        shadow: _objectSpread({
          background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
          borderRadius: ICON_SIZE,
          width: ICON_SIZE,
          height: ICON_SIZE,
          position: isElement ? 'absolute' : undefined
        }, flexCenter),
        playIcon: {
          borderStyle: 'solid',
          borderWidth: '16px 0 16px 26px',
          borderColor: 'transparent transparent transparent white',
          marginLeft: '7px'
        }
      };

      var defaultPlayIcon = /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.shadow,
        className: "react-player__shadow"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.playIcon,
        className: "react-player__play-icon"
      }));

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.preview,
        className: "react-player__preview",
        onClick: onClick,
        tabIndex: previewTabIndex,
        onKeyPress: this.handleKeyPress
      }, isElement ? light : null, playIcon || defaultPlayIcon);
    }
  }]);

  return Preview;
}(_react.Component);

exports["default"] = Preview;

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/ReactPlayer.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/ReactPlayer.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createReactPlayer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"));

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "./node_modules/.pnpm/memoize-one@5.2.1/node_modules/memoize-one/dist/memoize-one.esm.js"));

var _reactFastCompare = _interopRequireDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/.pnpm/react-fast-compare@3.2.0/node_modules/react-fast-compare/index.js"));

var _props = __webpack_require__(/*! ./props */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/props.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _Player3 = _interopRequireDefault(__webpack_require__(/*! ./Player */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/Player.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Preview = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(__webpack_require__(/*! ./Preview */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/Preview.js"));
  });
});
var IS_BROWSER = typeof window !== 'undefined' && window.document;
var IS_GLOBAL = typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.window && __webpack_require__.g.window.document;
var SUPPORTED_PROPS = Object.keys(_props.propTypes); // Return null when rendering on the server
// as Suspense is not supported yet

var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function () {
  return null;
};
var customPlayers = [];

var createReactPlayer = function createReactPlayer(players, fallback) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(ReactPlayer, _Component);

    var _super = _createSuper(ReactPlayer);

    function ReactPlayer() {
      var _this;

      _classCallCheck(this, ReactPlayer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        showPreview: !!_this.props.light
      });

      _defineProperty(_assertThisInitialized(_this), "references", {
        wrapper: function wrapper(_wrapper) {
          _this.wrapper = _wrapper;
        },
        player: function player(_player) {
          _this.player = _player;
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function (e) {
        _this.setState({
          showPreview: false
        });

        _this.props.onClickPreview(e);
      });

      _defineProperty(_assertThisInitialized(_this), "showPreview", function () {
        _this.setState({
          showPreview: true
        });
      });

      _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
        if (!_this.player) return null;
        return _this.player.getDuration();
      });

      _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
        if (!_this.player) return null;
        return _this.player.getCurrentTime();
      });

      _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
        if (!_this.player) return null;
        return _this.player.getSecondsLoaded();
      });

      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
        if (!_this.player) return null;
        return _this.player.getInternalPlayer(key);
      });

      _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
        if (!_this.player) return null;

        _this.player.seekTo(fraction, type);
      });

      _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
        _this.props.onReady(_assertThisInitialized(_this));
      });

      _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function (url) {
        for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players)); _i < _arr.length; _i++) {
          var player = _arr[_i];

          if (player.canPlay(url)) {
            return player;
          }
        }

        if (fallback) {
          return fallback;
        }

        return null;
      }));

      _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function (url, key) {
        var config = _this.props.config;
        return _deepmerge["default"].all([_props.defaultProps.config, _props.defaultProps.config[key] || {}, config, config[key] || {}]);
      }));

      _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function (url) {
        return (0, _utils.omit)(_this.props, SUPPORTED_PROPS);
      }));

      _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function (url) {
        if (!url) return null;

        var player = _this.getActivePlayer(url);

        if (!player) return null;

        var config = _this.getConfig(url, player.key);

        return /*#__PURE__*/_react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
          key: player.key,
          ref: _this.references.player,
          config: config,
          activePlayer: player.lazyPlayer || player,
          onReady: _this.handleReady
        }));
      });

      return _this;
    }

    _createClass(ReactPlayer, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var light = this.props.light;

        if (!prevProps.light && light) {
          this.setState({
            showPreview: true
          });
        }

        if (prevProps.light && !light) {
          this.setState({
            showPreview: false
          });
        }
      }
    }, {
      key: "renderPreview",
      value: function renderPreview(url) {
        if (!url) return null;
        var _this$props = this.props,
            light = _this$props.light,
            playIcon = _this$props.playIcon,
            previewTabIndex = _this$props.previewTabIndex,
            oEmbedUrl = _this$props.oEmbedUrl;
        return /*#__PURE__*/_react["default"].createElement(Preview, {
          url: url,
          light: light,
          playIcon: playIcon,
          previewTabIndex: previewTabIndex,
          oEmbedUrl: oEmbedUrl,
          onClick: this.handleClickPreview
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            url = _this$props2.url,
            style = _this$props2.style,
            width = _this$props2.width,
            height = _this$props2.height,
            fallback = _this$props2.fallback,
            Wrapper = _this$props2.wrapper;
        var showPreview = this.state.showPreview;
        var attributes = this.getAttributes(url);
        var wrapperRef = typeof Wrapper === 'string' ? this.references.wrapper : undefined;
        return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
          ref: wrapperRef,
          style: _objectSpread(_objectSpread({}, style), {}, {
            width: width,
            height: height
          })
        }, attributes), /*#__PURE__*/_react["default"].createElement(UniversalSuspense, {
          fallback: fallback
        }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
      }
    }]);

    return ReactPlayer;
  }(_react.Component), _defineProperty(_class, "displayName", 'ReactPlayer'), _defineProperty(_class, "propTypes", _props.propTypes), _defineProperty(_class, "defaultProps", _props.defaultProps), _defineProperty(_class, "addCustomPlayer", function (player) {
    customPlayers.push(player);
  }), _defineProperty(_class, "removeCustomPlayers", function () {
    customPlayers.length = 0;
  }), _defineProperty(_class, "canPlay", function (url) {
    for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players)); _i2 < _arr2.length; _i2++) {
      var _Player = _arr2[_i2];

      if (_Player.canPlay(url)) {
        return true;
      }
    }

    return false;
  }), _defineProperty(_class, "canEnablePIP", function (url) {
    for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players)); _i3 < _arr3.length; _i3++) {
      var _Player2 = _arr3[_i3];

      if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
        return true;
      }
    }

    return false;
  }), _temp;
};

exports.createReactPlayer = createReactPlayer;

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _players = _interopRequireDefault(__webpack_require__(/*! ./players */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/index.js"));

var _ReactPlayer = __webpack_require__(/*! ./ReactPlayer */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/ReactPlayer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Fall back to FilePlayer if nothing else can play the URL
var fallback = _players["default"][_players["default"].length - 1];

var _default = (0, _ReactPlayer.createReactPlayer)(_players["default"], fallback);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canPlay = exports.FLV_EXTENSIONS = exports.DASH_EXTENSIONS = exports.HLS_EXTENSIONS = exports.VIDEO_EXTENSIONS = exports.AUDIO_EXTENSIONS = exports.MATCH_URL_KALTURA = exports.MATCH_URL_VIDYARD = exports.MATCH_URL_MIXCLOUD = exports.MATCH_URL_DAILYMOTION = exports.MATCH_URL_TWITCH_CHANNEL = exports.MATCH_URL_TWITCH_VIDEO = exports.MATCH_URL_WISTIA = exports.MATCH_URL_STREAMABLE = exports.MATCH_URL_FACEBOOK_WATCH = exports.MATCH_URL_FACEBOOK = exports.MATCH_URL_VIMEO = exports.MATCH_URL_SOUNDCLOUD = exports.MATCH_URL_YOUTUBE = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
exports.MATCH_URL_YOUTUBE = MATCH_URL_YOUTUBE;
var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
exports.MATCH_URL_SOUNDCLOUD = MATCH_URL_SOUNDCLOUD;
var MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
exports.MATCH_URL_VIMEO = MATCH_URL_VIMEO;
var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
exports.MATCH_URL_FACEBOOK = MATCH_URL_FACEBOOK;
var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
exports.MATCH_URL_FACEBOOK_WATCH = MATCH_URL_FACEBOOK_WATCH;
var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
exports.MATCH_URL_STREAMABLE = MATCH_URL_STREAMABLE;
var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
exports.MATCH_URL_WISTIA = MATCH_URL_WISTIA;
var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
exports.MATCH_URL_TWITCH_VIDEO = MATCH_URL_TWITCH_VIDEO;
var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
exports.MATCH_URL_TWITCH_CHANNEL = MATCH_URL_TWITCH_CHANNEL;
var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
exports.MATCH_URL_DAILYMOTION = MATCH_URL_DAILYMOTION;
var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
exports.MATCH_URL_MIXCLOUD = MATCH_URL_MIXCLOUD;
var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
exports.MATCH_URL_VIDYARD = MATCH_URL_VIDYARD;
var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
exports.MATCH_URL_KALTURA = MATCH_URL_KALTURA;
var AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
exports.AUDIO_EXTENSIONS = AUDIO_EXTENSIONS;
var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
exports.VIDEO_EXTENSIONS = VIDEO_EXTENSIONS;
var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
exports.HLS_EXTENSIONS = HLS_EXTENSIONS;
var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
exports.DASH_EXTENSIONS = DASH_EXTENSIONS;
var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
exports.FLV_EXTENSIONS = FLV_EXTENSIONS;

var canPlayFile = function canPlayFile(url) {
  if (url instanceof Array) {
    var _iterator = _createForOfIteratorHelper(url),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (typeof item === 'string' && canPlayFile(item)) {
          return true;
        }

        if (canPlayFile(item.src)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  }

  if ((0, _utils.isMediaStream)(url) || (0, _utils.isBlobUrl)(url)) {
    return true;
  }

  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};

var canPlay = {
  youtube: function youtube(url) {
    if (url instanceof Array) {
      return url.every(function (item) {
        return MATCH_URL_YOUTUBE.test(item);
      });
    }

    return MATCH_URL_YOUTUBE.test(url);
  },
  soundcloud: function soundcloud(url) {
    return MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
  },
  vimeo: function vimeo(url) {
    return MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
  },
  facebook: function facebook(url) {
    return MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url);
  },
  streamable: function streamable(url) {
    return MATCH_URL_STREAMABLE.test(url);
  },
  wistia: function wistia(url) {
    return MATCH_URL_WISTIA.test(url);
  },
  twitch: function twitch(url) {
    return MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url);
  },
  dailymotion: function dailymotion(url) {
    return MATCH_URL_DAILYMOTION.test(url);
  },
  mixcloud: function mixcloud(url) {
    return MATCH_URL_MIXCLOUD.test(url);
  },
  vidyard: function vidyard(url) {
    return MATCH_URL_VIDYARD.test(url);
  },
  kaltura: function kaltura(url) {
    return MATCH_URL_KALTURA.test(url);
  },
  file: canPlayFile
};
exports.canPlay = canPlay;

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/DailyMotion.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/DailyMotion.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://api.dmcdn.net/all.js';
var SDK_GLOBAL = 'DM';
var SDK_GLOBAL_READY = 'dmAsyncInit';

var DailyMotion = /*#__PURE__*/function (_Component) {
  _inherits(DailyMotion, _Component);

  var _super = _createSuper(DailyMotion);

  function DailyMotion() {
    var _this;

    _classCallCheck(this, DailyMotion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "onDurationChange", function () {
      var duration = _this.getDuration();

      _this.props.onDuration(duration);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(DailyMotion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props = this.props,
          controls = _this$props.controls,
          config = _this$props.config,
          onError = _this$props.onError,
          playing = _this$props.playing;

      var _url$match = url.match(_patterns.MATCH_URL_DAILYMOTION),
          _url$match2 = _slicedToArray(_url$match, 2),
          id = _url$match2[1];

      if (this.player) {
        this.player.load(id, {
          start: (0, _utils.parseStartTime)(url),
          autoplay: playing
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (DM) {
        return DM.player;
      }).then(function (DM) {
        if (!_this2.container) return;
        var Player = DM.player;
        _this2.player = new Player(_this2.container, {
          width: '100%',
          height: '100%',
          video: id,
          params: _objectSpread({
            controls: controls,
            autoplay: _this2.props.playing,
            mute: _this2.props.muted,
            start: (0, _utils.parseStartTime)(url),
            origin: window.location.origin
          }, config.params),
          events: {
            apiready: _this2.props.onReady,
            seeked: function seeked() {
              return _this2.props.onSeek(_this2.player.currentTime);
            },
            video_end: _this2.props.onEnded,
            durationchange: _this2.onDurationChange,
            pause: _this2.props.onPause,
            playing: _this2.props.onPlay,
            waiting: _this2.props.onBuffer,
            error: function error(event) {
              return onError(event);
            }
          }
        });
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.player.duration || null;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.player.bufferedTime;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return DailyMotion;
}(_react.Component);

exports["default"] = DailyMotion;

_defineProperty(DailyMotion, "displayName", 'DailyMotion');

_defineProperty(DailyMotion, "canPlay", _patterns.canPlay.dailymotion);

_defineProperty(DailyMotion, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Facebook.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Facebook.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
var SDK_GLOBAL = 'FB';
var SDK_GLOBAL_READY = 'fbAsyncInit';
var PLAYER_ID_PREFIX = 'facebook-player-';

var Facebook = /*#__PURE__*/function (_Component) {
  _inherits(Facebook, _Component);

  var _super = _createSuper(Facebook);

  function Facebook() {
    var _this;

    _classCallCheck(this, Facebook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Facebook, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      if (isReady) {
        (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
          return FB.XFBML.parse();
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
        FB.init({
          appId: _this2.props.config.appId,
          xfbml: true,
          version: _this2.props.config.version
        });
        FB.Event.subscribe('xfbml.render', function (msg) {
          // Here we know the SDK has loaded, even if onReady/onPlay
          // is not called due to a video that cannot be embedded
          _this2.props.onLoaded();
        });
        FB.Event.subscribe('xfbml.ready', function (msg) {
          if (msg.type === 'video' && msg.id === _this2.playerID) {
            _this2.player = msg.instance;

            _this2.player.subscribe('startedPlaying', _this2.props.onPlay);

            _this2.player.subscribe('paused', _this2.props.onPause);

            _this2.player.subscribe('finishedPlaying', _this2.props.onEnded);

            _this2.player.subscribe('startedBuffering', _this2.props.onBuffer);

            _this2.player.subscribe('finishedBuffering', _this2.props.onBufferEnd);

            _this2.player.subscribe('error', _this2.props.onError);

            if (_this2.props.muted) {
              _this2.callPlayer('mute');
            } else {
              _this2.callPlayer('unmute');
            }

            _this2.props.onReady(); // For some reason Facebook have added `visibility: hidden`
            // to the iframe when autoplay fails, so here we set it back


            document.getElementById(_this2.playerID).querySelector('iframe').style.visibility = 'visible';
          }
        });
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentPosition');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.config.attributes;
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        style: style,
        id: this.playerID,
        className: "fb-video",
        "data-href": this.props.url,
        "data-autoplay": this.props.playing ? 'true' : 'false',
        "data-allowfullscreen": "true",
        "data-controls": this.props.controls ? 'true' : 'false'
      }, attributes));
    }
  }]);

  return Facebook;
}(_react.Component);

exports["default"] = Facebook;

_defineProperty(Facebook, "displayName", 'Facebook');

_defineProperty(Facebook, "canPlay", _patterns.canPlay.facebook);

_defineProperty(Facebook, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/FilePlayer.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/FilePlayer.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HAS_NAVIGATOR = typeof navigator !== 'undefined';
var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
var HLS_GLOBAL = 'Hls';
var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
var DASH_GLOBAL = 'dashjs';
var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
var FLV_GLOBAL = 'flvjs';
var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';

var FilePlayer = /*#__PURE__*/function (_Component) {
  _inherits(FilePlayer, _Component);

  var _super = _createSuper(FilePlayer);

  function FilePlayer() {
    var _this;

    _classCallCheck(this, FilePlayer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
      var _this$props;

      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      var _this$props7;

      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayBackRateChange", function (event) {
      return _this.props.onPlaybackRateChange(event.target.playbackRate);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
      var _this$props8;

      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
      var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
      onDisablePIP(e);

      if (playing) {
        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
        var webkitPresentationMode = _this.player.webkitPresentationMode;

        if (webkitPresentationMode === 'picture-in-picture') {
          _this.onEnablePIP(e);
        } else if (webkitPresentationMode === 'inline') {
          _this.onDisablePIP(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
      _this.props.onSeek(e.target.currentTime);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.player.muted = true;
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.player.muted = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
      if (typeof source === 'string') {
        return /*#__PURE__*/_react["default"].createElement("source", {
          key: index,
          src: source
        });
      }

      return /*#__PURE__*/_react["default"].createElement("source", _extends({
        key: index
      }, source));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
      return /*#__PURE__*/_react["default"].createElement("track", _extends({
        key: index
      }, track));
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (_this.player) {
        // Store previous player to be used by removeListeners()
        _this.prevPlayer = _this.player;
      }

      _this.player = player;
    });

    return _this;
  }

  _createClass(FilePlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
      this.addListeners(this.player);

      if (IS_IOS) {
        this.player.load();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
        this.removeListeners(this.prevPlayer, prevProps.url);
        this.addListeners(this.player);
      }

      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
        this.player.srcObject = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.player.src = '';
      this.removeListeners(this.player);

      if (this.hls) {
        this.hls.destroy();
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners(player) {
      var _this$props10 = this.props,
          url = _this$props10.url,
          playsinline = _this$props10.playsinline;
      player.addEventListener('play', this.onPlay);
      player.addEventListener('waiting', this.onBuffer);
      player.addEventListener('playing', this.onBufferEnd);
      player.addEventListener('pause', this.onPause);
      player.addEventListener('seeked', this.onSeek);
      player.addEventListener('ended', this.onEnded);
      player.addEventListener('error', this.onError);
      player.addEventListener('ratechange', this.onPlayBackRateChange);
      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.addEventListener('canplay', this.onReady);
      }

      if (playsinline) {
        player.setAttribute('playsinline', '');
        player.setAttribute('webkit-playsinline', '');
        player.setAttribute('x5-playsinline', '');
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(player, url) {
      player.removeEventListener('canplay', this.onReady);
      player.removeEventListener('play', this.onPlay);
      player.removeEventListener('waiting', this.onBuffer);
      player.removeEventListener('playing', this.onBufferEnd);
      player.removeEventListener('pause', this.onPause);
      player.removeEventListener('seeked', this.onSeek);
      player.removeEventListener('ended', this.onEnded);
      player.removeEventListener('error', this.onError);
      player.removeEventListener('ratechange', this.onPlayBackRateChange);
      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.removeEventListener('canplay', this.onReady);
      }
    } // Proxy methods to prevent listener leaks

  }, {
    key: "shouldUseAudio",
    value: function shouldUseAudio(props) {
      if (props.config.forceVideo) {
        return false;
      }

      if (props.config.attributes.poster) {
        return false; // Use <video> so that poster is shown
      }

      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
    }
  }, {
    key: "shouldUseHLS",
    value: function shouldUseHLS(url) {
      if (this.props.config.forceHLS) {
        return true;
      }

      if (IS_IOS) {
        return false;
      }

      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
    }
  }, {
    key: "shouldUseDASH",
    value: function shouldUseDASH(url) {
      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
    }
  }, {
    key: "shouldUseFLV",
    value: function shouldUseFLV(url) {
      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props$config = this.props.config,
          hlsVersion = _this$props$config.hlsVersion,
          hlsOptions = _this$props$config.hlsOptions,
          dashVersion = _this$props$config.dashVersion,
          flvVersion = _this$props$config.flvVersion;

      if (this.hls) {
        this.hls.destroy();
      }

      if (this.dash) {
        this.dash.reset();
      }

      if (this.shouldUseHLS(url)) {
        (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
          _this2.hls = new Hls(hlsOptions);

          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            _this2.props.onReady();
          });

          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.hls, Hls);
          });

          if (MATCH_CLOUDFLARE_STREAM.test(url)) {
            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];

            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
          } else {
            _this2.hls.loadSource(url);
          }

          _this2.hls.attachMedia(_this2.player);

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseDASH(url)) {
        (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
          _this2.dash = dashjs.MediaPlayer().create();

          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

          _this2.dash.on('error', _this2.props.onError);

          if (parseInt(dashVersion) < 3) {
            _this2.dash.getDebug().setLogToBrowserConsole(false);
          } else {
            _this2.dash.updateSettings({
              debug: {
                logLevel: dashjs.Debug.LOG_LEVEL_NONE
              }
            });
          }

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseFLV(url)) {
        (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
          _this2.flv = flvjs.createPlayer({
            type: 'flv',
            url: url
          });

          _this2.flv.attachMediaElement(_this2.player);

          _this2.flv.on(flvjs.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.flv, flvjs);
          });

          _this2.flv.load();

          _this2.props.onLoaded();
        });
      }

      if (url instanceof Array) {
        // When setting new urls (<source>) on an already loaded video,
        // HTMLMediaElement.load() is needed to reset the media element
        // and restart the media resource. Just replacing children source
        // dom nodes is not enough
        this.player.load();
      } else if ((0, _utils.isMediaStream)(url)) {
        try {
          this.player.srcObject = url;
        } catch (e) {
          this.player.src = window.URL.createObjectURL(url);
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.player.play();

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.player.removeAttribute('src');

      if (this.dash) {
        this.dash.reset();
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.player.currentTime = seconds;
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "enablePIP",
    value: function enablePIP() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
        this.player.webkitSetPresentationMode('picture-in-picture');
      }
    }
  }, {
    key: "disablePIP",
    value: function disablePIP() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
        this.player.webkitSetPresentationMode('inline');
      }
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      try {
        this.player.playbackRate = rate;
      } catch (error) {
        this.props.onError(error);
      }
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
      // so instead we use the end of the seekable timerange

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return 0;
      }

      var end = buffered.end(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return end;
    }
  }, {
    key: "getSource",
    value: function getSource(url) {
      var useHLS = this.shouldUseHLS(url);
      var useDASH = this.shouldUseDASH(url);
      var useFLV = this.shouldUseFLV(url);

      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
        return undefined;
      }

      if (MATCH_DROPBOX_URL.test(url)) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          url = _this$props11.url,
          playing = _this$props11.playing,
          loop = _this$props11.loop,
          controls = _this$props11.controls,
          muted = _this$props11.muted,
          config = _this$props11.config,
          width = _this$props11.width,
          height = _this$props11.height;
      var useAudio = this.shouldUseAudio(this.props);
      var Element = useAudio ? 'audio' : 'video';
      var style = {
        width: width === 'auto' ? width : '100%',
        height: height === 'auto' ? height : '100%'
      };
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        ref: this.ref,
        src: this.getSource(url),
        style: style,
        preload: "auto",
        autoPlay: playing || undefined,
        controls: controls,
        muted: muted,
        loop: loop
      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
    }
  }]);

  return FilePlayer;
}(_react.Component);

exports["default"] = FilePlayer;

_defineProperty(FilePlayer, "displayName", 'FilePlayer');

_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Kaltura.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Kaltura.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
var SDK_GLOBAL = 'playerjs';

var Kaltura = /*#__PURE__*/function (_Component) {
  _inherits(Kaltura, _Component);

  var _super = _createSuper(Kaltura);

  function Kaltura() {
    var _this;

    _classCallCheck(this, Kaltura);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Kaltura, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
        if (!_this2.iframe) return;
        _this2.player = new playerjs.Player(_this2.iframe);

        _this2.player.on('ready', function () {
          // An arbitrary timeout is required otherwise
          // the event listeners won’t work
          setTimeout(function () {
            _this2.player.isReady = true;

            _this2.player.setLoop(_this2.props.loop);

            if (_this2.props.muted) {
              _this2.player.mute();
            }

            _this2.addListeners(_this2.player, _this2.props);

            _this2.props.onReady();
          }, 500);
        });
      }, this.props.onError);
    }
  }, {
    key: "addListeners",
    value: function addListeners(player, props) {
      var _this3 = this;

      player.on('play', props.onPlay);
      player.on('pause', props.onPause);
      player.on('ended', props.onEnded);
      player.on('error', props.onError);
      player.on('timeupdate', function (_ref) {
        var duration = _ref.duration,
            seconds = _ref.seconds;
        _this3.duration = duration;
        _this3.currentTime = seconds;
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: this.props.url,
        frameBorder: "0",
        scrolling: "no",
        style: style,
        allow: "encrypted-media; autoplay; fullscreen;",
        referrerPolicy: "no-referrer-when-downgrade"
      });
    }
  }]);

  return Kaltura;
}(_react.Component);

exports["default"] = Kaltura;

_defineProperty(Kaltura, "displayName", 'Kaltura');

_defineProperty(Kaltura, "canPlay", _patterns.canPlay.kaltura);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Mixcloud.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Mixcloud.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://widget.mixcloud.com/media/js/widgetApi.js';
var SDK_GLOBAL = 'Mixcloud';

var Mixcloud = /*#__PURE__*/function (_Component) {
  _inherits(Mixcloud, _Component);

  var _super = _createSuper(Mixcloud);

  function Mixcloud() {
    var _this;

    _classCallCheck(this, Mixcloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {// No volume support
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Mixcloud, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Mixcloud) {
        _this2.player = Mixcloud.PlayerWidget(_this2.iframe);

        _this2.player.ready.then(function () {
          _this2.player.events.play.on(_this2.props.onPlay);

          _this2.player.events.pause.on(_this2.props.onPause);

          _this2.player.events.ended.on(_this2.props.onEnded);

          _this2.player.events.error.on(_this2.props.error);

          _this2.player.events.progress.on(function (seconds, duration) {
            _this2.currentTime = seconds;
            _this2.duration = duration;
          });

          _this2.props.onReady();
        });
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {// No volume support
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          config = _this$props.config;
      var id = url.match(_patterns.MATCH_URL_MIXCLOUD)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      var query = (0, _utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
        feed: "/".concat(id, "/")
      })); // We have to give the iframe a key here to prevent a
      // weird dialog appearing when loading a new track

      return /*#__PURE__*/_react["default"].createElement("iframe", {
        key: id,
        ref: this.ref,
        style: style,
        src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
        frameBorder: "0",
        allow: "autoplay"
      });
    }
  }]);

  return Mixcloud;
}(_react.Component);

exports["default"] = Mixcloud;

_defineProperty(Mixcloud, "displayName", 'Mixcloud');

_defineProperty(Mixcloud, "canPlay", _patterns.canPlay.mixcloud);

_defineProperty(Mixcloud, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/SoundCloud.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/SoundCloud.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://w.soundcloud.com/player/api.js';
var SDK_GLOBAL = 'SC';

var SoundCloud = /*#__PURE__*/function (_Component) {
  _inherits(SoundCloud, _Component);

  var _super = _createSuper(SoundCloud);

  function SoundCloud() {
    var _this;

    _classCallCheck(this, SoundCloud);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(SoundCloud, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (SC) {
        if (!_this2.iframe) return;
        var _SC$Widget$Events = SC.Widget.Events,
            PLAY = _SC$Widget$Events.PLAY,
            PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
            PAUSE = _SC$Widget$Events.PAUSE,
            FINISH = _SC$Widget$Events.FINISH,
            ERROR = _SC$Widget$Events.ERROR;

        if (!isReady) {
          _this2.player = SC.Widget(_this2.iframe);

          _this2.player.bind(PLAY, _this2.props.onPlay);

          _this2.player.bind(PAUSE, function () {
            var remaining = _this2.duration - _this2.currentTime;

            if (remaining < 0.05) {
              // Prevent onPause firing right before onEnded
              return;
            }

            _this2.props.onPause();
          });

          _this2.player.bind(PLAY_PROGRESS, function (e) {
            _this2.currentTime = e.currentPosition / 1000;
            _this2.fractionLoaded = e.loadedProgress;
          });

          _this2.player.bind(FINISH, function () {
            return _this2.props.onEnded();
          });

          _this2.player.bind(ERROR, function (e) {
            return _this2.props.onError(e);
          });
        }

        _this2.player.load(url, _objectSpread(_objectSpread({}, _this2.props.config.options), {}, {
          callback: function callback() {
            _this2.player.getDuration(function (duration) {
              _this2.duration = duration / 1000;

              _this2.props.onReady();
            });
          }
        }));
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seekTo', seconds * 1000);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.fractionLoaded * this.duration;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
        style: style,
        frameBorder: 0,
        allow: "autoplay"
      });
    }
  }]);

  return SoundCloud;
}(_react.Component);

exports["default"] = SoundCloud;

_defineProperty(SoundCloud, "displayName", 'SoundCloud');

_defineProperty(SoundCloud, "canPlay", _patterns.canPlay.soundcloud);

_defineProperty(SoundCloud, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Streamable.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Streamable.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
var SDK_GLOBAL = 'playerjs';

var Streamable = /*#__PURE__*/function (_Component) {
  _inherits(Streamable, _Component);

  var _super = _createSuper(Streamable);

  function Streamable() {
    var _this;

    _classCallCheck(this, Streamable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
      _this.iframe = iframe;
    });

    return _this;
  }

  _createClass(Streamable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
        if (!_this2.iframe) return;
        _this2.player = new playerjs.Player(_this2.iframe);

        _this2.player.setLoop(_this2.props.loop);

        _this2.player.on('ready', _this2.props.onReady);

        _this2.player.on('play', _this2.props.onPlay);

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', _this2.props.onSeek);

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var duration = _ref.duration,
              seconds = _ref.seconds;
          _this2.duration = duration;
          _this2.currentTime = seconds;
        });

        _this2.player.on('buffered', function (_ref2) {
          var percent = _ref2.percent;

          if (_this2.duration) {
            _this2.secondsLoaded = _this2.duration * percent;
          }
        });

        if (_this2.props.muted) {
          _this2.player.mute();
        }
      }, this.props.onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {// Nothing to do
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.url.match(_patterns.MATCH_URL_STREAMABLE)[1];
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("iframe", {
        ref: this.ref,
        src: "https://streamable.com/o/".concat(id),
        frameBorder: "0",
        scrolling: "no",
        style: style,
        allow: "encrypted-media; autoplay; fullscreen;"
      });
    }
  }]);

  return Streamable;
}(_react.Component);

exports["default"] = Streamable;

_defineProperty(Streamable, "displayName", 'Streamable');

_defineProperty(Streamable, "canPlay", _patterns.canPlay.streamable);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Twitch.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Twitch.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';
var SDK_GLOBAL = 'Twitch';
var PLAYER_ID_PREFIX = 'twitch-player-';

var Twitch = /*#__PURE__*/function (_Component) {
  _inherits(Twitch, _Component);

  var _super = _createSuper(Twitch);

  function Twitch() {
    var _this;

    _classCallCheck(this, Twitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('setMuted', true);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('setMuted', false);
    });

    return _this;
  }

  _createClass(Twitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props = this.props,
          playsinline = _this$props.playsinline,
          onError = _this$props.onError,
          config = _this$props.config,
          controls = _this$props.controls;

      var isChannel = _patterns.MATCH_URL_TWITCH_CHANNEL.test(url);

      var id = isChannel ? url.match(_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(_patterns.MATCH_URL_TWITCH_VIDEO)[1];

      if (isReady) {
        if (isChannel) {
          this.player.setChannel(id);
        } else {
          this.player.setVideo('v' + id);
        }

        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {
        _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({
          video: isChannel ? '' : id,
          channel: isChannel ? id : '',
          height: '100%',
          width: '100%',
          playsinline: playsinline,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
          controls: isChannel ? true : controls,
          time: (0, _utils.parseStartTime)(url)
        }, config.options));
        var _Twitch$Player = Twitch.Player,
            READY = _Twitch$Player.READY,
            PLAYING = _Twitch$Player.PLAYING,
            PAUSE = _Twitch$Player.PAUSE,
            ENDED = _Twitch$Player.ENDED,
            ONLINE = _Twitch$Player.ONLINE,
            OFFLINE = _Twitch$Player.OFFLINE,
            SEEK = _Twitch$Player.SEEK;

        _this2.player.addEventListener(READY, _this2.props.onReady);

        _this2.player.addEventListener(PLAYING, _this2.props.onPlay);

        _this2.player.addEventListener(PAUSE, _this2.props.onPause);

        _this2.player.addEventListener(ENDED, _this2.props.onEnded);

        _this2.player.addEventListener(SEEK, _this2.props.onSeek); // Prevent weird isLoading behaviour when streams are offline


        _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);

        _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('pause');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('seek', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        id: this.playerID
      });
    }
  }]);

  return Twitch;
}(_react.Component);

exports["default"] = Twitch;

_defineProperty(Twitch, "displayName", 'Twitch');

_defineProperty(Twitch, "canPlay", _patterns.canPlay.twitch);

_defineProperty(Twitch, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Vidyard.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Vidyard.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://play.vidyard.com/embed/v4.js';
var SDK_GLOBAL = 'VidyardV4';
var SDK_GLOBAL_READY = 'onVidyardAPI';

var Vidyard = /*#__PURE__*/function (_Component) {
  _inherits(Vidyard, _Component);

  var _super = _createSuper(Vidyard);

  function Vidyard() {
    var _this;

    _classCallCheck(this, Vidyard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(Vidyard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props = this.props,
          playing = _this$props.playing,
          config = _this$props.config,
          onError = _this$props.onError,
          onDuration = _this$props.onDuration;
      var id = url && url.match(_patterns.MATCH_URL_VIDYARD)[1];

      if (this.player) {
        this.stop();
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (Vidyard) {
        if (!_this2.container) return;
        Vidyard.api.addReadyListener(function (data, player) {
          if (_this2.player) {
            return;
          }

          _this2.player = player;

          _this2.player.on('ready', _this2.props.onReady);

          _this2.player.on('play', _this2.props.onPlay);

          _this2.player.on('pause', _this2.props.onPause);

          _this2.player.on('seek', _this2.props.onSeek);

          _this2.player.on('playerComplete', _this2.props.onEnded);
        }, id);
        Vidyard.api.renderPlayer(_objectSpread({
          uuid: id,
          container: _this2.container,
          autoplay: playing ? 1 : 0
        }, config.options));
        Vidyard.api.getPlayerMetadata(id).then(function (meta) {
          _this2.duration = meta.length_in_seconds;
          onDuration(meta.length_in_seconds);
        });
      }, onError);
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      window.VidyardV4.api.destroyPlayer(this.player);
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seek', amount);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackSpeed', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('currentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return Vidyard;
}(_react.Component);

exports["default"] = Vidyard;

_defineProperty(Vidyard, "displayName", 'Vidyard');

_defineProperty(Vidyard, "canPlay", _patterns.canPlay.vidyard);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Vimeo.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Vimeo.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://player.vimeo.com/api/player.js';
var SDK_GLOBAL = 'Vimeo';

var Vimeo = /*#__PURE__*/function (_Component) {
  _inherits(Vimeo, _Component);

  var _super = _createSuper(Vimeo);

  function Vimeo() {
    var _this;

    _classCallCheck(this, Vimeo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "duration", null);

    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.setVolume(0);
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      if (_this.props.volume !== null) {
        _this.setVolume(_this.props.volume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(Vimeo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      this.duration = null;
      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {
        if (!_this2.container) return;
        var _this2$props$config = _this2.props.config,
            playerOptions = _this2$props$config.playerOptions,
            title = _this2$props$config.title;
        _this2.player = new Vimeo.Player(_this2.container, _objectSpread({
          url: url,
          autoplay: _this2.props.playing,
          muted: _this2.props.muted,
          loop: _this2.props.loop,
          playsinline: _this2.props.playsinline,
          controls: _this2.props.controls
        }, playerOptions));

        _this2.player.ready().then(function () {
          var iframe = _this2.container.querySelector('iframe');

          iframe.style.width = '100%';
          iframe.style.height = '100%';

          if (title) {
            iframe.title = title;
          }
        })["catch"](_this2.props.onError);

        _this2.player.on('loaded', function () {
          _this2.props.onReady();

          _this2.refreshDuration();
        });

        _this2.player.on('play', function () {
          _this2.props.onPlay();

          _this2.refreshDuration();
        });

        _this2.player.on('pause', _this2.props.onPause);

        _this2.player.on('seeked', function (e) {
          return _this2.props.onSeek(e.seconds);
        });

        _this2.player.on('ended', _this2.props.onEnded);

        _this2.player.on('error', _this2.props.onError);

        _this2.player.on('timeupdate', function (_ref) {
          var seconds = _ref.seconds;
          _this2.currentTime = seconds;
        });

        _this2.player.on('progress', function (_ref2) {
          var seconds = _ref2.seconds;
          _this2.secondsLoaded = seconds;
        });

        _this2.player.on('bufferstart', _this2.props.onBuffer);

        _this2.player.on('bufferend', _this2.props.onBufferEnd);

        _this2.player.on('playbackratechange', function (e) {
          return _this2.props.onPlaybackRateChange(e.playbackRate);
        });
      }, this.props.onError);
    }
  }, {
    key: "refreshDuration",
    value: function refreshDuration() {
      var _this3 = this;

      this.player.getDuration().then(function (duration) {
        _this3.duration = duration;
      });
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.callPlayer('play');

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.callPlayer('unload');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('setCurrentTime', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.secondsLoaded;
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: this.props.url,
        ref: this.ref,
        style: style
      });
    }
  }]);

  return Vimeo;
}(_react.Component);

exports["default"] = Vimeo;

_defineProperty(Vimeo, "displayName", 'Vimeo');

_defineProperty(Vimeo, "canPlay", _patterns.canPlay.vimeo);

_defineProperty(Vimeo, "forceLoad", true);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Wistia.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Wistia.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
var SDK_GLOBAL = 'Wistia';
var PLAYER_ID_PREFIX = 'wistia-player-';

var Wistia = /*#__PURE__*/function (_Component) {
  _inherits(Wistia, _Component);

  var _super = _createSuper(Wistia);

  function Wistia() {
    var _this;

    _classCallCheck(this, Wistia);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props;

      return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlaybackRateChange", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPlaybackRateChange.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unmute');
    });

    return _this;
  }

  _createClass(Wistia, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props6 = this.props,
          playing = _this$props6.playing,
          muted = _this$props6.muted,
          controls = _this$props6.controls,
          _onReady = _this$props6.onReady,
          config = _this$props6.config,
          onError = _this$props6.onError;
      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Wistia) {
        if (config.customControls) {
          config.customControls.forEach(function (control) {
            return Wistia.defineControl(control);
          });
        }

        window._wq = window._wq || [];

        window._wq.push({
          id: _this2.playerID,
          options: _objectSpread({
            autoPlay: playing,
            silentAutoPlay: 'allow',
            muted: muted,
            controlsVisibleOnLoad: controls,
            fullscreenButton: controls,
            playbar: controls,
            playbackRateControl: controls,
            qualityControl: controls,
            volumeControl: controls,
            settingsControl: controls,
            smallPlayButton: controls
          }, config.options),
          onReady: function onReady(player) {
            _this2.player = player;

            _this2.unbind();

            _this2.player.bind('play', _this2.onPlay);

            _this2.player.bind('pause', _this2.onPause);

            _this2.player.bind('seek', _this2.onSeek);

            _this2.player.bind('end', _this2.onEnded);

            _this2.player.bind('playbackratechange', _this2.onPlaybackRateChange);

            _onReady();
          }
        });
      }, onError);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.player.unbind('play', this.onPlay);
      this.player.unbind('pause', this.onPause);
      this.player.unbind('seek', this.onSeek);
      this.player.unbind('end', this.onEnded);
      this.player.unbind('playbackratechange', this.onPlaybackRateChange);
    } // Proxy methods to prevent listener leaks

  }, {
    key: "play",
    value: function play() {
      this.callPlayer('play');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pause');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.unbind();
      this.callPlayer('remove');
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.callPlayer('time', seconds);
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('volume', fraction);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('playbackRate', rate);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('duration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('time');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var url = this.props.url;
      var videoID = url && url.match(_patterns.MATCH_URL_WISTIA)[1];
      var className = "wistia_embed wistia_async_".concat(videoID);
      var style = {
        width: '100%',
        height: '100%'
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.playerID,
        key: videoID,
        className: className,
        style: style
      });
    }
  }]);

  return Wistia;
}(_react.Component);

exports["default"] = Wistia;

_defineProperty(Wistia, "displayName", 'Wistia');

_defineProperty(Wistia, "canPlay", _patterns.canPlay.wistia);

_defineProperty(Wistia, "loopOnEnded", true);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/YouTube.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/YouTube.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://www.youtube.com/iframe_api';
var SDK_GLOBAL = 'YT';
var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
var NOCOOKIE_HOST = 'https://www.youtube-nocookie.com';

var YouTube = /*#__PURE__*/function (_Component) {
  _inherits(YouTube, _Component);

  var _super = _createSuper(YouTube);

  function YouTube() {
    var _this;

    _classCallCheck(this, YouTube);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "parsePlaylist", function (url) {
      if (url instanceof Array) {
        return {
          listType: 'playlist',
          playlist: url.map(_this.getID).join(',')
        };
      }

      if (MATCH_PLAYLIST.test(url)) {
        var _url$match = url.match(MATCH_PLAYLIST),
            _url$match2 = _slicedToArray(_url$match, 2),
            playlistId = _url$match2[1];

        return {
          listType: 'playlist',
          list: playlistId.replace(/^UC/, 'UU')
        };
      }

      if (MATCH_USER_UPLOADS.test(url)) {
        var _url$match3 = url.match(MATCH_USER_UPLOADS),
            _url$match4 = _slicedToArray(_url$match3, 2),
            username = _url$match4[1];

        return {
          listType: 'user_uploads',
          list: username
        };
      }

      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "onStateChange", function (event) {
      var data = event.data;
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onBuffer = _this$props.onBuffer,
          onBufferEnd = _this$props.onBufferEnd,
          onEnded = _this$props.onEnded,
          onReady = _this$props.onReady,
          loop = _this$props.loop,
          _this$props$config = _this$props.config,
          playerVars = _this$props$config.playerVars,
          onUnstarted = _this$props$config.onUnstarted;
      var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
          UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED,
          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
          CUED = _window$SDK_GLOBAL$Pl.CUED;
      if (data === UNSTARTED) onUnstarted();

      if (data === PLAYING) {
        onPlay();
        onBufferEnd();
      }

      if (data === PAUSED) onPause();
      if (data === BUFFERING) onBuffer();

      if (data === ENDED) {
        var isPlaylist = !!_this.callPlayer('getPlaylist'); // Only loop manually if not playing a playlist

        if (loop && !isPlaylist) {
          if (playerVars.start) {
            _this.seekTo(playerVars.start);
          } else {
            _this.play();
          }
        }

        onEnded();
      }

      if (data === CUED) onReady();
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unMute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(YouTube, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "getID",
    value: function getID(url) {
      if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
        return null;
      }

      return url.match(_patterns.MATCH_URL_YOUTUBE)[1];
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props2 = this.props,
          playing = _this$props2.playing,
          muted = _this$props2.muted,
          playsinline = _this$props2.playsinline,
          controls = _this$props2.controls,
          loop = _this$props2.loop,
          config = _this$props2.config,
          _onError = _this$props2.onError;
      var playerVars = config.playerVars,
          embedOptions = config.embedOptions;
      var id = this.getID(url);

      if (isReady) {
        if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
          this.player.loadPlaylist(this.parsePlaylist(url));
          return;
        }

        this.player.cueVideoById({
          videoId: id,
          startSeconds: (0, _utils.parseStartTime)(url) || playerVars.start,
          endSeconds: (0, _utils.parseEndTime)(url) || playerVars.end
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
        return YT.loaded;
      }).then(function (YT) {
        if (!_this2.container) return;
        _this2.player = new YT.Player(_this2.container, _objectSpread({
          width: '100%',
          height: '100%',
          videoId: id,
          playerVars: _objectSpread(_objectSpread({
            autoplay: playing ? 1 : 0,
            mute: muted ? 1 : 0,
            controls: controls ? 1 : 0,
            start: (0, _utils.parseStartTime)(url),
            end: (0, _utils.parseEndTime)(url),
            origin: window.location.origin,
            playsinline: playsinline ? 1 : 0
          }, _this2.parsePlaylist(url)), playerVars),
          events: {
            onReady: function onReady() {
              if (loop) {
                _this2.player.setLoop(true); // Enable playlist looping

              }

              _this2.props.onReady();
            },
            onPlaybackRateChange: function onPlaybackRateChange(event) {
              return _this2.props.onPlaybackRateChange(event.data);
            },
            onStateChange: _this2.onStateChange,
            onError: function onError(event) {
              return _onError(event.data);
            }
          },
          host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : undefined
        }, embedOptions));
      }, _onError);

      if (embedOptions.events) {
        console.warn('Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause');
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('playVideo');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pauseVideo');
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!document.body.contains(this.callPlayer('getIframe'))) return;
      this.callPlayer('stopVideo');
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seekTo', amount);

      if (!this.props.playing) {
        this.pause();
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return YouTube;
}(_react.Component);

exports["default"] = YouTube;

_defineProperty(YouTube, "displayName", 'YouTube');

_defineProperty(YouTube, "canPlay", _patterns.canPlay.youtube);

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/patterns.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  key: 'youtube',
  name: 'YouTube',
  canPlay: _patterns.canPlay.youtube,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./YouTube */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/YouTube.js"));
    });
  })
}, {
  key: 'soundcloud',
  name: 'SoundCloud',
  canPlay: _patterns.canPlay.soundcloud,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./SoundCloud */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/SoundCloud.js"));
    });
  })
}, {
  key: 'vimeo',
  name: 'Vimeo',
  canPlay: _patterns.canPlay.vimeo,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Vimeo */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Vimeo.js"));
    });
  })
}, {
  key: 'facebook',
  name: 'Facebook',
  canPlay: _patterns.canPlay.facebook,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Facebook */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Facebook.js"));
    });
  })
}, {
  key: 'streamable',
  name: 'Streamable',
  canPlay: _patterns.canPlay.streamable,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Streamable */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Streamable.js"));
    });
  })
}, {
  key: 'wistia',
  name: 'Wistia',
  canPlay: _patterns.canPlay.wistia,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Wistia */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Wistia.js"));
    });
  })
}, {
  key: 'twitch',
  name: 'Twitch',
  canPlay: _patterns.canPlay.twitch,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Twitch */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Twitch.js"));
    });
  })
}, {
  key: 'dailymotion',
  name: 'DailyMotion',
  canPlay: _patterns.canPlay.dailymotion,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./DailyMotion */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/DailyMotion.js"));
    });
  })
}, {
  key: 'mixcloud',
  name: 'Mixcloud',
  canPlay: _patterns.canPlay.mixcloud,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Mixcloud */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Mixcloud.js"));
    });
  })
}, {
  key: 'vidyard',
  name: 'Vidyard',
  canPlay: _patterns.canPlay.vidyard,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Vidyard */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Vidyard.js"));
    });
  })
}, {
  key: 'kaltura',
  name: 'Kaltura',
  canPlay: _patterns.canPlay.kaltura,
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./Kaltura */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/Kaltura.js"));
    });
  })
}, {
  key: 'file',
  name: 'FilePlayer',
  canPlay: _patterns.canPlay.file,
  canEnablePIP: function canEnablePIP(url) {
    return _patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, _utils.supportsWebKitPresentationMode)()) && !_patterns.AUDIO_EXTENSIONS.test(url);
  },
  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(__webpack_require__(/*! ./FilePlayer */ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/players/FilePlayer.js"));
    });
  })
}];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/props.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/props.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    number = _propTypes["default"].number,
    array = _propTypes["default"].array,
    oneOfType = _propTypes["default"].oneOfType,
    shape = _propTypes["default"].shape,
    object = _propTypes["default"].object,
    func = _propTypes["default"].func,
    node = _propTypes["default"].node;
var propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string, object]),
  playIcon: node,
  previewTabIndex: number,
  fallback: node,
  oEmbedUrl: string,
  wrapper: oneOfType([string, func, shape({
    render: func.isRequired
  })]),
  config: shape({
    soundcloud: shape({
      options: object
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object
    }),
    dailymotion: shape({
      params: object
    }),
    vimeo: shape({
      playerOptions: object,
      title: string
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    }),
    vidyard: shape({
      options: object
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlaybackRateChange: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func
};
exports.propTypes = propTypes;

var noop = function noop() {};

var defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: 'div',
  previewTabIndex: 0,
  oEmbedUrl: 'https://noembed.com/embed?url={url}',
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: noop
    },
    facebook: {
      appId: '1309697205772819',
      version: 'v3.3',
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false
      }
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      title: null
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: '1.1.4',
      dashVersion: '3.1.3',
      flvVersion: '1.5.0'
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onPlaybackRateChange: noop,
  onProgress: noop,
  onClickPreview: noop,
  onEnablePIP: noop,
  onDisablePIP: noop
};
exports.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-player@2.11.0/node_modules/react-player/lib/utils.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseStartTime = parseStartTime;
exports.parseEndTime = parseEndTime;
exports.randomString = randomString;
exports.queryString = queryString;
exports.getSDK = getSDK;
exports.getConfig = getConfig;
exports.omit = omit;
exports.callPlayer = callPlayer;
exports.isMediaStream = isMediaStream;
exports.isBlobUrl = isBlobUrl;
exports.supportsWebKitPresentationMode = supportsWebKitPresentationMode;

var _loadScript = _interopRequireDefault(__webpack_require__(/*! load-script */ "./node_modules/.pnpm/load-script@1.0.0/node_modules/load-script/index.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! deepmerge */ "./node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
var MATCH_NUMERIC = /^\d+$/; // Parse YouTube URL for a start time param, ie ?t=1h14m30s
// and return the start time in seconds

function parseTimeParam(url, pattern) {
  if (url instanceof Array) {
    return undefined;
  }

  var match = url.match(pattern);

  if (match) {
    var stamp = match[1];

    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }

    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }

  return undefined;
}

function parseTimeString(stamp) {
  var seconds = 0;
  var array = MATCH_START_STAMP.exec(stamp);

  while (array !== null) {
    var _array = array,
        _array2 = _slicedToArray(_array, 3),
        count = _array2[1],
        period = _array2[2];

    if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
    if (period === 'm') seconds += parseInt(count, 10) * 60;
    if (period === 's') seconds += parseInt(count, 10);
    array = MATCH_START_STAMP.exec(stamp);
  }

  return seconds;
}

function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}

function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
} // http://stackoverflow.com/a/38622545


function randomString() {
  return Math.random().toString(36).substr(2, 5);
}

function queryString(object) {
  return Object.keys(object).map(function (key) {
    return "".concat(key, "=").concat(object[key]);
  }).join('&');
}

function getGlobal(key) {
  if (window[key]) {
    return window[key];
  }

  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }

  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }

  return null;
} // Util function to load an external SDK
// or return the SDK if it is already loaded


var requests = {};

function getSDK(url, sdkGlobal) {
  var sdkReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isLoaded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };
  var fetchScript = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _loadScript["default"];
  var existingGlobal = getGlobal(sdkGlobal);

  if (existingGlobal && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }

  return new Promise(function (resolve, reject) {
    // If we are already loading the SDK, add the resolve and reject
    // functions to the existing array of requests
    if (requests[url]) {
      requests[url].push({
        resolve: resolve,
        reject: reject
      });
      return;
    }

    requests[url] = [{
      resolve: resolve,
      reject: reject
    }];

    var onLoaded = function onLoaded(sdk) {
      // When loaded, resolve all pending request promises
      requests[url].forEach(function (request) {
        return request.resolve(sdk);
      });
    };

    if (sdkReady) {
      var previousOnReady = window[sdkReady];

      window[sdkReady] = function () {
        if (previousOnReady) previousOnReady();
        onLoaded(getGlobal(sdkGlobal));
      };
    }

    fetchScript(url, function (err) {
      if (err) {
        // Loading the SDK failed – reject all requests and
        // reset the array of requests for this SDK
        requests[url].forEach(function (request) {
          return request.reject(err);
        });
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
}

function getConfig(props, defaultProps) {
  return (0, _deepmerge["default"])(defaultProps.config, props.config);
}

function omit(object) {
  var _ref;

  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var omitKeys = (_ref = []).concat.apply(_ref, arrays);

  var output = {};
  var keys = Object.keys(object);

  for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
    var key = _keys[_i2];

    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key];
    }
  }

  return output;
}

function callPlayer(method) {
  var _this$player;

  // Util method for calling a method on this.player
  // but guard against errors and console.warn instead
  if (!this.player || !this.player[method]) {
    var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c \u2013 ");

    if (!this.player) {
      message += 'The player was not available';
    } else if (!this.player[method]) {
      message += 'The method was not available';
    }

    console.warn(message, 'font-weight: bold', '');
    return null;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return (_this$player = this.player)[method].apply(_this$player, args);
}

function isMediaStream(url) {
  return typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream;
}

function isBlobUrl(url) {
  return /^blob:/.test(url);
}

function supportsWebKitPresentationMode() {
  var video = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('video');
  // Check if Safari supports PiP, and is not on mobile (other than iPad)
  // iPhone safari appears to "support" PiP through the check, however PiP does not function
  var notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
  return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function' && notMobile;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./src/wp-chunk-flip-screen.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wp_chunk_flip_screen_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wp-chunk-flip-screen.scss */ "./src/wp-chunk-flip-screen.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_screen_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-screen-preview */ "./src/default-screen-preview.jsx");
/* harmony import */ var _RenderPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RenderPreview */ "./src/RenderPreview.js");
/* harmony import */ var _SliderPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SliderPreview */ "./src/SliderPreview.js");
/* harmony import */ var _TextElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextElements */ "./src/TextElements.js");
/* harmony import */ var _isNulled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isNulled */ "./src/isNulled.js");
/* harmony import */ var _EditPostButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditPostButton */ "./src/EditPostButton.js");
/* harmony import */ var _HeroHeaderLayoutPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeroHeaderLayoutPreview */ "./src/HeroHeaderLayoutPreview.js");
/* harmony import */ var _VideoPreview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VideoPreview */ "./src/VideoPreview.js");
/* harmony import */ var _PickGradientControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PickGradientControl */ "./src/PickGradientControl.js");
/* harmony import */ var _MormalSliderPreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MormalSliderPreview */ "./src/MormalSliderPreview.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Loading */ "./src/Loading.js");
/* harmony import */ var _FullScreenImagePreview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FullScreenImagePreview */ "./src/FullScreenImagePreview.js");
















const {
  useSelect
} = wp.data;
wp.blocks.registerBlockType("wpchunks/wp-chunk-flip-screen", {
  title: "WPC FullScreen",
  icon: "desktop",
  category: "common",
  attributes: {
    projectId: {
      type: "string"
    },
    selectedVideo: {
      type: "string"
    },
    screenLayout: {
      type: "string"
    },
    gradient: {
      type: "string"
    },
    showTitle: {
      type: "boolean"
    },
    showLongTitle: {
      type: "boolean"
    },
    showChannel: {
      type: "boolean"
    },
    showType: {
      type: "boolean"
    },
    showLink: {
      type: "boolean"
    },
    linkAction: {
      type: "string"
    },
    linkTarget: {
      type: "string"
    },
    mediaId: {
      type: "string"
    }
  },
  edit: props => FrontEnd(props),
  save: function (props) {
    return null;
  }
});
const FrontEnd = props => {
  const [option, setOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.attributes.screenLayout);
  const [gradient, setGradient] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.attributes.gradient);
  const initialProject = {
    id: props.attributes.projectId,
    selectedVideo: props.attributes.selectedVideo,
    videos: [],
    image: "",
    images: "",
    editLink: "",
    title: "",
    showTitle: props.attributes.showTitle || true,
    showType: props.attributes.showType || true,
    showChannel: props.attributes.showChannel || true,
    showLink: props.attributes.showLink || true,
    linkAction: props.attributes.linkAction || "play",
    linkTarget: props.attributes.linkTarget || "_blank",
    mediaId: props.attributes.mediaId || "",
    render: false
  };
  const [project, setProject] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialProject);
  function getCurrentProject(projectId) {
    const res = projects.find(project => project.id == projectId);
    return res;
  }
  function extractProjectVideos(projectId) {
    if (projectId == null) return [];
    let current = getCurrentProject(projectId);
    let projectVideos = [];
    projectVideos.push({
      label: "Selecione um video",
      value: ""
    });
    if (current.youtube !== "") {
      projectVideos.push({
        label: "Youtube",
        value: current.youtube
      });
    }
    if (current.vimeo !== "") {
      projectVideos.push({
        label: "VIMEO",
        value: current.vimeo
      });
    }
    if (current.video_url !== "") {
      projectVideos.push({
        label: "URL Externa",
        value: current.video_url
      });
    }
    if (current.video) {
      projectVideos.push({
        label: "Video da Galeria",
        value: current.video
      });
    }
    return projectVideos;
  }
  const handleSelectProjectChange = value => {
    let newProjectValues = project;
    let newProject = getCurrentProject(value);
    if (newProject === undefined) {
      newProjectValues = {
        ...initialProject,
        render: true,
        id: ""
      };
      props.setAttributes({
        projectId: ""
      });
      setOption("");
    } else {
      newProjectValues.id = value;
      newProjectValues.videos = extractProjectVideos(value);
      newProjectValues.image = newProject?.poster ? newProject.poster : "";
      newProjectValues.images = newProject?.slider_media ? newProject.slider_media.split(" ") : [];
      newProjectValues.render = true;
      props.setAttributes({
        projectId: value
      });
    }
    setProject({
      ...project,
      ...newProjectValues
    });
    console.log(project.videos);
  };
  const handleChangeOption = item => {
    let value = item.selectedItem.key;
    setOption(value);
    props.setAttributes({
      screenLayout: value
    });
  };

  // get wordpress data
  const projects = useSelect(select => {
    return select("core").getEntityRecords("postType", "projeto", {
      per_page: -1
    });
  }, []);

  // return loading if projects is null
  if (projects === null || projects === undefined) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Loading__WEBPACK_IMPORTED_MODULE_13__.Loading, {
      message: "Carregando m\xF3dulos"
    });
  }
  if (project.render === false) {
    handleSelectProjectChange(props.attributes.projectId);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpchunks-block--flip-screen-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: "video-alt",
    className: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-type"
  }, "Se\xE7\xE3o de p\xE1gina"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-desc"
  }, "Projeto a/v"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-title"
  }, project.id ? getCurrentProject(project.id).title.rendered : ""), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-edit-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditPostButton__WEBPACK_IMPORTED_MODULE_8__.EditPostButton, {
    post_id: project.id
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    align: "top",
    className: "block-main-selectors"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    className: "block-main-selectors--left-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "header control-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, props.attributes.projectId ? "Projeto Selecionado" : "Nenhum projeto selecionado")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Selecione um projeto",
    hideLabelFromVision: true,
    style: {
      fontSize: "1rem"
    },
    value: props.attributes.projectId,
    onChange: selection => handleSelectProjectChange(selection),
    __nextHasNoMarginBottom: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, "Selecione um projeto"), projects.map(project => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: project.id
    }, project.title.rendered);
  }))), !(0,_isNulled__WEBPACK_IMPORTED_MODULE_7__.isNulled)(project.id) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "header control-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, "Selecione o layout")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CustomSelectControl, {
    className: "custom-select---element",
    value: screenLayoutOptions().find(option => option.key === props.attributes.screenLayout),
    onChange: value => {
      handleChangeOption(value);
    },
    __nextUnconstrainedWidth: true,
    options: screenLayoutOptions()
  })), option === "video" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "header control-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, props.attributes.projectId ? "Origem do vídeo" : "Nenhum vídeo selecionado")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "controls"
  }, project.videos.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    className: "choose-video",
    selected: props.attributes.selectedVideo,
    options: project.videos,
    onChange: value => {
      setProject({
        ...project,
        selectedVideo: value
      });
      props.setAttributes({
        selectedVideo: value
      });
    }
  }), project.videos.length == 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "error"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "Esse projeto n\xE3o possui nenhum video cadastrado, use o bot\xE3o", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditPostButton__WEBPACK_IMPORTED_MODULE_8__.EditPostButton, {
    size: "small",
    type: "link",
    post_id: project.id
  }), " ", "para adicionar um video.")))), option === "default" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PickGradientControl__WEBPACK_IMPORTED_MODULE_11__.PickGradientControl, {
    props: props,
    setGradient: setGradient
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, {
    className: "render-screen-preview",
    style: {
      maxWidth: "50%"
    }
  }, (0,_isNulled__WEBPACK_IMPORTED_MODULE_7__.isNulled)(option) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, {
    className: "screen-type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderPreview__WEBPACK_IMPORTED_MODULE_4__.RenderPreview, {
    props: props
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default_screen_preview__WEBPACK_IMPORTED_MODULE_3__.DefaultScreenPreview, null))), option === "image" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FullScreenImagePreview__WEBPACK_IMPORTED_MODULE_14__.FullScreenImagePreview, {
    project: getCurrentProject(project.id),
    props: props
  }), option === "slider" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, {
    className: "screen-type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderPreview__WEBPACK_IMPORTED_MODULE_4__.RenderPreview, {
    props: props,
    project: getCurrentProject(project.id)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SliderPreview__WEBPACK_IMPORTED_MODULE_5__.SliderPreview, {
    images: project.images
  }))), option === "mormal" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, {
    className: "screen-type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderPreview__WEBPACK_IMPORTED_MODULE_4__.RenderPreview, {
    props: props,
    project: getCurrentProject(project.id)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MormalSliderPreview__WEBPACK_IMPORTED_MODULE_12__.MormalSliderPreview, {
    images: project.images
  }))), option === "default" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, {
    className: "screen-type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderPreview__WEBPACK_IMPORTED_MODULE_4__.RenderPreview, {
    props: props,
    project: getCurrentProject(project.id)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HeroHeaderLayoutPreview__WEBPACK_IMPORTED_MODULE_9__.HeroHeaderLayoutPreview, {
    img: project.image,
    bg: props.attributes.gradient
  }))), option === "video" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderPreview__WEBPACK_IMPORTED_MODULE_4__.RenderPreview, {
    props: props,
    project: getCurrentProject(project.id)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_VideoPreview__WEBPACK_IMPORTED_MODULE_10__.VideoPreview, {
    videoUrl: project.selectedVideo,
    poster: project.image
  })))), !(0,_isNulled__WEBPACK_IMPORTED_MODULE_7__.isNulled)(project.id) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TextElements__WEBPACK_IMPORTED_MODULE_6__.TextElements, {
    props: props,
    project: getCurrentProject(project.id)
  }));
};
function screenLayoutOptions() {
  return [{
    className: "custom-selector-option",
    key: "",
    name: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "option"
    }, "(nada selecionado)"))
  }, {
    className: "custom-selector-option",
    key: "default",
    name: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "option"
    }, "Padr\xE3o"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "help"
    }, "Fundo gradiente, com titulos \xE0 esquerda e m\xEDdia \xE0 direita"))
  }, {
    key: "video",
    className: "custom-selector-option",
    name: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "option"
    }, "Video"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "help"
    }, "Video preenchendo o fundo da tela"))
  }, {
    className: "custom-selector-option",
    key: "image",
    name: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "option"
    }, "Imagem"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "help"
    }, "Imagem preenchendo o fundo da tela."))
  }, {
    className: "custom-selector-option",
    key: "slider",
    name: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "option"
    }, "Slider"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "help"
    }, "Slider horizontal de imagens grandes."))
  }, {
    className: "custom-selector-option",
    key: "mormal",
    name: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "option"
    }, "Mormal"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "help"
    }, "Slider padr\xE3o Clarice Mormal."))
  }];
}
})();

/******/ })()
;
//# sourceMappingURL=wp-chunk-flip-screen.js.map