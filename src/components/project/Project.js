import styled from "styled-components";
import { Title } from "../Title";
import image1 from "./0.png";
import image2 from "./1.png";
import image3 from "./2.png";
import image4 from "./3.png";
import { MoveButton } from "../../assets/Button";

const Container = styled.div`
  background-color: #a6d0dd;
  padding: 5px 20px 20px 20px;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 0 20px 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 20px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Project = () => {
  return (
    <Container>
      <Title id="Project">Project</Title>
      <ProjectContainer>
        <div>
          <ImageContainer>
            <Image src={image1} alt="image1" />
            <Image src={image2} alt="image2" />
          </ImageContainer>
          <ImageContainer>
            <Image src={image3} alt="image3" />
            <Image src={image4} alt="image4" />
          </ImageContainer>
        </div>
        <Info>
          <svg
            aria-hidden="true"
            class="native svg-icon iconLogoGlyphMd"
            width="200"
            height="200"
            viewBox="0 0 32 37"
          >
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
            <path
              d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
              fill="#F48024"
            />
          </svg>
          <h1>stackoverflow.com Clone</h1>
          <a href="http://seb045022pre.shop/">
            <MoveButton>website</MoveButton>
          </a>
        </Info>
      </ProjectContainer>
    </Container>
  );
};

export default Project;
