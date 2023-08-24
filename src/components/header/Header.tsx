import styled from "styled-components";
import idPicture from "../../img/idPicture.jpeg";
import { scrollToSection } from "../../utils/navigation";
import React from "react";

interface HeaderProps {
  visible: boolean;
}

const HeaderContainer = styled.header<HeaderProps>`
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
  align-items: center;
  width: 100%;
  position: ${(props) => (props.visible ? "fixed" : "")};
  background-color: ${(props) => (props.visible ? "rgba(0, 0, 0, 0.1)" : "")};
  transition: background-color 2s ease;
`;

const Navigation = styled.nav`
  display: flex;
  margin-right: 30px;
`;

const Menu = styled.div`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: #1e90ff;
  }
`;

function Header({ visible }: HeaderProps) {
  const menuItems = ["About Me", "Skill", "Career", "Project", "Contact"];

  return (
    <HeaderContainer visible={visible}>
      <img src={idPicture} alt="내사진" height={"50%"} />
      <Navigation>
        {menuItems.map((item) => (
          <Menu
            key={item}
            onClick={() => scrollToSection(item.replace(/\s+/g, ""))}
          >
            {item}
          </Menu>
        ))}
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
