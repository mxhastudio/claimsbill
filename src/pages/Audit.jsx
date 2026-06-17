import React, { useState } from 'react';
import './Audit.css';

const Audit = () => {
  // Form state
  const [formData, setFormData] = useState({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    specialty: '',
    ehr: '',
    volume: '',
    challenge: ''
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

    if (!formData.practiceName.trim()) {
      tempErrors.practiceName = 'Practice name is required.';
    }

    if (!formData.contactName.trim()) {
      tempErrors.contactName = 'Contact name is required.';
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

    if (!formData.specialty.trim()) {
      tempErrors.specialty = 'Specialty is required.';
    }

    if (!formData.ehr.trim()) {
      tempErrors.ehr = 'EHR/Practice Management software is required.';
    }

    if (!formData.volume) {
      tempErrors.volume = 'Please select your monthly claim volume.';
    }

    if (!formData.challenge.trim()) {
      tempErrors.challenge = 'Please describe your current challenges.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form fields
      setFormData({
        practiceName: '',
        contactName: '',
        email: '',
        phone: '',
        specialty: '',
        ehr: '',
        volume: '',
        challenge: ''
      });
    }
  };

  return (
    <div className="audit-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Get Your Free Medical Billing Audit</h1>
          <p>Discover hidden revenue leaks in 48 hours — absolutely no cost or commitment.</p>
        </div>
      </section>

      <div className="container">
        <div className="audit-grid-container">
          {/* Left Column: Intake Questionnaire */}
          <div className="audit-form-pane">
            <div className="audit-form-card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <h2>Practice Questionnaire</h2>
                  <p>Provide your practice details below, and our certified auditors will begin your analysis.</p>

                  <div className="form-row-2">
                    {/* Practice Name */}
                    <div className="form-group">
                      <label htmlFor="practiceName">Practice Name</label>
                      <input
                        type="text"
                        id="practiceName"
                        name="practiceName"
                        className="form-control"
                        value={formData.practiceName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Pediatrics"
                      />
                      {errors.practiceName && <span className="form-error">{errors.practiceName}</span>}
                    </div>

                    {/* Contact Name */}
                    <div className="form-group">
                      <label htmlFor="contactName">Contact Name</label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        className="form-control"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="e.g. Jane Smith, Practice Mgr"
                      />
                      {errors.contactName && <span className="form-error">{errors.contactName}</span>}
                    </div>
                  </div>

                  <div className="form-row-2">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@practice.com"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>

                    {/* Phone */}
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
                  </div>

                  <div className="form-row-2">
                    {/* Specialty */}
                    <div className="form-group">
                      <label htmlFor="specialty">Practice Specialty</label>
                      <input
                        type="text"
                        id="specialty"
                        name="specialty"
                        className="form-control"
                        value={formData.specialty}
                        onChange={handleChange}
                        placeholder="e.g. Cardiology, Family Practice"
                      />
                      {errors.specialty && <span className="form-error">{errors.specialty}</span>}
                    </div>

                    {/* EHR / Software */}
                    <div className="form-group">
                      <label htmlFor="ehr">EHR / Software Used</label>
                      <input
                        type="text"
                        id="ehr"
                        name="ehr"
                        className="form-control"
                        value={formData.ehr}
                        onChange={handleChange}
                        placeholder="e.g. Athenahealth, Kareo"
                      />
                      {errors.ehr && <span className="form-error">{errors.ehr}</span>}
                    </div>
                  </div>

                  {/* Monthly Volume Dropdown */}
                  <div className="form-group">
                    <label htmlFor="volume">Monthly Claims Volume</label>
                    <select
                      id="volume"
                      name="volume"
                      className="form-control"
                      value={formData.volume}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Monthly Volume --</option>
                      <option value="Under 100">Under 100 claims / month</option>
                      <option value="100-500">100 - 500 claims / month</option>
                      <option value="500-1000">500 - 1000 claims / month</option>
                      <option value="Over 1000">Over 1000 claims / month</option>
                    </select>
                    {errors.volume && <span className="form-error">{errors.volume}</span>}
                  </div>

                  {/* Challenge Textarea */}
                  <div className="form-group">
                    <label htmlFor="challenge">Current Billing Challenges</label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      className="form-control"
                      value={formData.challenge}
                      onChange={handleChange}
                      placeholder="e.g. High denial rates, delayed payments, credentialing lags..."
                    />
                    {errors.challenge && <span className="form-error">{errors.challenge}</span>}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1rem' }}>
                    Submit Audit Request &rarr;
                  </button>
                </form>
              ) : (
                <div className="form-success-container" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div className="success-icon-circle">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Audit Request Submitted!</h3>
                  <p>
                    Thank you. We have received your practice details. Founder Sarah Adam will contact you directly within 24 hours to secure your billing portal access and begin the 48-hour audit turnaround.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="btn btn-outline-teal"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Value Props */}
          <div className="audit-value-pane">
            <h2>What's Included in Your Audit</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Our certified medical billers will analyze your claims data to identify administrative bugs costing you money.
            </p>

            <ul className="audit-benefit-list">
              {/* Point 1 */}
              <li className="audit-benefit-item">
                <div className="audit-benefit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div className="audit-benefit-text">
                  <h4>Claim Denial Analysis</h4>
                  <p>We break down your recent rejections to uncover codes, modifiers, or eligibility glitches driving denials.</p>
                </div>
              </li>

              {/* Point 2 */}
              <li className="audit-benefit-item">
                <div className="audit-benefit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div className="audit-benefit-text">
                  <h4>Revenue Leakage Report</h4>
                  <p>Discover exact dollar amounts lost to underpayments, timely filing delays, or unappealed claims.</p>
                </div>
              </li>

              {/* Point 3 */}
              <li className="audit-benefit-item">
                <div className="audit-benefit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="audit-benefit-text">
                  <h4>Free Strategy Review Call</h4>
                  <p>A 30-minute review with Sarah Adam explaining the findings and mapping actionable coding fixes.</p>
                </div>
              </li>
            </ul>

            {/* Security box */}
            <div className="audit-security-box">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                100% Secure &amp; Protected
              </h4>
              <p>
                ClaimsBilling operates in strict compliance with HIPAA. We sign Business Associate Agreements (BAAs) prior to accessing any electronic health record system or encounter documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
