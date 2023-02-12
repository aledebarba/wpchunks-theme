import "./wpc-cpt-colaboradora.scss";

import {
    TextControl,
} from "@wordpress/components";
import { useState } from "react";
import { CustomImageSelect, MediaGalleryButton } from "../../media-gallery-button";
import styled from "styled-components";

wp.blocks.registerBlockType("wpchunks/wpc-cpt-colaboradora", {
    title: "Hysteria: Colaboradoras",
    icon: "superhero-alt",
    category: "hysteria",
    supports: {
        lock: false,
        html: false,
    },
    attributes: {
       title: { type: "string" },
    },
    edit: (props) => FrontEnd(props),
    save: function (props) {
        return null;
    },
});

const FrontEnd = (props) => {
    const [title, setTitle] = useState(props.attributes.title);
    
    return <WPCcptColaboradora>
        <h3>1. Informe os dados básicos para apresentação do projeto</h3>    
        <TextControl
            label="Título"
            value={props.attributes.title}
            onChange={(value) => {
                setTitle(value);
                props.setAttributes({ title: value });
            }}
        />
    </WPCcptColaboradora>}

const WPCcptColaboradora = styled.div``;