"use client";
import React from "react";

const OUTREACH_ROWS = [
  { org: "Japan National Tourism Organization (JNTO)", city: "National" },
  { org: "Tokyo Convention & Visitors Bureau", city: "Tokyo" },
  { org: "Kyoto City Tourism Association", city: "Kyoto" },
  { org: "Osaka Convention & Tourism Bureau", city: "Osaka" },
];

export default function TourismResources() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl border-l-4 border-teal-500">
      <h3 className="text-2xl font-bold mb-1 text-teal-600 dark:text-teal-400">🎌 Group Deals & Japan Tourism Resources</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
        Once the headcount is clearer, we&apos;ll reach out to see what&apos;s actually available — visitor
        programs, group attractions, guides, cultural experiences, transit programs, and restaurant/group
        recommendations. Nothing here is confirmed. We won&apos;t promise a discount until we actually have one.
      </p>

      <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-3">Tourism Outreach Tracker</h4>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
              <th className="p-2">Organization</th>
              <th className="p-2">City</th>
              <th className="p-2">Contacted</th>
              <th className="p-2">Group Minimum</th>
              <th className="p-2">Benefit / Offer</th>
              <th className="p-2">Requirements</th>
              <th className="p-2">Deadline</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {OUTREACH_ROWS.map((r) => (
              <tr key={r.org} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2 font-medium text-gray-800 dark:text-gray-200">{r.org}</td>
                <td className="p-2 text-gray-600 dark:text-gray-300">{r.city}</td>
                <td className="p-2 text-gray-500 dark:text-gray-400">No</td>
                <td className="p-2 text-gray-500 dark:text-gray-400">TBD</td>
                <td className="p-2 text-gray-500 dark:text-gray-400">TBD</td>
                <td className="p-2 text-gray-500 dark:text-gray-400">TBD</td>
                <td className="p-2 text-gray-500 dark:text-gray-400">TBD</td>
                <td className="p-2"><span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs">Not started</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
        <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-1">🤝 Goodwill Guide Services</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          JNTO lists volunteer Goodwill Guide organizations across Japan — some guiding is free while visitors
          cover transportation, admissions, or meals along the way. Could be great for a private neighborhood
          or cultural day.{" "}
          <a
            href="https://www.japan.travel/en/plan/tic-guide-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-teal-600 dark:hover:text-teal-400"
          >
            JNTO Guide Services
          </a>
        </p>
      </div>
    </div>
  );
}
