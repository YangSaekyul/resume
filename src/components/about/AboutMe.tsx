import styled from "styled-components";
import park from "../../assets/img/park.jpg";
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
  width: 400px;

  @media (max-width: 768px) {
    width: 300px;
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
        <MyImage src={park} alt="공원 사진" />
        <Introduce>
          <Text>안녕하세요. 🙇🏻</Text>
          <Text>
            서비스업의 성장 한계를 느끼며 이런 저런 시도를 해보다가 간단한
            데이터를 다루는 업무를 하게 되고,
          </Text>
          <Text>
            반복적인 업무에 지쳐 자동화를 공부하다 프로그래밍을 입문하게
            되었습니다.
          </Text>
          <Text>
            고객을 주로 상대 하였던 업무 경험을 바탕으로, 사용자 친화적인 UX 를
            다룰 수 있는 프론트엔드 개발자입니다.
          </Text>
          <Text>
            개발자는 앞으로 무한한 성장을 할 수 있다는 생각에 꾸준히 노력하고
            있습니다. 🧑🏻‍💻
          </Text>
        </Introduce>
      </Container>
    </>
  );
}

export default AboutMe;
