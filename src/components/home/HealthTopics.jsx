// components/home/HealthTopics.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { healthTopics } from "../../data/mockData";

const HealthTopics = () => (
  <section className="py-16 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header with View All */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Top Health Topics</h2>
        <Link
          href="/topics"
          className="text-teal-600 hover:text-teal-700 font-bold flex items-center text-xs uppercase tracking-widest transition-colors"
        >
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {healthTopics.map((topic, index) => (
          <Link
            key={index}
            href={`/topics/${topic.toLowerCase().replace(/\s+/g, "-")}`} 
            className="group flex items-center p-4 bg-gray-50/50 hover:bg-teal-50 border border-gray-100 hover:border-teal-200 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="text-teal-600 mr-3 text-lg font-bold transition-transform group-hover:translate-x-1">
              →
            </span>
            <span className="text-[15px] font-bold text-gray-700 group-hover:text-teal-700 transition-colors">
              {topic}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HealthTopics;
