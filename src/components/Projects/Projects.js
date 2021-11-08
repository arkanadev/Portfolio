import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import fagamart from "../../Assets/Projects/fagamart.png";
import arkanadev from "../../Assets/Projects/arkanadev.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Project </strong>Saya
        </h1>
        <p style={{ color: "white" }}>
          Beberapa project yang saya kerjaan
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arkanadev}
              isBlog={false}
              title="E-learning ArkanaDev"
              description=""
              link="https://e-learning.arkanadev.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fagamart}
              isBlog={false}
              title="Fagamart"
              description=""
              link="https://fagamart.id"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
