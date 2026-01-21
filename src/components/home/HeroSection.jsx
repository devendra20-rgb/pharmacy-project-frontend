// components/home/HeroSection.jsx (with debug logs)
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const API_URL = "https://pharmacy-backend-2onl.onrender.com/api/articles";

const HeroSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        console.log("🔍 Hero: Fetching from", API_URL); // Debug start
        const response = await fetch(API_URL);
        console.log("📡 Hero Response Status:", response.status); // Debug status
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("✅ Hero Fetched Data:", data); // Debug full data
        setArticles(data);
      } catch (err) {
        setError(err.message);
        console.error("Hero Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const getReadTime = (content) => {
    if (!content) return "5 min read";
    const wordCount = content.split(/\s+/).length;
    return `${Math.ceil(wordCount / 200)} min read`;
  };

  const getDescription = (article) => {
    if (article.sections && article.sections.length > 0) {
      const plainText = article.sections[0].content.replace(/<[^>]*>/g, "").substring(0, 150);
      return `${plainText}...`;
    }
    return article.seo?.metaDescription || "Explore this health article for insights.";
  };

  if (loading) {
    return (
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-widest uppercase border-b-2 border-teal-600 w-fit pb-1">
            Big Stories Today
          </h2>
          <div className="animate-pulse">
            <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
              <div className="w-full lg:w-[60%] h-[300px] bg-gray-200 rounded-sm"></div>
              <div className="w-full lg:w-[40%] space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[16/9] bg-gray-200 rounded-sm"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Big Stories Today</h2>
          <p>Error loading articles: {error}. <button onClick={() => window.location.reload()} className="text-teal-600 underline">Retry</button></p>
        </div>
      </section>
    );
  }

  const mainStory = articles[0] || { title: "No Articles Available", image: { url: "/placeholder.jpg" }, seo: { metaDescription: "Check back soon." }, slug: "no-article" };
  const sideStories = articles.slice(1, 4) || [];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-widest uppercase border-b-2 border-teal-600 w-fit pb-1">
          Big Stories Today
        </h2>
        <div className="flex flex-col gap-12">
          {/* UP: Main Story */}
          <div className="w-full">
            <Link 
              href={`/articles/${mainStory.slug}`} 
              className="group block"
              onClick={(e) => {
                console.log(`🔗 Hero Main Click: Slug = "${mainStory.slug}", Full HREF = "/articles/${mainStory.slug}"`); // Debug click
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-[60%] overflow-hidden rounded-sm">
                  <img
                    src={mainStory.image?.url || "/placeholder.jpg"}
                    alt={mainStory.image?.alt || mainStory.title}
                    className="w-full h-[300px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-[40%] space-y-4 pt-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors">
                    {mainStory.title}
                  </h1>
                  <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                    {getDescription(mainStory)}
                  </p>
                  <div className="pt-2 text-[12px] font-semibold text-gray-400 uppercase tracking-tight">
                    {getReadTime(getDescription(mainStory))}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* DOWN: Three Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-gray-100">
            {sideStories.map((article, index) => (
              <Link
                key={article._id || index}
                href={`/articles/${article.slug}`}
                className="group block"
                onClick={(e) => {
                  console.log(`🔗 Hero Side Click: Slug = "${article.slug}", Index = ${index}`); // Debug click
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-sm bg-gray-100">
                    <img
                      src={article.image?.url || "/placeholder.jpg"}
                      alt={article.image?.alt || article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {getReadTime(getDescription(article))}
                    </div>
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

export default HeroSection;