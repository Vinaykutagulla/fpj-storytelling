"use client";
import React from 'react';

// This component renders the user's provided content, scoped and safe for Next.js.
// We keep the OpeningSection intact and render this right after it.
export default function ProvidedJourney() {
  return (
    <div className="provided-journey" style={{ background: '#0f0f23' }}>
      <style>{`
        .provided-journey * { box-sizing: border-box; }
        .provided-journey .hero { background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #ec4899 100%); padding: 100px 20px 120px; text-align: center; position: relative; overflow: hidden; }
        .provided-journey .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 20% 50%, rgba(236,72,153,0.2), transparent 50%), radial-gradient(circle at 80% 50%, rgba(124,58,237,0.2), transparent 50%); animation: provided-pulse 8s ease-in-out infinite; }
        @keyframes provided-pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
        .provided-journey .hero-content{ position:relative; z-index:1; max-width:900px; margin:0 auto; }
        .provided-journey .hero h1 { font-size: 3.5rem; font-weight: 800; color: #fff; margin-bottom: 24px; text-shadow: 0 4px 20px rgba(0,0,0,0.3); letter-spacing: -0.02em; }
        .provided-journey .hero-subtitle{ font-size:1.4rem; color: rgba(255,255,255,0.95); font-weight:300; line-height:1.6; }
        .provided-journey .container{ max-width:1300px; margin:0 auto; padding:0 20px; }
        .provided-journey .timeline{ position:relative; padding:80px 0; }
        .provided-journey .timeline::before{ content:''; position:absolute; left:50%; top:0; bottom:0; width:3px; background: linear-gradient(180deg,#7c3aed,#ec4899,#f59e0b); transform: translateX(-50%); }
        .provided-journey .phase-section{ margin-bottom:100px; position:relative; }
        .provided-journey .phase-marker{ position:absolute; left:50%; transform: translateX(-50%); width:60px; height:60px; background: linear-gradient(135deg,#7c3aed,#ec4899); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow: 0 0 0 10px #0f0f23, 0 10px 30px rgba(124,58,237,0.4); z-index:2; }
        .provided-journey .phase-content{ background:#fff; border-radius:24px; padding:60px; margin:0 auto; max-width:1100px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); position:relative; }
        .provided-journey .phase-content::before{ content:''; position:absolute; top:0; left:0; right:0; height:6px; background: linear-gradient(90deg,#7c3aed,#ec4899); border-radius:24px 24px 0 0; }
        .provided-journey .phase-header{ margin-bottom:40px; }
        .provided-journey .phase-tag{ display:inline-block; background: linear-gradient(135deg,#ede9fe,#fce7f3); color:#7c3aed; padding:8px 20px; border-radius:20px; font-size:.9rem; font-weight:600; margin-bottom:16px; letter-spacing:.03em; }
        .provided-journey .phase-title{ font-size:2.5rem; font-weight:800; color:#1e293b; margin-bottom:16px; letter-spacing:-.02em; }
        .provided-journey .phase-subtitle{ font-size:1.2rem; color:#64748b; font-weight:400; }
        .provided-journey .phase-description{ font-size:1.1rem; color:#475569; line-height:1.8; margin-bottom:40px; }
        .provided-journey .stats-grid{ display:grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr)); gap:24px; margin:40px 0; }
        .provided-journey .stat-card{ background: linear-gradient(135deg,#f8fafc,#f1f5f9); padding:30px; border-radius:16px; border:2px solid #e2e8f0; transition: all .3s ease; }
        .provided-journey .stat-card:hover{ transform: translateY(-4px); border-color:#7c3aed; box-shadow:0 10px 30px rgba(124,58,237,.15); }
        .provided-journey .stat-number{ font-size:2.5rem; font-weight:800; background: linear-gradient(135deg,#7c3aed,#ec4899); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:8px; }
        .provided-journey .stat-label{ color:#64748b; font-size:1rem; font-weight:500; }
        .provided-journey .fpj-highlight{ background: linear-gradient(135deg,#fef3c7,#fed7aa); border-left:4px solid #f59e0b; padding:30px 35px; border-radius:12px; margin:40px 0; position:relative; }
        .provided-journey .fpj-highlight::before{ content:'🎓'; position:absolute; top:-15px; left:30px; font-size:2rem; background:#fff; padding:5px 10px; border-radius:50%; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
        .provided-journey .fpj-highlight-text{ font-size:1.1rem; color:#78350f; line-height:1.8; font-style:italic; font-weight:500; }
        .provided-journey .clinical-visual{ background: linear-gradient(135deg,#eff6ff,#f5f3ff); padding:50px; border-radius:20px; margin:40px 0; text-align:center; }
        .provided-journey .clinical-icon{ font-size:4rem; margin-bottom:20px; display:block; }
        .provided-journey .clinical-heading{ font-size:2rem; font-weight:700; color:#1e40af; margin-bottom:12px; }
        .provided-journey .clinical-subheading{ font-size:1.2rem; color:#6366f1; margin-bottom:30px; font-style:italic; }
        .provided-journey .trial-phases{ display:grid; grid-template-columns: repeat(3,1fr); gap:20px; margin-top:30px; }
        .provided-journey .trial-phase{ background:#fff; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.08); }
        .provided-journey .trial-phase-number{ font-size:1.5rem; font-weight:700; color:#7c3aed; margin-bottom:8px; }
        .provided-journey .trial-phase-desc{ font-size:.95rem; color:#64748b; line-height:1.6; }
        .provided-journey .manufacturing-visual{ background: linear-gradient(135deg,#f0fdf4,#ecfdf5); padding:50px; border-radius:20px; margin:40px 0; }
        .provided-journey .manufacturing-icon{ font-size:4rem; margin-bottom:20px; text-align:center; display:block; }
        .provided-journey .manufacturing-title{ font-size:2rem; font-weight:700; color:#065f46; margin-bottom:12px; text-align:center; }
        .provided-journey .manufacturing-subtitle{ font-size:1.2rem; color:#059669; margin-bottom:30px; text-align:center; font-style:italic; }
        .provided-journey .scale-comparison{ display:flex; justify-content:space-around; align-items:center; margin-top:30px; flex-wrap:wrap; gap:30px; }
        .provided-journey .scale-item{ text-align:center; flex:1; min-width:200px; }
        .provided-journey .scale-value{ font-size:2.5rem; font-weight:800; color:#047857; margin-bottom:8px; }
        .provided-journey .scale-label{ font-size:1rem; color:#10b981; font-weight:600; }
        .provided-journey .arrow{ font-size:3rem; color:#34d399; }
        .provided-journey .cta-section{ background: linear-gradient(135deg,#1e3a8a,#7c3aed); padding:80px 40px; border-radius:30px; text-align:center; margin:80px 0; position:relative; overflow:hidden; }
        .provided-journey .cta-section::before{ content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px); background-size:50px 50px; animation: provided-grid 20s linear infinite; }
        @keyframes provided-grid{ 0%{transform:translate(0,0)} 100%{transform:translate(50px,50px)} }
        .provided-journey .cta-title{ font-size:2.5rem; font-weight:800; color:#fff; margin-bottom:20px; }
        .provided-journey .cta-text{ font-size:1.3rem; color: rgba(255,255,255,0.95); max-width:800px; margin:0 auto 35px; line-height:1.7; }
        .provided-journey .cta-button{ display:inline-block; background:#fff; color:#7c3aed; padding:18px 45px; border-radius:50px; font-size:1.1rem; font-weight:700; text-decoration:none; transition: all .3s ease; box-shadow:0 10px 30px rgba(0,0,0,0.2); }
        .provided-journey .cta-button:hover{ transform: translateY(-3px); box-shadow:0 15px 40px rgba(0,0,0,0.3); }
        .provided-journey .journey-complete{ background:#fff; padding:80px 60px; border-radius:30px; text-align:center; margin:80px 0; box-shadow:0 20px 60px rgba(0,0,0,0.2); }
        .provided-journey .journey-complete h2{ font-size:2.8rem; font-weight:800; color:#1e293b; margin-bottom:24px; }
        .provided-journey .journey-complete p{ font-size:1.3rem; color:#475569; line-height:1.8; max-width:900px; margin:0 auto; }
        .provided-journey .gradient-text{ background: linear-gradient(135deg,#7c3aed,#ec4899); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; font-weight:800; }
        @media (max-width: 968px){
          .provided-journey .timeline::before{ left:30px; }
          .provided-journey .phase-marker{ left:30px; }
          .provided-journey .hero h1{ font-size:2.5rem; }
          .provided-journey .phase-content{ padding:40px 30px; }
          .provided-journey .phase-title{ font-size:2rem; }
          .provided-journey .trial-phases{ grid-template-columns:1fr; }
          .provided-journey .scale-comparison{ flex-direction:column; }
          .provided-journey .arrow{ transform: rotate(90deg); }
        }
      `}</style>

      {/* The user wants to keep the existing Opening section unchanged, so we render from Preclinical onwards here. */}
      <div className="container">
        <div className="timeline">
          {/* Phase 1: Preclinical */}
          <div className="phase-section">
            <div className="phase-marker">💊</div>
            <div className="phase-content">
              <div className="phase-header">
                <span className="phase-tag">PRECLINICAL DEVELOPMENT</span>
                <h2 className="phase-title">From Idea to Evidence</h2>
                <p className="phase-subtitle">Building the scientific foundation</p>
              </div>
              <p className="phase-description">
                Before a molecule ever reaches humans, it must prove it works and is safe in carefully controlled lab and model systems. Scientists run pharmacology, toxicity, metabolism and formulation studies. Only a small fraction of molecules survive this stage—but those that do enter clinical development with data-backed confidence.
              </p>
              <div className="fpj-highlight">
                <p className="fpj-highlight-text">
                  "FPJ students go through a battery of tests and assessments—proving their grasp of core concepts before moving forward to the next level, just like molecules must prove safety before clinical trials."
                </p>
              </div>
              <p className="phase-description">
                This stage reduces risk, optimizes the molecule, and sets the scientific foundation for first-in-human trials.
              </p>
            </div>
          </div>

          {/* Phase 2: Clinical Trials */}
          <div className="phase-section">
            <div className="phase-marker">🧪</div>
            <div className="phase-content">
              <div className="phase-header">
                <span className="phase-tag">CLINICAL DEVELOPMENT</span>
                <h2 className="phase-title">First Human Tests</h2>
                <p className="phase-subtitle">Where hope meets science</p>
              </div>
              <p className="phase-description">
                After years of lab work, the moment of truth arrives: testing in real people. It's a careful, methodical process that can take a decade—and where pharmaceutical careers are truly made.
              </p>
              <div className="clinical-visual">
                <span className="clinical-icon">🧪</span>
                <h3 className="clinical-heading">Clinical Trials</h3>
                <p className="clinical-subheading">Where hope meets science</p>
                <div className="trial-phases">
                  <div className="trial-phase"><div className="trial-phase-number">Phase I</div><div className="trial-phase-desc">20-100 brave volunteers help test safety in the first human trials</div></div>
                  <div className="trial-phase"><div className="trial-phase-number">Phase II</div><div className="trial-phase-desc">Hundreds more join to test effectiveness and optimal dosing</div></div>
                  <div className="trial-phase"><div className="trial-phase-number">Phase III</div><div className="trial-phase-desc">Thousands participate to prove it works better than existing treatments</div></div>
                </div>
              </div>
              <div className="fpj-highlight">
                <p className="fpj-highlight-text">
                  "This is where FPJ students shine—learning clinical research principles, regulatory requirements, and data analysis skills that pharmaceutical companies desperately need for their clinical teams."
                </p>
              </div>
              <div className="stats-grid">
                <div className="stat-card"><div className="stat-number">1 in 4</div><div className="stat-label">Medicines reach patients</div></div>
                <div className="stat-card"><div className="stat-number">10-15</div><div className="stat-label">Years of development</div></div>
                <div className="stat-card"><div className="stat-number">$100M+</div><div className="stat-label">Investment required</div></div>
              </div>
              <p className="phase-description" style={{ textAlign: 'center', fontSize: '1.15rem', marginTop: 30 }}>
                But when it works, <strong>lives are saved—and careers are launched.</strong>
              </p>
            </div>
          </div>

          {/* Phase 3: Regulatory Approval */}
          <div className="phase-section">
            <div className="phase-marker">✓</div>
            <div className="phase-content">
              <div className="phase-header">
                <span className="phase-tag">REGULATORY SUBMISSION</span>
                <h2 className="phase-title">Approval Pathway</h2>
                <p className="phase-subtitle">Building the case for market entry</p>
              </div>
              <p className="phase-description">
                All the data from discovery through clinical trials is assembled into a massive dossier for regulators. Regulatory teams compile quality, nonclinical, and clinical modules—thousands of pages of validated, auditable information.
              </p>
              <div className="fpj-highlight">
                <p className="fpj-highlight-text">
                  "FPJ students build literacy in submission structure, risk management plans, labeling negotiation, and post-market surveillance frameworks."
                </p>
              </div>
              <p className="phase-description">
                Review can take months to years depending on priority pathways—but once approved, the medicine can finally be manufactured at scale.
              </p>
            </div>
          </div>

          {/* Phase 4: Manufacturing */}
          <div className="phase-section">
            <div className="phase-marker">🏭</div>
            <div className="phase-content">
              <div className="phase-header">
                <span className="phase-tag">MANUFACTURING SCALE-UP</span>
                <h2 className="phase-title">Making Millions</h2>
                <p className="phase-subtitle">When one tiny lab process must become millions of perfect doses</p>
              </div>
              <div className="manufacturing-visual">
                <span className="manufacturing-icon">🏭</span>
                <h3 className="manufacturing-title">Scale-Up Manufacturing</h3>
                <p className="manufacturing-subtitle">From lab bench to factory floor</p>
                <div className="scale-comparison">
                  <div className="scale-item"><div className="scale-value">100</div><div className="scale-label">Doses in Lab</div></div>
                  <div className="arrow">→</div>
                  <div className="scale-item"><div className="scale-value">Millions</div><div className="scale-label">Doses for Patients</div></div>
                </div>
              </div>
              <p className="phase-description">
                The recipe that worked for 100 doses in a lab must now produce millions. Every step gets redesigned. Bigger equipment, stricter standards, zero room for error. One batch can supply thousands of patients—or if something goes wrong, put them at risk.
              </p>
              <div className="fpj-highlight">
                <p className="fpj-highlight-text">
                  "FPJ students learn manufacturing excellence—quality systems, process optimization, and supply chain management skills that turn them into the production leaders pharmaceutical companies need to scale reliably."
                </p>
              </div>
              <div className="stats-grid">
                <div className="stat-card"><div className="stat-number">2-3</div><div className="stat-label">Years to full scale</div></div>
                <div className="stat-card"><div className="stat-number">Millions</div><div className="stat-label">Patients served globally</div></div>
                <div className="stat-card"><div className="stat-number">100s</div><div className="stat-label">Skilled professionals employed</div></div>
              </div>
            </div>
          </div>

          {/* Phase 5: Launch */}
          <div className="phase-section">
            <div className="phase-marker">🚀</div>
            <div className="phase-content">
              <div className="phase-header">
                <span className="phase-tag">COMMERCIAL LAUNCH</span>
                <h2 className="phase-title">Reaching Patients</h2>
                <p className="phase-subtitle">From approval to real-world impact</p>
              </div>
              <p className="phase-description">
                After approval, coordinated commercial, medical and manufacturing efforts bring the therapy to real-world use. Market access, pricing strategy, pharmacovigilance, medical education, lifecycle management—launch is a multidisciplinary sprint.
              </p>
              <div className="fpj-highlight">
                <p className="fpj-highlight-text">
                  "FPJ students explore how cross-functional teams ensure safe uptake, monitor outcomes, and expand indications over time."
                </p>
              </div>
              <p className="phase-description">
                A successful launch turns a scientific achievement into sustained patient impact—and opens the door to future innovations.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-text">Join FPJ and follow the same proven path that brings life-saving medicines to millions of patients worldwide</p>
            <a href="#" className="cta-button">Begin Your Transformation</a>
          </div>
        </div>

        <div className="journey-complete">
          <h2>From Discovery to Impact</h2>
          <p>
            Just as a medicine is <span className="gradient-text">discovered, tested, approved, scaled, and launched</span> to transform lives worldwide,
            FPJ ensures every student is <span className="gradient-text">trained, validated, certified, and career-ready</span>. We don't just teach—we guide you through a proven development process that prepares you for real-world pharmaceutical success.
          </p>
        </div>
      </div>
    </div>
  );
}
