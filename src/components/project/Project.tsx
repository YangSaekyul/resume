import styled from "styled-components";
import { Title } from "../Title";
import stackoverflow from "./stackoverflow.png";
import bbangorder from "./bbangorder.png";
import ProjectItem from "./ProjectItem";
import {
  bbangOrderDescription,
  portfolioDescription,
  stackoverflowDescription,
} from "./Descriptions";

const Container = styled.div`
  background-color: #a6d0dd;
  padding: 5px 20px 20px 20px;
`;

const Project = () => {
  return (
    <Container>
      <Title id="Project">Project</Title>
      <ProjectItem
        projectName="빵오더"
        projectSubtitle="2023.08.24 - ing"
        projectDescription={bbangOrderDescription()}
        imageSrc={bbangorder}
        githubLink="https://github.com/codestates-seb/seb45_main_014"
      />
      <ProjectItem
        projectName="포트폴리오"
        projectSubtitle="수시로 최신화"
        projectDescription={portfolioDescription()}
        imageSrc={
          "https://user-images.githubusercontent.com/121498405/262725736-72a3f094-6d54-438f-9b74-aafcada7acb2.png"
        }
        githubLink="https://github.com/YangSaekyul/resume"
      />
      <ProjectItem
        projectName="스택오버플로우"
        projectSubtitle="2023.08.04 - 2023.08.23"
        projectDescription={stackoverflowDescription()}
        imageSrc={stackoverflow}
        githubLink="https://github.com/codestates-seb/seb45_pre_022"
      />
    </Container>
  );
};

export default Project;
