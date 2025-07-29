import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // Custom bullet icon

interface DescSectionProps {
  image: string;
  title: string;
  content: any;
  position: "left" | "right";
  heading?: string;
}

const DescSection = ({
  image,
  title,
  content,
  position,
  heading,
}: DescSectionProps) => {
  return (
    <motion.section
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8 }}
      // viewport={{ once: true }}
      className="py-4 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {heading && (
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, delay: 0.2 }}
            // viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {heading}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </motion.div>
        )}
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-white ">
          {title}
        </h2>
        <div
          className={`flex flex-col ${
            position === "right" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12`}
        >
          <motion.div
            // initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8, delay: 0.4 }}
            // viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-2xl ring-2 ring-purple-500/20">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            // initial={{ opacity: 0, x: position === "left" ? 50 : -50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8, delay: 0.4 }}
            // viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            {Array.isArray(content) ? (
              <div className="space-y-4">
                {content.map((point: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-lg transition duration-300"
                  >
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300 text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-300 text-base md:text-lg leading-relaxed tracking-normal">
                {content}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DescSection;
