import ReactPlayer from "react-player";
import { DefaultScreenPreview } from "./default-screen-preview";
import { isNulled, isNulledOrEmpty } from "./isNulled";

export function VideoPreview({ videoUrl = "", poster = "" }) {
    return (
        <div className="layout-video-preview">
            <div className="video-container">
                {isNulledOrEmpty( videoUrl ) ? (
                    <DefaultScreenPreview message="Não há nenhum video selecionado." />
                ) : (
                    <>
                    { !isNulledOrEmpty( poster ) && (
                        <img src={poster} alt="Poster" className="renderPosterImage"/>
                    )}
                    <ReactPlayer
                        url={ videoUrl }
                        width="100%%"
                        height="100%"
                        controls={false}
                        muted={true}
                        autoplay={true}
                        playing={true}
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 }
                            },
                            vimeo: { responsive: true }
                        }}
                        vimeoConfig={{ responsive: true, loop: true }} />
                    </>
                )}
            </div>
        </div>
    );
}
