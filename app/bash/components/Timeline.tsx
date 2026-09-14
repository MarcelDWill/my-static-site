"use client";
import React from "react";

const MILESTONES = [
  { date: "Sept 30, 2026", label: "Interest / RSVP" },
  { date: "Oct 15, 2026", label: "Airports & passport info" },
  { date: "Oct 25, 2026", label: "Preferred dates" },
  { date: "Late Oct – Nov 2026", label: "Serious airfare-shopping period" },
  { date: "Dec 1, 2026", label: "Lodging headcount" },
  { date: "Dec 15, 2026", label: "Accommodations target" },
  { date: "Jan 15, 2027", label: "Activity preferences" },
  { date: "Feb 1, 2027", label: "Itinerary target" },
  { date: "Mar 1, 2027", label: "Final travel details" },
];

export default function Timeline() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl">
      <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-100">🗓️ Planning Milestones</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
        Planning targets, not fake certainty — these shift as the group&apos;s answers come in.
      </p>
      <div className="relative pl-6 border-l-2 border-orange-300 dark:border-orange-800 space-y-5">
        {MILESTONES.map((m) => (
          <div key={m.label} className="relative">
            <span className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-orange-500" />
            <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{m.date}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
