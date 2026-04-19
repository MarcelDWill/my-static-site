"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BashLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white mb-4 drop-shadow-lg font-sans">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Japan at 50</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 italic drop-shadow-sm">
              &quot;A birthday trip worth the stamp in your passport`&quot;`
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-inner w-full md:w-auto mb-8">
               <p className="text-white font-bold tracking-[0.1em] text-xl mb-2 text-shadow-sm">
                 March 2027 <span className="text-sm font-normal text-orange-200">(final dates coming soon)</span>
               </p>
               <p className="text-gray-300 text-sm tracking-wide font-medium">
                 Goal: be in Japan for birthday week
               </p>
               
               {/* Countdown Placeholder */}
               <div className="mt-4 pt-4 border-t border-white/10">
                 <div className="flex flex-col items-center justify-center">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Countdown to Takeoff</p>
                    <div className="flex gap-4 text-white font-mono text-3xl font-bold bg-black/30 px-6 py-3 rounded-xl border border-white/5">
                       <div className="flex flex-col items-center"><span className="text-orange-400">1065</span><span className="text-[10px] text-gray-400">DAYS</span></div>
                       <span className="opacity-50">:</span>
                       <div className="flex flex-col items-center"><span className="text-orange-400">14</span><span className="text-[10px] text-gray-400">HRS</span></div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center">
               <Link href="/bash" className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold rounded-full shadow-[0_0_15px_rgba(255,100,100,0.5)] transition-all hover:scale-105 text-lg">
                 `&apos;`Im Interested`&apos;`
               </Link>
               <Link href="/bash/final-guide" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-all hover:scale-105 text-lg backdrop-blur-sm">
                 See Trip Details
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
              🗺️ Travel Guide
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
