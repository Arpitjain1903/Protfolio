import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Cpu } from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#161513] text-[#EDECE8] selection:bg-[#EDECE8] selection:text-[#161513]">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#161513]/85 backdrop-blur-md border-b border-[#2A2925]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[13px] text-[#8A887F] hover:text-[#EDECE8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-[12px] font-mono text-[#8A887F] uppercase tracking-wider">
            CASE STUDY
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Title & Metadata Header */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A887F]">
              {project.category}
            </span>
            <h1 className="text-[32px] sm:text-[42px] font-semibold text-[#EDECE8] leading-tight">
              {project.title}
            </h1>
          </div>

          <p className="text-[16px] leading-[1.65] text-[#B8B6AE] max-w-3xl">
            {project.fullDescription}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#EDECE8] hover:bg-[#FFFFFF] text-[#161513] text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1E1D1A] hover:bg-[#282622] text-[#EDECE8] border border-[#3A3833] text-[13px] font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] text-center space-y-1"
            >
              <div className="text-[28px] font-semibold text-[#EDECE8] font-mono">
                {metric.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#8A887F]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="p-6 rounded-[18px] bg-[#1E1D1A] border border-[#2A2925] space-y-3">
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A887F] flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-[#161513] border border-[#3A3833] text-[12px] text-[#EDECE8] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <section className="space-y-4 pt-4 border-t border-[#2A2925]">
          <h2 className="text-[22px] font-semibold text-[#EDECE8]">System Overview</h2>
          <p className="text-[15px] leading-[1.7] text-[#B8B6AE]">
            {project.overview}
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="space-y-4 pt-4 border-t border-[#2A2925]">
          <h2 className="text-[22px] font-semibold text-[#EDECE8]">Technical Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[16px] bg-[#1E1D1A] border border-[#2A2925] space-y-2"
              >
                <div className="text-[11px] text-[#8A887F] font-mono">MODULE 0{idx + 1}</div>
                <p className="text-[13.5px] text-[#B8B6AE] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Challenges & Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#2A2925]">
          {/* Engineering Challenges */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-semibold text-[#EDECE8]">Engineering Challenges</h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="p-4 rounded-[14px] bg-[#1E1D1A] border border-[#2A2925] text-[13px] text-[#B8B6AE] leading-relaxed">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Results */}
          <div className="space-y-4">
            <h3 className="text-[18px] font-semibold text-[#EDECE8]">Key Results & Outcomes</h3>
            <ul className="space-y-3">
              {project.results.map((result, idx) => (
                <li key={idx} className="p-4 rounded-[14px] bg-[#1E1D1A] border border-[#2A2925] text-[13px] text-[#B8B6AE] leading-relaxed flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#EDECE8] shrink-0 mt-0.5" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-12 text-center border-t border-[#2A2925]">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 bg-[#EDECE8] text-[#161513] text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
