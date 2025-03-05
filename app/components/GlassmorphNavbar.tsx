"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


export const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About Me", href: "/about_me" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/marcel-williams29414/", external: true },
  { title: "GitHub", href: "https://github.com/MarcelDWill", external: true },
];

export default function GlassmorphNavbar({ setNavbarHeight }: { setNavbarHeight: (height: number) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  // ✅ Load Dark Mode from Local Storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // ✅ Toggle Dark Mode and Save Preference
  const toggleDarkMode = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  // ✅ Close Dropdown on Page Change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // ✅ Detect Navbar Height
  const updateNavbarHeight = useCallback(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [setNavbarHeight]);

  useEffect(() => {
    updateNavbarHeight();
  }, [updateNavbarHeight]);

  return (
    <nav ref={navbarRef} className="fixed top-0 left-1/2 z-50 w-10/12 max-w-3xl -translate-x-1/2 flex flex-col items-center rounded-full bg-background/40 px-6 py-1.5 backdrop-blur-md shadow-lg md:rounded-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              className="dark:invert transition-all duration-500"
              src="/L4.svg"
              alt="MD logo"
              width={36}
              height={36}
            />
          </Link>

          {/* ✅ Desktop Navigation - Visible on Fullscreen */}
          <div className="hidden md:flex gap-6">
            {navigationItems.map((item) =>
              item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm">
                  {item.title}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className="text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm">
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>

        {/* ✅ Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="p-1.5 rounded-full bg-gray-200 text-white dark:bg-gray-800 dark:text-white shadow-md hover:scale-105">
          {isDark ? "🌙" : "☀️"}
        </button>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 text-white bg-gray-700 rounded-full text-sm">
            ☰
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu - Visible on Smaller Screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-background/80 backdrop-blur-md flex flex-col items-center justify-center gap-3 px-4 py-3 md:hidden"
          >
            {navigationItems.map((item) =>
              item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm">
                  {item.title}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className="text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm">
                  {item.title}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

