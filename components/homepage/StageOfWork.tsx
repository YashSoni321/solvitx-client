"use client";
import React from "react";
import BriefingCard from "./StageWorkBox";

const stages = [
  {
    title: "Strategy",
    description:
      "We analyze your business goals to build the perfect digital strategy",
  },
  {
    title: "Design",
    description:
      "We focus highly on the user experience to create impactful campaigns.",
  },
  {
    title: "Development",
    description:
      "With our user centric applications and websites you can reach a wider audience.",
  },
  {
    title: "Launch",
    description: "The final stage that shows the actual results.",
  },
];

const StagesSection = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Sticky Left - Stages List */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 lg:pr-10">
          <div className="lg:sticky top-24">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              STAGES OF <br /> WORK
            </h2>
            <ul className="space-y-4 text-xl font-bold text-gray-400">
              {stages.map((stage, index) => (
                <li key={index} className="hover:text-white transition-colors">
                  • {stage.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right - Stage Details Boxes */}
        <div className="lg:w-1/2 w-full space-y-16">
          {stages.map((stage, index) => (
            <BriefingCard
              key={index}
              title={stage?.title}
              index={index}
              desc={stage?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StagesSection;
