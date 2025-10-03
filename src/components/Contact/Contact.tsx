import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone,FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'danger'>('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace with your EmailJS configuration
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      
      setAlertType('success');
      setAlertMessage('Message sent successfully! I\'ll get back to you soon.');
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setAlertType('danger');
      setAlertMessage('Failed to send message. Please try again later.');
      setShowAlert(true);
    }
    
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'sumitrathod8225@gmail.com',
      link: 'mailto:sumitrathod8225@gmail.com'
    },
    {
      icon: FaPhoneAlt,
      title: 'Phone',
      value: '+91 90547 44888',
      link: 'tel:+919054744888'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Amreli, Gujarat, India',
      link: 'https://maps.app.goo.gl/y47RSD6uDpMenziMA'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/RATHOD122006', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sumit-rathod-7059532b4/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Get In Touch
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Let's discuss your next project or just say hello!
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="contact-info" data-aos="fade-right">
              <h4 className="mb-4">Contact Information</h4>
              
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title} 
                  className="contact-item clean-card mb-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-details">
                    <h6>{info.title}</h6>
                    <a href={info.link} className="contact-link">{info.value}</a>
                  </div>
                </div>
              ))}

              <div className="social-section mt-5" data-aos="fade-up" data-aos-delay="400">
                <h5 className="mb-3">Connect With Me</h5>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-aos="zoom-in"
                      data-aos-delay={500 + index * 100}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-form clean-card" data-aos="fade-left">
              <h4 className="mb-4">Send Message</h4>
              
              {showAlert && (
                <Alert variant={alertType} className="custom-alert">
                  {alertMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>
                
                <Button type="submit" className="btn-primary-custom w-100">
                  <FaPaperPlane className="me-2" />
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;