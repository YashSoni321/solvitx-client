import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { fadeInUp } from "@/common/common";

interface FAQProps {
  faqs: any[];
}

export const FAQSSection = ({ faqs }: FAQProps) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  return (
    <motion.section className="py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="mb-6 rounded-xl bg-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <span className="text-blue-400 transition-transform duration-300 transform">
                  {activeFaq === index ? (
                    <FaChevronUp className="h-5 w-5" />
                  ) : (
                    <FaChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeFaq === index ? "max-h-96 p-6 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
