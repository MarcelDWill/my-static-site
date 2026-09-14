"use client";
import React, { useState } from "react";
import { submitToSheet } from "../lib/submitToSheet";

const GAME_OPTIONS = ["Spades", "Bid Whist", "Dominoes", "Poker", "Uno / other cards", "Video games", "Teach me"];

export default function CardTable() {
  const [name, setName] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [bringing, setBringing] = useState("");
  const [customGame, setCustomGame] = useState("");
  const [extraGames, setExtraGames] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const allGames = [...GAME_OPTIONS, ...extraGames];

  function toggle(g: string) {
    setInterests((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));
  }

  function addCustom() {
    if (!customGame.trim()) return;
    setExtraGames((prev) => [...prev, customGame.trim()]);
    setInterests((prev) => [...prev, customGame.trim()]);
    setCustomGame("");
  }

  async function submit() {
    if (!name.trim()) {
      alert("Add your name first.");
      return;
    }
    setStatus("submitting");
    try {
      await submitToSheet("cardTable", { name, gamesInterested: interests, bringing });
      setStatus("done");
    } catch {
      setStatus("idle");
      alert("Didn't submit — try again?");
    }
  }

  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl">
      <h3 className="text-xl font-bold mb-1 text-purple-600 dark:text-purple-400">🎴 The Card Table</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
        So six people don&apos;t show up with six domino sets and zero cards — say what you&apos;re into and
        what you&apos;re bringing.
      </p>

      {status === "done" ? (
        <p className="text-green-600 dark:text-green-400 font-semibold">Got it, {name} — noted.</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400"
          />
          <div className="flex flex-wrap gap-2 mb-3">
            {allGames.map((g) => (
              <button
                type="button"
                key={g}
                onClick={() => toggle(g)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  interests.includes(g)
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-purple-400"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-4">
            <input
              value={customGame}
              onChange={(e) => setCustomGame(e.target.value)}
              placeholder="Add a game..."
              className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
            <button type="button" onClick={addCustom} className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold">
              + Add
            </button>
          </div>
          <input
            value={bringing}
            onChange={(e) => setBringing(e.target.value)}
            placeholder="What are you bringing? (e.g. cards, a Spades deck, dominoes)"
            className="w-full p-3 mb-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
          />
          <button
            onClick={submit}
            disabled={status === "submitting"}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold rounded-xl transition-all disabled:opacity-50"
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </>
      )}
    </div>
  );
}
