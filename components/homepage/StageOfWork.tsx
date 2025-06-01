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
    <div className="min-h-screen bg-black px-6 py-10">
      <SectionHeading
        title="STAGES OF WORK"
        theme="gradient"
        titleSize="large"
      />
      <div className="container mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left - Timeline */}
        {/*  */}

        {/* Right - Detailed Cards */}
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
  );
};

export default StagesSection;
