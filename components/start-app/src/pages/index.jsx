import React from "react";
import Navigation from "../components/nav";
import VerticalSwiper from "../components/vertical-swiper";
import Brand from "../components/brand";
import Slogan from "../components/slogan";
import Button from "../components/Button";
import styled from "styled-components";
// import Footer from "../components/footer";
// import ContactForm from "../components/contact-form";
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
                        <Navigation />
                        <Brand homePageLogo />
                        <Slogan />
                        <CallToAction
                            lineout
                            rounded
                            uppercase
                            bold
                            as={Link}
                            to="/projects">
                            Conheça nossos projetos
                        </CallToAction>
                        <SlidingFooter/>
                    </>}
                </HeroHeader>
            </Content>
            {/* <Footer /> */}
        </Main>
    );
}



const CallToAction = styled(Button)`
    position: absolute;
    bottom: 10vh;
    display: grid;
    place-items: center;
    padding: 0.5rem 2rem;

    &:hover {
        transform: scale(1.1);
    }
`;

const Main = styled.main`
    position: relative;
    min-height: 200vh;
    margin-bottom: 75vh;
`;

const Content = styled.div`
    position: relative;
    background-color: white;
    z-index: 10;
    min-height: 200vh;
`;

const HeroHeader = styled.header`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
`;
