import styled from "styled-components";

const Button = styled.button`
    
    z-index: 100;
    height: ${props => props.small ? "2rem" : props.large ? "4rem" : "3rem"};
    letter-spacing: ${props => props.small ? "0.1rem" : props.large ? "0.3rem" : "0.2rem"};
    font-weight: ${props => props.bold ? "var(--text-bold)" : props.light ? "lighter" : "var(--text-light)"};
    text-transform: ${props => props.uppercase ? "uppercase" : "none"};
    background-color: ${props => props.lineout ? "transparent" : props.dark ? "var(--button-dark-color)" : "white"};
    border: ${props => props.lineout ? "2px solid var(--text-color)" : "none"};
    color: ${props => props.lineout ? "var(--text-color)" : "white"};
    border-radius: ${props => props.rounded ? "999px" : "none"};
    text-decoration: none;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: translateX(-50%) scale(1.1);
    }
`;

export const MenuButton = styled(Button)`
    position: absolute;
    bottom: 5vh;
    left: 50%;
    padding: 1rem 2rem;
    transform: translateX(-50%) scale(1);

`;

export default Button;