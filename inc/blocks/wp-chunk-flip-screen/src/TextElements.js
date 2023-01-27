import { ToggleControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { isNulled } from "./isNulled";

export function TextElements({ props, project }) {
    const [toggles, setToggles] = useState({
        title: isNulled(props.attributes.showTitle)
            ? true
            : props.attributes.showTitle,
        longTitle: isNulled(props.attributes.showLongTitle)
            ? false
            : props.attributes.showLongTitle,
        channel: isNulled(props.attributes.showChannel)
            ? true
            : props.attributes.showChannel,
        type: isNulled(props.attributes.showType)
            ? true
            : props.attributes.showType,
    });

    const handleToggles = (name, value) => {
        const newToggles = toggles;
        if (name == "title") {
            newToggles.longTitle = !value;
        }
        if (name == "longTitle") {
            newToggles.title = !value;
        }
        newToggles[name] = value;

        setToggles({
            ...toggles,
            ...newToggles,
        });

        props.setAttributes({
            showTitle: toggles.title,
            showLongTitle: toggles.longTitle,
            showChannel: toggles.channel,
            showType: toggles.type,
        });
    };

    if (isNulled(project)) {
        return <div className="text-elements--wrapper"></div>;
    }

    return (
        <div className="text-elements--wrapper">
            <div className="header control-label">
                <h5>Opções de texto</h5>
            </div>
            <div className="text-elements--title">
                <ToggleControl
                    checked={toggles.title}
                    onChange={(value) => {
                        handleToggles("title", value);
                    }} />
                <span>Mostrar titulo</span>
                <p style={{ opacity: toggles.title ? 1 : 0.5 }}>
                    {project.title.rendered}
                </p>
            </div>
            <div className="text-elements--long-title">
                <ToggleControl
                    checked={toggles.longTitle}
                    onChange={(value) => {
                        handleToggles("longTitle", value);
                    }} />
                <span>Mostrar titulo longo</span>
                <p style={{ opacity: toggles.longTitle ? 1 : 0.5 }}>
                    {project.title_ext}
                </p>
            </div>
            <div className="text-elements--channel">
                <ToggleControl
                    checked={toggles.channel}
                    onChange={(value) => {
                        handleToggles("channel", value);
                    }} />
                <span>Mostrar Canal</span>
                <p style={{ opacity: toggles.channel ? 1 : 0.5 }}>
                    {project.canal}
                </p>
            </div>
            <div className="text-elements--type">
                <ToggleControl
                    checked={toggles.type}
                    onChange={(value) => {
                        handleToggles("type", value);
                    }} />
                <span>Mostrar Tipo</span>
                <p style={{ opacity: toggles.type ? 1 : 0.5 }}>
                    {project.tipo}
                </p>
            </div>
        </div>
    );
}
