"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedIcon from "@mui/icons-material/Verified";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioSlide from "./components/PortfolioSlide";
import AboutSlide from "./components/AboutSlide";
import ContactSlide from "./components/ContactSlide";

const SLIDES = [
  { key: "portfolio", label: "Portfolio", component: <PortfolioSlide /> },
  { key: "about", label: "About", component: <AboutSlide /> },
  { key: "contact", label: "Contact", component: <ContactSlide /> },
];

export default function ProfilePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [liked, setLiked] = useState(false);

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
        background:
          "radial-gradient(ellipse at top left, #f4f1ec 0%, #ebe7df 50%, #ddd6cb 100%)",
      }}
    >
      {/* Single accent — soft tonal blob top-right */}
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,160,130,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          display: { xs: "none", sm: "block" },
        }}
      />

      {/* Main container — proper grid */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: 440, sm: 720, md: 960, lg: 1100 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.85fr) minmax(0, 1fr)" },
          gap: { xs: 3, md: 5, lg: 6 },
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* LEFT — Portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: { xs: "4 / 5", md: "3 / 4" },
              maxHeight: { md: 640 },
              borderRadius: { xs: 4, md: 5 },
              overflow: "hidden",
              boxShadow:
                "0 30px 60px -20px rgba(0,0,0,0.25), 0 18px 36px -18px rgba(0,0,0,0.18)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Leon Hailpaypa"
              fill
              priority
              sizes="(max-width: 600px) 88vw, (max-width: 900px) 88vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "55% 25%",
                transform: "scale(1.15)",
                transformOrigin: "center 30%",
              }}
            />

            {/* Subtle gradient at bottom for depth */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Like button — refined glass */}
            <IconButton
              onClick={() => setLiked(!liked)}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 38,
                height: 38,
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: liked ? "#ff5577" : "#fff",
                transition: "all 0.25s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.3)",
                  transform: "scale(1.05)",
                },
              }}
            >
              {liked ? <FavoriteIcon sx={{ fontSize: 18 }} /> : <FavoriteBorderIcon sx={{ fontSize: 18 }} />}
            </IconButton>

            {/* Name overlay — bottom of photo */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: { xs: 2.5, md: 3 },
                color: "#fff",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 0.5 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 26 },
                    fontWeight: 700,
                    letterSpacing: -0.5,
                    lineHeight: 1.1,
                    textShadow: "0 2px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  Leon Hailpaypa
                </Typography>
                <VerifiedIcon sx={{ fontSize: 18, color: "rgba(255,255,255,0.95)" }} />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 13 },
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: 0.5,
                  textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
              >
                Full-Stack Developer · Designer
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* RIGHT — Content panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: { xs: 4, md: 5 },
              p: { xs: 2.5, md: 3.5 },
              boxShadow:
                "0 20px 50px -20px rgba(0,0,0,0.15), 0 8px 24px -12px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header — eyebrow + small stat */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "rgba(0,0,0,0.5)",
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
                <Typography sx={{ fontSize: 11, fontWeight: 600, color: "rgba(0,0,0,0.65)" }}>
                  Available for work
                </Typography>
              </Box>
            </Box>

            {/* Bio */}
            <Typography
              sx={{
                fontSize: { xs: 14, md: 15 },
                color: "rgba(0,0,0,0.78)",
                lineHeight: 1.6,
                mb: 3,
                fontWeight: 400,
              }}
            >
              I design and build refined digital products with a focus on motion,
              clarity, and considered detail.
            </Typography>

            {/* Tab navigation */}
            <Box
              sx={{
                display: "flex",
                gap: 0.4,
                mb: 2.5,
                p: 0.4,
                background: "rgba(0,0,0,0.04)",
                borderRadius: 2,
                width: "fit-content",
              }}
            >
              {SLIDES.map((s, i) => (
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
                    color: activeSlide === i ? "#fff" : "rgba(0,0,0,0.6)",
                    bgcolor: activeSlide === i ? "#1a1a1a" : "transparent",
                    transition: "all 0.25s ease",
                    "&:hover":
                      activeSlide !== i ? { color: "#1a1a1a" } : {},
                  }}
                >
                  {s.label}
                </Box>
              ))}
            </Box>

            {/* Slide content */}
            <Box sx={{ position: "relative", minHeight: { xs: 220, md: 260 } }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={SLIDES[activeSlide].key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {SLIDES[activeSlide].component}
                </motion.div>
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
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Typography sx={{ fontSize: 11, color: "rgba(0,0,0,0.5)", fontWeight: 500 }}>
                Connect
              </Typography>
              <Box sx={{ display: "flex", gap: 0.6 }}>
                <IconButton
                  component="a"
                  href="https://github.com"
                  target="_blank"
                  size="small"
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "rgba(0,0,0,0.04)",
                    borderRadius: 1.5,
                    color: "#1a1a1a",
                    transition: "all 0.2s",
                    "&:hover": { bgcolor: "#1a1a1a", color: "#fff" },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 15 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  size="small"
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "rgba(0,0,0,0.04)",
                    borderRadius: 1.5,
                    color: "#1a1a1a",
                    transition: "all 0.2s",
                    "&:hover": { bgcolor: "#1a1a1a", color: "#fff" },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 15 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  size="small"
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "rgba(0,0,0,0.04)",
                    borderRadius: 1.5,
                    color: "#1a1a1a",
                    transition: "all 0.2s",
                    "&:hover": { bgcolor: "#1a1a1a", color: "#fff" },
                  }}
                >
                  <TwitterIcon sx={{ fontSize: 15 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
