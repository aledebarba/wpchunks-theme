import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Opening from "../components/opening";
import Menu from "../components/menu";
import VerticalSwiper from "../components/vertical-swiper";
import SlidingFooter from "../components/SlidingFooter";
import { usePageHeight, useSettings } from "../components/useHooks";

export default function Index(props) {
    let dev = useSettings.show_intro === "0" || false;

    const [visible, setVisible] = useState(true);
    const [status, setStatus] = useState(dev ? "interface-is-active" : "init");

    useEffect(() => {
        // if opening status is complete, wait 3s and set loaded to true
        // this will trigger the fade in animation
        if (status == "complete") {
            setStatus("animate-interface");
        }
        if (status == "animate-interface") {
            setTimeout(() => {
                props.setLoaded(true);
                setStatus("interface-is-active");
            }, 8000);
        }
    }, [status]);

    useEffect(() => {
        usePageHeight("100vh", "hidden");
    }, []);

    return (
        <>
            {!props.loaded && !dev && <Opening setStatus={setStatus} />}
            <Main
                className={
                    status == "interface-is-active"
                        ? "noFadeIn"
                        : status == "animate-interface"
                        ? "withFadeIn"
                        : props.loaded
                        ? "noFadeIn"
                        : ""
                }>
                <Content>
                    <HeroHeader>
                        <VerticalSwiper setVisible={setVisible} />
                        {visible && (
                            <>
                                <Menu />
                                <MouseScrollIcon />
                                { useSettings.fixedFooter === 1 && <SlidingFooter /> }
                            </>
                        )}
                    </HeroHeader>
                </Content>
            </Main>
        </>
    );
}

const mainFadeIn = keyframes`
    0% {        
        opacity: 0;
        transform: scale( 0 );
        border-radius: 999px;
    }
    50% {
        border-radius: 64px; 
        opacity: 0.3;       
    }
    75% {        
        opacity: 0.5;
        border-radius: 0;
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const Main = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    opacity: 0;

    &.withFadeIn {
        animation: ${mainFadeIn} 3s ease-in-out 1 forwards 1s;
    }

    &.noFadeIn {
        opacity: 1;
        animation: none;
    }
`;

const Content = styled.div`
    position: relative;
`;

const HeroHeader = styled.header`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
`;

const MouseScrollIcon = () => {
    const styles = {
        position: "absolute",
        bottom: "15vh",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
    };
    return (
        <div className="scrolldown" style={styles}>
            <div className="chevrons">
                <div className="chevrondown"></div>
                <div className="chevrondown"></div>
            </div>
        </div>
    );
};

const MouseScrollIconStyle = styled.div``;
