import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import { Box } from "@mui/material";
import Img from "../common/img";

const Gallery = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
    >
      <SwiperSlide>
        <Box>
          <Img src="/assets/images/ex.jpg" alt="main" layout="fill" />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Img src="/assets/images/ex.jpg" alt="main" layout="fill" />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Img src="/assets/images/ex.jpg" alt="main" layout="fill" />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Img src="/assets/images/ex.jpg" alt="main" layout="fill" />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Img src="/assets/images/ex.jpg" alt="main" layout="fill" />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Img src="/assets/images/ex.jpg" alt="main" layout="fill" />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery;
