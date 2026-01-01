"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

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

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    // Default to dark if no theme set, or check system pref
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const updateNavbarHeight = useCallback(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [setNavbarHeight]);

  useEffect(() => {
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, [updateNavbarHeight]);

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      <nav
        ref={navbarRef}
        className="glass flex items-center justify-between px-6 py-3 rounded-full w-full max-w-4xl transition-all duration-300"
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="relative flex items-center justify-center">
            <div className="relative h-10 w-10 overflow-hidden transition-transform hover:rotate-12">
               <Image
                  src="/L4.svg"
                  alt="MD logo"
                  fill
                  className="object-contain invert" // Always invert to make it white against dark background
               />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  pathname === item.href
                    ? "text-blue-500 font-semibold"
                    : "text-foreground/80"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon className="h-5 w-5 text-yellow-400" /> : <Sun className="h-5 w-5 text-orange-500" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 10 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 mx-4 glass rounded-[2rem] flex flex-col items-center gap-4 md:hidden shadow-2xl"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`text-base font-medium transition-colors hover:text-blue-500 ${
                    pathname === item.href
                      ? "text-blue-500"
                      : "text-foreground/80"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
