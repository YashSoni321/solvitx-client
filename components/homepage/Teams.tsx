"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Andrey Bolkonsky",
    role: "Lead Designer",
    image:
      "https://storage.googleapis.com/a1aa/image/lwkkpsLTh7NsxKLOC8EKKeqG0G5KpWG5gUyHNo_ScSM.jpg",
  },
  {
    name: "Sonya Kutsova",
    role: "UX/UI Designer",
    image:
      "https://storage.googleapis.com/a1aa/image/-h1xQhR9tuO00t-q6d_nwjTRqaldFw0LFMysv8BsEaY.jpg",
  },
  {
    name: "Maria Shcherbat",
    role: "HR Manager",
    image:
      "https://storage.googleapis.com/a1aa/image/0MttsOSULa6M1X3RxfbcShYHmnNScskK1Mvezs4WxIk.jpg",
  },
  {
    name: "Anatole Kuragin",
    role: "UX/UI Designer",
    image:
      "https://storage.googleapis.com/a1aa/image/jaP5_BZjKwEGKh9ya609TdvSbaT2yotXm8XkVCE_0O0.jpg",
  },
  {
    name: "Nikolay Rostov",
    role: "Webflow Developer",
    image:
      "https://storage.googleapis.com/a1aa/image/7aqmfZQuN7WQKTBdPW_3Oaqlpaj14UzfQHXEW__3Syc.jpg",
  },
  {
    name: "Pierre Bezukhov",
    role: "Motion Designer",
    image:
      "https://storage.googleapis.com/a1aa/image/gwqKzFr0MJ4R7eiYz5Z6sGZ2HT0OTq6F33-6vWfnPNw.jpg",
  },
];

const highlightImage =
  "https://storage.googleapis.com/a1aa/image/LAulGJhKITNSTmJzpcXQgr-2ru_Y9f5HxbkY3-F6DQA.jpg";

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
              We let our work speak for itself. Explore our portfolio to see how
              we turn ideas into results, creativity into impact, and vision
              into awards.
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
                <img
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
            <img
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
