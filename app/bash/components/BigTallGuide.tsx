"use client";
import React from "react";

const SECTIONS: { title: string; items: string[] }[] = [
  {
    title: "Clothing & Shoes",
    items: [
      "Bring extra undershirts and base layers — sizes usually stop at L/XL",
      "Pack primary walking shoes; size 15 (and anything past ~US 12) is extremely hard to find locally, so don't count on replacing footwear there",
      "A backup pair of comfortable shoes is worth the suitcase space on a 7+ day trip with a lot of walking",
    ],
  },
  {
    title: "Seating, Space & Comfort",
    items: [
      "Some trains, taxis, and restaurant seating (counter bars, tatami rooms) run tight — worth knowing before booking activities",
      "Request roomier seat options on long flights and shinkansen legs where possible",
    ],
  },
  {
    title: "Onsens & Bathing",
    items: [
      "Most onsens don't have towel/robe sizes larger than XL — bring your own large bath towel",
      "Tattoo policies vary by onsen — worth checking individual spots in advance if this applies to anyone in the group",
    ],
  },
  {
    title: "Hotel Rooms & Bathrooms",
    items: [
      "Standard Japanese hotel rooms and bathrooms run smaller than US equivalents — look for rooms flagged as larger or Western-style when booking",
      "Hotel towels tend to run small — pack one full-size bath towel if that matters to you",
    ],
  },
  {
    title: "Shopping & Packing",
    items: [
      "Research Sakazen (Shinjuku) and similar big & tall retailers as a backup, not a primary plan",
      "Prescription medication and preferred grooming/toiletry products belong in checked bags from home — availability varies a lot locally",
    ],
  },
];

export default function BigTallGuide() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl">
      <h3 className="text-xl font-bold mb-1 text-indigo-600 dark:text-indigo-400">👕 Big, Tall & Comfortable in Japan</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
        Crucial prep for larger sizes — clothing, footwear, and space considerations that are easy to
        overlook until you&apos;re already there.
      </p>
      <div className="space-y-5">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-2">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 accent-indigo-500 rounded cursor-pointer" />
                  <span className="text-gray-800 dark:text-gray-200 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
