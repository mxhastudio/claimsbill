import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Branding & Description */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Claims<span>Billing</span>
            </Link>
            <p style={{ marginTop: '0.5rem' }}>
              Maximizing practice revenue and simplifying healthcare administration. We deliver top-tier billing, coding, and credentialing services nationwide with certified experts.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about">About Us</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/audit">Free Billing Audit</Link>
              </li>
              <li className="footer-link-item">
                <a 
                  href="https://calendly.com/momina-umer247/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Schedule Consultation
                </a>
              </li>
              <li className="footer-link-item">
                <span style={{ fontSize: '0.9rem', color: 'var(--teal-accent)', fontWeight: 'bold', display: 'block', marginTop: '0.5rem' }}>
                  HIPAA Secure
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-info">

              {/* Primary Email */}
              <div className="footer-contact-item">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@claimsbilling.com">info@claimsbilling.com</a>
              </div>

              {/* Supporting Email */}
              <div className="footer-contact-item">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:sarah.adam@claimsbilling.com">sarah.adam@claimsbilling.com</a>
              </div>

              {/* HIPAA Badge */}
              <div className="footer-contact-item">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Fully HIPAA-Compliant Gateway</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} ClaimsBilling. All rights reserved.
          </div>
          <div className="footer-badge-row">
            <span className="footer-badge">HIPAA COMPLIANT</span>
            <span>Secure &amp; Professional</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;