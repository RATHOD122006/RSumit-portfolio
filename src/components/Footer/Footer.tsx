import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={6} md={6} className="mb-4 mb-md-0">
            <div className="footer-content">
              <h5 className="footer-brand mb-3">Sumit Rathod</h5>
              <p className="footer-description">
                Passionate Full Stack Web Developer creating modern, scalable, and user-friendly 
                web solutions. Always learning, always growing.
              </p>
              <div className="copyright">
                <p className="mb-0">
                  © 2025 Made with ♥ by Sumit
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={3} md={3} className="mb-4 mb-md-0">
            <div className="footer-links">
              <h6 className="footer-title mb-3">Quick Links</h6>
              <ul className="links-list">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={3}>
            <div className="footer-contact">
              <h6 className="footer-title mb-3">Let's Connect</h6>
              <p className="contact-text mb-3">
                Ready to start your next project? Let's create something amazing together!
              </p>
              <a href="#contact" className="btn-outline-custom btn-sm">
                Get In Touch
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="footer-bottom-text mb-0">
              Built with React.js, Bootstrap, and aos library.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <button 
              className="scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;