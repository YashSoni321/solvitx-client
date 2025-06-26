import React from "react";

interface TitleSectionProps {
  title: string;
}
export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <h2 className="text-4xl font-bold text-center mb-12 text-white">{title}</h2>
  );
};
