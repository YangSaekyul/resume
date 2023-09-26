import styled from "styled-components";
import { Title } from "../Title";
import stackoverflow from "./stackoverflow.png";
import bbangorder from "./bbangorder.png";
import { GithubIcon } from "../../assets/Icon";

const Container = styled.div`
  background-color: #a6d0dd;
  padding: 5px 20px 20px 20px;
`;

const ProjectContainer = styled.div`
  display: flex;
  background-color: white;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
`;

const ProjectName = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const ProjectDescription = styled.div`
  font-size: 20px;
  width: 50%;
`;

const ProjectDetail = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  padding: 0 20px;
`;

const PositionedGithubIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const ProjectSubtitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  color: gray;
`;

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

const BbangOrder = () => {
  return (
    <ProjectContainer>
      <ProjectName>빵오더</ProjectName>
      <ProjectSubtitle>2023.09 - ing</ProjectSubtitle>
      <a href="https://github.com/codestates-seb/seb45_main_014">
        <PositionedGithubIcon>
          <GithubIcon />
        </PositionedGithubIcon>
      </a>
      <ProjectDetail>
        <ImageContainer>
          <Image src={bbangorder} />
        </ImageContainer>
        <ProjectDescription>
          <Paragraph>
            <span className="font-bold">
              빵오더 서비스는 빵집을 한 눈에 찾기 어려웠던 경험을 바탕으로
              구상된 서비스
            </span>
            입니다. 빵집을 검색하거나, 추천 빵집으로 접속해서 메뉴를 고르고
            예약된 시간에 픽업 주문까지 할 수 있습니다.
          </Paragraph>
          <Paragraph>
            <Highlight>Zustand</Highlight>를 사용하여 상태관리를 하였는데 이와
            같은 새로운 라이브러리를 사용하면서 상태관리에 대한 이해도를 높일 수
            있었습니다. <Highlight>OAuth2</Highlight>를 이용하여 토큰을 받아
            로그인을 구현하는 과정에서 많이 힘들었지만 성공하였습니다.
          </Paragraph>
          <Paragraph>
            스타일 관리는 <Highlight>Tailwind CSS</Highlight>를 메인으로
            사용하고, 중복 코드를 최대한 방지하기 위해{" "}
            <Highlight>Styled Components</Highlight>를 같이 사용하였습니다.
          </Paragraph>
          <Paragraph>
            현재는 스프린트를 나누어 개발하고 있습니다. 1차 스프린트는 사이트를
            운영하는데 핵심 기능만 구현하였고, 현재는 2차 스프린트로 도전적인
            과제를 진행 중에 있습니다.
          </Paragraph>
        </ProjectDescription>
      </ProjectDetail>
    </ProjectContainer>
  );
};

const StackOverFlow = () => {
  return (
    <ProjectContainer>
      <ProjectName>스택오버플로우</ProjectName>
      <ProjectDetail>
        <ImageContainer>
          <Image src={stackoverflow} />
        </ImageContainer>
        <ProjectDescription>
          스택오버플로우 클론코딩 웹사이트입니다.
        </ProjectDescription>
      </ProjectDetail>
    </ProjectContainer>
  );
};

const Project = () => {
  return (
    <Container>
      <Title id="Project">Project</Title>
      <BbangOrder />
      <StackOverFlow />
    </Container>
  );
};

export default Project;
