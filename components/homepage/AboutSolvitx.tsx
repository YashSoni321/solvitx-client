"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  const imageData = [
    {
      alt: "Image 1",
      src: "https://storage.googleapis.com/a1aa/image/INBJYK8BZH4MiungphsB_7oLO5dyqgfn9Esxh9WIeC4.jpg",
    },
    {
      alt: "Image 2",
      src: "https://storage.googleapis.com/a1aa/image/RUGk4vFXdA2fnu0tVrd4ekGoZ4rSbC33JPK0aBVSxE4.jpg",
    },
    {
      alt: "Image 3",
      src: "https://storage.googleapis.com/a1aa/image/-EM9suyl2MCZ3Kvi45zuNzDQtBlbDVK4ndWmysS063U.jpg",
    },
    {
      alt: "Image 4",
      src: "https://storage.googleapis.com/a1aa/image/GFgGcZ9-UQJWjo58rR_C-0pSQKM8MDYv87OgIWNq4Xo.jpg",
    },
    {
      alt: "Image 5",
      src: "https://storage.googleapis.com/a1aa/image/kDkpWDQ-NJ7NG-O46cbo3AXlTjPEhcqzvmwh0TRs5vA.jpg",
    },
    {
      alt: "Image 6",
      src: "https://storage.googleapis.com/a1aa/image/x3uYN0ZWyK0yaO7i6clatN0tG2kBcdqghSnTQi-O2Tk.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-1 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // Removed 'once: true' so it animates every time
        >
          <motion.div
            variants={fadeInUp}
            className="text-6xl md:text-8xl text-start font-bold leading-tight"
          >
            <p>Solvitx</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="my-4">
            <p className="tracking-wide text-base/8 md:text-5xl font-bold word-spacing-2">
              We Solve IT problems. With Expertise. That’s the SolvitX way.
            </p>

            <motion.div
              variants={fadeIn}
              className="mt-6 flex md:text-xl flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-gray-500"
            >
              <p>
                At SolvitX, we don’t just build websites, apps, and campaigns —
                we create possibilities. With 10+ years of experience in web
                development, app development and digital marketing, we
                strategize your ideas into a complete product.
              </p>
              <p>
                Witness the perfect blend of cutting-edge development and sharp
                marketing tactics with us in this digital era.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
          <i className="fas fa-bars text-2xl" />
        </motion.div>
      </div>

      {/* Image Grid with Animation */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {imageData.map((img, idx) => (
          <motion.img
            key={idx}
            alt={img.alt}
            src={img.src}
            variants={fadeIn}
            custom={idx * 0.2}
            className="h-[400px] w-full object-cover rounded-lg shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
}
