import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/blog3.jpeg";
import chatify from "../../Assets/Projects/rodan.jpeg";
import suicide from "../../Assets/Projects/blog4.jpeg";


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
              imgPath={chatify}
              isBlog={false}
              title="“DERMSTORE”."
              description="Replicated Dermstore.com using HTML/CSS and Javascript tried our level best to make it
              a bit more interactive using DOM manipulations."
              ghLink="https://github.com/GautamViki/DermStore"
              demoLink="https://gautamviki.github.io/DermStore/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="“Pluralsight.com”."
              description="Replicated clone of Pluralsight.com with the help of React.js, Redux, Chakra-UI, Routing DOM and tried 
              our best to make it a bit more interactive "
              ghLink="https://github.com/Ashwiniprakash007/enromous-grip-329"
              demoLink="http://melodic-starburst-0c2217.netlify.app/"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="“Bewakoof.com”."
              description="Replicated Bewakoof.com, using HTML/CSS and Javascript tried my level best to make it
              a bit more interactive using DOM manipulations"
              ghLink="https://github.com/Ashwiniprakash007/Bewakoof.com"
              demoLink=" https://fluffy-horse-e42b4e.netlify.app"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
