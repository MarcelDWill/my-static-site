"use client";

import Link from "next/link";
import { useState } from "react";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ✅ Toggle Button for SideNav */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-2 top-5 bg-gray-800 text-white p-2 rounded-md z-50 hover:bg-gray-700 transition"
      >
        🔥
      </button>

      {/* ✅ SideNav Panel */}
      <nav
        className={`fixed left-0 top-0 h-screen w-60 bg-gray-500 text-white p-5 shadow-lg transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold mb-4">🔒 Hidden Pages</h2>
        <ul className="space-y-3">
          <li>
            <Link href="/hidden">
              <span className="hover:underline">🏠 Home</span>
            </Link>
          </li>
          <li>
            <Link href="/hidden/about">
              <span className="hover:underline">👤 About Me</span>
            </Link>
          </li>
          <li>
            <Link href="/hidden/heroes">
              <span className="hover:underline">💪🏿 Heroes</span>
            </Link>
          </li>
          <li>
            <Link href="/hidden/artwork">
              <span className="hover:underline">🎨 Artwork</span>
            </Link>
          </li>
        </ul>

        {/* ✅ Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white hover:text-red-500"
        >
          ✖
        </button>
      </nav>
    </div>
  );
}
