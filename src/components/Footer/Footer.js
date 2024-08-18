import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <div className="link-container">
            <span onClick={() => navigate('/')}>Home</span>
            <span onClick={() => navigate('/about')}>About</span>
            <span onClick={() => navigate('/services')}>Services</span>
            <span onClick={() => navigate('/career')}>Career</span>
            <span onClick={() => navigate('/contact')}>Contact Us</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RadiantKube. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span onClick={() => navigate('/terms')}>Terms and Conditions</span>
          <span onClick={() => navigate('/privacy')}>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
