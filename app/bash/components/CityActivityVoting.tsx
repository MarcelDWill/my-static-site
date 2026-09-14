"use client";
import React, { useState } from "react";
import { submitToSheet } from "../lib/submitToSheet";

const CITIES = ["Tokyo", "Osaka", "Kyoto", "Nara", "Hakone", "Hiroshima", "Kobe"];
const EXPERIENCES = [
  "Food",
  "Nightlife",
  "History",
  "Gaming / Anime",
  "Cars",
  "Shopping",
  "Temples",
  "Museums",
  "Nature",
  "Onsens",
  "Sports",
];

type ActivityRank = "" | "Must Do" | "Would Like" | "Don't Care";
const RANKS: ActivityRank[] = ["Must Do", "Would Like", "Don't Care"];

const rankColor: Record<string, string> = {
  "Must Do": "bg-red-500 text-white border-red-500",
  "Would Like": "bg-yellow-400 text-gray-900 border-yellow-400",
  "Don't Care": "bg-gray-300 text-gray-700 border-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600",
};

export default function CityActivityVoting() {
  const [name, setName] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [customCity, setCustomCity] = useState("");
  const [extraCities, setExtraCities] = useState<string[]>([]);

  const [activityRanks, setActivityRanks] = useState<Record<string, ActivityRank>>({});
  const [customActivity, setCustomActivity] = useState("");
  const [extraActivities, setExtraActivities] = useState<string[]>([]);

  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const allCities = [...CITIES, ...extraCities];
  const allActivities = [...EXPERIENCES, ...extraActivities];

  function toggleCity(c: string) {
    setCities((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  function addCustomCity() {
    if (!customCity.trim()) return;
    setExtraCities((prev) => [...prev, customCity.trim()]);
    setCities((prev) => [...prev, customCity.trim()]);
    setCustomCity("");
  }

  function addCustomActivity() {
    if (!customActivity.trim()) return;
    setExtraActivities((prev) => [...prev, customActivity.trim()]);
    setCustomActivity("");
  }

  async function submitVotes() {
    if (!name.trim()) {
      alert("Add your name first.");
      return;
    }
    setStatus("submitting");
    try {
      await submitToSheet("cityAndActivityVote", { name, cities, activityRanks });
      setStatus("done");
    } catch {
      setStatus("idle");
      alert("Vote didn't go through — try again?");
    }
  }

  return (
    <div className="space-y-6">
      {/* Base-city intro */}
      <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-[2rem] shadow-xl border-l-4 border-red-500">
        <h3 className="text-xl font-bold mb-2 text-red-600 dark:text-red-400">🏯 Home Bases (Not Locked)</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Current thinking is two primary bases — <strong>Tokyo + Osaka</strong> — with Kyoto, Nara, and
          possibly others handled as day trips. Nothing&apos;s locked yet; vote below and let the crew&apos;s
          interest in Kyoto (and friends) tell us whether any of them deserve an overnight of their own.
        </p>
      </div>

      <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl">
        <h3 className="text-2xl font-bold mb-1 text-red-600 dark:text-red-400">🏙️ City & Experience Voting</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          Pick the cities you&apos;re interested in, then rank the experiences that matter to you. One submission
          per person — resubmit any time your name to update it.
        </p>

        {status === "done" ? (
          <p className="text-green-600 dark:text-green-400 font-semibold">
            Thanks {name} — your votes are in.
          </p>
        ) : (
          <>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-6 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400"
              required
            />

            {/* Cities */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-3">Cities</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {allCities.map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => toggleCity(c)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                      cities.includes(c)
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-red-400"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  placeholder="Add a city..."
                  className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
                />
                <button type="button" onClick={addCustomCity} className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold">
                  + Add
                </button>
              </div>
            </div>

            {/* Experiences */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-3">Experiences</h4>
              <div className="space-y-2 mb-3">
                {allActivities.map((a) => (
                  <div key={a} className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white/40 dark:bg-gray-700/30">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{a}</span>
                    <div className="flex gap-1">
                      {RANKS.map((r) => (
                        <button
                          type="button"
                          key={r}
                          onClick={() => setActivityRanks((prev) => ({ ...prev, [a]: prev[a] === r ? "" : r }))}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all ${
                            activityRanks[a] === r
                              ? rankColor[r]
                              : "bg-white/60 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={customActivity}
                  onChange={(e) => setCustomActivity(e.target.value)}
                  placeholder="Add an experience..."
                  className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
                />
                <button type="button" onClick={addCustomActivity} className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold">
                  + Add
                </button>
              </div>
            </div>

            <button
              onClick={submitVotes}
              disabled={status === "submitting"}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-xl transition-all disabled:opacity-50"
            >
              {status === "submitting" ? "Submitting..." : "Submit My Votes"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
