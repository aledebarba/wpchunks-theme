import { Symbol, Type } from "./brand"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

export default function Opening( props ){
    const elRef = useRef([]);
    elRef.current = [];
    useEffect(()=>{
        console.log( elRef.current )
    },[ elRef ])

    const addRef = (el, name) => {
        if (el && !elRef.current.includes(el)) {
            elRef.current[name]=el;
        }
    }

    return <>
        <WithStyle>
            <div className="panel" ref={el=>addRef( el, "panel")}>
                <p ref={el=>addRef( el, "message")} className="message">...Carregando...</p>                
                <div className="waving-brand" ref={el=>addRef( el, "waving-brand")}>
                    <div  ref={el=>addRef( el, "symbol")} className="symbol">
                        <Symbol/>
                    </div>
                    <div ref={el=>addRef( el, "type")} className="type">
                        <Type />
                    </div>
                </div>
            </div>
        </WithStyle>
    </>
}

const WithStyle = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 2000;
    background-color: black;
    display: grid;
    place-items: center;

    p { 
        text-align: center;
        padding: 1rem;
        animation: blink 1s infinite;
    }
    @keyframes blink {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }

    .waving-brand {
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: auto auto;
        overflow: hidden;
        //width: 300px;
        //height: 90px;
        height: 0;

        .symbol { 
            //width: 80px;
            width: 0;
            height: 80px;
            overflow: hidden;
        }

        .type {
            //width: 220px;
            width: 0;
            height: 80px;
            overflow: hidden;
            background-repeat: no-repeat;
            background-position: -90px 0;
        }
    }
`
