"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#161513]/85 backdrop-blur-md border-b border-[#2A2925] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Initials Logo */}
        <a 
          href="#" 
          className="text-[14px] font-semibold tracking-tight text-[#EDECE8] hover:opacity-80 transition-opacity"
        >
          AJ
        </a>

        {/* Center-left: Nav links */}
        <nav className="hidden sm:flex items-center gap-4 md:gap-5 text-[12px] font-medium text-[#8A887F]">
          <a href="#about" className="hover:text-[#EDECE8] transition-colors">
            About
          </a>
          <span className="text-[#3A3833]">•</span>
          <a href="#journey" className="hover:text-[#EDECE8] transition-colors">
            Journey
          </a>
          <span className="text-[#3A3833]">•</span>
          <a href="#stack" className="hover:text-[#EDECE8] transition-colors">
            Stack
          </a>
          <span className="text-[#3A3833]">•</span>
          <a href="#contact" className="hover:text-[#EDECE8] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: Social Icons & Book a Call Pill Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 text-[#A6A49C]">
            <a
              href="https://www.instagram.com/_.arpit.j?stkn=YWJpdjFyZXRvcXpz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="hover:text-white transition-colors opacity-80 hover:opacity-100 p-1"
            >
              <Instagram className="w-[19px] h-[19px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpit-jain-505169313"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-white transition-colors opacity-80 hover:opacity-100 p-1"
            >
              <Linkedin className="w-[19px] h-[19px]" />
            </a>
          </div>

          <button
            onClick={onBookCall}
            className="bg-[#EDECE8] hover:bg-[#FFFFFF] text-[#161513] text-[13px] font-medium px-4 py-2 rounded-full transition-all transform active:scale-95 shadow-sm"
          >
            Book a call
          </button>
        </div>
      </div>
    </header>
  );
};

