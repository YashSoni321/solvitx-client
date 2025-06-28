"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  descriptionColor?: "black";
  alignment?: "center" | "left" | "right";
  titleSize?: "small" | "medium" | "large";
  subtitlePosition?: "above" | "below";
  theme?: "light" | "dark" | "gradient";
  className?: string;
  animationDelay?: number;
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  alignment = "center",
  titleSize = "large",
  subtitlePosition = "below",
  theme = "dark",
  descriptionColor,
  className = "",
  animationDelay = 0,
}: SectionHeadingProps) => {
  // Text alignment classes
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  // Title size classes
  const titleSizeClasses = {
    small: "text-3xl md:text-3xl",
    medium: "text-3xl md:text-3xl lg:text-3xl",
    large: "text-3xl md:text-3xl lg:text-3xl",
  };

  // Title theme classes
  const titleThemeClasses = {
    light: "text-white",
    dark: "text-gray-900",
    gradient:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text",
  };

  // Description size and color
  const descriptionClasses =
    "text-base md:text-lg max-w-3xl " +
    (theme === "dark" ? "text-gray-600" : "text-gray-300");

  // Subtitle classes
  const subtitleClasses =
    "font-medium text-sm md:text-base uppercase tracking-wider " +
    (theme === "dark" ? "text-purple-600" : "text-purple-400");

  return (
    <motion.div
      className={`${alignmentClasses[alignment]} mb-4 md:mb-4 ${className}`}
    >
      {subtitle && subtitlePosition === "above" && (
        <p className={`${subtitleClasses} mb-3`}>{subtitle}</p>
      )}

      <h2
        className={`${titleSizeClasses[titleSize]} ${titleThemeClasses[theme]} font-bold mb-6`}
      >
        {title}
      </h2>

      {subtitle && subtitlePosition === "below" && (
        <p className={`${subtitleClasses} mb-4`}>{subtitle}</p>
      )}

      {description && (
        <div
          className={`${descriptionClasses} ${
            alignment === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeading;
