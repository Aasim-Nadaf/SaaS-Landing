import Link from "next/link";
import { Container } from "./Container";
import Logo from "./Logo";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";

export const Navbar = () => {
  const navLinks = [
    { title: "Features", href: "#features" },
    { title: "Products", href: "#products" },
    { title: "Pricing", href: "#pricing" },
    { title: "Socials", href: "#socials" },
  ];

  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-700">
      <Container className="p-4 flex items-center justify-between">
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
    </nav>
  );
};
