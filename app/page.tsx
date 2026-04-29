"use client";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";

import { ContentCard } from "./components/ContentCard.component";
import { ProfileCard } from "./components/ProfileCard.component";
import { useColorMode } from "./ThemeContext";

export default function ProfilePage() {
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2.5, sm: 4, md: 6 },
        overflow: "hidden",
        background: isDark
          ? "radial-gradient(ellipse at top left, #1e1b17 0%, #161310 50%, #0f0e0b 100%)"
          : "radial-gradient(ellipse at top left, #f4f1ec 0%, #ebe7df 50%, #ddd6cb 100%)",
        transition: "background 0.4s ease",
      }}
    >
      {/* Dark / Light mode toggle — fixed top-right */}
      <IconButton
        onClick={toggleColorMode}
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 9999,
          width: 40,
          height: 40,
          background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: isDark
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(0,0,0,0.09)",
          color: isDark ? "#e8e3db" : "#1a1a1a",
          transition: "all 0.25s ease",
          "&:hover": {
            background: isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.1)",
            transform: "scale(1.05)",
          },
        }}
      >
        <motion.div
          key={mode}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isDark ? (
            <LightModeIcon sx={{ fontSize: 18 }} />
          ) : (
            <DarkModeIcon sx={{ fontSize: 18 }} />
          )}
        </motion.div>
      </IconButton>

      {/* Single accent — soft tonal blob top-right */}
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(100,80,50,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(180,160,130,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          display: { xs: "none", sm: "block" },
          transition: "background 0.4s ease",
        }}
      />

      {/* Main container — proper grid */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: 440, sm: 720, md: 960, lg: 1100 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 0.85fr) minmax(0, 1fr)",
          },
          gap: { xs: 3, md: 5, lg: 6 },
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* LEFT — Portrait card */}
        <ProfileCard isDark={isDark} />

        {/* RIGHT — Content panel */}
        <ContentCard isDark={isDark} />
      </Box>
    </Box>
  );
}
