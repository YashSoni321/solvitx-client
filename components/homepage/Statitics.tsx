import { motion } from "framer-motion";
import Image from "next/image";
import Stat1Image from "../../public/images/stat1.jpg";
import StatImage from "../../public/images/stat.jpg";
import { CountUpAnimation } from "@/pages/landingpage";
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
    // <div className="container mx-auto px-6 py-16 min-h-screen flex items-center justify-center">
    //   <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
    //     {/* Text Section */}
    //     <motion.div
    //       className="lg:w-1/2 w-full"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.3 }}
    //       variants={fadeInUp}
    //     >
    //       <h2 className="text-4xl lg:text-3xl  mb-6 text-balance leading-snug text-gray-900">
    //         Solvitx is your one place solution for all your marketing and
    //         technical needs. But are you still unsure on why you should choose
    //         us? Then let the numbers do the work.
    //       </h2>
    //       <p className="text-lg text-gray-500 mb-6">
    //         Rebranding for «Good Solution»
    //       </p>
    //       <motion.div
    //         className="flex justify-center mt-8"
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.95 }}
    //       >
    //         <button className="relative px-6 py-3 text-lg font-semibold text-white bg-black rounded-full shadow-lg overflow-hidden group transition-all duration-300">
    //           <span className="relative z-10">View More</span>
    //           <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
    //         </button>
    //       </motion.div>
    //     </motion.div>

    //     {/* Image + Stats Section */}
    //     <motion.div
    //       className="lg:w-1/2 w-full"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.2 }}
    //       transition={{ staggerChildren: 0.2 }}
    //     >
    //       {/* Images */}
    //       <motion.div className="flex gap-4 mb-8" variants={fadeInUp}>
    //         <Image
    //           src={Stat1Image}
    //           alt="Image 1"
    //           width={300}
    //           height={300}
    //           className="rounded-xl w-1/2 object-cover shadow-md"
    //         />
    //         <Image
    //           src={StatImage}
    //           alt="Image 2"
    //           width={300}
    //           height={300}
    //           className="rounded-xl w-1/2 object-cover shadow-md"
    //         />
    //       </motion.div>

    //       {/* Stats */}
    //       <div className="grid grid-cols-2 gap-8 text-center">
    //         <motion.div variants={fadeInUp}>
    //           <h3 className="text-5xl font-extrabold text-gray-900">2M+</h3>
    //           <p className="text-gray-500 mt-2">Views on Behance</p>
    //         </motion.div>

    //         <motion.div variants={fadeInUp}>
    //           <h3 className="text-5xl font-extrabold text-gray-900">106</h3>
    //           <p className="text-gray-500 mt-2">Stories in News</p>
    //         </motion.div>

    //         <motion.div variants={fadeInUp}>
    //           <h3 className="text-5xl font-extrabold text-gray-900">400</h3>
    //           <p className="text-gray-500 mt-2">Blog Posts</p>
    //         </motion.div>

    //         <motion.div variants={fadeInUp}>
    //           <h3 className="text-5xl font-extrabold text-gray-900">85%</h3>
    //           <p className="text-gray-500 mt-2">Success Reviews</p>
    //         </motion.div>

    //         <motion.div variants={fadeInUp} className="col-span-2">
    //           <h3 className="text-5xl font-extrabold text-gray-900">870</h3>
    //           <p className="text-gray-500 mt-2">Comments</p>
    //         </motion.div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <section className="py-10 md:py-28  text-black relative overflow-hidden">
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
            title="  Our Achievements"
            description=" Our track record reflects our commitment to excellence and client
              success."
            theme="dark"
            titleSize="large"
          />
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Numbers That Speak Volumes
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our track record reflects our commitment to excellence and client
            success.
          </p> */}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="text-center bg-gry-200 p-8 rounded-xl backdrop-blur-sm hover:bg-black/10 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                <CountUpAnimation target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-black-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
