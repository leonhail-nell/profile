// ─── Personal ────────────────────────────────────────────────────────────────
export const personal = {
  name: "Leonhail Paypa",
  titles: [
    "Frontend Developer",
    "Full-Stack Engineer",
    "Vue & React Specialist",
    "Laravel Expert",
    "UI/UX Enthusiast",
  ],
  bio: "6+ years crafting high-performance web apps with Vue, React, and Laravel. I turn complex problems into clean, animated, pixel-perfect interfaces that recruiters and users actually enjoy.",
  email: "leopaypa52@gmail.com",
  github: "https://github.com/leonhail-nell",
  linkedin: "https://linkedin.com/in/leonhail-paypa",
  twitter: "https://twitter.com/leonhail",
  location: "Philippines",
  available: true,
};

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "6+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "99%", label: "Satisfaction" },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export type Skill = {
  name: string;
  icon: string;
  level: number;
  category: "Frontend" | "Backend" | "Tools";
  invertOnDark?: boolean;
};

export const skills: Skill[] = [
  // Frontend
  { name: "React.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           level: 95, category: "Frontend" },
  { name: "Vue.js",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",           level: 92, category: "Frontend" },
  { name: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",         level: 88, category: "Frontend", invertOnDark: true },
  { name: "TypeScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 90, category: "Frontend" },
  { name: "Material-UI",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", level: 88, category: "Frontend" },
  // Backend
  { name: "Laravel",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",       level: 90, category: "Backend" },
  { name: "PHP",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",               level: 88, category: "Backend" },
  { name: "Node.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",         level: 78, category: "Backend" },
  { name: "MySQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",           level: 82, category: "Backend" },
  // Tools
  { name: "Git",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",               level: 90, category: "Tools" },
  { name: "Docker",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",         level: 72, category: "Tools" },
  { name: "Figma",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",           level: 80, category: "Tools" },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Nodifi",
    period: "2022 — Present",
    description: "Led the frontend architecture for a cloud-based financial platform. Built reusable component libraries, integrated RESTful APIs, and improved page performance by 40%.",
    tech: ["React.js", "TypeScript", "Laravel", "REST API"],
  },
  {
    role: "Full-Stack Developer",
    company: "FujiShops",
    period: "2020 — 2022",
    description: "Developed a full e-commerce solution from the ground up. Handled everything from product catalog to checkout, payment integration, and admin dashboard.",
    tech: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2018 — 2020",
    description: "Delivered 10+ client projects ranging from landing pages to SaaS dashboards. Specialized in responsive design and performance optimization.",
    tech: ["React.js", "Vue.js", "PHP", "CSS3"],
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
    description: "A cloud-based financial platform for loan origination and management. Built with a scalable React frontend and a Laravel backend API.",
    color: "#2facf4",
    photo: "/images/nodifi.png",
    github: "https://github.com/leonhail-nell/nodifi",
    web: "https://app.nodifi.cloud/login",
    tech: ["React.js", "Laravel", "TypeScript", "REST API"],
    featured: true,
  },
  {
    title: "FujiShops",
    tag: "E-Commerce",
    description: "Full-featured e-commerce platform with product management, cart, checkout, and an admin dashboard for inventory and orders.",
    color: "#B8202E",
    github: "https://github.com/leonhail-nell/fujiShops",
    web: "https://github.com/leonhail-nell/fujiShops",
    video: "/videos/fujishops-demo-new.mp4",
    tech: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "TaraFlight",
    tag: "Mobile App",
    description: "A React Native flight search and booking assistant powered by AI. Supports real-time fare comparison, price history charts, and smart itinerary suggestions.",
    color: "#c8b9ac",
    video: "/videos/TaraFlight.mp4",
    tech: ["React Native", "Expo", "Supabase", "Claude AI"],
    featured: true,
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
    company: "Nodifi",
    quote: "Leonhail is one of the most talented frontend developers I've worked with. He delivered a complex dashboard UI ahead of schedule and the code quality was exceptional.",
  },
  {
    name: "James Reyes",
    role: "CTO",
    company: "FujiShops",
    quote: "His ability to handle both frontend and backend simultaneously saved us months of development time. The e-commerce platform he built has been rock-solid.",
  },
  {
    name: "Ana Cruz",
    role: "UI/UX Designer",
    company: "Freelance",
    quote: "A rare developer who genuinely cares about design. Leonhail consistently goes beyond the spec to ship interfaces that look and feel polished.",
  },
];
