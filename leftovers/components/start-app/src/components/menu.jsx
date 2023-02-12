import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Brand } from './brand'
import { useState } from 'react'
import { Icon } from "@iconify/react"
import { useSettings } from './useHooks'
import { _app } from '../wpchunk'

export default function Menu(){

    const [ isOpen, setIsOpen ] = useState( false )

    const handleClick = () => {
        setIsOpen( !isOpen )
    }
    return (
            <TopNav settings={ useSettings }>
                <div>
                    <Brand styleOverride={ { position: "static", pointerEvents: "all" } }/>
                </div>
                <MenuContent>
                    <MenuButton handleClick={ handleClick } isOpen={isOpen}/>
                    <PrimaryMenu variants={ primaryMenuVariants } animate={ isOpen ? "open" : "closed" } initial={"closed"} transition={{ duration: 0.8}}isOpen={isOpen}>
                        { _app.primaryMenu().map ( (item) => {
                            return (
                                <MenuItem key={item.slug}>
                                    { item.type == "custom" 
                                        ? <a href={item.url} target={item.target} rel="noopener noreferrer">{item.title}</a>
                                        : item.slug === "home" 
                                        ? <Link to="/">{item.title}</Link>
                                        : <Link to={`/${item.slug}`}>{item.title}</Link>
                                    }                                    
                                </MenuItem>
                            )
                        })}
                        {/* <MenuItem>
                            <Link to='/'>
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/about'>Sobre Hysteria</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/brandlab'>BrandLab</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/contact'>Colaboradores</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/contato'>Contato</Link>
                        </MenuItem> */}
                    </PrimaryMenu>
                </MenuContent>
            </TopNav>
    )
}

const MenuContent = styled(motion.div)`
    position: relative;  
    --menu-width-open: 35vw;
    --menu-height-open: 100vh;  
    --menu-width-closed: 35vw;
    --menu-height-closed: 100vh;
`;

const PrimaryMenu = ( { children, ...props } ) => {
    return (
        <StyledPrimaryMenu { ...props } >
            <motion.ul layout variants={menuItemsULVariants} initial="closed" animate={ props.isOpen ? "open" : "closed" }>
                { children }
            </motion.ul>
        </StyledPrimaryMenu>
    )
}

const StyledPrimaryMenu = styled(motion.ul)`

    display: flex;
    position: absolute;     
    top: -5rem;
    right: -33%; 
    backdrop-filter: blur(15px);
    z-index: 100;
    overflow: hidden;
    background-color: rgba(0 0 0 / 0.8);
    
    ul {
        display: flex;
        flex-direction: column;
        padding: 0 2.5rem;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

`;

const menuItemsULVariants = {
    open: {
        opacity: 1,
    },
    closed: {
        opacity: 1,        
    }
}

const primaryMenuVariants = {
    open: {        
        width: window.innerWidth / 3,
        height: "110vh",
        backgroundColor: "rgba(0, 0, 0, 0, 0.8)",
        x: 50,
        y: 0,
        opacity: 1,
    },
    closed: {
        x: window.innerWidth,        
        y: 0,
        height: "110vh",
        width: window.innerWidth / 3,
        opacity: 1,
        backgroundColor: "rgba(0, 0, 0, 0, 0.8)",
        duration: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }
}


const MenuItem = styled.li`
    a {
        font-size: 1.2rem;
        color: #fff;
        text-decoration: none;
        letter-spacing: 1.5px;
        text-shadow: 1px 1px 1px #000000ac;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        text-transform: uppercase;
        font-weight: 700;
        transition: all 0.7s ease-in;        

        span:nth-child(1) {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            font-size: 1.5rem;
            background-color: #fff3;
            border-width: 1px;
            border-style: solid;
            border-color: #0004 transparent transparent #0004;
            display: inline-grid;
            place-items: center;
            color: #000000c1;
            //box-shadow: inset -5px 0px 15px 0px #fff8;
            display: none;
            
        }
        span:nth-child(2) {}
    }
`

const MenuButton = ( { isOpen, handleClick }  ) => {    
    return <StyledMenuButton 
        settings={ useSettings }
        isOpen={isOpen} 
        onClick={ handleClick } 
        layout 
        variants={ useSettings.navstyle === "button" ? menuButtonVariants : {} } 
        animate={ isOpen ? "open" : "closed" } 
        initial="closed">
            <span>
                { isOpen ? "FECHAR" : "MENU" }
            </span>
            <span>
                { isOpen ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />}
            </span>
        </StyledMenuButton>
}

const menuButtonVariants = {
    closed: { 
    },
    open: { 
    }
}

const StyledMenuButton = styled(motion.div)`
    cursor: pointer;
    display: flex;
    padding: 8px 12px;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 1px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: #000000;    
    z-index: 200;
    position: relative;

    ${ props => props.settings.navstyle === "bar" && css`
        background: transparent;
    `}

    ${ props => props.settings.navstyle === "button" && css`
        border-radius: 128px;    
        box-shadow: ${props => props.isOpen ?  "none"  : "inset 0 0 0 2px #ffff"};
        pointer-events: all;
    `}

    span:nth-child(1) {
        display: none;        
    }

    span:nth-child(2) {
        font-size: 2rem;
    }

    @media screen and (min-width: 768px) {
        width: 10rem;
        span:nth-child(1) {
            display: block;
        }
    }

`

const TopNav = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 4vw;
    z-index: 200;
    ${ props => props.settings.navstyle === "bar" && css`
        background: #00000000;
        backdrop-filter: blur(5px);
    `}

`;