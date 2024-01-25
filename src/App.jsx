import GlobalStyles from "./components/GlobalStyles";

import { Container, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "./Theme";
import Footer from "./components/Footer";
import Header from "../src/components/Header";
import NavBar from "../src/components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyles />
      <Container fluid className={`App ${theme}`}>
        <Row>
          <Header />
          <Col lg={2} md={12}>
            <NavBar fixed={true} />
          </Col>
          <Col
            lg={{ span: 10, offset: 3 }}
            md={{ span: 12 }}
            className="pt-5 mx-auto"
          >
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
