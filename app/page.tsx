"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
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
        p: { xs: 2, sm: 3, md: 4 },
        overflow: "hidden",
        background: "linear-gradient(180deg, #ebe8e3 0%, #d8d4cd 100%)",
      }}
    >
      {/* Floor / counter shadow */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "22%",
          background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.08) 100%)",
          zIndex: 0,
        }}
      />

      {/* Scene */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: { xs: 420, sm: 560, md: 760, lg: 960 },
          minHeight: { xs: "calc(100vh - 32px)", sm: 720, md: 760 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 0 },
          py: { xs: 2, sm: 0 },
          zIndex: 2,
        }}
      >
        {/* Black arch — left wing */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "-12%", sm: "-2%", md: "4%" },
            top: { xs: "8%", sm: "30%" },
            width: { xs: 70, sm: 130, md: 160 },
            height: { xs: 160, sm: 260, md: 320 },
            bgcolor: "#1a1a1a",
            borderRadius: "0 200px 200px 0",
            zIndex: 1,
            opacity: { xs: 0.85, sm: 1 },
          }}
        />
        {/* Black arch — right wing */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: "-12%", sm: "-2%", md: "4%" },
            top: { xs: "8%", sm: "30%" },
            width: { xs: 70, sm: 130, md: 160 },
            height: { xs: 160, sm: 260, md: 320 },
            bgcolor: "#1a1a1a",
            borderRadius: "200px 0 0 200px",
            zIndex: 1,
            opacity: { xs: 0.85, sm: 1 },
          }}
        />

        {/* Side card peeking left — hidden on small mobile, shown sm+ */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            position: "absolute",
            left: 0,
            top: "12%",
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              width: { sm: 110, md: 140 },
              height: { sm: 160, md: 200 },
              borderRadius: "0 16px 16px 0",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderLeft: "none",
              boxShadow: "8px 8px 24px rgba(0,0,0,0.06)",
            }}
          />
        </motion.div>

        {/* Mirror / photo card — full photo, no overlays on top */}
        <Box
          sx={{
            position: { xs: "relative", sm: "relative" },
            width: { xs: "88%", sm: 320, md: 380 },
            height: { xs: 460, sm: 620, md: 680 },
            maxHeight: { xs: 460, md: 720 },
            borderRadius: { xs: 5, md: 6 },
            overflow: "hidden",
            zIndex: 3,
            boxShadow: "0 30px 60px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.4)",
            flexShrink: 0,
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Leon Hailpaypa"
            fill
            priority
            sizes="(max-width: 600px) 88vw, (max-width: 900px) 320px, 380px"
            style={{
              objectFit: "cover",
              objectPosition: "55% 25%",
              transform: "scale(1.25)",
              transformOrigin: "center 30%",
            }}
          />
        </Box>

        {/* Glass info panel — stacked below on mobile, floating on tablet/desktop */}
        <Box
          sx={{
            position: { xs: "relative", sm: "absolute" },
            bottom: { sm: -12, md: 20 },
            right: { sm: 0, md: "8%" },
            width: { xs: "92%", sm: 280, md: 320 },
            zIndex: 6,
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(30px) saturate(180%)",
            WebkitBackdropFilter: "blur(30px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.7)",
            borderRadius: { xs: 4, md: 5 },
            p: { xs: 1.6, md: 2 },
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          }}
        >
          {/* Tab header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
            <Box sx={{ display: "flex", gap: 0.4 }}>
              {SLIDES.map((s, i) => (
                <Box
                  key={s.key}
                  onClick={() => setActiveSlide(i)}
                  sx={{
                    px: { xs: 1, md: 1.2 },
                    py: 0.5,
                    borderRadius: 1.5,
                    fontSize: { xs: 10, md: 11 },
                    fontWeight: 700,
                    cursor: "pointer",
                    color: activeSlide === i ? "#fff" : "rgba(0,0,0,0.5)",
                    bgcolor: activeSlide === i ? "#1a1a1a" : "transparent",
                    transition: "all 0.25s ease",
                    "&:hover": activeSlide !== i ? { bgcolor: "rgba(0,0,0,0.06)" } : {},
                  }}
                >
                  {s.label}
                </Box>
              ))}
            </Box>
            <IconButton
              size="small"
              onClick={() => setLiked(!liked)}
              sx={{
                width: 28,
                height: 28,
                bgcolor: liked ? "#1a1a1a" : "rgba(0,0,0,0.05)",
                color: liked ? "#fff" : "#1a1a1a",
                "&:hover": { bgcolor: liked ? "#000" : "rgba(0,0,0,0.1)" },
              }}
            >
              {liked ? <FavoriteIcon sx={{ fontSize: 14 }} /> : <FavoriteBorderIcon sx={{ fontSize: 14 }} />}
            </IconButton>
          </Box>

          {/* Slide content */}
          <Box sx={{ position: "relative", minHeight: { xs: 200, md: 220 } }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={SLIDES[activeSlide].key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {SLIDES[activeSlide].component}
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Social row */}
          <Box sx={{ display: "flex", gap: 0.5, mt: 1.5, pt: 1.5, borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            <IconButton
              component="a"
              href="https://github.com"
              target="_blank"
              size="small"
              sx={{ width: 28, height: 28, bgcolor: "rgba(0,0,0,0.05)", borderRadius: 1.5, color: "#1a1a1a", "&:hover": { bgcolor: "rgba(0,0,0,0.1)" } }}
            >
              <GitHubIcon sx={{ fontSize: 14 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              size="small"
              sx={{ width: 28, height: 28, bgcolor: "rgba(0,0,0,0.05)", borderRadius: 1.5, color: "#1a1a1a", "&:hover": { bgcolor: "rgba(0,0,0,0.1)" } }}
            >
              <LinkedInIcon sx={{ fontSize: 14 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              size="small"
              sx={{ width: 28, height: 28, bgcolor: "rgba(0,0,0,0.05)", borderRadius: 1.5, color: "#1a1a1a", "&:hover": { bgcolor: "rgba(0,0,0,0.1)" } }}
            >
              <TwitterIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
