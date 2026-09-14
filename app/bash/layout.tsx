"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BIRTHDAY = new Date("2027-03-26T00:00:00");

export default function BashLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [countdown, setCountdown] = useState<{ days: number; hours: number } | null>(null);

  useEffect(() => {
    const diffMs = BIRTHDAY.getTime() - Date.now();
    const days = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diffMs / (1000 * 60 * 60)) % 24));
    setCountdown({ days, hours });
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 md:p-8 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        {/* Full-width Hero Section */}
        <div className="glass bg-black/60 relative rounded-[2rem] p-8 md:p-16 overflow-hidden text-center shadow-2xl mb-8 border border-white/20 w-full">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-600/30 to-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            <Image 
              src="/JPN2.png" 
              alt="Japan Dragon Logo" 
              width={160} 
              height={160} 
              className="rounded-full shadow-[0_0_30px_rgba(255,100,100,0.5)] mb-8 object-cover bg-white/10 p-2 transform hover:scale-105 transition-transform duration-500"
            />
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white mb-2 drop-shadow-lg font-sans">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">BASH: JAPAN 2027</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 font-bold mb-6 drop-shadow-sm">
              50 Years. 7+ Days. One Hell of a Trip.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              We&apos;re heading to Japan in March 2027 to celebrate my 50th. The exact dates aren&apos;t locked
              yet — we&apos;re comparing airfare, accommodations, and everyone&apos;s availability to find the
              best week. March 26 is the birthday, so being in Japan that day is preferred, but a great deal
              could move Bash to the week before.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-inner w-full md:w-auto mb-8">
               <p className="text-white font-bold tracking-[0.1em] text-xl mb-2 text-shadow-sm">
                 March 2027 <span className="text-sm font-normal text-orange-200">• 7+ Days • Final Dates TBD</span>
               </p>
               <p className="text-gray-300 text-sm tracking-wide font-medium">
                 Current planning window: March 17 – April 1, 2027
               </p>

               {/* Countdown to the birthday itself, not a fixed departure date */}
               <div className="mt-4 pt-4 border-t border-white/10">
                 <div className="flex flex-col items-center justify-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Countdown to the Birthday (Mar 26)</p>
                    <div className="flex gap-4 text-white font-mono text-3xl font-bold bg-black/30 px-6 py-3 rounded-xl border border-white/5">
                       <div className="flex flex-col items-center"><span className="text-orange-400">{countdown ? countdown.days : "—"}</span><span className="text-[10px] text-gray-400">DAYS</span></div>
                       <span className="opacity-50">:</span>
                       <div className="flex flex-col items-center"><span className="text-orange-400">{countdown ? countdown.hours : "—"}</span><span className="text-[10px] text-gray-400">HRS</span></div>
                    </div>
                 </div>
               </div>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              Join the crew, tell us when you&apos;re available, and help build the trip.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center">
               <Link href="/bash#rsvp" className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold rounded-full shadow-[0_0_15px_rgba(255,100,100,0.5)] transition-all hover:scale-105 text-lg">
                 Join Bash
               </Link>
               <Link href="/bash#dates" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-all hover:scale-105 text-lg backdrop-blur-sm">
                 Vote on Dates
               </Link>
            </div>
          </div>
        </div>

        {/* Tab Switcher (Next.js Link Navigation) */}
        <div className="flex justify-center mb-8">
          <div className="glass bg-black/50 p-2 rounded-full inline-flex w-full md:w-auto overflow-hidden shadow-lg border border-white/10">
            <Link 
              href="/bash"
              className={`flex-1 md:w-56 py-3 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${pathname === "/bash" ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.7)] scale-105" : "text-white hover:bg-white/20"}`}
            >
              🏗️ Planning Hub
            </Link>
            <Link 
              href="/bash/final-guide"
              className={`flex-1 md:w-56 py-3 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${pathname === "/bash/final-guide" ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.7)] scale-105" : "text-white hover:bg-white/20"}`}
            >
              🗺️ Final Guide
            </Link>
          </div>
        </div>

        {/* Dynamic Page Content Render */}
        <div className="transition-opacity duration-500 w-full animate-fade-in">
           {children}
        </div>
      </div>
    </div>
  );
}
