import "./wpc-cpt-social.scss";

import {
    TextControl,
} from "@wordpress/components";
import { useState } from "react";
import styled from "styled-components";

wp.blocks.registerBlockType("wpchunks/wpc-cpt-social", {
    title: "Hysteria Redes Sociais",
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
    
    return <WPCcptSocial>
        <h3>1. Informe os dados básicos para apresentação do projeto</h3>    
        <TextControl
            label="Título"
            value={props.attributes.title}
            onChange={(value) => {
                setTitle(value);
                props.setAttributes({ title: value });
            }}
        />
    </WPCcptSocial>}

const WPCcptSocial = styled.div``;