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
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
  border-radius: 10px;
  object-fit: cover;

  &:hover {
    scale: 1.05;
    transition: all 0.5s ease-in-out;
  }
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

  &:hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }
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

const ProjectItem = ({
  projectName,
  projectSubtitle,
  projectDescription,
  imageSrc,
  githubLink,
}) => {
  return (
    <ProjectContainer>
      <ProjectName>{projectName}</ProjectName>
      {projectSubtitle && <ProjectSubtitle>{projectSubtitle}</ProjectSubtitle>}
      {githubLink && (
        <a href={githubLink}>
          <PositionedGithubIcon>
            <GithubIcon />
          </PositionedGithubIcon>
        </a>
      )}
      <ProjectDetail>
        <ImageContainer>
          <Image src={imageSrc} />
        </ImageContainer>
        <ProjectDescription>{projectDescription}</ProjectDescription>
      </ProjectDetail>
    </ProjectContainer>
  );
};

const Project = () => {
  return (
    <Container>
      <Title id="Project">Project</Title>
      <ProjectItem
        projectName="빵오더"
        projectSubtitle="2023.08.24 - ing"
        projectDescription={
          <>
            <Paragraph>
              <span className="font-bold">
                빵오더 서비스는 빵집을 한 눈에 찾기 어려웠던 경험을 바탕으로
                구상된 서비스
              </span>
              입니다. 빵집을 검색하거나, 추천 빵집으로 접속해서 메뉴를 고르고
              예약된 시간에 픽업 주문까지 할 수 있습니다.
            </Paragraph>
            <Paragraph>
              프로젝트의 목적은 <Highlight>서비스가 가능한 형태</Highlight>로
              만드는 것이었습니다. 그렇기 때문에 <Highlight>UI/UX</Highlight>에
              집중하였고, 버그나 기능적 디테일에 최대한 초점을 두었습니다.
            </Paragraph>
            <Paragraph>
              <Highlight>React</Highlight>를 메인으로 사용하였고,{" "}
              <Highlight>React Router</Highlight>를 사용하여 각 페이지 이동을
              구현하였습니다.
            </Paragraph>
            <Paragraph>
              <Highlight>Zustand</Highlight>를 사용하여 상태관리를 하였는데 이와
              같은 새로운 라이브러리를 사용하면서 상태관리에 대한 이해도를 높일
              수 있었습니다. <Highlight>OAuth2</Highlight>를 이용하여 토큰을
              받아 로그인을 구현하는 과정이 어려웠습니다.
            </Paragraph>
            <Paragraph>
              스타일 관리는 <Highlight>Tailwind CSS</Highlight>를 메인으로
              사용하고, 중복 코드를 최대한 방지하기 위해{" "}
              <Highlight>Styled Components</Highlight>를 같이 사용하였습니다.
            </Paragraph>
            <Paragraph>
              현재는 스프린트를 나누어 개발하고 있습니다. 1차 스프린트는
              사이트를 운영하는데 핵심 기능만 구현하였고, 현재는 2차 스프린트로
              도전적인 과제를 진행 중에 있습니다.
            </Paragraph>
          </>
        }
        imageSrc={bbangorder}
        githubLink="https://github.com/codestates-seb/seb45_main_014"
      />
      <ProjectItem
        projectName="포트폴리오"
        projectSubtitle="수시로 최신화"
        projectDescription={
          <>
            <Paragraph>
              저를 표현하는 웹사이트입니다. 앞으로 쭉 최신화를 할 예정이며, 새로
              습득한 기술을 적용하면서 수정 중입니다.
            </Paragraph>
            <Paragraph>
              자기소개, 사용 가능한 기술, 프로젝트, 연락처로 구성되어 있습니다.
            </Paragraph>
          </>
        }
        imageSrc={
          "https://user-images.githubusercontent.com/121498405/262725736-72a3f094-6d54-438f-9b74-aafcada7acb2.png"
        }
        githubLink="https://github.com/YangSaekyul/resume"
      />
      <ProjectItem
        projectName="스택오버플로우 클론코딩"
        projectSubtitle="2023.08.04 - 2023.08.23"
        projectDescription={
          <>
            <Paragraph>
              부트캠프를 수강하면서 메인 프로젝트를 진입하기 전 프로젝트에 대한
              감각을 익히고자 첫 번째 협업으로 주어진 과제입니다.
            </Paragraph>
            <Paragraph>
              <Highlight>React</Highlight>를 메인으로 사용하였고,{" "}
              <Highlight>React Router</Highlight>를 사용하여 각 페이지 이동을
              구현하였습니다.
            </Paragraph>
            <Paragraph>
              질문 목록을 GET 요청으로 받아와{" "}
              <Highlight>페이지네이션</Highlight>을 구현해보았으며, 질문을
              전송한 후 메인 페이지로 렌더링되는 기능을 구현하였습니다.
            </Paragraph>
            <Paragraph>
              스타일 관리는 <Highlight>Styled Components</Highlight>를
              사용하였습니다.
            </Paragraph>
            <Paragraph>
              처음으로 백엔드 팀원을 만나 협업을 하면서 일정 관리나 의견 조율 등
              어려움이 있었지만 FE/BE 모두 좋은 팀원을 만나 무사히
              마무리하였습니다.
            </Paragraph>
          </>
        }
        imageSrc={stackoverflow}
        githubLink="https://github.com/codestates-seb/seb45_pre_022"
      />
    </Container>
  );
};

export default Project;
