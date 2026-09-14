"use client";
import React from "react";

export default function StatusCards() {
  return (
    <div className="space-y-4">
      {/* Key Trip Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">📅 Travel Window</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">March 2027 • 7+ Days • Final Dates TBD</p>
        </div>
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">⏱️ Trip Length</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">7–9 days, depending on the crew</p>
        </div>
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">💰 Budget</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Planning in progress</p>
        </div>
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">🎂 The Birthday</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">March 26 — preferred in Japan, not locked</p>
        </div>
      </div>

      {/* Current Planning Window */}
      <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl border-l-4 border-orange-500">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-orange-600 dark:text-orange-400 flex items-center gap-2">
          🪟 Current Planning Window
        </h3>
        <p className="text-2xl font-black text-gray-800 dark:text-gray-100 mb-2">March 17 – April 1, 2027</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
          This isn&apos;t the trip — it&apos;s the range we&apos;re planning inside of. The actual 7–9 day window
          gets picked after we compare airfare, lodging, and everyone&apos;s availability. Vote below to help
          narrow it down.
        </p>
      </div>
    </div>
  );
}
