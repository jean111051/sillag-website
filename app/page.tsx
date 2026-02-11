import Image from "next/image";
import { FiLock, FiZap, FiFileText, FiBarChart2 } from 'react-icons/fi';
import "./sillag.css";
import "./globals.css";

export default function Page() {
  return (
    <div>

      {/* HEADER */}
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

      {/* HERO */}
      <section className="hero" style={{ backgroundImage:"url('/img/img.png')" }}>
      
        <h1>Startup Mapping & Research Commercialization</h1>
        <p>
          A blockchain-powered ecosystem connecting universities, researchers,
          and startups. Upload research, mint NFTs, and grow innovation —
          with zero gas fees through our sponsored transaction system.
        </p>
        <button className="btn">Get Started</button>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="logo-group">
    <Image
      src="/img/sillag-logo.png"
      alt="SILLAG Logo"
      width={100}
      height={100}
      className="logo-img"
    />
  </div>
        <h2>About SILLAG</h2>

        <p className="about-text">
          The <strong>SILLAG Startup Summit and Hackathon</strong> is a premier entrepreneurship initiative
          hosted by Pangasinan State University (PSU) in collaboration with the DOST-Region 1 SILLAG Consortium.
          It serves as a launchpad for technopreneurship where innovators transform ideas into scalable ventures.
        </p>

        <p className="about-text">
          Participating in SILLAG allows PSUnians to gain hands-on experience in market validation
          and product development beyond the classroom setting.
        </p>
      </section>

      <section className="section core-features">
  <h2>Core Features</h2>

  <div className="feature-row">
    <div className="feature-img-wrapper">
      <img
  src="/img/minting.png"
  className="feature-img"
  alt="Zero-Cost Minting"
  style={{ width: "1900px", height: "320px", objectFit: "cover", display: "block" }}
/>
    </div>
    <div className="feature-text">
      <h3>Zero-Cost Minting</h3>
      <p>Unleash creativity without upfront fees. Gas Station Technology sponsors blackchain transaction costs for artist, making publishing free.</p>
    </div>
  </div>

  <div className="feature-row reverse">
    <div className="feature-img-wrapper">
      <img src="/img/mapping.png" className="feature-img" alt="Ecosystem Mapping"/>
    </div>
    <div className="feature-text">
      <h3>Ecosystem Mapping</h3>
      <p>Visualize relationships between universities and startups.</p>
    </div>
  </div>

  <div className="feature-row">
    <div className="feature-img-wrapper">
      <img src="/img/img5.png" className="feature-img" alt="Automated Linking"/>
    </div>
    <div className="feature-text">
      <h3>Automated Linking</h3>
      <p>Smart domain detection connects researchers automatically.</p>
    </div>
  </div>

  <div className="feature-row reverse">
    <div className="feature-img-wrapper">
      <img src="/img/analytics.jpeg" className="feature-img" alt="Analytics & Reporting"/>
    </div>
    <div className="feature-text">
      <h3>Analytics & Reporting</h3>
      <p>Generate reports and track research impact.</p>
    </div>
  </div>
</section>

      {/* WORKFLOW */}
<section className="workflow-section">
  <h2>How It Works</h2>

  <div className="workflow">

    <div className="step">
      <div className="step-icon"><FiLock size={28} /></div>
      <h4>Secure Upload</h4>
      <p>Researchers submit files with access control.</p>
    </div>

    <div className="step">
      <div className="step-icon"><FiZap size={28} /></div>
      <h4>Sponsored Transactions</h4>
      <p>Makerspace Innovhub sponsors blockchain fees.</p>
    </div>

    <div className="step">
      <div className="step-icon"><FiFileText size={28} /></div>
      <h4>Mint & Store</h4>
      <p>Files stored on IPFS and minted as NFTs.</p>
    </div>

    <div className="step">
      <div className="step-icon"><FiBarChart2 size={28} /></div>
      <h4>Visualize Impact</h4>
      <p>Interactive dashboards show innovation growth.</p>
    </div>

  </div>
</section>


      {/* CTA */}
      <section className="section">
        <h2>Built for Innovation Ecosystems</h2>
        <p className="text">
          Designed for universities, TBIs, and researchers in the Ilocos Region.
        </p>
        <button className="btn">Join the Ecosystem</button>
      </section>

      <footer>
        © 2026 SILLAG System — Powered by Makerspace Innovhub OPC
      </footer>

    </div>
  );
}
