import styled from "styled-components";
import { MoveButton } from "./Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightslategray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.span`
  color: blue;
`;

function Home() {
  return (
    <>
      <Container>
        <h1>
          안녕하세요! <Name>프론트엔드 개발자</Name>
          <br />
          <Name>양새결</Name>입니다!
        </h1>
        <MoveButton>구경하기!</MoveButton>
      </Container>
    </>
  );
}

export default Home;
