import Image from "next/image";
import { FiLock, FiZap, FiFileText, FiBarChart2 } from "react-icons/fi";
import "./sillag.css";
import "./globals.css";

export default function Page() {
  return (
    <div>

      {/* ================= HEADER ================= */}
      <header>
        <div className="logo-group">
          <Image
            src="/img/psu-logo.jpg"
            alt="PSU Logo"
            width={90}
            height={90}
            className="logo-img"
            style={{ borderRadius: "50%" }}
          />
          <div className="logo">SILLAG STARTUP</div>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Workflow</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/img/img.png')" }}
      >
        <h1>Startup Mapping & Research Commercialization</h1>
        <p>
          A blockchain-powered ecosystem connecting universities, researchers,
          and startups. Upload research, mint NFTs, and grow innovation —
          with zero gas fees through our sponsored transaction system.
        </p>
        <button className="btn">Get Started</button>
        <div className="section-divider"></div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section" style={{backgroundImage:"url('/img/img7.jpg')"}}>
        <div className="logo-group">
          <Image
            src="/img/sillag-logo.png"
            alt="SILLAG Logo"
            width={120}
            height={120}
            className="logo-img"
          />
        </div>

        <h2>About SILLAG</h2>

        <p className="about-text">
          The <strong>SILLAG Startup Summit and Hackathon</strong> is a premier
          entrepreneurship initiative hosted by Pangasinan State University (PSU)
          in collaboration with the DOST-Region 1 SILLAG Consortium.
          It serves as a launchpad for technopreneurship where innovators
          transform ideas into scalable ventures.
        </p>

        <p className="about-text">
          Participating in SILLAG allows PSUnians to gain hands-on experience
          in market validation and product development beyond the classroom setting.
        </p>
      </section>

      {/* ================= CORE FEATURES ================= */}
      <section className="section core-features">

        <h2 className="core-title">
          Zero-Cost Minting: Blockchain Publishing Made Easy
        </h2>

        {/* Feature Icons */}
        <div className="core-icons">
          <div className="core-icon-item">
            <FiZap size={28} />
            <p>Gas-Free Publishing</p>
          </div>

          <div className="core-icon-item">
            <FiLock size={28} />
            <p>Risk-Free</p>
          </div>

          <div className="core-icon-item">
            <FiFileText size={28} />
            <p>Seamless Workflow</p>
          </div>

          <div className="core-icon-item">
            <FiBarChart2 size={28} />
            <p>Transparent Tracking</p>
          </div>
        </div>

        {/* Ecosystem Mapping */}
        <div className="ecosystem-wrapper">
          <div className="ecosystem-text">
            <h3>Ecosystem Mapping</h3>
            <p>
              Visualize your innovation impact by connecting universities,
              researchers, and startups across Region 1.
            </p>

            <ul>
              <li>✔ University Scorecards</li>
              <li>✔ Innovation Family Tree</li>
              <li>✔ Impact Radar</li>
              <li>✔ Official Endorsements</li>
            </ul>
          </div>

          <div className="ecosystem-map">
            <img src="/img/mapping.png" alt="Ecosystem Map" />
          </div>
        </div>

<div className="ecosystem-wrapper">
            <div className="ecosystem-map">
            <img src="/img/img5.png" alt="Automated Linking" />
          </div>
          <div className="ecosystem-text">
            <h3>Automated Linking</h3>
            <p>
              Smart domain detection connects researchers automatically.
            </p>

            <ul>
              <li>✔ Institutional Identity Verification</li>
              <li>✔ Ecosystem Filtering</li>
              <li>✔ Regional Visibility</li>
              <li>✔ Innovation Mapping</li>
            </ul>
          </div>
        </div>

<div className="ecosystem-wrapper">
          <div className="ecosystem-text">
            <h3>Analytics & Reporting</h3>
            <p>
              Generate reports and track research impact with interactive dashboards.
            </p>

            <ul>
              <li>✔ Gas Subsidy Transparency</li>
              <li>✔ Research Output Visualization</li>
              <li>✔ Privacy-first Innovation</li>
              <li>✔ DOST-Compliant Automated Reporting</li>
            </ul>
          </div>

          <div className="ecosystem-map">
            <img src="/img/analytics.jpeg" alt="Analytics & Reporting"/>
          </div>
        </div>

        {/* Solution Cards */}
        <div className="solution-cards">
          <div className="solution-card">
            <h4>For Students & Researchers</h4>
            <p>Prove ownership and mint research outputs as NFTs.</p>
          </div>

          <div className="solution-card">
            <h4>For Startup Coaches</h4>
            <p>Help startups tokenize and validate innovations.</p>
          </div>

          <div className="solution-card">
            <h4>For University Admins</h4>
            <p>Monitor ecosystem growth and research impact metrics.</p>
          </div>
        </div>

      </section>

      {/* ================= WORKFLOW ================= */}
      <section className="workflow-section">
        <h2>How It Works</h2>

        <div className="workflow">
          <div className="step">
            <div className="step-icon">
              <FiLock size={28} />
            </div>
            <h4>Secure Upload</h4>
            <p>Researchers submit files with access control.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <FiZap size={28} />
            </div>
            <h4>Sponsored Transactions</h4>
            <p>Makerspace Innovhub sponsors blockchain fees.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <FiFileText size={28} />
            </div>
            <h4>Mint & Store</h4>
            <p>Files stored on IPFS and minted as NFTs.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <FiBarChart2 size={28} />
            </div>
            <h4>Visualize Impact</h4>
            <p>Interactive dashboards show innovation growth.</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section">
        <h2>Built for Innovation Ecosystems</h2>
        <p className="text">
          Designed for universities, TBIs, and researchers in the Ilocos Region.
        </p>
        <button className="btn">Join the Ecosystem</button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        © 2026 SILLAG System — Powered by Makerspace Innovhub OPC
      </footer>

    </div>
  );
}
