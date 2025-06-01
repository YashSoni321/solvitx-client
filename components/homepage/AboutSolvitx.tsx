"use client";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import SectionContent from "../common/SectionContent";
// import LogoImage from "../../public/images/solvitx.png";
import LogoImage from "../../public/images/solvitx.png";
import Image from "next/image";

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
      src: "/images/hero-images/client_logo-1.jpg",
    },
    {
      alt: "Image 2",
      src: "/images/hero-images/client_logo-2.jpg",
    },
    {
      alt: "Image 3",
      src: "/images/hero-images/client_logo-3.jpg",
    },
    {
      alt: "Image 4",
      src: "/images/hero-images/client_logo-4.jpg",
    },
    {
      alt: "Image 5",
      src: "/images/hero-images/client_logo-5.jpg",
    },
    {
      alt: "Image 6",
      src: "/images/hero-images/client_logo-6.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-1 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <motion.div
          className="  gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // Removed 'once: true' so it animates every time
        >
          {/* <motion.div
            variants={fadeInUp}
            className="text-6xl md:text-8xl text-start font-bold leading-tight"
          >
            <p>SolvitX</p>
          </motion.div> */}
          {/* <SectionHeading
            title="SolvitX"
            // description="We Solve IT problems. With Expertise. That’s the SolvitX way."
            // theme="gradient"
            titleSize="large"
          /> */}
          {/* <Image src={LogoImage} alt="SolvitX" width={350} height={200} />
           */}
        </motion.div>
        <SectionHeading
          title="About SolvitX"
          description="We Solve IT problems. With Expertise. That’s the SolvitX way.

At SolvitX, we don’t just build websites, apps, and campaigns — we create possibilities. With 10+ years of experience in web development, app development and digital marketing, we strategize your ideas into a complete product."
          theme="dark"
          titleSize="large"
        />

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
