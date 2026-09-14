"use client";
import React from "react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-10 md:p-16 rounded-[2rem] shadow-xl text-center">
      <p className="text-5xl mb-4">🗾</p>
      <h3 className="text-3xl font-black text-gray-800 dark:text-gray-100 mb-3">The Final Guide is Coming Soon</h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-2">
        Once flights and lodging are actually locked in, this page turns into the mobile travel companion —
        confirmations, addresses, train info, maps, emergency info, itinerary, and meet-up times.
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto mb-8">
        Right now, the real action is on the Planning Hub — dates, RSVP, and airfare are still being worked out.
      </p>
      <Link
        href="/bash"
        className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold rounded-full shadow-lg transition-all hover:scale-105"
      >
        Go to Planning Hub
      </Link>
    </div>
  );
}
