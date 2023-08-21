import styled from "styled-components";
import idPicture from "../../img/idPicture.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
`;

const Menu = styled.div`
  margin: 0 10px;
`;

function Header() {
  return (
    <Container>
      <img src={idPicture} alt="내사진" height={"50%"} />
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
