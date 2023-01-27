import { DefaultScreenPreview } from "./default-screen-preview";

export function SliderPreview({ images }) {
    let styles = `
        .screen-type--slider .inner {
            width: ${images.length * 100}%;
            left: 0;
            animation: slide ${images.length * 2}s ease-in-out infinite alternate 1s;
        }

        .screen-type--slider .slider-image {
            width: calc( 100% / ${images.length} );
        }
        .screen-type--slider .slider-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @keyframes slide {
    `;
    let extra = 100 / images.length;
    for (let i = 0; i < images.length - 2; i++) {
        styles += `${(i / images.length) * 100}% { left: ${i * -(100 + extra)}% }`;
    }
    styles += "} }";
    return (
        <>
            <style>{styles}</style>
            {images.length == 0 ? (
                <DefaultScreenPreview message={"Esse projeto não tem imagens de slide. Use o botão [ Editar Projeto ] e adicione imagens de sldeshow antes de selecionar essa opção"} />
            ) : (
            <div className="screen-type--slider">
                <div className="inner">
                    {images.map((image, index) => (
                        <img src={image} key={index} className="slider-image" />
                    ))}
                </div>
            </div>
            )}
        </>
    );
}
