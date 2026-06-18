"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { skills, type Skill } from "../constant/data";
import SectionHeader from "./SectionHeader";

const CATEGORIES = ["All", "Frontend", "Backend", "Mobile", "AI"] as const;

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.02 }}
      style={{
        background: hovered ? "var(--surface-hover)" : "var(--surface)",
        border: `1px solid ${hovered ? "var(--border-glow-subtle)" : "var(--border)"}`,
        borderRadius: 16,
        padding: "20px 16px",
        cursor: "default",
        transition: "background 0.2s, border-color 0.2s",
        boxShadow: hovered ? "0 0 20px var(--cyan-bg)" : "none",
      }}
    >
      {/* Icon */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={skill.icon}
          alt={skill.name}
          width={32}
          height={32}
          style={{ filter: skill.invertOnDark ? "invert(1)" : "none", flexShrink: 0 }}
        />
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{skill.name}</span>
      </div>

      {/* Progress bar */}
      <div style={{
        height: 3, background: "var(--border)",
        borderRadius: 2, overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.05 + 0.2, ease: "easeOut" }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--cyan), var(--purple))",
            borderRadius: 2,
          }}
        />
      </div>
      <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 6, textAlign: "right" }}>
        {skill.level}%
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All"
    ? skills
    : skills.filter((s) => s.category === active);

  return (
    <section style={{
      position: "relative", zIndex: 2,
      padding: "100px 24px",
      background: `linear-gradient(180deg, transparent, var(--section-overlay) 20%, var(--section-overlay) 80%, transparent)`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills & Expertise"
          subtitle="A curated list of technologies I use daily to build fast, scalable, and beautiful products."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex", justifyContent: "center",
            gap: 8, marginBottom: 48, flexWrap: "wrap",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 20px", borderRadius: 999,
                fontSize: 12, fontWeight: 600,
                border: `1px solid ${active === cat ? "var(--border-glow)" : "var(--border-hover)"}`,
                background: active === cat ? "var(--cyan-subtle)" : "transparent",
                color: active === cat ? "var(--cyan)" : "var(--text-muted)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 12,
        }}>
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
