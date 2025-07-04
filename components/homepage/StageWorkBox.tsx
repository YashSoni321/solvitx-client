"use client";
import { motion } from "framer-motion";
import router from "next/router";

// Fallback illustrations for each stage (colored gradients when icons not available)
const stageColors = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-orange-500 to-amber-400",
  "from-green-500 to-emerald-400",
];

type BriefingCardProps = {
  index: number;
  title: string;
  desc: string;
  link: string;
};

export default function BriefingCard({
  index,
  title,
  desc,
  link,
}: BriefingCardProps) {
  // Generate gradient patterns if images don't exist
  const generatePattern = (index: number) => {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${stageColors[index]} rounded-xl flex items-center justify-center`}
      >
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          {index === 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          )}
          {index === 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          )}
          {index === 2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          )}
          {index === 3 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          )}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-[50vh] w-full max-w-2xl bg-gray-900 text-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 mx-auto overflow-hidden"
    >
      {/* Stage Image/Illustration */}
      <div className="h-1/2 relative overflow-hidden">
        {generatePattern(index)}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white font-bold text-3xl shadow-md border border-white/20">
            0{index + 1}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-6 h-1/2 flex flex-col justify-between">
        <h2 className="text-2xl font-bold tracking-wide text-white">{title}</h2>

        <div className="mt-4">
          <p className="text-lg text-gray-200 leading-relaxed">{desc}</p>
          {/* 
          <motion.button
            onClick={() => router.push(link)}
            whileHover={{ x: 5 }}
            className="mt-6 flex items-center text-purple-400 text-sm group"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform hover:cursor-crosshair"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button> */}
        </div>
      </div>
    </motion.div>
  );
}
