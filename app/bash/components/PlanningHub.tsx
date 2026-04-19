"use client";
import React, { useState } from "react";

export default function PlanningHub() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      passport: (document.getElementById("passport") as HTMLSelectElement).value,
      notes: (document.getElementById("notes") as HTMLTextAreaElement).value
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbySHGSNkMecioGPFd5d4OoAA20bEkLVoEDpaq4pKf8daVbFcTRXLIawAWK5mUB5EttGkQ/exec", {
        method: "POST",
        mode: "no-cors", // Important to prevent CORS errors on Google Apps Script
        headers: {
          "Content-Type": "text/plain", // Allows no-cors POST request payload to pass through
        },
        body: JSON.stringify(formData)
      });

      alert("Submitted! You're on the Bash board.");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Form submission error", error);
      alert("There was an issue submitting your RSVP.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8 mt-4">
      {/* Key Trip Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">📅 Travel Window</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Flexible March 2027</p>
        </div>
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">⏱️ Trip Length</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Estimated 7 Days</p>
        </div>
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">💰 Budget</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Planning in progress</p>
        </div>
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">🎂 Goal Arrival</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Before birthday celebration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Signup Form Card */}
      <div className="glass bg-white/80 dark:bg-gray-800/80 p-8 rounded-[2rem] shadow-xl md:col-span-2">
        <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">📝 RSVP & Signup</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Let us know if youos`&apos;`re coming and any special requirements.</p>
        <form className="space-y-5" onSubmit={submitForm}>
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
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Passport Status</label>
            <select id="passport" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all" required>
              <option value="">Select an option...</option>
              <option value="valid">✅ I have a valid passport</option>
              <option value="expired">🕰️ My passport is expired</option>
              <option value="none">❌ I don`&apos;`t have a passport yet</option>
              <option value="renewing">⏳ I am currently renewing/applying</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Comments & Requirements</label>
            <textarea 
              id="notes"
              rows={4}
              placeholder="Any dietary restrictions, flight preferences, or fun ideas for the trip?" 
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
            ></textarea>
          </div>

          <button disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-xl transition-all shadow-[0_4px_14px_0_rgba(255,87,34,0.39)] transform hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,87,34,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
          </button>
        </form>
      </div>

      {/* Right Column Stack */}
      <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1">
        {/* Budget Tracker Card */}
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-[2rem] shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">💰 Budget Tracker</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Estimated Target: $4,500</p>
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="font-semibold text-gray-700 dark:text-gray-200">Flights</span><span>$1,400 est.</span></div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5"><div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '40%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="font-semibold text-gray-700 dark:text-gray-200">Hotels (10 nights)</span><span>$1,200 est.</span></div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5"><div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '20%' }}></div></div>
              </div>
            </div>
          </div>
          <button className="text-xs text-blue-500 hover:underline self-start">View Detailed Breakdown</button>
        </div>

        {/* Idea Board Card */}
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-6 rounded-[2rem] shadow-xl">
          <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">💡 Group Ideas</h3>
          <ul className="space-y-3 mb-4">
            <li className="p-3 bg-white/60 dark:bg-gray-700/60 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex justify-between items-center">
              <span className="text-sm text-gray-800 dark:text-gray-200">TeamLab Planets</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">3 votes</span>
            </li>
            <li className="p-3 bg-white/60 dark:bg-gray-700/60 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex justify-between items-center">
              <span className="text-sm text-gray-800 dark:text-gray-200">Street Kart Racing</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">5 votes</span>
            </li>
          </ul>
          <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-xl transition-all text-sm">
            + Add Suggestion
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
