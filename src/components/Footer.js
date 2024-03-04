import React from "react";
import logo from "../pictures/littlelemon.png"
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
      <footer>
        <div className="footer-column">
          <img src={logo} alt="logo" className="footer-logo-image"/>
        </div>
        <div className="footer-column ">
            <ul className="footer-nav">
              <li className="footer-nav-title">Doormat Navigation</li>
              <li>
                <Link to="/" className="footer-nav-item">Home
                  </Link></li>
              <li><Link to="/about" className="footer-nav-item">About
                  </Link></li>
              <li><Link to="/menu" className="footer-nav-item">Menu
                  </Link></li>
              <li><Link to="/reservations" className="footer-nav-item">Reservation
                  </Link></li>
              <li><Link to="/order-online" className="footer-nav-item">Order Online
                  </Link></li>
              <li><Link to="/login" className="footer-nav-item">Login
                  </Link></li>
            </ul>
        </div>
        <div className="footer-column">
        <ul className="footer-nav">
              <li className="footer-nav-title">Contact</li>
              <li>
                littlelemon building
                  </li>
              <li>010-1234567
                  </li>
              <li>littlelemon@littlelemon.com
                  </li>
            </ul>
        </div>
        <div className="footer-column">
        <ul className="footer-nav">
              <li className="footer-nav-title">Social Media Links</li>
              <li>
                <a href="https://instagram.com" className="footer-nav-item">Instagram
                  </a></li>
              <li><a href="https://twitter.com" className="footer-nav-item">Twitter
                  </a></li>
              <li><a href="https://facebook.com" className="footer-nav-item">Facebook
                  </a></li>
            </ul>
        </div>
       </footer>
  );
};
export default Footer;