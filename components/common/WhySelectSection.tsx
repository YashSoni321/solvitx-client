"use client";
import { fadeInUp } from "@/common/common";
import { motion } from "framer-motion";

interface WhySelectSectionProps {
  title?: string;
  description?: string;
  whySelectUs?: WhySelectUsDataType[];
}

interface WhySelectUsDataType {
  title: string;
  description: string;
  icon: any;
}

export const WhySelectSection = ({
  title,
  description,
  whySelectUs,
}: WhySelectSectionProps) => {
  return (
    <motion.section className="py-10 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          {title}
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center my-10">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whySelectUs &&
            whySelectUs.map((benefit, index) => (
              <motion.div
                key={index}
                // variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};
