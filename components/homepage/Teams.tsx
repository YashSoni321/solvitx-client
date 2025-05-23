"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  dribbble?: string;
  behance?: string;
  vimeo?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  color: string;
  socialLinks: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "Andrey Bolkonsky",
    role: "Lead Designer",
    image: "/images/team/david.jpg",
    color: "bg-blue-100",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sonya Kutsova",
    role: "UX/UI Designer",
    image: "/images/team/emily.jpg",
    color: "bg-pink-100",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#",
    },
  },
  {
    name: "Maria Shcherbat",
    role: "HR Manager",
    image: "/images/team/michael.jpg",
    color: "bg-purple-100",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Anatole Kuragin",
    role: "Frontend Developer",
    image: "/images/team/sarah.jpg",
    color: "bg-green-100",
    socialLinks: {
      dribbble: "#",
      linkedin: "#",
      behance: "#",
    },
  },
];

export default function BestTeamSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's our amazing team of creators, designers, and problem solvers
            who make the magic happen.
          </p>
        </motion.div>

        {/* Team Slider */}
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            {teamMembers.map((member, idx) => (
              <SwiperSlide key={member.name}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div
                    className={`rounded-2xl ${member.color} p-6 transition-all duration-300 group-hover:shadow-xl h-full`}
                  >
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full group-hover:scale-105 transition-transform duration-300" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={192}
                        height={192}
                        className="relative z-10 transform transition-transform duration-500 group-hover:scale-105 rounded-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              ref={navigationPrevRef}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-gray-700"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={navigationNextRef}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-gray-700"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  );
}
