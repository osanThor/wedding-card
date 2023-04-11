import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>
        메인 배너(이미지나 동영상)
      </Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>
        소중한 분들을 초대합니다~ 블라블라(string)
      </Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>
        웨딩 갤러리(loop slide gallery)
      </Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>달력 날짜</Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>음식 안내</Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>지도 (map API)</Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>교통안내</Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>방명록 남기기</Box>
      <Box sx={{ border: "1px solid", p: 2, mb: 3 }}>
        마음 전하실 곳 (계좌번호 복사 기능)
      </Box>
    </Container>
  );
}
