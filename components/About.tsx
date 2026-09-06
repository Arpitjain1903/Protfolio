"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BarChart3, Database } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-[#2A2925] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Eyebrow & Title */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
              SECTION 01
            </span>
            <h2 className="text-[28px] font-semibold text-[#EDECE8]">About Me</h2>
          </div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-5 text-[15px] leading-[1.65] text-[#B8B6AE]">
              <p>
                I am a final-year <strong className="text-[#EDECE8] font-medium">B.Tech (AI & ML) student</strong> at Teerthanker Mahaveer University specializing in statistical analysis, hypothesis testing, and applied machine learning.
              </p>
              <p>
                My experience ranges from delivering fraud-detection ML pipelines surfacing significant risk indicators for business teams, to developing interactive salary-driver dashboards and publishing IEEE-format statistical research on industrial surrogate modeling.
              </p>
              <p>
                Proficient in SQL, statistical inference (ANOVA, Chi-Square, A/B Testing), and the Python data science stack (PyTorch, XGBoost, Scikit-learn, Statsmodels, Pandas). Open to Data Scientist and ML Engineer roles focused on experimentation and model-driven insight.
              </p>
            </div>

            {/* Quick Fact Cards */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-5 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-[#EDECE8]">Education</h3>
                  <p className="text-[12px] text-[#8A887F] mt-0.5">B.Tech CS — AI & ML (2023–2027)</p>
                  <p className="text-[11px] text-[#B8B6AE] font-mono mt-1">Teerthanker Mahaveer University • CGPA: 8.5/10</p>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-[#EDECE8]">Certifications</h3>
                  <ul className="text-[11px] text-[#B8B6AE] space-y-0.5 mt-1 font-mono">
                    <li>• Programming with Generative AI — NPTEL (2024)</li>
                    <li>• Spoken Tutorial — IIT Bombay (Git, Python, R - 90%+)</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#161513] border border-[#3A3833] text-[#EDECE8]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-[#EDECE8]">Core Domain Focus</h3>
                  <p className="text-[12px] text-[#8A887F] mt-0.5">Statistical Analysis & Machine Learning</p>
                  <p className="text-[11px] text-[#B8B6AE] font-mono mt-1">Hypothesis Testing • SMOTE • XGBoost • SQL</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
