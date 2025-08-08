"use client";

import { Mail, Linkedin, Github, FileText } from "lucide-react";

const experiences = [
  {
    title: "Technical Program Manager | Security Engineer",
    company: "Holiday World, CO, USA",
    period: "Mar 2025 – Present",
    points: [
      "Building Holiday Channel’s security program from the ground up—developing ISO/NIST‑aligned policies, enforcing RBAC, and leading DevSecOps using GitHub Actions, Docker, and Terraform across Node.js/MongoDB microservices, reducing exploit risk by 40%.",
      "Managing AI, SEO, and DevOps onboarding across three product lines while overseeing secure releases on Cloudflare, Render & AWS with token lifecycle controls.",
      "Performing penetration testing with Burp Suite and Nmap, and driving GDPR/CCPA compliance using Cookiebot, asset monitoring, and sandboxing."
    ]
  },
  {
    title: "AI Security Intern",
    company: "Zummit Africa, Delaware, USA",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Performed end‑to‑end testing on Zummit’s GenAI‑integrated web platform—identified 10+ critical flaws including SQL injection and access control bypass, cutting risk exposure by 35%.",
      "Tuned SIEM rules in Wazuh for false positive reduction and researched AI product architecture; designed IAM and data control strategies to secure GenAI usage in production."
    ]
  },
  {
    title: "Senior Systems Engineer",
    company: "Cisco, Bengaluru",
    period: "Mar 2021 – Jul 2023",
    points: [
      "Secured Cisco’s Order Processing microservices (Java SpringBoot) handling 100K+ subscriptions/month by integrating SonarQube into Jenkins pipelines via Bitbucket, reducing production vulnerabilities by 25%.",
      "Conducted unit and fuzz testing to harden code across Duo’s secure SDLC and built IAM policies on Azure AD with OAuth, SAML, and Zero Trust models.",
      "Optimized CI/CD pipeline security using Terraform, Ansible, and PowerShell, reducing misconfigurations by 40%. Delivered monthly bug‑fix reports using PowerBI tracking critical vs. low‑priority issues."
    ]
  }
];

const projects = [
  {
    name: "PhishGuard",
    description:
      "Enhanced phishing detection rates by 40% through the implementation of honeypots and adaptive filtering algorithms, incorporating real‑time monitoring with Splunk for actionable threat analysis; contributed to the development of incident response playbooks to standardize mitigation processes."
  },
  {
    name: "Cloud Security Compliance Automation",
    description:
      "Developed Infrastructure as Code scripts using Terraform to automate cloud security policy enforcement, ensuring continuous compliance with NIST 800‑53."
  }
];

const skills = [
  "Python",
  "Java",
  "SQL",
  "Splunk, Datadog & Wazuh",
  "IAM & Active Directory",
  "Cloud Security",
  "Firewall & Networking (TCP/IP, DNS, VPN, SSL/TLS)",
  "Encryption",
  "PowerShell & Python Scripting",
  "Virtualization & Containers",
  "Penetration Testing",
  "Terraform & Ansible",
  "Threat Hunting (OSINT, MITRE ATT&CK)",
  "Data Analysis & Log Parsing"
];

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Aayush Pandey</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Cybersecurity Engineer &amp; Program Manager
        </p>
        <p className="text-lg leading-relaxed">
          Cybersecurity engineer with hands‑on experience securing
          microservices in Cisco’s enterprise systems—reduced production
          vulnerabilities by 25% via SDLC hardening, IAM design, and CI/CD
          controls. Specialized in cloud and on‑prem security, red/blue team
          synergy, and ISO/NIST‑aligned compliance. Proven ability to
          translate technical risk into action, automate enforcement, and
          drive measurable improvements across high‑scale infrastructures.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a
            href="mailto:aayushcybersec@gmail.com"
            className="flex items-center gap-1 underline underline-offset-4"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href="#"
            className="flex items-center gap-1 underline underline-offset-4"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-1 underline underline-offset-4"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-1 underline underline-offset-4"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </header>

      {/* Experience section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold">
                {exp.title} — <span className="font-normal">{exp.company}</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                {exp.period}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-base leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          {projects.map((proj, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold">{proj.name}</h3>
              <p className="leading-relaxed">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
