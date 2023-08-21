import styled from "styled-components";
import park from "../img/park.jpg";
import { Title } from "./Title";

const Container = styled.div`
  padding: 20px;
  display: flex;
`;

const Introduce = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function AboutMe() {
  return (
    <>
      <Title>About Me</Title>
      <Container>
        <img src={park} alt="공원 사진" width={"400px"} />
        <Introduce>
          <p>안녕하세요! 어릴 때부터 ~~~</p>
          <p>안녕하세요! 어릴 때부터 ~~~</p>
          <p>안녕하세요! 어릴 때부터 ~~~</p>
          <p>안녕하세요! 어릴 때부터 ~~~</p>
          <p>안녕하세요! 어릴 때부터 ~~~</p>
          <p>안녕하세요! 어릴 때부터 ~~~</p>
        </Introduce>
      </Container>
    </>
  );
}

export default AboutMe;
