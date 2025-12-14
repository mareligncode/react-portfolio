import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
  const experience = [
    {
      title: ' Full-Stack Developer',
      company: 'Amhara innovation and technology',
      period: '2025 jun-sept',
      description: 'develop full-feature full-stack car-rental sysyem'
    },
    {
      title: 'Full-Stack Developer',
      company: 'self employyed',
      period: '2022-present',
      description: 'Developed and maintained multiple client projects using modern web technologies.'
    }
   
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Bahir dar university',
            period: '2022 - 2026'
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      institution: 'udemy',
      period: '2024'
    }
  ];

  return (
    <section className="section-padding bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Resume</h2>
          <Button 
  variant="primary" 
  size="lg" 
  className="btn-primary-custom"
  onClick={() => window.open('/final marelign corrected cve.pdf', '_blank')}
>
  <FaDownload className="me-2" />
  Download Resume
</Button>
        </div>

        <Row>
          <Col lg={6} className="mb-5">
            <Card className="border-0 shadow h-100">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0 d-flex align-items-center">
                  <FaBriefcase className="me-2" />
                  Experience
                </h4>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {experience.map((exp, index) => (
                    <ListGroup.Item key={index} className="px-0">
                      <h5>{exp.title}</h5>
                      <h6 className="text-primary">{exp.company}</h6>
                      <p className="text-muted">{exp.period}</p>
                      <p>{exp.description}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-5">
            <Card className="border-0 shadow h-100">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0 d-flex align-items-center">
                  <FaGraduationCap className="me-2" />
                  Education
                </h4>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {education.map((edu, index) => (
                    <ListGroup.Item key={index} className="px-0">
                      <h5>{edu.degree}</h5>
                      <h6 className="text-primary">{edu.institution}</h6>
                      <p className="text-muted">{edu.period}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0">Technical Skills</h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <h6>Frontend</h6>
                    <ul>
                      <li>React.js</li>
                      <li>bootstrap</li>
                      <li>JavaScript/TypeScript</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                    <h6>Backend</h6>
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>REST APIs</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0">Professional Skills</h4>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <ul>
                      <li>Problem Solving</li>
                      <li>Team Leadership</li>
                      <li>Agile Methodology</li>
                      <li>Code Review</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                    <ul>
                      <li>Project Management</li>
                      <li>Technical Documentation</li>
                      <li>Mentoring</li>
                      <li>Client Communication</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;