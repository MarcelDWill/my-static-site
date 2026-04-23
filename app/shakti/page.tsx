"use client";
import React, { useState } from "react";
import Script from "next/script";

export default function ShaktiPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keycode, setKeycode] = useState("");
  const [error, setError] = useState(false);

  // You can change this to whatever passcode you want
  const CORRECT_KEYCODE = "030278"; 

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (keycode === CORRECT_KEYCODE) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setKeycode("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-80px)] p-4 flex items-center justify-center mt-16 md:mt-24">
        <div className="glass bg-white/10 dark:bg-black/60 p-8 rounded-[2rem] shadow-2xl text-center border border-gray-200 dark:border-white/10 max-w-sm w-full animate-fade-in">
          <div className="mb-6">
            <span className="text-5xl">🔒</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Restricted Access</h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-8">Enter the 6-digit numerical keycode to view.</p>
          
          <form onSubmit={handleUnlock} className="space-y-5">
            <div>
              <input 
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                value={keycode}
                onChange={(e) => setKeycode(e.target.value)}
                placeholder="Your Birthday"
                className={`w-full text-center tracking-[0.5em] text-2xl p-4 rounded-xl bg-white/50 dark:bg-black/50 border ${error ? 'border-red-500 text-red-500 dark:text-red-100' : 'border-gray-300 dark:border-white/20 text-gray-800 dark:text-white'} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                autoFocus
              />
              {error && <p className="text-red-500 dark:text-red-400 font-bold text-sm mt-3 animate-pulse">Incorrect code, please try again.</p>}
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg rounded-xl shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] transition-transform transform hover:-translate-y-1"
            >
              Unlock Page
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 md:p-8 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="glass bg-white/80 dark:bg-gray-800/80 p-8 md:p-16 rounded-[2rem] shadow-xl text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-12">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Shakti</span>
          </h1>
          
          {/* Elfsight Audio Player | Shakti */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="flex justify-center min-h-[300px]">
             <div className="elfsight-app-6ed85434-5ec2-4cb7-8b17-0d2971eed8c0 w-full max-w-2xl" data-elfsight-app-lazy></div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto border-t border-gray-200 dark:border-gray-700 pt-8">
             <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed tracking-wide px-4 mb-6">
               &quot;I wasn&apos;t sure what to say. Hi. I don&apos;t want to come off too strong or weird. Let me apologize for coming out of nowhere sending you a cactus and we haven&apos;t spoken in almost 30 years. 
               As a psychiatrist you will understand. You are registered in my brain as a safe space, my only safe space. Once again I apologize. If you want mdwilliams326@gmail.com or 3174966590.&quot;
             </p>
             <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic px-4">
               PS * = At this point I&apos;m writing this for me. I realized at some point that I really wanted to be with you. 
               And I know I never wanted to break up with you. I never thought anything positive about my future. 
               But my hurt ran deep and I restructured my emotions. I became an Emotionally Detached Operator and a Deep Internal Observer. 
               The memory of you became the funnel or stopgap. Most of my creative endeavors started with a memory of you.
                At the same time I could shut off any emotion for anyone in life, family included. 
                But because of something your memory was the only place I let emotions flow freely. 
                My ID clung to you because I didn&apos;t let go of how I felt, I believe you were the first person to honestly encourage me. 
                My rational brain lost out to the impulse of sending you that cactus. 
                I recognized the closer it got to being delivered the reality that I don&apos;t know who you became. 
                In some ways I don&apos;t think I did because I wanted to resemble how I thought you would&apos;ve remembered me.
                 
             </p>
             <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic px-4">
               Truly for 30 years I&apos;ve held onto hope for a reunion and it&apos;s crazy like a lifetime movie. 
                 But now I think I can move on, I think sending the cactus was that kid in me&apos;s last shot. 
                 Once it felt like it did what it could do, it sat down. Going forward for me, I&apos;m not sure. 
                 When I write you were my actual muse, I wrote with the intention of you reading it. 
                 That&apos;s not realistic, so I&apos;m wondering how my writing will be. 
                 I am melancholic right now with reality settling so maybe I&apos;ll hold on to that feeling for a while and use it.
             </p>
             <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic px-4">
               PPS I never doubted before to now how I felt about you. Never questioned it. 
               The silver necklace you gave me became a symbol of my heart. 
               I never take it off but I have to now.
                To satisfy the kid in me I will leave this page here. 
                Maybe I&apos;ll add to it occasionally, like a hidden journal only shared with the memory of you, that should satisfy it. 
                Be well and happy. I wonder if you&apos;ll ever read this and if you still like your PS&apos;s.
             </p>
             <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic px-4">

             </p>
             <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic px-4">
               PPPS Happy belated birthday x30 or is it 29
             </p>

          </div>
        </div>
      </div>
    </div>
  );
}
