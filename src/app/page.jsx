"use client";

import React, { useState } from "react";

// Import all home sections (adjust paths if needed)
import HeroSection from "../components/home/HeroSection";
import LivingHealthy from "../components/home/LivingHealthy";
import HealthTopics from "../components/home/HealthTopics";
import LatestNews from "../components/home/LatestNews";
import VideoSpotlight from "../components/home/VideoSpotlight";
import SpecialSection from "../components/home/SpecialSection";
import TrendingTopics from "../components/home/TrendingTopics";
import FeaturedStories from "../components/home/FeaturedStories";
import Contributors from "../components/home/Contributors";
import ToolsSection from "../components/home/ToolsSection";
import BlogsSection from "../components/home/BlogsSection";
import Newsletter from "../components/home/Newsletter";
import FindDoctor from "../components/home/FindDoctor";
import ConditionsAZ from "../components/home/ConditionsAZ";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! (Mock functionality)");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* All sections in original order */}
      <HeroSection />
      <LivingHealthy />
      <HealthTopics />
      <LatestNews />
      <VideoSpotlight />
      <SpecialSection />
      <TrendingTopics />
      <FeaturedStories />
      <Contributors />
      <ToolsSection />
      <BlogsSection />
      <Newsletter onSubmit={handleNewsletterSubmit} email={email} setEmail={setEmail} />
      <FindDoctor />
      <ConditionsAZ />
    </div>
  );
};

export default Home;