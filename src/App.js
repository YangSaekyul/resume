import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Skill from "./components/skill/Skill";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";

import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cute+Font&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif !important;
  }
`;

const MainContainer = styled.main`
  margin-top: ${(props) => (props.headerVisible ? "" : "70px")};
`;

function App() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.getElementById("about")) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Header visible={headerVisible} />
      <MainContainer>
        <AboutMe />
        <Skill />
      </MainContainer>
    </div>
  );
}

export default App;
