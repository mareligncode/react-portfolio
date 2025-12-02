import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown,FaFacebook,FaTelegram } from 'react-icons/fa';
import image1 from '../../src/assets/maru.png'

const Home = ({ scrollToSection }) => {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    { name: "MAREIGN YIMER", title: "FULL-STACK web DEVELOPER" },
    { name: "MAREIGN YIMER", title: "mobile app developer" },
    { name: "MAREIGN YIMER", title: "problom solver" },
     


  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const fullName = currentText.name;
    const fullTitle = currentText.title;

    const typeText = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < fullName.length) {
          setDisplayedName(fullName.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else if (currentIndex < fullName.length + fullTitle.length + 1) {
          const titleIndex = currentIndex - fullName.length;
          if (titleIndex === 0) {
            setDisplayedTitle('');
          }
          setDisplayedTitle(fullTitle.substring(0, titleIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        if (currentIndex > fullName.length) {
          const titleIndex = currentIndex - fullName.length - 1;
          setDisplayedTitle(fullTitle.substring(0, titleIndex));
          setCurrentIndex(prev => prev - 1);
        } else if (currentIndex > 0) {
          setDisplayedName(fullName.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const typingTimer = setTimeout(typeText, isDeleting ? 50 : 100);

    return () => {
      clearTimeout(typingTimer);
      clearInterval(cursorBlink);
    };
  }, [currentIndex, isDeleting, currentTextIndex]);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const container = document.querySelector('.particles-container');
      if (!container) return;

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          width: ${Math.random() * 6 + 2}px;
          height: ${Math.random() * 6 + 2}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 5}s;
          opacity: ${Math.random() * 0.5 + 0.2};
        `;
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <section className="hero-section">
      <div className="particles-container"></div>
      <Container>
        <Row className="align-items-center hero-content min-vh-100">
          <Col lg={6}>
           
            
            {/* Dynamic Typing Animation */}
            <div className="typing-container">
              <h1 className="hero-title p-5 mt-5 pt-5">
                Hi, I'm <br />
                <span className="dynamic-text">
                  {displayedName}
                  <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                </span>
              </h1>
              
              <h2 className="hero-subtitle typing-subtitle">
                {displayedTitle}
                {displayedName === texts[currentTextIndex].name && (
                  <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                )}
              </h2>
            </div>

            <p className="hero-description">
              I transform complex problems into elegant, scalable solutions. 
              With expertise in modern web technologies, I create digital experiences 
              that users love and businesses need.
            </p>
             <div className="hero-badge">
               Available for Freelance Work
            </div>
            
            <div className="d-flex gap-3 flex-wrap">
              <Button 
                size="lg" 
                className="btn-primary-custom"
                onClick={() => scrollToSection('projects')}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                className="btn-outline-glow"
                onClick={() => scrollToSection('contact')}
              >
                order project
              </Button>
            </div>
            
            <div className="mt-4 social-links-enhanced">
              <a href="https://github.com/mareligncode" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100070214702976&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://t.me/marelignY" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="profile-container">
              <div className="profile-glow"></div>
              <img 
                src={image1}
                alt="Mareign Yimer - Full Stack Developer" 
                className="profile-image"
              />
            </div>
          </Col>
        </Row>
        
        {/* Scroll indicator */}
       
      </Container>
    </section>
  );
};

export default Home;