"use client";
import Box from "@mui/material/Box";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Skills, Status } from "../constant/profile";
import { shadows } from "../constant/shadows";

const GlassTooltip = styled(({ className, ...props }: React.ComponentProps<typeof Tooltip>) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background:
      theme.palette.mode === "dark"
        ? "rgba(22,19,16,0.96)"
        : "rgba(255,255,255,0.96)",
    backdropFilter: "blur(24px)",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.08)",
    borderRadius: 10,
    boxShadow:
      theme.palette.mode === "dark"
        ? shadows.dark.tooltip
        : shadows.light.tooltip,
    padding: "8px 12px",
    maxWidth: 180,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color:
      theme.palette.mode === "dark"
        ? "rgba(22,19,16,0.96)"
        : "rgba(255,255,255,0.96)",
  },
}));

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

      {/* Stats */}
      <Box sx={{ display: "flex", gap: 0.8, mb: 1.8 }}>
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
                sx={{ fontSize: 18, fontWeight: 800, color: d ? "#e8e3db" : "#1a1a1a", lineHeight: 1 }}
              >
                {s.value}
              </Typography>
              <Typography
                sx={{ fontSize: 9, color: d ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.55)", mt: 0.2, letterSpacing: 0.5 }}
              >
                {s.label.toUpperCase()}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Skill icon grid */}
      <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
        {Skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.25, ease: "easeOut" }}
          >
            <GlassTooltip
              placement="top"
              arrow
              title={
                <Box>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: d ? "#e8e3db" : "#1a1a1a",
                      lineHeight: 1.2,
                    }}
                  >
                    {skill.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 10,
                      color: d ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)",
                      mt: 0.3,
                      lineHeight: 1.3,
                    }}
                  >
                    {skill.description}
                  </Typography>
                </Box>
              }
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  background: d ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(20px)",
                  border: d
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid rgba(0,0,0,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px) scale(1.08)",
                    background: d ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.9)",
                    boxShadow: d ? shadows.dark.iconHover : shadows.light.iconHover,
                  },
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={26}
                  height={26}
                  style={{
                    filter: skill.invertOnDark && d ? "invert(1)" : "none",
                    display: "block",
                  }}
                />
              </Box>
            </GlassTooltip>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
