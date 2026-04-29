"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Skills, Status } from "../constant/profile";

export default function AboutSlide() {
  const theme = useTheme();
  const d = theme.palette.mode === "dark";

  return (
    <Box>
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 700,
          color: d ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
          mb: 1.2,
          letterSpacing: 1.5,
        }}
      >
        ABOUT
      </Typography>

      <Typography
        sx={{
          fontSize: 11,
          color: d ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.75)",
          lineHeight: 1.5,
          mb: 1.5,
        }}
      >
        Designer-developer crafting interfaces with motion, depth, and a touch of magic.
      </Typography>

      <Box sx={{ display: "flex", gap: 0.8, mb: 1.5 }}>
        {Status.map((s, i) => (
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
                background: d ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.6)",
                backdropFilter: "blur(20px)",
                border: d
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: d ? "#e8e3db" : "#1a1a1a",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: 9,
                  color: d ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.55)",
                  mt: 0.2,
                  letterSpacing: 0.5,
                }}
              >
                {s.label.toUpperCase()}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
        {Skills.map((skill, i) => (
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
                background: d ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.5)",
                border: d
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.08)",
                fontSize: 10,
                fontWeight: 600,
                color: d ? "#e8e3db" : "#1a1a1a",
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
