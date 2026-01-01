"use client";

import "./globals.css";
import GlassmorphNavbar from "@/app/components/GlassmorphNavbar";
import Background from "@/app/components/Background";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen text-foreground relative antialiased`}>
        
        {/* Modern Animated Background */}
        <Background />

        {/* Navbar */}
        <GlassmorphNavbar setNavbarHeight={setNavbarHeight} />

        {/* Content Area with Page Transition */}
        <AnimatePresence mode="wait"> 
          <motion.div
            key={typeof window !== "undefined" ? window.location.pathname : ""}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ paddingTop: navbarHeight }}
            className="relative w-full z-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>

      </body>
    </html>
  );
}
