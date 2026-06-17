import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container">
          <h1>About ClaimsBilling</h1>
          <p>The trusted revenue cycle partner for medical practices nationwide.</p>
        </div>
      </section>

      {/* ── ABOUT MAIN SECTION ── */}
      <section className="about-main-section">
        <div className="container">
          <div className="about-main-grid">

            {/* LEFT — Image */}
            <div className="about-image-col">
              <div className="about-image-wrapper">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ClaimsBilling team collaborating"
                  className="about-main-img"
                />
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="about-content-col">
              <span className="section-eyebrow">ABOUT US</span>
              <h2 className="about-main-heading">
                ClaimsBilling: Precision, Expertise, and Your Trusted Partner in Medical Billing
              </h2>
              <p className="about-main-para">
                ClaimsBilling was built on a single belief — that healthcare providers deserve a
                billing partner who treats every claim with the same care and precision as the
                patients being served. We are a team of certified medical billing specialists,
                credentialing experts, and revenue cycle professionals dedicated to maximizing
                your practice's financial performance. From first submission to final payment,
                we manage the entire billing process so your team can focus on what truly matters:
                delivering exceptional patient care.
              </p>

              {/* Services checklist */}
              <ul className="about-services-list">
                {[
                  'Medical Billing Services',
                  'Authorization Services',
                  'Credentialing Services',
                  'Accounts Receivable Services',
                  'MIPS Consultation and Data Validation',
                ].map((service) => (
                  <li key={service} className="about-service-item">
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>

              {/* Button only — no badge */}
              <div className="about-bottom-row">
                <Link to="/services" className="btn-more-about">MORE ABOUT US</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">OUR VALUES</span>
            <h2>Our Core Values</h2>
            <p>The operational principles that guide our interactions with providers and insurers every day.</p>
          </div>
          <div className="values-grid">
            {[
              { num: '01', title: 'Accuracy', desc: 'Meticulous attention to detail ensures claim entry is exact with first-pass clean claim rates.' },
              { num: '02', title: 'Integrity', desc: 'Transparent billing reports and completely ethical compliance guidance for your practice.' },
              { num: '03', title: 'Compliance', desc: 'Certified coders and processes strictly aligned with the latest HIPAA and OIG regulations.' },
              { num: '04', title: 'Results', desc: 'Driven to decrease your days in AR and maximize reimbursements for work done.' },
            ].map((v) => (
              <div key={v.num} className="value-card">
                <div className="value-number">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── HIPAA BLOCK ── */}
      <section className="hipaa-block-section">
        <div className="container">
          <div className="hipaa-block">
            <div className="hipaa-icon">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="hipaa-text">
              <h3>Strict HIPAA &amp; Privacy Compliance</h3>
              <p>
                We take patient privacy and medical data security seriously. ClaimsBilling
                maintains encrypted communication protocols, secure data systems, and executes
                business associate agreements (BAAs) with all of our clients. Our staff receives
                regular training in OIG guidelines, Medicare regulations, and privacy rules to
                keep your practice fully protected.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;