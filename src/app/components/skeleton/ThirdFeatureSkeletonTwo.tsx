"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Logo, LogoSvg } from "../Logo";
import { motion } from "motion/react";

import { useMemo, useRef } from "react";

export const ThirdFeatureSkeletonTwo = () => {
  return (
    <div className="grid h-full w-full mask-r-from-50% mask-l-from-50% p-4 ">
      <GridItem className="gap-2 w-full h-full max-w-lg mx-auto">
        <SkeletonItem />
        <SkeletonItem
          showGradient={true}
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <SkeletonItem
          src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showGradient={true}
        />
        <SkeletonItem />
      </GridItem>

      <GridItem className="gap-4 grid-cols-5 w-full h-full">
        <SkeletonItem />
        <SkeletonItem
          src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showGradient={true}
        />
        <SkeletonItem
          className="bg-white flex justify-center  items-center"
          isLogo={true}
        />

        <SkeletonItem
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showGradient={true}
        />
        <SkeletonItem />
      </GridItem>
      <GridItem className="gap-2 w-full h-full max-w-lg mx-auto">
        <SkeletonItem />
        <SkeletonItem
          src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          showGradient={true}
        />
        <SkeletonItem
          showGradient={true}
          src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <SkeletonItem />
      </GridItem>
    </div>
  );
};

type GridItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const GridItem = ({ children, className }: GridItemProps) => {
 

  return (
    <motion.div
      className={cn("relative grid grid-cols-4 w-full  h-full", className)}
    
    >
      {children}
    </motion.div>
  );
};

export const SkeletonItem = ({
  src,
  showGradient,
  isLogo,
}: {
  src?: string;
  showGradient?: boolean;
  className?: string;
  isLogo?: boolean;
}) => {

    const randomValues = useRef({
        duration: 0.2 + Math.random() * 0.8,
        delay: 0.2 + Math.random() * 0.8,
      });
    
      const transition = useMemo(
        () => ({
          duration: randomValues.current.duration,
          delay: randomValues.current.delay,
        }),
        [randomValues.current.duration, randomValues.current.delay]
      );
  return (
    <motion.div className={cn("relative flex aspect-square")}
    initial={{
        y: -10,
        opacity: 0,
        filter: "blur(10px)",
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={transition}
    
    
    >
  
      <div
        className={cn(
          "flex justify-center items-center w-full h-full rounded-2xl",
          isLogo && "bg-white"
        )}
      >
        {showGradient && src ? (
          <div className="relative w-full h-full bg-linear-to-br from-black via-transparent to-black rounded-2xl overflow-hidden z-10 p-0.5">
            <Image
              className="rounded-2xl relative w-full"
              src={src}
              alt="image"
              height={100}
              width={100}
              style={{ objectFit: "contain", objectPosition: "top" }}
            />
          </div>
        ) : isLogo ? (
          <div className="flex justify-center items-center w-full h-full rounded-2xl bg-white">
            <LogoSvg className="relative" />
          </div>
        ) : null}
      </div>
      {!isLogo && (
        <div className="absolute inset-0 size-26 border-neutral-400 rounded-2xl border-dashed border-2 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed pointer-events-none" />
      )}
    </motion.div>
  );
};
