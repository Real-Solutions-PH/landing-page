"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 bg-transparent flex flex-col justify-center">
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-15 z-0">
        <div className="absolute h-[500px] w-[500px] -left-32 top-32 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute h-[300px] w-[300px] right-0 bottom-16 rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Social Proof / Badge 
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-1">
                 <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                 <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              </div>
              <div className="flex flex-col">
                 <span className="text-[11px] uppercase tracking-wide font-semibold text-muted-foreground">Top Rated Integration Partner</span>
                 <span className="text-xs font-bold text-foreground">1st Place for SME Operations</span>
              </div>
            </div>
            */}

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.2] sm:leading-[1.15] z-20 relative pr-4">
              Your business software, <br className="hidden sm:block" />
              <span className="relative flex mt-3 w-max max-w-full">
                <span className="relative z-10 px-2 lg:px-4 pb-1 pt-1 text-[#F7FAFC] bg-[#193B76] dark:bg-[#2A5CAA] rounded-sm">
                  built right,
                </span>
                <span className="absolute -bottom-4 -right-10 text-[#F59E0B] opacity-80 z-20 transform rotate-12 hidden md:block">
                   <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 50 Q 50 10 90 20" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/>
                      <path d="M80 10 L 95 20 L 80 35" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                   </svg>
                </span>
              </span>
              <span className="mt-3 block">and managed for you.</span>
            </h1>
            
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              We build tailored business software that brings your operations into one system, gives you real-time visibility, and removes the day-to-day burden of holding disconnected tools together.
            </p>

            <div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
              <Button className="h-14 rounded-md px-8 text-base shadow-[0_8px_24px_rgba(25,59,118,0.25)] flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white border-0 transition-transform hover:scale-105" asChild>
                <Link href="/contact">
                  <span className="font-semibold text-white">Book a Discovery Audit</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-14 rounded-md px-8 text-base shadow-sm flex items-center justify-center gap-2 transition-transform hover:scale-105 bg-background hover:bg-muted hover:text-foreground" asChild>
                <Link href="/how-it-works">
                  <span className="font-semibold">See how it works</span>
                </Link>
              </Button>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground text-left w-full pl-1">
              <span className="font-medium">No commitment. Just clarity on what to build and how to get there.</span>
            </div>

            {/* Avatar Group / Makers 
            <div className="mt-10 flex items-center gap-5 pt-2 w-full">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                   <div key={i} className={`inline-block h-10 w-10 rounded-full border-2 border-background bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 overflow-hidden relative shadow-sm`} style={{ zIndex: 10 - i }}>
                     <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900 border border-black/5" />
                   </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#F59E0B] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground mt-0.5">
                  <span className="font-bold">50+</span> businesses saving 30+ hrs/week
                </span>
              </div>
            </div>
            */}
          </motion.div>

          {/* Right Column: Floating Tech Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[450px] lg:h-[550px] hidden md:flex items-center justify-center p-4 lg:p-8 ml-auto max-w-[500px]"
          >
            {/* The irregular dark shape behind */}
            <div className="absolute inset-2 lg:inset-4 bg-[#102A52] rounded-[2.5rem] transform rotate-[-2deg] shadow-2xl flex items-center justify-center overflow-visible z-0 border border-sky-400/20">
               {/* inner dashed circle */}
               <div className="absolute inset-6 border border-white/20 rounded-[inherit] border-dashed pointer-events-none" />
               
               {/* Subtitle bottom */}
               <div className="absolute bottom-8 text-center text-sky-100/70 text-sm font-medium w-full px-12">
                 + all the boring stuff (server maintenance, API limits, error tracking)
               </div>
            </div>

            {/* Floating Cards content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">

              {/* Card 1: Xero / Accounting */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] left-[-2%] lg:left-[-8%] bg-white dark:bg-slate-900 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3 w-52"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400 font-black text-xl">
                  X
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1.5">Xero / QBo</span>
                  <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-blue-400" /> Automated invoices</li>
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-blue-400" /> Payroll sync</li>
                  </ul>
                </div>
              </motion.div>

              {/* Card 2: Shopify / E-Commerce */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[22%] right-[-5%] lg:right-[-12%] bg-white dark:bg-slate-900 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3 w-52"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400 font-black text-xl">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1.5">Shopify / Lazada</span>
                  <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-400" /> Multi-channel orders</li>
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-400" /> Inventory deducts</li>
                  </ul>
                </div>
              </motion.div>

              {/* Card 3: POS */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[25%] left-[-5%] lg:left-[-12%] bg-white dark:bg-slate-900 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3 w-52"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400 font-black text-xl">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1.5">Local POS</span>
                  <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-purple-400" /> Daily sales sync</li>
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-purple-400" /> Tax compliance</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Card 4: CRM / Hubspot */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[10%] right-[0%] lg:right-[-8%] bg-white dark:bg-slate-900 rounded-xl p-3 shadow-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3 w-52"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0 text-orange-600 dark:text-orange-400 font-black text-xl">
                  H
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1.5">CRM System</span>
                  <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-orange-400" /> Lead capture</li>
                    <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-orange-400" /> Email followups</li>
                  </ul>
                </div>
              </motion.div>

              {/* Connecting Central Lines (SVG) — behind all floating cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[-1] opacity-50" viewBox="0 0 500 550" preserveAspectRatio="none">
                <path d="M120 100 Q 250 275 250 275" stroke="currentColor" className="text-blue-500" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path d="M420 160 Q 250 275 250 275" stroke="currentColor" className="text-emerald-500" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path d="M100 400 Q 250 275 250 275" stroke="currentColor" className="text-purple-500" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                <path d="M380 440 Q 250 275 250 275" stroke="currentColor" className="text-orange-500" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              </svg>

              {/* Center Element to resemble the connections */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#009FE5] p-3 rounded-3xl shadow-[0_0_40px_rgba(0,159,229,0.5)] z-20 border-[4px] border-[#102A52] w-20 h-20 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/logo/logo-light-transparent.svg" alt="Real Solutions PH" width={80} height={80} className="w-full h-full object-contain dark:hidden" />
                <Image src="/logo/logo-dark-transparent.svg" alt="Real Solutions PH" width={80} height={80} className="hidden w-full h-full object-contain dark:block" />
              </motion.div>

              {/* Fun terminal text pointing outside the blob */}
              <div className="absolute -bottom-8 right-4 lg:-bottom-10 lg:-right-4 flex items-center gap-2 group cursor-default z-30">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#009FE5] transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                <div className="font-mono text-[10px] lg:text-xs py-1.5 lg:py-2 px-2.5 lg:px-3 bg-slate-900 border border-[#009FE5]/40 text-[#53E4FE] rounded shadow-xl flex items-center gap-2">
                  <span className="text-[#009FE5]">$</span> npm start scaling
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
