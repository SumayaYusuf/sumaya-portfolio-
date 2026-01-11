import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

/* 🎥 Video import */
import heroVideo from "../../Assets/f27893167c594a2c9b4990d623ba2d04.webm";



import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content" style={{ overflow: "visible" }}>
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col md={6} className="home-header">
              {/* Typewriter text */}
              <div
                style={{
                  paddingTop: 20,
                  textAlign: "left",
                }}
              >
                <Type />

                {/* 🤖 Image directly BELOW Type */}
                
           
              </div>
            </Col>

            {/* RIGHT SIDE – VIDEO */}
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
              style={{ paddingBottom: 20 }}
            >
              <video
                src={heroVideo}
                className="img-fluid"
                style={{width: "100%",
    maxHeight: "1200px",
    borderRadius: "12px",
    objectFit: "contain" }}
                autoPlay
                loop
                muted
                playsInline
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* SECOND SECTION */}
      <Home2 />

      {/* SOCIAL LINKS */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SumayaYusuf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumaya-yusuf12/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
