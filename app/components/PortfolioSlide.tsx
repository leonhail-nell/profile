"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const projects = [
  { title: "Glass Dashboard", tag: "Next.js · MUI", color: "#e8c5a0" },
  { title: "AI Profile Builder", tag: "TypeScript · OpenAI", color: "#c5d4e8" },
  { title: "Motion Studio", tag: "Framer · WebGL", color: "#d4c5e8" },
];

export default function PortfolioSlide() {
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
        FEATURED WORK
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                p: 1,
                borderRadius: 2.5,
                background: d ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.6)",
                backdropFilter: "blur(20px)",
                border: d
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.06)",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.25s ease",
                "&:hover": {
                  background: d ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.85)",
                  transform: "translateX(2px)",
                },
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1.5,
                  bgcolor: p.color,
                  flexShrink: 0,
                  opacity: d ? 0.85 : 1,
                }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: d ? "#e8e3db" : "#1a1a1a",
                    lineHeight: 1.1,
                  }}
                >
                  {p.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 10,
                    color: d ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.55)",
                    mt: 0.2,
                  }}
                >
                  {p.tag}
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: 14, color: d ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}
              >
                →
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
