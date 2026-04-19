"use client";
import React from "react";

export default function TravelGuide() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
      {/* Notice Card */}
      <div className="glass bg-orange-100/80 dark:bg-orange-900/40 p-4 rounded-xl shadow border-l-4 border-orange-500 lg:col-span-3 flex justify-center">
        <p className="text-lg font-bold text-orange-800 dark:text-orange-200">
          ⚠️ Subject to change depending on who comin
        </p>
      </div>

      {/* Flight Tracking */}
      <div className="glass bg-white/80 dark:bg-gray-800/80 p-8 rounded-[2rem] shadow-xl lg:col-span-3 overflow-x-auto">
        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">✈️ Flight Tracking</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
              <th className="p-3">Traveler</th>
              <th className="p-3">Airline</th>
              <th className="p-3">Departing</th>
              <th className="p-3">Arriving (NRT/HND)</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 font-medium text-gray-800 dark:text-gray-200">Marcel</td>
              <td className="p-3 text-gray-600 dark:text-gray-300">TBD</td>
              <td className="p-3 text-gray-600 dark:text-gray-300">March XX</td>
              <td className="p-3 text-gray-600 dark:text-gray-300">March YY</td>
              <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Searching</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* City Interest List */}
      <div className="glass bg-white/80 dark:bg-gray-800/80 p-8 rounded-[2rem] shadow-xl lg:col-span-2">
        <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">🏙️ City Interest List</h3>
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white/40 dark:bg-transparent">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Tokyo (3-4 Days)</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Shibuya, Shinjuku, Akihabara. Shopping, nightlife, and futuristic lights.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white/40 dark:bg-transparent">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Kyoto (2-3 Days)</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Temples, bamboo forests, traditional tea houses, and tranquil nature.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white/40 dark:bg-transparent">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Osaka (2 Days)</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Street food capital (Dotonbori), Osaka Castle, and Universal Studios.</p>
          </div>
        </div>
      </div>

      {/* Big & Tall Checklist */}
      <div className="glass bg-white/80 dark:bg-gray-800/80 p-8 rounded-[2rem] shadow-xl lg:col-span-1">
        <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">👕 Big & Tall Travel Notes</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Crucial prep for larger sizes in Japan.</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
             <input type="checkbox" className="mt-1 w-5 h-5 accent-indigo-500 rounded cursor-pointer" />
             <span className="text-gray-800 dark:text-gray-200 text-sm">Bring extra undershirts (sizes usually stop at L/XL)</span>
          </li>
          <li className="flex items-start gap-3">
             <input type="checkbox" className="mt-1 w-5 h-5 accent-indigo-500 rounded cursor-pointer" />
             <span className="text-gray-800 dark:text-gray-200 text-sm">Pack a large bath towel (hotel towels run very small)</span>
          </li>
          <li className="flex items-start gap-3">
             <input type="checkbox" className="mt-1 w-5 h-5 accent-indigo-500 rounded cursor-pointer" />
             <span className="text-gray-800 dark:text-gray-200 text-sm">Comfortable walking shoes (size 11+ is extremely rare to find)</span>
          </li>
          <li className="flex items-start gap-3">
             <input type="checkbox" className="mt-1 w-5 h-5 accent-indigo-500 rounded cursor-pointer" />
             <span className="text-gray-800 dark:text-gray-200 text-sm">Research Sakazen (Shinjuku) for Big & Tall shopping</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
