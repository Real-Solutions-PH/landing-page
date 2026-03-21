import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-black/5 bg-background py-12 dark:border-white/10 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-48">
                <Image 
                  src="/logo/logo-header-light-transparent 1.svg" 
                  alt="Real Solutions PH" 
                  fill
                  className="object-contain object-left dark:hidden"
                />
                <Image 
                  src="/logo/logo-header-dark-transparent 1.svg" 
                  alt="Real Solutions PH" 
                  fill
                  className="object-contain object-left hidden dark:block"
                />
              </div>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Real Solutions PH is a prototype-first managed software partner for SMEs that need production-grade custom software and integrations.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Services</h4>
            <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">System Integration</Link>
            <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Custom Software</Link>
            <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Web & Mobile Apps</Link>
            <Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">AI Integration</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Company</h4>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">About Us</Link>
            <Link href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">How It Works</Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Pricing</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Book a Discovery</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Legal</h4>
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-center text-sm text-muted-foreground dark:border-white/10 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Real Solutions PH. All rights reserved. Batangas, Philippines.</p>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/company/real-solutions-ph" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="https://github.com/Real-Solutions-PH" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
