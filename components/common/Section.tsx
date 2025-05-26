"use client";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  containerClassName?: string;
}

const Section = ({
  children,
  className = "",
  id,
  fullWidth = false,
  containerClassName = "",
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className={`container mx-auto px-4 md:px-6 ${containerClassName}`}>
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
