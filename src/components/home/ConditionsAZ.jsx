import react from "react";
import Link from "next/link";
import { conditions } from "../../data/mockData";

const ConditionsAZ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View All - Teal Underline */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-2">
          <h2 className="text-[18px] font-black text-gray-900 tracking-wider uppercase">
            Health A - Z
          </h2>
          <Link
            href="/conditions"
            className="text-teal-600 hover:text-teal-700 hover:underline font-bold text-sm"
          >
            View All
          </Link>
        </div>

        {/* Conditions Grid Container - Light Teal Background */}
        <div className="bg-teal-50/30 rounded-sm p-8 border-t-2 border-teal-600/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-0">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="border-b border-teal-900/5 last:border-0 lg:[&:nth-last-child(-n+4)]:border-0"
              >
                <Link
                  href={condition.url}
                  className="flex items-center group py-4 transition-all"
                >
                  {/* Dev Teal Arrow */}
                  <span className="text-teal-600 mr-3 font-bold text-lg group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  {/* Condition Name - Teal Hover Effect */}
                  <span className="text-[15px] font-medium text-gray-800 group-hover:text-teal-700">
                    {condition.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConditionsAZ;
