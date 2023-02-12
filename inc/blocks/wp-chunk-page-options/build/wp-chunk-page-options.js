/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/media-gallery-button.js":
/*!*************************************!*\
  !*** ./src/media-gallery-button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaGalleryButton": () => (/* binding */ MediaGalleryButton)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const ALLOWED_MEDIA_TYPES = ['image'];
function MediaGalleryButton(_ref) {
  let {
    setMedia,
    media
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setMedia(media);
    },
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: media,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        onClick: open
      }, "Selecionar Imagem");
    }
  }));
}

/***/ }),

/***/ "./src/wp-chunk-page-options.scss":
/*!****************************************!*\
  !*** ./src/wp-chunk-page-options.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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
/*!**************************************!*\
  !*** ./src/wp-chunk-page-options.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wp_chunk_page_options_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wp-chunk-page-options.scss */ "./src/wp-chunk-page-options.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_gallery_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-gallery-button */ "./src/media-gallery-button.js");





const {
  useSelect
} = wp.data;

wp.blocks.registerBlockType("wpchunks/wp-chunk-page-options", {
  title: "WPC Page Options",
  icon: "desktop",
  category: "common",
  supports: {
    multiple: false
  },
  attributes: {
    scrollStyle: {
      type: "string"
    },
    menu: {
      type: "object",
      default: {
        menu: "mobile",
        socialInside: true
      }
    },
    slogan: {
      type: "object",
      default: {
        prefix: "mulheres",
        title: "com histórias",
        sulfix: "para contar",
        position: "top-center",
        style: "sloga--style-default"
      }
    },
    footerStyle: {
      type: "object",
      default: {
        fixed: false,
        style: "footer--style-default"
      }
    },
    pageScroll: {
      type: "object",
      default: {
        style: "full-screen-page-by-page",
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        scrollDown: true,
        buttonToTop: true,
        loop: false
      }
    },
    seo: {
      type: "object",
      default: {
        title: "",
        description: "",
        keywords: "",
        og: {
          title: "",
          description: "",
          type: "",
          url: "",
          site_name: "",
          locale: "",
          image: "",
          image_alt: "",
          image_title: "",
          image_description: "",
          twitter_autor: ""
        }
      }
    }
  },
  edit: props => FrontEnd(props),
  save: props => {
    return null;
  }
});
const FrontEnd = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyTabPanel, {
    props: props
  }));
};
function MyTabPanel(_ref) {
  let {
    props
  } = _ref;
  // callback for media fallery button
  const setMediaCallback = media => {
    props.setAttributes({
      seo: {
        ...props.attributes.seo,
        og: {
          ...props.attributes.seo.og,
          image: media.url,
          image_alt: media.alt,
          image_title: media.title,
          image_description: media.description
        }
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpc-page-options--options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: "admin-generic",
    className: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "breadcrumb"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Op\xE7\xF5es de P\xE1gina"), props.attributes.seo.title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, props.attributes.seo.title))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "my-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "comportamento",
      title: "Configurações da Página",
      className: "tab-one"
    }, {
      name: "seo",
      title: "Otimização para Buscadores (SEO)",
      className: "tab-two"
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-tab-panel--panels-content"
  }, tab.name == "comportamento" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: "text-control-base-component-setup",
    label: "T\xEDtulo da pagina",
    value: props.attributes.seo.title,
    onChange: value => props.setAttributes({
      seo: {
        ...props.attributes.seo,
        title: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Estilo de rolagem",
    options: [{
      label: "Página por página",
      value: "full-screen-page-by-page"
    }, {
      label: "Rolagem suave",
      value: "smooth-scroll"
    }, {
      label: "Rolagem padrão",
      value: "default-scroll"
    }],
    value: props.attributes.pageScroll.style,
    onChange: value => props.setAttributes({
      pageScroll: {
        ...props.attributes.pageScroll,
        style: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    gap: 8,
    className: "checkbox-control-group-screen-options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Mostrar pontos de navega\xE7\xE3o",
    help: "(bolinhas na lateral da p\xE1gina)",
    checked: props.attributes.pageScroll.dots,
    onChange: value => props.setAttributes({
      pageScroll: {
        ...props.attributes.pageScroll,
        dots: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Autoplay",
    help: "Ativa a rolagem autom\xE1tica",
    checked: props.attributes.pageScroll.autoplay,
    onChange: value => props.setAttributes({
      pageScroll: {
        ...props.attributes.pageScroll,
        autoplay: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: "Velocidade do autoplay",
    value: props.attributes.pageScroll.autoplaySpeed,
    onChange: value => props.setAttributes({
      pageScroll: {
        ...props.attributes.pageScroll,
        autoplaySpeed: value
      }
    }),
    min: 2,
    max: 10,
    step: 1,
    disabled: !props.attributes.pageScroll.autoplay
  })))), tab.name == "seo" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "SEO de P\xE1gina",
    initialOpen: true,
    className: "my-tab-panel--options-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: "text-control-base-component-setup",
    label: "T\xEDtulo da p\xE1gina",
    value: props.attributes.seo.title,
    onChange: value => props.setAttributes({
      seo: {
        ...props.attributes.seo,
        title: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: "text-control-base-component-setup",
    label: "Descri\xE7\xE3o da pagina",
    value: props.attributes.seo.description,
    onChange: value => props.setAttributes({
      seo: {
        ...props.attributes.seo,
        description: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: "text-control-base-component-setup",
    label: "Palavras-chave",
    value: props.attributes.seo.keywords,
    onChange: value => props.setAttributes({
      seo: {
        ...props.attributes.seo,
        keywords: value
      }
    })
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "SEO da imagem principal",
    initialOpen: false,
    className: "my-tab-panel--options-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    gap: 8
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Selecione a imagem que ser\xE1 usada no SEO da p\xE1gina"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "Essa imagem geralmente \xE9 interceptada em motores de busca e em links de compartilhamento como a refer\xEAncia para ser mostrada quando o usu\xE1rio encontra o site na busca ou quando compartilha algum conte\xFAdo do site nas redes sociais. Cada p\xE1gina / Post / Conte\xFAdo pode ter sua pr\xF3pria imagem de identifica\xE7\xE3o. As informa\xE7\xF5es sobrea imagem vem da galeria de m\xEDdia e os campos de informa\xE7\xE3o devem ser preenchidos (na galeria) para que a imagem seja mostrada corretamente."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      textAlign: "right"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_media_gallery_button__WEBPACK_IMPORTED_MODULE_3__.MediaGalleryButton, {
    setMedia: setMediaCallback,
    media: props.attributes.seo.image
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: props.attributes.seo.og.image
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: "text-control-base-component-setup",
    label: "T\xEDtulo da imagem",
    value: props.attributes.seo.og.image_title,
    locked: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: "text-control-base-component-setup",
    label: "Alt da imagem",
    value: props.attributes.seo.og.image_alt,
    locked: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: "text-control-base-component-setup",
    label: "Descri\xE7\xE3o da imagem",
    value: props.attributes.seo.og.image_description,
    locked: true
  })))))))));
}
})();

/******/ })()
;
//# sourceMappingURL=wp-chunk-page-options.js.map