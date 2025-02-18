import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} TECH-LAB97</p>
        <div className="social-links">
        <a href="mailto:danielndeto@222gmail.com" target="_blank" rel="noreferrer">Contact Us</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
