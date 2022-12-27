import { motion } from "framer-motion";
import styled from "styled-components";
import logoWhite from "../images/brand-white.svg";

const Brand = ( { variant = "", homePageLogo, footerLogo } ) => {

    if( variant === "home-page-logo" || homePageLogo ) {
        return (
            <DefaultBrand 
                initial={{ opacity: 0, y: "-4rem" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img src={logoWhite} alt="Logo" />
            </DefaultBrand>
        )
    }

    if( variant === "footer-logo" || footerLogo ) {
        return <FooterLogo>
                <img src={logoWhite} alt="Logo" />
            </FooterLogo>
    }

    return null

}
const FooterLogo = styled(motion.div)`
    position: relative;
    width: 75vw;    
    margin: 0 auto;
    
    img {
        width: 100%;
        height: auto;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`
const DefaultBrand = styled(motion.div)`
    position: absolute;
    top: 3rem;
    left: 4rem;
    width: 20vw;
    z-index: 2000;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

`
export default Brand