import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../../Assets/Untitled (2).png";

import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ marginTop: '100px' }}>
      <Container>
        <Row className="align-items-start">
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textShadow: "0 0 15px rgba(138, 43, 226, 0.8)", fontFamily: "'Cinzel', serif" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body" style={{ textShadow: "0 0 15px rgba(255, 105, 180, 0.7), 0 0 10px rgba(138, 43, 226, 0.6)" }}>
              Hi, I'm Sumaya, a Seattle-based technical data professional with a background in applied computing and data science. I'm interested in using data to support real-world decision-making, especially in contexts where clarity, accuracy, and usability matter.
              <br />
              <br />
              I'm a Technical Data Analyst who turns complex, messy data into clear, actionable insights through analysis and visualization. My work spans research, industry, and AI-assisted systems, where I build analytical workflows, dashboards, and visual tools, and contribute to structured data pipelines and evaluation logic. I focus on improving data quality and usability so insights are easy to interpret and act on.
            </p>
          </Col>

          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={homeImg} className="img-fluid" alt="avatar" style={{ width: '320px', height: 'auto' }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
