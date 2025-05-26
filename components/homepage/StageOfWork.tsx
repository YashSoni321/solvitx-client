"use client";
import React from "react";
import BriefingCard from "./StageWorkBox";
import SectionHeading from "../common/SectionHeading";
import { motion } from "framer-motion";

const stages = [
  {
    title: "Strategy",
    link: "/digitalmarketing",
    description:
      "We analyze your business goals to build the perfect digital strategy",
  },
  {
    title: "Design",
    link: "/uiuxdesign",
    description:
      "We focus highly on the user experience to create impactful campaigns.",
  },
  {
    title: "Development",
    link: "/webdevelopment",
    description:
      "With our user centric applications and websites you can reach a wider audience.",
  },
  {
    title: "Launch",
    link: "/contact",
    description: "The final stage that shows the actual results.",
  },
];

const StagesSection = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-20">
      <SectionHeading
        title="STAGES OF WORK"
        theme="gradient"
        titleSize="large"
      />
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left - Timeline */}
        <div className="lg:w-1/2 w-full mb-12 lg:mb-0 lg:pr-10">
          <div className="lg:sticky top-24 space-y-10 pl-4 border-l border-gray-700">
            {stages.map((stage, index) => (
              <div key={index} className="relative pl-6 group">
                {/* Timeline Dot */}
                <span className="absolute -left-[10px] top-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full ring-2 ring-black transition-transform duration-300 group-hover:scale-110" />

                {/* Content */}
                <h3 className="text-lg font-semibold text-white">
                  <span className="text-pink-400 mr-2">{index + 1}.</span>
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-sm">
                  {stage.description.slice(0, 100)}...
                </p>

                {/* Optional Learn More Button */}
                {stage.link && (
                  <a
                    href={stage.link}
                    className="inline-block mt-2 text-sm text-purple-400 hover:underline transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Detailed Cards */}
        <div className="lg:w-1/2 w-full flex flex-wrap gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="w-full lg:w-[calc(50%-0.75rem)]" // 50% width minus half of gap (6 = 1.5rem)
            >
              <BriefingCard
                link={stage?.link}
                title={stage?.title}
                index={index}
                desc={stage?.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StagesSection;
