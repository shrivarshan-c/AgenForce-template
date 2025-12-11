"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const LandingPage = () => {
  return (
    <div className="relative pt-20 max-w-sm sm:max-w-lg md:max-w-5xl lg:max-w-7xl mx-auto">

      {/* FIXED HEIGHT SECTION */}
      <div className="ImageSection relative min-h-[22rem] sm:min-h-[26rem] md:min-h-[34rem] lg:min-h-[40rem] perspective-[4000px]">

        {/* BACK IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/4.jpg"
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
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, ease: "easeInOut" },
          }}
          className="absolute inset-0 translate-x-20 -translate-y-20"
        >
          <Image
            src="https://assets.aceternity.com/screenshots/3.jpg"
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
