import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.95v-7.03H8.9V12h2.6V9.8c0-2.58 1.54-4 3.89-4 1.13 0 2.31.2 2.31.2v2.53h-1.3c-1.28 0-1.68.79-1.68 1.6V12h2.87l-.46 2.92h-2.41v7.03A10 10 0 0 0 22 12Z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
    <path fill="currentColor" d="M22 5.92c-.7.31-1.46.52-2.26.62a4.01 4.01 0 0 0-6.83 3.65 11.37 11.37 0 0 1-8.25-4.19 4.01 4.01 0 0 0 1.24 5.35 4 4 0 0 1-1.81-.5v.05a4.01 4.01 0 0 0 3.22 3.93c-.48.13-0.98.16-1.49.06a4.01 4.01 0 0 0 3.74 2.78A8.04 8.04 0 0 1 2 18.58a11.36 11.36 0 0 0 6.16 1.8c7.39 0 11.44-6.12 11.44-11.41l-.01-.52A8.15 8.15 0 0 0 22 5.92Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7m5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m5.5-3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
    <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h4v2.2c.56-.85 1.95-2.2 4.5-2.2C22.5 8 24 9.9 24 13.4V24h-4v-8.7c0-2.1-.7-3.9-3-3.9-2.3 0-3.2 1.7-3.2 3.9V24h-4V8z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="hero">
      <div className="footer-container">
        <section className="footer-brand" aria-label="Footer Brand">
          <h2>Your Digital Partner</h2>
          <p>We help brands grow with creative strategies and technology.</p>
        </section>

        <nav aria-label="Footer Navigation" className="footer-nav">
          <ul className="footer-links">
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/aboutus'>About</Link></li>
            {/* <li><Link href="#career">Career</Link></li> */}
            <li><Link to="/Allservice">Services</Link></li>
            <li><Link to="/Allclients">Client</Link></li>
          </ul>
        </nav>

        <div className="footer-social" aria-label="Social media links">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/cmdigitalventure/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/cm-digital-venture/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
        </div> 
        
      </div>

    
    </footer>
  );
};

export default Footer;