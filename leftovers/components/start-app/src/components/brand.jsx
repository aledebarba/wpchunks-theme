import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
// get app wordpress params
const url = start_app[1].url.theme
const imgurl = `${url}/components/start-app/src/images`

export const Brand = ( { color, size, styleOverride, link } ) => { 
    if( color="white" ) { 
        return <>
            <DefaultBrand style={ styleOverride }>
                <Link to={link}>
                    <Logo layout>
                        <div className='h'></div>
                        <div className='type'></div>
                        <div className='wave'></div>
                    </Logo>
                </Link>
            </DefaultBrand>
        </> }
    return <></>

}

export const Symbol = () => <Logo>
    <div className="h"></div>
    <div className="wave waveanimate"></div>
</Logo>

export const Type = () => <Logo>
    <div className="type" style={{ backgroundPosition: -95 }}></div>
</Logo>

Brand.defaultProps = {
    color: 'white',
    size: 'small',
    styleOverride: {},
    link: '/'
}

Symbol.defaultProps = Brand.defaultProps;
Type.defaultProps = Brand.defaultProps;


const Logo = styled.div`    
    width: 300px;
    height: 50px;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    .h, .wave, .type {
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 50px;
    }

    .h {
        background-image: url("${imgurl}/logo/logo.svg");        
    }

    .wave {
        width: 70px;
        height: 50px;
        background-image: url("${imgurl}/logo/wave.svg");        
        clip-path: polygon(15px 5px,62px 5px,52px 70px,32px 70px);
        background-position: 0px 0;
        transition: all 1s ease-in-out;
        cursor: pointer;

        &.waveanimate {
            animation: waving 1s linear infinite;
            background-position: 0px 0;
        } 
    }

  

    @keyframes waving {
            from {
                background-position: -0px 0;
            }
            to {
                background-position: -47px 0;
            }
        }

    &:hover {
        transform: scale(1);
        transition: all 1s ease-in-out;
        .wave {
            background-position: -50px 0;
            transition: all 1s ease-in-out;        
        }
    }
    .type {
        background-image: url("${imgurl}/logo/type.svg");

    }
`
const DefaultBrand = styled(motion.div)`
    position: absolute;
    top: 2rem;
    left: 4vw;
    width: clamp(150px, 15vw, 300px);
    z-index: 2000;    
`;
