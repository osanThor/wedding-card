import Img from "@/copmonents/common/img";
import { Box, Container } from "@mui/material";

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
        />
      </Box>
      <Box p={2}>소중한 분들을 초대합니다~ 블라블라(string)</Box>
      <Box p={2}>웨딩 갤러리(loop slide gallery)</Box>
      <Box p={2}>달력 날짜</Box>
      <Box p={2}>음식 안내</Box>
      <Box p={2}>지도 (map API)</Box>
      <Box p={2}>교통안내</Box>
      <Box p={2}>방명록 남기기</Box>
      <Box p={2}>마음 전하실 곳 (계좌번호 복사 기능)</Box>
    </Container>
  );
}
