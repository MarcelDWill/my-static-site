"use client";
import React from "react";

const CATEGORIES = [
  "Birthday dinner",
  "Group dinner",
  "Izakaya night",
  "Yakiniku",
  "Sushi",
  "Casual group meals",
  "Private / semi-private dining",
];

export default function GroupDining() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl border-l-4 border-yellow-500">
      <h3 className="text-2xl font-bold mb-1 text-yellow-600 dark:text-yellow-400">🍣 Group Dining (Research Only)</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        Nothing gets booked yet. Once we know whether Bash is six guys or sixteen, we can approach the right
        restaurants and tourism resources about group arrangements.
      </p>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <span key={c} className="px-3 py-1.5 rounded-full text-sm font-medium bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
