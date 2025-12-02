import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <Container>
        <Row className="justify-content-center text-center">
          
          {/* Social Icons */}
          <Col xs={12} className="mb-3">
            <div className="footer-social-icons">
              <a href="mailto:yimermarelign@gmail.com" className="footer-icon">
                <FaEnvelope />
              </a>
              <a href="https://github.com/mareligncode" target="_blank" rel="noreferrer" className="footer-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-icon">
                <FaTwitter />
              </a>
            </div>
          </Col>

          {/* Footer Text */}
          <Col xs={12}>
            <p className="footer-text">
              © {currentYear} <span className="footer-name">Marelign Yimer</span>.  
              All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
