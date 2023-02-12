import "./wp-chunk-page-options.scss";
import {
    TabPanel,
    TextControl,
    Panel,
    PanelBody,
    PanelRow,
    Flex,
    FlexBlock,
    FlexItem,
    RadioControl,
    CheckboxControl,
    Icon,
    SelectControl,
    RangeControl,
} from "@wordpress/components";
import { more } from "@wordpress/icons";
import { useState } from "@wordpress/element";
const { useSelect } = wp.data;
import { MediaGalleryButton } from "./media-gallery-button";

wp.blocks.registerBlockType("wpchunks/wp-chunk-page-options", {
    title: "WPC Page Options",
    icon: "desktop",
    category: "common",
    supports: {
        multiple: false,
    },
    attributes: {
        scrollStyle: {
            type: "string",
        },
        menu: {
            type: "object",
            default: {
                menu: "mobile",
                socialInside: true,
            },
        },
        slogan: {
            type: "object",
            default: {
                prefix: "mulheres",
                title: "com histórias",
                sulfix: "para contar",
                position: "top-center",
                style: "sloga--style-default",
            },
        },
        footerStyle: {
            type: "object",
            default: {
                fixed: false,
                style: "footer--style-default",
            },
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
                loop: false,
            },
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
                    twitter_autor: "",
                },
            },
        },
    },
    edit: (props) => FrontEnd(props),
    save: (props) => {
        return null;
    },
});

const FrontEnd = (props) => {
    return (
        <>
            <MyTabPanel props={props} />
        </>
    );
};

