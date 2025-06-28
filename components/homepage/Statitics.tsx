import { motion } from "framer-motion";
import Image from "next/image";
import Stat1Image from "../../public/images/stat1.jpg";
import StatImage from "../../public/images/stat.jpg";
// import { CountUpAnimation } from "@/pages/landingpage";
import { CountUpAnimation } from "../../pages/landing-page";
import SectionHeading from "../common/SectionHeading";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function StatsSection() {
  return (
    <section className="py-10 text-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <SectionHeading
            title="Our Achievements"
            description="Our track record reflects our commitment to excellence and client success."
            theme="dark"
            titleSize="large"
          />
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: 250, label: "Projects Delivered", suffix: "+" },
            { value: 98, label: "Client Satisfaction", suffix: "%" },
            { value: 10, label: "Years of Expertise", suffix: "+" },
            { value: 24, label: "Hour Support", suffix: "/7" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              custom={index}
              viewport={{ once: true }}
              className="text-center bg-gray-100 p-6 rounded-xl backdrop-blur-sm hover:bg-black/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                <CountUpAnimation target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-black text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
