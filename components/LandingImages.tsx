"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const LandingImages = () => {
  return (
    <div className="relative min-h-140 w-full pt-20 perspective-distant transform-3d">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="perspective-[4000px]"
      >
        <Image
          src={"https://assets.aceternity.com/agenforce-demo-2.jpg"}
          alt="agenforce-1"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0  rounded-lg mask-b-from-50% mask-r-from-50% shadow-2xl"
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="translate-x-20 -translate-y-40 perspective-[4000px] md:-translate-y-20"
      >
        <Image
          src={"https://assets.aceternity.com/agenforce-demo-1.jpg"}
          alt="agenforce-1"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 rounded-lg mask-b-from-20% mask-r-from-60% shadow-2xl"
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};
