import { Symbol, Type } from "./brand"
import { useEffect, useRef } from "react"
import anime from 'animejs/lib/anime.es.js';
import styled from "styled-components"

export default function Opening( { setStatus } ) {

    const elRef = useRef({});
    elRef.current = {};

    useEffect(()=>{
        let el = elRef.current;
        let tl = anime.timeline({
            update: function(anim) {
                if( 60 <= anim.progress && anim.progress <= 62  ) { setStatus('complete'); }
            }   
        });

        tl.add({
            targets: el.message,
            opacity: 1,
            duration: 1000,
        })
        .add({
            targets: el.symbol,
            width: 80,
            opacity: 1,
            duration: 1500
        })
        .add({
            targets: el.letters,
            width: 240,
            delay: 500,
            duration: 2000
        })
        .add({
            targets: el.message,
            opacity: 0
        })
        .add({
            targets: el.waving_brand,
            scale: [{
                value: 35,
                duration: 3000,
                easing: 'easeInQuint',
            }],
            filter: [{
                value: 'blur(5px)',
                duration: 500,
                delay: 1000,
                easing: 'linear'
            }],
            opacity: [{
                value: 0,
                duration: 500,
                delay: 2800,
                easing: 'linear'
            }],
        })
        .add({
            targets: el.screen,
            opacity: 0,
            duration: 2000
        }, "-=1000")
    },[])

    
    const addRef = (el, name) => {
        let oldElRef = elRef.current;
        elRef.current = { ...oldElRef, [name]: el };
    }

    return <>
        <WithStyle>
            <div className="screen" ref={el=>addRef( el, "screen")} />
                <div className="panel" ref={el=>addRef( el, "panel")}>
                    <div ref={(el)=>addRef( el, "message")} style={{ opacity: 0 }}>
                        <p className="message">CARREGANDO</p>                
                    </div>
                    <div className="waving-brand" ref={el=>addRef( el, "waving_brand")}>
                        <div  ref={el=>addRef( el, "symbol")} className="symbol">
                            <Symbol/>
                        </div>
                        <div ref={el=>addRef( el, "letters")} className="letters">
                            <Type/>
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
    display: grid;
    place-items: center;
    
    .screen {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: black;
    }
    
    .panel {
        display: grid;
        place-items: center;

        p { 
            text-align: center;
            padding: 1rem;
            animation: blink 1s infinite;
            color: #aaa;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 3px;
        }
        @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }

        .waving-brand {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            width: 300px;
            height: 90px;

            .symbol { 
                width: 0px;
                opacity: 0;
                height: 80px;
                overflow: hidden;
            }

            .letters {
                width: 0px;
                height: 80px;
                overflow: hidden;                
                .types {
                    background-repeat: no-repeat;
                }
            }
        }
    }
`
