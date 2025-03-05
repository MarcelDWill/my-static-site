"use client";

import "./globals.css";
import GlassmorphNavbar from "@/app/components/GlassmorphNavbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased relative">
        
        {/* ✅ Background Image (Global for All Pages) */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <div className="relative w-full h-full">
            <Image
              src="/BG2.png"
              alt="Background"
              fill
              quality={100}
              priority
              className="object-cover"
            />
          </div>
          {/* ✅ Dark Overlay with Reduced Darkness */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-black/50"></div>
        </div>

        {/* ✅ Navbar with Dynamic Height */}
        <GlassmorphNavbar setNavbarHeight={setNavbarHeight} />

        {/* ✅ Content Area with Page Transition Effect */}
        <AnimatePresence mode="wait"> 
          <motion.div
            key={typeof window !== "undefined" ? window.location.pathname : ""}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: navbarHeight }}
            className="relative w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>

      </body>
    </html>
  );
}
