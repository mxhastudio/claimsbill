import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoIcon from '../assets/claimsbilling-icon.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Left Side: Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logoIcon} alt="ClaimsBilling" className="navbar-logo-icon" />
          Claims<span>Billing</span>
        </Link>

        {/* Center: Desktop Links */}
        <nav className="navbar-links">
          <div className="navbar-item">
            <NavLink to="/" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </div>
          
          <div className="navbar-item">
            <NavLink to="/services" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
              Services
            </NavLink>
            <div className="navbar-dropdown">
              <Link to="/services" className="dropdown-action-btn">
                View All Services
              </Link>
            </div>
          </div>

          <div className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <div className="navbar-dropdown">
              <Link to="/about" className="dropdown-action-btn">
                Meet the Team
              </Link>
            </div>
          </div>

          <div className="navbar-item">
            <NavLink to="/contact" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
            <div className="navbar-dropdown">
              <Link to="/contact" className="dropdown-action-btn">
                Send a Message
              </Link>
            </div>
          </div>
        </nav>

        {/* Right Side: Desktop CTAs */}
        <div className="navbar-ctas">
          <Link to="/audit" className="btn btn-outline-teal">
            Free Audit
          </Link>
          <a
            href="https://calendly.com/momina-umer247/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Schedule Consultation
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button 
          className="navbar-hamburger" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links-list">
          <li className="mobile-nav-item">
            <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          
          <li className="mobile-nav-item">
            <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Services
            </NavLink>
            <Link to="/services" className="mobile-dropdown-btn">
              View All Services
            </Link>
          </li>

          <li className="mobile-nav-item">
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <Link to="/about" className="mobile-dropdown-btn">
              Meet the Team
            </Link>
          </li>

          <li className="mobile-nav-item">
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
            <Link to="/contact" className="mobile-dropdown-btn">
              Send a Message
            </Link>
          </li>
        </ul>

        {/* Mobile CTAs stacked */}
        <div className="mobile-ctas">
          <Link to="/audit" className="btn btn-outline-teal">
            Free Audit
          </Link>
          <a
            href="https://calendly.com/momina-umer247/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;