import React from "react";
import Link from "next/link";
import { trendingTopics } from "../../data/mockData";

const TrendingTopics = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 border-b border-gray-100 pb-2">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900">
            Trending Topics
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {trendingTopics.map((topic, index) => (
            <Link
              key={index}
              href={`/search?q=${topic}`}
              className="px-5 py-2.5 rounded-full border border-gray-100 bg-gray-50/50 text-[14px] font-medium text-gray-700 hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all shadow-sm"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics; 