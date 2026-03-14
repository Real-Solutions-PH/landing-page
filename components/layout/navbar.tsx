import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-center pt-4 px-4 sm:px-6 lg:px-8">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-black/60">
        <Link href="/" className="flex items-center gap-2">
          {/* Using actual brand logo icon */}
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
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden rounded-full sm:flex" asChild>
            <Link href="#contact">Book a Free Call</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
