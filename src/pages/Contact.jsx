import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const ThankYouText = styled.h2`
  font-family: "Dancing Script", cursive;
`;

const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Container
      id="contact"
      fluid
      className="main-container pt-4 pb-5 mb-5 ps-lg-5"
    >
      {/* LARGE SCREEN */}
      <Row className="d-none d-lg-flex pt-3">
        <Col lg={5} className="pe-5">
          <div>
            <ThankYouText className="display-6 mb-5 pb-5">
              Thank You for visiting!
            </ThankYouText>
            <p className="pb-5 mb-5">Phone number: +27 66 552 8814</p>
            <a
              href="#"
              onClick={scrollToTop}
              className="mt-5 text-decoration-none fs-5 fw-bold text-dark"
            >
              Back to Top
            </a>
          </div>
        </Col>
        <Col lg={7} className="ps-5">
          <div>
            <p className="fs-2 pb-5">CONTACT Me</p>
            <ContactForm />
          </div>
        </Col>
      </Row>
      {/* ========================================================= */}
      {/* MEDIUM AND SMALL SCREENS */}
      <Row className="d-md-block d-lg-none text-center">
        <Col md={12}>
          <p className="fs-1 pb-5">Contact Me</p>
        </Col>

        <Col md={12} className="pb-5">
          <ContactForm />
        </Col>
        <Col md={12}>
          <div>
            <ThankYouText className="display-6 lh-base mb-5 pb-5">
              Thank You for visiting!
            </ThankYouText>
          </div>
        </Col>
        <Col md={12} className="d-flex justify-content-center pb-4">
          {/* Icons */}
          <FontAwesomeIcon icon={faSquareEnvelope} size="3x" className="mx-4" />
          <FontAwesomeIcon icon={faSquareGithub} size="3x" className="mx-4" />
          <FontAwesomeIcon icon={faLinkedin} size="3x" className="mx-4" />
        </Col>
        <Col md={12}>
          <p>Phone number: +27 66 552 8814</p>
          <a
            href="#"
            onClick={scrollToTop}
            className="mt-5 text-decoration-none fs-5 fw-bold text-dark"
          >
            Back to Top
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
