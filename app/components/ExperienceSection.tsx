"use client";
import { motion } from "framer-motion";
import { experience } from "../constant/data";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section style={{ position: "relative", zIndex: 2, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Career"
          title="Work Experience"
          subtitle="Companies and projects that shaped my craft over 7+ years."
        />

        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 15, top: 8, bottom: 8,
            width: 1,
            background: `linear-gradient(to bottom, var(--timeline-line), rgba(121,40,202,0.3), transparent)`,
          }} />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex", gap: 28,
                marginBottom: i < experience.length - 1 ? 48 : 0,
              }}
            >
              {/* Dot */}
              <div style={{ flexShrink: 0, marginTop: 4 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: "var(--cyan-subtle)",
                  border: "1px solid var(--border-glow)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 12px var(--cyan-bg)",
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "var(--cyan)",
                  }} />
                </div>
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "24px 28px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
                      {exp.role}
                    </h3>
                    <span style={{ fontSize: 13, color: "var(--cyan)", fontWeight: 600 }}>
                      {exp.company}
                    </span>
                    {exp.location && (
                      <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 2 }}>
                        {exp.location}
                      </div>
                    )}
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: 0.5,
                    color: "var(--text-dim)",
                    background: "var(--surface-hover)",
                    border: "1px solid var(--border)",
                    padding: "4px 12px", borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 16 }}>
                  {exp.description}
                </p>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11, fontWeight: 600,
                        padding: "3px 10px", borderRadius: 999,
                        background: "var(--cyan-bg)",
                        border: "1px solid var(--border-glow-subtle)",
                        color: "var(--cyan)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
