"use client";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import type { Project } from "../constant/profile";
import { getShadows } from "../constant/shadows";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const theme = useTheme();
  const d = theme.palette.mode === "dark";
  const sh = getShadows(d);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    onClose();
  };

  return (
    <Modal
      open={!!project}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              outline: "none",
              width: "100%",
              maxWidth: 800,
              margin: "0 16px",
            }}
          >
            <Box
              sx={{
                background: d
                  ? "rgba(22,19,16,0.95)"
                  : "rgba(255,255,255,0.96)",
                backdropFilter: "blur(40px) saturate(200%)",
                WebkitBackdropFilter: "blur(40px) saturate(200%)",
                border: d
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.08)",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: sh.modal,
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2.5,
                  pt: 2.5,
                  pb: 1.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: 1.5,
                      bgcolor: project.color,
                      opacity: d ? 0.85 : 1,
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: d ? "#e8e3db" : "#1a1a1a",
                        lineHeight: 1.1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 10,
                        color: d
                          ? "rgba(255,255,255,0.45)"
                          : "rgba(0,0,0,0.45)",
                        mt: 0.2,
                      }}
                    >
                      {project.tag}
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={handleClose}
                  size="small"
                  sx={{
                    width: 30,
                    height: 30,
                    bgcolor: d ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)",
                    color: d ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)",
                    "&:hover": {
                      bgcolor: d ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CloseIcon sx={{ fontSize: 15 }} />
                </IconButton>
              </Box>

              {/* Photo */}
              {project.photo && !project.video && (
                <Box sx={{ px: 2.5, pb: 1.5 }}>
                  <Box
                    sx={{
                      borderRadius: 2.5,
                      overflow: "hidden",
                      border: d
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.photo}
                      alt={project.title}
                      style={{
                        width: "100%",
                        display: "block",
                        maxHeight: 340,
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </Box>
                </Box>
              )}

              {/* Video */}
              {project.video && (
                <Box sx={{ px: 2.5, pb: 1.5 }}>
                  <Box
                    sx={{
                      borderRadius: 2.5,
                      overflow: "hidden",
                      border: d
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(0,0,0,0.07)",
                      bgcolor: "#000",
                    }}
                  >
                    <video
                      ref={videoRef}
                      src={project.video}
                      controls
                      playsInline
                      style={{
                        width: "100%",
                        display: "block",
                        maxHeight: 340,
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
              )}

              {/* Links */}
              {(project.github || project.web) && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    px: 2.5,
                    pb: 2.5,
                  }}
                >
                  {project.github && (
                    <Box
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0.8,
                        py: 1,
                        borderRadius: 2,
                        background: d
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(0,0,0,0.05)",
                        border: d
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "1px solid rgba(0,0,0,0.08)",
                        color: d ? "#e8e3db" : "#1a1a1a",
                        textDecoration: "none",
                        fontSize: 12,
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          background: d ? "rgba(255,255,255,0.14)" : "#1a1a1a",
                          color: d ? "#fff" : "#fff",
                          borderColor: "transparent",
                        },
                      }}
                    >
                      <GitHubIcon sx={{ fontSize: 15 }} />
                      GitHub
                    </Box>
                  )}
                  {project.web && (
                    <Box
                      component="a"
                      href={project.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0.8,
                        py: 1,
                        borderRadius: 2,
                        background: d ? "#e8e3db" : "#1a1a1a",
                        color: d ? "#1a1a1a" : "#fff",
                        textDecoration: "none",
                        fontSize: 12,
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          background: d ? "#fff" : "#000",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      <OpenInNewIcon sx={{ fontSize: 15 }} />
                      Live Site
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
