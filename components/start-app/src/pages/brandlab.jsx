import { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Menu from "../components/menu";
import { usePageHeight, usePageScroll } from "../components/useHooks";
import { useBrands } from "../components/use-data";
import { motion, transform } from "framer-motion";
import { ScrollerMotion } from "scroller-motion";

export default function BrandLab() {
    
    const globalY = usePageScroll().y;

    const [ scrollHeight, setScrollHeight ] = useState(0);
    
    const { data, error, isLoading } = useBrands();
    useEffect(() => {
        if (data) {
            console.log( data )
        }
    }, [data, error, isLoading]);

    const [ el, setInfo ] = useState({
        textContainer: {
            transform: transform([0, 1000],[0, 1]),
            height: 0,
            ref: useRef(null)
        },
        brandsContainer: {
            transform: transform([0, 0],[0, -400]),
            height: 400,
            ref: useRef(null)
        },
        imgContainer: {
            transform: transform([0, 1000],[0, 1]),
            height: window.innerHeight / 4,
        }
    });

    useEffect(() => {
        usePageHeight("auto", "visible");
        setScrollHeight ( el.textContainer.ref.current.offsetHeight )
        
        const textHeight = el.textContainer.ref.current.offsetHeight;
        const imgHeight = window.innerHeight / 4;
        
        setInfo({
            textContainer: {
                transform: transform([0, textHeight], [0, -1 * textHeight]),
                height: textHeight,
                ref: el.textContainer.ref
            },
            brandsContainer: {
                transform: transform( [0, textHeight], [0, imgHeight * 2 * -1] ),
                height: 400,
                ref: el.brandsContainer.ref
            },
            imgContainer: {
                transform: transform([0, textHeight], [0, -1 * imgHeight]),
                height: imgHeight,
            }
        });

        }, []);

   

    return (
        <ScrollerMotion>
            <Main >

                <Menu />
                <PageTitle>BrandLab</PageTitle>
                <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                   >
                    <Info >
                        <motion.div 
                            ref = { el.textContainer.ref }
                            className="text"
                            animate={{ y: el.textContainer.transform(globalY) }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 25,
                                restDelta: 0.001,
                        }}>
                            <p>
                                <strong>Brandlab</strong> é a seção
                                Hysteria.etc.br responsável por impulsionar,
                                promover, divulgar ou fazer a gestão
                                institucional do cliente através de peças
                                audiovisuais.
                            </p>
                            <p>
                                Essa equipe atende clientes cuja prioridade é
                                garantir que a mensagem da empresa esteja
                                alinhada a um perfil inclusivo e focada em dar
                                voz e espaço às mulheres que fizeram parte,
                                direta ou indiretamente, de sua histórias.
                            </p>
                            <p>
                                Um dos <strong>principais pontos fortes</strong>{" "}
                                do Brandlab é sua capacidade de fazer{" "}
                                <strong>conteúdo sensível e criativo</strong>,
                                que ressoa de maneira siginificativa e memorável
                                com o público.
                            </p>
                            <p>
                                A equipe está sempre atenta às necessidades
                                atuais de linguagem, formatos de mídia e
                                formatos de conteúdo, garantindo que a mensagem
                                da empresa seja transmitida de forma dinâmica e
                                relevante para o mercado contemporâneo.
                            </p>
                            <p>
                                Para além das suas competências criativas, o
                                BrandLab é também conhecido pela sua capacidade
                                de{" "}
                                <strong>
                                    coordenar e gerir projetos com eficiência
                                </strong>{" "}
                                e profissionalismo. Seja trabalhando com
                                clientes para desenvolver uma nova campanha ou
                                criando conteúdo original para as plataformas do
                                cliente, a equipe está sempre focada em entregar
                                os melhores resultados.
                            </p>
                            <p>
                                Visite nossas redes sociais e nosso canal no
                                Youtube, conheça nosso trabalho e nos contacte
                                para fechar negócio!
                            </p>
                            <p>
                                <strong>Brandlab</strong> é a seção
                                Hysteria.etc.br responsável por impulsionar,
                                promover, divulgar ou fazer a gestão
                                institucional do cliente através de peças
                                audiovisuais.
                            </p>
                            <p>
                                Essa equipe atende clientes cuja prioridade é
                                garantir que a mensagem da empresa esteja
                                alinhada a um perfil inclusivo e focada em dar
                                voz e espaço às mulheres que fizeram parte,
                                direta ou indiretamente, de sua histórias.
                            </p>
                            <p>
                                Um dos <strong>principais pontos fortes</strong>{" "}
                                do Brandlab é sua capacidade de fazer{" "}
                                <strong>conteúdo sensível e criativo</strong>,
                                que ressoa de maneira siginificativa e memorável
                                com o público.
                            </p>
                            <p>
                                A equipe está sempre atenta às necessidades
                                atuais de linguagem, formatos de mídia e
                                formatos de conteúdo, garantindo que a mensagem
                                da empresa seja transmitida de forma dinâmica e
                                relevante para o mercado contemporâneo.
                            </p>
                            <p>
                                Para além das suas competências criativas, o
                                BrandLab é também conhecido pela sua capacidade
                                de{" "}
                                <strong>
                                    coordenar e gerir projetos com eficiência
                                </strong>{" "}
                                e profissionalismo. Seja trabalhando com
                                clientes para desenvolver uma nova campanha ou
                                criando conteúdo original para as plataformas do
                                cliente, a equipe está sempre focada em entregar
                                os melhores resultados.
                            </p>
                            <p>
                                Visite nossas redes sociais e nosso canal no
                                Youtube, conheça nosso trabalho e nos contacte
                                para fechar negócio!
                            </p>
                            <p>
                                <strong>Brandlab</strong> é a seção
                                Hysteria.etc.br responsável por impulsionar,
                                promover, divulgar ou fazer a gestão
                                institucional do cliente através de peças
                                audiovisuais.
                            </p>
                            <p>
                                Essa equipe atende clientes cuja prioridade é
                                garantir que a mensagem da empresa esteja
                                alinhada a um perfil inclusivo e focada em dar
                                voz e espaço às mulheres que fizeram parte,
                                direta ou indiretamente, de sua histórias.
                            </p>
                            <p>
                                Um dos <strong>principais pontos fortes</strong>{" "}
                                do Brandlab é sua capacidade de fazer{" "}
                                <strong>conteúdo sensível e criativo</strong>,
                                que ressoa de maneira siginificativa e memorável
                                com o público.
                            </p>
                            <p>
                                A equipe está sempre atenta às necessidades
                                atuais de linguagem, formatos de mídia e
                                formatos de conteúdo, garantindo que a mensagem
                                da empresa seja transmitida de forma dinâmica e
                                relevante para o mercado contemporâneo.
                            </p>
                            <p>
                                Para além das suas competências criativas, o
                                BrandLab é também conhecido pela sua capacidade
                                de{" "}
                                <strong>
                                    coordenar e gerir projetos com eficiência
                                </strong>{" "}
                                e profissionalismo. Seja trabalhando com
                                clientes para desenvolver uma nova campanha ou
                                criando conteúdo original para as plataformas do
                                cliente, a equipe está sempre focada em entregar
                                os melhores resultados.
                            </p>
                            <p>
                                Visite nossas redes sociais e nosso canal no
                                Youtube, conheça nosso trabalho e nos contacte
                                para fechar negócio!
                            </p>
                            <p>
                                <strong>Brandlab</strong> é a seção
                                Hysteria.etc.br responsável por impulsionar,
                                promover, divulgar ou fazer a gestão
                                institucional do cliente através de peças
                                audiovisuais.
                            </p>
                            <p>
                                Essa equipe atende clientes cuja prioridade é
                                garantir que a mensagem da empresa esteja
                                alinhada a um perfil inclusivo e focada em dar
                                voz e espaço às mulheres que fizeram parte,
                                direta ou indiretamente, de sua histórias.
                            </p>
                            <p>
                                Um dos <strong>principais pontos fortes</strong>{" "}
                                do Brandlab é sua capacidade de fazer{" "}
                                <strong>conteúdo sensível e criativo</strong>,
                                que ressoa de maneira siginificativa e memorável
                                com o público.
                            </p>
                            <p>
                                A equipe está sempre atenta às necessidades
                                atuais de linguagem, formatos de mídia e
                                formatos de conteúdo, garantindo que a mensagem
                                da empresa seja transmitida de forma dinâmica e
                                relevante para o mercado contemporâneo.
                            </p>
                            <p>
                                Para além das suas competências criativas, o
                                BrandLab é também conhecido pela sua capacidade
                                de{" "}
                                <strong>
                                    coordenar e gerir projetos com eficiência
                                </strong>{" "}
                                e profissionalismo. Seja trabalhando com
                                clientes para desenvolver uma nova campanha ou
                                criando conteúdo original para as plataformas do
                                cliente, a equipe está sempre focada em entregar
                                os melhores resultados.
                            </p>
                            <p>
                                Visite nossas redes sociais e nosso canal no
                                Youtube, conheça nosso trabalho e nos contacte
                                para fechar negócio!
                            </p>
                            <p>
                                <strong>Brandlab</strong> é a seção
                                Hysteria.etc.br responsável por impulsionar,
                                promover, divulgar ou fazer a gestão
                                institucional do cliente através de peças
                                audiovisuais.
                            </p>
                            <p>
                                Essa equipe atende clientes cuja prioridade é
                                garantir que a mensagem da empresa esteja
                                alinhada a um perfil inclusivo e focada em dar
                                voz e espaço às mulheres que fizeram parte,
                                direta ou indiretamente, de sua histórias.
                            </p>
                            <p>
                                Um dos <strong>principais pontos fortes</strong>{" "}
                                do Brandlab é sua capacidade de fazer{" "}
                                <strong>conteúdo sensível e criativo</strong>,
                                que ressoa de maneira siginificativa e memorável
                                com o público.
                            </p>
                            <p>
                                A equipe está sempre atenta às necessidades
                                atuais de linguagem, formatos de mídia e
                                formatos de conteúdo, garantindo que a mensagem
                                da empresa seja transmitida de forma dinâmica e
                                relevante para o mercado contemporâneo.
                            </p>
                            <p>
                                Para além das suas competências criativas, o
                                BrandLab é também conhecido pela sua capacidade
                                de{" "}
                                <strong>
                                    coordenar e gerir projetos com eficiência
                                </strong>{" "}
                                e profissionalismo. Seja trabalhando com
                                clientes para desenvolver uma nova campanha ou
                                criando conteúdo original para as plataformas do
                                cliente, a equipe está sempre focada em entregar
                                os melhores resultados.
                            </p>
                            <p>
                                Visite nossas redes sociais e nosso canal no
                                Youtube, conheça nosso trabalho e nos contacte
                                para fechar negócio!
                            </p>
                            <p>
                                <strong>Brandlab</strong> é a seção
                                Hysteria.etc.br responsável por impulsionar,
                                promover, divulgar ou fazer a gestão
                                institucional do cliente através de peças
                                audiovisuais.
                            </p>
                            <p>
                                Essa equipe atende clientes cuja prioridade é
                                garantir que a mensagem da empresa esteja
                                alinhada a um perfil inclusivo e focada em dar
                                voz e espaço às mulheres que fizeram parte,
                                direta ou indiretamente, de sua histórias.
                            </p>
                            <p>
                                Um dos <strong>principais pontos fortes</strong>{" "}
                                do Brandlab é sua capacidade de fazer{" "}
                                <strong>conteúdo sensível e criativo</strong>,
                                que ressoa de maneira siginificativa e memorável
                                com o público.
                            </p>
                            <p>
                                A equipe está sempre atenta às necessidades
                                atuais de linguagem, formatos de mídia e
                                formatos de conteúdo, garantindo que a mensagem
                                da empresa seja transmitida de forma dinâmica e
                                relevante para o mercado contemporâneo.
                            </p>
                            <p>
                                Para além das suas competências criativas, o
                                BrandLab é também conhecido pela sua capacidade
                                de{" "}
                                <strong>
                                    coordenar e gerir projetos com eficiência
                                </strong>{" "}
                                e profissionalismo. Seja trabalhando com
                                clientes para desenvolver uma nova campanha ou
                                criando conteúdo original para as plataformas do
                                cliente, a equipe está sempre focada em entregar
                                os melhores resultados.
                            </p>
                            <p>
                                Visite nossas redes sociais e nosso canal no
                                Youtube, conheça nosso trabalho e nos contacte
                                para fechar negócio!
                            </p>
                            <p>
                                <strong>Brandlab</strong> é a seção
                                Hysteria.etc.br responsável por impulsionar,
                                promover, divulgar ou fazer a gestão
                                institucional do cliente através de peças
                                audiovisuais.
                            </p>
                            <p>
                                Essa equipe atende clientes cuja prioridade é
                                garantir que a mensagem da empresa esteja
                                alinhada a um perfil inclusivo e focada em dar
                                voz e espaço às mulheres que fizeram parte,
                                direta ou indiretamente, de sua histórias.
                            </p>
                            <p>
                                Um dos <strong>principais pontos fortes</strong>{" "}
                                do Brandlab é sua capacidade de fazer{" "}
                                <strong>conteúdo sensível e criativo</strong>,
                                que ressoa de maneira siginificativa e memorável
                                com o público.
                            </p>
                            <p>
                                A equipe está sempre atenta às necessidades
                                atuais de linguagem, formatos de mídia e
                                formatos de conteúdo, garantindo que a mensagem
                                da empresa seja transmitida de forma dinâmica e
                                relevante para o mercado contemporâneo.
                            </p>
                            <p>
                                Para além das suas competências criativas, o
                                BrandLab é também conhecido pela sua capacidade
                                de{" "}
                                <strong>
                                    coordenar e gerir projetos com eficiência
                                </strong>{" "}
                                e profissionalismo. Seja trabalhando com
                                clientes para desenvolver uma nova campanha ou
                                criando conteúdo original para as plataformas do
                                cliente, a equipe está sempre focada em entregar
                                os melhores resultados.
                            </p>
                            <p>
                                Visite nossas redes sociais e nosso canal no
                                Youtube, conheça nosso trabalho e nos contacte
                                para fechar negócio!
                            </p>
                        </motion.div>
                    </Info>
                    <Brands 
                        ref={ el.brandsContainer.ref } 
                        animate={{
                            y: el.brandsContainer.transform( globalY ),
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            restDelta: 0.001,
                        }}
                    >
                        {data &&
                            data.map((brand) => {
                                
                                const filename = "url('" + brand.logo.guid + "')";
                                const frame = "url('" + brand.frame.guid + "')";
                                
                                return (
                                    <Brand>
                                        <div className="brand-container">
                                            <div
                                                className="underlay"

                                                animate={{
                                                    y: el.imgContainer.transform( globalY ),
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 25,
                                                    restDelta: 0.001,
                                                }}    

                                                style={{
                                                    "--bg-color": "#2862c7",
                                                    "--filename": frame,
                                                }}></div>
                                            <motion.div
                                                className="overlay"
                                                style={{
                                                    "--filename": filename,
                                                }}                                            
                                            >                                                    
                                            </motion.div>
                                            <div className="oovershadow"></div>
                                        </div>
                                    </Brand>
                                );
                            })}
                    </Brands>
                </Content>
            </Main>
        </ScrollerMotion>
    );
}

