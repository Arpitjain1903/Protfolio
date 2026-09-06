"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { BookingModal } from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookCall = () => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: "https://calendly.com/arpitjainaj2444/30min",
      });
    } else {
      setIsBookingOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#161513] text-[#EDECE8] relative selection:bg-[#EDECE8] selection:text-[#161513]">
      {/* Sticky Header */}
      <Navbar onBookCall={handleBookCall} />

      {/* Main Single Page Content */}
      <main>
        <Hero />
        <About />
        <Journey />
        <Stack />
        <Work />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2A2925] text-center text-[12px] text-[#8A887F]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Arpit Jain. Designed & Built with Precision.</p>
          <div className="flex items-center gap-4 text-[#B8B6AE]">
            <a
              href="https://www.instagram.com/_.arpit.j?stkn=YWJpdjFyZXRvcXpz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href="https://github.com/Arpitjain1903"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/arpit-jain-505169313"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:arpitjainaj2444@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Fallback Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
