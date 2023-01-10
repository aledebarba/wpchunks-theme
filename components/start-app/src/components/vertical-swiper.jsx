import React, { useRef, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import ResponsiveImage from "./responsive-image";
import animatedLogo from "/src/images/brand-white-animated.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import { motion, useAnimation } from "framer-motion"

const VerticalSwiper = ( { setVisible } ) => {

  const videoRef = useRef(null);

    return (
      <StyledSwiper>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          speed={1000}
          resistanceRatio={1}
          loop={true}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>            
            <Video onLoad={ setVisible } src="https://flock.ws/flamingo/server-movie/hysteria/hystereel.mp4" type="video/mp4" />            
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage srcset={[
              { src: "https://flock.ws/flamingo/server-image/hysteria/0001.jpg", alt: "Projeto Histeria 01", type: "image/jpeg", media: "(min-width: 180px)" },
            ]} style={{
              height: "100%",
              minWidth: "100vw",
              objectFit: "cover",
            }}/>
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage srcset={[
              { src: "https://flock.ws/flamingo/server-image/hysteria/0002.jpg", alt: "Projeto Histeria 01", type: "image/jpeg", media: "(min-width: 180px)" },
            ]} style={{
              height: "100%",
              minWidth: "100vw",
              objectFit: "cover",
            }}/>
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage srcset={[
              { src: "https://flock.ws/flamingo/server-image/hysteria/0003.jpg", alt: "Projeto Histeria 01", type: "image/jpeg", media: "(min-width: 180px)" },
            ]} style={{
              height: "100%",
              minWidth: "100vw",
              objectFit: "cover",
            }}/>
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage srcset={[
              { src: "https://flock.ws/flamingo/server-image/hysteria/0004.jpg", alt: "Projeto Histeria 01", type: "image/jpeg", media: "(min-width: 180px)" },
            ]} style={{
              height: "100%",
              minWidth: "100vw",
              objectFit: "cover",
            }}/>
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage srcset={[
              { src: "https://flock.ws/flamingo/server-image/hysteria/0005.jpg", alt: "Projeto Histeria 01", type: "image/jpeg", media: "(min-width: 180px)" },
            ]} style={{
              height: "100%",
              minWidth: "100vw",
              objectFit: "cover",
            }}/>
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage srcset={[
              { src: "https://flock.ws/flamingo/server-image/hysteria/0006.jpg", alt: "Projeto Histeria 01", type: "image/jpeg", media: "(min-width: 180px)" },
            ]} style={{
              height: "100%",
              minWidth: "100vw",
              objectFit: "cover",
            }}/>
          </SwiperSlide>
          <SwiperSlide>
            <ResponsiveImage srcset={[
              { src: "https://flock.ws/flamingo/server-image/hysteria/0007.jpg", alt: "Projeto Histeria 01", type: "image/jpeg", media: "(min-width: 180px)" },
            ]} style={{
              height: "100%",
              minWidth: "100vw",
              objectFit: "cover",
            }}/>
          </SwiperSlide>
          
        </Swiper>
      </StyledSwiper>
    );
  }

  const Video = ({ src, onLoad }) => {
    const videoRef = useRef(null);
    const control = useAnimation();
    const [ displayStyle, setDisplayStyle ] = useState({ opacity: 0, transition: "all 2s ease-in-out" })
    useEffect(() => {
        const video = videoRef.current;
        video.src = src;
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.controls = false;
        video.addEventListener('canplay', ()=>{ 
            setDisplayStyle( { opacity: 1 } )
            onLoad(true)
        });
        video.load();
      
    }, [src, onLoad]);
  
    const videoStyle = {
      position: "absolute",
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      top: 0,
      left: 0,
      opacity: 0,
      transition: "all 2s ease-in-out" 
    }

    const loadingStyle = {
      position: "absolute",
      color: "white",
      width: "100vw",
      height: "100vh",
      display: "grid",
      placeItems: "center",
      top: 0,
      left: 0,
    }

    return (
      <div>
        <motion.video ref={videoRef} style={{...videoStyle, ...displayStyle }} />
        {!videoRef.current && <div style={loadingStyle}><p>Loading...</p></div>}
      </div>
    );
  };
  
  
  const Loading = styled.div`
     width: 100vw;
     @media screen and ( min-width: 768px) {
      width: 45vw;
     }
     img {
      transform: scale(0.5);
      overflow: visible;
      object-fit: contain !important;
     }
  `
  const StyledSwiper = styled.div`
  --swiper-pagination-color: #dfdfde;  
  --swiper-pagination-bullet-size: 24px;
  --swiper-pagination-border: white;
  --swiper-pagination-bullet-vertical-gap: 12px !important;
  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: ${ (window.innerWidth - 15) + "px"};
    height: ${ (window.innerHeight) + "px"};
    
}
.swiper-wrapper {
   transition-timing-function: cubic-bezier(1.000, -0.010, 0.405, 1.195);
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #000000;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  //animation: hysteria-easeInBounce 1s forwards 1 linear;
}

@keyframes hysteria-easeInBounce {
	0% {
		transform: translateY(0%);
	}

	4% {
		transform: translateY(-1.54%);
	}

	8% {
		transform: translateY(-0.66%);
	}

	18% {
		transform: translateY(-6.25%);
	}

	26% {
		transform: translateY(-1.63%);
	}

	46% {
		transform: translateY(-24.98%);
	}

	64% {
		transform: translateY(-1.99%);
	}

	76% {
		transform: translateY(-56.44%);
	}

	88% {
		transform: translateY(-89.11%);
	}

	100% {
		transform: translateY(-100%);
	}

}

.swiper-slide img,
.swiper-slide video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  `
  
export default VerticalSwiper;