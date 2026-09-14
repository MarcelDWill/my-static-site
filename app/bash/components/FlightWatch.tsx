"use client";
import React, { useState } from "react";
import { submitToSheet } from "../lib/submitToSheet";

type Sighting = {
  traveler: string;
  airport: string;
  dates: string;
  fare: string;
  airline: string;
  stops: string;
  bags: string;
  found: string;
};

const PRICE_TARGETS = [
  { label: "Great Deal", color: "bg-green-500", note: "Book it — flag this immediately" },
  { label: "Good Price", color: "bg-blue-500", note: "Worth serious consideration" },
  { label: "Normal", color: "bg-yellow-500", note: "Expected range for the route" },
  { label: "Expensive", color: "bg-red-500", note: "Wait, or check other airports" },
];

const emptyRow: Sighting = { traveler: "", airport: "", dates: "", fare: "", airline: "", stops: "", bags: "", found: "" };

export default function FlightWatch() {
  const [rows, setRows] = useState<Sighting[]>([]);
  const [draft, setDraft] = useState<Sighting>(emptyRow);
  const [submitting, setSubmitting] = useState(false);

  async function addSighting(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.traveler || !draft.airport || !draft.fare) return;
    setSubmitting(true);
    try {
      await submitToSheet("flightSighting", { ...draft, bookedYet: "No" });
      setRows((prev) => [{ ...draft }, ...prev]);
      setDraft(emptyRow);
    } catch {
      alert("Couldn't log that fare — try again?");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl">
      <h3 className="text-2xl font-bold mb-1 text-blue-600 dark:text-blue-400">✈️ Flight Watch</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        A planning snapshot, not a guaranteed price. Fares move — log what you find so the group can compare
        airports and dates before anyone buys.
      </p>

      {/* Price target legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {PRICE_TARGETS.map((t) => (
          <div key={t.label} className="p-3 rounded-xl bg-white/50 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
              <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{t.label}</span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">{t.note}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
        Thresholds aren&apos;t set yet — we&apos;ll fill these in once we&apos;ve checked fares from a few departure airports.
      </p>

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
              <th className="p-2">Traveler</th>
              <th className="p-2">Airport</th>
              <th className="p-2">Travel Dates</th>
              <th className="p-2">Fare</th>
              <th className="p-2">Airline</th>
              <th className="p-2">Stops</th>
              <th className="p-2">Bags</th>
              <th className="p-2">Booked?</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-4 text-center text-gray-400 dark:text-gray-500 italic">
                  No fares logged yet — be the first to check flights and add one below.
                </td>
              </tr>
            ) : (
              rows.map((r, i) => (
                <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-2 font-medium text-gray-800 dark:text-gray-200">{r.traveler}</td>
                  <td className="p-2 text-gray-600 dark:text-gray-300">{r.airport}</td>
                  <td className="p-2 text-gray-600 dark:text-gray-300">{r.dates}</td>
                  <td className="p-2 text-gray-600 dark:text-gray-300">{r.fare}</td>
                  <td className="p-2 text-gray-600 dark:text-gray-300">{r.airline}</td>
                  <td className="p-2 text-gray-600 dark:text-gray-300">{r.stops}</td>
                  <td className="p-2 text-gray-600 dark:text-gray-300">{r.bags}</td>
                  <td className="p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Not yet</span></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add sighting form */}
      <form onSubmit={addSighting} className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <input placeholder="Traveler" value={draft.traveler} onChange={(e) => setDraft({ ...draft, traveler: e.target.value })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100" />
        <input placeholder="Airport (e.g. ATL)" value={draft.airport} onChange={(e) => setDraft({ ...draft, airport: e.target.value })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100" />
        <input placeholder="Travel dates" value={draft.dates} onChange={(e) => setDraft({ ...draft, dates: e.target.value })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100" />
        <input placeholder="Fare ($)" value={draft.fare} onChange={(e) => setDraft({ ...draft, fare: e.target.value })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100" />
        <input placeholder="Airline" value={draft.airline} onChange={(e) => setDraft({ ...draft, airline: e.target.value })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100" />
        <input placeholder="Stops" value={draft.stops} onChange={(e) => setDraft({ ...draft, stops: e.target.value })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100" />
        <input placeholder="Bags included?" value={draft.bags} onChange={(e) => setDraft({ ...draft, bags: e.target.value })} className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100" />
        <button disabled={submitting} className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold transition-all disabled:opacity-50">
          {submitting ? "Adding..." : "+ Log Fare"}
        </button>
      </form>
    </div>
  );
}
