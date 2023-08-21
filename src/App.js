import FullScreen from "./components/FullScreen";
import Header from "./components/header/Header";

import { createGlobalStyle } from "styled-components";

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

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FullScreen />
      <Header />
    </div>
  );
}

export default App;
