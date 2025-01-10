import React from 'react';
import './footer.css'; // Import the footer styles
import thelogo from '../assets/images/thelogo.png'; // Import the logo image if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={thelogo} alt="logo" className="footer-logo" />
          <p>
            Amogham is committed to offering affordable, elegant, and curated products. 
            Your satisfaction is our top priority. Contact us for any queries or concerns.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="contact">
            <h1 className="Headcontact">Contact Us</h1>
          <h1>9849000866</h1>
          <h1>amogham@gmail.com</h1>
          <h1>9849000866</h1>
      </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} amogham. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
