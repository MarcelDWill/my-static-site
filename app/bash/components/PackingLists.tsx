"use client";
import React from "react";

const BRING_FROM_HOME = [
  "Big & tall clothing (sizes above L/XL are rare locally)",
  "Specialty footwear (size 15 / anything past ~US 12)",
  "Prescription medication (bring documentation too)",
  "Preferred grooming & skincare products",
  "A universal power adapter (Japan uses Type A/B outlets)",
  "Portable phone charger / battery pack",
];

const EASY_TO_BUY_IN_JAPAN = [
  "Standard toiletries, sunscreen, basic skincare",
  "Umbrellas (convenience stores sell cheap ones everywhere)",
  "Snacks, drinks, and convenience-store meals",
  "Standard-size clothing, socks, basics",
  "SIM cards / pocket wifi",
  "Souvenirs and gifts",
];

export default function PackingLists() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl">
      <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">🎒 Packing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2 text-sm">Bring From Home</h4>
          <ul className="space-y-2">
            {BRING_FROM_HOME.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-orange-500 rounded cursor-pointer" />
                <span className="text-gray-800 dark:text-gray-200 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2 text-sm">Easy to Buy in Japan</h4>
          <ul className="space-y-2">
            {EASY_TO_BUY_IN_JAPAN.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-green-500 rounded cursor-pointer" />
                <span className="text-gray-800 dark:text-gray-200 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
