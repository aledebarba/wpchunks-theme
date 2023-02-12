import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { videos } from "./video-data";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const VideosCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const videoIndex = wrap(0, videos.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Carousel>
      <AnimatePresence initial={false} custom={direction}>
        <motion.video
          muted
          loop
          autoPlay
          key={page}          
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 15 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <source src={videos[videoIndex]} type="video/mp4" />
        </motion.video>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </Carousel>
  );
};

const Carousel = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background: black;

.next,
.prev {
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
}

.next {
  right: 1.5rem;
}

.prev {
  left: 1rem;
  transform: scale(-1);
}

video {
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.refresh {
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
`
export default VideosCarousel;