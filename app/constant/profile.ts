import AboutSlide from "../components/AboutSlide";
import ContactSlide from "../components/ContactSlide";
import PortfolioSlide from "../components/PortfolioSlide";

export const ProfileSlides = [
  { key: "portfolio", label: "Portfolio", component: PortfolioSlide },
  { key: "about", label: "About", component: AboutSlide },
  { key: "contact", label: "Contact", component: ContactSlide },
];

export type Skill = {
  name: string;
  icon: string;
  description: string;
  invertOnDark?: boolean;
};

export const Skills: Skill[] = [
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Component-based UI library",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description: "Progressive JavaScript framework",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "Full-stack React framework",
    invertOnDark: true,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Typed superset of JavaScript",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    description: "PHP web application framework",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description: "Utility-first CSS framework",
  },
  {
    name: "Material-UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    description: "React UI component library",
  },
];

export const Status = [
  { value: "6+", label: "Years" },
  { value: "15+", label: "Projects" },
];

export type Project = {
  title: string;
  tag: string;
  color: string;
  github?: string;
  web?: string;
  video?: string;
  photo?: string;
};

export const Projects: Project[] = [
  {
    title: "Nodifi",
    tag: "Laravel · Reactjs",
    color: "#2facf4",
    photo: "/images/nodifi.png",
    github: "https://github.com/leonhail-nell/nodifi",
    web: "https://app.nodifi.cloud/login",
  },
  {
    title: "FujiShops",
    tag: "Laravel · Reactjs",
    color: "#B8202E",
    github: "https://github.com/leonhail-nell/fujiShops",
    web: "https://github.com/leonhail-nell/fujiShops",
    video: "/videos/fujishops-demo-new.mp4",
  },
  {
    title: "TaraFlights",
    tag: "React Native · Reactjs",
    color: "#27b3ef",
    github: "https://github.com/leonhail-nell/TaraFlight",
    web: "https://github.com/leonhail-nell/TaraFlight",
    video: "/videos/TaraFlight.mp4",
  },
];
