"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VerifiedIcon from "@mui/icons-material/Verified";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { getShadows } from "../constant/shadows";

export const ProfileCard = ({ isDark = false }: { isDark?: boolean }) => {
  const [liked, setLiked] = useState(false);
  const sh = getShadows(isDark);

  return (
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
          boxShadow: sh.card,
        }}
      >
        {/* Crossfade between default and liked photo */}
        <motion.div
          initial={false}
          animate={{ opacity: liked ? 0 : 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "absolute", inset: 0, opacity: 1 }}
        >
          <Image
            src={isDark ? "/profile-dark.png" : "/profile.jpg"}
            alt="Leonhail Paypa"
            fill
            priority
            sizes="(max-width: 600px) 88vw, (max-width: 900px) 88vw, 45vw"
            style={
              isDark
                ? {
                    objectFit: "cover",
                    objectPosition: "50% 15%",
                    transform: "scale(1.15)",
                    transformOrigin: "center 20%",
                  }
                : {
                    objectFit: "cover",
                    objectPosition: "55% 25%",
                    transform: "translate(3.5%, -2.5%) scale(1.15)",
                    transformOrigin: "center 30%",
                  }
            }
          />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ opacity: liked ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "absolute", inset: 0, opacity: 0 }}
        >
          <Image
            src={isDark ? "/profile-dark-liked.png" : "/profile-liked.jpg"}
            alt="Leonhail Paypa — liked"
            fill
            sizes={"(max-width: 600px) 88vw, (max-width: 900px) 88vw, 45vw"}
            style={
              isDark
                ? {
                    objectFit: "cover",
                    objectPosition: "50% 22%",
                    transform: "scale(1.3)",
                    transformOrigin: "center 25%",
                  }
                : {
                    objectFit: "cover",
                    objectPosition: "55% 25%",
                    transform: "scale(1.15)",
                    transformOrigin: "center 30%",
                  }
            }
          />
        </motion.div>

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
          {liked ? (
            <FavoriteIcon sx={{ fontSize: 18 }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 18 }} />
          )}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.6,
              mb: 0.5,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 22, md: 26 },
                fontWeight: 700,
                letterSpacing: -0.5,
                lineHeight: 1.1,
                textShadow: "0 2px 16px rgba(0,0,0,0.3)",
              }}
            >
              Leonhail Paypa
            </Typography>
            <VerifiedIcon
              sx={{ fontSize: 18, color: "rgba(255,255,255,0.95)" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: 12, md: 13 },
              color: "rgba(255,255,255,0.85)",
              letterSpacing: 0.5,
              textShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            Software Engineer · Designer
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
