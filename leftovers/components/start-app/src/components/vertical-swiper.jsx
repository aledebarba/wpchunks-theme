import { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import Loading from "./loading";
import SlideFillMovie from "./slides/slide-fill-movie";
import SlideFillMovieInfo from "./slides/slide-fill-movie-info";
import Slide2ColsMovieInfo from "./slides/slide-2cols-movie-info";
import Slide3ColsInfoMovieMovie from "./slides/slide-3cols-info-movie-movie";
import Slide3ColsInfoDescMovie from "./slides/slide-3cols-info-desc-movie";
import { useMockupProjects } from "./use-data";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

// wordpress data
const [ dir, url ] = start_app[1].params;
const dataUrl = `${url}/components/start-app/src/components/data.json`;

const VerticalSwiper = ( { setVisible } ) => { 

  const [currentSlides, setCurrentSlides] = useState({actual: 0, next: 1});
  
  const slidesLoader = useMockupProjects();
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    if( slidesLoader.data !== null && slidesLoader.data !== undefined ) {
      if( slidesLoader.data.projetos !== undefined ) {
        setSlides(slidesLoader.data.projetos);
      }
    }
  }, [slidesLoader]);

  const updateIndexes = (swiper, n) => {
    let newActual = swiper.realIndex;
    if( newActual < 0 ) newActual = screens.length - 1;
    if( newActual > screens.length - 1 ) newActual = 0;
    
    let newNext = newActual + n;
    if( newNext < 0 ) newNext = screens.length - 1;
    if( newNext > screens.length - 1 ) newNext = 0;
    setCurrentSlides({ actual: newActual, next: newNext });
  }

  // abort if no slides
  if( slides.length === 0 ) return <></>
  
    return (
      <StyledSwiper>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          speed={1000}
          resistanceRatio={1}
          loop={false}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          { slides.map( (slide, index) => {            
            return (<>
              { slide.layout === "movie" && (
                <Suspense fallback={<Loading />}>
                  <SwiperSlide key={index}>
                    <SlideFillMovie {...slide} index={index} currentSlide={currentSlides} /> 
                  </SwiperSlide> 
                </Suspense>
              )}
              { slide.layout === "movie-info" && (
                <Suspense fallback={<Loading />}>
                  <SwiperSlide key={index}>
                    <SlideFillMovieInfo {...slide} index={index} currentSlide={currentSlides} /> 
                  </SwiperSlide> 
                </Suspense>
              )}
              { slide.layout === "two-cols-movie-info" && (
                <Suspense fallback={<Loading />}>
                  <SwiperSlide key={index}>
                    <Slide2ColsMovieInfo {...slide} index={index} currentSlide={currentSlides} /> 
                  </SwiperSlide> 
                </Suspense>
              )}
              { slide.layout === "three-cols-info-movie-movie" && (
                <Suspense fallback={<Loading />}>
                  <SwiperSlide key={index}>
                    <Slide3ColsInfoMovieMovie {...slide} index={index} currentSlide={currentSlides} /> 
                  </SwiperSlide> 
                </Suspense>
              )}
              { slide.layout === "three-cols-info-desc-movie" && (
                <Suspense fallback={<Loading />}>
                  <SwiperSlide key={index}>
                    <Slide3ColsInfoDescMovie {...slide} index={index} currentSlide={currentSlides} /> 
                  </SwiperSlide> 
                </Suspense>
              )}
              </>
            ) 
          })}
          </Swiper>
      </StyledSwiper>
    );
  }

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
    width: 100vw;
    height: 100vh;
    
}
.swiper-wrapper {
   --transition-timing-function: cubic-bezier(1.000, -0.010, 0.405, 1.195);
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
  `;


export default VerticalSwiper;