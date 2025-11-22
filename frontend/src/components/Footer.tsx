import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">
              &copy; {currentYear} Marelign Yimer. 
            </p>
          </Col>
          <Col md={6} className="text-md-end">
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;