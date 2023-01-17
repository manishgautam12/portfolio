import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sortVisu from "../../Assets/Projects/sortVisu.png";
import netflix from "../../Assets/Projects/netflix.png";
import memoriesApp from "../../Assets/Projects/memoriesApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="This is a clone of Netflix which have been made using HTML, CSS , React js, Bootstrap, where you watch the trailers of latest upcoming shows and movies."
              ghLink="https://github.com/manishgautam12/netflix-clone/tree/main/frontend"
              demoLink="https://netflix-clone-iota-gules.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memoriesApp}
              isBlog={false}
              title="memoriesApp"
              description="it's a memories app like instagram..you are deployed your post on this app and like and comment and delete post functionality is also availble."
              ghLink="https://github.com/manishgautam12/memoriesApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sortVisu}
              isBlog={false}
              title="Sorting Visualiser"
              description="A sorting algorithm is an algorithm that puts the elements of a list in a certain order"
              ghLink="https://github.com/manishgautam12/sortingVisualizer"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
