import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import image1 from '../../src/assets/Yellow and White Modern Car Rental Instagram Post.png'
import image2 from '../assets/rose and jack.webp'
const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack car rental sstem has  complet booking and payment access   and also has efficient searcing and filtering',
      image: image1,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'chapa','jwt'],
      github: 'https://github.com/mareligncode/car-Rental-system-web-application',
      live: 'https://car-rental-system-web-application-2.onrender.com/',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'this is netflix clone realtime movie streaming app witin third part movie fecing api',
      image: image2,
      technologies: ['React', 'nodejs ', 'express', 'mongodb', 'moviestore database'],
      github: '',
      live: 'https://netstream-movies.vercel.app/main/browse',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'AI-powered content generation platform with GPT integration, template system, and content analytics.',
      image: 'https://via.placeholder.com/400x250/e74c3c/ffffff',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'OpenAI', 'D3.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'ai'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="section-padding">
      <Container>
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Filter Buttons */}
        <div className="text-center mb-5">
          <ButtonGroup>
            <Button 
              variant={filter === 'all' ? 'primary' : 'outline-primary'}
              onClick={() => setFilter('all')}
            >
               All Projects
            </Button>
            <Button 
              variant={filter === 'fullstack' ? 'primary' : 'outline-primary'}
              onClick={() => setFilter('fullstack')}
            >
              Full Stack
            </Button>
            <Button 
              variant={filter === 'ai' ? 'primary' : 'outline-primary'}
              onClick={() => setFilter('ai')}
            >
              AI & ML
            </Button>
          </ButtonGroup>
        </div>

        <Row>
          {filteredProjects.map(project => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <Card className="project-card-modern h-100">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="text-center">
                      <Button 
                        variant="light" 
                        className="me-2 mb-2"
                        href={project.github}
                        target="_blank"
                      >
                        <FaGithub className="me-1" />
                        Code
                      </Button>
                      <Button 
                        variant="light"
                        href={project.live}
                        target="_blank"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 fw-bold">{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1 text-muted">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        bg="primary" 
                        className="me-2 mb-2 px-3 py-2"
                        style={{fontSize: '0.8rem'}}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;