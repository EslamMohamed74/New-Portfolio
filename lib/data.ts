import React from "react";
import odooImg from "@/public/odoo.png";
import helloImg from "@/public/hello.png";
import agsImg from "@/public/ags.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    link: "#",
  },
  {
    title: "Hello Voice",
    description:
      "A dynamic company portfolio website. that show the services they can provide like Animation and live-action videos.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Aos"],
    imageUrl: helloImg,
    link: "https://hellovoice.co.uk/",
  },
  {
    title: "AGS",
    description:
      "A dynamic school portfolio website. Visitors can explore our achievements, programs, Principal's Message, faculty profiles, Contact Us with us and more.",
    tags: ["React", "Next.js", "React Bootstrap", "i18n"],
    imageUrl: agsImg,
    link: "https://ags.ae/en",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React native",
  "Redux",
  "Tailwind",
  "Bootstrap",
  "Material ui",
  "Framer Motion",
  "Git",
  "Node.js",
  "Express",
  "MongoDB",
] as const;

export const experiencesData = [
  {
    title: "Senior Frontend Developer",
    location: "Blue Holding Company · Full-time",
    description:
      "Developed interactive components with Next.js, CSS3, Bootstrap, and Tailwind. Utilized React hooks for state management, shared react-hook-form API methods using context, and validated forms with React-Hook-Form and Yup schema. Optimized REST API calls and data fetching with Axios and React-Query.",
    icon: React.createElement(FaReact),
    date: "Nov 2022 - present",
  },
  {
    title: "Frontend Web Developer",
    location: "Fudex EBS · Part-time",
    description:
      "Enhanced https://stock.qvm.parts/ with new features and redesigned pages using React.js, CSS3, and Material UI. Managed component state with React hooks, useState, and Redux. Leveraged Axios for efficient REST API calls and data fetching.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Nov 2022",
  },
  {
    title: "Frontend Web Developer",
    location: "Sphinx Publishing Company · Full-time",
    description:
      "Lead the development of online educational games for children, revolutionizing education in Kuwait, Egypt, Greece, and beyond. Craft interactive stories to enrich the online learning experience. Achieve team leadership within 1.5 years, showcasing proficiency in HTML, CSS, JavaScript, Bootstrap, and jQuery.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2020 - Nov 2022",
  },
  {
    title: "Frontend Web Developer",
    location: "NatterSearch · Part-time",
    description:
      "Developed a socializing service app connecting experienced engineers (Seniors) with Mid-level or Junior counterparts. Facilitated knowledge-sharing through online meetings using Agora.io",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Mar 2022",
  },
  {
    title: "Information Technology Institute (ITI)",
    location: "Alexandria, Eg",
    description:
      "I graduated after 3 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2019 - Feb 2020",
  },
] as const;
