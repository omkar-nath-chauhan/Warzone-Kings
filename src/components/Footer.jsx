import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-text">Warzone Kings</span>
          <span className="logo-dot">.</span>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Warzone Kings. Born to Dominate.
        </p>
        <div className="footer-links">
          <a href="https://" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/omkar-nath-chauhan-31a6893a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:omrajput7042@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
