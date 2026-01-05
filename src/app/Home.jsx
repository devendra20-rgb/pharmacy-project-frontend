"use client";

import React from 'react';
import Link from "next/link";
import { ArrowRight, Play, Star, Phone } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import {
  featuredArticles,
  livingHealthyCategories,
  healthTopics,
  latestNews,
  videoContent,
  blogPosts,
  healthTools,
  conditions,
  doctors
} from '../../data/mockData';

const Home = () => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! (Mock functionality)');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Featured Articles */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-teal-600 text-white">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {article.description}
                    </p>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Living Healthy Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Living Healthy</h2>
            <Link href="/living-healthy" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {livingHealthyCategories.map((category) => (
              <Link key={category.id} to={category.url}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm">
                      {category.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Top Health Topics</h2>
            <Link href="/health-topics" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {healthTopics.map((topic, index) => (
              <Link
                key={index}
                to={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-3 bg-gray-50 hover:bg-teal-50 rounded-lg text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors text-center border border-gray-200 hover:border-teal-300"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Articles */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News & Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news) => (
              <Link key={news.id} to={`/news/${news.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {news.excerpt}
                    </p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>By {news.author}</p>
                      <p>Medically Reviewed by {news.medicalReview}</p>
                      <p className="text-gray-400">{news.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Health Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoContent.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-teal-600 ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute bottom-3 right-3 bg-black/70 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {video.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tools */}
      <section className="py-12 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Health Tools & Calculators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {healthTools.map((tool) => (
              <Link key={tool.id} to={tool.url}>
                <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-600 transition-colors">
                      <div className="w-6 h-6 bg-teal-600 group-hover:bg-white transition-colors rounded" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-gray-600">{tool.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Expert Blogs</h2>
            <Link href="/blogs" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="hover:shadow-lg transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-gray-100 text-gray-700">{post.category}</Badge>
                    <div className="flex items-center mb-4">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-600">
                          {post.diagnosedSince ? `Diagnosed since ${post.diagnosedSince}` : post.credentials}
                        </p>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 line-clamp-3 mb-2 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Free MediLab Newsletters</h2>
          <p className="text-teal-100 mb-8 text-lg">
            Doctor-approved health and wellness information delivered to your inbox
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-lg text-lg"
            />
            <Button type="submit" size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-teal-100 mt-4">
            By clicking Subscribe, I agree to the MediLab Terms & Conditions and Privacy Policy
          </p>
        </div>
      </section>

      {/* Find a Doctor */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Top Doctors Near You</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-gray-600">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-semibold">{doctor.rating}</span>
                        </div>
                        <span className="ml-2 text-xs text-gray-500">({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Phone className="w-4 h-4 mr-2" />
                    {doctor.phone}
                  </div>
                  <Link href={`/doctor/${doctor.id}`}>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Browse All Conditions</h2>
            <Link href="/conditions" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {conditions.slice(0, 20).map((condition, index) => (
              <Link
                key={index}
                to={condition.url}
                className="text-sm text-teal-600 hover:text-teal-700 hover:underline font-medium"
              >
                {condition.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
