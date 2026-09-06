"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Machine Learning Research Intern",
    company: "Suvidha Foundation (CSR Skill Development)",
    period: "Jan 2026 – Apr 2026",
    location: "Research Programme",
    summary: "Owned surrogate-modeling and statistical-validation work for CemFormer-X, collaborating with an industry mentor and a 5-person research team.",
    highlights: [
      "Built XGBoost surrogate models with <3% prediction error on clinker chemistry across 3 industrial plants.",
      "Co-authored IEEE-format manuscript on Pareto trade-off optimization projecting 12% cost/emissions reduction."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "EliteTech",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    summary: "Ran cross-validated model experiments and hyperparameter tuning across candidate machine learning algorithms.",
    highlights: [
      "Improved algorithm F1-score by 15% on a 100K+ row dataset through cross-validation.",
      "Engineered predictive features through statistical analysis, cutting data-prep time by 30% for a 5-person team."
    ]
  },
  {
    role: "Data Analyst (Python)",
    company: "Alfido Tech",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    summary: "Cleaned and structured raw multi-source data (CSV/JSON) into analysis-ready datasets using Pandas & NumPy.",
    highlights: [
      "Processed multi-source client datasets across 4 analytics projects.",
      "Enabled downstream statistical modeling and exploratory reporting for stakeholders."
    ]
  }
];

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 border-b border-[#2A2925] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
              SECTION 02
            </span>
            <h2 className="text-[28px] font-semibold text-[#EDECE8]">Journey & Experience</h2>
          </div>

          {/* Timeline / Stacked Cards */}
          <div className="space-y-6 max-w-3xl">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-[18px] bg-[#1E1D1A] border border-[#2A2925] hover:border-[#3A3833] transition-colors relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#2A2925]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#EDECE8]">{exp.role}</h3>
                      <p className="text-[13px] text-[#8A887F]">{exp.company} • {exp.location}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#8A887F] bg-[#161513] px-3 py-1 rounded-full border border-[#2A2925] w-fit">
                    {exp.period}
                  </span>
                </div>

                <div className="pt-4 space-y-3">
                  <p className="text-[14px] text-[#B8B6AE] leading-[1.6]">
                    {exp.summary}
                  </p>
                  <ul className="space-y-1.5 text-[13px] text-[#8A887F]">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#EDECE8] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
