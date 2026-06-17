import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Input handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validator
  const validateForm = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;

    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact Our Team</h1>
          <p>Get in touch for integration support, specialty coding, or billing questions.</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid-container">
          {/* Left Column: Form */}
          <div className="contact-form-pane">
            <div className="contact-form-card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below, and our specialist will respond within 24 hours.</p>

                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. John Doe"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john.doe@practice.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  {/* Phone field */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. (555) 123-4567"
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="message">How can we help your practice?</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your billing challenges, practice specialty, or system questions..."
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }}>
                    Send Message &rarr;
                  </button>
                </form>
              ) : (
                <div className="form-success-container">
                  <div className="success-icon-circle">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for contacting ClaimsBilling. Founder Sarah Adam or an account coordinator will reach out to you at the provided email within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="btn btn-outline-teal"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Info Cards & CTA */}
          <div className="contact-info-pane">
            <h2 className="info-section-title">Get in Touch Directly</h2>
            
            <div className="contact-info-cards">
              {/* Email Card */}
              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Email Contact</h4>
                  <a
                    href="mailto:info@claimsbilling.com"
                    style={{ display: 'block', marginBottom: '6px' }}
                  >
                    info@claimsbilling.com
                  </a>
                  <a
                    href="mailto:sarah.adam@claimsbilling.com"
                    style={{ display: 'block' }}
                  >
                    sarah.adam@claimsbilling.com
                  </a>
                </div>
              </div>

              {/* Calendar Card */}
              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Consultation Calendar</h4>
                  <a href="https://calendly.com/momina-umer247/30min" target="_blank" rel="noopener noreferrer">
                    Open Calendly Calendar &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Calendly Callout box */}
            <div className="contact-callout-box">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Need immediate answers?
              </h4>
              <p style={{ marginBottom: '1.25rem' }}>
                Skip the contact form entirely and lock in a 15-minute quick introduction call directly with our medical billing specialists.
              </p>
              <a
                href="https://calendly.com/momina-umer247/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
                style={{ fontSize: '0.9rem', padding: '0.6rem 1rem' }}
              >
                Schedule Consultation Now
              </a>
            </div>

            {/* HIPAA Compliance notice */}
            <div className="contact-callout-box" style={{ backgroundColor: 'rgba(46, 134, 193, 0.1)', color: 'var(--text-dark)', borderLeftColor: 'var(--medical-blue)' }}>
              <h4 style={{ color: 'var(--primary-navy)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                HIPAA Privacy Gateway
              </h4>
              <p style={{ color: 'var(--text-muted)' }}>
                Please do not submit full patient medical records or unencrypted Social Security numbers in this basic contact form. Once we establish contact, we will issue a secure, encrypted HIPAA-compliant file upload portal.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;