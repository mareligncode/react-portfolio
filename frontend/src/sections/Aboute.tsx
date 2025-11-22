import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import image1 from '../assets/maru.png'
import image2 from '../assets/s.jpg'

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Technologies' }
  ];

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title text-center">About Me</h2>
        
        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <img 
              src={image2}
              alt="About" 
              className="img-fluid rounded-3"
            />
          </Col>
          <Col lg={6}>
            <h3 className="mb-4">Passionate Full-Stack Developer</h3>
            <p className="mb-4">
              I'm a dedicated full-stack developer with expertise in modern web technologies. 
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
              and aslo i have strong expriance  in api integration,frontend and backend api,third party api.<p>
              version control with git and gitub and aslo have expriance in tools like postman api testing and other as needed.</p>
            </p>
            <p className="mb-4">
              With a strong foundation in both front-end and back-end development, 
              I bring ideas to life through clean code and innovative solutions.
            </p>
            
            <Row className="text-center mt-4">
              {stats.map((stat, index) => (
                <Col key={index} sm={6} className="mb-3">
                  <Card className="border-0 bg-white shadow-sm">
                    <Card.Body>
                      <h4 className="text-primary">{stat.number}</h4>
                      <p className="mb-0">{stat.label}</p>
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