"use client";
import { motion } from "framer-motion";
import { testimonials } from "../constant/data";
import SectionHeader from "./SectionHeader";

export default function TestimonialsSection() {
  return (
    <section style={{ position: "relative", zIndex: 2, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Social Proof"
          title="What People Say"
          subtitle="Feedback from clients and colleagues I've worked with."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle top glow accent */}
              <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%",
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)",
              }} />

              {/* Quote mark */}
              <div style={{
                fontSize: 56, lineHeight: 1, color: "rgba(0,212,255,0.15)",
                fontFamily: "Georgia, serif",
                marginBottom: 8, marginTop: -8,
              }}>
                "
              </div>

              <p style={{
                fontSize: 14, lineHeight: 1.75,
                color: "rgba(232,234,255,0.7)",
                marginBottom: 28,
                fontStyle: "italic",
              }}>
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "linear-gradient(135deg, #00d4ff, #7928ca)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0,
                }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#e8eaff" }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(232,234,255,0.4)" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
