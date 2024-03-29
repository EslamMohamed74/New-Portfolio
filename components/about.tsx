"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        focus on my passion for technology by diving into{" "}
        <span className="font-medium">
          front-end and mobile development(cross platform)
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          JavaScript (ES6), TypeScript, React, Next.js, React Native
        </span>
        . I am also familiar with Node.js and MongoDB. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, going to the gym, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also
        learning how to scuba dive.
      </p>
    </motion.section>
  );
}
