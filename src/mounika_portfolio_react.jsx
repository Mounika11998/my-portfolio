import React, { useCallback } from "react";
import { motion } from "framer-motion";

/* -------------------------
   Data: projects & skills
   ------------------------- */
const projects = [
  {
    title: "Dial112 — Crime Hotspot & FIR Analysis",
    desc:
      "Streamlit app: speech-to-text, NER, location resolution and interactive heatmaps for law enforcement.",
    link: "https://github.com/Mounika11998/Dial112",
    stack: ["Azure Speech", "SpaCy", "Streamlit", "Maps", "Python"],
    hackathon: "AI 4 Andhra Police Hackathon 2025",
  },
  {
    title: "ADITI — Credit Risk Management Platform",
    desc:
      "Full-stack dual-dashboard platform with psychometric scoring, loan classification and manual review workflow.",
    link: "#",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "Recharts"],
    hackathon: "FinShield Hackathon 2025",
  },
];

const skillsData = [
  {
    title: "Programming & Web",
    items: ["Python", "Java", "JavaScript", "C", "React.js", "Node.js", "REST APIs"],
  },
  {
    title: "Databases & DevOps",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Git"],
  },
];

/* -------------------------
   Motion variants
   ------------------------- */
const pageVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const skillsContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const skillCardVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  hover: { y: -6, transition: { duration: 0.18 } },
};

/* -------------------------
   Small UI helpers
   ------------------------- */
function SkillsCard({ title, items }) {
  return (
    <motion.div
      variants={skillCardVariant}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.15)] p-6 rounded-2xl shadow-md hover:shadow-[0_0_15px_#58C7F344] transition"
    >
      <h4 className="font-semibold text-[#58C7F3] mb-3">{title}</h4>
      <ul className="text-[#E6F1FF] text-sm list-disc list-inside space-y-1">
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </motion.div>
  );
}

/* -------------------------
   Main component
   ------------------------- */
