import React from "react";
import notfound from "../images/404.png";
import { Link } from "react-router-dom";
import { Styles } from "../wpchunk";

export default function NotFound() {
    
    return (
        <>
            <Styles css={`
                .notfound {
                    height: 100vh;
                    width: 100vw;
                    background: #000;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: grid;
                    position: relative;
                    background-image: url(${notfound});
                    background-position: center;
                    background-repeat: repeat-x;
                }                
                .notfound .text {
                    position: absolute;
                    top: 50%;
                    left: 0%;
                    color: #fff;
                    width: clamp( 300px, 50vw, 980px);
                    background-color: black;
                    padding: 1rem;
                    transform: translateY(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .notfound h1 {
                    font-size: clamp(5rem, 5vw, 10rem);
                    text-transform: uppercase;
                    letter-spacing: 1rem;
                    display: inline;
                    text-align: center;
                    flex: 1;
                    
                }

                .notfound span {
                    font-size: clamp( 24px, 1.5rem, 4rem);
                }

                .notfound a {
                    font-size: clamp( 24px, 1.5rem, 4rem);
                    color: #fff;
                    text-decoration: none;
                }
            `}/>
            <div className="notfound">
                <div className='text'>
                    <h1>404</h1>
                    <span>Página ou conteúdo não encontrado. </span>
                    <Link to="/">Voltar para a página inicial</Link>
                </div>
            </div>
        </>
    )
}