import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import "./overlays.scss";

export default function SlideFillMovie( props ){
    return <motion.div 
        className="slideFillMovie"
        initial={{ opacity: 0 }}
        whileInView={{ 
            opacity: 1,
            transition:{ delay: 0.2, duration: 0.8 },
        }}
        exit={{ opacity: 0.5, transition: { duration: 1 } }}
        viewport={{ once: false, margin: "50px 0px 50px 0px" }}   
        styles={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
        }}     
        >
        <div className="slideFillMovie__container">
            <div className="slideFillMovie__container__video">
                <ReactPlayer
                    url={props.video.default}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Overlay className={props.overlay}></Overlay>
            </div>
        </div>          
    </motion.div>
}

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`

