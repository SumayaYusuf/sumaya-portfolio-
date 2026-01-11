import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (5) (1).png";
import editor from "../../Assets/Projects/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (4) (1).png";
import chatify from "../../Assets/Projects/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (3) (1).png";
import suicide from "../../Assets/Projects/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (6) (1).png";
import bitsOfCode from "../../Assets/Projects/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (2).png";

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
              title="Dashboard Intel : Anaylze Malicous IP Address"
              description="Designed a dashboard to visualize, analyze, and report on malicious IP addresses using threat intelligence APIs. Built clear visualizations, addressed API usage limits, and outlined improvements for handling larger data volumes and generating custom CTI reports."
              demoLink="https://vimeo.com/1005844618"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Edmonds School District Data Visualization (Tableau)"
              description="I created an interactive Tableau visualization for the Edmonds School District that helps stakeholders explore trends and perceptions across schools. By cleaning and structuring the underlying data and designing linked visual elements with interactive filters, I turned complex datasets into intuitive insights that support data-informed decisions."
              demoLink="https://public.tableau.com/app/profile/sumaya.yusuf/viz/FinalDataPresentation_17337768933010/Story1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Content-Based Image Retrieval with Relevance Feedback"
              description="Developed a content-based image retrieval (CBIR) system that utilized intensity and color-code histograms with relevance feedback to refine search results iteratively. Implemented Gaussian normalization and user feedback mechanisms to adjust feature weights dynamically, enhancing retrieval accuracy."
              demoLink="https://drive.google.com/drive/u/1/folders/1uTt7K8ffd-0vWff6b9DWzd_dSZqjbx00"              
            />
          </Col>

          <h1 className="project-heading" style={{ paddingTop: "50px", textShadow: "0 0 15px rgba(255, 255, 255, 0.8)" }}>
            <strong className="purple">Research Experience</strong>
          </h1>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Wildfire Smoke and Childcare: How Do Licensed Providers Adapt?"
              description="Analyzed 2023 survey data from childcare providers in historically marginalized neighborhoods to understand how they detect, respond to, and mitigate children's exposure during wildfire smoke events. Used statistical tests (Chi-Square, Fisher's Exact, N-1 Z) to compare responses by facility type and HOLC zone. Findings highlight the need for improved air quality monitoring and multilingual information to protect children's health."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Evaluating ETF Fundamentals Using a Multi-Agent LLM System"
              description="Building an MCP server to orchestrate multi-agent LLM workflows using AgentBeats ADK in support of Vanguard ETF analysis. The system enables structured agent-to-agent reasoning and automated evaluation, with dedicated evaluation agents that generate and apply metrics to assess agent performance and decision quality."
              ghLink="https://github.com/SumayaYusuf/MPC-AgentBeat-Financial-Data-"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
