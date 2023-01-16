"use strict";
(self["webpackChunkstart_app"] = self["webpackChunkstart_app"] || []).push([["src_components_slides_slide-fill-movie_jsx"],{

/***/ "./src/components/slides/slide-fill-movie.jsx":
/*!****************************************************!*\
  !*** ./src/components/slides/slide-fill-movie.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectScreen": () => (/* binding */ ProjectScreen),
/* harmony export */   "default": () => (/* binding */ SlideFillMovie)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");



function SlideFillMovie(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: "slideFillMovie",
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0
    },
    viewport: {
      once: false,
      margin: "50px 0px 50px 0px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slideFillMovie__container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slideFillMovie__container__video"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReactPlayer, {
    url: props.video.default,
    playing: true,
    loop: true,
    muted: true,
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      top: 0,
      left: 0
    }
  }))));
}
const ProjectScreen = props => {
  const videoVariants = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8
      }
    }
  };
  const getAnimations = anim => {
    if (anim === "") {
      return {
        initial: {
          opacity: 0.5,
          scale: 1.1,
          y: 50
        },
        whileInView: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.8
          }
        },
        viewport: {
          once: false,
          margin: "50px 0px 50px 0px"
        }
      };
    }
    if (anim === "twovideos") {
      return {
        initial: {
          opacity: 0,
          y: 50
        },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5,
            y: {
              delay: 0,
              duration: 0
            },
            opacity: {
              delay: 1,
              duration: 1
            }
          }
        },
        viewport: {
          once: false,
          margin: "0px 0px 0px 0px"
        }
      };
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledProjectScreen, {
    className: props.style,
    type: props.layout,
    initial: getAnimations(props.animation).initial,
    whileInView: getAnimations(props.animation).whileInView,
    exit: getAnimations(props.animation).exit,
    viewport: getAnimations(props.animation).viewport,
    video2origin: "youtube"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveImage, {
    className: "component-layout--main-image",
    srcset: [props.image],
    alt: props.alt,
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), props.showVideo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Video, {
    className: "component-layout--video",
    variants: videoVariants
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReactPlayer, {
    url: props.video.default,
    playing: true,
    loop: true,
    muted: true,
    playsinline: true,
    controls: false,
    width: "100%",
    height: "100%",
    className: "react-player"
  })), props.showVideo2 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Video, {
    className: "component-layout--video-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReactPlayer
  //url={props.video2.default}
  , {
    url: "https://www.youtube.com/watch?v=QltFFygh4UQ",
    playing: true,
    loop: true,
    muted: true,
    playsinline: true,
    controls: false,
    className: "react-player",
    width: "100%",
    height: "100%",
    config: {
      youtube: {
        playerVars: {
          showinfo: 0,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          autohide: 1,
          disablekb: 1,
          playsinline: 1,
          controls: 0
        }
      }
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: "content",
    variants: container,
    initial: "hidden",
    whileInView: "show",
    viewport: {
      once: false,
      margin: "30px 0px -30px 0px"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledH1, {
    layout: true,
    initial: StyledH1Variants.hidden,
    whileInView: StyledH1Variants.show,
    exit: StyledH1Variants.hidden,
    transition: StyledH1Variants.transition
  }, props.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: "info",
    variants: item
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    className: "label-creator"
  }, "Criado por:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    className: "creator"
  }, props.creator)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: "info",
    variants: item
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    className: "label-director"
  }, "Dirigido por"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    className: "director"
  }, props.director)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: "info",
    variants: item
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    className: "label-writer"
  }, "Escrito por"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
    className: "writer"
  }, props.writer)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: "info",
    variants: item
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Link, {
    to: props.link
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, "Veja o projeto")))));
};

