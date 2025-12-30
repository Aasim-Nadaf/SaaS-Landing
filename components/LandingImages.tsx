"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

export const LandingImages = () => {
  return (
    <div className="relative overflow-hidden">
      {/* <div className="absolute inset-x-0 h-full w-full mask-t-from-20% bg-red-950 z-50"></div> */}
      <Container className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-12 sm:pt-16 md:pt-20 translate-x-4 sm:translate-x-8 md:translate-x-10 perspective-distant overflow-visible">
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
          className="perspective-[4000px] translate-x-0 sm:translate-x-8 md:translate-x-16"
        >
          <Image
            src={"https://assets.aceternity.com/agenforce-demo-2.jpg"}
            alt="agenforce-1"
            height={1080}
            width={1920}
            className={cn(
              "absolute inset-0 rounded-lg mask-b-from-10% mask-r-from-50% shadow-2xl w-[85%] sm:w-[90%] md:w-full h-auto"
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
          className="-translate-y-10 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-40 perspective-[4000px] translate-x-8 sm:translate-x-12 md:translate-x-20"
        >
          <Image
            src={"https://assets.aceternity.com/agenforce-demo-1.jpg"}
            alt="agenforce-1"
            height={1080}
            width={1920}
            className={cn(
              "absolute inset-0 rounded-lg mask-b-from-70% mask-r-from-60% shadow-2xl w-[85%] sm:w-[90%] md:w-full h-auto"
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </Container>
    </div>
  );
};
