import React from "react";
import { Menu } from "../components/menu";
import VerticalSwiper from "../components/vertical-swiper";
import styled from "styled-components";
import SlidingFooter from "../components/SlidingFooter";
import Opening from "../components/opening";

export default function Index() {
    const [ visible, setVisible ] = React.useState(true);

    return (
        <Main>
            <Opening />
            <Content>
                <HeroHeader>
                    <VerticalSwiper setVisible={setVisible} />
                   { visible && <>
                        <Menu />
                        <MouseScrollIcon />
                        <SlidingFooter />
                    </>}
                </HeroHeader>
            </Content>            
        </Main>
    );
}

const Main = styled.main`
    position: absolute;    
    width: 100vw;
    height: 100vh;
    overflow: hidden;
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
        zIndex: 100
    }
    return (
        <div className='scrolldown' style={styles} >
            <div className="chevrons">
                <div className='chevrondown'></div>
                <div className='chevrondown'></div>
            </div>
        </div>
    )
};

const MouseScrollIconStyle = styled.div`

`