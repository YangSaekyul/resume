import styled from "styled-components";
import idPicture from "../../img/idPicture.jpeg";
import { scrollToSection } from "../../utils/navigation";
import React from "react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 50px;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 2s ease;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Navigation = styled.nav`
  display: flex;
  margin-right: 30px;
`;

const Menu = styled.div`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

function Header() {
  const menuItems = ["About Me", "Skill", "Project", "Contact"];
  //   const menuItems = ["About Me", "Skill", "Career", "Project", "Contact"];

  return (
    <HeaderContainer>
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
