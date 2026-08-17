import { useContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "../Theme";

// const baseStyles = css`
//   color: #1A2E2C;
//   font-weight: normal;

//   &:hover {
//     font-weight: 600;
//   }
//   &.active {
//     font-weight: 600;
    
//   }
// `;

const baseStyles = css`
  color: #1A2E2C;
  font-weight: bold;

  &:hover {
    color: #3e625e;
  }
  &.active {
    
    color: #3e625e;
    --bs-navbar-active-color: #3e625e;
  }
`;
const StyledNavLinks = styled(Link)`
  ${baseStyles}
  font-size: 0.9rem;

  &.active {
    font-weight: 600;
    
  }
`;

const StyledCustomMobileNavLinks = styled(StyledNavLinks)`
  @media (max-width: 576px) {
    font-size: 0.8rem !important;
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
`;
const StyledIconLink = styled.a`
  color: ${(props) => (props.theme === "dark-theme" ? "white" : "#1A2E2C")};
  &:hover {
    color: ${(props) =>
      props.theme === "dark-theme" ? "lightgray" : "darkgray"};
  }
`;
const NavBar = ({ fixed }) => {
  const { theme } = useContext(ThemeContext);
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
            <Nav className="flex-column pe-2">
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
            <div className="d-flex justify-content-center align-items-center">
              <StyledIconLink
                href="mailto:jora.catalinaa@gmail.com"
                theme={theme}
              >
                <MdEmail size={20} className="mx-2" />
              </StyledIconLink>
              <StyledIconLink href="https://github.com/AlexJora" theme={theme}>
                <FaGithub size={20} className="mx-2" />
              </StyledIconLink>
              <StyledIconLink href="https://www.linkedin.com/in/alexjora/" theme={theme}>
                <FaLinkedinIn size={20} className="mx-2" />
              </StyledIconLink>
            </div>
          </Navbar>
        </Col>
      </Row>

      {/* MEDIUM / SMALL SCREEN - TOP NAVBAR*/}
      <Row>
        <Col md={12} className=" d-lg-none d-md-block ">
          <Navbar className="top-navbar mt-2 ">
            <Nav className="mx-auto  d-flex justify-content-center w-100">
              {navLinks.map((link) => (
                <StyledCustomMobileNavLinks
                  key={link.id}
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="nav-link px-4 pt-4"
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
NavBar.propTypes = {
  fixed: PropTypes.bool,
};

export default NavBar;
