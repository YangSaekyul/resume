import styled from "styled-components";
import { MoveButton } from "../assets/Button";
import { scrollToSection } from "../utils/navigation";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ecf9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 2em;
`;

function Home() {
  return (
    <>
      <Container>
        <h1>
          <Name>SAEKYUL YANG</Name>
          <br />
          <Name>PORTFOLIO</Name>
        </h1>
        <MoveButton onClick={() => scrollToSection("about")}>
          구경하기!
        </MoveButton>
      </Container>
    </>
  );
}

export default Home;
