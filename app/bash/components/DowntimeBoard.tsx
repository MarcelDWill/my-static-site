"use client";
import React from "react";

const DOWNTIME_OPTIONS = [
  "Gaming",
  "Sports bars",
  "Whiskey / bar night",
  "Jazz",
  "Karaoke",
  "Sitting somewhere doing absolutely nothing",
  "Late-night food",
  "Shopping alone",
  "Spa / onsen",
  "Sleeping",
];

export default function DowntimeBoard() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl border-l-4 border-cyan-500">
      <h3 className="text-xl font-bold mb-1 text-cyan-600 dark:text-cyan-400">🛋️ Downtime</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        A seven-day group trip shouldn&apos;t become mandatory field exercises. These are all legitimate ways
        to spend a block of time — no sightseeing required.
      </p>
      <div className="flex flex-wrap gap-2">
        {DOWNTIME_OPTIONS.map((opt) => (
          <span key={opt} className="px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-50 dark:bg-cyan-900/20 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
            {opt}
          </span>
        ))}
      </div>
    </div>
  );
}
