"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal, stats } from "../constant/data";
import TiltCard from "./TiltCard";
import TypewriterText from "./TypewriterText";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 60px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Gradient blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(121,40,202,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, var(--cyan-bg) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 60,
        alignItems: "center",
        width: "100%",
        maxWidth: 1100,
      }}>
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          {personal.available && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px", borderRadius: 999,
                background: "rgba(62,207,142,0.1)",
                border: "1px solid rgba(62,207,142,0.25)",
                fontSize: 12, fontWeight: 600, color: "#3ecf8e",
                marginBottom: 24,
              }}
            >
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#3ecf8e",
                boxShadow: "0 0 0 3px rgba(62,207,142,0.25)",
              }} />
              Available for work
            </motion.div>
          )}

          <h1 style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.05,
            color: "var(--text)",
            marginBottom: 16,
          }}>
            {personal.name}
          </h1>

          <div style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 600,
            marginBottom: 24,
            minHeight: "1.4em",
          }}>
            <TypewriterText />
          </div>

          <p style={{
            fontSize: 16,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 480,
          }}>
            {personal.bio}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", borderRadius: 8,
                background: "linear-gradient(135deg, #00d4ff, #7928ca)",
                color: "#fff", fontWeight: 700, fontSize: 14,
                textDecoration: "none", boxShadow: "0 0 24px rgba(0,212,255,0.3)",
              }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", borderRadius: 8,
                background: "var(--surface)",
                border: "1px solid var(--border-hover)",
                color: "var(--text)", fontWeight: 700, fontSize: 14,
                textDecoration: "none",
                backdropFilter: "blur(10px)",
              }}
            >
              View GitHub
            </motion.a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--cyan)", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 4, letterSpacing: 0.5 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — 3D tilt card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <TiltCard>
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 400,
              aspectRatio: "3 / 4",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid var(--border-glow-subtle)",
              boxShadow: "0 0 0 1px var(--border-glow-subtle), 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 60px var(--cyan-bg)",
            }}>
              <Image
                src="/profile.jpg"
                alt="Leonhail Paypa"
                fill
                priority
                sizes="(max-width: 600px) 90vw, 400px"
                style={{ objectFit: "cover", objectPosition: "55% 25%", transform: "scale(1.12)" }}
              />
              {/* Overlay gradient — always dark for photo legibility */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 40%, rgba(2,2,10,0.85) 100%)",
              }} />
              {/* Name overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "24px 20px",
              }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                  {personal.name}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: 0.5 }}>
                  Frontend · Fullstack · AI
                </div>
              </div>
              {/* Cyan corner accent */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                width: 8, height: 8, borderRadius: "50%",
                background: "var(--cyan)",
                boxShadow: "0 0 0 4px var(--cyan-bg), 0 0 16px var(--cyan)",
              }} />
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{
          position: "absolute", bottom: 32, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "var(--text-dim)", fontSize: 11, letterSpacing: 2,
        }}
      >
        <span>SCROLL</span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, var(--cyan), transparent)",
        }} />
      </motion.div>
    </section>
  );
}
