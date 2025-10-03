import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [

    {
      id: 3,
      type: 'education',
      title: 'BCA (Bachelor of Computer Applications)',
      company: 'Swarnim University',
      location: 'Gandhinagar - Gujarat',
      period: '2025 - Present',
      description: 'Bachelor\'s degree in Computer Applications with focus on software development and computer science fundamentals.',
      achievements: [
        'Strong foundation in programming and software development',
        'Studied database management and system design',
        'Participated in various technical projects and competitions',
        'Graduated with good academic performance'
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'Full Stack Web Development Training',
      company: 'Red & White Skill Education',
      location: 'Amreli - Gujarat',
      period: '2024 - 2025',
      description: 'Comprehensive course covering modern web development technologies and best practices.',
      achievements: [
        'Learned MERN stack development',
        'Built multiple real-world projects',
        'Gained expertise in frontend and backend technologies',
        'Completed certification in Full Stack Web Development'
      ]
    }

  ];

  return (
    <section id="experience" className="section experience-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Education
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              My professional journey and academic background
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline">
              {experiences.map((item, index) => (
                <div
                  key={item.id}
                  className={`timeline-item ${item.type}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-marker">
                    {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                  <div className="timeline-content clean-card">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{item.title}</h4>
                      <h6 className="timeline-company">{item.company}</h6>
                      <div className="timeline-meta">
                        <span className="timeline-period">
                          <FaCalendar className="me-1" />
                          {item.period}
                        </span>
                        <span className="timeline-location">
                          <FaMapMarkerAlt className="me-1" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                    <ul className="timeline-achievements">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;