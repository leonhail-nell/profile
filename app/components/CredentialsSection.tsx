"use client";
import { motion } from "framer-motion";
import { certifications, education } from "../constant/data";
import SectionHeader from "./SectionHeader";

function GradCapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="var(--cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="var(--cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="var(--cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

// Issuer logo colours for a bit of personality
const ISSUER_COLORS: Record<string, string> = {
  IBM: "#0f62fe",
  HackerRank: "#2ec866",
};

export default function CredentialsSection() {
  return (
    <section style={{ position: "relative", zIndex: 2, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Credentials"
          title="Education & Certifications"
          subtitle="Academic background and verified achievements that back up my craft."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
          alignItems: "start",
        }}>

          {/* ── Education card ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "28px 28px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, var(--cyan), var(--purple))",
            }} />

            {/* Icon + label */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "var(--cyan-bg)",
                border: "1px solid var(--border-glow-subtle)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <GradCapIcon />
              </div>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: 2,
                color: "var(--cyan)", textTransform: "uppercase",
              }}>
                Education
              </span>
            </div>

            <h3 style={{
              fontSize: 17, fontWeight: 700,
              color: "var(--text)", lineHeight: 1.35,
              marginBottom: 6,
            }}>
              {education.degree}
            </h3>
            <div style={{ fontSize: 14, color: "var(--cyan)", fontWeight: 600, marginBottom: 4 }}>
              {education.school}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-dim)", marginBottom: 12 }}>
              {education.location}
            </div>
            <span style={{
              display: "inline-block",
              fontSize: 11, fontWeight: 600,
              padding: "3px 12px", borderRadius: 999,
              background: "var(--surface-hover)",
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
            }}>
              {education.period}
            </span>
          </motion.div>

          {/* ── Open-source card ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "28px 28px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, #f59e0b, var(--cyan))",
            }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "var(--cyan-bg)",
                border: "1px solid var(--border-glow-subtle)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <PackageIcon />
              </div>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: 2,
                color: "var(--cyan)", textTransform: "uppercase",
              }}>
                Open Source
              </span>
            </div>

            <h3 style={{
              fontSize: 17, fontWeight: 700,
              color: "var(--text)", lineHeight: 1.35,
              marginBottom: 6,
            }}>
              prompt-cache-optimizer
            </h3>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#f59e0b", marginBottom: 8 }}>
              Published npm Package · v0.4.0
            </div>
            <p style={{
              fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65,
              marginBottom: 16,
            }}>
              Drop-in wrapper for Claude, OpenAI &amp; Gemini SDKs that measures cache hit rates,
              surfaces real dollar savings, and auto-places cache_control breakpoints.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <a
                href="https://npmjs.com/package/prompt-cache-optimizer"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 11, fontWeight: 700,
                  padding: "5px 14px", borderRadius: 999,
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  color: "#f59e0b",
                  textDecoration: "none",
                }}
              >
                npm ↗
              </a>
              <a
                href="https://github.com/leonhail-nell/prompt-cache-optimizer"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 11, fontWeight: 700,
                  padding: "5px 14px", borderRadius: 999,
                  background: "var(--surface-hover)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>

          {/* ── Certifications ───────────────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {certifications.map((cert, i) => {
              const color = ISSUER_COLORS[cert.issuer] ?? "var(--cyan)";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 14,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "18px 20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Left colored stripe */}
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: 3,
                    background: color,
                    borderRadius: "16px 0 0 16px",
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginLeft: 6,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 13, fontWeight: 700, color: "var(--text)",
                      lineHeight: 1.4, marginBottom: 4,
                    }}>
                      {cert.name}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700,
                        color: color,
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        padding: "2px 8px", borderRadius: 999,
                      }}>
                        {cert.issuer}
                      </span>
                      <span style={{ fontSize: 11, color: "var(--text-dim)" }}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
