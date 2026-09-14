"use client";
import React, { useState } from "react";
import { submitToSheet } from "../lib/submitToSheet";

const RSVP_OPTIONS = ["Yes", "Probably", "Maybe"];
const STAY_LENGTHS = ["7 days", "8–9 days", "10+ days", "Flexible"];
const FLIGHT_PRIORITIES = [
  "Lowest price",
  "Shortest travel time",
  "Fewest connections",
  "Preferred airline",
  "Flexible / whatever works",
];
const BIRTHDAY_VOTE = [
  { id: "definitely", label: "Definitely — I want to be in Japan on the 26th" },
  { id: "preferred", label: "Preferred, but flexible if it saves real money" },
  { id: "price", label: "Price matters more than the exact date" },
];
const BUDGET_COMFORT = ["Budget-conscious", "Comfortable", "Splurge on selected experiences", "Flexible"];
const SPLURGE_CATEGORIES = ["Food", "Lodging", "Nightlife", "Experiences", "Shopping", "Transportation"];

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border transition-all ${
            value === opt
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-orange-400"
          }`}
        >
          <input type="radio" name={name} value={opt} checked={value === opt} onChange={() => onChange(opt)} className="hidden" />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rsvp, setRsvp] = useState("");
  const [stayLength, setStayLength] = useState("");
  const [flightPriority, setFlightPriority] = useState("");
  const [willingToDrive, setWillingToDrive] = useState("");
  const [birthdayVote, setBirthdayVote] = useState("");
  const [budgetComfort, setBudgetComfort] = useState("");
  const [splurge, setSplurge] = useState<string[]>([]);

  function toggleSplurge(cat: string) {
    setSplurge((prev) => (prev.includes(cat) ? prev.filter((x) => x !== cat) : [...prev, cat]));
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      passport: (document.getElementById("passport") as HTMLSelectElement).value,
      homeCity: (document.getElementById("homeCity") as HTMLInputElement).value,
      departureAirport: (document.getElementById("departureAirport") as HTMLInputElement).value,
      preferredAirline: (document.getElementById("preferredAirline") as HTMLInputElement).value,
      notes: (document.getElementById("notes") as HTMLTextAreaElement).value,
      rsvp,
      stayLength,
      flightPriority,
      willingToDriveForCheaperFare: willingToDrive,
      birthdayInJapanVote: birthdayVote,
      budgetComfort,
      splurgeOn: splurge,
    };

    if (!rsvp || !stayLength || !flightPriority || !willingToDrive || !birthdayVote || !budgetComfort) {
      alert("A few questions still need an answer before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      await submitToSheet("rsvp", formData);
      alert("Submitted! You're on the Bash board.");
      (event.target as HTMLFormElement).reset();
      setRsvp("");
      setStayLength("");
      setFlightPriority("");
      setWillingToDrive("");
      setBirthdayVote("");
      setBudgetComfort("");
      setSplurge([]);
    } catch (error) {
      console.error("Form submission error", error);
      alert("There was an issue submitting your RSVP.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="rsvp" className="glass bg-white/80 dark:bg-gray-800/80 p-8 rounded-[2rem] shadow-xl scroll-mt-24">
      <h3 className="text-2xl font-bold mb-1 text-orange-600 dark:text-orange-400">📝 Join Bash</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
        This isn&apos;t a commitment to buy anything — it&apos;s how we figure out group size, airports, and
        what people actually want out of this trip. Update it any time your plans change.
      </p>
      <form className="space-y-6" onSubmit={submitForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
            <input id="name" type="text" placeholder="John Doe" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400" required />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
            <input id="email" type="email" placeholder="john@example.com" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400" required />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Are you in?</label>
          <RadioGroup name="rsvp" options={RSVP_OPTIONS} value={rsvp} onChange={setRsvp} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Home City</label>
            <input id="homeCity" type="text" placeholder="e.g. Atlanta, GA" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400" required />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Preferred Departure Airport</label>
            <input id="departureAirport" type="text" placeholder="e.g. ATL" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400" required />
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 -mt-3 ml-1">
          Everyone doesn&apos;t need to take the same flight — this just helps us watch fares from the right cities.
        </p>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">How long can you stay?</label>
          <RadioGroup name="stayLength" options={STAY_LENGTHS} value={stayLength} onChange={setStayLength} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">What matters most for your flight?</label>
          <RadioGroup name="flightPriority" options={FLIGHT_PRIORITIES} value={flightPriority} onChange={setFlightPriority} />
          {flightPriority === "Preferred airline" && (
            <input
              id="preferredAirline"
              type="text"
              placeholder="Which airline?"
              className="mt-2 w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />
          )}
          {flightPriority !== "Preferred airline" && <input id="preferredAirline" type="hidden" />}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
            Willing to drive or fly to a different departure airport for a substantially cheaper international ticket?
          </label>
          <RadioGroup name="willingToDrive" options={["Yes", "No", "Maybe"]} value={willingToDrive} onChange={setWillingToDrive} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Being in Japan for the birthday (March 26)</label>
          <div className="flex flex-col gap-2">
            {BIRTHDAY_VOTE.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  birthdayVote === opt.id
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30"
                    : "border-gray-200 dark:border-gray-600 bg-white/40 dark:bg-transparent"
                }`}
              >
                <input type="radio" name="birthdayVote" checked={birthdayVote === opt.id} onChange={() => setBirthdayVote(opt.id)} className="w-5 h-5 accent-purple-500" />
                <span className="text-gray-800 dark:text-gray-200 text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Budget comfort level</label>
          <RadioGroup name="budgetComfort" options={BUDGET_COMFORT} value={budgetComfort} onChange={setBudgetComfort} />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">What would you splurge on? (optional)</label>
          <div className="flex flex-wrap gap-2">
            {SPLURGE_CATEGORIES.map((cat) => (
              <label
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border transition-all ${
                  splurge.includes(cat)
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-green-400"
                }`}
              >
                <input type="checkbox" checked={splurge.includes(cat)} onChange={() => toggleSplurge(cat)} className="hidden" />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Passport Status</label>
          <select id="passport" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required>
            <option value="">Select an option...</option>
            <option value="valid">✅ I have a valid passport</option>
            <option value="expired">🕰️ My passport is expired</option>
            <option value="none">❌ I don&apos;t have a passport yet</option>
            <option value="renewing">⏳ I am currently renewing/applying</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Comments & Requirements</label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Any dietary restrictions, or fun ideas for the trip?"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
          ></textarea>
        </div>

        <button disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-xl transition-all shadow-[0_4px_14px_0_rgba(255,87,34,0.39)] transform hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,87,34,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