const Main = styled(motion.div)`
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    background-color: #0c0c0c;
    pointer-events: all;
`;

const PageTitle = (props) => (
    <motion.div
        style={{
            position: "fixed",
            width: "90vw",
            top: "25vh",
            left: "15%",
        }}
        initial={{
            filter: "blur(0px)",
        }}
        animate={{
            filter: "blur(10px)",
        }}
        transition={{
            duration: 1,
        }}
        >
        <h1 style={{ fontSize: "10vw", color: "#fff2" }}>{props.children}</h1>
    </motion.div>
);

const Content = styled(motion.div)`
    position: relative;
    width: 100vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 30vw 2vw auto;
    grid-template-areas: "info . brands";
    overflow-x: visible;
    margin: 10rem auto;
    pointer-events: all;
`;

const Info = styled.div`
    pointer-events: none;
    margin-bottom: 10rem;
    grid-area: info;
    position: relative;
    overflow-x: hidden;
    
    .text {
        padding-top: 4rem;
        margin-left: 2rem;
        width: 100%;
        max-width: 480px;
    }

    p {
        font-size: 1.5rem;
        font-weight: var(--text-light);
        line-height: 3.5rem;
    }

    strong {
        font-weight: var(--text-bold);
        color: #dccf9af5;
        font-size: 3rem;
    }

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 4rem;
        top: 0;
        left: 0;
        background-image: linear-gradient( #0c0c0c, #0c0c0c00 );
    }
`;

const Brands = styled(motion.div)`
    grid-area: brands;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-top: 10vh;
`;

const Brand = styled.div`
    width: 100%;
    //border-radius: 8px;
    margin: 1px 0;
    width: 100%;
    height: 25vh;
    max-height: 300px;
    overflow: hidden;

    .brand-container {
        position: relative;
        width: 100%;
        height: 100%;
        position: relative;
        display: grid;
        place-items: center;

        .underlay {
            position: absolute;
            width: 130%;
            height: 150%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-image: var(--filename);    
            background-size: cover; 
        }

        img {
            display: none;
            position: absolute;
            width: 100%;
            object-fit: contain;
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-image: var(--filename);
            background-size: 50% auto;
            background-position: center;
            background-repeat: no-repeat;
        }

        .overshadow {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            box-shadow: inset 1px 1px 15px 0px black;
        }
    }
`;
