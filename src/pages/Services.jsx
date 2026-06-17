import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      title: "Medical Billing & Coding",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      bullets: [
        "Certified ICD-10-CM, CPT, and HCPCS coding for maximum compliance",
        "Dual-pass automated checks of charge entries to prevent submission typos",
        "Electronic claim transmission to 1000+ payers within 24 hours of encounter",
        "Specialty-specific modifier optimization to capture complete revenue"
      ]
    },
    {
      title: "Revenue Cycle Management",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
      bullets: [
        "Complete end-to-end management from scheduling to final balance resolution",
        "Daily payment posting (ERA/EFT & paper checks) with line-item reconciliation",
        "Automated patient statement processing and soft-touch payment follow-ups",
        "Dedicated billing portal for patients with digital payment integration"
      ]
    },
    {
      title: "Denial Management & Appeals",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      bullets: [
        "Proactive clearinghouse error resolution and immediate correction tracking",
        "Customized, specialty-specific appeals supported by medical necessity logic",
        "Root-cause analysis to eliminate recurring registration and payer glitches",
        "Rigorous recovery campaigns on legacy accounts receivable (90+ days)"
      ]
    },
    {
      title: "Credentialing Services",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      bullets: [
        "Fast-track payer enrollment with major commercial carriers and Medicare/Medicaid",
        "CAQH registry setup, profile maintenance, and quarterly re-attestations",
        "Proactive contract review and renegotiation of fee schedules for higher rates",
        "Provider license and credential tracking to prevent expiration lapses"
      ]
    },
    {
      title: "Patient Eligibility Verification",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 3h-6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        </svg>
      ),
      bullets: [
        "Real-time insurance status checking prior to patient check-in",
        "Detailed breakdown of copays, deductibles, and co-insurance estimates",
        "Procurement of mandatory prior-authorizations for specialized procedures",
        "Minimizes eligibility-based claim rejections before the doctor sees the patient"
      ]
    },
    {
      title: "Reporting & Analytics",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      bullets: [
        "In-depth monthly financial performance analysis and cash-flow reporting",
        "Practice metric tracking including Days in AR, clean claim rates, and adjustment reasons",
        "Payer underpayment tracking against contracted fee schedules",
        "24/7 web access to real-time reports and interactive analytics portal"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Medical Billing Services</h1>
          <p>End-to-end revenue cycle management tailored to optimize your practice's cash flow.</p>
        </div>
      </section>

      {/* Intro section */}
      <div className="container">
        <div className="services-intro">
          <h2>Streamline Healthcare Administrative Burdens</h2>
          <p>
            ClaimsBilling equips private practices, clinics, and medical groups with professional billing expertise to increase collections, resolve denied claims, and secure contract rates.
          </p>
        </div>

        {/* Services Cards Grid */}
        <section className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul className="service-bullets">
                {service.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="service-bullet-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Bottom CTA Block */}
        <section className="services-cta-section">
          <div className="services-cta-content">
            <h2>Ready to Maximize Your Practice Collections?</h2>
            <p>
              Allow us to run a risk-free billing audit on your last 30 days of claims. We will identify exact revenue leaks and outline how we can fix them.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/audit" className="btn btn-primary">
                Get a Free Audit
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
        </section>
      </div>
    </div>
  );
};

export default Services;
