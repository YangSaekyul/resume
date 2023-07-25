import styled from "styled-components";
import photo from "./photo.jpeg";
import Contact from "./Contact";

const Container = styled.header`
  display: flex;
  justify-content: center;
`;

const MyPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30%;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <>
      <Container>
        <MyPhoto src={photo} alt="증명사진" />
        <Title>다양한 경험을 보유한 프론트엔드 개발자 ㅇㅇㅇ입니다!</Title>
      </Container>
      <Contact />
    </>
  );
}

export default Header;
