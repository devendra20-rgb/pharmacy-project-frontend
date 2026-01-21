// components/home/SpecialSection.jsx
import React from "react"; // Capital 'R' (if lowercase tha)
import Link from "next/link";
import { specialSectionData } from "../../data/mockData"; // Missing import add kiya!

const SpecialSection = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Special Section
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialSectionData.map((item) => (
            <Link
              key={item.id}
              href={item.link} // Already fine, assume /special/[id] route
              className="group flex flex-col h-full"
            >
              {/* Image Box */}
              <div className="relative overflow-hidden rounded-sm aspect-video mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="flex flex-col space-y-3">
                {/* Small Tagline */}
                <span className="text-[12px] font-bold text-gray-400">
                  {item.tagline}
                </span>
                {/* Title - Teal Hover Effect */}
                <h3 className="text-[20px] font-black text-gray-900 leading-tight group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialSection; // Ensure export