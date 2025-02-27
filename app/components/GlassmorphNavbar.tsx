"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";

// ✅ Navigation links
export const navigationItems = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/marcel-williams29414/" },
  { title: "GitHub", href: "https://github.com/MarcelDWill" },
  { title: "Contact Me", href: "mailto:mdwilliams326@gmail.com", icon: <Mail size={16} className="inline-block" /> }, // ✅ Properly align the mail icon
];

export default function GlassmorphNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // ✅ Load dark mode preference
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

  // ✅ Toggle Dark Mode
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="fixed top-3 left-1/2 z-50 flex w-10/12 max-w-3xl -translate-x-1/2 flex-col items-center rounded-full bg-background/40 px-6 py-2 backdrop-blur-md md:rounded-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          {/* ✅ Logo */}
          <Link href="/">
            <Image
              className="dark:invert transition-all duration-500"
              src="/L4.svg"
              alt="MD logo"
              width={36}
              height={36}
            />
          </Link>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navigationItems.map((item) =>
              item.href.startsWith("mailto:") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1 text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm"
                >
                  {item.icon} {item.title}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>

        {/* ✅ Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-1.5 rounded-full transition-all duration-500 
                     bg-gray-200 text-black dark:bg-gray-800 dark:text-white 
                     shadow-md hover:scale-105"
        >
          {isDark ? "🌙" : "☀️"}
        </button>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-white bg-gray-700 rounded-full text-sm"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/80 backdrop-blur-md flex flex-col items-center justify-center gap-3 px-4 py-3 md:hidden">
          {navigationItems.map((item) =>
            item.href.startsWith("mailto:") ? (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm"
              >
                {item.icon} {item.title}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-blue-300 transition duration-300 hover:underline hover:decoration-blue-300 text-sm"
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
