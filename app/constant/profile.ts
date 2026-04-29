import AboutSlide from "../components/AboutSlide";
import ContactSlide from "../components/ContactSlide";
import PortfolioSlide from "../components/PortfolioSlide";

export const ProfileSlides = [
  { key: "portfolio", label: "Portfolio", component: PortfolioSlide },
  { key: "about", label: "About", component: AboutSlide },
  { key: "contact", label: "Contact", component: ContactSlide },
];

export const Skills = [
  "React.js",
  "Vue.js",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "Material-UI",
  "Tailwind CSS",
];

export const Status = [
  { value: "6+", label: "Years" },
  { value: "15+", label: "Projects" },
];

export const Projects = [
  { title: "Nodifi", tag: "Next.js · MUI", color: "#e8c5a0" },
  { title: "Pamalengke", tag: "TypeScript · OpenAI", color: "#c5d4e8" },
];
