import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  const experiences = [
    {
      title: "Data Visualization Researcher",
      company: "University Of Washington Bothell",
      location: "Bothell, WA",
      period: "September 2024 - Present",
      description: [
        "Analyzed survey data from childcare and family homes to assess the impact of wildfire smoke, precautions taken, and response strategies, and created visualizations using Excel, Python, and R",
        "Provide childcare settings with practical risk management options. Influence policies to make adaptation measures affordable for vulnerable communities"
      ]
    },
    {
      title: "Gas Buying System Analyst Intern",
      company: "Costco Wholesale",
      location: "Issaquah, WA",
      period: "June 2025 - September 2025",
      description: [
        "Contributed to a data analysis project, reviewing and scripting workflows to identify process improvements and enhance operational efficiency",
        "Coordinated fuel deliveries across multiple sites using Fuel Quest TMS to ensure stations stayed supplied"
      ]
    },
    {
      title: "Threat Hunting Detection Intern",
      company: "T-Mobile",
      location: "Bellevue, WA",
      period: "June 2024 – September 2024",
      description: [
        "Developed Dashboard Intel using Python, React, Abuse IPDB, and APIs, incorporating visualizations such as pie charts, bar charts, radial charts, box plots, and a choropleth map",
        "Designed custom reports offering insights into abusive IPs, abuse categories, and risk levels across countries",
        "Conducted alert triage, escalation, and threat research using Flashpoint, Mandiant, and Recorded Future"
      ]
    },
    {
      title: "Lead Wetland Database Intern",
      company: "University Of Washington Bothell",
      location: "Bothell, WA",
      period: "June 2022 - June 2023",
      description: [
        "Helped create the Husky Cache, a digital repository showcasing UW Bothell student research and creative projects. This resource provided access to a vast library of past abstracts, research materials, and ongoing projects",
        "Empowered students to contribute their work, inspiring innovation and fostering a collaborative research community"
      ]
    },
    {
      title: "Curriculum Developer Intern",
      company: "Gen.G",
      location: "Seoul, South Korea",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Analyzed hundreds of eSport project management course syllabi, comparing findings against company course to assess market competitiveness",
        "Finalized an esport event planning course curriculum implemented in Saudi Arabia"
      ]
    },
    {
      title: "Study Abroad Advisor",
      company: "University Of Washington Bothell Office Of Connected Learning",
      location: "Bothell, WA",
      period: "September 2024 – June 2025",
      description: [
        "Advised students on study abroad programs and organized promotional events, workshops, and outreach with peers to foster global learning"
      ]
    },
    {
      title: "Peer Educator",
      company: "University Of Washington Bothell Diversity Center",
      location: "Bothell, WA",
      period: "September 2022- June 2024",
      description: [
        "Provided one-on-one mentorship to students, organized events to promote equity and leadership, and facilitated outreach initiatives to foster social justice and community engagement"
      ]
    }
  ];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.8)" }}>
            Professional <strong className="purple">Experience</strong>
          </h1>
          <p style={{ color: "white", marginBottom: "50px" }}>
            My journey through various roles and organizations
          </p>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <Row key={index} className="experience-item" style={{ marginBottom: "40px" }}>
                <Col md={12}>
                  <div style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "25px",
                    borderRadius: "10px",
                    border: "1px solid rgba(138, 43, 226, 0.5)",
                    boxShadow: "0 0 20px rgba(138, 43, 226, 0.6), 0 0 40px rgba(138, 43, 226, 0.3)",
                    transition: "all 0.3s ease"
                  }}>
                    <h3 style={{ 
                      color: "white", 
                      marginBottom: "10px",
                      textShadow: "0 0 10px rgba(199, 112, 240, 0.5)"
                    }}>
                      {exp.title}
                    </h3>
                    <h5 style={{ color: "#cd5ff8", marginBottom: "5px" }}>
                      {exp.company}
                    </h5>
                    <p style={{ 
                      color: "#a0a0a0", 
                      fontSize: "0.9em", 
                      marginBottom: "15px" 
                    }}>
                      {exp.location} | {exp.period}
                    </p>
                    <ul style={{ color: "white", lineHeight: "1.8" }}>
                      {exp.description.map((desc, i) => (
                        <li key={i} style={{ marginBottom: "8px" }}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
