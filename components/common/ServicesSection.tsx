"use client";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  title?: string;
  whyServicesData?: WhyServicesDataType[];
}

interface WhyServicesDataType {
  title: string;
  description: string;
  icon: any;
  color: string;
}

export const ServicesSection = ({
  title,
  whyServicesData,
}: ServicesSectionProps) => {
  return (
    <motion.section
      initial="initial"
      animate={"initial"}
      className="py-10 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyServicesData &&
            whyServicesData.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {/* {service.title} */}
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};
