import styled from "styled-components";
import idPicture from "../../assets/img/idPicture.jpeg";
import { scrollToSection } from "../../utils/navigation";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 1000;

  background-color: white;
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
    color: #ff0000;
  }
`;

function Header() {
  const menuItems = ["About Me", "Skill", "Project", "Contact"];
  //   const menuItems = ["About Me", "Skill", "Career", "Project", "Contact"];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HeaderContainer
      style={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.2)" : "white",
      }}
    >
      <img
        className="h-10 rounded-lg cursor-pointer"
        src={idPicture}
        alt="내사진"
        onClick={handleScrollTop}
        width={50}
      />
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
