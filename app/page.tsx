"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Briefcase, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass relative flex w-full max-w-3xl flex-col items-center rounded-[2rem] p-8 text-center md:p-16 overflow-hidden"
      >
        {/* Decorative background glow inside card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

        {/* Profile / Logo Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8 z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          {/* Logo */}
          <div className="relative h-32 w-32 md:h-40 md:w-40 filter drop-shadow-2xl transition-transform hover:scale-105 duration-300">
            <Image
              src="/L4.svg"
              alt="MD Logo"
              fill
              className="object-contain dark:invert"
              priority
            />
          </div>

          {/* Profile Image */}
           <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl transition-transform hover:scale-105 duration-300">
            <Image
              src="/profile-pic-square.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="z-10"
        >
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-6xl">
            <span className="text-gradient">Software Engineer</span>
          </h1>
          <p className="mb-10 text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
            Building digital experiences with modern web technologies. Focused on performance, accessibility, and design.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row z-10 w-full sm:w-auto"
        >
          <Link href="/about_me" className="w-full sm:w-auto">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white/5 px-8 py-3 text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-lg border border-white/10 hover:border-white/20">
              <User className="h-5 w-5 transition-transform group-hover:scale-110" />
              About Me
            </button>
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:shadow-blue-500/25 hover:scale-105">
              <Briefcase className="h-5 w-5 transition-transform group-hover:scale-110" />
              Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
