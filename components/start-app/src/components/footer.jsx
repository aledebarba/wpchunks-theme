import styled from "styled-components"
import Brand from "./brand"
import ContactForm from "./contact-form"

const Footer = () => {
    return <StyledFooter>
        <Brand footerLogo/>        
    </StyledFooter>
}


const StyledFooter = styled.div`
    position: fixed;
    width: 100vw;
    height: auto;    
    min-height: 50vh;
    padding: 0;
    margin: 0;
    z-index: 2;
    bottom: 0;

`

export default Footer