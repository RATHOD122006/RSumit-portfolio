// Skills.tsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const technicalSkills = [
    { name: 'HTML', level: 95, icon: '🌐', category: 'Frontend' },
    { name: 'CSS', level: 90, icon: '🎨', category: 'Frontend' },
    { name: 'JavaScript', level: 88, icon: '⚡', category: 'Frontend' },
    { name: 'React.js', level: 85, icon: '⚛️', category: 'Frontend' },
    { name: 'Bootstrap', level: 90, icon: '🅱️', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, icon: '💨', category: 'Frontend' },
    { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },
    { name: 'Express.js', level: 78, icon: '🚀', category: 'Backend' },
    { name: 'MongoDB', level: 82, icon: '🍃', category: 'Database' },
    { name: 'Git', level: 85, icon: '📦', category: 'Tools' },
  ];

  const softSkills = [
    'Problem-solving',
    'Communication',
    'Teamwork',
    'Public Speaking',
    'Leadership',
    'Time Management'
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter(skill => skill.category === activeCategory);

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="section skills-section">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Skills & Expertise
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Technologies and tools I work with to bring ideas to life
            </p>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row className="mb-5">
          <Col xs={12}>
            <div className="category-filter" data-aos="fade-up">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={9} xs={12} className="mb-5">
            <div className="skills-grid" data-aos="fade-right">
              {filteredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-card clean-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="skill-card-header">
                    <div className="skill-card-icon">{skill.icon}</div>
                  </div>
                  <div className="skill-card-body">
                    <h5 className="skill-card-title">{skill.name}</h5>
                    <span className="skill-badge">{skill.category}</span>
                  </div>
                  <div className="skill-card-footer">
                    <div className="proficiency-wrapper">
                      <span className="proficiency-label">{getProficiencyLabel(skill.level)}</span>
                      <div className="proficiency-dots">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`dot ${skill.level >= dot * 20 ? 'active' : ''}`}
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={3} xs={12}>
            <div className="soft-skills-wrapper" data-aos="fade-left">
              <div className="soft-skills-header mb-4">
                <h4>Soft Skills</h4>
                <div className="header-decoration"></div>
              </div>
              <div className="soft-skills-list">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className="soft-skill-badge clean-card"
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                  >
                    <span className="badge-dot"></span>
                    <span className="badge-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;