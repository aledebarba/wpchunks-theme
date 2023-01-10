import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Icon  } from "@iconify/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuFrameVariants = { 
    open: {
      borderRadius: 12,   
      backgroundColor: "#fff6",
      width: "30vw",
      height: "90vh",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "4rem auto auto",
      gridTemplateAreas: `"menuLabel" "primaryMenu" "secondaryMenu"`,
      transition:{
        duration: 1,
        borderRadius: { duration: 0.1 },
      }
    },
    closed: {   
      borderRadius: 128,
      backgroundColor: "#000",
      width: "10rem",
      height: "4rem",
      display: "grid",      
      gridTemplateAreas: "menuLabel",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      transition:{
        duration: 1,
        borderRadius: { delay: 0.9 },
      }
    }
  }

  return (<>
    <MenuFrame 
      layout 
      initial={ closed }
      animate={ isOpen ? "open" : "closed" }
      variants={menuFrameVariants}>
      <MenuLabel   isOpen={ isOpen } onClick={()=>{setIsOpen(!isOpen)}} layout>
        <span>{ isOpen ? "Fechar" : "Menu" }</span>
        <span>
          { isOpen ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />}
        </span>
      </MenuLabel>
      <MenuOptions isOpen={ isOpen } layout>
        <motion.div 
          className="primary-menu"
          animate={ isOpen ? "open" : "closed" }
          variants={menuVariants}
        >        
              <motion.div 
                className="primary-menu-item" 
                variants={menuItemVariants}
              >
                <Link to="/">Home</Link>
              </motion.div>
              <motion.div 
                className="primary-menu-item" 
                variants={menuItemVariants}
              >
                <Link to="/projects">Nossos Projetos</Link>
              </motion.div>
              <motion.div 
                className="primary-menu-item" 
                variants={menuItemVariants}
              >
                <Link to="/about">Quem Somos</Link>
              </motion.div>
              <motion.div 
                className="primary-menu-item" 
                variants={menuItemVariants}
              >
                <Link to="/contact">Contato</Link>
              </motion.div>
        </motion.div>
      </MenuOptions>
    </MenuFrame>
    </>
  );
};
 
const menuVariants = {
  open: {           
    transition: {      
      staggerChildren: 0.1,
      delayChildren: 0.3,      
    }
  },
  closed: {       
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,      
     },
     
  }
}

const menuItemVariants = {
  open: {    
    y: -50,
    opacity: 1,
    transition: {
      y: { ease:"easeInOut", duration: 0.5 },
      opacity: { duration: 0.3 },            
    },    
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },      
    }
  }
};

const menuOpenMediaQuery = `
  @media (min-width: 540px) {
    width: 70vw;
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1024px) {
    width: 40vw;
  }
  @media (min-width: 1440px) {
    width: 30vw;
  }
  @media (min-width: 2560px) {
    width: 20vw;
  }
`
const menuClosedMediaQuery = `
  @media (min-width: 768px) {
    width: 10rem;
    height: 4rem;
  }
`
const MenuFrame = styled(motion.div)`
  z-index: 20000;
  position: fixed;
  top: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.animated-props[data-isopen="false"]{
    width: 12rem;
    height: 5rem;
    backdrop-filter: blur(0px);  
    ${menuClosedMediaQuery}  
  }
  
  &.animated-props[data-isopen="true"]{
    width: 90vw;
    height: 85vh;
    backdrop-filter: blur(50px);    
    //box-shadow: 0 0 55px 0px #0003, inset 1px 1px 0px 1px #fff4, inset -1px -1px 0px 1px #0006 ;
    ${menuOpenMediaQuery}  
  }
`

const MenuLabel = styled(motion.div)`
    /* z-index: 20001;
    
    width: 10rem;
    height: 4rem;
    top: 24px;
    right: 50%;
    transform: translateX(50%);
    position: absolute;
    transition: all 0.5s ease-in-out; */
    gap: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    text-transform: uppercase;
    color: ${ props => props.isOpen ? "black" : "white" };
    font-weight: ${ props => props.isOpen ? 700 : 400 };
    font-size: 1.1rem;
    cursor: pointer;
`;

const MenuOptions = styled(motion.div)`
  //position: fixed;
  //top: 15vh;
  //right: 24px;
  z-index: 20002;
  display: flex;
  justify-content: flex-start;

  .primary-menu {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
  }
  
  ${menuOpenMediaQuery}
  
  .primary-menu-item a {
    color: #fffd;
    font-size: 2rem;
    text-decoration: none;      
    text-shadow: 2px 2px 5px #000a;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 50
};

const Nav = styled(motion.div)`
  position: fixed;
  top: ${ props => props.state ? "2rem" : "3rem" };
  right: 4vw;
  z-index: 20000;
  width: ${ props => props.state ? "80vw" : "10rem" };
  height: ${ props => props.state ? "90vh" : "4rem" };
  background-color: ${ props => !props.state ? "white" : "#00000066" };
  border-radius: ${ props => props.state ? "32px" : "128px" };
  display: ${ props => props.state ? "grid" : "flex" };
  grid-template-columns: 1fr 1fr 3fr;
  grid-template-rows: 4rem auto 8rem;
  grid-template-areas: 
    "open-close open-close open-close"
    "primary-menu primary-menu primary-menu"
    "secondary-menu secondary-menu .";
  justify-items: center;
  align-items: center;
  box-shadow: 0 0 25px 0px rgba(0,0,0,0.2);
  backdrop-filter: ${ props => !props.state ? "blur(0px)" : "blur(10px)" };
  // media query for tablet
  @media (min-width: 768px) {
    max-width: 70vw;
  }
  // media query for small desktop
  @media (min-width: 1024px) {
    max-width: 50vw;
  }
  // media query for laptops
  @media (min-width: 1800px) {
    max-width: 40vw;
  }

  .primary-menu-item, .secondary-menu-item {
    cursor: pointer;
  }

  .open-close {
    grid-area: open-close;
    width: 100%;
    display: flex;
    justify-content: ${ props => props.state ? "flex-end" : "center" };
    align-items: center;
    font-size: clamp(1.5rem, 1vw, 5rem);
    margin-right: ${ props => props.state ? "4vw" : "0" };
    color: var(--text-dark-color);
  }

  .primary-menu {
    grid-area: primary-menu;
    width: 100%;
    height: 100%;
    display: ${ props => props.state ? "flex" : "none" };
    flex-direction: column;
    justify-content: center;
    align-items: end;

    .primary-menu-item {
      font-size: clamp(1.5rem, 4vw, 3rem);
      font-weight: var(--text-bold);
      padding-right: 2vw;
      // media query for laptops
      @media (min-width: 1440px) {
        font-size: clamp(1.5rem, 10vw, 5rem);
      }

      a {
        position: relative;
        text-decoration: none;
        color: #ddd;

        &:hover {
          text-shadow: 4px 4px 10px #0002;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }

  .secondary-menu {
    grid-area: secondary-menu;
    display: ${ props => props.state ? "grid" : "none" };
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    
    place-content: center;
    transform: translateX(2rem);
    grid-gap: 1rem;


    .secondary-menu-item {
      width: 50%;
      display: grid;
      place-content: center;
      font-size: clamp(1rem, 1vw, 2rem);
      
      a {
        font-weight: normal;
        text-decoration: none;
        color: var(--primary-color);
        &:hover {
          text-shadow: 0 0 10px #0001;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }   
`

export default Navigation;
