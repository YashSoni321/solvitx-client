"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionContentProps {
  children: ReactNode;
  className?: string;
  animationDelay?: number;
  animation?: "fadeIn" | "fadeUp" | "none";
}

const SectionContent = ({
  children,
  className = "",
  animationDelay = 0.2,
  animation = "fadeUp",
}: SectionContentProps) => {
  // Choose animation style based on the animation prop
  const getAnimationProps = () => {
    switch (animation) {
      case "fadeIn":
        return {
          initial: { opacity: 1 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8, delay: animationDelay },
        };
      case "fadeUp":
        return {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: animationDelay },
        };
      case "none":
      default:
        return {};
    }
  };

  // If animation is none, return without motion component
  if (animation === "none") {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      {...getAnimationProps()}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionContent;
