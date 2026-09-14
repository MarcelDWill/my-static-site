"use client";
import React, { useState } from "react";
import { submitToSheet } from "../lib/submitToSheet";

const WINDOW_OPTIONS = [
  { id: "mar17-25", label: "March 17 – 25" },
  { id: "mar23-apr1", label: "March 23 – April 1" },
  { id: "mar24-apr1", label: "March 24 – April 1" },
  { id: "flexible", label: "I'm flexible — whatever works for the group" },
];

export default function DateVote() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || selected.length === 0) return;
    setStatus("submitting");
    try {
      await submitToSheet("dateVote", { name, windows: selected });
      setStatus("done");
    } catch {
      setStatus("idle");
      alert("Vote didn't go through — try again?");
    }
  }

  return (
    <div id="dates" className="glass bg-white/80 dark:bg-gray-800/80 p-6 md:p-8 rounded-[2rem] shadow-xl scroll-mt-24">
      <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">🗳️ Date Vote</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
        Check every window that works for you — not just one. These are planning candidates, not
        final dates. The more overlap we find, the easier this decision gets.
      </p>

      {status === "done" ? (
        <p className="text-green-600 dark:text-green-400 font-semibold">
          Thanks {name || "there"} — your availability is logged. You can resubmit any time your plans change.
        </p>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400"
            required
          />
          <div className="space-y-2">
            {WINDOW_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  selected.includes(opt.id)
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                    : "border-gray-200 dark:border-gray-600 bg-white/40 dark:bg-transparent"
                }`}
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-500 rounded cursor-pointer"
                  checked={selected.includes(opt.id)}
                  onChange={() => toggle(opt.id)}
                />
                <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{opt.label}</span>
              </label>
            ))}
          </div>
          <button
            disabled={status === "submitting"}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-xl transition-all disabled:opacity-50"
          >
            {status === "submitting" ? "Submitting..." : "Submit My Availability"}
          </button>
        </form>
      )}
    </div>
  );
}
