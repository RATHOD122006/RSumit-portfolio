import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaUsers, FaMicrophone, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="about-image" data-aos="fade-right">
              <img
                src='/assets/Sumit Rathod.jpg'
                alt="Sumit Rathod"
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content" data-aos="fade-left">
              <h2 className="section-title mb-4">
                About Me
              </h2>
              <p className="about-text">
                I'm a passionate Full Stack Web Developer with strong skills in creating responsive,
                dynamic, and user-friendly websites. I enjoy solving problems, learning new technologies,
                and delivering projects with precision and creativity.
              </p>
              <p className="about-text">
                Alongside coding, I love music and exploring new technologies and startups.
                My goal is to create innovative IT solutions and one day build my own tech company.
              </p>

              <div className="about-highlights">
                <Row>
                  <Col md={6} className="mb-3">
                    <div className="highlight-item clean-card p-3 text-center d-flex flex-column align-items-center">
                      <FaCode className="highlight-icon mb-2" />
                      <h6>Problem Solving</h6>
                      <p>Creative solutions for complex challenges</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="highlight-item clean-card p-3 text-center d-flex flex-column align-items-center">
                      <FaUsers className="highlight-icon mb-2" />
                      <h6>Team Collaboration</h6>
                      <p>Effective communication and teamwork</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="highlight-item clean-card p-3 text-center d-flex flex-column align-items-center">
                      <FaMicrophone className="highlight-icon mb-2" />
                      <h6>Public Speaking</h6>
                      <p>Confident presentation and communication</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="highlight-item clean-card p-3 text-center d-flex flex-column align-items-center">
                      <FaLightbulb className="highlight-icon mb-2" />
                      <h6>Innovation</h6>
                      <p>Always exploring new technologies</p>
                    </div>
                  </Col>
                </Row>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;