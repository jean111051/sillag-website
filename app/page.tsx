import Image from "next/image";
import "./sillag.css";

export default function Page() {
  return (
    <div>

      <header>
        <div className="logo-group">
          <Image
            src="/img/sillag-logo.png"
            alt="SILLAG Logo"
            width={100}
            height={100}
            className="logo-img"
          />
          <div className="logo">SILLAG System</div>
        </div>

        <nav style={{ marginRight: "15px" }}>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Workflow</a>
          <a href="#">Contact</a>
        </nav>

        <div className="psu-logo">
          <Image
            src="/img/psu-logo.jpg"
            alt="PSU Logo"
            width={100}
            height={100}
            className="logo-img"
            style={{ borderRadius: "53px" }}
          />
        </div>
      </header>

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: "url('img/img.png')" }}
      >

        <h1>Startup Mapping & Research Commercialization</h1>

        <p>
          A blockchain-powered ecosystem connecting universities, researchers,
          and startups. Upload research, mint NFTs, and grow innovation — with
          zero gas fees through our sponsored transaction system.
        </p>

        <button className="btn">Get Started</button>
      </section>

{/* ===== ABOUT SILLAG ===== */}
<section className="section">
  <h2>About SILLAG</h2>

  <p style={{maxWidth:"900px",margin:"auto",color:"#000e3e",lineHeight:"1.7"}}>
    The <strong>SILLAG Startup Summit and Hackathon</strong> is a premier entrepreneurship initiative
    hosted by Pangasinan State University (PSU) in collaboration with the DOST-Region 1 SILLAG Consortium.
    It serves as a launchpad for technopreneurship, where students and local innovators transform creative
    ideas into scalable business ventures. Managed through the PSU Aligwas Technology Business Incubator (TBI),
    the program provides mentorship, networking opportunities with industry experts, and a platform to pitch
    solutions addressing regional challenges in agriculture, food, and digital technology.
  </p>

  <br/>

  <p style={{maxWidth:"900px",margin:"auto",color:"#000e3e",lineHeight:"1.7"}}>
    Participating in SILLAG allows PSUnians to gain hands-on experience in market validation and product
    development beyond the traditional classroom setting. Student-led startups from the initiative have
    represented the university in national competitions. The program acts as PSU’s engine for innovation,
    bridging academic research and real-world commercialization to strengthen the Northern Luzon economy.
  </p>
</section>




   {/* ===== CORE FEATURES ===== */}
<section className="section">
  <h2>Core Features</h2>

  <div className="feature-row">
    <img src="/img/img4.png" className="feature-img" />
    <div className="feature-text">
      <h3>Zero-Cost Minting</h3>
      <p>
        Gas Station technology sponsors blockchain fees so students and
        researchers can publish without barriers.
      </p>
    </div>
  </div>

  <div className="feature-row reverse">
    <img src="/img/img6.jpg" className="feature-img" />
    <div className="feature-text">
      <h3>Ecosystem Mapping</h3>
      <p>
        Visualize relationships between universities, research papers,
        and startups across Region 1.
      </p>
    </div>
  </div>

  <div className="feature-row">
    <img src="/img/img5.png" className="feature-img" />
    <div className="feature-text">
      <h3>Automated Linking</h3>
      <p>
        Smart domain detection connects researchers to institutions automatically.
      </p>
    </div>
  </div>

  <div className="feature-row reverse">
    <img src="/img/analytics.jpeg" className="feature-img" />
    <div className="feature-text">
      <h3>Analytics & Reporting</h3>
      <p>
        Generate reports and track research impact with built-in dashboards.
      </p>
    </div>
  </div>
</section>


      {/* WORKFLOW */}
      <section className="section">
        <h2>How It Works</h2>

        <div className="workflow">
          <div className="step">
            <strong>1. Upload Research</strong>
            <br />
            Researchers submit files through the Next.js platform.
          </div>

          <div className="step">
            <strong>2. Gas Station Sponsorship</strong>
            <br />
            Makerspace Innovhub covers blockchain gas fees using sponsored
            transactions.
          </div>

          <div className="step">
            <strong>3. Mint & Store</strong>
            <br />
            Files are stored on IPFS and minted as NFTs on the Sui Network.
          </div>

          <div className="step">
            <strong>4. Visualize Impact</strong>
            <br />
            The ecosystem map shows innovation growth and startup lineage.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <h2>Built for Innovation Ecosystems</h2>

        <p style={{ maxWidth: "700px", margin: "auto", color: "#000e3e" }}>
          Designed for universities, TBIs, and researchers in the Ilocos Region,
          the SILLAG System transforms research into measurable innovation outcomes.
        </p>

        <button className="btn">Join the Ecosystem</button>
      </section>

      <footer>
        © 2026 SILLAG System — Powered by Makerspace Innovhub OPC
      </footer>

    </div>
  );
}
