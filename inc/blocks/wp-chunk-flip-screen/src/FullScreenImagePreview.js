import { FlexBlock } from "@wordpress/components";
import { DefaultScreenPreview } from "./default-screen-preview";
import { isNulled } from "./isNulled";
import { RenderPreview } from "./RenderPreview";

export function FullScreenImagePreview( { props, project } ) {
    return (
        <FlexBlock className="screen-type">
            {isNulled(project.image) ? (
                <RenderPreview props={ props } project={ project }>
                    <DefaultScreenPreview message="Esse projeto não possui uma imagem de capa (ou poster), por isso não é possível visualizar a tela de apresentação. Você pode usar o botão [ Editar Projeto ] para adicionar uma imagem de capa ao projeto." />
                </RenderPreview>
            ) : (
                <RenderPreview
                    props={props}
                    project={ project }>
                    <img
                        className="screen-type--image"
                        src={project.image} />
                </RenderPreview>
            )}
        </FlexBlock>
    );
}
