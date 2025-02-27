'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      
      {/* ✅ Background Image Covers the Entire Screen */}
      <Image 
        src="/BG2.png" 
        alt="Background"
        fill
        quality={100}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-500 dark:opacity-70"
      />
      {/* ✅ Dim Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 dark:bg-black/60 -z-5 transition-all duration-500" />
      
      {/* ✅ Main Content */}
      <main className="relative flex flex-col gap-8 items-center sm:items-start transition-opacity duration-500 dark:opacity-80">
  <Image
    className="dark:invert transition-all duration-500"
    src="/L4.svg"
    alt="MD logo"
    width={380}
    height={380}
    priority
  />
</main>

      
    </div>
  );
}

