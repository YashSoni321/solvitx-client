"use client";

type BriefingCardProps = {
  index: number;
  title: string;
  desc: string;
};
export default function BriefingCard({
  index,
  title,
  desc,
}: BriefingCardProps) {
  return (
    <div className="h-[50vh] w-full max-w-2xl bg-gray-900 text-white rounded-2xl shadow-xl px-8 py-10 transition-transform duration-300 hover:scale-105 mx-auto flex flex-col justify-between">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full font-bold text-xl shadow-md">
          0{index + 1}
        </div>
        <h2 className="ml-5 text-2xl font-semibold tracking-wide">{title}</h2>
      </div>
      <div>
        <p className="text-2xl font-bold leading-relaxed text-white mt-10 w-3/4">
          {desc}
        </p>
      </div>
    </div>
  );
}
