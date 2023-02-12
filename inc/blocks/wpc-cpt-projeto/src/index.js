import "./index.css"

import {
    TextControl, 
    TextareaControl, 
    Button,
} from "@wordpress/components";
import { useState } from "react";
import { CustomImageSelect, MediaGalleryButton } from "../../components/media-gallery-button";
import { ImagePlaceholder } from "../../components/media-components";
import ReactPlayer from "react-player/lazy";

wp.blocks.registerBlockType("wpchunks/wpc-cpt-projeto", {
    title: "Hysteria: Projetos",
    icon: "superhero-alt",
    category: "hysteria",
    supports: {
        lock: false,
        html: false,
    },
    attributes: {
       title: { type: "string", default: "" },
       desc: { type: "string", default: "" },
       channel: { type: "string", default: "" },
       type: { type: "string", default: "" },
       externalLink: { type: "string", default: "" },
       externalLinkLabel: { type: "string", default: "Ver o projeto" },
       image: { type: "string" },
       images: { type: "array", default: [] },
       videoMediaDesktop: { type: "object", default: { id: "", url: "" } },
       videoMediaMobile: { type: "object", default: { id: "", url: "" } },
       videoPoster: { type: "string", default: "" },
       videoYoutube: { type: "string", default: "" },
       videoVimeo: { type: "string", default: "" },
       videoURL: { type: "string", default: "" },
       author: { type: "string", default: "" },
       writer: { type: "string", default: "" },
       director: { type: "string", default: "" },       
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
    const [blockData, setBlockData] = useState(props.attributes);    
    
    const handleSelectImage = (media) => {
        setBlockData({ ...blockData, image: media.url });
        props.setAttributes({ image: media.url });
    };

    const handleSelectImages = (media) => {
        console.log( media )
        setBlockData({ ...blockData, images: media.map( item => ({ id: item.id, url: item.url }) ) });
        props.setAttributes({ images: media.map( item => ({ id: item.id, url: item.url }) ) });
    };

    const handleSelectVideoPoster = (media) => {
        setBlockData({ ...blockData, videoPoster: media.url });
        props.setAttributes({ videoPoster: media.url });
    }
    
    const handleSelectVideoMediaDesktop = (media) => {
        setBlockData({ ...blockData, videoMediaDesktop: { id: media.id, url: media.url } });
        props.setAttributes({ videoMediaDesktop: { id: media.id, url: media.url } });
    }

    const handleSelectVideoMediaMobile = (media) => {
        setBlockData({ ...blockData, videoMediaMobile: { id: media.id, url: media.url } });
        props.setAttributes({ videoMediaMobile: { id: media.id, url: media.url } });
    }


    return <div className="xl:container xl:mx-auto  wpchunk-block-projeto">
            <BlockContainer>
                <SectionTitle>Informe os dados básicos para apresentação do projeto</SectionTitle>
                <SectionContent>
                    <TextControl
                        label="Título "
                        help="O titulo principal do projeto que será exibido na página"
                        value={props.attributes.title}
                        onChange={(value) => {
                            setBlockData({ ...blockData, title: value });                    
                            props.setAttributes({ title: value });
                        }}
                    />
                    <TextareaControl
                        label="Descrição"
                        help={<p>Uma breve descrição do projeto, que será exibida em páginas de detalhes do projeto. <br/>Se você usar o campo 'Resumo' na coluna da direita, o resumo será apresentado em listagens.</p>}
                        value={props.attributes.desc}
                        onChange={(value) => {
                            setBlockData({ ...blockData, desc: value });
                            props.setAttributes({ desc: value });
                        }}
                    />
                    <div className="flex gap-x-4">
                        <TextControl
                            className="flex-auto w-1/2"
                            label="Canal"
                            help="Informe o canal de exibição do projeto. Ex: 'Netflix', 'HBO', 'Amazon Prime', 'Disney+'"
                            value={props.attributes.channel}
                            onChange={(value) => {
                                setBlockData({ ...blockData, channel: value });
                                props.setAttributes({ channel: value });
                            }}
                        />
                        <TextControl
                            className="flex-auto w-1/2"
                            label="Tipo"
                            help="Informe o tipo de projeto. Ex: 'Documentário', 'Série', 'Websérie', 'Longa-metragem'"
                            value={props.attributes.type}
                            onChange={(value) => {
                                setBlockData({ ...blockData, type: value });
                                props.setAttributes({ type: value });
                            }}
                        />
                    </div>
                    <div className='flex gap-x-4'>
                        <TextControl
                            label="Link Externo 🔗"
                            className="flex-auto w-1/2"
                            help="Quando o usuário clicar no botão 'Ver o projeto', será redirecionado para este link."
                            value={props.attributes.externalLink}
                            onChange={(value) => {
                                setBlockData({ ...blockData, externalLink: value });
                                props.setAttributes({ externalLink: value });
                            }}
                        />
                        <TextControl
                            label="Texto do botão"
                            className="flex-auto w-1/2"
                            help="O texto que será exibido no botão 'Ver o projeto'."
                            value={props.attributes.externalLinkLabel}
                            onChange={(value) => {
                                setBlockData({ ...blockData, externalLinkLabel: value });
                                props.setAttributes({ externalLinkLabel: value });
                            }}
                        />
                    </div>
                </SectionContent>

                <SectionTitle>Selecione as imagens desse projeto</SectionTitle>
                <SectionContent>
                    <div className="flex gap-8">
                        <div className="w-3/12">
                            <h3>Imagem Principal</h3>
                            <CustomImageSelect
                                media={props.attributes.image}
                                setMedia={ handleSelectImage }
                                fit="cover"
                            >
                                A imagem principal do projeto, que será exibida em listagens de página, páginas de detalhe e onde mais for necessário.
                            </CustomImageSelect>
                        </div>
                        <div className="w-9/12">
                            <h3>Imagens Extras</h3>
                            <div className="extra-images-gallery">
                                { props.attributes.images.map( (item, index) => (
                                    <div className="extra-image" key={index}>
                                        <div className="image-container">
                                            <img src={item.url} alt={item.alt} />
                                            <div className="image-actions">
                                                <Button 
                                                    icon="trash" 
                                                    text=""
                                                    label="Remove essa imagem da lista"
                                                    onClick={() => {
                                                        let images = props.attributes.images;
                                                        images.splice(index, 1); 
                                                        handleSelectImages( images )
                                                    }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="bg-white shadow-lg w-full h-20 text-white rounded grid place-content-center">
                                    <MediaGalleryButton 
                                        media={ props.attributes.images.map( media => media.id ) }
                                        setMedia={ handleSelectImages }
                                        multiple={true}
                                        mode="browse"
                                        button="link"
                                        text="+ Adicionar Imagem Extra"
                                    />
                                </div>
                            </div>                                        
                        </div>
                    </div>
                </SectionContent>


                <SectionTitle>Informe os videos desse projeto</SectionTitle>
                <SectionContent>
                    <div className="flex gap-x-8 p-4 my-2 border-slate-500 border  ">
                        <div className="col-4/12 flex-col gap-y-8">
                            <MediaGalleryButton 
                                text="Selecione o vídeo de desktop"                                
                                media={ props.attributes.videoMediaDesktop.id }
                                setMedia={ handleSelectVideoMediaDesktop }
                                ALLOWED_MEDIA_TYPES = {['video']}
                                />
                        </div>
                        <div className="col-8/12">
                            { props.attributes.videoMediaDesktop.id && (
                                <video controls>
                                    <source src={props.attributes.videoMediaDesktop.url} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex gap-x-8 p-4 my-2 border-slate-500 border  ">
                        <div className="col-4/12 flex-col gap-y-8">
                            <MediaGalleryButton 
                                text="Vídeo para disp.móvel"                                
                                media={ props.attributes.videoMediaMobile.id }
                                setMedia={ handleSelectVideoMediaMobile }
                                ALLOWED_MEDIA_TYPES = {['video']}
                            />
                        </div>
                        <div className="col-8/12">
                            { props.attributes.videoMediaMobile.id && (
                                <video controls>
                                    <source src={props.attributes.videoMediaMobile.url} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-x-8 p-4 my-2 border-slate-500 border  ">
                        <div className="col-4/12 flex-initial">
                            <MediaGalleryButton 
                                text="Selecione o poster do vídeo"
                                media={ props.attributes.videoPoster }
                                setMedia={ handleSelectVideoPoster }
                                ALLOWED_MEDIA_TYPES = {['image']}
                                />
                        </div>
                        <div className="col-6/12 w-1/2 flex-initital">
                        { props.attributes.videoPoster !== "" ? (
                            <img 
                            src={props.attributes.videoPoster}                                    
                            />
                            ) : <ImagePlaceholder /> }
                        </div>
                        <div className="col-1/12 w-1/6 hidden lg:block">
                            <p className="text-slate-400">A imagem de post carrega antes do vídeo e é mostrada em situações onde a rede apresenta dificuldades para iniciar o vídeo, ou o dispositivo não permite a execução de vídeos, quer seja por bloquei pro ativo ou por incapacidade dohardware.</p>
                        </div>
                    </div>

                    <div className="flex gap-x-8 p-4 my-2 border-slate-500 border  ">
                        <div className="col-4/12 flex-col gap-y-8">
                            <TextControl
                                label="Video no Youtube"
                                help="Informe o link do vídeo no Youtube. Ele será usado tanto para exibir o vídeo quanto como destino de quem clicar num botão para ver o projeto."
                                value={props.attributes.videoYoutube}
                                onChange={(value) => {
                                    setBlockData({ ...blockData, videoYoutube: value });
                                    props.setAttributes({ videoYoutube: value });
                                }}
                            />
                        </div>
                        <div classNme="col-8/12">
                            { props.attributes.videoYoutube !== "" ? (
                            <div className="video-container">
                                <ReactPlayer 
                                    url={props.attributes.videoYoutube}
                                    height="20vw"
                                    controls={true}
                                />
                            </div> ) : <ImagePlaceholder /> }
                        </div>
                    </div>

                    <div className="flex gap-x-8 p-4 my-2 border-slate-500 border  flex-wrap">
                        <div className="col-4/12 gap-y-8">
                            <TextControl
                                label="Video no Vimeo"
                                help="Informe o link do vídeo no Vimeo. Ele será usado tanto para exibir o vídeo quanto como destino de quem clicar num botão para ver o projeto."
                                value={props.attributes.videoVimeo}
                                onChange={(value) => {
                                    setBlockData({ ...blockData, videoVimeo: value });
                                    props.setAttributes({ videoVimeo: value });
                                }}
                            />
                        </div>
                        <div classNme="col-8/12">
                            { props.attributes.videoVimeo !== "" ? (
                                <ReactPlayer 
                                    url={props.attributes.videoVimeo}
                                    controls={true}
                                    className="w-100 border-red-500 border"
                                />
                           ) : <ImagePlaceholder /> }
                        </div>
                    </div>

                    <div className="flex gap-x-8 p-4 my-2 border-slate-500 border flex-wrap gap-y-8">
                        <div className="col-12/12 flex-none">
                            <TextControl
                                label="Video URL"
                                help="Informe a URL do vídeo. URL é o endereço de internet onde esse vídeo está hospedado."
                                value={props.attributes.videoURL}
                                onChange={(value) => {
                                    setBlockData({ ...blockData, videoURL: value });
                                    props.setAttributes({ videoURL: value });
                                }}
                            />
                        </div>
                        <div classNme="col-12/12 flex-initial">
                        { props.attributes.videoURL !== "" ? (
                            <ReactPlayer 
                                url={props.attributes.videoURL}                                
                                height="25vw"
                                controls={true}
                            />
                         ) : <ImagePlaceholder /> }
                        </div>
                    </div>
                </SectionContent>

                <SectionTitle>Informe os dados de autoria do projeto</SectionTitle>
                <SectionContent>
                    <div className="flex-col gap-y-8">
                            <TextControl
                                label="Criado por"
                                help="Informe o nome do autor do projeto"
                                value={props.attributes.author}
                                onChange={(value) => {
                                    setBlockData({ ...blockData, author: value });
                                    props.setAttributes({ author: value });
                                }}
                            />
                            <TextControl
                                label="Dirigido por"
                                help="Informe o nome do diretor"
                                value={props.attributes.director}
                                onChange={(value) => {
                                    setBlockData({ ...blockData, director: value });
                                    props.setAttributes({ director: value });
                                }}
                            />
                            <TextControl
                                label="Escrito por"
                                help="Informe o nome da(s) pessoa(a) criadoras desse projeto"
                                value={props.attributes.writer}
                                onChange={(value) => {
                                    setBlockData({ ...blockData, writer: value });
                                    props.setAttributes({ writer: value });
                                }}
                            />
                    </div>
                </SectionContent>                        
            </BlockContainer>
            </div>
    }

const BlockContainer = ({ children }) => (
    <ol
        className={`container mx-auto bg-slate-300 flex-col gap-y-16 p-10 list-insite list-decimal`}>
        {children}
    </ol>
);

    const SectionTitle = ({ children }) => (
        <li className="text-xl font-bold text-slate-800 my-4 mx-2">{children}</li>
    );
    
    const SectionContent = ({ className, children }) => (
        <div className={`
            flex-row 
            gap-y-16 
            md:ml-16 
            sm:ml-8 
            p-4 
            my-10 
            mr-4 
            bg-slate-200 
            shadow-2xl
            rounded-xl
        `}>
            {children}
        </div>
    );
