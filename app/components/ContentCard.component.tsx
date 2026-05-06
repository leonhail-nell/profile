"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ProfileSlides } from "../constant/profile";
import { getShadows } from "../constant/shadows";

export const ContentCard = ({ isDark = false }: { isDark?: boolean }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sh = getShadows(isDark);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Box
        sx={{
          background: isDark ? "rgba(30,27,22,0.75)" : "rgba(255,255,255,0.5)",
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          border: isDark
            ? "1px solid rgba(255,255,255,0.09)"
            : "1px solid rgba(255,255,255,0.7)",
          borderRadius: { xs: 4, md: 5 },
          p: { xs: 2.5, md: 3.5 },
          boxShadow: sh.panel,
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Header — eyebrow + small stat */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
            }}
          >
            PROFILE
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#3ecf8e",
                boxShadow: "0 0 0 3px rgba(62,207,142,0.2)",
              }}
            />
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 600,
                color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)",
              }}
            >
              Available for work
            </Typography>
          </Box>
        </Box>

        {/* Bio */}
        <Typography
          sx={{
            fontSize: { xs: 14, md: 15 },
            color: isDark ? "rgba(255,255,255,0.78)" : "rgba(0,0,0,0.78)",
            lineHeight: 1.6,
            mb: 3,
            fontWeight: 400,
          }}
        >
          Experienced Web Developer with a demonstrated history of working in
          the computer software industry. Skilled in Vue.js, React.js, Computer
          Literacy, PHP, HTML, and Laravel. Strong engineering professional with
          a bachelor of science in information technology focused in Computer
          Programming.
        </Typography>

        {/* Tab navigation */}
        <Box
          sx={{
            display: "flex",
            gap: 0.4,
            mb: 2.5,
            p: 0.4,
            background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
            borderRadius: 2,
            width: "100%",
          }}
        >
          {ProfileSlides.map((s, i) => (
            <Box
              key={s.key}
              onClick={() => setActiveSlide(i)}
              sx={{
                px: { xs: 1.6, md: 2 },
                py: 0.7,
                borderRadius: 1.5,
                fontSize: { xs: 11, md: 12 },
                fontWeight: 600,
                cursor: "pointer",
                color:
                  activeSlide === i
                    ? "#fff"
                    : isDark
                      ? "rgba(255,255,255,0.55)"
                      : "rgba(0,0,0,0.6)",
                bgcolor:
                  activeSlide === i
                    ? isDark
                      ? "rgba(255,255,255,0.15)"
                      : "#1a1a1a"
                    : "transparent",
                transition: "all 0.25s ease",
                "&:hover":
                  activeSlide !== i
                    ? { color: isDark ? "#fff" : "#1a1a1a" }
                    : {},
              }}
            >
              {s.label}
            </Box>
          ))}
        </Box>

        {/* Slide content */}
        <Box sx={{ position: "relative", minHeight: { xs: 220, md: 260 } }}>
          <AnimatePresence mode="wait">
            {(() => {
              const SlideComponent = ProfileSlides[activeSlide].component;

              return (
                <motion.div
                  key={ProfileSlides[activeSlide].key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <SlideComponent />
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </Box>

        {/* Footer — socials */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            mt: 3,
            pt: 2.5,
            borderTop: isDark
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
              fontWeight: 500,
            }}
          >
            Connect
          </Typography>
          <Box sx={{ display: "flex", gap: 0.6 }}>
            {[
              { Icon: GitHubIcon, href: "https://github.com/leonhail-nell" },
              {
                Icon: LinkedInIcon,
                href: "https://www.linkedin.com/in/leonhail-paypa-97a95918b/",
              },
              {
                Icon: TwitterIcon,
                href: "https://v2.onlinejobs.ph/jobseekers/info/1499234",
              },
            ].map(({ Icon, href }) => (
              <IconButton
                key={href}
                component="a"
                href={href}
                target="_blank"
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: isDark
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(0,0,0,0.04)",
                  borderRadius: 1.5,
                  color: isDark ? "#e8e3db" : "#1a1a1a",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: isDark ? "rgba(255,255,255,0.18)" : "#1a1a1a",
                    color: isDark ? "#fff" : "#fff",
                  },
                }}
              >
                <Icon sx={{ fontSize: 15 }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
