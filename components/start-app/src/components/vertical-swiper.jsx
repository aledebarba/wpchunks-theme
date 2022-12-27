import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import ResponsiveImage from "./responsive-image";
import animatedLogo from "/src/images/brand-white-animated.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

const VerticalSwiper = ( { setVisible }) => {

  const videoRef = useRef(null);

    useEffect(() => {
      setTimeout(() => {
        setVisible(true);
      }, 7000);
    }, []);

    return (
      <StyledSwiper>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          resistanceRatio={1}
          loop={true}
          parallax={true}
          parallaxOptions={{
            type: "mouse",
            percentage: 50,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Loading >
              <img src={animatedLogo} alt="Logo da Histeria" />
            </Loading>
            {/* <video muted loop autoPlay ref={videoRef}>
                <source src="https://flock.ws/flamingo/server-movie/hysteria/Comp%201.mp4" type="video/mp4" />
            </video> */}
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

  const Loading = styled.div`
     width: 100vw;
     @media screen and ( min-width: 768px) {
      width: 45vw;
     }
     img {
      transform: scale(1);
      overflow: visible;
      object-fit: contain !important;
     }
  `
  const StyledSwiper = styled.div`
  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: ${ (window.innerWidth - 15) + "px"};
    height: ${ (window.innerHeight) + "px"};
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
}

.swiper-slide img,
.swiper-slide video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  `
  
const StyledResponsiveImage = styled(ResponsiveImage)`
 picture img { 
  width: 100vw;
  height: 100%;
  object-fit: cover;
  }
`
  
export default VerticalSwiper;