"use strict";
(self["webpackChunkstart_app"] = self["webpackChunkstart_app"] || []).push([["src_pages_brandlab_jsx"],{

/***/ "./src/pages/brandlab.jsx":
/*!********************************!*\
  !*** ./src/pages/brandlab.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrandLab)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu */ "./src/components/menu.jsx");
/* harmony import */ var _components_useHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/useHooks */ "./src/components/useHooks.jsx");
/* harmony import */ var _components_use_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/use-data */ "./src/components/use-data.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/utils/transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var scroller_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scroller-motion */ "./node_modules/scroller-motion/dist/index.modern.mjs");








function BrandLab() {
  const globalY = (0,_components_useHooks__WEBPACK_IMPORTED_MODULE_3__.usePageScroll)().y;
  const [scrollHeight, setScrollHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    data,
    error,
    isLoading
  } = (0,_components_use_data__WEBPACK_IMPORTED_MODULE_4__.useBrands)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (data) {
      console.log(data);
    }
  }, [data, error, isLoading]);
  const [el, setInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    textContainer: {
      transform: (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.transform)([0, 1000], [0, 1]),
      height: 0,
      ref: (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)
    },
    brandsContainer: {
      transform: (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.transform)([0, 0], [0, -400]),
      height: 400,
      ref: (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)
    },
    imgContainer: {
      transform: (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.transform)([0, 1000], [0, 1]),
      height: window.innerHeight / 4
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_components_useHooks__WEBPACK_IMPORTED_MODULE_3__.usePageHeight)("auto", "visible");
    setScrollHeight(el.textContainer.ref.current.offsetHeight);
    const textHeight = el.textContainer.ref.current.offsetHeight;
    const imgHeight = window.innerHeight / 4;
    setInfo({
      textContainer: {
        transform: (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.transform)([0, textHeight], [0, -1 * textHeight]),
        height: textHeight,
        ref: el.textContainer.ref
      },
      brandsContainer: {
        transform: (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.transform)([0, textHeight], [0, imgHeight * 2 * -1]),
        height: 400,
        ref: el.brandsContainer.ref
      },
      imgContainer: {
        transform: (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.transform)([0, textHeight], [0, -1 * imgHeight]),
        height: imgHeight
      }
    });
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(scroller_motion__WEBPACK_IMPORTED_MODULE_5__.ScrollerMotion, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Main, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_menu__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageTitle, null, "BrandLab"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Content, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 1
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Info, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
    ref: el.textContainer.ref,
    className: "text",
    animate: {
      y: el.textContainer.transform(globalY)
    },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      restDelta: 0.001
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Brandlab"), " \xE9 a se\xE7\xE3o Hysteria.etc.br respons\xE1vel por impulsionar, promover, divulgar ou fazer a gest\xE3o institucional do cliente atrav\xE9s de pe\xE7as audiovisuais."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Essa equipe atende clientes cuja prioridade \xE9 garantir que a mensagem da empresa esteja alinhada a um perfil inclusivo e focada em dar voz e espa\xE7o \xE0s mulheres que fizeram parte, direta ou indiretamente, de sua hist\xF3rias."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Um dos ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "principais pontos fortes"), " ", "do Brandlab \xE9 sua capacidade de fazer", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "conte\xFAdo sens\xEDvel e criativo"), ", que ressoa de maneira siginificativa e memor\xE1vel com o p\xFAblico."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "A equipe est\xE1 sempre atenta \xE0s necessidades atuais de linguagem, formatos de m\xEDdia e formatos de conte\xFAdo, garantindo que a mensagem da empresa seja transmitida de forma din\xE2mica e relevante para o mercado contempor\xE2neo."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Para al\xE9m das suas compet\xEAncias criativas, o BrandLab \xE9 tamb\xE9m conhecido pela sua capacidade de", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "coordenar e gerir projetos com efici\xEAncia"), " ", "e profissionalismo. Seja trabalhando com clientes para desenvolver uma nova campanha ou criando conte\xFAdo original para as plataformas do cliente, a equipe est\xE1 sempre focada em entregar os melhores resultados."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Visite nossas redes sociais e nosso canal no Youtube, conhe\xE7a nosso trabalho e nos contacte para fechar neg\xF3cio!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Brandlab"), " \xE9 a se\xE7\xE3o Hysteria.etc.br respons\xE1vel por impulsionar, promover, divulgar ou fazer a gest\xE3o institucional do cliente atrav\xE9s de pe\xE7as audiovisuais."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Essa equipe atende clientes cuja prioridade \xE9 garantir que a mensagem da empresa esteja alinhada a um perfil inclusivo e focada em dar voz e espa\xE7o \xE0s mulheres que fizeram parte, direta ou indiretamente, de sua hist\xF3rias."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Um dos ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "principais pontos fortes"), " ", "do Brandlab \xE9 sua capacidade de fazer", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "conte\xFAdo sens\xEDvel e criativo"), ", que ressoa de maneira siginificativa e memor\xE1vel com o p\xFAblico."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "A equipe est\xE1 sempre atenta \xE0s necessidades atuais de linguagem, formatos de m\xEDdia e formatos de conte\xFAdo, garantindo que a mensagem da empresa seja transmitida de forma din\xE2mica e relevante para o mercado contempor\xE2neo."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Para al\xE9m das suas compet\xEAncias criativas, o BrandLab \xE9 tamb\xE9m conhecido pela sua capacidade de", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "coordenar e gerir projetos com efici\xEAncia"), " ", "e profissionalismo. Seja trabalhando com clientes para desenvolver uma nova campanha ou criando conte\xFAdo original para as plataformas do cliente, a equipe est\xE1 sempre focada em entregar os melhores resultados."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Visite nossas redes sociais e nosso canal no Youtube, conhe\xE7a nosso trabalho e nos contacte para fechar neg\xF3cio!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Brandlab"), " \xE9 a se\xE7\xE3o Hysteria.etc.br respons\xE1vel por impulsionar, promover, divulgar ou fazer a gest\xE3o institucional do cliente atrav\xE9s de pe\xE7as audiovisuais."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Essa equipe atende clientes cuja prioridade \xE9 garantir que a mensagem da empresa esteja alinhada a um perfil inclusivo e focada em dar voz e espa\xE7o \xE0s mulheres que fizeram parte, direta ou indiretamente, de sua hist\xF3rias."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Um dos ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "principais pontos fortes"), " ", "do Brandlab \xE9 sua capacidade de fazer", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "conte\xFAdo sens\xEDvel e criativo"), ", que ressoa de maneira siginificativa e memor\xE1vel com o p\xFAblico."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "A equipe est\xE1 sempre atenta \xE0s necessidades atuais de linguagem, formatos de m\xEDdia e formatos de conte\xFAdo, garantindo que a mensagem da empresa seja transmitida de forma din\xE2mica e relevante para o mercado contempor\xE2neo."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Para al\xE9m das suas compet\xEAncias criativas, o BrandLab \xE9 tamb\xE9m conhecido pela sua capacidade de", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "coordenar e gerir projetos com efici\xEAncia"), " ", "e profissionalismo. Seja trabalhando com clientes para desenvolver uma nova campanha ou criando conte\xFAdo original para as plataformas do cliente, a equipe est\xE1 sempre focada em entregar os melhores resultados."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Visite nossas redes sociais e nosso canal no Youtube, conhe\xE7a nosso trabalho e nos contacte para fechar neg\xF3cio!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Brandlab"), " \xE9 a se\xE7\xE3o Hysteria.etc.br respons\xE1vel por impulsionar, promover, divulgar ou fazer a gest\xE3o institucional do cliente atrav\xE9s de pe\xE7as audiovisuais."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Essa equipe atende clientes cuja prioridade \xE9 garantir que a mensagem da empresa esteja alinhada a um perfil inclusivo e focada em dar voz e espa\xE7o \xE0s mulheres que fizeram parte, direta ou indiretamente, de sua hist\xF3rias."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Um dos ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "principais pontos fortes"), " ", "do Brandlab \xE9 sua capacidade de fazer", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "conte\xFAdo sens\xEDvel e criativo"), ", que ressoa de maneira siginificativa e memor\xE1vel com o p\xFAblico."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "A equipe est\xE1 sempre atenta \xE0s necessidades atuais de linguagem, formatos de m\xEDdia e formatos de conte\xFAdo, garantindo que a mensagem da empresa seja transmitida de forma din\xE2mica e relevante para o mercado contempor\xE2neo."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Para al\xE9m das suas compet\xEAncias criativas, o BrandLab \xE9 tamb\xE9m conhecido pela sua capacidade de", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "coordenar e gerir projetos com efici\xEAncia"), " ", "e profissionalismo. Seja trabalhando com clientes para desenvolver uma nova campanha ou criando conte\xFAdo original para as plataformas do cliente, a equipe est\xE1 sempre focada em entregar os melhores resultados."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Visite nossas redes sociais e nosso canal no Youtube, conhe\xE7a nosso trabalho e nos contacte para fechar neg\xF3cio!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Brandlab"), " \xE9 a se\xE7\xE3o Hysteria.etc.br respons\xE1vel por impulsionar, promover, divulgar ou fazer a gest\xE3o institucional do cliente atrav\xE9s de pe\xE7as audiovisuais."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Essa equipe atende clientes cuja prioridade \xE9 garantir que a mensagem da empresa esteja alinhada a um perfil inclusivo e focada em dar voz e espa\xE7o \xE0s mulheres que fizeram parte, direta ou indiretamente, de sua hist\xF3rias."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Um dos ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "principais pontos fortes"), " ", "do Brandlab \xE9 sua capacidade de fazer", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "conte\xFAdo sens\xEDvel e criativo"), ", que ressoa de maneira siginificativa e memor\xE1vel com o p\xFAblico."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "A equipe est\xE1 sempre atenta \xE0s necessidades atuais de linguagem, formatos de m\xEDdia e formatos de conte\xFAdo, garantindo que a mensagem da empresa seja transmitida de forma din\xE2mica e relevante para o mercado contempor\xE2neo."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Para al\xE9m das suas compet\xEAncias criativas, o BrandLab \xE9 tamb\xE9m conhecido pela sua capacidade de", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "coordenar e gerir projetos com efici\xEAncia"), " ", "e profissionalismo. Seja trabalhando com clientes para desenvolver uma nova campanha ou criando conte\xFAdo original para as plataformas do cliente, a equipe est\xE1 sempre focada em entregar os melhores resultados."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Visite nossas redes sociais e nosso canal no Youtube, conhe\xE7a nosso trabalho e nos contacte para fechar neg\xF3cio!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Brandlab"), " \xE9 a se\xE7\xE3o Hysteria.etc.br respons\xE1vel por impulsionar, promover, divulgar ou fazer a gest\xE3o institucional do cliente atrav\xE9s de pe\xE7as audiovisuais."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Essa equipe atende clientes cuja prioridade \xE9 garantir que a mensagem da empresa esteja alinhada a um perfil inclusivo e focada em dar voz e espa\xE7o \xE0s mulheres que fizeram parte, direta ou indiretamente, de sua hist\xF3rias."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Um dos ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "principais pontos fortes"), " ", "do Brandlab \xE9 sua capacidade de fazer", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "conte\xFAdo sens\xEDvel e criativo"), ", que ressoa de maneira siginificativa e memor\xE1vel com o p\xFAblico."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "A equipe est\xE1 sempre atenta \xE0s necessidades atuais de linguagem, formatos de m\xEDdia e formatos de conte\xFAdo, garantindo que a mensagem da empresa seja transmitida de forma din\xE2mica e relevante para o mercado contempor\xE2neo."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Para al\xE9m das suas compet\xEAncias criativas, o BrandLab \xE9 tamb\xE9m conhecido pela sua capacidade de", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "coordenar e gerir projetos com efici\xEAncia"), " ", "e profissionalismo. Seja trabalhando com clientes para desenvolver uma nova campanha ou criando conte\xFAdo original para as plataformas do cliente, a equipe est\xE1 sempre focada em entregar os melhores resultados."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Visite nossas redes sociais e nosso canal no Youtube, conhe\xE7a nosso trabalho e nos contacte para fechar neg\xF3cio!"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Brandlab"), " \xE9 a se\xE7\xE3o Hysteria.etc.br respons\xE1vel por impulsionar, promover, divulgar ou fazer a gest\xE3o institucional do cliente atrav\xE9s de pe\xE7as audiovisuais."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Essa equipe atende clientes cuja prioridade \xE9 garantir que a mensagem da empresa esteja alinhada a um perfil inclusivo e focada em dar voz e espa\xE7o \xE0s mulheres que fizeram parte, direta ou indiretamente, de sua hist\xF3rias."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Um dos ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "principais pontos fortes"), " ", "do Brandlab \xE9 sua capacidade de fazer", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "conte\xFAdo sens\xEDvel e criativo"), ", que ressoa de maneira siginificativa e memor\xE1vel com o p\xFAblico."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "A equipe est\xE1 sempre atenta \xE0s necessidades atuais de linguagem, formatos de m\xEDdia e formatos de conte\xFAdo, garantindo que a mensagem da empresa seja transmitida de forma din\xE2mica e relevante para o mercado contempor\xE2neo."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Para al\xE9m das suas compet\xEAncias criativas, o BrandLab \xE9 tamb\xE9m conhecido pela sua capacidade de", " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "coordenar e gerir projetos com efici\xEAncia"), " ", "e profissionalismo. Seja trabalhando com clientes para desenvolver uma nova campanha ou criando conte\xFAdo original para as plataformas do cliente, a equipe est\xE1 sempre focada em entregar os melhores resultados."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Visite nossas redes sociais e nosso canal no Youtube, conhe\xE7a nosso trabalho e nos contacte para fechar neg\xF3cio!"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Brands, {
    ref: el.brandsContainer.ref,
    animate: {
      y: el.brandsContainer.transform(globalY)
    },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      restDelta: 0.001
    }
  }, data && data.map(brand => {
    const filename = "url('" + brand.logo.guid + "')";
    const frame = "url('" + brand.frame.guid + "')";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Brand, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "brand-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "underlay",
      animate: {
        y: el.imgContainer.transform(globalY)
      },
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        restDelta: 0.001
      },
      style: {
        "--bg-color": "#2862c7",
        "--filename": frame
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
      className: "overlay",
      style: {
        "--filename": filename
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "oovershadow"
    })));
  })))));
}
const Main = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div)`
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    background-color: #0c0c0c;
    pointer-events: all;
`;
const PageTitle = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
  style: {
    position: "fixed",
    width: "90vw",
    top: "25vh",
    left: "15%"
  },
  initial: {
    filter: "blur(0px)"
  },
  animate: {
    filter: "blur(10px)"
  },
  transition: {
    duration: 1
  }
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
  style: {
    fontSize: "10vw",
    color: "#fff2"
  }
}, props.children));
const Content = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div)`
    position: relative;
    width: 100vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 30vw 2vw auto;
    grid-template-areas: "info . brands";
    overflow-x: visible;
    margin: 10rem auto;
    pointer-events: all;
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div`
    pointer-events: none;
    margin-bottom: 10rem;
    grid-area: info;
    position: relative;
    overflow-x: hidden;
    
    .text {
        padding-top: 4rem;
        margin-left: 2rem;
        width: 100%;
        max-width: 480px;
    }

    p {
        font-size: 1.5rem;
        font-weight: var(--text-light);
        line-height: 3.5rem;
    }

    strong {
        font-weight: var(--text-bold);
        color: #dccf9af5;
        font-size: 3rem;
    }

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 4rem;
        top: 0;
        left: 0;
        background-image: linear-gradient( #0c0c0c, #0c0c0c00 );
    }
`;
const Brands = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div)`
    grid-area: brands;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-top: 10vh;
`;
const Brand = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div`
    width: 100%;
    //border-radius: 8px;
    margin: 1px 0;
    width: 100%;
    height: 25vh;
    max-height: 300px;
    overflow: hidden;

    .brand-container {
        position: relative;
        width: 100%;
        height: 100%;
        position: relative;
        display: grid;
        place-items: center;

        .underlay {
            position: absolute;
            width: 130%;
            height: 150%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-image: var(--filename);    
            background-size: cover; 
        }

        img {
            display: none;
            position: absolute;
            width: 100%;
            object-fit: contain;
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-image: var(--filename);
            background-size: 50% auto;
            background-position: center;
            background-repeat: no-repeat;
        }

        .overshadow {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            box-shadow: inset 1px 1px 15px 0px black;
        }
    }
`;

/***/ })

}]);
//# sourceMappingURL=src_pages_brandlab_jsx.js.map