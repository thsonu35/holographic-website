import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add your styles here

const Header = () => (
  <header>
    <div className="logo">BitKrsp IT Solutions</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/activities">Activities</Link></li> {/* Added new link */}
      </ul>
    </nav>
  </header>
);

export default Header;
