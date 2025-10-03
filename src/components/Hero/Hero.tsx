import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="min-vh-100 align-items-center">
          <Col lg={12} className="text-center">
            <div className="hero-content" data-aos="fade-up">
              <div className="hero-greeting" data-aos="fade-up" data-aos-delay="100">
                <span>Hello, I'm</span>
              </div>
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
               Sumit Rathod
              </h1>
              <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
                <span className="gradient-text">Full Stack / MERN Stack Web Developer</span>
              </h2>
              <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
                Building modern, scalable, and user-friendly web solutions.
              </p>

              <div
                className="hero-buttons d-flex justify-content-center flex-column flex-md-row align-items-center gap-2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a
                  href="/Sumit Rathod.pdf"
                  download
                  className="btn-primary-custom d-inline-flex align-items-center justify-content-center"
                >
                  <FaDownload className="me-2" />
                  Resume
                </a>
                <a
                  href="#contact"
                  className="btn-outline-custom d-inline-flex align-items-center justify-content-center"
                >
                  <FaEnvelope className="me-2" />
                  Contact Me
                </a>
              </div>


              <div className="social-links" data-aos="fade-up" data-aos-delay="600">
                <a href="https://github.com/RATHOD122006" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sumit-rathod-7059532b4/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;