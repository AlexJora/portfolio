import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { projectsData } from "../../data.jsx";
import styled from "styled-components";
import Loader from "../components/Loader.jsx";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";


// const PrevNextButton = styled(Button)`
//   &.btn {
//     color: #1A2E2C;
//     background-color: var(--button-green);
//     border: none;
//     border-radius: 6px;
//     padding: 10px 20px;
//     font-size: 0.9rem;
//     line-height: 1.5;

//     display: inline-flex;
//     align-items: center;
//     gap: 4px;

//     transition: background-color 0.2s ease, color 0.2s ease,
//       transform 0.15s ease;

//     &:hover {
//       background-color: var(--button-orange);
//       color: #1A2E2C;
//     }

//     &:active {
//       transform: scale(0.97);
//     }

//     &:focus-visible {
//       outline: 2px solid var(--button-orange);
//       outline-offset: 2px;
//       box-shadow: none;
//     }
//   }
// `;
const PrevNextButton = styled(Button)`
  &.btn {
    color: #fff;
    background-color: var(--button-green);
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 1rem;
    line-height: 1.5;

    display: inline-flex;
    align-items: center;
    gap: 4px;

    transition: background-color 0.2s ease, color 0.2s ease,
      transform 0.15s ease;

    &:hover {
      background-color: var(--button-orange);
      color: #1A2E2C;
    }

    &:active {
      transform: scale(0.97);
    }

    &:focus-visible {
      outline: 2px solid var(--button-orange);
      outline-offset: 2px;
      box-shadow: none;
    }
  }
`;

const CodeButton = styled(Button)`
  &&&.btn {
    color: #1A2E2C;
    background-color: var(--button-orange);
    border: none;
    border-radius: 6px;
    padding: 10px 24px;
    font-size: 1rem;
    line-height: 1.5;

    transition: background-color 0.2s ease, color 0.2s ease,
      transform 0.15s ease;

    &:hover {
      background-color: var(--button-green);
      color: #fff;
    }

    &:active {
      transform: scale(0.97);
    }

    &:focus-visible {
      outline: 2px solid var(--button-green);
      outline-offset: 2px;
      box-shadow: none;
    }
  }
`;

const DemoButton = styled(Button)`
  &&&.btn {
    color: #fff;
    background-color: var(--button-green);
    border: none;
    border-radius: 6px;
    padding: 10px 24px;
    font-size: 0.9rem;
    line-height: 1.5;

    transition: background-color 0.2s ease, color 0.2s ease,
      transform 0.15s ease;

    &:hover {
      background-color: var(--button-orange);
      color: #1A2E2C;
    }

    &:active {
      transform: scale(0.97);
    }

    &:focus-visible {
      outline: 2px solid var(--button-orange);
      outline-offset: 2px;
      box-shadow: none;
    }
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
  const [isLoading, setIsLoading] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
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
    setIsLoading(true);

    setTimeout(() => {
      setCurrentPage(newPage);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Container id="projects" fluid className="pt-4 ps-lg-5">
        <h6 className="title pb-3 text-sm-center text-lg-start ">
          Have a look at my PROJECTS
        </h6>
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
                    loading="lazy"
                  />
                  {isLoading && (
                    <div className="pt-3 text-center">
                      <Loader />
                    </div>
                  )}
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
                  {project.renderNote && (
                    <>
                      <br />
                      <small className="fst-italic">
                        <strong>Note:</strong> This website may experience a
                        brief delay as it is hosted on Render.
                      </small>
                    </>
                  )}
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
  <BsArrowLeftShort size={20} />
  PREVIOUS Project
</PrevNextButton>
<PrevNextButton
  onClick={() => handlePageChange(currentPage + 1)}
  disabled={currentPage === totalPages}
  className="btn"
>
  NEXT Project
  <BsArrowRightShort size={20} />
</PrevNextButton>
            </Col>
          </Col>
        </Row>
        <Row className="pt-5 mt-lg-4">
          <div className="col-12 col-md-12 col-lg-10 hr-wrapper">
            <hr className="border-1 opacity-10" style={{ color: '#1A2E2C' }} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