export default function Portfolio() {
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariant}
      className="min-h-screen bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#1E2A47] text-[#E6F1FF]"
    >
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[rgba(10,25,47,0.8)] backdrop-blur-md border-b border-[rgba(88,199,243,0.15)]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollTo("top")}
                className="text-lg font-semibold text-[#58C7F3] hover:text-[#89E0FF] transition"
              >
                Mounika Vanipenta
              </button>
              <div className="hidden md:flex items-center gap-2">
                {["About", "Skills", "Projects", "Achievements"].map((label) => (
                  <button
                    key={label}
                    onClick={() =>
                      scrollTo(label.toLowerCase() + "-section")
                    }
                    className="text-sm text-[#E6F1FF] hover:text-[#58C7F3] px-3 py-2 rounded-md transition"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div id="top" className="pt-20 pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Header */}
          <header className="flex flex-col md:flex-row items-center justify-between py-10 gap-6">
            <div className="flex items-center gap-6">
              <div className="rounded-full p-1 bg-gradient-to-tr from-[#58C7F322] to-transparent">
                <img
                  src="/profile.jpg"
                  alt="Mounika Vanipenta - Profile"
                  className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-xl ring-4 ring-[rgba(88,199,243,0.25)]"
                  style={{ objectPosition: "50% 50%" }}
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-semibold text-[#58C7F3]">
                  Mounika Vanipenta
                </h1>
                <p className="mt-1 text-[#E6F1FF] opacity-90">
                  Full Stack Developer • Python Developer
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="mailto:mounikavanipenta95@gmail.com"
                    className="text-sm px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] hover:bg-[rgba(255,255,255,0.1)] transition"
                  >
                    mounikavanipenta95@gmail.com
                  </a>
                  <a
                    href="https://github.com/Mounika11998"
                    className="text-sm px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] hover:bg-[rgba(255,255,255,0.1)] transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mounika-vani-penta-00979128a/"
                    className="text-sm px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] hover:bg-[rgba(255,255,255,0.1)] transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* About */}
          <motion.section
            id="about-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className="mb-8"
          >
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] p-8 rounded-3xl shadow-md hover:shadow-[0_0_15px_#58C7F333] transition">
              <h2 className="text-2xl font-semibold text-[#58C7F3] mb-4">
                About Me
              </h2>
              <p className="text-[#E6F1FF] leading-relaxed text-sm opacity-90">
                I'm a passionate <b>Full Stack Developer</b> with a strong focus on <b>Python</b>. 
                I love building intelligent systems that combine data-driven insights with seamless, 
                user-friendly web experiences.
              </p>
              <p className="text-[#E6F1FF] leading-relaxed text-sm mt-4 opacity-90">
                Currently pursuing <b>B.Tech in Computer Science and Engineering (2022–2026)</b>, 
                focusing on Full Stack Development and Python. I aim to build efficient, scalable, 
                and user-friendly web applications that solve real-world problems.
              </p>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            id="skills-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-12"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2 text-[#58C7F3]">
                Skills
              </h2>
              <p className="text-sm text-[#E6F1FF] opacity-80">
                Core technologies I use — Full Stack Development.
              </p>
            </div>

            <motion.div
              variants={skillsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
            >
              {skillsData.map((s) => (
                <SkillsCard key={s.title} title={s.title} items={s.items} />
              ))}
            </motion.div>
          </motion.section>

          {/* Projects */}
          <motion.section
            id="projects-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#58C7F3]">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="relative pt-12 md:pt-14 bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] p-6 rounded-3xl shadow-md hover:shadow-[0_0_15px_#58C7F344] transition"
                >
                  {p.hackathon && (
                    <span className="absolute right-4 top-4 text-xs font-medium bg-[rgba(255,255,255,0.08)] text-[#89E0FF] px-3 py-1 rounded-full border border-[rgba(88,199,243,0.2)]">
                      🏆 {p.hackathon}
                    </span>
                  )}

                  <h3 className="font-semibold text-lg text-[#E6F1FF]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[#A8B2D1] text-sm leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[#E6F1FF] border border-[rgba(88,199,243,0.2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link && p.link !== "#" && (
                    <div className="mt-4">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[#58C7F3] font-medium hover:underline"
                      >
                        View on GitHub ↗
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            id="achievements-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] p-6 rounded-3xl shadow-md hover:shadow-[0_0_10px_#58C7F322] transition">
                <h2 className="text-2xl font-semibold mb-4 text-[#58C7F3]">
                  Achievements & Hackathons
                </h2>
                <ul className="mt-3 list-disc list-inside text-[#E6F1FF] opacity-90">
                  <li>AI 4 Andhra Police Hackathon 2025 — Dial112</li>
                  <li>FinShield Hackathon 2025 — Banking Solution</li>
                </ul>
              </div>

              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] p-6 rounded-3xl shadow-md hover:shadow-[0_0_10px_#58C7F322] transition">
                <h2 className="text-2xl font-semibold mb-4 text-[#58C7F3]">
                  Certifications
                </h2>
                <ul className="mt-3 list-disc list-inside text-[#E6F1FF] opacity-90">
                  <li>ReactJS – LinkedIn Learning</li>
                  <li>AI for Everyone Basics – EdX</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <footer className="mt-16 py-10 px-6 rounded-3xl bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] shadow-md hover:shadow-[0_0_10px_#58C7F322] flex flex-col md:flex-row items-center justify-between gap-4 transition">
            <div>
              <h4 className="font-semibold text-[#58C7F3]">
                Let's build something together
              </h4>
              <p className="text-sm text-[#E6F1FF] opacity-80">
                Available for internships and software development roles — Full-Stack Development focus.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:mounikavanipenta95@gmail.com"
                className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] text-[#E6F1FF] hover:bg-[rgba(255,255,255,0.1)] transition"
              >
                Email
              </a>
              <a
                href="https://github.com/Mounika11998"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(88,199,243,0.2)] text-[#E6F1FF] hover:bg-[rgba(255,255,255,0.1)] transition"
              >
                GitHub
              </a>
            </div>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}
