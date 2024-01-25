import { useState } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

// Data
import { projectsData } from "../../data.jsx";
import styled from "styled-components";

const CodeButton = styled(Button)`
  &&&.btn {
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

const DemoButton = styled(Button)`
  &.btn {
  color: #000;
  background-color: var(--button-green);
  border-color: var(--button-orange);
  padding: 10px 15px;

  &:hover {
    background-color: var(--button-orange);
    border-color: var(--button-green);
  }
`;
const PrevNextButton = styled(Button)`
  &.btn {
  color: #000;
  background-color: var(--button-green);
  border-color: var(--button-orange);
  padding: 10px 15px;
  &:hover {
    background-color: var(--button-orange);
    border-color: var(--button-green);
  }
`;
const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const ProjectSubtitle = styled.h6`
  font-size: 1.1rem;
`;
const TextSection = styled.div`
  font-size: 1.6rem;
  margin-top: -10px;
  @media (max-width: 992px) {
    margin-top: 1.5rem;
  }
`;
const ProjectImage = styled.img`
  border: 2px solid white;
  width: 100%;
`;
const Projects = () => {
  const projectsPerPage = 1; // Number of projects to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <Container id="projects" className="pt-4 ps-lg-5">
        <h6 className="display-6 pb-3">Have a look at my PROJECTS</h6>
        {currentProjects.map((project, index) => (
          <div key={index}>
            <Row className="project-container pt-5">
              {/* Image on the left */}
              <Col lg={5} md={8} sm={12} className="mb-3 mx-auto">
                <div className="image-container">
                  <ProjectImage
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded h-100"
                    fluid
                  />
                </div>
              </Col>

              {/* Text on the right */}
              <Col
                lg={7}
                md={8}
                sm={12}
                className="text-container mx-auto ps-lg-4"
              >
                <TextSection className="  pb-1">{project.title}</TextSection>
                <ProjectSubtitle className="fw-bold pb-3">
                  {project.subtitle}
                </ProjectSubtitle>
                <ProjectDescription className="pb-3">
                  {project.description}
                </ProjectDescription>
                <ul className="d-flex justify-content-between list-unstyled mb-4 border rounded p-3">
                  {project.tools.map((tool, index) => (
                    <li key={index} className="d-inline">
                      {tool}
                    </li>
                  ))}
                </ul>
                <Col>
                  <CodeButton
                    href={project.codeUrl}
                    target="_blank"
                    className="me-3 btn"
                    size="lg"
                  >
                    View Code
                  </CodeButton>
                  <DemoButton
                    href={project.viewUrl}
                    target="_blank"
                    className="btn"
                    size="lg"
                  >
                    View Demo
                  </DemoButton>
                </Col>
              </Col>
            </Row>
            <Row className="mb-2"></Row>
          </div>
        ))}
        {currentProjects.length === 0 && <p>No projects available.</p>}
        <Row className="pt-5">
          <Col xs={12} lg={8} className="offset-lg-1">
            <Col className="text-center">
              <PrevNextButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="me-2 btn"
              >
                PREVIOUS Project
              </PrevNextButton>
              <PrevNextButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn"
              >
                NEXT Project
              </PrevNextButton>
            </Col>
          </Col>
        </Row>
        <Row className="pt-5">
          <div className="col-12 col-md-12 col-lg-10 hr-wrapper">
            <hr className="border-2 opacity-100" />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
