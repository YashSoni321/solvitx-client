"use client";
import { motion } from "framer-motion";

interface TechStackSectionProps {
  techCategories: any;
  title?: string;
  description?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const TechStackSection = ({
  techCategories,
  title,
  description,
}: TechStackSectionProps) => {
  return (
    <motion.section variants={staggerContainer} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          {title ? title : "Our Technology Stack"}
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center my-10">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category: any, categoryIndex: number) => (
            <motion.div
              key={categoryIndex}
              variants={fadeInUp}
              className="p-6 rounded-xl bg-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech: any, techIndex: number) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className={`${tech.color} mb-2`}>{tech.icon}</div>
                    <span className="text-gray-300 text-sm font-bold text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
