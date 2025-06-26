"use client";
import { fadeInUp } from "@/common/common";
import { motion } from "framer-motion";

interface DevelopmentProcessProps {
  title?: string;
  description?: string;
  workingProcess?: WhySelectUsDataType[];
}

interface WhySelectUsDataType {
  title: string;
  description: string;
  step: string;
  icon: any;
}

export const DevelopmentProcess = ({
  workingProcess,
}: DevelopmentProcessProps) => {
  return (
    <motion.section className="py-10 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Development Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workingProcess &&
            workingProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-blue-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};
