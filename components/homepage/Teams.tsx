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

export const clients = [
  {
    name: "Acme Corporation",
    logo: "/images/client-logs/client-1.jpg",
  },
  {
    name: "Globex Corporation",
    logo: "/images/client-logs/client-2.jpg",
  },
  {
    name: "Initech",
    logo: "/images/client-logs/client-3.png",
  },
  {
    name: "Umbrella Corporation",
    logo: "/images/client-logs/client-4.jpg",
  },
  {
    name: "Hooli",
    logo: "/images/client-logs/client-5.jpg",
  },
  {
    name: "Acme Corporation",
    logo: "/images/client-logs/client-6.png",
  },
  // {
  //   name: "Globex Corporation",
  //   logo: "/images/client-logs/client-7.png",
  // },
  {
    name: "Initech",
    logo: "/images/client-logs/client-8.png",
  },
  {
    name: "Umbrella Corporation",
    logo: "/images/client-logs/client-9.jpg",
  },
  {
    name: "Hooli",
    logo: "/images/client-logs/client-10.png",
  },
];

export default function BestTeamSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Section className="bg-gradient-to-b from-white to-gray-50">
      <SectionHeading
        title="Our Trusted Clients"
        description="We're proud to have worked with these amazing brands."
        theme="dark"
        titleSize="large"
      />

      <SectionContent className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
              slidesPerView: 4,
            },
          }}
          className="py-2"
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={client.name || idx}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={client.logo}
                  alt={client.name || "Client Logo"}
                  width={200}
                  height={200}
                  className="object-contain"
                />
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
