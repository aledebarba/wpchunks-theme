import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (<>
    <Nav state={isNavOpen} layout transition={spring}>

      <div className="open-close" onClick={()=>{ setIsNavOpen(!isNavOpen)}}>
        { isNavOpen 
          ? <motion.div className="open"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
          >FECHAR</motion.div>
          : <motion.div layout className={ isNavOpen ? "hide" : "closed" } 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >MENU</motion.div>
        }
      </div>

      <div className="primary-menu">        
          <div className="primary-menu-item">
            <Link to="/">Home</Link>
          </div>
          <div className="primary-menu-item">
            <Link to="/projects">Nossos Projetos</Link>
          </div>
          <div className="primary-menu-item">
            <Link to="/about">Quem Somos</Link>
          </div>
          <div className="primary-menu-item">
            <Link to="/contact">Contato</Link>
          </div>
        
      </div>

      {/* <div className="secondary-menu">
        <div className="secondary-menu-item">
          <a href="https://facebook.com">Linkedin</a>
        </div>
        <div className="secondary-menu-item">
          <a href="https://twitter.com">Instagram</a>
        </div>
        <div className="secondary-menu-item">
          <a href="https://instagram.com">Twitter</a>
        </div>
        <div className="secondary-menu-item">
          <a href="https://linkedin.com">Youtube</a>
        </div>
      </div> */}

    </Nav>
    
    </>
  );
};

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
