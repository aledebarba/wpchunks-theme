import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Brand } from './brand'
import { useState } from 'react'
import { Icon } from "@iconify/react"

// get app wordpress params
const [ dir, url ] = start_app[1].params
const imgurl = `${url}/components/start-app/src/images`

export const Menu = () => {

    const [ isOpen, setIsOpen ] = useState( false )

    const handleClick = () => {
        setIsOpen( !isOpen )
    }

    return (
            <TopNav>
                <div>
                    <Brand styleOverride={ { position: "static" } }/>
                </div>
                <MenuContent>
                    <MenuButton handleClick={ handleClick } isOpen={isOpen}/>
                    <PrimaryMenu layout variants={ primaryMenuVariants } animate={ isOpen ? "open" : "closed" } isOpen={isOpen}>
                        <MenuItem>
                            <Link to='/'>
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/about'>Sobre Hysteria</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/contact'>BrandLab</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/contact'>Colaboradores</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/contact'>Contato</Link>
                        </MenuItem>
                    </PrimaryMenu>
                </MenuContent>
            </TopNav>
    )
}

const MenuContent = styled(motion.div)`
    position: relative;  
    --menu-width-open: 28vw;
    --menu-height-open: 21vw;  
    --menu-width-closed: 10rem;
    --menu-height-closed: 4rem;
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
    top: 0;
    right: 0;    
    backdrop-filter: blur(10px);
    z-index: 100;
    overflow: hidden;

    ul {
        display: flex;
        flex-direction: column;
        padding: 0 2.5rem;
        gap: 1.5rem;
        justify-content: center;
    }

`;

const menuItemsULVariants = {
    open: {
        opacity: 1,
    },
    closed: {
        opacity: 0,
    }
}

const primaryMenuVariants = {
    open: {
        opacity: 1,
        width: "var(--menu-width-open)",
        height: "var(--menu-height-open)",
        borderRadius: 32,
        backgroundColor: "#ffffff88",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "white darkgray darkgray white",
        boxShadow: "0 0 25px 0 #00000044",
        transition: {           
            width: {
                easing: "easeInOut",
                duration: 0.3,
            },
            opacity: {
                duration: 0.25,
                },
            height: {
                delay: 0.5,
                duration: 0.3,
            },
            borderRadius: {
                duration: 0.25,
            },
            backgroundColor: {
                delay: 0.25
            }
        }
    },
    closed: {
        width: "var(--menu-width-closed)",
        height: "var(--menu-height-closed)",
        borderRadius: 128,
        backgroundColor: "#000000",
        opacity: 1,
        transition: {
            height: {
                duration: 0.3,
                easing: "backOut"
            },
            width: {
                duration: 0.3,
                delay: 0.3,
                easing: "backOut",
            },
            borderRadius: {
                duration: 0.25,
                delay: 0.3,
                easing: "backOut",
            }, 
            opacity: {
                duration: 0.25,
                delay: 0.7,
            }
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

        &:hover {
            transform: scale(1.8) translateX(2.55rem);
            transition: all 0.5s ease-out;
            text-shadow: 8px 8px 4px #ffade43e, 8px 8px 10px #0000006e;
        }

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
        isOpen={isOpen} 
        onClick={ handleClick } 
        layout 
        variants={ menuButtonVariants } 
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
        backgroundColor: "#000000",
        borderRadius: 128,  
        boxShadow: "inset 0 0 0 2px white",
        transition: {
            delay: 0.8,
            duration: 1,
            boxShadow: {
                delay: 0.8,
                duration: 0.5,
            }
        }
    },
    open: { 
        boxShadow: "none",
        borderRadius: 32,
        backgroundColor: "#00000000",        
    }
}

const StyledMenuButton = styled(motion.div)`
    cursor: pointer;
    display: flex;
    width: 4rem;
    height: 4rem;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 1px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: #000000;    
    z-index: 200;
    position: relative;
    border-radius: 128px;    
    box-shadow: ${props => props.isOpen ?  "none"  : "inset 0 0 0 2px #ffff"};

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
    background: #00000000;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 4vw;
    z-index: 200;
`;