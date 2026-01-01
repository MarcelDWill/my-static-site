"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, PenTool, Wrench } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass relative w-full max-w-4xl rounded-[2rem] p-8 md:p-12 overflow-hidden text-white"
      >
         {/* Decorative background glow inside card */}
         <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Headline */}
        <h1 className="relative z-10 mb-6 text-3xl font-bold leading-tight md:text-5xl">
          Engineering Experiences at the <br className="hidden md:block" />
          <span className="text-gradient">Intersection of Code and Creativity</span>
        </h1>

        {/* Intro */}
        <div className="relative z-10 space-y-6 text-base md:text-lg text-gray-200 leading-relaxed">
          <p>
            Hi, I’m <strong>Marcel Williams</strong>. I am a Front-End Developer and Computer Science student dedicated to building digital environments that feel as good as they function. With a professional background in technical systems support and a certificate in Software Engineering, I specialize in creating high-performance, accessible web applications using the <strong>PERN stack</strong>.
          </p>

          <hr className="border-white/10" />

          {/* Technical Creative Edge */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-blue-300">The Technical Creative Edge</h2>
            <p>
              Beyond standard full-stack development, I am a "Technical Creative." I don't just build websites; I build interactive ecosystems. Whether I'm developing a custom audio engine for my own folk and RnB projects or engineering a randomized narrative generator for my upcoming novel, I use my CS background to turn static content into immersive fan experiences.
            </p>
          </div>

          {/* What I Bring to the Table */}
          <div>
             <h2 className="mb-4 text-xl font-semibold text-blue-300">What I Bring to the Table:</h2>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Code className="w-6 h-6 text-blue-400 shrink-0" />
                    <div>
                        <strong className="block text-white mb-1">Modern Front-End Mastery</strong>
                        <span className="text-sm text-gray-400">Building responsive, accessible UIs with React, Next.js, and Tailwind CSS.</span>
                    </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Layers className="w-6 h-6 text-purple-400 shrink-0" />
                    <div>
                        <strong className="block text-white mb-1">Full-Stack Architecture</strong>
                        <span className="text-sm text-gray-400">Designing robust REST APIs and PostgreSQL database structures to power complex user journeys.</span>
                    </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <PenTool className="w-6 h-6 text-pink-400 shrink-0" />
                    <div>
                        <strong className="block text-white mb-1">Design-to-Code Fluency</strong>
                        <span className="text-sm text-gray-400">Bridging the gap between vision and reality using Figma, Adobe Suite, and clean, semantic code.</span>
                    </div>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Wrench className="w-6 h-6 text-yellow-400 shrink-0" />
                    <div>
                        <strong className="block text-white mb-1">Strategic Troubleshooting</strong>
                        <span className="text-sm text-gray-400">Over a decade of experience in field service and systems management, ensuring every project is built for reliability and scale.</span>
                    </div>
                </li>
             </ul>
          </div>

           {/* Currently Exploring */}
           <div>
            <h2 className="mb-2 text-xl font-semibold text-blue-300">Currently Exploring</h2>
            <p>
              I am currently pursuing my B.S. in Computer Science while developing AI-driven tools for indie artists. I am looking for opportunities where I can apply my engineering skills to help creators own their digital space.
            </p>
          </div>
          
          <p className="text-xl font-medium italic text-center pt-4 text-gradient">
            "Let's build something that moves the needle."
          </p>

        </div>
      </motion.div>
    </div>
  );
}
