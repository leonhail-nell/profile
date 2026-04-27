"use client";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useColorMode } from "./providers";

const projects = [
  {
    title: "Growth SaaS Website",
    description:
      "Redesigned the landing page and product demo experience to boost trial signups and improve clarity across the funnel.",
    tags: ["Next.js", "MUI", "Conversion"],
  },
  {
    title: "Brand Launch Experience",
    description:
      "Built a polished brand site for a startup launch with motion, visuals, and clear positioning.",
    tags: ["Design system", "Storytelling", "Performance"],
  },
  {
    title: "Portfolio Refresh",
    description:
      "Created a portfolio site that highlights work with concise case summaries and accessible interactions.",
    tags: ["React", "UX", "Responsive"],
  },
];

const skills = [
  "Product UI",
  "Next.js",
  "MUI",
  "Responsive design",
  "Fast performance",
  "Component systems",
];

function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      color="inherit"
      onClick={toggleColorMode}
      aria-label={
        mode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      sx={{ border: 1, borderColor: "divider", borderRadius: 2, p: 1 }}
    >
      {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box component="header" sx={{ mb: 8 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="button" fontWeight={700} letterSpacing={2}>
            YOUR NAME
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button component={Link} href="#about" variant="text">
              About
            </Button>
            <Button component={Link} href="#work" variant="text">
              Work
            </Button>
            <Button component={Link} href="#skills" variant="text">
              Skills
            </Button>
            <Button component={Link} href="#contact" variant="text">
              Contact
            </Button>
            <ThemeToggle />
          </Stack>
        </Stack>
      </Box>

      <Box
        component="section"
        id="home"
        sx={{
          mb: 12,
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              color="primary"
              fontWeight={700}
              letterSpacing={2}
              mb={2}
            >
              Profile & Portfolio
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              sx={{ fontWeight: 800, mb: 3, maxWidth: 600 }}
            >
              Hi, I’m Your Name — a product-focused creator building polished
              digital experiences.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 560, mb: 4 }}
            >
              I help startups and teams launch websites, brand experiences, and
              product portfolios that are fast, accessible, and built to scale.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                component={Link}
                href="#work"
                variant="contained"
                size="large"
              >
                View work
              </Button>
              <Button
                component={Link}
                href="#contact"
                variant="outlined"
                size="large"
              >
                Contact me
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: 280,
              }}
            >
              <CardContent>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Featured
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Modern portfolio design with clarity and confidence.
                </Typography>
                <Typography color="text.secondary">
                  A clean, responsive profile site built with Next.js and MUI
                  for a polished personal brand online.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box component="section" id="about" sx={{ mb: 12 }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          About
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" color="text.secondary" paragraph>
              I’m a designer and frontend developer focused on turning ideas
              into memorable web experiences. My process blends product
              thinking, visual design, and component-driven implementation so
              every page feels thoughtful and easy to use.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I excel at building profile sites, landing pages, and SaaS
              interfaces that communicate value clearly and help people take
              action.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Card variant="outlined" sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} mb={1}>
                  Highlights
                </Typography>
                <Typography color="text.secondary">
                  3+ years building customer-facing websites
                </Typography>
                <Typography color="text.secondary">
                  Focus on performance, accessibility, and visual polish
                </Typography>
                <Typography color="text.secondary">
                  Experience with product-led design and launch-ready copy
                </Typography>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box component="section" id="work" sx={{ mb: 12 }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Work
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.title} item xs={12} md={4}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="primary"
                  fontWeight={700}
                  mb={1}
                >
                  Case study
                </Typography>
                <Typography variant="h6" fontWeight={700} mb={2}>
                  {project.title}
                </Typography>
                <Typography color="text.secondary" sx={{ flexGrow: 1, mb: 3 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      color="secondary"
                    />
                  ))}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box component="section" id="skills" sx={{ mb: 12 }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Skills
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Stack>
      </Box>

      <Box component="section" id="contact" sx={{ mb: 8 }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Contact
        </Typography>
        <Card
          variant="outlined"
          sx={{ p: 4, background: "rgba(255,255,255,0.04)" }}
        >
          <Typography variant="body1" color="text.secondary" paragraph>
            Interested in working together? Send a quick message and let’s talk
            about what you want to build.
          </Typography>
          <Button
            component="a"
            href="mailto:you@example.com"
            variant="contained"
            size="large"
          >
            Email me
          </Button>
        </Card>
      </Box>
    </Container>
  );
}