function MyTabPanel({ props }) {
    
    // callback for media fallery button
    const setMediaCallback = (media) => {
        props.setAttributes({
            seo: {
                ...props.attributes.seo,
                og: {
                    ...props.attributes.seo.og,

                    image: media.url,
                    image_alt: media.alt,
                    image_title: media.title,
                    image_description: media.description,
                },
            },
        });
    };

    return (
        <div className="wpc-page-options--options">
            <div className='heading'>
                <Icon icon="admin-generic" className="icon"/>
                <div className="breadcrumb">
                    <span>Opções de Página</span>
                    {props.attributes.seo.title && <span>{props.attributes.seo.title}</span>}
                </div>
            </div>
            
            <TabPanel
                className="my-tab-panel"
                activeClass="active-tab"
                tabs={[
                    {
                        name: "comportamento",
                        title: "Configurações da Página",
                        className: "tab-one",
                    },
                    {
                        name: "seo",
                        title: "Otimização para Buscadores (SEO)",
                        className: "tab-two",
                    },
                ]}>
                {(tab) => (
                    <div className="my-tab-panel--panels-content">
                        {tab.name == "comportamento" && (
                            <>
                                <TextControl
                                    className="text-control-base-component-setup"
                                    label="Título da pagina"
                                    value={props.attributes.seo.title}
                                    onChange={(value) =>
                                        props.setAttributes({
                                            seo: {
                                                ...props.attributes.seo,
                                                title: value,
                                            },
                                        })
                                    }
                                />
                                <SelectControl
                                    label="Estilo de rolagem"
                                    options={[
                                        {
                                            label: "Página por página",
                                            value: "full-screen-page-by-page",
                                        },
                                        {
                                            label: "Rolagem suave",
                                            value: "smooth-scroll",
                                        },
                                        {
                                            label: "Rolagem padrão",
                                            value: "default-scroll",
                                        },
                                    ]}
                                    value={props.attributes.pageScroll.style}
                                    onChange={(value) =>
                                        props.setAttributes({
                                            pageScroll: {
                                                ...props.attributes.pageScroll,
                                                style: value,
                                            },
                                        })
                                    }
                                />
                                <Flex gap={8} className="checkbox-control-group-screen-options">
                                    <CheckboxControl
                                        label="Mostrar pontos de navegação"
                                        help="(bolinhas na lateral da página)"
                                        checked={
                                            props.attributes.pageScroll.dots
                                        }
                                        onChange={(value) =>
                                            props.setAttributes({
                                                pageScroll: {
                                                    ...props.attributes
                                                        .pageScroll,
                                                    dots: value,
                                                },
                                            })
                                        }
                                    />

                                    <CheckboxControl
                                        label="Autoplay"
                                        help="Ativa a rolagem automática"
                                        checked={
                                            props.attributes.pageScroll.autoplay
                                        }
                                        onChange={(value) =>
                                            props.setAttributes({
                                                pageScroll: {
                                                    ...props.attributes
                                                        .pageScroll,
                                                    autoplay: value,
                                                },
                                            })
                                        }
                                    />

                                    <FlexBlock>
                                        <RangeControl
                                            label="Velocidade do autoplay"
                                            value={
                                                props.attributes.pageScroll
                                                    .autoplaySpeed
                                            }
                                            onChange={(value) =>
                                                props.setAttributes({
                                                    pageScroll: {
                                                        ...props.attributes
                                                            .pageScroll,
                                                        autoplaySpeed: value,
                                                    },
                                                })
                                            }
                                            min={2}
                                            max={10}
                                            step={1}
                                            disabled={
                                                !props.attributes.pageScroll
                                                    .autoplay
                                            }
                                        />
                                    </FlexBlock>
                                </Flex>
                            </>
                        )}

                        {tab.name == "seo" && (
                            <>
                                <Panel>
                                    <PanelBody
                                        title="SEO de Página"
                                        initialOpen={true}
                                        className="my-tab-panel--options-title">
                                        <PanelRow>
                                            <FlexBlock>
                                                <TextControl
                                                    className="text-control-base-component-setup"
                                                    label="Título da página"
                                                    value={
                                                        props.attributes.seo
                                                            .title
                                                    }
                                                    onChange={(value) =>
                                                        props.setAttributes({
                                                            seo: {
                                                                ...props
                                                                    .attributes
                                                                    .seo,
                                                                title: value,
                                                            },
                                                        })
                                                    }
                                                />
                                                <TextControl
                                                    className="text-control-base-component-setup"
                                                    label="Descrição da pagina"
                                                    value={
                                                        props.attributes.seo
                                                            .description
                                                    }
                                                    onChange={(value) =>
                                                        props.setAttributes({
                                                            seo: {
                                                                ...props
                                                                    .attributes
                                                                    .seo,
                                                                description:
                                                                    value,
                                                            },
                                                        })
                                                    }
                                                />
                                                <TextControl
                                                    className="text-control-base-component-setup"
                                                    label="Palavras-chave"
                                                    value={
                                                        props.attributes.seo
                                                            .keywords
                                                    }
                                                    onChange={(value) =>
                                                        props.setAttributes({
                                                            seo: {
                                                                ...props
                                                                    .attributes
                                                                    .seo,
                                                                keywords: value,
                                                            },
                                                        })
                                                    }
                                                />
                                            </FlexBlock>
                                        </PanelRow>
                                    </PanelBody>
                                </Panel>
                                <Panel>
                                    <PanelBody
                                        title="SEO da imagem principal"
                                        initialOpen={false}
                                        className="my-tab-panel--options-title">
                                        <PanelRow>
                                            <Flex gap={8}>
                                                <FlexBlock>
                                                    <h3>
                                                        Selecione a imagem que
                                                        será usada no SEO da
                                                        página
                                                    </h3>
                                                    <small>
                                                        Essa imagem geralmente é
                                                        interceptada em motores
                                                        de busca e em links de
                                                        compartilhamento como a
                                                        referência para ser
                                                        mostrada quando o
                                                        usuário encontra o site
                                                        na busca ou quando
                                                        compartilha algum
                                                        conteúdo do site nas
                                                        redes sociais. Cada
                                                        página / Post / Conteúdo
                                                        pode ter sua própria
                                                        imagem de identificação.
                                                        As informações sobrea
                                                        imagem vem da galeria de
                                                        mídia e os campos de
                                                        informação devem ser
                                                        preenchidos (na galeria)
                                                        para que a imagem seja
                                                        mostrada corretamente.
                                                    </small>
                                                    <div
                                                        style={{
                                                            textAlign: "right",
                                                        }}>
                                                        <MediaGalleryButton
                                                            setMedia={
                                                                setMediaCallback
                                                            }
                                                            media={
                                                                props.attributes
                                                                    .seo.image
                                                            }
                                                        />
                                                    </div>
                                                </FlexBlock>
                                                <FlexBlock>
                                                    <img
                                                        src={
                                                            props.attributes.seo
                                                                .og.image
                                                        }
                                                    />
                                                </FlexBlock>
                                            </Flex>
                                        </PanelRow>
                                        <PanelRow>
                                            <FlexBlock>
                                                <TextControl
                                                    className="text-control-base-component-setup"
                                                    label="Título da imagem"
                                                    value={
                                                        props.attributes.seo.og
                                                            .image_title
                                                    }
                                                    locked
                                                />
                                                <TextControl
                                                    className="text-control-base-component-setup"
                                                    label="Alt da imagem"
                                                    value={
                                                        props.attributes.seo.og
                                                            .image_alt
                                                    }
                                                    locked
                                                />
                                                <TextControl
                                                    className="text-control-base-component-setup"
                                                    label="Descrição da imagem"
                                                    value={
                                                        props.attributes.seo.og
                                                            .image_description
                                                    }
                                                    locked
                                                />
                                            </FlexBlock>
                                        </PanelRow>
                                    </PanelBody>
                                </Panel>
                            </>
                        )}
                    </div>
                )}
            </TabPanel>
        </div>
    );
}
