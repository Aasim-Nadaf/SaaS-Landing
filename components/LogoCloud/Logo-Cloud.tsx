"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const LogoCloud = () => {
  const logo = [
    {
      title: "Meta",
      src: "/Meta.svg",
    },
    {
      title: "Epic Games",
      src: "/EpicGames.svg",
    },
    {
      title: "Google",
      src: "/Google.svg",
    },
    {
      title: "Coca Cola",
      src: "/Coca-Cola.svg",
    },
    {
      title: "Tesla",
      src: "/Tesla.svg",
    },
    {
      title: "Jacobs",
      src: "/Jacobs.svg",
    },
  ];

  return (
    <div className="z-50 md:mt-40 px-4 py-16">
      <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg text-center max-w-xl mx-auto mb-10">
        Trusted by the world's leading companies <br />
        <span className="text-neutral-400 text-base">
          Most innovative and reliable brands use Aura to power their business.
        </span>
      </h2>

      {/* Table Grid with Borders */}
      <div className="max-w-4xl mx-auto border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {logo.map(({ title, src }, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeInOut",
              }}
              key={index}
              className="border-r border-b border-neutral-200 dark:border-neutral-800 last:border-r-0 md:nth-[3n]:border-r-0 nth-[n+5]:border-b-0 md:nth-[n+4]:border-b-0 p-8 md:p-12 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
            >
              <Image
                src={src}
                alt={title}
                width={150}
                height={150}
                className="object-contain grayscale-0 hover:grayscale-100 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
