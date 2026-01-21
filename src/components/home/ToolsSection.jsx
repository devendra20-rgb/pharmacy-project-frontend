// components/home/ToolsSection.jsx
import React from "react"; // Capital 'R' fixed
import Link from "next/link";
import { mainTools, secondaryTools } from "../../data/mockData"; // Destructuring add kiya (full arrays import)

const ToolsSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 border-b border-gray-100 pb-2 text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Tools, Trackers & Calculators
          </h2>
        </div>

        {/* Top Row: Main Illustration Tools */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16 px-4">
          {mainTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.url} 
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-full bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[16px] font-bold text-gray-900 group-hover:text-teal-700 leading-tight transition-colors">
                {tool.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Bottom Row: Secondary Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-10 border-t border-gray-100">
          {secondaryTools.map((tool, index) => (
            <Link
              key={index}
              href={tool.url} 
              className="px-6 py-2 bg-gray-50/50 hover:bg-teal-600 text-[13px] font-bold text-gray-700 hover:text-white border border-gray-100 hover:border-teal-600 rounded-full transition-all shadow-sm"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection; 