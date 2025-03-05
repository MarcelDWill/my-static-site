"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      
      {/* ✅ Background Image Covers the Entire Screen 
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Image
          nd"
          fill
          quality=src="/BG2.png" // ✅ Homepage-specific background
          alt="Backgrou{100}
          className="w-full h-full object-cover"
        />
      </div>*/}
      {/* ✅ Dim Overlay 
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 dark:bg-black/60 -z-5 transition-all duration-500" />
      */}
      {/* ✅ Main Content */}
      <main className="relative flex flex-col items-center transition-opacity duration-500 dark:opacity-80">
        {/* ✅ Logo */}
        <Image
          className="dark:invert transition-all duration-500"
          src="/L4.svg"
          alt="MD logo"
          width={380}
          height={380}
          priority
        />

        {/* ✅ Centered "Software Engineer" Text */}
        <h2 className="mt-4 text-3xl font-bold text-white dark:text-blue-300 drop-shadow-lg">
          Software Engineer
        </h2>

        {/* ✅ Navigation Buttons */}
        <div className="mt-6 flex gap-4">
          <Link href="/about_me">
            <button className="px-6 py-2 text-white bg-gray-700 bg-opacity-60 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-black-100 hover:shadow-lg hover:ring-2 hover:ring-red-500">
              About Me
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="px-6 py-2 text-white bg-gray-700 bg-opacity-60 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-black-700 hover:shadow-lg hover:ring-2 hover:ring-green-500">
              Portfolio
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
