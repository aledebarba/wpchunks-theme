import "./wp-chunk-flip-screen.scss";
import {
    Flex,
    FlexBlock,
    FlexItem,
    RadioControl,
    Icon,
    SelectControl,
    CustomSelectControl,
} from "@wordpress/components";

import { useState } from "@wordpress/element";
import { DefaultScreenPreview } from "./default-screen-preview";
import { RenderPreview } from "./RenderPreview";
import { SliderPreview } from "./SliderPreview";
import { TextElements } from "./TextElements";
import { isNulled } from "./isNulled";
import { EditPostButton } from "./EditPostButton";
import { HeroHeaderLayoutPreview } from "./HeroHeaderLayoutPreview";
import { VideoPreview } from "./VideoPreview";
import { PickGradientControl } from "./PickGradientControl";
import { MormalSliderPreview } from "./MormalSliderPreview";
import { Loading } from "./Loading";
import { FullScreenImagePreview } from "./FullScreenImagePreview";

const { useSelect } = wp.data;

wp.blocks.registerBlockType("wpchunks/wp-chunk-flip-screen", {
    title: "WPC FullScreen",
    icon: "desktop",
    category: "common",
    attributes: {
        projectId: {
            type: "string",
        },
        selectedVideo: {
            type: "string",
        },
        screenLayout: {
            type: "string",
        },
        gradient: {
            type: "string",
        },
        showTitle: { type: "boolean" },
        showLongTitle: { type: "boolean" },
        showChannel: { type: "boolean" },
        showType: { type: "boolean" },
        showLink: { type: "boolean" },
        linkAction: { type: "string" },
        linkTarget: { type: "string" },
        mediaId: { type: "string" },
    },
    edit: (props) => FrontEnd(props),
    save: function (props) {
        return null;
    },
});

