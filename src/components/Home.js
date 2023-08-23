import styled from "styled-components";
import { MoveButton } from "../assets/Button";
import { scrollToSection } from "../utils/navigation";
import { useSpring, animated } from "react-spring";

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
  font-size: 3em;
`;

function Home() {
  const nameProps = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    delay: 1000,
  });

  const portfolioProps = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    delay: 2000,
  });

  return (
    <>
      <Container>
        <animated.h1 style={nameProps}>
          <Name>SAEKYUL YANG</Name>
          <br />
        </animated.h1>
        <animated.h1 style={portfolioProps}>
          <Name>PORTFOLIO</Name>
        </animated.h1>
        <MoveButton onClick={() => scrollToSection("about")}>
          구경하기!
        </MoveButton>
      </Container>
    </>
  );
}

export default Home;
