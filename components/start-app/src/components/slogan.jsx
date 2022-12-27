import styled from 'styled-components'
import { motion } from 'framer-motion'

const Slogan = ( { children } ) => {
    return (
        <DefaultSlogan
            initial={{}}
            animate={{}}
            transition={{}}
        >
            <span>mulheres com</span>
            <span className="center">história</span> 
            <span>pra contar</span>
        </DefaultSlogan>
    )
}

const DefaultSlogan = styled(motion.div)`
    position: absolute;
    bottom: 20vh;
    left: 50%; 
    transform: translateX(-50%);
    z-index: 100;

    color: var(--text-color);
    text-transform: uppercase;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1.5vw;

    span {
        display: flex;
        justify-content: center;
        color: white;
    }
    span.center {
        font-weight: 900;
        font-size: clamp(1.5rem, 7vw, 4rem);
        letter-spacing: 0.5vw;
    }
    span:first-child, 
    span:last-child {
        font-weight: lighter;
        font-size: clamp(1rem, 5vw, 3rem);
    }
`
export default Slogan