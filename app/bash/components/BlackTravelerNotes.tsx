"use client";
import React from "react";

const TOPICS = [
  "Hair & grooming products worth bringing from home",
  "Skincare — what travels well, what to pack extra of",
  "Barber planning (shops that work with a range of hair textures)",
  "Nightlife considerations",
  "Cultural curiosity / things worth knowing going in",
  "Useful shopping info",
];

export default function BlackTravelerNotes() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl">
      <h3 className="text-xl font-bold mb-1 text-indigo-600 dark:text-indigo-400">🧴 Black Traveler Notes</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Practical, not ominous. This section is being researched properly before it gets published with real
        recommendations — placeholder topics below so nothing gets lost.
      </p>
      <ul className="space-y-2">
        {TOPICS.map((t) => (
          <li key={t} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/40 dark:bg-gray-700/30">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-200">{t}</span>
            <span className="ml-auto text-[10px] uppercase tracking-wide font-bold text-gray-400 dark:text-gray-500">Researching</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
