"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import UserPic from "../../public/images/user.jpg"; // Replace with actual image path

// const testimonials = [
//   {
//     id: 1,
//     name: "Anastasia Yarovka",
//     role: "Founder, Creative Studio",
//     quote:
//       "I want to express my immense gratitude to the team! They are always in touch, quick, and very efficient.",
//     image: UserPic,
//   },
//   {
//     id: 2,
//     name: "Marcus Levin",
//     role: "CTO, TechFlow",
//     quote:
//       "They took our ideas and turned them into a living, breathing brand. Incredibly talented group!",
//     image: UserPic,
//   },
//   {
//     id: 3,
//     name: "Priya Nair",
//     role: "CMO, BoldBrands",
//     quote:
//       "The most creative and responsive team I’ve worked with. They overdeliver, every time!",
//     image: UserPic,
//   },
// ];
const testimonials = [
  {
    id: 1,
    name: "Akash Chauhan",
    role: "CEO",
    quote: `SolvitX has helped me grow my business from scratch. With their
  pro marketing solutions I have successfully managed to double my
  conversation rates.`,
    avatarInitial: "A",
    color: "bg-blue-500",
    image: UserPic,
  },
  {
    id: 2,
    name: "Elina Sinha",
    role: "Founder",
    quote:
      "Our fashion brand struggled to stand in the digital space for 2 years. We tried many strategies and tactics, but nothing worked for us. It is all thanks to SolvitX that we have managed to improve our Social Media campaigns that have increased our organic traffic by more than 150%.",
    // "We run a non profit organisation. Our dynamic Android Application developed by SolvitX has helped us create a positive impact towards our vision. It is all because of their commitment and all time expert support that our application is well appreciated and used by thousands of users.",
    avatarInitial: "M",
    color: "bg-purple-500",
    image: UserPic,
  },
  {
    id: 3,
    name: "Melanie Diers",
    role: "Director,",
    quote:
      "We run a non profit organisation. Our dynamic Android Application developed by SolvitX has helped us create a positive impact towards our vision. It is all because of their commitment and all time expert support that our application is well appreciated and used by thousands of users.",
    avatarInitial: "S",
    color: "bg-pink-500",
    image: UserPic,
  },
];
const arrayOfItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5, 4, 3, 2, 3, 4, 6, 7, 4, 3, 2,
];

const fadeVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="bg-black text-white font-sans relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center my-14 text-center px-6"
        initial="initial"
        animate="animate"
        variants={fadeVariants}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-gray-400 via-grey-500 to-gray-800 bg-clip-text text-transparent">
          We let our work speak for itself.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Explore our portfolio to see how we turn ideas into results,
          creativity into impact, and vision into awards.
        </p>
      </motion.div>

      {/* Testimonial Card */}
      <div className=" mx-auto w-11/12 md:w-2/3 lg:w-1/2 h-[360px] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl text-white"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-white/80 rounded-full"></div>
            </div>
            <p className="text-5xl leading-none mb-4 text-pink-500">“</p>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {current.quote}
            </p>

            <div className="flex items-center">
              <Image
                alt={current.name}
                className="w-12 h-12 rounded-full mr-4 border-2 border-white/40"
                height={48}
                width={48}
                src={current.image}
              />
              <div>
                <p className="font-semibold text-white">{current.name}</p>
                <p className="text-sm text-gray-400">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Marquee */}
      <div className="mt-14 py-6 overflow-hidden whitespace-nowrap relative z-0 border-t border-gray-700">
        <motion.div
          className="inline-block animate-marquee"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {arrayOfItems.map((_, idx) => (
            <span
              key={idx}
              className="mx-6 text-4xl font-bold text-white opacity-30"
            >
              SolvitX
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating Button */}
      <div className="absolute top-6 right-6 z-10">
        <button className="text-white text-xl hover:text-pink-500 transition duration-300">
          <i className="fas fa-bars" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
