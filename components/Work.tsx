"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Skeleton } from "./Skeleton";

export const Work: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="py-24 border-b border-[#2A2925] scroll-mt-16">
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
              SECTION 04
            </span>
            <h2 className="text-[28px] font-semibold text-[#EDECE8]">Featured Projects</h2>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? [1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="p-6 rounded-[20px] bg-[#1E1D1A] border border-[#2A2925] space-y-4">
                    <Skeleton className="w-full aspect-[16/10] rounded-[14px]" />
                    <Skeleton className="h-4 w-3/4 rounded-md" />
                    <Skeleton className="h-3 w-full rounded-md" />
                    <Skeleton className="h-3 w-5/6 rounded-md" />
                    <div className="flex gap-2 pt-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                  </div>
                ))
              : PROJECTS.map((project, idx) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group p-6 rounded-[20px] bg-[#1E1D1A] border border-[#2A2925] hover:border-[#3A3833] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Thumbnail / Header block */}
                      <div className="w-full aspect-[16/10] rounded-[14px] bg-[#161513] border border-[#2A2925] p-5 flex flex-col justify-between group-hover:border-[#3A3833] transition-colors relative overflow-hidden">
                        <div className="flex justify-between items-center text-[11px] text-[#8A887F] font-mono">
                          <span>PROJECT 0{idx + 1}</span>
                          <span className="w-2 h-2 rounded-full bg-[#EDECE8]/60" />
                        </div>
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#8A887F]">
                            {project.category}
                          </span>
                          <h4 className="text-[16px] font-semibold text-[#EDECE8] mt-1 group-hover:text-white transition-colors">
                            {project.title}
                          </h4>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[13.5px] leading-[1.6] text-[#B8B6AE]">
                        {project.shortDescription}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-[#161513] border border-[#2A2925] text-[#8A887F]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-[11px] px-2 py-1 text-[#8A887F]">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Link */}
                    <div className="pt-6 mt-4 border-t border-[#2A2925]/60 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#EDECE8] hover:text-white transition-colors group-hover:underline"
                      >
                        <span>View case study</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] text-[#8A887F] hover:text-[#EDECE8] transition-colors font-mono"
                      >
                        GitHub →
                      </a>
                    </div>
                  </motion.div>
                ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
