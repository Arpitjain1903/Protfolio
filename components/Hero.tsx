"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Skeleton } from "./Skeleton";

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Stagger container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="pt-28 pb-12 min-h-[90vh] flex flex-col justify-between border-b border-[#2A2925] relative">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Column (55% split = 7/12 grid columns) */}
        <motion.div 
          className="md:col-span-7 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
            DATA SCIENTIST & AI/ML ENGINEER
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-[36px] sm:text-[46px] font-semibold text-[#EDECE8] leading-[1.15] tracking-[-0.01em]">
            Hi, I'm Arpit — <br className="hidden sm:inline" />
            I build with data
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} className="text-[14px] leading-[1.6] text-[#B8B6AE] max-w-[360px]">
            Final-year B.Tech AI & ML student specializing in statistical analysis, hypothesis testing, and predictive machine learning models.
          </motion.p>

          {/* Buttons row */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[#EDECE8] hover:bg-[#FFFFFF] text-[#161513] text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-all transform active:scale-95 shadow-sm"
            >
              <span>View projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/Arpit_Jain_Resume.pdf"
              download="Arpit_Jain_Resume.pdf"
              className="inline-flex items-center gap-2 bg-[#1E1D1A] hover:bg-[#282622] text-[#EDECE8] border border-[#3A3833] text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              <span>Download resume</span>
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={itemVariants} className="flex items-center gap-[26px] pt-4 border-t border-[#2A2925]/60 max-w-[360px]">
            <div>
              <div className="text-[18px] font-semibold text-[#EDECE8]">92%</div>
              <div className="text-[11px] text-[#8A887F] uppercase tracking-wider">Recall (SMOTE Model)</div>
            </div>
            <div className="w-[1px] h-8 bg-[#2A2925]" />
            <div>
              <div className="text-[18px] font-semibold text-[#EDECE8]">3</div>
              <div className="text-[11px] text-[#8A887F] uppercase tracking-wider">ML Internships</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (Expanded for dominant visual presence) */}
        <motion.div 
          className="md:col-span-5 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Card Container with Clean High-Quality Portrait Display */}
          <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-[4/5] rounded-[24px] overflow-hidden bg-[#1E1D1A] border border-[#2A2925] group shadow-2xl">
            {!imageLoaded ? (
              <Skeleton className="w-full h-full rounded-[24px]" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
              >
                {/* Natural Full Quality Portrait Photo */}
                <Image
                  src="/portrait.jpg"
                  alt="Arpit Jain - Data Scientist & AI/ML Engineer"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Bottom Gradient for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/90 via-[#161513]/20 to-transparent pointer-events-none" />

                {/* Overlay Floating Details */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] tracking-widest text-[#EDECE8] uppercase font-mono bg-[#161513]/80 px-3 py-1 rounded-full border border-[#2A2925] backdrop-blur-md shadow-sm">
                      ARPIT JAIN
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#EDECE8] animate-pulse" />
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161513]/85 border border-[#2A2925] backdrop-blur-md space-y-1 shadow-lg">
                    <div className="flex justify-between items-center text-[11px] font-semibold text-[#EDECE8]">
                      <span>DATA SCIENTIST</span>
                      <span className="font-mono text-[#8A887F]">2027</span>
                    </div>
                    <p className="text-[11px] text-[#B8B6AE] font-mono leading-tight">
                      B.Tech AI & ML • Teerthanker Mahaveer University
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Hero Footer Strip */}
      <div className="max-w-6xl mx-auto px-6 w-full pt-8 mt-12 border-t border-[#2A2925] flex justify-between items-center text-[12px] text-[#8A887F]">
        <span>© 2026 Arpit Jain</span>
        <span className="flex items-center gap-1">
          Scroll down <span className="animate-bounce">↓</span>
        </span>
      </div>
    </section>
  );
};
