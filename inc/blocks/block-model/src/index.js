import "./index.scss"
import {
    Flex,
    FlexBlock,
    FlexItem,
    TextControl,
    Button,
} from "@wordpress/components";
import { useState } from "react";
import { CustomImageSelect, MediaGalleryButton } from "../../media-gallery-button";

wp.blocks.registerBlockType("wpchunks/wpc-cpt-model", {
    title: "Hysteria Marcas",
    icon: "superhero-alt",
    category: "hysteria",
    supports: {
        lock: false,
        html: false,
    },
    attributes: {
        brandImage: {
            type: "object",
            default: {
                color: "",
                white: "",
                black: "",
                small: "",
            },
        },       
        brandName: {
            type: "string",
        },
        brandLink: {
            type: "string",
        }
    },
    edit: (props) => FrontEnd(props),
    save: function (props) {
        return null;
    },
    getEditWrapperProps: (attributes) => ({
        "data-align": "full",
        "data-block-name": "wpc-cpt-brands",
    }),
});

const FrontEnd = (props) => {
    
    const [brandImage, setBrandImage] = useState(props.attributes.brandImage);    

    const setMediaCallback = (media, type) => {
        if( media?.url ) {
            media.url.replace("http://", "https://");
        }
        const newBrandImage = { ...brandImage };
        newBrandImage[type] = media?.url ? media.url : "";
        setBrandImage(newBrandImage);
        props.setAttributes({ brandImage: newBrandImage });
    };

    return (
        <>
            <div className="styled-block block-name">
            <h3>1. Informe os dados básicos para apresentação da marca</h3>
                <div className="brands__info">
                    <TextControl 
                        label="Nome da Marca / Empresa"
                        value={props.attributes.brandName}
                        onChange={(value) =>
                            props.setAttributes({ brandName: value })
                        }
                    />
                    <TextControl
                        label="Link para website dessa marca"
                        value={props.attributes.brandLink}
                        onChange={(value) =>
                            props.setAttributes({ brandLink: value })
                        }
                    />
                </div>
                <h3>2. Selecione as imagens-base para as marcas mostradas no site.</h3>
                <div  className="brands__images">
                    <CustomImageSelect 
                        label={<p>Selecione a imagem da marca <strong>colorida ou padrão da empresa</strong> com o fundo transparente.</p>}                                
                        media={brandImage.color}
                        setMedia={ (media) => setMediaCallback( media, "color" ) }
                    />
                    <CustomImageSelect
                        label={<p>Selecione a imagem da marca <strong>na cor branca</strong> com fundo transparente.</p>}
                        media={brandImage.white}
                        setMedia={(media) => setMediaCallback(media, "white")}
                    />
                    <CustomImageSelect
                        label={<p>Selecione a imagem da marca <strong>na cor preta</strong> com fundo transparente.</p>}
                        media={brandImage.black}
                        setMedia={(media) => setMediaCallback(media, "black")}
                    />
                    <CustomImageSelect
                        label={<p>Selecione a imagem da marca <strong>em tamanho pequeno / incone / microassinatura</strong> com fundo transparente.</p>}
                        media={brandImage.small}
                        setMedia={(media) => setMediaCallback(media, "small")}
                    />
                </div>
            </div>
        </>
    );
};
