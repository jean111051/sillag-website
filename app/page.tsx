"use client";

import Image from "next/image";
import { FiLock, FiZap, FiFileText, FiBarChart2, FiAward, FiTarget, FiTrendingUp } from "react-icons/fi";
import { useState } from "react";
import "./sillag.css";
import "./globals.css";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>

      {/* ================= HEADER ================= */}
      <header>
        <div className="logo-group">
          <Image
            src="/img/sillag-logo.png"
            alt="SILLAG Logo"
            width={100}
            height={100}
            className="logo-img"
          />
          <div className="logo-text">
            <div className="logo">SILLAG</div>
            <p className="logo-subtext">Research & Innovation Hub</p>
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? "active" : ""}>
          <a href="#home" onClick={toggleMenu}>Home</a>          
          <a href="#features" onClick={toggleMenu}>Features</a>
          <a href="#workflow" onClick={toggleMenu}>Workflow</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>

        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </header>

      {/* ================= HERO ================= */}
            <section id="home" className="hero" style={{ backgroundImage: "url('/img/sillag-hero.png')" }}>

        <div className="hero-content">
          <div className="hero-badge">BLOCKCHAIN POWERED ECOSYSTEM</div>
          
          <h1>
            Connect <span className="highlight">Research,</span><br />
            Innovation & Growth
          </h1>
          
          <p className="hero-subtitle">
            Sustainability, Innovation, Leadership, Linkages, Access and Growth
          </p>
          
          <p className="hero-description">
            A blockchain-powered ecosystem connecting universities, researchers,
            and startups. Upload research, mint NFTs, and grow innovation —
            with zero gas fees through our sponsored transaction system.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">View Research</button>
          </div>
        </div>
        
        <div className="section-divider"></div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src="/img/img7.jpg" alt="SILLAG" />
          </div>
          
          <div className="about-content">
            <h2>About SILLAG</h2>
            
            <p className="about-text">
              The <strong>SILLAG Startup Summit and Hackathon</strong> is a premier
              entrepreneurship initiative hosted by <strong>Pangasinan State
              University (PSU)</strong> in collaboration with the DOST-Region 1
              SILLAG Consortium. It serves as a launchpad for{" "}
              <em className="technopreneurship">technopreneurship</em> where innovators transform ideas into
              scalable ventures.
            </p>
            
            <p className="about-text">
              Participating in SILLAG allows <strong>PSUnians</strong> to gain hands-on
              experience in market validation and product development beyond the
              classroom setting. We bridge the gap between academic theory and
              real-world market impact.
            </p>
            
            <div className="about-badges">
              <div className="badge-item">
                <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>Innovation</span>
              </div>
              
              <div className="badge-item">
                <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 11l3 3L22 4"/>
                </svg>
                <span>Mentorship</span>
              </div>
              
              <div className="badge-item">
                <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="16 12 12 8 8 12"/>
                  <line x1="12" y1="16" x2="12" y2="8"/>
                </svg>
                <span>Scalability</span>
              </div>
            </div>
            
            <a href="#mission" className="learn-more">
              Learn more about our mission
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== SHARED BACKGROUND AREA ===== */}
<div className="features-bg">

  {/* ================= CORE FEATURES ================= */}
        <section id="features" className="section core-features">
    <h2 className="core-title">
     <span className="highlight-white">Zero-Cost Minting: </span><span className="highlight">Blockchain Publishing Made Easy</span>
    </h2>
    
    <p className="core-description">
      Experience the future of academic publishing with zero gas fees. Our sponsored
      transaction system allows researchers to mint NFTs of their work seamlessly.
    </p>

    <div className="core-grid">
      <div className="core-card">
        <div className="core-card-content">
          <h4>Gas-Free Publishing</h4>
          <p>Publish research without worrying about transaction costs or complex crypto-wallets. We handle the heavy lifting.</p>
        </div>
        <div className="core-card-icon">
          <FiZap size={32} />
        </div>
      </div>

      <div className="core-card">
        <div className="core-card-content">
          <h4>Risk-Free</h4>
          <p>Secure your intellectual property on-chain with military-grade encryption and decentralized storage protocols.</p>
        </div>
        <div className="core-card-icon">
          <FiLock size={32} />
        </div>
      </div>

      <div className="core-card">
        <div className="core-card-content">
          <h4>Seamless Workflow</h4>
          <p>Integrates directly with institutional repositories and research portals for a frictionless experience.</p>
        </div>
        <div className="core-card-icon">
          <FiFileText size={32} />
        </div>
      </div>

      <div className="core-card">
        <div className="core-card-content">
          <h4>Transparent Tracking</h4>
          <p>Real-time verification and impact tracking for every minted publication. Full audit trails on-chain.</p>
        </div>
        <div className="core-card-icon">
          <FiBarChart2 size={32} />
        </div>
      </div>
    </div>

  </section>
{/* ================= PLATFORM CAPABILITIES ================= */}
<section className="capabilities-new">
  <div className="cap-header">
    <span className="cap-badge">CORE FEATURES</span>
    <h2>Platform <span className="highlight">Capabilities</span></h2>
    <div className="cap-underline"></div>
    <p className="cap-intro">
      Empowering the Ilocos Region through cutting-edge blockchain technology, advanced data visualization, and automated research linking.
    </p>
  </div>

  <div className="cap-container">
    {/* Capability 1: Ecosystem Mapping */}
    <div className="cap-card" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7) 40%, transparent), url('/img/1st.png')" }}>
      <div className="cap-card-content">
        <div className="cap-type">
          <FiZap className="cap-type-icon" /> <span>GLOBAL IMPACT</span>
        </div>
        <h3>Ecosystem Mapping</h3>
        <p>Visualize your innovation impact by connecting universities, researchers, and startups across Region 1. Gain a bird's eye view of the entire research landscape with our interactive mapping tools.</p>
        <ul className="cap-list">
          <li><FiAward /> University Scorecards</li>
          <li><FiAward /> Innovation Family Tree</li>
          <li><FiAward /> Impact Radar</li>
          <li><FiAward /> Official Endorsements</li>
        </ul>
        {/* <button className="cap-btn">Learn more about Mapping →</button> */}
      </div>
    </div>

    {/* Capability 2: Automated Linking (Right Aligned) */}
    <div className="cap-card reverse" style={{ backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.7) 40%, transparent), url('/img/2nd.png')" }}>
      <div className="cap-card-content">
        <div className="cap-type">
          <FiZap className="cap-type-icon" /> <span>SMART DETECTION</span>
        </div>
        <h3>Automated Linking</h3>
        <p>Smart domain detection connects researchers automatically. No manual tagging required—our system identifies affiliations and builds bridges between disciplines instantly.</p>
        <ul className="cap-list">
          <li><FiAward /> Institutional Identity Verification</li>
          <li><FiAward /> Ecosystem Filtering</li>
          <li><FiAward /> Regional Visibility</li>
          <li><FiAward /> Innovation Mapping</li>
        </ul>
        {/* <button className="cap-btn">Explore Smart Linking →</button> */}
      </div>
    </div>

    {/* Capability 3: Analytics & Reporting */}
    <div className="cap-card" style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7) 40%, transparent), url('/img/3rd.png')" }}>
      <div className="cap-card-content">
        <div className="cap-type">
          <FiZap className="cap-type-icon" /> <span>DATA INSIGHTS</span>
        </div>
        <h3>Analytics & Reporting</h3>
        <p>Generate reports and track research impact with interactive dashboards. Visualize growth metrics and compliance status in real-time, backed by blockchain transparency.</p>
        <ul className="cap-list">
          <li><FiAward /> Gas Subsidy Transparency</li>
          <li><FiAward /> Research Output Visualization</li>
          <li><FiAward /> Privacy-First Innovation</li>
          <li><FiAward /> DOST-Compliant Reporting</li>
        </ul>
        {/* <button className="cap-btn">View Analytics Dashboard →</button> */}
      </div>
    </div>
  </div>


    {/* Solution Cards */}
    <div className="solution-cards">
      <div className="solution-card">
        <div className="solution-icon-circle">
          <FiAward size={32} />
        </div>
        <h4>For Students & Researchers</h4>
        <p>Prove ownership and mint research outputs as NFTs. Secure your intellectual property on the blockchain.</p>
      </div>
      <div className="solution-card featured">
        <div className="featured-bar"></div>
        <div className="solution-icon-circle yellow">
          <FiTarget size={32} />
        </div>
        <h4>For Startup Coaches</h4>
        <p>Help startups tokenize and validate innovations. Provide expert guidance with data-backed insights.</p>
      </div>

      <div className="solution-card">
        <div className="solution-icon-circle">
          <FiTrendingUp size={32} />
        </div>
        <h4>For University Admins</h4>
        <p>Monitor ecosystem growth and research impact metrics. Manage institutional rankings and visibility effortlessly.</p>
      </div>
    </div>

  </section>

  {/* ================= WORKFLOW ================= */}
        <section id="workflow" className="workflow-section">
    <div className="workflow-header">
      <h2>How It Works</h2>
      <div className="workflow-underline"></div>
    </div>

    <div className="workflow-grid-2x2">
      <div className="workflow-card-box">
        <div className="workflow-card-content">
          <h4>Secure Upload</h4>
          <p>Researchers submit files with enterprise-grade access control and encryption.</p>
        </div>
        <div className="workflow-card-icon">
          <FiLock size={32} />
        </div>
      </div>

      <div className="workflow-card-box">
        <div className="workflow-card-content">
          <h4>Sponsored Transactions</h4>
          <p>Makerspace Innovhub sponsors blockchain fees, ensuring a seamless user experience.</p>
        </div>
        <div className="workflow-card-icon">
          <FiZap size={32} />
        </div>
      </div>

      <div className="workflow-card-box">
        <div className="workflow-card-content">
          <h4>Mint & Store</h4>
          <p>Files are securely stored on IPFS and minted as unique, verifiable NFTs.</p>
        </div>
        <div className="workflow-card-icon">
          <FiFileText size={32} />
        </div>
      </div>

      <div className="workflow-card-box">
        <div className="workflow-card-content">
          <h4>Visualize Impact</h4>
          <p>Interactive dashboards show real-time innovation growth and research impact.</p>
        </div>
        <div className="workflow-card-icon">
          <FiBarChart2 size={32} />
        </div>
      </div>
    </div>
  </section>

  {/* ================= CTA ================= */}
  <section id="contact" className="section cta-section">  <div className="cta-card">
    <h2>Built for Innovation Ecosystems</h2>
    <p className="text">Designed for universities, TBIs, and researchers in the Ilocos Region.</p>
    <button className="btn cta-btn">
      Join the Ecosystem <span style={{ marginLeft: 8 }}>→</span>
    </button>
  </div>
</section>
      </div>
      {/* ================= FOOTER ================= */}
      <footer>
        © 2026 SILLAG System — Powered by Makerspace Innovhub OPC
      </footer>

    </div>
  );
}
