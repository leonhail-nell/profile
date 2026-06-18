"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "../constant/data";
import SectionHeader from "./SectionHeader";

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(project)}
      style={{
        background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        transition: "background 0.25s, border-color 0.25s",
        boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.05)" : "0 10px 40px rgba(0,0,0,0.3)",
      }}
    >
      {/* Preview area */}
      <div style={{
        height: 200, position: "relative", overflow: "hidden",
        background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
      }}>
        {project.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.photo}
            alt={project.title}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16,
              background: project.color,
              opacity: 0.8,
              boxShadow: `0 0 40px ${project.color}66`,
            }} />
          </div>
        )}
        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{
            position: "absolute", inset: 0,
            background: "rgba(2,2,10,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "#00d4ff", letterSpacing: 1.5,
          }}
        >
          VIEW PROJECT →
        </motion.div>
      </div>

      {/* Info */}
      <div style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e8eaff" }}>{project.title}</h3>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 1,
            color: project.color,
            background: `${project.color}18`,
            border: `1px solid ${project.color}30`,
            padding: "3px 10px", borderRadius: 999,
          }}>
            {project.tag}
          </span>
        </div>
        <p style={{ fontSize: 13, color: "rgba(232,234,255,0.5)", lineHeight: 1.6, marginBottom: 16 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontSize: 10, fontWeight: 600,
              padding: "2px 8px", borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(232,234,255,0.5)",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Inline lightweight modal (keeps it self-contained)
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(2,2,10,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "rgba(8,8,20,0.98)",
          border: "1px solid rgba(0,212,255,0.15)",
          borderRadius: 20,
          overflow: "hidden",
          width: "100%", maxWidth: 780,
          boxShadow: "0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(0,212,255,0.05)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: project.color, opacity: 0.9 }} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#e8eaff" }}>{project.title}</div>
              <div style={{ fontSize: 10, color: "rgba(232,234,255,0.4)", marginTop: 1 }}>{project.tag}</div>
            </div>
          </div>
          <button onClick={onClose} style={{
            width: 30, height: 30, borderRadius: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(232,234,255,0.6)",
            cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center",
          }}>✕</button>
        </div>

        {/* Media */}
        {project.video ? (
          <div style={{ margin: "0 24px", borderRadius: 12, overflow: "hidden", background: "#000" }}>
            <video src={project.video} controls playsInline style={{ width: "100%", maxHeight: 340, display: "block", objectFit: "contain" }} />
          </div>
        ) : project.photo ? (
          <div style={{ margin: "0 24px", borderRadius: 12, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.photo} alt={project.title} style={{ width: "100%", maxHeight: 340, objectFit: "cover", objectPosition: "top", display: "block" }} />
          </div>
        ) : null}

        {/* Links */}
        {(project.github || project.web) && (
          <div style={{ display: "flex", gap: 12, padding: "20px 24px" }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                gap: 8, padding: "10px", borderRadius: 10,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                color: "#e8eaff", textDecoration: "none", fontSize: 13, fontWeight: 600,
              }}>
                GitHub
              </a>
            )}
            {project.web && (
              <a href={project.web} target="_blank" rel="noopener noreferrer" style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                gap: 8, padding: "10px", borderRadius: 10,
                background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(121,40,202,0.15))",
                border: "1px solid rgba(0,212,255,0.2)",
                color: "#00d4ff", textDecoration: "none", fontSize: 13, fontWeight: 600,
              }}>
                Live Site →
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section style={{
      position: "relative", zIndex: 2,
      padding: "100px 24px",
      background: "linear-gradient(180deg, transparent, rgba(4,4,14,0.5) 20%, rgba(4,4,14,0.5) 80%, transparent)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of work I'm proud of — click any card to see more."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
