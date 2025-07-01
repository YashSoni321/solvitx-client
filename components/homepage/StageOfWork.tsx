"use client";
import React from "react";
import BriefingCard from "./StageWorkBox";
import SectionHeading from "../common/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const stages = [
  {
    title: "Strategy",
    link: "/digitalmarketing",
    description:
      "We analyze your business goals to build the perfect digital strategy",
  },
  {
    title: "Design",
    link: "/uiuxdesign",
    description:
      "We focus highly on the user experience to create impactful campaigns.",
  },
  {
    title: "Development",
    link: "/webdevelopment",
    description:
      "With our user centric applications and websites you can reach a wider audience.",
  },
  {
    title: "Launch",
    link: "/contact",
    description: "The final stage that shows the actual results.",
  },
];

const StagesSection = () => {
  return (
    <div className="  bg-black px-6 py-10">
      <SectionHeading
        title="STAGES OF WORK"
        theme="gradient"
        titleSize="large"
      />

      {/* Desktop Grid */}
      <div className="container mx-auto hidden lg:flex flex-col lg:flex-row gap-6">
        {stages.map((stage, index) => (
          <div key={index} className="w-full lg:w-[calc(50%-0.75rem)]">
            <BriefingCard
              link={stage?.link}
              title={stage?.title}
              index={index}
              desc={stage?.description}
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden block">
        <Slider {...sliderSettings}>
          {stages.map((stage, index) => (
            <div key={index} className="px-2">
              <BriefingCard
                link={stage?.link}
                title={stage?.title}
                index={index}
                desc={stage?.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StagesSection;
