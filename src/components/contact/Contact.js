import styled from "styled-components";
import { Title } from "../Title";
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../assets/Icon";

const Container = styled.div`
  background-color: #99a98f;
  padding: 5px 20px 20px 20px;

  > div {
    display: flex;
    justify-content: center;
  }

  > div > a {
    margin: 0 20px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Title id="Contact">Contact</Title>
      <div>
        <GithubIcon />
        <LinkedinIcon />
        <EmailIcon />
        <InstagramIcon />
      </div>
    </Container>
  );
};

export default Contact;
