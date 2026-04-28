"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";

const SLIDES = [
  { label: "Portfolio", active: true },
  { label: "About", active: false },
  { label: "Contact", active: false },
];

export default function ProfilePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f0ede8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      {/* Card */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: 390 },
          height: { xs: "85vh", sm: 720 },
          bgcolor: "#fff",
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
        }}
      >
        {/* --- Background arch shapes --- */}
        <Box
          sx={{
            position: "absolute",
            left: -60,
            top: "18%",
            width: 160,
            height: 260,
            bgcolor: "#1a1a1a",
            borderRadius: "0 50% 50% 0",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: -60,
            top: "18%",
            width: 160,
            height: 260,
            bgcolor: "#1a1a1a",
            borderRadius: "50% 0 0 50%",
            zIndex: 1,
          }}
        />

        {/* --- Top actions --- */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <IconButton
            size="small"
            sx={{ bgcolor: "rgba(255,255,255,0.85)", "&:hover": { bgcolor: "#fff" } }}
          >
            <ShareIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{ bgcolor: "rgba(255,255,255,0.85)", "&:hover": { bgcolor: "#fff" } }}
          >
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* --- Score badge (top right of image area) --- */}
        <Box
          sx={{
            position: "absolute",
            top: 60,
            right: 24,
            zIndex: 10,
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1,
              color: "#1a1a1a",
              letterSpacing: -4,
            }}
          >
            97
          </Typography>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#555", lineHeight: 1.2 }}>
            Good
          </Typography>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#555", lineHeight: 1.2 }}>
            Record
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 0.4, mt: 0.5 }}>
            <PeopleIcon sx={{ fontSize: 12, color: "#888" }} />
            <Typography sx={{ fontSize: 11, color: "#888" }}>16.7k</Typography>
          </Box>
        </Box>

        {/* --- Hero placeholder image --- */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "68%",
            zIndex: 2,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              width: 220,
              height: 340,
              borderRadius: 4,
              bgcolor: "#c8bfb0",
              fontSize: 64,
              mb: 0,
            }}
          >
            👤
          </Avatar>
        </Box>

        {/* --- Bottom info panel --- */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "#fff",
            borderRadius: "24px 24px 0 0",
            zIndex: 5,
            pt: 3,
            pb: 4,
            px: 3,
            boxShadow: "0 -4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Name & like */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
            <Box>
              <Typography sx={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.1 }}>
                Leon Hailpaypa
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#888", mt: 0.4 }}>
                Full-Stack Developer · Designer
              </Typography>
            </Box>
            <IconButton
              sx={{
                bgcolor: "#1a1a1a",
                color: "#fff",
                width: 40,
                height: 40,
                "&:hover": { bgcolor: "#333" },
              }}
            >
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Tags */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
            {["Next.js", "MUI", "TypeScript"].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: "#f0ede8",
                  fontWeight: 600,
                  fontSize: 11,
                  height: 24,
                }}
              />
            ))}
            <Chip
              icon={<StarIcon sx={{ fontSize: "14px !important" }} />}
              label="Top Rated"
              size="small"
              sx={{
                bgcolor: "#1a1a1a",
                color: "#fff",
                fontWeight: 600,
                fontSize: 11,
                height: 24,
                "& .MuiChip-icon": { color: "#fff" },
              }}
            />
          </Box>

          {/* Socials */}
          <Box sx={{ display: "flex", gap: 1, mb: 2.5 }}>
            <IconButton size="small" sx={{ bgcolor: "#f0ede8", borderRadius: 2 }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ bgcolor: "#f0ede8", borderRadius: 2 }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ bgcolor: "#f0ede8", borderRadius: 2 }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Navigation dots */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            {SLIDES.map((_, i) => (
              <Box
                key={i}
                onClick={() => setActiveSlide(i)}
                sx={{
                  height: 8,
                  width: activeSlide === i ? 32 : 8,
                  bgcolor: activeSlide === i ? "#1a1a1a" : "#d0ccc7",
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
