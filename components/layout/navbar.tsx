"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when viewport resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-center pt-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-black/60">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="relative h-8 w-12 flex items-center justify-center">
              <Image
                src="/logo/logo-light-transparent.svg"
                alt="Real Solutions PH"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/logo/logo-dark-transparent.svg"
                alt="Real Solutions PH"
                fill
                className="object-contain hidden dark:block"
              />
            </div>
            <span className="font-bold tracking-tight text-foreground sm:inline-block">
              Real Solutions PH
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden rounded-full sm:flex" asChild>
              <a href="#contact">Get a Free Estimate</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={cn(
            "relative mt-20 mx-4 rounded-2xl border border-black/5 bg-white/95 px-6 py-6 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-[#0d1f38]/95 transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent active:bg-accent/20"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-border">
            <Button variant="default" className="w-full rounded-full" asChild>
              <a href="#contact" onClick={closeMenu}>
                Get a Free Estimate
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
