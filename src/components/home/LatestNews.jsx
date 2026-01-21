import React from "react";
import Link from "next/link";
import { latestNews } from "../../data/mockData";
import { ArrowRight } from "lucide-react";

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Large Heading and View All */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-gray-900">Health News</h2>
          <Link
            href="/news"
            className="text-teal-600 hover:text-teal-700 font-bold flex items-center text-sm uppercase tracking-widest transition-colors"
          >
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-12">
          {/* UP: Featured News Story (Side-by-side Layout) */}
          {latestNews.length > 0 && (
            <Link
              href={`/news/${latestNews[0].id}`}
              className="group block bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Image Box */}
                <div className="w-full md:w-[45%] overflow-hidden rounded-sm">
                  <img
                    src={latestNews[0].image}
                    alt={latestNews[0].title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Text Content */}
                <div className="w-full md:w-[55%] space-y-4">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight group-hover:text-teal-700 transition-colors">
                    {latestNews[0].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-normal line-clamp-3">
                    {latestNews[0].excerpt}
                  </p>
                  <div className="pt-2 text-[12px] font-semibold text-gray-400 uppercase tracking-widest">
                    By {latestNews[0].author} • {latestNews[0].date}
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* DOWN: Three Related News Items in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.slice(1, 4).map((news, index) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className={`group block bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-all border-l-4 border-transparent hover:border-teal-500 ${
                  index < 2 ? "md:border-r md:border-gray-100" : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <h4 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-teal-700 transition-colors line-clamp-3 mb-4">
                    {news.title}
                  </h4>
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                    {news.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestNews;
