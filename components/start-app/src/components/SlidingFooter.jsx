import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res => res.json())

const SlidingFooter = () => {

    const [ contactOptions, setContactOptions ] = useState([]);
    const [ panelIsOpen, setPanelIsOpen ] = useState(false);
        
    return (
            <FixedFooter>
                <ContactOptions>
                    <h3>Entre em contato!</h3>
                </ContactOptions>
                <SocialIcons/>
            </FixedFooter>
        );
    }

export default SlidingFooter;


const SocialIcons = () => {

    const StyledSocialIcons = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        a {
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
        }
    `

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


const FixedFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100vw - 6rem);
    height: fit-content;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    padding: 0.5rem 3rem;
`;


const ContactOptions = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    font-size: 1rem;

    h3 {
        font-size: 1rem;
        text-transform: uppercase;
    }
`;
