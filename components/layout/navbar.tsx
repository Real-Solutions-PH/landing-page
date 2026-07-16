"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
];

const audienceLinks = [
  { href: "/for/startups", label: "Startups" },
  { href: "/for/enterprise", label: "Enterprise" },
  { href: "/for/agencies", label: "Agencies" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const resolveHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") return `/${href}`;
    return href;
  };

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    closeMenu();
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-center pt-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-black/60">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={handleLogoClick}
          >
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
                href={resolveHref(href)}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
                For
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="flex flex-col gap-1 rounded-2xl border border-black/5 bg-white/95 p-2 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#0d1f38]/95">
                  {audienceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className="hidden rounded-full sm:flex"
              asChild
            >
              <Link href="/contact">Book a scoping call</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
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
                href={resolveHref(href)}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-accent active:bg-accent/20"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-2 border-t border-border pt-2">
            <p className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              For
            </p>
            <nav className="flex flex-col gap-1">
              {audienceLinks.map(({ href, label }) => (
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
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <Button
              variant="default"
              className="w-full rounded-full py-3 h-auto text-base"
              asChild
            >
              <Link href="/contact" onClick={closeMenu}>
                Book a scoping call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
