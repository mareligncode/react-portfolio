import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image2 from '../assets/s.jpg';
import './About.css'; // <-- Add this CSS file

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Technologies' }
  ];

  return (
    <section className="about-section">
      <Container>

        {/* Title */}
        <h2 className="section-title">About Me</h2>

        <Row className="align-items-center">
          {/* Image */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image-wrapper">
              <img src={image2} alt="About" className="about-image" />
            </div>
          </Col>

          {/* Content */}
          <Col lg={6}>
            <h3 className="about-heading">Passionate Full-Stack Developer</h3>

            <p className="about-text">
              I am a dedicated full-stack developer with experience in building 
              modern, scalable and user-friendly applications. My expertise includes 
              frontend, backend, REST API development, and third-party API integration.
            </p>

            <p className="about-text">
              I have strong experience working with version control (Git, GitHub), API 
              testing tools like Postman, and best development practices to build clean 
              and maintainable applications.
            </p>

            {/* Stats Section */}
            <Row className="stats-row">
              {stats.map((stat, index) => (
                <Col key={index} xs={6} className="mb-3">
                  <Card className="stat-card">
                    <Card.Body>
                      <h4 className="stat-number">{stat.number}</h4>
                      <p className="stat-label">{stat.label}</p>
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

export default About;
