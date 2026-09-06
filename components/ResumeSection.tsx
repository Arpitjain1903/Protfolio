"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye, Award, Globe } from "lucide-react";

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 border-b border-[#2A2925] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header & 2 Clear Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
                SECTION 05 — CURRICULUM VITAE
              </span>
              <h2 className="text-[28px] font-semibold text-[#EDECE8]">Resume & Credentials</h2>
            </div>

            {/* Top-Right: 2 Buttons Only */}
            <div className="flex items-center gap-3">
              <a
                href="/Arpit_Jain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E1D1A] hover:bg-[#282622] text-[#EDECE8] border border-[#3A3833] text-[13px] font-medium px-4.5 py-2 rounded-full transition-colors"
              >
                <Eye className="w-4 h-4 text-[#8A887F]" />
                <span>View Resume</span>
              </a>

              <a
                href="/Arpit_Jain_Resume.pdf"
                download="Arpit_Jain_Resume.pdf"
                className="inline-flex items-center gap-2 bg-[#EDECE8] hover:bg-[#FFFFFF] text-[#161513] text-[13px] font-semibold px-4.5 py-2 rounded-full transition-all transform active:scale-95 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* 3 Information Cards (Clean Grid, No Redundant PDF Link) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Education & GPA */}
            <div className="p-6 rounded-[18px] bg-[#1E1D1A] border border-[#2A2925] space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
                  <FileText className="w-4 h-4 text-[#EDECE8]" />
                  Education & GPA
                </div>
                <h3 className="text-[16px] font-semibold text-[#EDECE8]">B.Tech Computer Science — AI & ML</h3>
                <p className="text-[13px] text-[#B8B6AE] leading-relaxed">
                  Teerthanker Mahaveer University, Moradabad (2023 – 2027)
                </p>
              </div>
              <div className="pt-3 flex items-center justify-between text-[12px] text-[#8A887F] border-t border-[#2A2925]">
                <span>6th Semester CGPA</span>
                <span className="font-mono font-semibold text-[#EDECE8]">8.5 / 10.0</span>
              </div>
            </div>

            {/* Card 2: Certifications */}
            <div className="p-6 rounded-[18px] bg-[#1E1D1A] border border-[#2A2925] space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
                  <Award className="w-4 h-4 text-[#EDECE8]" />
                  Certifications
                </div>
                <ul className="space-y-2 text-[13px] text-[#B8B6AE]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#EDECE8] mt-0.5">•</span>
                    <span>Programming with Generative AI — NPTEL (2024)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#EDECE8] mt-0.5">•</span>
                    <span>IIT Bombay Spoken Tutorial (Git, Python, R — 90%+)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 flex items-center justify-between text-[12px] text-[#8A887F] border-t border-[#2A2925]">
                <span>Verified Credentials</span>
                <span className="font-mono text-[#EDECE8]">NPTEL & IIT Bombay</span>
              </div>
            </div>

            {/* Card 3: Availability & Languages */}
            <div className="p-6 rounded-[18px] bg-[#1E1D1A] border border-[#2A2925] space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
                  <Globe className="w-4 h-4 text-[#EDECE8]" />
                  Availability & Languages
                </div>
                <div className="space-y-2.5 text-[13px] text-[#B8B6AE]">
                  <div>
                    <span className="text-[#8A887F] block text-[11px] uppercase tracking-wider">Status</span>
                    <p className="text-[#EDECE8] font-medium mt-0.5">Open to Data Science & ML Roles</p>
                  </div>
                  <div>
                    <span className="text-[#8A887F] block text-[11px] uppercase tracking-wider">Languages</span>
                    <p className="text-[#EDECE8] font-medium mt-0.5">English (Professional) • Hindi (Native)</p>
                  </div>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between text-[12px] text-[#8A887F] border-t border-[#2A2925]">
                <span>Work Location</span>
                <span className="font-mono text-[#EDECE8]">India / Remote</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

