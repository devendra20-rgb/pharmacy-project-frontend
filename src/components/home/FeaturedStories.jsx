import React from "react";
import Link from "next/link";
import { featuredStories } from "../../data/mockData"; // Import featured stories data

const FeaturedStories = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-gray-100 pb-2">
          {/* Heading Teal */}
          <h2 className="text-3xl font-bold text-gray-900">Featured Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredStories.map((story) => (
            <Link key={story.id} href={story.link} className="group block">
              <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-5 bg-gray-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                {/* Title Hover Teal */}
                <h3 className="text-[18px] font-black text-gray-900 leading-snug group-hover:text-teal-700 transition-colors">
                  {story.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                  {story.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
