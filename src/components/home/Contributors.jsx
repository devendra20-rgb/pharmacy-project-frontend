// components/home/Contributors.jsx
import React from "react"; 
import Link from "next/link";
import { contributorsData } from "../../data/mockData"; 

const Contributors = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section - Bold Dev Style */}
        <div className="flex justify-between items-baseline mb-10 pb-4 border-b border-gray-100">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Patient and Expert Contributors
          </h2>
          <Link
            href="/contributors"
            className="text-teal-600 hover:text-teal-700 font-bold text-[13px] flex items-center gap-1 uppercase tracking-widest"
          >
            View All <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Grid with Gaps: Ab images ke beech gap dikhega */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributorsData.map((item) => (
            <Link
              key={item.id}
              href={item.link} 
              className="group flex flex-col h-full bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden"
            >
              {/* Full Bleed Image - Aspect Adjusted */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eff3f8]">
                {/* Category Tag */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 text-[10px] font-black text-teal-700 uppercase tracking-tighter shadow-sm z-10">
                  {item.category}
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content - Clear and Compact */}
              <div className="p-5 flex flex-col flex-1 text-center">
                <div className="mb-4">
                  <h3 className="text-[17px] font-black text-gray-900 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-[12px] text-gray-400 font-bold mt-1 uppercase tracking-tighter">
                    {item.role}
                  </p>
                </div>

                {/* Title with Inline Arrow */}
                <div className="pt-4 border-t border-gray-100 text-left">
                  <h4 className="text-[14px] font-bold text-gray-800 group-hover:text-teal-700 leading-snug transition-colors">
                    {item.title}
                    <span className="inline-flex ml-2 text-teal-600 text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors; 