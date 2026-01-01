"use client";
import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black transition-colors duration-500">
      
      {/* Light Mode Background: Original BG2.png */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-100 dark:opacity-0">
          <Image
            src="/BG2.png"
            alt="Original Background"
            fill
            priority
            quality={100}
            className="object-cover"
         />
         <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Dark Mode Background: New Attached Image */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 dark:opacity-100">
         <Image
            src="/dark-bg.jpg"
            alt="Dark Mode Background"
            fill
            priority
            unoptimized // ✅ Prevent Next.js optimization to avoid compression blur
            quality={100}
            className="object-cover"
         />
           {/* Gradient Overlay for text readability in Dark Mode */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
      </div>

       {/* Shared Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
}
