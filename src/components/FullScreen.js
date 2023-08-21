import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FullScreen() {
  return (
    <>
      <Container>
        <h1>안녕하세요!</h1>
      </Container>
    </>
  );
}

export default FullScreen;
