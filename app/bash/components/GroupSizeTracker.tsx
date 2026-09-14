"use client";
import React from "react";

const STAGES = [
  { label: "Interested", color: "border-gray-400", tint: "text-gray-600 dark:text-gray-300" },
  { label: "Probably", color: "border-yellow-500", tint: "text-yellow-600 dark:text-yellow-400" },
  { label: "Confirmed", color: "border-green-500", tint: "text-green-600 dark:text-green-400" },
  { label: "Flight Booked", color: "border-blue-500", tint: "text-blue-600 dark:text-blue-400" },
];

export default function GroupSizeTracker() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl border-l-4 border-gray-500">
      <h3 className="text-2xl font-bold mb-1 text-gray-700 dark:text-gray-200">👥 Group Size</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
        This matters more than it sounds — group size is what lets us go to Japanese tourism organizations,
        accommodations, restaurants, and tour providers and actually ask for something. Counts pull from the
        RSVP responses as they come in.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STAGES.map((s) => (
          <div key={s.label} className={`p-4 rounded-2xl bg-white/50 dark:bg-gray-700/40 border-l-4 ${s.color} text-center`}>
            <p className={`text-3xl font-black ${s.tint}`}>—</p>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
