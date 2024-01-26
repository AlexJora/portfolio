import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "../components/ScrollAnimation";

const WelcomeContainer = styled.div`
  font-family: "dancing script", cursive;
`;

const WelcomeTextContainer = styled.div`
  line-height: 2.5rem;
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
            <h1 className="display-6">I'm a junior full stack developer.</h1>
          </WelcomeContainer>
          <WelcomeTextContainer className="pt-5 custom-fs">
            {/* <p>I have 1.5 years’ experience.</p> */}
            <p>
              I value <span className="fw-semibold">empathy</span>, and
              <span className="fw-semibold"> integrity</span> above all else.
              <br></br>
              These ideals guide my approach to problem solving and life in
              general.
            </p>
          </WelcomeTextContainer>
        </Col>
      </Row>
      <Row className="pt-5 pb-3">
        <ScrollAnimation />
      </Row>
      <Row className="pt-lg-5 pt-md-5 pt-sm-1">
        <div className="col-12 col-md-12 col-lg-10 hr-wrapper">
          <hr className=" border-2 opacity-100" />
        </div>
      </Row>
    </Container>
  );
};

export default Home;
