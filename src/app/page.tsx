"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Homepage for the cybersecurity TPM portfolio.
 *
 * This page includes a full set of sections—including a hero,
 * about section, skills grid, career timeline, projects, certifications,
 * testimonials, FAQ, and contact—along with subtle scroll animations via AOS.
 *
 * It serves as the main landing page for the portfolio and exports
 * a React component as the default export. The component initializes AOS
 * during mount to activate animations on scroll.
 */
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-gray-800 min-h-screen font-inter scroll-smooth">
      {/* Header navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Aayush Pandey</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-600">
            Skills
          </a>
          <a href="#experience" className="hover:text-indigo-600">
            Experience
          </a>
          <a href="#projects" className="hover:text-indigo-600">
            Projects
          </a>
          <a href="#certifications" className="hover:text-indigo-600">
            Certifications
          </a>
          <a href="#testimonials" className="hover:text-indigo-600">
            Praise
          </a>
          <a href="#faq" className="hover:text-indigo-600">
            FAQ
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero section */}
      <section
        className="text-center py-24 px-6 bg-gradient-to-tr from-indigo-100 to-white"
        data-aos="fade-up"
      >
        <img
          src="/images/headshot-placeholder.png"
          alt="Aayush Pandey"
          className="mx-auto w-40 h-40 rounded-full shadow-xl border-4 border-indigo-400 mb-6"
        />
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Cybersecurity TPM &amp; AI Strategist
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Bridging DevSecOps, AI security, SEO automation, and data governance
          to secure and scale digital systems.
        </p>
        <a
          href="/files/AayushPandey_Resume.pdf"
          className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold"
          download
        >
          Download Resume
        </a>
      </section>

      {/* About Me */}
      <section
        id="about"
        className="px-6 py-16 max-w-5xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-6">About Me</h3>
        <p className="text-md text-gray-700 leading-relaxed">
          From tech sales at WhiteHat Jr to securing enterprise systems at Cisco
          and leading cross-functional cybersecurity, DevOps, and AI teams at
          Holiday Channel — my journey reflects depth, grit, and strategy. As a
          TPM and cybersecurity analyst, I build secure CI/CD, lead product
          development (like Recipe Scalar), and implement compliance using
          ISO/NIST/PCI. I believe in leadership through action, secure-by-design
          thinking, and continuous innovation.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 py-16 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">
          Skills &amp; Tools
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="bg-white p-4 rounded-xl shadow-md">
            Cloud Security: AWS, Cloudflare, Render
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            Infrastructure as Code: Terraform, GitHub Actions
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            SIEM + Monitoring: Splunk, Wazuh
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            Secure DevOps: SonarQube, RBAC, CI/CD automation
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            AI Security: OpenAI agents, NLP pipelines, prompt security
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            Data Engineering: Spark, ETL, KPI dashboards
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            Frontend SEO Automation: Schema, sitemap, indexing APIs
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            Soft Skills: Strategic planning, team mentoring, agile TPM
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-6 py-16 bg-white max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">
          Career Timeline
        </h3>
        <div className="space-y-10 border-l-4 border-indigo-300 pl-6">
          <div>
            <h4 className="text-xl font-semibold">
              Holiday Channel – Cybersecurity TPM
            </h4>
            <p className="text-sm text-gray-500">2025 – Present | USA</p>
            <ul className="list-disc text-gray-700 mt-2 pl-5 space-y-1">
              <li>
                Reduced security bug resolution time by 20% through SonarQube +
                CI automation
              </li>
              <li>
                Implemented ISMS policies, RBAC, GDPR Cookiebot, and token
                lifecycle controls
              </li>
              <li>
                Led 30+ engineers across AI, Cyber, SEO, and DevOps workflows
              </li>
              <li>
                Built NLP agents for holiday recipe recommendation + vendor gift
                suggestion
              </li>
              <li>
                Automated SEO sitemaps, schema tagging, and GA4 via AWS Lambda
              </li>
              <li>
                Conducted monthly pentests, hardened authentication, audited PCI
                DSS data flows
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">
              Zummit Africa – AI Security Intern
            </h4>
            <p className="text-sm text-gray-500">2024 | Delaware, USA</p>
            <p className="text-gray-700 mt-2">
              Found 10+ critical vulnerabilities in GenAI platform; developed IAM
              model &amp; secure ML pipeline design.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">
              Cisco @ Infosys – Sr. Systems Engineer
            </h4>
            <p className="text-sm text-gray-500">2021 – 2023 | India</p>
            <p className="text-gray-700 mt-2">
              Reduced subscription infra vulnerabilities by 25% via SonarQube +
              Jenkins; implemented secure IAM in Azure AD.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">WhiteHat Jr – Sales Manager</h4>
            <p className="text-sm text-gray-500">2020 | India</p>
            <p className="text-gray-700 mt-2">
              Started in tech sales; later pivoted to cybersecurity and enterprise
              tech.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 py-16 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-10">
          Highlighted Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-indigo-500">
            <h4 className="text-lg font-semibold">
              PhishGuard – AI Phishing Detection
            </h4>
            <p className="text-sm text-gray-700 mt-2">
              Honeypot + heuristics + Splunk-based phishing scanner with
              automated threat response playbooks.
            </p>
            <a
              href="https://github.com/LuciferAsh98/CybersecurityProjects/tree/main/Tools/AutomationScripts/PhishGaurd%20-%20Phishing%20Scanner"
              className="text-indigo-600 text-sm mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-400">
            <h4 className="text-lg font-semibold">Recipe Scalar – Holiday AI Agent</h4>
            <p className="text-sm text-gray-700 mt-2">
              NLP-based holiday recommender using Spark + OpenAI, auto-tagging
              via AWS scripts, and secure recipe flow compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="px-6 py-16 bg-indigo-50 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-8">
          Certifications
        </h3>
        <ul className="grid md:grid-cols-2 gap-4 text-sm text-indigo-700">
          <li>
            <a
              href="http://verify.comptia.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CompTIA Security+
            </a>
          </li>
          <li>
            <a
              href="https://coursera.org/verify/professional-cert/M2ADKQPH2K9C"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Cloud Practitioner
            </a>
          </li>
          <li>CompTIA CySA+ (Ongoing)</li>
          <li>IBM &amp; Google Cybersecurity, GenAI for Security</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="px-6 py-16 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-8">
          Praise &amp; Testimonials
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              “Aayush turned our security chaos into a clean, policy-driven, scalable
              DevSecOps framework. Absolutely dependable.”
            </p>
            <p className="mt-2 text-sm font-semibold text-indigo-700">
              — Reesa B., CEO, Holiday Channel
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              “He owns the stack — from IAM to SEO schema to AI. You rarely find a
              TPM who builds and secures at the same time.”
            </p>
            <p className="mt-2 text-sm font-semibold text-indigo-700">
              — Krishna V., CTO
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="px-6 py-16 max-w-5xl mx-auto"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-6">
          Quick FAQ
        </h3>
        <div className="space-y-6 text-gray-700">
          <div>
            <h4 className="text-lg font-semibold">
              🔐 Do you specialize in compliance?
            </h4>
            <p>
              Yes — ISO 27001, NIST CSF, PCI DSS, GDPR, and full ISMS setup are
              part of my Holiday Channel portfolio.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">🧠 Can you lead technical teams?</h4>
            <p>
              I currently lead 30+ engineers across Cyber, SEO, AI, and DevOps —
              while owning the TPM roadmap.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">🧰 Do you write code?</h4>
            <p>
              From scraping pipelines and NLP flows to Terraform security policy
              enforcement — 100% hands-on.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-20 text-center"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-indigo-700 mb-4">
          Hire Me / Collaborate
        </h3>
        <p className="text-gray-600 mb-8">
          For freelance cybersecurity consulting, penetration testing, TPM
          advisory, or full-time opportunities.
        </p>
        <a
          href="mailto:aayushcybersec@gmail.com"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold"
        >
          Email Me
        </a>
        <div className="mt-4">
          <a
            href="https://calendly.com/aayushcybersec/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-600"
          >
            Book a Call
          </a>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500 border-t">
        © 2025 Aayush Pandey • Secure. Scale. Succeed. • Built with ☕ and 💡
      </footer>
    </div>
  );
}