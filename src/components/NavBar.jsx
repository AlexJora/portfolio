import styled, { css } from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

// const baseStyles = css`
//   color: #000000;
//   &&.active {
//     font-weight: 900;
//     border-bottom: 2px solid #000000;
//   }
// `;

const baseStyles = css`
  color: #000000;
  font-weight: normal; // Reset the font weight to normal
  &:hover {
    font-weight: 900;
  }
  &.active {
    font-weight: 900;
    border-bottom: 2px solid #000000;
  }
`;
const StyledNavLinks = styled(Link)`
  ${baseStyles}
  font-size: 1.1rem;
`;
const StyledCustomMobileNavLinks = styled(StyledNavLinks)`
  @media (max-width: 576px) {
    font-size: 0.8rem !important;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
`;
// const StyledIcon = styled(FontAwesomeIcon)`
//   font-size: 2x;
//   margin: 0 3px;
//   color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
// `;

const NavBar = ({ fixed }) => {
  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <Container>
      {/* LARGE SCREEN - LEFT NAVBAR*/}
      <Row>
        <Col
          lg={2}
          className={`left-navbar h-100 mt-5 d-none d-lg-block ${
            fixed ? "fixed-top" : ""
          }`}
        >
          <Navbar className="mt-5 flex-column pt-5">
            <Nav className="flex-column pe-2 pb-5">
              {navLinks.map((link) => (
                <StyledNavLinks
                  key={link.id}
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="nav-link mb-3 mx-auto"
                >
                  {link.label}
                </StyledNavLinks>
              ))}
            </Nav>
            <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
              <a href="mailto:jora.catalinaa@gmail.com" className="text-dark">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  size="2x"
                  className="mx-3"
                />
              </a>
              <a href="https://github.com/AlexJora" className="text-dark">
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  size="2x"
                  className="mx-3"
                />
              </a>
              <a href="www.linkedin.com/in/alexjora" className="text-dark">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-3" />
              </a>
            </div>
          </Navbar>
        </Col>
      </Row>

      {/* MEDIUM / SMALL SCREEN - TOP NAVBAR*/}
      <Row>
        <Col xs={12} className="d-lg-none">
          <Navbar className="top-navbar mt-2">
            <Nav className="mx-auto">
              {navLinks.map((link) => (
                <StyledCustomMobileNavLinks
                  key={link.id}
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="nav-link px-4 fw-medium pt-4 custom-sm-fs"
                >
                  {link.label}
                </StyledCustomMobileNavLinks>
              ))}
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
