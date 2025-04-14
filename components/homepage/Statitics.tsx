import { motion } from "framer-motion";
import Image from "next/image";
import Stat1Image from "../../public/images/stat1.jpg";
import StatImage from "../../public/images/stat.jpg";

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
    <div className="container mx-auto px-6 py-16 min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance leading-snug text-gray-900">
            Solvitx is your one place solution for all your marketing and
            technical needs. But are you still unsure on why you should choose
            us? Then let the numbers do the work.
          </h2>
          <p className="text-lg text-gray-500 mb-6">
            Rebranding for «Good Solution»
          </p>
          <motion.div
            className="flex justify-center mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="relative px-6 py-3 text-lg font-semibold text-white bg-black rounded-full shadow-lg overflow-hidden group transition-all duration-300">
              <span className="relative z-10">View More</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
          </motion.div>
        </motion.div>

        {/* Image + Stats Section */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Images */}
          <motion.div className="flex gap-4 mb-8" variants={fadeInUp}>
            <Image
              src={Stat1Image}
              alt="Image 1"
              width={300}
              height={300}
              className="rounded-xl w-1/2 object-cover shadow-md"
            />
            <Image
              src={StatImage}
              alt="Image 2"
              width={300}
              height={300}
              className="rounded-xl w-1/2 object-cover shadow-md"
            />
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 text-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl font-extrabold text-gray-900">2M+</h3>
              <p className="text-gray-500 mt-2">Views on Behance</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl font-extrabold text-gray-900">106</h3>
              <p className="text-gray-500 mt-2">Stories in News</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl font-extrabold text-gray-900">400</h3>
              <p className="text-gray-500 mt-2">Blog Posts</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl font-extrabold text-gray-900">85%</h3>
              <p className="text-gray-500 mt-2">Success Reviews</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="col-span-2">
              <h3 className="text-5xl font-extrabold text-gray-900">870</h3>
              <p className="text-gray-500 mt-2">Comments</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
