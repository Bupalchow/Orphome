import React from 'react';
import './Footer.css'; 
import 'font-awesome/css/font-awesome.min.css';
import logo from "../component/logo.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
            <img style={{width: '15%', height: '15%', borderRadius: "50%"}} src={logo}></img>
        </div>
        <div className="footer-links">
          <a >Home</a>
          <a >About</a>
          <a >Services</a>
          <a >Portfolio</a>
          <a >Contact</a>
        </div>
        <div className="footer-social">
          <a  className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a  className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a  className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a  className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
