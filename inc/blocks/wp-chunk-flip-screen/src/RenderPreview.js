import { isNulled, notNulledOrEmpty } from "./isNulled";

export const RenderPreview = function ({ children, props, project }) {
    const { gradient, showLongTitle, showChannel, showTitle, showType } = props.attributes;

    return (
        <div className="screen-type" style={{ pointerEvents: "all"}} >
            <div className="preview-wrapper">
                <div className="preview-wrapper--inner">
                    {!isNulled(gradient) && (
                        <div
                            className="background"
                            style={{ "--bg": gradient }}></div>
                    )}
                    <div className="children">{children}</div>
                    <div className="overlay-elements">
                        <div className="text">
                            {showTitle === true && (
                                <div className="title">
                                    {project.title.rendered}
                                </div>
                            )}
                            {showLongTitle === true && (
                                <div className="long-title">
                                    {project.title_ext}
                                </div>
                            )}
                            <div className="info">
                                {showType === true && (
                                    <div className="type">{project.tipo}</div>
                                )}
                                {showChannel === true && (
                                    <div className="channel">
                                        {project.canal}
                                    </div>
                                )}
                            </div>
                            <div className="button">Ver Projeto</div>
                        </div>
                        <div className="graphics">
                            <div className="dots"></div>
                            <div className="scroll-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