//default props
ProjectScreen.defaultProps = {
  layout: "default"
};
const Video = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div)`
    position: relative;    
    top: 0;
    left: 0;    
    width: 100%;
    height: 100vh;    
    pointer-events: none;
    
    .react-player {
        position: relative;
        top: 0;
        left: 0;        
    }    
`;
const StyledH1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1)`
    position: relative;  
    overflow: hidden;
    height: 3rem;
    width: var(--title-size, 0%);
    white-space: nowrap;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: var(--undersize, 0%);
        height: 1px;
        background: #fff;
        
    }
`;
const StyledH1Variants = {
  hidden: {
    "--undersize": "0%",
    "--title-size": "0%"
  },
  show: {
    "--undersize": "100%",
    "--title-size": "100%"
  },
  transition: {
    "--title-size": {
      delay: 0,
      duration: 1
    },
    "--undersize": {
      delay: 0.5,
      duration: 0.5
    }
  }
};
const StyledProjectScreen = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div)`
    width: 100vw;
    height: 100vh !important;
    position: relative;
    overflow: hidden;

    button {
        background: black;
        color: white;
        border: none;
        padding: 1rem 2rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        border-radius: 8px;
    }

    &.gradient--primary {
        background: linear-gradient( 180deg, #000, #26373f);
    }
    &.gradient--secondary {
        --color2: hsla(0, 0%, 20%, 0);
        --color1: hsl(0, 0%, 18%, 0.8);
        --color3: hsla(0, 0%, 20%, 0.8);
        --color4: hsla(0, 0%, 10%, 1);
        --color5: hsla(0, 0%, 5%, 0.7);
        --color6: hsla(0, 0%, 0%, 1);
        

        background:
            radial-gradient(var(--color1) 4%, hsl(0, 0%, 18%) 9%, var(--color2) 9%) 0 0,
            radial-gradient(var(--color1) 4%, hsl(0, 0%, 18%) 8%, var(--color2) 10%) 50px 50px,
            radial-gradient(var(--color3) 20%, var(--color2)) 50px 0,
            radial-gradient(var(--color3) 20%, var(--color2)) 0 50px,
            radial-gradient(var(--color4) 35%, var(--color2) 60%) 50px 0,
            radial-gradient(var(--color4) 35%, var(--color2) 60%) 100px 50px,
            radial-gradient(var(--color5), var(--color2)) 0 0,
            radial-gradient(var(--color5), var(--color2)) 50px 50px,
            linear-gradient(45deg, var(--color2) 49%, var(--color6) 50%, var(--color2) 70%) 0 0,
            linear-gradient(-45deg, var(--color2) 49%, var(--color6) 50%, var(--color2) 70%) 0 0;
        background-color: #230065;
        background-size: 100px 100px;
    }

    &[type="default"] {
        .content {
            position: absolute;
            left: 4vw;
            top: 55vh; 
            display: block;
            color: white;
            z-index: 100;   
            text-align: left;
            
            h1 {
                font-size: 2.5rem;
            }

            .info {
                display: flex;
                gap: 8px;
                justify-content: flex-start;   
                margin-top: 1rem;
            }

            .component-layout--video {
                display: block;
            }

            .component-layout--video-2 {
                display: none;
            }

        }
    }

    &[type="two-columns-video-text"]{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "text video";
        
        .component-layout--main-image { 
                display: none;
        }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            grid-area: text;

            h1 {
                font-size: 5rem;
                height: 5rem;
            }

            .info {
                display: flex;
                gap: 16px;
                margin: 1rem auto;
            }
        }

        .component-layout--video { 
            grid-area: video;
            overflow: hidden;
            border-radius: 128px;
            width: 80%;
            height: 65%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -65%);
        }
        .component-layout--video-2 {
            display: none;
        }
    }

    &[type="three-columns-video-video"]{
        display: grid;
        grid-template-columns: 28% 28% 28%;
        grid-template-rows: 1fr;
        grid-template-areas: "text video video2";
        justify-content: space-around;
        width: 100vw;
        
        .component-layout--main-image { 
                display: none;
            }

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            grid-area: text;

            h1 {
                font-size: 5rem;
                height: 5rem;
            }

            .info {
                display: flex;
                gap: 16px;
                margin: 1rem auto;
            }
        }

        .component-layout--video { 
            grid-area: video;
            overflow: hidden;
            border-radius: 128px;
            width: 90%;
            height: 75%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -55%);
        }

        .component-layout--video-2 { 
            grid-area: video2;
            overflow: hidden;
            border-radius: 128px;            
            top: 50%;
            left: 50%;
            transform: translate(-50%, -65%);

           
            ${props => props.video2origin === "youtube" && `
            
                width: 100%;
                aspect-ratio: 16/9;
                height: auto;
                overflow: hidden;
                border-radius: 64px;

            `}
        }
        
    }

    &[type="notext"] {

        .content {
            display: none;
        }

        video {
            position: absolute !important;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            z-index: 200;
        }
    }
`;
const variants = {
  default: {
    initial: {
      opacity: 0,
      x: -500
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      opacity: {
        delay: -2
      }
    }
  },
  notext: {
    initial: {
      opacity: 0.99
    },
    animate: {
      opacity: 1
    },
    transition: {
      opacity: {
        delay: 2,
        duration: 2
      }
    }
  }
};
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.15,
      staggerDirection: 1
    }
  }
};
const item = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  },
  transition: {
    duration: 0.2
  }
};

/***/ })

}]);
//# sourceMappingURL=src_components_slides_slide-fill-movie_jsx.js.map