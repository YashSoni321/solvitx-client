"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Bg1 from "../../public/images/bg1.jpg";

const teamMembers = [
  {
    name: "Andrey Bolkonsky",
    role: "Lead Designer",
    image: Bg1,
  },
  {
    name: "Sonya Kutsova",
    role: "UX/UI Designer",
    image: Bg1,
  },
  {
    name: "Maria Shcherbat",
    role: "HR Manager",
    image: Bg1,
  },
  {
    name: "Anatole Kuragin",
    role: "UX/UI Designer",
    image: Bg1,
  },
  {
    name: "Nikolay Rostov",
    role: "Webflow Developer",
    image: Bg1,
  },
  {
    name: "Pierre Bezukhov",
    role: "Motion Designer",
    image: Bg1,
  },
];

const highlightImage = Bg1;

export default function BestTeamSection() {
  return (
    <div className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-black">
            BEST TEAM
          </h1>
          <div className="max-w-2xl space-y-4">
            <p className="text-3xl font-semibold text-gray-800">
              Here's a shout-out to all the brilliant members of our team who
              have contributed in building solveit from scratch to where it is
              today.
            </p>
            <p className="text-xl text-gray-500">
              I strive to make my designs better, inspire people, and make them
              feel something meaningful.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-6"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-full md:col-span-2 lg:col-span-1 flex justify-center items-center"
          >
            <Image
              src={highlightImage}
              alt="Highlight"
              className="rounded-2xl shadow-xl w-full h-full object-cover max-h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
