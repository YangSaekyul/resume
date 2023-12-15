import styled from "styled-components";
import picture from "../../assets/img/사진.jpg";
import { Title } from "../Title";

const Container = styled.div`
  padding: 20px;
  display: flex;

  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Introduce = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Text = styled.p`
  margin: 5px 0;
`;

const MyImage = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function AboutMe() {
  return (
    <>
      <Title id="AboutMe">About Me</Title>
      <Container>
        <MyImage src={picture} alt="공원 사진" />
        <Introduce>
          <Text>안녕하세요. 🙇🏻</Text>
          <Text>
            고객을 주로 상대 업무 경험이 많은 사람으로서, 사용자 친화적인 UX 를
            다룰 수 있는 프론트엔드 개발자입니다.
          </Text>
        </Introduce>
      </Container>
    </>
  );
}

export default AboutMe;
