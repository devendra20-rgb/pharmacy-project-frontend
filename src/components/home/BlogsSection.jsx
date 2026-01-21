import react from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/mockData";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const BlogsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Expert Blogs</h2>
          <Link
            href="/blogs"
            className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
          >
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="hover:shadow-lg transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-gray-100 text-gray-700">
                    {post.category}
                  </Badge>
                  <div className="flex items-center mb-4">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-600">
                        {post.diagnosedSince
                          ? `Diagnosed since ${post.diagnosedSince}`
                          : post.credentials}
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
  );
};

export default BlogsSection;
