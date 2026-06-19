// ─── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  name: "Leonhail Paypa",
  titles: [
    "Senior Frontend Developer",
    "Fullstack Engineer",
    "Vue.js & Nuxt.js Specialist",
    "AI Integration Builder",
    "Open Source Author",
  ],
  bio: "7+ years building high-performance web apps for international clients in Australia and the Philippines. Deep expertise in Vue.js, Nuxt.js, Next.js, TypeScript, and Laravel — shipping production-grade SaaS, fintech, e-commerce, and AI-powered products. Published npm package author. Remote-first, detail-obsessed.",
  email: "leonhaipaypa27@gmail.com",
  github: "https://github.com/leonhail-nell",
  linkedin: "https://linkedin.com/in/leonhail-paypa",
  twitter: "https://twitter.com/leonhail",
  location: "Panabo City, Philippines",
  available: true,
};

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "7+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
  { value: "2", label: "Countries" },
  { value: "1", label: "npm Package" },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export type Skill = {
  name: string;
  icon: string;
  level: number;
  category: "Frontend" | "Backend" | "Mobile" | "AI";
  invertOnDark?: boolean;
};

export const skills: Skill[] = [
  // ── Frontend ──────────────────────────────────────────────────────────────
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    level: 97,
    category: "Frontend",
  },
  {
    name: "Nuxt.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    level: 95,
    category: "Frontend",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 90,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 88,
    category: "Frontend",
    invertOnDark: true,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 88,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 95,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    level: 93,
    category: "Frontend",
  },
  {
    name: "HTML5 / CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 98,
    category: "Frontend",
  },

  // ── Backend ───────────────────────────────────────────────────────────────
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    level: 93,
    category: "Backend",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    level: 90,
    category: "Backend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 82,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 80,
    category: "Backend",
    invertOnDark: true,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 85,
    category: "Backend",
  },

  // ── Mobile ────────────────────────────────────────────────────────────────
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 78,
    category: "Mobile",
  },
  {
    name: "Expo",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    level: 75,
    category: "Mobile",
    invertOnDark: true,
  },

  // ── AI ────────────────────────────────────────────────────────────────────
  {
    name: "Claude API",
    icon: "https://cdn.simpleicons.org/anthropic",
    level: 92,
    category: "AI",
    invertOnDark: true,
  },
  {
    name: "OpenAI API",
    icon: "https://cdn.simpleicons.org/openai",
    level: 88,
    category: "AI",
    invertOnDark: true,
  },
  {
    name: "Gemini API",
    icon: "https://cdn.simpleicons.org/googlegemini",
    level: 80,
    category: "AI",
    invertOnDark: true,
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: 82,
    category: "AI",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 92,
    category: "AI",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Web Developer",
    company: "LMG",
    location: "Australia — Remote, Full-time",
    period: "Jan 2022 — Apr 2026",
    description:
      "Led frontend development of Nodifi, a full-scale online business platform serving Australian clients — building complex multi-step forms, dynamic dashboards, and third-party API integrations. Architected reusable component libraries with TypeScript and Tailwind CSS, cutting feature development time by ~30%. Integrated AI capabilities using Claude and OpenAI APIs — automated document analysis, smart form suggestions, and AI-assisted workflows.",
    tech: [
      "Vue.js",
      "Nuxt.js",
      "Inertia.js",
      "Laravel",
      "TypeScript",
      "Tailwind CSS",
      "Claude API",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "Emapta",
    location: "Ortigas City, Philippines — Remote, Full-time",
    period: "Feb 2021 — Jan 2022",
    description:
      "Delivered frontend features across multiple client-facing digital products, converting detailed design mockups into production-ready interfaces. Managed concurrent client projects in an agile environment, maintaining consistent code quality and sprint delivery commitments. Collaborated with designers, back-end engineers, and QA to ensure UI consistency across platforms.",
    tech: ["Vue.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    role: "Fullstack Web Developer",
    company: "DevCodic",
    location: "Panabo City, Philippines — Office-based, Part-time",
    period: "Jan 2019 — Feb 2021",
    description:
      "Built and maintained full-stack web applications using PHP (Laravel), JavaScript, and MySQL, covering both frontend interfaces and server-side business logic. Developed, tested, and deployed plugins and web features based on client requirements — building strong foundations in software architecture and database design.",
    tech: ["Laravel", "PHP", "JavaScript", "MySQL"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  tag: string;
  description: string;
  color: string;
  github?: string;
  web?: string;
  video?: string;
  photo?: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Nodifi",
    tag: "FinTech Platform",
    description:
      "Full-scale online business platform for the Australian market with AI-assisted workflows — complex multi-step forms, dynamic dashboards, and third-party API integrations.",
    color: "#2facf4",
    photo: "/images/nodifi.png",
    web: "https://app.nodifi.cloud/login",
    tech: ["Vue.js", "Nuxt.js", "Inertia.js", "Laravel", "MySQL", "Claude API"],
    featured: true,
  },
  {
    title: "BisaLish",
    tag: "AI Translator",
    description:
      "AI-powered Bisaya-English language translator leveraging Claude and OpenAI APIs for natural language processing and contextual translation.",
    color: "#7928ca",
    photo: "/images/BisaLish.png",
    tech: ["Next.js", "Laravel", "Claude API", "OpenAI API"],
    github: "https://github.com/leonhail-nell/BisaLish",
    web: "https://bisa-lish.vercel.app",
    featured: true,
  },
  {
    title: "Pamalengke.ph",
    tag: "E-Commerce",
    description:
      "Full-featured e-commerce marketplace with product management, cart, checkout, and vendor dashboards built for the Philippine market.",
    color: "#22c55e",
    photo: "/images/Pamalengke.png",
    tech: ["Nuxt.js", "Laravel"],
    github: "https://github.com/leonhail-nell/pamalengke",
    web: "https://pamalengke.vercel.app",
    featured: true,
  },
  {
    title: "TaraFlight",
    tag: "Mobile App",
    description:
      "A React Native flight search and booking assistant powered by AI. Supports real-time fare comparison, price history, and smart itinerary suggestions.",
    color: "#c8b9ac",
    video: "/videos/TaraFlight.mp4",
    photo: "/images/taraflight.png",
    tech: ["React Native", "Expo", "Supabase", "Claude AI"],
    featured: true,
  },
  {
    title: "prompt-cache-optimizer",
    tag: "Open Source · npm",
    description:
      "Published npm package (v0.4.0) — a drop-in wrapper for Claude, OpenAI, and Gemini SDKs that measures cache hit rates, surfaces real dollar savings, and auto-places cache_control breakpoints.",
    color: "#00d4ff",
    photo: "/images/pco.png",
    github: "https://github.com/leonhail-nell/prompt-cache-optimizer",
    web: "https://npmjs.com/package/prompt-cache-optimizer",
    tech: ["TypeScript", "Node.js", "Claude API", "OpenAI API", "Gemini API"],
    featured: false,
  },
  {
    title: "FujiShops",
    tag: "E-Commerce",
    description:
      "Full-featured e-commerce platform with product management, cart, checkout, and an admin dashboard for inventory and orders.",
    color: "#B8202E",
    photo: "/images/fujishops.png",
    github: "https://github.com/leonhail-nell/fujiShops",
    video: "/videos/fujishops-demo-new.mp4",
    tech: ["Vue.js", "Inertia.js", "Laravel", "MySQL", "Tailwind CSS"],
    featured: false,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "LMG / Nodifi",
    quote:
      "Leonhail is one of the most talented frontend developers I've worked with. He delivered a complex dashboard UI ahead of schedule and the code quality was exceptional.",
  },
  {
    name: "James Reyes",
    role: "Engineering Lead",
    company: "Emapta",
    quote:
      "His ability to juggle multiple client projects simultaneously while keeping code quality high is remarkable. A true professional in every sense.",
  },
  {
    name: "Ana Cruz",
    role: "UI/UX Designer",
    company: "DevCodic",
    quote:
      "A rare developer who genuinely cares about design. Leonhail consistently goes beyond the spec to ship interfaces that look and feel polished.",
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Davao del Norte State College",
  location: "New Visayas, Panabo City, Philippines",
  period: "Aug 2015 — Aug 2019",
};

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    name: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    date: "June 2026",
  },
  {
    name: "Developing Front-End Apps with React",
    issuer: "IBM",
    date: "May 2026",
  },
  {
    name: "React (Basic) Certificate",
    issuer: "HackerRank",
    date: "2024",
  },
];
