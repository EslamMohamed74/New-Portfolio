import odooImg from "@/public/odoo.png";
import helloImg from "@/public/hello.png";
import agsImg from "@/public/ags.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Odoo",
    description:
      "A company website. that show the services and modules they can provide.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "i18n"],
    imageUrl: odooImg,
    link:"#"
  },
  {
    title: "Hello Voice",
    description:
      "A dynamic company portfolio website. that show the services they can provide like Animation and live-action videos.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Aos"],
    imageUrl: helloImg,
    link:"https://hellovoice.co.uk/"
  },
  {
    title: "AGS",
    description:
      "A dynamic school portfolio website. Visitors can explore our achievements, programs, Principal's Message, faculty profiles, Contact Us with us and more.",
    tags: ["React", "Next.js", "React Bootstrap", "i18n"],
    imageUrl: agsImg,
    link:"https://ags.ae/en"
  },
] as const;