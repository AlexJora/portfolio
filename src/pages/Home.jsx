import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "../components/ScrollAnimation";

const WelcomeContainer = styled.div`
  font-family: "dancing script", cursive;
`;

const WelcomeTextContainer = styled.div`
  // font-family: "Nunito", sans-serif;
  font-size: 1.2rem;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const Home = () => {
  return (
    <Container id="home" className="ps-lg-5">
      <Row className="mt-2">
        <Col>
          <WelcomeContainer>
            <h1 className="pb-3 display-2">Welcome,</h1>
            <h1 className="display-6">
              I'm Catalina-Alexandra Jora or just Alex.
            </h1>
            <h1 className="display-6">I'm a full stack developer.</h1>
          </WelcomeContainer>
          <WelcomeTextContainer className="pt-5 custom-fs">
            <p>
              Lorem ipsum dolor sit amet. Aut voluptatem voluptatem ut
              laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Aut voluptatem voluptatem ut
              laudantiu.
              <br></br>ipsum dolor sit amet. Aut voluptatem.
            </p>
          </WelcomeTextContainer>
        </Col>
      </Row>
      <Row className="pt-5 pb-3">
        <ScrollAnimation />
      </Row>
      <Row className="pt-lg-5 pt-md-5 pt-sm-1">
        <div className="col-12 col-md-12 col-lg-10">
          <hr className="border-dark border-2 opacity-100" />
        </div>
      </Row>
    </Container>
  );
};

export default Home;