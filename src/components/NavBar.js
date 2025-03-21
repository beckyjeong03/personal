import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../asset/beckylogo.png';
import navIcon1 from '../asset/nav-icon1.png';
import navIcon2 from '../asset/nav-icon2.png';
import navIcon3 from '../asset/nav-icon3.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);
  const [copied, setCopied] = useState("Let's Connect");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('project')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/becky_jeong_/" target="_blank">
                <img src={navIcon1} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/becky.jeong.7" target="_blank">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/becky-jeong/" target="_blank">
                <img src={navIcon3} alt="Linkedin" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                navigator.clipboard.writeText('bjeong@uwaterloo.ca');
                setCopied('Email Copied!');
              }}
            >
              <span>{copied}</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
