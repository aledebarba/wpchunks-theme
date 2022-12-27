/* function to create the lazy load react Image component with suport for lazy loading, loading icon, error icon, and placeholder */
import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ image, alt, width, height, lazy = true }) => {
    const [ loaded, setLoaded ] = useState(false);
    const [ errorLoading, setErrorLoading ] = useState(false);
    const { ref, inView } = useInView({ threshold: 0 });

    useEffect(() => {
        if (lazy && !inView) {
            return;
        }
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setLoaded(true);
        }
        img.onerror = () => {
            setErrorLoading(true);
        }
    }, [image, lazy, inView]);

    return (
        <ImageContainer width={width} height={height} ref={ref}>
            <AnimatePresence>
                {errorLoading &&
                    <ErrorLoadingImage message="houve um erro de rede ao carregar essa imagem" />
                }
                {!errorLoading && !loaded &&
                    <LoadingAnimation />
                }
                {!errorLoading && loaded &&
                    <motion.img
                        key="loaded"
                        src = {image}
                        alt={alt}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                }
            </AnimatePresence>
        </ImageContainer>
    );
}

const ImageContainer = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const AbsoluteCentered = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    display: grid;
    place-items: center;
`

const ErrorLoadingImage = ({ message }) => {
    return <AbsoluteCentered>
                <p>{message}</p>
            </AbsoluteCentered>
}
            
const LoadingAnimation = (props) => {
    return ( 
        <AbsoluteCentered>
            <svg
                id="L7"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 100 100"
                xmlSpace="preserve"
                {...props}
            >
                <path
                fill="#fff"
                d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3   c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
                >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="2s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                />
                </path>
                <path
                fill="#fff"
                d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7   c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
                >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="-360 50 50"
                    repeatCount="indefinite"
                />
                </path>
                <path
                fill="#fff"
                d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5   L82,35.7z"
                >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="2s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                />
                </path>
            </svg>
            </AbsoluteCentered>
    )};

export default LazyImage;