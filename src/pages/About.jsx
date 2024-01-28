import { Container, Row, Col, Button } from "react-bootstrap";
import { aboutMeTitle, aboutMeText, aboutImage } from "../../data.jsx";
import resume from "../assets/pages-img/Resume.pdf";
import styled from "styled-components";

const ResumeButton = styled(Button)`
  &.btn {
    color: #000;
    background-color: var(--button-orange);
    border-color: var(--button-green);

    padding: 10px 15px;

    &:hover {
      background-color: var(--button-green);
      border-color: var(--button-orange);
    }
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  margin-top: -30px;
  white-space: pre-line;
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const LargeImageWrapper = styled.div`
  width: 60%;
`;
const MediumImageWrapper = styled.div`
  width: 40%;
`;
const SmallImageWrapper = styled.div`
  width: 65%;
`;

const About = () => {
  return (
    <Container id="about" className="pt-4 ps-lg-5">
      {/* LARGE SCREEN */}
      <Row className="mb-5 d-none d-md-flex">
        <Col>
          <h6 className="display-6 text-sm-center text-lg-start ">
            {aboutMeTitle}
          </h6>
        </Col>
      </Row>

      <Row className="mb-5 d-none d-lg-flex">
        <Col lg={6} className="pe-1">
          <AboutText className=" pb-5">{aboutMeText}</AboutText>

          <a href={resume} target="_blank" rel="noreferrer">
            <ResumeButton size="md" className="mt-1 btn">
              MY RESUME
            </ResumeButton>
          </a>
        </Col>
        <Col lg={6}>
          <LargeImageWrapper>
            <img
              src={aboutImage.imageUrl}
              alt="About Me"
              className="img-fluid rounded ms-5"
            />
          </LargeImageWrapper>
        </Col>
      </Row>
      {/* ================ */}
      {/* Medium Screens - Image on Top, Text Underneath */}
      <Row className="mb-5 d-none d-md-block d-lg-none d-sm-none">
        <Col md={12} className="text-center">
          <MediumImageWrapper className="mx-auto">
            <img
              src={aboutImage.imageUrl}
              alt="About Me"
              className="img-fluid rounded mb-5"
            />
          </MediumImageWrapper>
        </Col>
        <Col md={12} className="pt-3">
          <AboutText>{aboutMeText}</AboutText>
          <a href={resume} target="_blank" rel="noreferrer">
            <ResumeButton size="md" className="mt-5 btn">
              MY RESUME
            </ResumeButton>
          </a>
        </Col>
      </Row>
      {/* ============ */}
      <Row className="pt-1 d-none d-lg-flex d-md-flex">
        <Col className="mb-4">
          <Row>
            <Col lg={4} md={4} className="border-end border-start border-dark">
              <p className="ps-lg-2">
                <u>Locations</u>
              </p>
              <p className="ps-lg-2">Cape Town, South Africa</p>
              <p className="ps-lg-2">Romania, Constanta</p>
            </Col>
            <Col lg={4} md={4} className="border-end border-dark">
              <p className="ps-lg-2">
                <u>Experience</u>
              </p>
              <p className="ps-lg-2">1.5 years</p>
            </Col>
            <Col lg={4} md={4}>
              <p className="ps-lg-2">
                <u>Hobbies</u>
              </p>
              <p className="ps-lg-2">Hiking</p>
              <p className="ps-lg-2">Reading</p>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* ============================================== */}
      {/* SMALL SCREEN */}
      <Container>
        <Row className="d-md-none d-sm-block">
          <Col sm={12} className="text-center">
            <h6 className="display-6">{aboutMeTitle}</h6>
          </Col>

          <Col sm={12} className="text-center">
            <SmallImageWrapper className="mx-auto">
              <img
                src={aboutImage.imageUrl}
                alt="About Me"
                className="img-fluid rounded mb-5 mt-5"
              />
            </SmallImageWrapper>
          </Col>
          <Col sm={12}>
            <AboutText className="pb-4">{aboutMeText}</AboutText>

            <Col sm={12}>
              <ResumeButton size="md" className=" mb-5 btn">
                MY RESUME
              </ResumeButton>
            </Col>
          </Col>
          <Col sm={12} className="mb-4">
            <Row>
              <Col sm={12}>
                <p>
                  <u>Locations</u>
                </p>
                <p>Cape Town, South Africa</p>
                <p>Romania, Constanta</p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} className="mb-4">
            <Row>
              <Col sm={12} className="">
                <p>
                  <u>Experience</u>
                </p>
                <p>1.5 years</p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} className="mb-4">
            <Row>
              <Col sm={12} className="">
                <p>
                  <u>Hobbies</u>
                </p>
                <p>Hiking</p>
                <p>Gardening</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="pt-lg-5 pt-md-5 pt-sm-1">
          <div className="col-12 col-md-12 col-lg-10 hr-wrapper">
            <hr className="border-2 opacity-100" />
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
