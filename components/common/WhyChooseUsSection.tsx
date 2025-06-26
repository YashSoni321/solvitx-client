import { fadeInUp } from "@/common/common";
import React from "react";
import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";

interface WhyChooseUsDataType {
  title: string;
  whyChooseUs: any[];
}

const WhyChooseUsSection = ({ title, whyChooseUs }: WhyChooseUsDataType) => {
  return (
    <motion.section className="py-10 bg-gray-900 ">
      <TitleSection title={title} />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">{}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
