"use client";

import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    id: "0.001",
    title: "Transparent Communication",
    description: "We guide you step by step to the desired result.",
  },
  {
    id: "0.002",
    title: "Projects Completed",
    description: "Delivering exceptional results to ensure satisfaction.",
  },
  {
    id: "0.003",
    title: "Clients Worldwide",
    description:
      "We work with businesses around the globe with consistency and excellence.",
  },
  {
    id: "0.004",
    title: "Revenue Generated",
    description:
      "We drive measurable growth, success, and revenue for every client.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <div className="bg-black text-white w-full py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <SectionHeading
          title="FEATURES"
          description=" We let our work speak for itself — transforming ideas into
              results, and creativity into impact. Our goal is to design experiences that inspire people, spark
              emotion, and create lasting value."
          theme="gradient"
          titleSize="large"
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 h-[300px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <p className="text-sm font-semibold text-white mb-2">
                  {feature.id}
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h2>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
              <div className="mt-6">
                <button className="text-white hover:underline font-medium text-sm">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
