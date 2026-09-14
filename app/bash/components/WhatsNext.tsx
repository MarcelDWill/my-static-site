"use client";
import React from "react";

const STEPS = [
  "Join Bash",
  "Vote on dates",
  "Compare airfare",
  "Confirm travelers",
  "Lock flights / lodging",
  "Build itinerary",
];

export default function WhatsNext() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl border-2 border-dashed border-orange-300 dark:border-orange-800">
      <h3 className="text-xl font-bold mb-1 text-orange-600 dark:text-orange-400">🧭 What Happens Next?</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
        Filling out a form on this page is not a commitment to buy anything. Here&apos;s where we actually are
        right now — and what still has to happen before anyone spends money.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {STEPS.map((step, i) => (
          <React.Fragment key={step}>
            <span
              className={`px-4 py-2 rounded-full text-sm font-bold ${
                i === 0
                  ? "bg-orange-500 text-white"
                  : "bg-white/60 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
              }`}
            >
              Step {i + 1}: {step}
            </span>
            {i < STEPS.length - 1 && <span className="text-gray-400 dark:text-gray-500">→</span>}
          </React.Fragment>
        ))}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        We&apos;re currently on <strong>Step 1</strong>, moving into <strong>Step 2</strong>.
      </p>
    </div>
  );
}
