import { DefaultScreenPreview } from "./default-screen-preview";


// TODO: ADD COLOR PICKER 

export function MormalSliderPreview({ images }) {
    return (<>
        {images.length == 0 ? (
            <DefaultScreenPreview message={"Esse projeto não tem imagens de slide. Use o botão [ Editar Projeto ] e adicione imagens de sldeshow antes de selecionar essa opção"} />
        ) : (
            <div className="screen-type--mormal-slider">
                <div className="inner">
                    {images.map((image, index) => {
                        // get a random number between -15 and 15
                        let randomY = (Math.floor(Math.random() * 31) - 15).toString() + "%";
                        let randomDelay = ((Math.floor(Math.random() * 5) + 1) / 10).toString() + "s";
                        console.log(randomY, randomDelay);
                        return (
                            <img src={image} key={index} className="slider-image" style={{ "--startY": randomY, "--delay": randomDelay }} />
                        );
                    })}
                </div>
            </div>
        )}
    </>
    );
}
