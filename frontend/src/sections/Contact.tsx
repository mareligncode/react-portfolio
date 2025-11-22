import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import api from '../../src/api/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      const response = await api.post('/user/message', formData);

      if (response.status === 201) {
        setSuccess(true);

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'An unexpected error occurred.';
      setError(errorMessage);
    }
  };

  return (
    <section className="section-padding">
      <Container>
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <Row>
          <Col lg={8} className="mx-auto">

            {/* Success Message */}
            {success && (
              <Alert variant="success" className="text-center">
                Thank you! Your message has been successfully submitted.
              </Alert>
            )}

            {/* Error Message */}
            {error && (
              <Alert variant="danger" className="text-center">
                {error}
              </Alert>
            )}

            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Enter subject"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter your message"
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button type="submit" size="lg" className="btn-primary-custom">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Info Section */}
        <Row className="mt-5">
          <Col md={3} className="text-center mb-4">
            <div className="contact-info">
              <FaEnvelope className="contact-icon" />
              <h5>Email</h5>
              <p>yimermarelign@gmail.com</p>
            </div>
          </Col>

          <Col md={3} className="text-center mb-4">
            <div className="contact-info">
              <FaPhone className="contact-icon" />
              <h5>Phone</h5>
              <p>+251 945342453</p>
            </div>
          </Col>

          <Col md={3} className="text-center mb-4">
            <div className="contact-info">
              <FaMapMarkerAlt className="contact-icon" />
              <h5>Location</h5>
              <p>bahirdar, Country</p>
            </div>
          </Col>

          <Col md={3} className="text-center mb-4">
            <div className="contact-info">
              <div className="contact-icon">
                <FaGithub className="me-2" />
                <FaLinkedin />
              </div>
              <h5>Social</h5>
              <p>Connect with me</p>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Contact;
