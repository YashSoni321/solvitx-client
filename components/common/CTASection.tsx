import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/common/common";

export const CTASSection = () => {
  return (
    <motion.section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          // variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          // variants={fadeInUp}
          className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
        >
          Get a free consultation and discover how our Salesforce development
          services can help your business grow.
        </motion.p>
        <motion.button
          // variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Schedule Your Free Consultation
        </motion.button>
      </div>
    </motion.section>
  );
};
