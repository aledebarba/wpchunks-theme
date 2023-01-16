import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import RenderButtons from './render-buttons';
import "./background-styles.scss";
import "./overlays.scss";
import "./common.scss";

export default function Slide3ColsInfoMovieMovie( props ){
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

        <motion.div className="slideFillMovie__container" 
            variants={ movieContainerVariants }
            initial="hidden"
            whileInView="show"
        >
            <div className="slideFillMovie__container__video" >
                <ReactPlayer
                    url={props.video.default}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="85vh"
                    //style={{ position: "absolute", top: 0, left: 0, objectFit: "none" }}
                />
                 <Overlay className={props.overlay}></Overlay>
            </div>
        </motion.div>

        <motion.div className="slideFillMovie2__container" 
            variants={ movie2ContainerVariants }
            initial="hidden"
            whileInView="show"
        >
            <div className="slideFillMovie__container__video2">
                <ReactPlayer
                    url={props.video2.default}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="30vw"
                    height="50vh"
                    style={{ position: "absolute", top: 0, left: 0, objectFit: "none" }}
                />
                 <Overlay className={props.overlay}></Overlay>
            </div>
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
        width: "var(--title-width)",
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
        width: "23vw",
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

const movieContainerVariants = {
    hidden: {
        height: 0,
        borderRadius: 0
    },
    show: {
        height: "75%",
        borderRadius: "48px",
        transition: {
            delay: 0.8,
            duration: 1,
            ease: "easeInOut",
            borderRadius: {
                delay: 1,
                duration: 0.5,
            }
        }
    },  
    

}
const movie2ContainerVariants = {
    hidden: {
        height: 0,
        borderRadius: 0
    },
    show: {
        height: "50%",
        borderRadius: "48px",
        transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
            borderRadius: {
                delay: 1,
                duration: 0.5,
            }
        }
    },  
    

}


const SlideContent = styled(motion.div)`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2vw;
    margin-top: calc( -1 * var(--footer-compensation));

    .slideFillMovie__container,
    .slideFillMovie2__container {
        position: relative;
        border-radius: 0;
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

    .slideFillMovie__container {
        width: 20%;
        height: 75%;        
        align-self: flex-start;
        margin: 5vh 0 auto 0;
    }
    .slideFillMovie2__container {
        width: 30%;
        height: 50%;
        align-self: center;     
        transform: translateY(-10%);   
    }

    .slideFillMovie__container__text {
        --title-width: 25vw;
        text-align: left;
        width: var(--title-width);
        overflow: hidden;        
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

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
