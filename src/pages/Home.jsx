import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Home.css';

const Home = () => {
  const statsRef = useScrollAnimation();
  const split1Ref = useScrollAnimation();
  const split2Ref = useScrollAnimation();
  const split3Ref = useScrollAnimation();
  const split4Ref = useScrollAnimation();
  const whyUsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      q: "What specialties do you handle billing for?",
      a: "We work with a wide range of specialties including Family Practice, Internal Medicine, Cardiology, Mental Health, Chiropractic, and more."
    },
    {
      q: "How quickly do you submit claims?",
      a: "Claims are submitted within 24-48 hours of receiving documentation. We aim for first-pass clean claim rates above 98%."
    },
    {
      q: "Is my patient data safe with you?",
      a: "Absolutely. We are fully HIPAA-compliant with encrypted data handling, secure portals, and signed BAA agreements with all clients."
    },
    {
      q: "Do you handle denied claims?",
      a: "Yes — denial management is a core part of our service. We appeal, resubmit, and track every denied claim to maximize your recovery."
    },
    {
      q: "What EHR/practice management systems do you work with?",
      a: "We integrate with all major systems including Epic, Athenahealth, eClinicalWorks, Kareo, DrChrono, and more."
    },
    {
      q: "How do I get started?",
      a: "Simply request a Free Billing Audit — we'll review your current process and create a custom plan at no cost to you."
    }
  ];

  return (
    <div className="home-page">

      {/* --- HERO SECTION --- */}
      <section className="home-hero">
        <div className="container home-hero-container">
          <div className="hero-content">
            <h1>Maximize Your Practice Revenue with Expert Medical Billing</h1>
            <p>
              We handle your billing so you can focus on patient care. HIPAA-compliant, accurate, and results-driven revenue cycle management.
            </p>
            <div className="hero-btns">
              <Link to="/audit" className="btn btn-primary">
                Get Free Audit
              </Link>
              <a
                href="https://calendly.com/momina-umer247/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                Schedule Consultation
              </a>
            </div>
            <div className="hero-trust-badges">
              <div className="badge-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="badge-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>98% Clean Claim Rate</span>
              </div>
              <div className="badge-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="hero-graphic">
            <svg className="hero-graphic-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="220" stroke="rgba(var(--medical-blue-rgb), 0.15)" strokeWidth="2" />
              <circle cx="250" cy="250" r="170" stroke="rgba(var(--teal-accent-rgb), 0.15)" strokeWidth="2" />
              <circle cx="250" cy="250" r="120" stroke="rgba(var(--medical-blue-rgb), 0.2)" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M50 250H180L200 200L220 300L240 230L250 270L270 150L295 350L315 230L330 260L345 220L360 250H450"
                    stroke="url(#pulseGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="200" cy="200" r="8" fill="var(--teal-accent)" />
              <circle cx="220" cy="300" r="6" fill="var(--medical-blue)" />
              <circle cx="270" cy="150" r="10" fill="var(--teal-accent)" />
              <circle cx="295" cy="350" r="8" fill="var(--medical-blue)" />
              <circle cx="360" cy="250" r="6" fill="var(--teal-accent)" />
              <defs>
                <linearGradient id="pulseGrad" x1="50" y1="250" x2="450" y2="250" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="var(--medical-blue)" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="var(--teal-accent)" />
                  <stop offset="100%" stopColor="var(--medical-blue)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section ref={statsRef} className="stats-section scroll-animate">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Clean Claim Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$2M+</div>
              <div className="stat-label">Revenue Recovered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Dedicated Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">48hr</div>
              <div className="stat-label">Claim Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPLIT SECTIONS --- */}
      <div className="split-container">

        {/* SPLIT 1: Services */}
        <section ref={split1Ref} className="split-section scroll-animate">
          <div className="split-pane bg-navy">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Complete Billing Solutions for Every Specialty</h2>
            <p>
              From claim submission to denial management and compliance audits, we cover the entire revenue cycle. Reduce administrative burdens and watch your reimbursements grow.
            </p>
            <div>
              <Link to="/services" className="btn btn-primary">
                Explore Services &rarr;
              </Link>
            </div>
          </div>
          <div className="split-pane bg-light-blue" style={{ justifyContent: 'center' }}>
            <ul className="split-bullets">
              <li className="split-bullet-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Medical Billing & Coding
              </li>
              <li className="split-bullet-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Denial Management & Appeals
              </li>
              <li className="split-bullet-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Credentialing & Enrollment
              </li>
            </ul>
          </div>
        </section>

        {/* SPLIT 2: About — UPDATED */}
        <section ref={split2Ref} className="split-section scroll-animate">
          {/* Left: Text */}
          <div className="split-pane bg-white">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Billing Experts You Can Actually Trust</h2>
            <p>
              We are a dedicated medical billing company focused on maximizing your revenue and reducing administrative burden. Our team brings hands-on expertise across a wide range of specialties, delivering accurate, compliant, and timely billing solutions tailored to your practice's unique needs.
            </p>
            <div>
              <Link to="/about" className="btn btn-outline-blue">
                Meet Our Team &rarr;
              </Link>
            </div>
          </div>
          {/* Right: Image */}
          <div className="split-pane about-img-pane">
            <img
              src="https://plus.unsplash.com/premium_vector-1682311244909-e82a5a025a24?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Medical billing team at work"
              className="about-section-img"
            />
          </div>
        </section>

        {/* SPLIT 3: Free Audit */}
        <section ref={split3Ref} className="audit-cta-full scroll-animate">
          <div className="audit-cta-container">
            <h2>Not Sure Where Your Revenue Is Leaking?</h2>
            <p>Get a comprehensive free billing audit in 48 hours — absolutely no commitment needed.</p>
            <Link to="/audit" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Claim Your Free Audit
            </Link>
            <div className="audit-trust-line">
              <span>✓ No credit card</span> &nbsp;&nbsp;|&nbsp;&nbsp;
              <span>✓ HIPAA Secure</span> &nbsp;&nbsp;|&nbsp;&nbsp;
              <span>✓ 48hr turnaround</span>
            </div>
          </div>
        </section>

        {/* SPLIT 4: Contact */}
        <section ref={split4Ref} className="split-section scroll-animate">
          <div className="split-pane bg-white">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Let's Talk About Your Practice</h2>
            <p>
              Have questions about our billing integration, specialty coding, or software compatibility? We respond to all inquiries within 24 hours.
            </p>
            <p style={{ fontWeight: 'bold', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@claimsbilling.com
            </p>
            <div style={{ marginTop: '1rem' }}>
              <Link to="/contact" className="btn btn-secondary">
                Send a Message &rarr;
              </Link>
            </div>
          </div>
          <div className="split-pane bg-navy" style={{ textAlign: 'center', alignItems: 'center' }}>
            <div className="contact-info-circle">
              <div className="contact-pane-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Book a Free Call</h3>
              <p style={{ maxWidth: '260px', margin: '0 auto', fontSize: '0.95rem' }}>
                Schedule a 15-minute intro call directly with our billing specialist to discuss your practice's requirements.
              </p>
            </div>
            <a
              href="https://calendly.com/momina-umer247/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '2rem' }}
            >
              Schedule Now &rarr;
            </a>
          </div>
        </section>

      </div>

      {/* --- WHY CHOOSE US --- */}
      <section ref={whyUsRef} className="section section-light scroll-animate">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose ClaimsBilling?</h2>
            <p>We pride ourselves on offering reliable, accurate, and personalized billing services.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>HIPAA Compliant</h3>
              <p>Strict security controls and secure client portals guarantee your data is fully protected.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Dedicated Manager</h3>
              <p>You work with a dedicated specialist who understands your practice's specific workflow.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Fast Turnaround</h3>
              <p>Claims are coded and transmitted within 24 to 48 hours for expedited reimbursement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3>Transparent Reports</h3>
              <p>Get full insight with custom dashboards, monthly financial reviews, and transparent performance KPIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section ref={faqRef} className="section scroll-animate">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our medical billing services.</p>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isActive}
                  >
                    <span>{faq.q}</span>
                    <svg
                      className="faq-icon-arrow"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;