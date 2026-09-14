"use client";
import React, { useState } from "react";
import { submitToSheet } from "../lib/submitToSheet";

const CATEGORIES = ["Birthday dinner", "Daytime experience", "Nightlife", "Group photo", "Special excursion", "Other"];

export default function BirthdayEventCard() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState<{ category: string; idea: string }[]>([]);
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!idea.trim()) return;
    setSubmitting(true);
    try {
      await submitToSheet("birthdayEventIdea", { category, idea });
      setIdeas((prev) => [{ category, idea }, ...prev]);
      setIdea("");
    } catch {
      alert("Idea didn't submit — try again?");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl border-l-4 border-pink-500">
      <h3 className="text-2xl font-bold mb-1 text-pink-600 dark:text-pink-400 flex items-center gap-2">🎉 The Birthday Event — March 26</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        This gets its own plan even while the trip dates stay flexible. If Bash ends up traveling the week
        before, this becomes the Bash celebration night instead.
      </p>
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100">
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <input
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Drop an idea..."
          className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
        />
        <button disabled={submitting} className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold transition-all disabled:opacity-50">
          {submitting ? "..." : "Add"}
        </button>
      </form>
      {ideas.length > 0 && (
        <ul className="space-y-2">
          {ideas.map((it, i) => (
            <li key={i} className="p-3 bg-white/60 dark:bg-gray-700/60 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex justify-between items-center text-sm">
              <span className="text-gray-800 dark:text-gray-200">{it.idea}</span>
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">{it.category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
