"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { personal } from "../constant/data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{
      position: "relative", zIndex: 2,
      padding: "100px 24px 120px",
      textAlign: "center",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(121,40,202,0.12) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#00d4ff", marginBottom: 16 }}
        >
          GET IN TOUCH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900, letterSpacing: -2, lineHeight: 1.05,
            background: "linear-gradient(135deg, #e8eaff 0%, rgba(232,234,255,0.6) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", marginBottom: 20,
          }}
        >
          Let's Build<br />Something Great
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ fontSize: 16, color: "rgba(232,234,255,0.5)", lineHeight: 1.7, marginBottom: 48 }}
        >
          I'm currently available for freelance work and full-time opportunities.
          If you have a project in mind, I'd love to hear about it.
        </motion.p>

        {/* Email copy button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCopy}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 32px", borderRadius: 12,
            background: copied
              ? "rgba(62,207,142,0.15)"
              : "rgba(0,212,255,0.08)",
            border: `1px solid ${copied ? "rgba(62,207,142,0.3)" : "rgba(0,212,255,0.25)"}`,
            color: copied ? "#3ecf8e" : "#00d4ff",
            fontSize: 15, fontWeight: 700, cursor: "pointer",
            transition: "all 0.2s",
            marginBottom: 40,
            boxShadow: copied
              ? "0 0 20px rgba(62,207,142,0.15)"
              : "0 0 20px rgba(0,212,255,0.1)",
          }}
        >
          {copied ? "✓ Copied!" : personal.email}
          <span style={{ fontSize: 11, opacity: 0.6 }}>{copied ? "" : "click to copy"}</span>
        </motion.button>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          style={{ display: "flex", justifyContent: "center", gap: 16 }}
        >
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Twitter", href: personal.twitter },
          ].map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: "#00d4ff" }}
              style={{
                fontSize: 13, fontWeight: 600,
                color: "rgba(232,234,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
                padding: "8px 16px",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{
          marginTop: 80, fontSize: 12,
          color: "rgba(232,234,255,0.2)",
          letterSpacing: 0.5,
        }}
      >
        Built with Next.js · MUI · Framer Motion
      </motion.p>
    </section>
  );
}
