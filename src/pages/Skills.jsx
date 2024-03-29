import { useEffect, useState } from "react";
import { skillsName, divWidths } from "../../data.jsx";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

export const SkillBackground = styled.div`
  background-color: var(--button-green);
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-100px)"};
  transition: opacity 2.5s ease, transform 1s ease;
`;
export const ScaleText = styled.div`
  font-family: "Dancing Script", cursive;
`;
export const BorderScale = styled.div`
  border-color: var(--button-green) !important;
`;

export const VerticalRule = styled.div`
  color: var(--button-green);
  opacity: 1 !important;
  width: 2px !important;
`;

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const skillsPosition = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (skillsPosition < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container id="skills" className="pt-4 ps-lg-5">
      <h6 className="display-6 pb-5 text-sm-center text-lg-start">
        SKILLS and tools I use and improve
      </h6>

      {/* LARGE/MEDIUM SCREEN */}
      {/* Row 1/m-l */}

      <ScaleText className=" mt-5  d-none d-lg-block d-md-block">
        <Col
          lg={{ span: 7, offset: 2 }}
          md={{ span: 7, offset: 2 }}
          className="scale-text d-flex justify-content-between"
        >
          <div>what is that?</div>
          <div className="pe-2">superstar!</div>
        </Col>
      </ScaleText>

      {/* Row 2/m-l */}
      <Row className="d-none d-md-block d-lg-block">
        <Col lg={{ span: 9, offset: 2 }} md={{ span: 9, offset: 2 }}>
          <div className="d-flex align-items-center w-75 mobile-width1">
            <VerticalRule className="vr"></VerticalRule>
            <BorderScale className=" flex-grow-1 border-top border-bottom border border-2"></BorderScale>
            <VerticalRule className="vr"></VerticalRule>
          </div>
        </Col>
      </Row>
      {/* Row 3/m-l */}
      <Row className="mt-5 w-75 mobile-width2 d-none d-md-block d-lg-block">
        {skillsName.map((skill, index) => (
          <Col key={index} sm={12} className=" mb-2 position-relative">
            <div className="d-flex">
              <div className="h-20 w-25 me-2 fw-bold">{skill}</div>

              <SkillBackground
                isVisible={isVisible}
                className={` border border-2 border-light rounded h-20 w-${
                  divWidths[index] - 25
                }`}
              ></SkillBackground>
            </div>
          </Col>
        ))}
      </Row>
      {/* ========================================================== */}
      {/*SMALL SCREEN*/}
      {/* Row 1/mobile */}

      <ScaleText className="d-lg-none d-md-none d-sm-block">
        <Col
          xs={{ span: 9, offset: 3 }}
          className="scale-text d-flex justify-content-between"
        >
          <div>what is that?</div>
          <div>superstar!</div>
        </Col>
      </ScaleText>

      {/* Row 2/mobile */}
      <Row className="d-md-none d-sm-block">
        <Col xs={{ span: 9, offset: 3 }}>
          <div className="d-flex align-items-center">
            <VerticalRule className="vr vr-2"></VerticalRule>
            <BorderScale className=" flex-grow-1 border-top border-bottom border border-2 scale"></BorderScale>
            <VerticalRule className="vr"></VerticalRule>
          </div>
        </Col>
      </Row>

      {/* Row 3/mobile */}
      <Row className="mt-5 d-md-none d-sm-block">
        {skillsName.map((skill, index) => (
          <Col key={index} sm={12} className=" mb-2 position-relative">
            <div className="d-flex">
              <div className="h-20 w-25 me-2 fw-bold">{skill}</div>
              <SkillBackground
                isVisible={isVisible}
                className={`bg-skill-custom border border-2 border-light rounded h-20 w-${
                  divWidths[index] - 25
                }`}
              ></SkillBackground>
            </div>
          </Col>
        ))}
      </Row>
      {/* ============ */}
      {/* ALL SCREENS */}
      {/* note */}
      <div className=" pt-5 mt-2">
        <small className="fst-italic">
          <strong>Note:</strong> This diagram is only a guideline. Knowledge of
          all of these technologies and tools are updating daily with
          experience.
        </small>
      </div>

      {/* horizontal line */}
      <Row className="pt-5">
        <div className="col-12 col-md-12 col-lg-10 hr-wrapper">
          <hr className="border-2 opacity-100" />
        </div>
      </Row>
    </Container>
  );
};

export default Skills;
