
import { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Icon } from "@iconify/react";
import logo from "../assets/pages-img/logo.svg";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Container fluid>
      <Row className="d-flex justify-content-between align-items-center">
        <Col className="d-flex align-items-center">
          {/*logo image */}
          <div
            className="ms-sm-2 ms-md-2 ms-lg-5"
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: theme === "light-theme" ? "#1A2E2C" : "#FFFFFF",
              WebkitMask: `url(${logo}) no-repeat center / contain`,
              mask: `url(${logo}) no-repeat center / contain`,
            }}
          />
        </Col>

        {/* Light/Dark mode buttons */}
        <Col className="d-flex justify-content-end align-items-center">
          <Icon
            icon={
              theme === "light-theme"
                ? "tdesign:mode-light"
                : "material-symbols:dark-mode"
            }
            width="30"
            height="30"
            className="me-lg-5 me-md-2 me-sm-2"
            onClick={() => toggleTheme()}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
