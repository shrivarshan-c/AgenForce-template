"use client";
import { Heading } from "./Heading";

import { SubHeading } from "./subHeading";

import Image from "next/image";
import { motion } from "motion/react";

export const ThirdHero = () => {
  return (
    <div>
      <div>
        <div className="hero  mx-auto max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-7xl pt-10 md:pt-20 lg:pt-32 ">
          <Heading className="font-bold" as="h1">
            Governed AI,<br></br>
            Trusted Outcomes
          </Heading>

          <SubHeading className="py-8 px-2 lg:text-[19px] tracking-normal font-medium">
            Deploy AI agents with built-in approvals, brand guardrails, and
            audit trails. Every step is visible, reviewable, and compliant.
          </SubHeading>

          <ThirdLandingPage />
        </div>
      </div>
    </div>
  );
};

export const ThirdLandingPage = () => {
  return (
    <div className="relative pt-20 max-w-sm sm:max-w-lg md:max-w-5xl lg:max-w-7xl mx-auto">
      {/* FIXED HEIGHT SECTION */}
      <div className="ImageSection relative min-h-[22rem] sm:min-h-[26rem] md:min-h-[34rem] lg:min-h-[40rem] perspective-[4000px]">
        {/* BACK IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/5.jpg"
            alt="hero-section-image"
            fill
            className="object-cover mask-r-from-50% mask-b-from-50% rounded-md border-2 border-neutral-200 dark:border-neutral-400"
            style={{
              transform: "rotateX(30deg) rotateY(20deg) rotateZ(-25deg)",
            }}
          />
        </motion.div>

        {/* FRONT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, ease: "easeInOut" },
          }}
          className="absolute inset-0 translate-x-20 -translate-y-20"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/6.jpg"
            alt="hero-section-image"
            fill
            className="object-cover mask-r-from-50% mask-b-from-80% rounded-md border-2 border-neutral-300 dark:border-neutral-400"
            style={{
              transform: "rotateX(30deg) rotateY(20deg) rotateZ(-25deg)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
