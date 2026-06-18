"use client";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ParticleBackground from "./components/ParticleBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import CredentialsSection from "./components/CredentialsSection";
import ThemeToggle from "./components/ThemeToggle";

export default function ProfilePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", position: "relative" }}>
      {/* Fixed particle canvas */}
      <ParticleBackground />

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Page sections */}
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CredentialsSection />
      <ContactSection />
    </main>
  );
}
