import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaAws,
  FaGitAlt,
  FaGithub
  

} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90, icon: <SiJavascript /> },
    { name: 'React', level: 90, icon: <FaReact /> },
    { name: 'Node.js', level: 90, icon: <FaNodeJs /> },
    { name: 'MongoDB', level: 90, icon: <SiMongodb /> },
        { name: 'express', level: 90},


  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'tailwind css', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Bootstrap'],
      icon: <FaReact />
    },
    {
      title: 'Backend',
      skills: ['Node.js', '', 'Express',  'REST APIs'],
      icon: <FaNodeJs />
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL'],
      icon: <FaDatabase />
    },
     {
      title: 'tools',
      skills: ['postman', 'github','vscode'],
      icon: <FaGithub />
    }
  ];

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title text-center">Skills & Technologies</h2>
        
        <Row className="mb-5">
          <Col lg={6}>
            <h4 className="mb-4">Technical Proficiency</h4>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="d-flex align-items-center">
                    <span className="me-2 text-primary">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar 
                  now={skill.level} 
                  variant="primary"
                  style={{ height: '8px' }}
                />
              </div>
            ))}
          </Col>
          
          <Col lg={6}>
            <h4 className="mb-4">Skill Categories</h4>
            <Row>
              {skillCategories.map((category, index) => (
                <Col key={index} md={6} className="mb-4">
                  <Card className="skill-item h-100">
                    <Card.Body className="text-center">
                      <div className="skill-icon">
                        {category.icon}
                      </div>
                      <h5>{category.title}</h5>
                      <ul className="list-unstyled">
                        {category.skills.map((skill, idx) => (
                          <li key={idx} className="mb-1">{skill}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;