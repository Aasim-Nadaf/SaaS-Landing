"use client";
import Link from "next/link";
import { Container } from "./Container";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { IconLayoutSidebarRight, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { title: "Features", href: "#features" },
  { title: "Products", href: "#products" },
  { title: "Pricing", href: "#pricing" },
  { title: "Socials", href: "#socials" },
];

export const Navbar = () => {
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-700">
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container className="flex md:hidden items-center justify-between py-2">
      <Logo />
      <Button onClick={() => setOpen(!open)} variant={"ghost"}>
        <IconLayoutSidebarRight size={14} />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
            className="fixed inset-0 w-full h-full bg-white z-50 border-b border-neutral-800 dark:border-neutral-700"
          >
            <Button
              variant={"ghost"}
              onClick={() => setOpen(false)}
              className="absolute right-4 top-3.5"
            >
              <IconX size={14} className="" />
            </Button>

            <Container className="py-2">
              <Logo />

              <motion.div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <Link href={link.href} key={index}>
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="p-4 items-center justify-between hidden md:flex">
      <Logo />
      <div className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-neutral-500 text-sm text-neutral-600 dark:text-neutral-400 font-medium"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button asChild variant={"outline"}>
          <Link href={"/"}>Login</Link>
        </Button>
        <Button asChild>
          <Link href={"/"}>SignUp</Link>
        </Button>
      </div>
      {/* <ModeToggle /> */}
    </Container>
  );
};
