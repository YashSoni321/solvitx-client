"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import SectionContent from "../common/SectionContent";
import { motion } from "framer-motion";

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
    name: "Himanshu",
    role: "Digital Marketing Manager",
    image: "/images/team/david.jpg",
    color: "bg-blue-100",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Yash",
    role: "Developer",
    image: "/images/team/michael.jpg",
    color: "bg-blue-100",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Mansi",
    role: "PR Manager",
    image: "/images/team/emily.jpg",
    color: "bg-pink-100",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      dribbble: "#",
    },
  },
  {
    name: "Mohit",
    role: "ASO Expert",
    image: "/images/team/michael.jpg",
    color: "bg-purple-100",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Prayagani",
    role: "Content Writer",
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
    <Section className="bg-gradient-to-b from-white to-gray-50">
      <SectionHeading
        title="Meet Our Team"
        description="Here's our amazing team of creators, designers, and problem solvers who make the magic happen."
        theme="dark"
        titleSize="large"
      />

      <SectionContent className="relative max-w-5xl mx-auto">
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
      </SectionContent>

      <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
    </Section>
  );
}
