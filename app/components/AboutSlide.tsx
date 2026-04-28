"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years" },
  { value: "40+", label: "Projects" },
  { value: "12", label: "Awards" },
];

const skills = ["React", "Next.js", "TypeScript", "Node", "Figma"];

export default function AboutSlide() {
  return (
    <Box>
      <Typography sx={{ fontSize: 10, fontWeight: 700, color: "rgba(0,0,0,0.5)", mb: 1.2, letterSpacing: 1.5 }}>
        ABOUT
      </Typography>

      <Typography sx={{ fontSize: 11, color: "rgba(0,0,0,0.75)", lineHeight: 1.5, mb: 1.5 }}>
        Designer-developer crafting interfaces with motion, depth, and a touch of magic.
      </Typography>

      <Box sx={{ display: "flex", gap: 0.8, mb: 1.5 }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            style={{ flex: 1 }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 2,
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }}>
                {s.value}
              </Typography>
              <Typography sx={{ fontSize: 9, color: "rgba(0,0,0,0.55)", mt: 0.2, letterSpacing: 0.5 }}>
                {s.label.toUpperCase()}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.04, duration: 0.25 }}
          >
            <Box
              sx={{
                px: 1.1,
                py: 0.4,
                borderRadius: 10,
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(0,0,0,0.08)",
                fontSize: 10,
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              {skill}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
