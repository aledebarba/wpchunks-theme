import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import RenderButtons from './render-buttons';
import "./background-styles.scss";
import "./overlays.scss";
import "./common.scss";

export default function Slide2ColsMovieInfo( props ){
    return <SlideContent 
        initial={{ opacity: 0 }}
        whileInView={{ 
            opacity: 1,
            transition:{ delay: 0.2, duration: 0.8 },
        }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, margin: "50px 0px 50px 0px" }}           
        className={props.style}
        >

        <motion.div className="slideFillMovie__container" 
            initial={{ 
                opacity: 0, 
                x: "60vw",
                y: "-60%",
            }}
            whileInView={{
                opacity: 1,
                x: "1rem",
            }}
            transition={{
                duration: 1,
            }}
        >
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
        </motion.div>
        
        <motion.div className="slideFillMovie__container__text">
                <motion.div
                    variants={titleContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    className="title__container"
                >
                    <h1>{props.title}</h1>
                </motion.div>
            <motion.div 
                variants={titleUnderlineVariants}
                initial="hidden"
                whileInView="show"
                className="title-underline"></motion.div>
            <motion.div 
                className="details"
                variants={detailsContainerVariants}
                initial="hidden"
                whileInView="show"
            >
                <motion.span 
                    className="creator-label"
                    variants={detailsVariants}
                >
                        Criado por:
                </motion.span>
                <motion.span 
                    className="creator-value"
                    variants={detailsValuesVariants}
                >
                        {props.creator}
                </motion.span>
                <motion.span 
                    className='writer-label'
                    variants={detailsVariants}
                >
                        Escrito por:
                </motion.span>
                <motion.span 
                    className='writer-value'
                    variants={detailsValuesVariants}
                >
                        {props.writer}
                </motion.span>
                <motion.span 
                    className='director-label'
                    variants={detailsVariants}
                >
                        Dirigido por:
                </motion.span>
                <motion.span 
                    className='director-value'
                    variants={detailsValuesVariants}
                >
                        {props.director}
                </motion.span>

                <RenderButtons buttons={props.buttons} />

            </motion.div>
        </motion.div>
    </SlideContent>          
}

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`

const titleContainerVariants = {
    hidden: {
        width: 0,           
    },
    show: {
        width: "40vw",
        transition: {
            delay: 0.5,
            duration: 0.8,
        }
    }
}

const titleUnderlineVariants = {
    hidden: {
        width: 0,
        "--right-dot-opacity": 0,
    },
    show: {
        width: "calc( 50vw - var(--ml) )",
        "--right-dot-opacity": 1,
        transition: {            
            duration: 0.8,
            "--right-dot-opacity": {
                duration: 0.5,
            }
        }
    }
}

const detailsContainerVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
}

const detailsVariants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    show: {
        opacity: 1,        
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const detailsValuesVariants = {
    hidden: {
        opacity: 0,
        x: 20
    },
    show: {
        opacity: 1,        
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}


const SlideContent = styled(motion.div)`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    margin-top: calc( -1 * var(--footer-compensation));

    .slideFillMovie__container {
        position: absolute;
        top: 50%;
        left: 35vw;
        width: 60vw;
        height: 60vh;
        transform: translateY(-60%);
        border-radius: 64px;
        overflow: hidden;
        box-sizing: border-box;
        
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;            
        }
    }

    .slideFillMovie__container__text {
        
    }
    
`
