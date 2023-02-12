import "./wpc-cpt-brands.scss";
import {
    Flex,
    FlexBlock,
    FlexItem,
    TextControl,
    Button,
} from "@wordpress/components";
import { useState } from "react";
import { CustomImageSelect, MediaGalleryButton } from "./media-gallery-button";
import styled from "styled-components";

wp.blocks.registerBlockType("wpchunks/wpc-cpt-brands", {
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
            <WPCcptBrands>
            <ol>
                <DataItem text="Informe os dados básicos da marca." />
                <div className="data-section">
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
                </div>
                <DataItem text="Selecione as imagens de apresentação da marca." />
                <div className="data-section">
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
                </ol>
            </WPCcptBrands>
        </>
    );
};


const DataItem = ({text}) => <li>{text}</li>;

const WPCcptBrands = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;   
    background-color: #f0f0f0;
    padding: 2rem 2vw 4rem 2vw;
    margin: 1vw 2vw;
    box-shadow: 4px 4px 12px -6px #0008;    


   ol {
        list-style: none;
        padding: 0;
        margin: 0;
        list-style-type: decimal;
        list-style-position: inside;

        li {
            padding: 1rem 1rem 0.5rem 1rem;
            margin-bottom: 0.5rem;
            margin-top: 1rem;
            font-size: 1.2rem;
            color: #3d3d3d; 
            font-weight: bolder;

        }
   }

   .data-section {
        padding: 1rem;
        margin: 0 0 0 4vw;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 2px 2px 8px -4px #0008;
        
   }

    .brands__info {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-around;

        div {
            flex: 1;
            width: 100%;;
            min-width: 250px;
        }
    }
    .brands__images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 1rem;
        gap: 1rem;
    }
`