const FrontEnd = (props) => {
    const [option, setOption] = useState(props.attributes.screenLayout);
    const [gradient, setGradient] = useState(props.attributes.gradient);

    const initialProject = {
        id: props.attributes.projectId,
        selectedVideo: props.attributes.selectedVideo,
        videos: [],
        image: "",
        images: "",
        editLink: "",
        title: "",
        showTitle: props.attributes.showTitle || true,
        showType: props.attributes.showType || true,
        showChannel: props.attributes.showChannel || true,
        showLink: props.attributes.showLink || true,
        linkAction: props.attributes.linkAction || "play",
        linkTarget: props.attributes.linkTarget || "_blank",
        mediaId: props.attributes.mediaId || "",
        render: false,
    };

    const [project, setProject] = useState(initialProject);

    function getCurrentProject(projectId) {
        const res = projects.find((project) => project.id == projectId);
        return res;
    }

    function extractProjectVideos(projectId) {
        if (projectId == null) return [];
        let current = getCurrentProject(projectId);
        let projectVideos = [];

        projectVideos.push({ label: "Selecione um video", value: "" });
        if (current.youtube !== "") {
            projectVideos.push({ label: "Youtube", value: current.youtube });
        }
        if (current.vimeo !== "") {
            projectVideos.push({ label: "VIMEO", value: current.vimeo });
        }
        if (current.video_url !== "") {
            projectVideos.push({
                label: "URL Externa",
                value: current.video_url,
            });
        }
        if (current.video) {
            projectVideos.push({
                label: "Video da Galeria",
                value: current.video,
            });
        }
        return projectVideos;
    }

    const handleSelectProjectChange = (value) => {
        let newProjectValues = project;
        let newProject = getCurrentProject(value);
        if (newProject === undefined) {
            newProjectValues = { ...initialProject, render: true, id: "" };
            props.setAttributes({ projectId: "" });
            setOption("");
        } else {
            newProjectValues.id = value;
            newProjectValues.videos = extractProjectVideos(value);
            newProjectValues.image = newProject?.poster
                ? newProject.poster
                : "";
            newProjectValues.images = newProject?.slider_media
                ? newProject.slider_media.split(" ")
                : [];
            newProjectValues.render = true;
            props.setAttributes({ projectId: value });
        }
        setProject({ ...project, ...newProjectValues });
        console.log(project.videos);
    };

    const handleChangeOption = (item) => {
        let value = item.selectedItem.key;
        setOption(value);
        props.setAttributes({ screenLayout: value });
    };

    // get wordpress data
    const projects = useSelect((select) => {
        return select("core").getEntityRecords("postType", "projeto", {
            per_page: -1,
        });
    }, []);

    // return loading if projects is null
    if (projects === null || projects === undefined) {
        return <Loading message="Carregando módulos" />;
    }
    if (project.render === false) {
        handleSelectProjectChange(props.attributes.projectId);
    }

    return (
        <div className="wpchunks-block--flip-screen-block">
            <div className="block-info">
                <Icon icon="video-alt" className="icon" />
                <span className="block-type">Seção de página</span>
                <span className="block-desc">Projeto a/v</span>
                <span className="block-title">
                    {project.id
                        ? getCurrentProject(project.id).title.rendered
                        : ""}
                </span>
                <span className="block-edit-button">
                    <EditPostButton post_id={project.id} />
                </span>
            </div>

            <Flex align="top" className="block-main-selectors">
                <FlexItem className="block-main-selectors--left-col">
                    <div className="header control-label">
                        <h5>
                            {props.attributes.projectId
                                ? "Projeto Selecionado"
                                : "Nenhum projeto selecionado"}
                        </h5>
                    </div>
                    <div className="controls">
                        <SelectControl
                            label="Selecione um projeto"
                            hideLabelFromVision={true}
                            style={{ fontSize: "1rem" }}
                            value={props.attributes.projectId}
                            onChange={(selection) =>
                                handleSelectProjectChange(selection)
                            }
                            __nextHasNoMarginBottom>
                            <option value="">Selecione um projeto</option>
                            {projects.map((project) => {
                                return (
                                    <option value={project.id}>
                                        {project.title.rendered}
                                    </option>
                                );
                            })}
                        </SelectControl>
                    </div>
                    {!isNulled(project.id) && (
                        <>
                            <div className="header control-label">
                                <h5>Selecione o layout</h5>
                            </div>
                            <div className="controls">
                                <CustomSelectControl
                                    className="custom-select---element"
                                    value={screenLayoutOptions().find(
                                        (option) =>
                                            option.key ===
                                            props.attributes.screenLayout
                                    )}
                                    onChange={(value) => {
                                        handleChangeOption(value);
                                    }}
                                    __nextUnconstrainedWidth
                                    options={screenLayoutOptions()}
                                />
                            </div>

                            {option === "video" && (
                                <>
                                    <div className="header control-label">
                                        <h5>
                                            {props.attributes.projectId
                                                ? "Origem do vídeo"
                                                : "Nenhum vídeo selecionado"}
                                        </h5>
                                    </div>
                                    <div className="controls">
                                        {project.videos.length > 0 && (
                                            <SelectControl
                                                className="choose-video"
                                                selected={
                                                    props.attributes
                                                        .selectedVideo
                                                }
                                                options={project.videos}
                                                onChange={(value) => {
                                                    setProject({
                                                        ...project,
                                                        selectedVideo: value,
                                                    });

                                                    props.setAttributes({
                                                        selectedVideo: value,
                                                    });
                                                }}
                                            />
                                        )}

                                        {project.videos.length == 0 && (
                                            <div className="error">
                                                <small>
                                                    Esse projeto não possui
                                                    nenhum video cadastrado, use
                                                    o botão{" "}
                                                    <EditPostButton
                                                        size="small"
                                                        type="link"
                                                        post_id={project.id}
                                                    />{" "}
                                                    para adicionar um video.
                                                </small>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}

                            {option === "default" && (
                                <PickGradientControl
                                    props={props}
                                    setGradient={setGradient}
                                />
                            )}
                        </>
                    )}
                </FlexItem>

                {/* NOTE: Renderiza a área de preview de acordo com a opção do usuário */}

                <FlexBlock
                    className="render-screen-preview"
                    style={{ maxWidth: "50%" }}>
                    {isNulled(option) && (
                        <FlexBlock className="screen-type">
                            <RenderPreview props={props}>
                                <DefaultScreenPreview />
                            </RenderPreview>
                        </FlexBlock>
                    )}

                    {option === "image" && (
                        <FullScreenImagePreview
                            project={getCurrentProject(project.id)}
                            props={props}>                            
                        </FullScreenImagePreview>
                    )}

                    {option === "slider" && (
                        <FlexBlock className="screen-type">
                            <RenderPreview
                                props={props}
                                project={getCurrentProject(project.id)}>
                                <SliderPreview images={project.images} />
                            </RenderPreview>
                        </FlexBlock>
                    )}

                    {option === "mormal" && (
                        <FlexBlock className="screen-type">
                            <RenderPreview
                                props={props}
                                project={getCurrentProject(project.id)}>
                                <MormalSliderPreview images={project.images} />
                            </RenderPreview>
                        </FlexBlock>
                    )}

                    {option === "default" && (
                        <FlexBlock className="screen-type">
                            <RenderPreview
                                props={props}
                                project={getCurrentProject(project.id)}>
                                <HeroHeaderLayoutPreview
                                    img={project.image}
                                    bg={props.attributes.gradient}
                                />
                            </RenderPreview>
                        </FlexBlock>
                    )}

                    {option === "video" && (
                        <RenderPreview
                            props={props}
                            project={getCurrentProject(project.id)}>
                            <VideoPreview
                                videoUrl={project.selectedVideo}
                                poster={project.image}
                            />
                        </RenderPreview>
                    )}
                </FlexBlock>
            </Flex>

            {!isNulled(project.id) && (
                <TextElements
                    props={props}
                    project={getCurrentProject(project.id)}
                />
            )}
        </div>
    );
};

function screenLayoutOptions() {
    return [
        {
            className: "custom-selector-option",
            key: "",
            name: (
                <div>
                    <span className="option">(nada selecionado)</span>
                </div>
            ),
        },
        {
            className: "custom-selector-option",
            key: "default",
            name: (
                <div>
                    <span className="option">Padrão</span>
                    <span className="help">
                        Fundo gradiente, com titulos à esquerda e mídia à
                        direita
                    </span>
                </div>
            ),
        },
        {
            key: "video",
            className: "custom-selector-option",
            name: (
                <div>
                    <span className="option">Video</span>
                    <span className="help">
                        Video preenchendo o fundo da tela
                    </span>
                </div>
            ),
        },
        {
            className: "custom-selector-option",
            key: "image",
            name: (
                <div>
                    <span className="option">Imagem</span>
                    <span className="help">
                        Imagem preenchendo o fundo da tela.
                    </span>
                </div>
            ),
        },
        {
            className: "custom-selector-option",
            key: "slider",
            name: (
                <div>
                    <span className="option">Slider</span>
                    <span className="help">
                        Slider horizontal de imagens grandes.
                    </span>
                </div>
            ),
        },
        {
            className: "custom-selector-option",
            key: "mormal",
            name: (
                <div>
                    <span className="option">Mormal</span>
                    <span className="help">Slider padrão Clarice Mormal.</span>
                </div>
            ),
        },
    ];
}
