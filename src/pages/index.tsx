import Img from "@/copmonents/common/img";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ p: 0, pl: 0, pr: 0 }}>
      <Box maxWidth="sm" position="relative">
        <Img src="/assets/images/ex.jpg" alt="main" layout="fill" />
        <Box
          position="absolute"
          border="1px solid white"
          zIndex={9}
          width="calc(100% - 32px)"
          height="calc(100% - 32px)"
          top={16}
          left={16}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box bgcolor="rgba(255,255,255,0.4)" width={200} height={300} p={2}>
            <Typography
              variant="h1"
              component="h2"
              fontSize={30}
              fontWeight="bolder"
            >
              이준영 최보경
            </Typography>
            <Typography variant="subtitle1" fontSize={20}>
              Wedding Day
            </Typography>
            <Typography>파티웨딩유 2층 아모르홀</Typography>
            <Typography>2024.01.27</Typography>
          </Box>
        </Box>
      </Box>
      <Box p={2}>소중한 분들을 초대합니다~ 블라블라(string)</Box>
      <Box p={2}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
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
      </Box>
      <Box p={2}>달력 날짜</Box>
      <Box p={2}>음식 안내</Box>
      <Box p={2}>지도 (map API)</Box>
      <Box p={2}>교통안내</Box>
      <Box p={2}>방명록 남기기</Box>
      <Box p={2}>마음 전하실 곳 (계좌번호 복사 기능)</Box>
    </Container>
  );
}
