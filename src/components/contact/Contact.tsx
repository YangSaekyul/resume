import styled from "styled-components";
import { Title } from "../Title";
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../assets/Icon";

const Container = styled.div`
  background-color: lightgray;
  padding: 5px 20px 20px 20px;

  > div {
    display: flex;
    justify-content: center;
  }

  > div > a {
    margin: 0 20px;

    @media (max-width: 600px) {
      margin: 0 10px;
    }
  }

  @media (max-width: 600px) {
    svg {
      width: 80px;
      height: 80px;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <Title id="Contact">Contact</Title>
      <div>
        <EmailIcon />
        <a href="https://github.com/YangSaekyul">
          <GithubIcon />
        </a>
        <LinkedinIcon />
        {/* <InstagramIcon /> */}
      </div>
    </Container>
  );
};

export default Contact;
