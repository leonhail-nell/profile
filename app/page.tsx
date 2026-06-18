"use client";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ParticleBackground from "./components/ParticleBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function ProfilePage() {
  return (
    <main style={{ background: "#02020a", minHeight: "100vh", position: "relative" }}>
      {/* Fixed particle canvas */}
      <ParticleBackground />

      {/* Page sections */}
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
