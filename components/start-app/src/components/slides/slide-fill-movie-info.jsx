import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import RenderButtons from './render-buttons';
import "./overlays.scss";
import "./common.scss";

export default function SlideFillMovieInfo( props ){
    return <SlideContent 
        initial={{ opacity: 0 }}
        whileInView={{ 
            opacity: 1,
            transition:{ delay: 0.2, duration: 0.8 },
        }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, margin: "50px 0px 50px 0px" }}                
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
                    playbackRate={0.8}
                    style={{ position: "absolute", top: 0, left: 0 }}
                />
                 <Overlay className={props.overlay}></Overlay>
            </div>
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
                </motion.div>
                <RenderButtons buttons={props.buttons} />
            </motion.div>
        </div>
    </SlideContent>          
}

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
    
    .slideFillMovie__container__text {
        --ml: 4vw;
        position: absolute;
        top: 50%;
        left: 0;
        text-align: left;
        margin-left: var(--ml);
        transform: translateY(-50%);
        
        .title__container {
            overflow: hidden;
            width: 40vw;

            h1 {
                font-size: 3rem;
                text-transform: uppercase;
                width: 40vw;
                letter-spacing: 1px;
                overflow: hidden;
                height: 100%;
                font-weight: var(--text-light);
                display: flex;
                align-items: flex-end;
                line-height: 1.4;
            }
        }

        .title-underline {
            width: calc( 50vw - var(--ml) );
            height: 2px;
            background-color: #fff;
            margin-top: 1rem;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                width: 16px;
                height: 16px;
                border: 5px solid white;
                border-radius: 50%;
                bottom: -8px;
                right: -16px;
                opacity: var(--right-dot-opacity, 0);
                box-sizing: border-box;
            }
        }

        .details {
            display: grid;
            grid-template-columns: fit-content(100%) fit-content(100%);
            grid-template-rows: 1fr 1fr 1fr 1fr;
            gap: 1rem;
            margin-top: 2rem;

            .creator-label, .writer-label, .director-label {
                font-weight: var(--text-light);
            }
            .creator-value, .writer-value, .director-value {
                font-weight: var(--text-bold);
            }

            .details__links {
                grid-column: 1 / 3;
                grid-row: 4 / 5;
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
                
                span {
                    position: relative;
                    padding: 0.5rem 1rem;
                    border: 1px solid #aaa;
                    border-radius: 99px;
                    background-color: #3d3d3d;
                    color: #aaa;
                    font-weight: var(--text-bold);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transform: scale(1);
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        color: white;
                        background-color: #000;
                        transform: scale(1.2);
                        transition: all 0.3s ease-in-out;                        
                    }
                    
                }
            }

        }


    }
    
`
