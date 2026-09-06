"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: { name: string; level: string }[];
}

const STACK_CATEGORIES: SkillCategory[] = [
  {
    category: "Statistics & Experimentation",
    skills: [
      { name: "Hypothesis Testing", level: "Core" },
      { name: "ANOVA & Chi-Square", level: "Core" },
      { name: "A/B Testing", level: "Core" },
      { name: "Regression & Clustering", level: "Applied" },
      { name: "Statistical Inference", level: "Advanced" }
    ]
  },
  {
    category: "Machine Learning & Algorithms",
    skills: [
      { name: "XGBoost & Ensembles", level: "Expert" },
      { name: "SMOTE Oversampling", level: "Expert" },
      { name: "PCA & t-SNE", level: "Applied" },
      { name: "Feature Engineering", level: "Advanced" },
      { name: "Cross-Validation Metrics", level: "Core" }
    ]
  },
  {
    category: "Languages & Core Libraries",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Advanced" },
      { name: "Pandas & NumPy", level: "Expert" },
      { name: "Scikit-learn & SciPy", level: "Advanced" },
      { name: "Statsmodels", level: "Applied" }
    ]
  },
  {
    category: "Data Viz, BI & Tools",
    skills: [
      { name: "Tableau & Power BI", level: "Proficient" },
      { name: "Plotly & Streamlit", level: "Advanced" },
      { name: "Matplotlib & Seaborn", level: "Proficient" },
      { name: "Jupyter & Git / GitHub", level: "Daily" },
      { name: "VS Code & Excel", level: "Daily" }
    ]
  }
];

export const Stack: React.FC = () => {
  return (
    <section id="stack" className="py-24 border-b border-[#2A2925] scroll-mt-16">
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
              SECTION 03
            </span>
            <h2 className="text-[28px] font-semibold text-[#EDECE8]">Technical Skills & Stack</h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STACK_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-[18px] bg-[#1E1D1A] border border-[#2A2925] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A887F] pb-3 border-b border-[#2A2925]">
                    {cat.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-full bg-[#161513] border border-[#3A3833] flex items-center justify-between gap-2 text-[12px] w-full"
                      >
                        <span className="text-[#EDECE8] font-medium">{skill.name}</span>
                        <span className="text-[10px] text-[#8A887F] font-mono">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
