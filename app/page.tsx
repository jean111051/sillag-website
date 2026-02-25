"use client";

import Image from "next/image";
import {
  FiLock,
  FiZap,
  FiFileText,
  FiBarChart2,
  FiAward,
  FiTarget,
  FiTrendingUp,
  FiMail,
  FiFacebook,
  // FiHandshake,
} from "react-icons/fi";

import {
  MdEco,
  MdInsights,
  MdRocketLaunch,
  MdSchool,
  MdAccountBalance,
  MdLocationCity,
  MdBusinessCenter,
  MdLightbulb,
  MdAdd,
  MdSearch,
  MdAutoAwesomeMotion,
  MdLockOpen,
  MdHub,
} from "react-icons/md";
import { useState } from "react";
import "./sillag.css";
import "./globals.css";

export default function Page() {
  const partnerCategories = [
    {
      name: "Incubators",
      count: 6,
      icon: <MdLightbulb />,
      partners: [
        {
          name: "Ilocos Norte MSMEO",
          image: "/img/incubators/innovatehub.png",
        },
        { name: "PSU Aligwas TBI", image: "/img/incubators/psu.png" },
        { name: "MMSU Bannuar TBI", image: "/img/incubators/agriinc.png" },
        { name: "MMSU TBI", image: "/img/incubators/mmsu.png" },
        { name: "MMSU Dap-Ayan ATBI", image: "/img/incubators/dapayan.png" },
        { name: "DMMMSU ATBI", image: "/img/incubators/dmmmsu.jpg" },
      ],
      desc: "Incubators nurturing startups.",
    },
    {
      name: "Academic Institutions",
      count: 8,
      icon: <MdSchool />,
      partners: [
        {
          name: "Mariano Marcos State University",
          image: "/img/univ-logos/mmsu.png",
        },
        {
          name: "Universidad De Dagupan",
          image: "/img/univ-logos/udd.png",
        },
        { name: "Saint Louis College", image: "/img/univ-logos/slu.jpg" },
        {
          name: "Pangasinan State University",
          image: "/img/univ-logos/psu.png",
        },
        { name: "NorthWestern University", image: "/img/univ-logos/nu.png" },
        {
          name: "Ilocos Sur Polytechnic State College",
          image: "/img/univ-logos/isur.png",
        },
        {
          name: "Don Mariano Marcos Memorial State University",
          image: "/img/univ-logos/dmmmsu.png",
        },
        {
          name: "University of Northern Philippines",
          image: "/img/univ-logos/unp.png",
        },
      ],
      desc: "Leading universities and colleges fostering innovation.",
    },
    {
      name: "National Agencies",
      count: 4,
      icon: <MdAccountBalance />,
      partners: [
        { name: "DOST", image: "/img/agencies/dost.png" },

        { name: "DTI", image: "/img/agencies/dti.png" },
        { name: "DICT", image: "/img/agencies/dict.png" },
        { name: "NEDA", image: "/img/agencies/neda.png" },
      ],
      desc: "Key government agencies supporting innovation.",
    },
    {
      name: "Local Government Units",
      count: 2,
      icon: <MdLocationCity />,
      partners: [
        { name: "Ilocos Norte", image: "/img/lgu/ilocos_norte.png" },
        { name: "Ilocos Sur", image: "/img/lgu/ilocos_sur.png" },
      ],
      desc: "LGUs enabling local innovation ecosystems.",
    },
    {
      name: "Private Sectors",
      count: 8,
      icon: <MdBusinessCenter />,
      partners: [
        { name: "IAM Contact Solutions ", image: "/img/partners/Tam.png" },
        { name: "Innovhub Makerspace", image: "/img/partners/makerspace.jpg" },
        { name: "Collab Space", image: "/img/partners/collabspace.png" },
        {
          name: "United Pangsinan ICT Council",
          image: "/img/partners/upict.png",
        },
        { name: "AEON Sprint Solutions", image: "/img/partners/aeon.jpg" },
      ],
      desc: "Industry partners driving innovation.",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(0);
  const currentCategory = partnerCategories[selectedCategory];

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
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#features" onClick={toggleMenu}>
            Features
          </a>
          <a href="#workflow" onClick={toggleMenu}>
            Workflow
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </nav>

        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </header>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: "url('/img/sillag-hero.png')" }}
      >
        <div className="hero-content">
          <div className="hero-badge">STARTUP CONSORTIUM IN REGION 1</div>

          <h1>
            Igniting <span className="highlight">Innovation,</span>
            <br />
            Empowering <span className="highlight">Startups</span>
          </h1>

          <p className="hero-subtitle">
            Sustainability, Innovation, Leadership, Linkages, Access and Growth
          </p>

          <p className="hero-description">
            A blockchain-powered ecosystem connecting TBIs, HEIs, LGUs, and
            Industry Partners. Upload research, mint NFTs, and grow innovation —
            with zero gas fees through our sponsored transaction system.
          </p>

          {/* <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">View Research</button>
          </div> */}
        </div>

        <div className="section-divider"></div>
      </section>
      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src="/img/about.png" alt="SILLAG" />
          </div>

          <div className="about-content">
            <h2>About SILLAG</h2>

            <p className="about-text">
              The <strong>SILLAG Region 1 Startup Consortium</strong> serves as
              a regional coordination and support platform that advances the
              objectives of{" "}
              <strong>
                DOST-PCIEERD Regional Startup Enablers for Ecosystem
                Development{" "}
              </strong>{" "}
              <em className="technopreneurship">(ReSEED) </em>
              Program in Region 1.
            </p>

            <p className="about-text">
              The consortium strengthens the startups pipeline, technology,
              commercialization, and ecosystem linkages by supporting
              <strong>Technology Business Incubators (TBIs)</strong>, startup
              enablers, and innovation-driven enterprises at various stages of
              development.
            </p>

            <div className="about-badges">
              <div className="badge-item">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Innovation</span>
              </div>

              <div className="badge-item">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 11l3 3L22 4" />
                </svg>
                <span>Mentorship</span>
              </div>

              <div className="badge-item">
                <svg
                  className="badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="16 12 12 8 8 12" />
                  <line x1="12" y1="16" x2="12" y2="8" />
                </svg>
                <span>Scalability</span>
              </div>
            </div>

            {/* <a href="#mission" className="learn-more">
              Learn more about our mission
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" /> */}
            {/* </svg>
            </a> */}
          </div>
        </div>
      </section>
      {/* <!-- Focus Areas Section --> */}
      <section className="focus-areas-section">
        <div className="focus-areas-container">
          <div className="focus-areas-header">
            <span className="focus-areas-badge">FOCUS AREAS</span>
            <h2>Target Beneficiaries</h2>
            <p>
              Empowering the key players in the innovation landscape of Region
              1.
            </p>
          </div>
          <div className="focus-areas-grid">
            <div className="focus-card">
              <div className="focus-card-icon">
                {/* <!-- School/Academic SVG --> */}
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="4"
                    y="10"
                    width="20"
                    height="10"
                    rx="2"
                    fill="none"
                  />
                  <path d="M14 4L4 10h20L14 4z" />
                  <path d="M14 4v6" stroke="#000000" />
                </svg>
              </div>
              <div>
                <h3>Innovation Ventures</h3>
                <p>Technology-based and innovation-driven startups.</p>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-card-icon">
                {/* <!-- Rocket SVG --> */}
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M6 22l4-4M18 22l-4-4M14 2c4 4 8 12 8 16a8 8 0 0 1-16 0c0-4 4-12 8-16z"
                    fill="none"
                  />
                  <circle cx="14" cy="14" r="2.5" fill="#000000" />
                </svg>
              </div>
              <div>
                <h3>Startup Enablers</h3>
                <p>TBIs and startup enablers within Region 1.</p>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-card-icon">
                {/* <!-- Award/Medal SVG --> */}
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="14" cy="11" r="6" />
                  <path d="M14 17v7M11 21h6" stroke="#000000" />
                </svg>
              </div>
              <div>
                <h3>Researchers</h3>
                <p>
                  HEI- and research-based innovators with commercialization
                  potential.
                </p>
              </div>
            </div>
            <div className="focus-card">
              <div className="focus-card-icon">
                {/* <!-- Globe SVG --> */}
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="14" cy="14" r="10" />
                  <ellipse cx="14" cy="14" rx="5" ry="10" stroke="#000000" />
                  <line x1="4" y1="14" x2="24" y2="14" stroke="#000000" />
                </svg>
              </div>
              <div>
                <h3>Incubation Targets</h3>
                <p>
                  Early-stage startups requiring incubation, mentoring, and
                  ecosystem support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* <!-- Sustainability & Roadmap Section --> */}
      <section className="sillag-core-section dot-grid">
        <div className="sillag-core-header">
          <h1 className="sillag-core-main-title">
            Program{" "}
            <span className="sillag-core-main-title-highlight">Framework</span>
          </h1>
          <p className="sillag-core-main-desc">
            Our comprehensive approach to building a resillient and sustainable
            innovation ecosystem involves a strategic partnerships and
            continuous development.
          </p>
        </div>
        <div className="sillag-core-visualizer">
          {/* SVG Branches */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            fill="none"
            viewBox="0 0 1200 800"
          >
            {/* Left Top */}
            <path
              d="M600 400 C 500 450, 200 270, 300 250"
              stroke="url(#grad-left)"
              strokeDasharray="8 8"
              strokeWidth="2"
            />
            {/* Left Bottom */}
            <path
              d="M600 400 C 500 450, 400 530, 300 500"
              stroke="url(#grad-left)"
              strokeDasharray="8 8"
              strokeWidth="2"
            />
            {/* Right Top */}
            <path
              d="M600 400 C 700 350, 800 270, 900 250"
              stroke="url(#grad-right)"
              strokeDasharray="8 8"
              strokeWidth="2"
            />
            {/* Right Middle */}
            <path
              d="M600 400 C 700 400, 800 400, 900 400"
              stroke="url(#grad-right)"
              strokeDasharray="8 8"
              strokeWidth="2"
            />
            {/* Right Bottom */}
            <path
              d="M600 400 C 700 450, 800 530, 900 550"
              stroke="url(#grad-right)"
              strokeDasharray="8 8"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="grad-left"
                x1="600"
                x2="300"
                y1="400"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#257bf4" />
                <stop offset="1" stopColor="#257bf4" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="grad-right"
                x1="600"
                x2="900"
                y1="400"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#257bf4" />
                <stop offset="1" stopColor="#257bf4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {/* Center Core */}
          <div className="sillag-core-center">
            <div className="sillag-core-main core-glow">
              <MdHub className="sillag-core-main-icon" />
              <h3>
                SILLAG
                <br />
                {/* <span>CORE</span> */}
              </h3>
            </div>
            <div className="sillag-core-orbital sillag-core-orbital1"></div>
            <div className="sillag-core-orbital sillag-core-orbital2"></div>
          </div>
          {/* Left: Sustainability */}
          <div className="sillag-core-left">
            <div className="sillag-core-label">
              <h2 className="sillag-core-title">
                <span className="sillag-core-title-line"></span>
                SUSTAINABILITY
              </h2>
              <p>Foundational Pillar</p>
            </div>
            <div className="glass-card sillag-core-card sillag-core-card-offset">
              <div className="sillag-core-card-row">
                <h4>Resource Collaboration</h4>
                <span className="sillag-core-card-icon">
                  <MdEco />
                </span>
              </div>
              <p>Leveraging LGU, HEI, and private sector resources.</p>
            </div>
            <div className="glass-card sillag-core-card">
              <div className="sillag-core-card-row">
                <h4>Institutional Continuity</h4>
                <span className="sillag-core-card-icon">
                  <MdAutoAwesomeMotion />
                </span>
              </div>
              <p>
                Ensuring Continuity of support beyond individual project
                lifecycles institutionalizing ecosystem coordinatioon at the
                regional level.
              </p>
            </div>
            {/* <div className="glass-card sillag-core-card sillag-core-card-offset">
              <div className="sillag-core-card-row">
                <h4>Social Equity</h4>
                <span className="sillag-core-card-icon">
                  {/* Replace with groups icon from react-icons/md or use a custom SVG */}
            {/* <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#257bf4"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="16" cy="8" r="3" />
                    <ellipse cx="12" cy="16" rx="7" ry="3" />
                  </svg>
                </span>
              </div>
              <p>
                Promoting inclusive growth and equitable opportunity
                distribution in the startup sector.
              </p>
            </div> */}
          </div>
          {/* Right: Key Activities */}
          <div className="sillag-core-right">
            <div className="sillag-core-label">
              <h2 className="sillag-core-title">
                KEY ACTIVITIES
                <span className="sillag-core-title-line"></span>
              </h2>
              <p>Growth Engine</p>
            </div>
            <div className="glass-card sillag-core-card sillag-core-card-offset">
              <div className="sillag-core-card-row">
                <span className="sillag-core-card-icon">
                  <MdRocketLaunch />
                </span>
                <h4>Institutional Continuity</h4>
              </div>
              <p>Startup and Enabler Capacity Building.</p>
            </div>
            <div className="glass-card sillag-core-card">
              <div className="sillag-core-card-row">
                <span className="sillag-core-card-icon">
                  <MdLockOpen />
                </span>
                <h4>Founder Mentorship</h4>
              </div>
              <p>
                Joint training programs, mentoring, and coaching for founders
                and TBI managers.
              </p>
            </div>
            <div className="glass-card sillag-core-card">
              <div className="sillag-core-card-row">
                <span className="sillag-core-card-icon">
                  <MdInsights />
                </span>
                <h4>Network Exchange</h4>
              </div>
              <p>
                Knowledge sharing and peer learning among ReSEED-supported
                enablers.
              </p>
            </div>
            {/* <div className="glass-card sillag-core-card sillag-core-card-offset">
              <div className="sillag-core-card-row">
                <span className="sillag-core-card-icon">
                  {/* Replace with handshake icon from react-icons/md or use a custom SVG */}
            {/* <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#257bf4"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 12l4 4 6-6 6 6 4-4" />
                  </svg>
                </span>
                <h4>Ecosystem Coordination</h4>
              </div>
              <p>
                Driving regional synchronization and collaborative stakeholder
                alignment.
              </p> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="collab-network-section">
        <div className="collab-network-header">
          <span className="collab-network-badge">
            <span className="material-symbols-outlined">groups</span>
            Collaborative Network
          </span>
          <h1 className="collab-network-title">
            Our Growing{" "}
            <span className="collab-network-title-highlight">Ecosystem</span>
          </h1>
          <p className="collab-network-desc">
            We connect startups with the right partners across industry,
            academe, and government to foster innovation and sustainable growth.
          </p>
        </div>
        <div className="collab-network-panel">
          <div className="collab-network-grid">
            {/* Partner Categories */}
            <div className="collab-network-categories">
              <h3 className="collab-network-categories-title">
                Partner Categories
              </h3>
              {partnerCategories.map((cat, idx) => {
                const isActive = selectedCategory === idx;

                return (
                  <button
                    key={cat.name}
                    className={`collab-network-tab${isActive ? " active" : ""}`}
                    onClick={() => setSelectedCategory(idx)}
                    type="button"
                  >
                    <div className="collab-network-tab-inner">
                      <span
                        className={`collab-network-tab-icon${isActive ? " active" : ""}`}
                      >
                        {cat.icon} {/* Use the icon from the object directly */}
                      </span>
                      <span className="collab-network-tab-label">
                        {cat.name}
                      </span>
                    </div>
                    <span className="collab-network-tab-count">
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Partner List */}
            <div className="collab-network-list-panel">
              <div className="collab-network-list-header">
                <div>
                  <h2 className="collab-network-list-title">
                    {currentCategory.name}
                  </h2>
                  <p className="collab-network-list-desc">
                    {currentCategory.desc}
                  </p>
                </div>
              </div>
              <div className="collab-network-list-grid">
                {currentCategory.partners.map((partner) => (
                  <div
                    className={`collab-network-partner-card${partner.name === "Join Network" ? " collab-network-partner-add" : ""}`}
                    key={partner.name}
                  >
                    <div className="collab-network-partner-icon">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h4 className="collab-network-partner-name">
                      {partner.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SHARED BACKGROUND AREA ===== */}
      <div className="features-bg">
        {/* ================= CORE FEATURES ================= */}
        <section id="features" className="section core-features">
          <h2 className="core-title">
            <span className="highlight-white">Zero-Cost Minting: </span>
            <span className="highlight">Blockchain Publishing Made Easy</span>
          </h2>

          <p className="core-description">
            Experience the future of academic publishing with zero gas fees. Our
            sponsored transaction system allows researchers to mint NFTs of
            their work seamlessly.
          </p>

          <div className="core-grid">
            <div className="core-card">
              <div className="core-card-content">
                <h4>Gas-Free Publishing</h4>
                <p>
                  Publish research without worrying about transaction costs or
                  complex crypto-wallets. We handle the heavy lifting.
                </p>
              </div>
              <div className="core-card-icon">
                <FiZap size={32} />
              </div>
            </div>

            <div className="core-card">
              <div className="core-card-content">
                <h4>Risk-Free</h4>
                <p>
                  Secure your intellectual property on-chain with military-grade
                  encryption and decentralized storage protocols.
                </p>
              </div>
              <div className="core-card-icon">
                <FiLock size={32} />
              </div>
            </div>

            <div className="core-card">
              <div className="core-card-content">
                <h4>Seamless Workflow</h4>
                <p>
                  Integrates directly with institutional repositories and
                  research portals for a frictionless experience.
                </p>
              </div>
              <div className="core-card-icon">
                <FiFileText size={32} />
              </div>
            </div>

            <div className="core-card">
              <div className="core-card-content">
                <h4>Transparent Tracking</h4>
                <p>
                  Real-time verification and impact tracking for every minted
                  publication. Full audit trails on-chain.
                </p>
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
            <h2>
              Platform <span className="highlight">Capabilities</span>
            </h2>
            <div className="cap-underline"></div>
            <p className="cap-intro">
              Empowering the Ilocos Region through cutting-edge blockchain
              technology, advanced data visualization, and automated research
              linking.
            </p>
          </div>

          <div className="cap-container">
            {/* Capability 1: Ecosystem Mapping */}
            <div
              className="cap-card"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.7) 40%, transparent), url('/img/1st.png')",
              }}
            >
              <div className="cap-card-content">
                <div className="cap-type">
                  <FiZap className="cap-type-icon" /> <span>GLOBAL IMPACT</span>
                </div>
                <h3>Ecosystem Mapping</h3>
                <p>
                  Visualize your innovation impact by connecting universities,
                  researchers, and startups across Region 1. Gain a bird's eye
                  view of the entire research landscape with our interactive
                  mapping tools.
                </p>
                <ul className="cap-list">
                  <li>
                    <FiAward /> University Scorecards
                  </li>
                  <li>
                    <FiAward /> Innovation Family Tree
                  </li>
                  <li>
                    <FiAward /> Impact Radar
                  </li>
                  <li>
                    <FiAward /> Official Endorsements
                  </li>
                </ul>
                {/* <button className="cap-btn">Learn more about Mapping →</button> */}
              </div>
            </div>

            {/* Capability 2: Automated Linking (Right Aligned) */}
            <div
              className="cap-card reverse"
              style={{
                backgroundImage:
                  "linear-gradient(to left, rgba(0,0,0,0.7) 40%, transparent), url('/img/2nd.png')",
              }}
            >
              <div className="cap-card-content">
                <div className="cap-type">
                  <FiZap className="cap-type-icon" />{" "}
                  <span>SMART DETECTION</span>
                </div>
                <h3>Automated Linking</h3>
                <p>
                  Smart domain detection connects researchers automatically. No
                  manual tagging required—our system identifies affiliations and
                  builds bridges between disciplines instantly.
                </p>
                <ul className="cap-list">
                  <li>
                    <FiAward /> Institutional Identity Verification
                  </li>
                  <li>
                    <FiAward /> Ecosystem Filtering
                  </li>
                  <li>
                    <FiAward /> Regional Visibility
                  </li>
                  <li>
                    <FiAward /> Innovation Mapping
                  </li>
                </ul>
                {/* <button className="cap-btn">Explore Smart Linking →</button> */}
              </div>
            </div>

            {/* Capability 3: Analytics & Reporting */}
            <div
              className="cap-card"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.7) 40%, transparent), url('/img/3rd.png')",
              }}
            >
              <div className="cap-card-content">
                <div className="cap-type">
                  <FiZap className="cap-type-icon" /> <span>DATA INSIGHTS</span>
                </div>
                <h3>Analytics & Reporting</h3>
                <p>
                  Generate reports and track research impact with interactive
                  dashboards. Visualize growth metrics and compliance status in
                  real-time, backed by blockchain transparency.
                </p>
                <ul className="cap-list">
                  <li>
                    <FiAward /> Gas Subsidy Transparency
                  </li>
                  <li>
                    <FiAward /> Research Output Visualization
                  </li>
                  <li>
                    <FiAward /> Privacy-First Innovation
                  </li>
                  <li>
                    <FiAward /> DOST-Compliant Reporting
                  </li>
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
              <p>
                Prove ownership and mint research outputs as NFTs. Secure your
                intellectual property on the blockchain.
              </p>
            </div>
            <div className="solution-card featured">
              <div className="featured-bar"></div>
              <div className="solution-icon-circle yellow">
                <FiTarget size={32} />
              </div>
              <h4>For Startup Coaches</h4>
              <p>
                Help startups tokenize and validate innovations. Provide expert
                guidance with data-backed insights.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon-circle">
                <FiTrendingUp size={32} />
              </div>
              <h4>For University Admins</h4>
              <p>
                Monitor ecosystem growth and research impact metrics. Manage
                institutional rankings and visibility effortlessly.
              </p>
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
                <p>
                  Researchers submit files with enterprise-grade access control
                  and encryption.
                </p>
              </div>
              <div className="workflow-card-icon">
                <FiLock size={32} />
              </div>
            </div>

            <div className="workflow-card-box">
              <div className="workflow-card-content">
                <h4>Sponsored Transactions</h4>
                <p>
                  Makerspace Innovhub sponsors blockchain fees, ensuring a
                  seamless user experience.
                </p>
              </div>
              <div className="workflow-card-icon">
                <FiZap size={32} />
              </div>
            </div>

            <div className="workflow-card-box">
              <div className="workflow-card-content">
                <h4>Mint & Store</h4>
                <p>
                  Files are securely stored on IPFS and minted as unique,
                  verifiable NFTs.
                </p>
              </div>
              <div className="workflow-card-icon">
                <FiFileText size={32} />
              </div>
            </div>

            <div className="workflow-card-box">
              <div className="workflow-card-content">
                <h4>Visualize Impact</h4>
                <p>
                  Interactive dashboards show real-time innovation growth and
                  research impact.
                </p>
              </div>
              <div className="workflow-card-icon">
                <FiBarChart2 size={32} />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section id="contact" className="collab-contact-section">
          <div className="collab-contact-container">
            {/* Main Dark Card */}
            <div className="collab-contact-card">
              <div className="collab-contact-left">
                <div className="collab-contact-badge-group">
                  <span className="collab-contact-badge-line"></span>
                  <span className="collab-contact-badge-text">
                    Join the Movement
                  </span>
                </div>
                <h2 className="collab-contact-title">
                  CALL FOR <br />
                  <span className="collab-contact-title-highlight">
                    COLLABORATION
                  </span>
                </h2>
                <p className="collab-contact-desc">
                  The SILLAG Region 1 Startup Consortium invites TBIs, HEIs,
                  LGUs, and industry partners to collaborate in strengthening
                  the regional startup ecosystem under the ReSEED Program.
                </p>
              </div>

              <div className="collab-contact-right">
                <div className="collab-contact-qr-wrapper">
                  <div className="collab-contact-qr-card">
                    <div className="collab-contact-qr-img-container">
                      {/* Replace with actual QR image */}
                      <img
                        src="img/partners/qr-code.png"
                        alt="QR Code"
                        className="collab-contact-qr-img"
                      />
                    </div>
                    <p className="collab-contact-qr-caption">SCAN TO PARTNER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom White Info Bar */}
            <div className="collab-contact-info-card">
              <div className="collab-contact-info-left">
                <span className="collab-contact-info-title">GET IN TOUCH</span>
                <p className="collab-contact-info-desc">
                  START A CONVERSATION WITH SILLAG
                </p>
              </div>

              <div className="collab-contact-info-links">
                <a
                  className="collab-contact-info-link"
                  href="mailto:sillag@region1.dost.gov.ph"
                >
                  <div className="collab-contact-info-icon">
                    <FiMail />
                  </div>
                  <div className="collab-contact-info-text">
                    <span className="collab-contact-info-label">Email Us</span>
                    <span className="collab-contact-info-value">
                      sillag@region1.dost.gov.ph
                    </span>
                  </div>
                </a>

                <a
                  className="collab-contact-info-link"
                  href="https://www.facebook.com/sillagregion1"
                >
                  <div className="collab-contact-info-icon">
                    <FiFacebook />
                  </div>
                  <div className="collab-contact-info-text">
                    <span className="collab-contact-info-label">Facebook</span>
                    <span className="collab-contact-info-value">
                      www.facebook.com/sillagregion1
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ================= FOOTER ================= */}
      <footer>© 2026 SILLAG System — Powered by Makerspace Innovhub OPC</footer>
    </div>
  );
}
