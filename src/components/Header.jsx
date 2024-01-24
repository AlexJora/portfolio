import { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Icon } from "@iconify/react";
import logo from "../assets/pages-img/logo.svg";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Container fluid>
      <Row className="d-flex justify-content-between">
        <Col>
          {/*logo image */}
          <Image
            src={logo}
            alt="Logo"
            className="pt-3 ps-sm-2 ps-md-2 ps-lg-5"
          />
        </Col>

        {/* Light/Dark mode buttons */}
        <Col className="d-flex justify-content-end pt-3">
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
