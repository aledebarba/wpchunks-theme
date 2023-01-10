import React from "react";
import { Menu } from "../components/menu";
import VerticalSwiper from "../components/vertical-swiper";
import styled from "styled-components";
import SlidingFooter from "../components/SlidingFooter";
import { Link } from "react-router-dom";

export default function Index() {

    
    const [ visible, setVisible ] = React.useState(false);

    return (
        <Main>
            <Content>
                <HeroHeader>
                    <VerticalSwiper setVisible={setVisible} />
                   { visible && <>
                        <Menu />
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
