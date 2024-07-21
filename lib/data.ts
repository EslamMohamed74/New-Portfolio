import React from "react";
import odooImg from "@/public/odoo.png";
import helloImg from "@/public/hello.png";
import agsImg from "@/public/ags.png";
import inteligenciaImg from "@/public/inteligencia.png";
import jeddadermImg from "@/public/jeddaderm.png";
import vocacyImg from "@/public/vocacy.png";
import instagramImg from "@/public/instagram.png";
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
    link: "https://odoo-orcin.vercel.app/en",
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
  {
    title: "inteligencia",
    description:
      "Inteligencia.me specializes in innovative web and UI/UX design, emphasizing user experience and client-focused project management",
    tags: ["React", "Next.js", "React Bootstrap", "GSAP"],
    imageUrl: inteligenciaImg,
    link: "https://inteligencia.me/",
  },
  {
    title: "jeddaderm",
    description:
      "JeddaDerm is a major gathering of international experts in dermatology and cosmetic medicine. Prepare yourself for an extraordinary experience",
    tags: ["React", "Next.js", "React Bootstrap", "Swiper"],
    imageUrl: jeddadermImg,
    link: "https://jeddaderm.co/",
  },
  {
    title: "Vocacy",
    description:
      "Advancing talent development with engaging, tech-driven learning solutions for improved performance and resource optimization.",
    tags: ["React", "Next.js", "React Bootstrap", "AOS"],
    imageUrl: vocacyImg,
    link: "https://vocacy.co.uk/",
  },
  {
    title: "React Instagram",
    description:
      "This web app, a clone of Instagram, allows users to create, read, update, delete posts, like, comment, and follow others.",
    tags: ["React", "Materialize CSS", "Node.js", "Express.js", "MongoDB"],
    imageUrl: instagramImg,
    link: "https://fullstack-instagram.onrender.com/login",
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
      "Developed interactive landing pages and portfolio websites for many companies with Next.js, Bootstrap, and Tailwind.",
    icon: React.createElement(FaReact),
    date: "Nov 2022 - present",
  },
  {
    title: "Frontend Web Developer",
    location: "Fudex EBS · Part-time",
    description:
      "Working on enhanced https://stock.qvm.parts/ with new features, redesigned pages and increase performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Nov 2022",
  },
  {
    title: "Frontend Web Developer",
    location: "Sphinx Publishing Company · Full-time",
    description:
      "Lead online educational game development for children, transforming education in Kuwait, Egypt, Greece, and beyond. Craft interactive stories to enhance online learning. Achieved team leadership in 1.5 years.",
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
  // {
  //   title: "Information Technology Institute (ITI)",
  //   location: "Alexandria, Eg",
  //   description:
  //     "I graduated after 3 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "Nov 2019 - Feb 2020",
  // },
] as const;
