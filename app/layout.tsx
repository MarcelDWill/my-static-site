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

        {/* --- AI Assistant iFrame Container --- */}
        <div 
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}
        >
          

          <button 
            onClick={() => window.open('https://opal.google/?flow=drive:/1_Tg0b_hsY0gV1uRBqR9QDYIbUTX__AVd&mode=app', '_blank')}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              padding: '12px 24px',
              borderRadius: '50px',
              backgroundColor: '#000',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            💬 Chat with Marcel&apos;s Assistant
          </button>
        </div>            {/* Page Content */}
            {children}
          </motion.div>
        </AnimatePresence>

      </body>
    </html>
  );
}
