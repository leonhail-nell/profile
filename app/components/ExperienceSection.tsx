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
          subtitle="Companies and projects that shaped my craft over 6+ years."
        />

        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 15, top: 8, bottom: 8,
            width: 1,
            background: "linear-gradient(to bottom, rgba(0,212,255,0.5), rgba(121,40,202,0.3), transparent)",
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
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 12px rgba(0,212,255,0.2)",
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#00d4ff",
                  }} />
                </div>
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "24px 28px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e8eaff", marginBottom: 2 }}>
                      {exp.role}
                    </h3>
                    <span style={{ fontSize: 13, color: "#00d4ff", fontWeight: 600 }}>
                      {exp.company}
                    </span>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: 0.5,
                    color: "rgba(232,234,255,0.4)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "4px 12px", borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontSize: 14, color: "rgba(232,234,255,0.55)", lineHeight: 1.7, marginBottom: 16 }}>
                  {exp.description}
                </p>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11, fontWeight: 600,
                        padding: "3px 10px", borderRadius: 999,
                        background: "rgba(0,212,255,0.07)",
                        border: "1px solid rgba(0,212,255,0.15)",
                        color: "rgba(0,212,255,0.9)",
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
