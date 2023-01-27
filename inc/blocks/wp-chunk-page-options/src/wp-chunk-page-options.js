import "./wp-chunk-page-options.scss";
import {
    TabPanel,
    TextControl,
    Flex,
    FlexBlock,
    FlexItem,
    RadioControl,
    CheckboxControl,
    Icon,
    SelectControl,    
} from "@wordpress/components";
import { useState } from "@wordpress/element";
const { useSelect } = wp.data;

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
                type: "full-screen-page-by-page",
                autoplay: false,
                autoplaySpeed: 5000,
                dots: true,
                scrollDown: true,
                buttonToTop: true,
                loop: false
            }
        }
    },
    edit: (props) => FrontEnd(props),
    save: (props) => {
        return null;
    }
});

const FrontEnd = (props) => {
    return <>
        <MyTabPanel props={props}/>
    </>
}

function MyTabPanel(){ 
    
    const onSelect = ( tabName ) => {
        
    };        

    return (<div className="wpc-page-options--options">                
                <TabPanel
                    className="my-tab-panel"
                    activeClass="active-tab"
                    onSelect={ onSelect }
                    tabs={ [
                        {
                            name: 'comportamento',
                            title: 'Comportamento',
                            className: 'tab-one',
                        },
                        {
                            name: 'seo',
                            title: 'SEO',
                            className: 'tab-two',
                        },
                        {
                            name: 'compartilhamento',
                            title: 'Compartilhamento',
                            className: 'tab-two',
                        }
                    ] }
                >
                { ( tab ) => <>

                    { tab.name == 'comportamento' && <>
                        <TextControl label="Título da pagina" />
                        <SelectControl 
                            label="Estilo de rolagem"
                            options={ [
                                { label: 'Página por página', value: 'full-screen-page-by-page' },
                                { label: 'Rolagem suave', value: 'smooth-scroll' },
                                { label: 'Rolagem padrão', value: 'default-scroll' },
                            ] }
                        />
                       <Flex gap={8}>
                        <CheckboxControl
                            label="Mostrar pontos de navegação"
                            help="(bolinhas na lateral da página)"
                            />                        
                        
                         <CheckboxControl 
                                    label="Autoplay"
                                    help="Ativa a rolagem automática"
                                
                                />                       

                        <FlexBlock>
                                <TextControl label="Velocidade do autoplay" />
                            </FlexBlock> 
                        </Flex>
                    </> }

                    { tab.name == 'seo' && <>

                        <TextControl label="Título da pagina" />
                        <TextControl label="Descrição da pagina" />
                        <TextControl label="Palavras-chave" />
                        <TextControl label="URL da imagem" />
                        <TextControl label="Alt da imagem" />
                        <TextControl label="Título da imagem" />
                        <TextControl label="Descrição da imagem" />
                        <TextControl label="Palavras-chave da imagem" />
                        <TextControl label="URL da imagem de capa" />
                        <TextControl label="Alt da imagem de capa" />
                        <TextControl label="Título da imagem de capa" />
                        <TextControl label="Descrição da imagem de capa" />
                        <TextControl label="Palavras-chave da imagem de capa" />

                    </> }
                    { tab.name == 'compartilhamento' && <>
                        <h3>Open Graph: Facebook e plataformas compatívels</h3>
                        <TextControl label="Título do compartilhamento" />
                        <TextControl label="Descrição do compartilhamento" />
                        <TextControl label="URL da imagem" />
                        <TextControl label="Alt da imagem" />
                        <TextControl label="Título da imagem" />
                        <TextControl label="Descrição da imagem" />
                        <TextControl label="Palavras-chave da imagem" />

                        <h3>Card do Twitter</h3>
                        <TextControl label="Título do compartilhamento" />
                        <TextControl label="Descrição do compartilhamento" />
                        <TextControl label="URL da imagem" />
                        <TextControl label="Alt da imagem" />
                        <TextControl label="Título da imagem" />
                        <TextControl label="Descrição da imagem" />
                        <TextControl label="Palavras-chave da imagem" />
                        <TextControl label="@ do autor" />
                    
                    </> }
                </> }
            </TabPanel>
    </div>
)};
