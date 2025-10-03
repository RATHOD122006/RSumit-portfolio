import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BSNavbar.Brand href="#home" className="brand-name">
          Sumit Rathod
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <FaHome className="nav-icon" /> Home
            </Nav.Link>
            <Nav.Link href="#about">
              <FaUser className="nav-icon" /> About
            </Nav.Link>
            <Nav.Link href="#skills">
              <FaCode className="nav-icon" /> Skills
            </Nav.Link>
            <Nav.Link href="#projects">
              <FaBriefcase className="nav-icon" /> Projects
            </Nav.Link>
            <Nav.Link href="#experience">
              <FaGraduationCap className="nav-icon" /> Experience
            </Nav.Link>
            <Nav.Link href="#contact">
              <FaEnvelope className="nav-icon" /> Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;