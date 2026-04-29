"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <EmailIcon sx={{ fontSize: 14 }} />,
    label: "Email",
    value: "leonhaipaypa27@gmail.com",
    href: "mailto:leonhaipaypa27@gmail.com",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 14 }} />,
    label: "Phone",
    value: "+63 956 409 5011",
    href: "tel:+639564095011",
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 14 }} />,
    label: "Based in",
    value: "San Francisco, Panabo City, Davao del Norte",
    href: "#",
  },
];

export default function ContactSlide() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 700,
          color: "rgba(0,0,0,0.5)",
          mb: 1.2,
          letterSpacing: 1.5,
        }}
      >
        GET IN TOUCH
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.6, mb: 1.5 }}>
        {contacts.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <Box
              component="a"
              href={c.href}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
                borderRadius: 2,
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0,0,0,0.06)",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.25s ease",
                "&:hover": { background: "rgba(255,255,255,0.85)" },
              }}
            >
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: 1.5,
                  background: "rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1a1a1a",
                }}
              >
                {c.icon}
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: 9,
                    color: "rgba(0,0,0,0.5)",
                    letterSpacing: 0.5,
                    lineHeight: 1,
                  }}
                >
                  {c.label.toUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    lineHeight: 1.3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.value}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.35 }}
      >
        <Box
          component="a"
          href="mailto:leonhaipaypa27@gmail.com"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.8,
            py: 1,
            borderRadius: 2,
            background: "#1a1a1a",
            color: "#fff",
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.25s ease",
            "&:hover": { background: "#000", transform: "translateY(-1px)" },
          }}
        >
          Contact Me
          <ArrowForwardIcon sx={{ fontSize: 14 }} />
        </Box>
      </motion.div>
    </Box>
  );
}
