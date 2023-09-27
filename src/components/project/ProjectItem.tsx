import styled from "styled-components";
import { GithubIcon } from "../../assets/Icon";

interface ProjectItemProps {
  projectName: string;
  projectSubtitle?: string;
  projectDescription: JSX.Element;
  imageSrc: string;
  githubLink?: string;
}

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

  @media (max-width: 600px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
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

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const ProjectDetail = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  padding: 0 20px;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectDescription = styled.div`
  font-size: 20px;
  width: 50%;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const PositionedGithubIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;

  &:hover {
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1024px) {
    /* 크기 줄이기 */
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const ProjectSubtitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  color: gray;
`;

const ProjectItem: React.FC<ProjectItemProps> = ({
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

export default ProjectItem;
