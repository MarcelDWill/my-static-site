"use client";
import React from "react";

const COMPONENTS = [
  "Flight",
  "Lodging",
  "Food",
  "Local Transportation",
  "Intercity Transportation",
  "Activities",
  "Birthday Event",
  "Spending Money",
];

export default function BudgetBreakdown() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-[2rem] shadow-xl">
      <h3 className="text-xl font-bold mb-1 text-green-600 dark:text-green-400">💰 Budget Breakdown</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        No scary single total — just the pieces, filled in as real numbers come from Flight Watch and lodging
        research. Comfort level (budget-conscious to splurge) is collected in the Join Bash form.
      </p>
      <div className="space-y-3">
        {COMPONENTS.map((c) => (
          <div key={c} className="flex items-center justify-between p-2.5 rounded-xl bg-white/40 dark:bg-gray-700/30">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{c}</span>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">TBD</span>
          </div>
        ))}
      </div>
    </div>
  );
}
