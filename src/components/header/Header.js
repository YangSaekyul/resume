import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Navigation = styled.div`
  display: flex;
`;

const Menu = styled.div`
  margin: 0 10px;
`;

function Header() {
  return (
    <Container>
      <div>양새결</div>
      <Navigation>
        <Menu>About Me</Menu>
        <Menu>Skill</Menu>
        <Menu>Career</Menu>
        <Menu>Project</Menu>
        <Menu>Contact</Menu>
      </Navigation>
    </Container>
  );
}

export default Header;
