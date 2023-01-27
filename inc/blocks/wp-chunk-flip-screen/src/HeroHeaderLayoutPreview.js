import { isNulled } from "./isNulled";

export function HeroHeaderLayoutPreview({ bg = "", img = "" }) {
    return (
        <div className="layout-header-preview" style={{ "--bg": bg }}>
            <div className="media-chooser">
                {isNulled(img) ? (
                    <div className="no-image">
                        Esse projeto não tem uma imagem de capa / poster.
                    </div>
                ) : (
                    <img src={img} className="image-preview" />
                )}
            </div>
        </div>
    );
}
