import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sumaya Yusuf</span>{" "}
            from <span className="purple">Seattle, Washington</span>.
            <br />
            <br />
            I'm a <span className="purple">data analyst</span> with a background
            in <span className="purple">Applied Computing</span> and a minor in{" "}
            <span className="purple">Data Science</span>. I’m especially
            interested in using data to support{" "}
            <span className="purple">equity-focused</span> and real-world
            decision-making.
            <br />
            <br />
            My work sits at the intersection of{" "}
            <span className="purple">data analysis</span>,{" "}
            <span className="purple">visualization</span>, and{" "}
            <span className="purple">applied research</span>. I have experience
            using <span className="purple">Python</span>,{" "}
            <span className="purple">R</span>,{" "}
            <span className="purple">SQL</span>, and{" "}
            <span className="purple">GIS tools</span> to clean, analyze, and
            communicate complex datasets clearly and effectively.
            <br />
            <br />
            Outside of work, I enjoy activities that help me stay balanced and
            inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing badminton 🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies and building projects 💻
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "I enjoy building data-driven solutions that are thoughtful, useful,
            and make a real impact."
          </p>

          <footer className="blockquote-footer" style={{ textAlign: "center" }}>Sumaya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
