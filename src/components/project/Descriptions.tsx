import styled from "styled-components";

const Paragraph = styled.p`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  color: blue;
  font-weight: bold;
`;

export const seniorJobDescription = () => {
  return (
    <>
      <Paragraph>
        인구 고령화, 일자리 부족과 같은 사회적 이슈를 해결하고자{" "}
        <Highlight>시니어들을 위해 강의를 제공</Highlight>하는 서비스입니다.
      </Paragraph>
      <Paragraph>
        더 도전적으로 프로젝트를 해보기 위해 <Highlight>TypeScript</Highlight>를
        적용하였고, 스타일링은 <Highlight>tailwind-styled-components</Highlight>
        를 사용하였으며, 상태관리는 빵오더 서비스와 동일하게{" "}
        <Highlight>Zustand</Highlight>를 사용하였습니다.
      </Paragraph>
      <Paragraph>
        저는 해당 프로젝트에서 <Highlight>강좌 개설</Highlight> 부분을
        구현하였습니다.
      </Paragraph>
      <Paragraph>
        강좌 개설은 1, 2, 3단계 이후 개설하기 버튼을 눌러 백엔드와 동시 유효성
        검사를 마친 후 결점이 없다면 새 강좌를 생성하게 됩니다.
      </Paragraph>
      <Paragraph>
        현재는 전체적인 완성은 끝났으나{" "}
        <Highlight>예외 처리, 성능 최적화, 반응형 웹</Highlight> 작업이 필요하여
        보완 중에 있습니다.
      </Paragraph>
      <Paragraph></Paragraph>
    </>
  );
};

export const bbangOrderDescription = () => {
  return (
    <>
      <Paragraph>
        빵오더 서비스는 빵집을 한 눈에 찾기 어려웠던 경험을 바탕으로 구상된
        서비스입니다. 빵집을 검색하거나, 추천 빵집으로 접속해서 메뉴를 고르고
        예약된 시간에 픽업 주문까지 할 수 있습니다.
      </Paragraph>
      <Paragraph>
        프로젝트의 목적은 <Highlight>서비스가 가능한 형태</Highlight>로 만드는
        것이었습니다. 그렇기 때문에 <Highlight>UI/UX</Highlight>에 집중하였고,
        버그나 기능적 디테일에 최대한 초점을 두었습니다.
      </Paragraph>
      <Paragraph>
        <Highlight>React</Highlight>를 메인으로 사용하였고,{" "}
        <Highlight>React Router</Highlight>를 사용하여 각 페이지 이동을
        구현하였습니다.
      </Paragraph>
      <Paragraph>
        <Highlight>Zustand</Highlight>를 사용하여 상태관리를 하였는데 이와 같은
        새로운 라이브러리를 사용하면서 상태관리에 대한 이해도를 높일 수
        있었습니다. <Highlight>OAuth2</Highlight>를 이용하여 토큰을 받아
        로그인을 구현하는 과정이 어려웠습니다.
      </Paragraph>
      <Paragraph>
        스타일 관리는 <Highlight>Tailwind CSS</Highlight>를 메인으로 사용하고,
        중복 코드를 최대한 방지하기 위해{" "}
        <Highlight>Styled Components</Highlight>를 같이 사용하였습니다.
      </Paragraph>
    </>
  );
};

export const portfolioDescription = () => {
  return (
    <>
      <Paragraph>
        저를 표현하는 웹사이트입니다. 앞으로 쭉 최신화를 할 예정이며, 새로
        습득한 기술을 적용하면서 수정 중입니다.
      </Paragraph>
      <Paragraph>
        자기소개, 사용 가능한 기술, 프로젝트, 연락처로 구성되어 있습니다.
      </Paragraph>
      <Paragraph>
        <Highlight>Styled Components</Highlight>를 사용하여 태블릿과
        모바일에서도 사이트를 편하게 볼 수 있도록{" "}
        <Highlight>반응형 웹</Highlight>을 구현하였습니다.
      </Paragraph>
    </>
  );
};

export const stackoverflowDescription = () => {
  return (
    <>
      <Paragraph>
        부트캠프를 수강하면서 메인 프로젝트를 진입하기 전 프로젝트에 대한 감각을
        익히고자 첫 번째 협업으로 주어진 과제입니다.
      </Paragraph>
      <Paragraph>
        <Highlight>React</Highlight>를 메인으로 사용하였고,{" "}
        <Highlight>React Router</Highlight>를 사용하여 각 페이지 이동을
        구현하였습니다.
      </Paragraph>
      <Paragraph>
        질문 목록을 GET 요청으로 받아와 <Highlight>페이지네이션</Highlight>을
        구현해보았으며, 질문을 전송한 후 메인 페이지로 렌더링되는 기능을
        구현하였습니다.
      </Paragraph>
      <Paragraph>
        스타일 관리는 <Highlight>Styled Components</Highlight>를 사용하였습니다.
      </Paragraph>
      <Paragraph>
        처음으로 백엔드 팀원을 만나 협업을 하면서 일정 관리나 의견 조율 등
        어려움이 있었지만 FE/BE 모두 좋은 팀원을 만나 무사히 마무리하였습니다.
      </Paragraph>
    </>
  );
};
