import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import useSWR from "swr";
import { motion } from "framer-motion";

const fetcher = (...args) => fetch(...args).then(res => res.json())
const [ dir, url ] = start_app[1].params;
const imgurl = `${url}/components/start-app/src/images`;

const SlidingFooter = () => {

    const [ contactOptions, setContactOptions ] = useState([]);
    const [ panelIsOpen, setPanelIsOpen ] = useState(false);
        
    return (
            <FixedFooter layout variants={fixedFooterVariants} whileHover={"open"} initial={"closed"}>
                <div className="backlogo"/>
                <ContactOptions>
                    <h3>Entre em contato!</h3>
                </ContactOptions>
                <Slogan className="slogan">
                    <span>Mulheres</span>
                    <span>Com Histórias</span>
                    <span>Para Contar</span>
                </Slogan>
            </FixedFooter>
        );
    }

export default SlidingFooter;

const Slogan = styled.div``

const SocialIcons = () => {
    const { data, error, isLoading } = useSWR("/wp-json/wp/v2/social", fetcher);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    if (data) {
        return <StyledSocialIcons>
                {data.map((social, index) => {
                    return (
                        <a key={index} href = {social.website.value} target="_blank" rel="noreferrer">        
                            <Icon icon={social.icone.value} />
                        </a>
                    )
                })}
        </StyledSocialIcons>
    }
}

const StyledSocialIcons = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        z-index: 200;
        a {
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
        }
    `
const FixedFooter = styled(motion.div)`
    --closed-height: 6vh;
    --open-height: 6vh;
    --open-bg-color: #222222;
    --closed-bg-color: #222222;
    --bg: linear-gradient(180deg, #00000000 15%, var(--closed-bg-color) 15%);

    pointer-events: all;
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100vw - 6rem);
    
    display: flex;
    justify-content: space-between;    
    z-index: 100;
    padding: 1.5rem 3rem 2.5rem 3rem;    

    @media screen and (min-width: 768px) {
        --closed-height: 7vh;
        --open-height: 20vh; 
        --open-bg-color: #181818e8;
        --closed-bg-color: #222222;
        
    }

    .backlogo{ 
        position: absolute;
        top: 15%;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-image: url("${imgurl}/brand-full-black.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 250% 250%;
    }

    .slogan {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        z-index: 100;
        text-transform: uppercase;
        letter-spacing: 1px;

        @media screen and (min-width: 940px) {
            flex-direction: row;
        }
        @media screen and (min-width: 680px) {
           display: flex;
        }

        span:nth-child(2) {
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

`;

const fixedFooterVariants = {
    closed: {
        height: "var(--closed-height)",
        backgroundColor: "var(--closed-bg-color)",
        background: "var(--bg)",
        transition: {
            duration: 0.3,
            easing: "quintInOut"
        }
    },
    open: {
        height: "var(--open-height)",
        backgroundColor: "var(--open-bg-color)",        
        transition: {
            duration: 0.5,
            easing: "quintInOut"
        }
    }
}


const ContactOptions = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    font-size: 1rem;
    z-index: 200;

    h3 {
        font-size: 1rem;
        text-transform: uppercase;
    }
`;
