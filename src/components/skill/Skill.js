import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SkillContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px;
  margin: 5px 20px;
  padding: 10px;
`;

function Skill() {
  return (
    <Container>
      <SkillContainer>
        <h1>FrontEnd</h1>
      </SkillContainer>
      <h1>BackEnd</h1>
      <h1>Communication</h1>
      <h1>Deployment</h1>
      <div>
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"
          alt="HTML5"
        />
        <img
          src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"
          alt="CSS3"
        />
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"
          alt="JavaScript"
        />
        <img
          src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"
          alt="React"
        />
        <img
          src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"
          alt="TypeScript"
        />
        <img
          src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"
          alt="Redux"
        />
        <img
          src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white"
          alt="Next.js"
        />
        <img
          src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=Express&logoColor=white"
          alt="Express.js"
        />
        <img
          src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"
          alt="Git"
        />
        <img
          src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"
          alt="GitHub"
        />
        <img
          src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=Amazon-AWS&logoColor=white"
          alt="AWS"
        />
        <img
          src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"
          alt="Figma"
        />
      </div>
    </Container>
  );
}

export default Skill;
