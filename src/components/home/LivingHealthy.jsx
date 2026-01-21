// components/home/LivingHealthy.jsx
import React from "react";
import Link from "next/link";
import { livingHealthyCategories } from "../../data/mockData"; 
import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";

const LivingHealthy = () => (
  <section className="py-12 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Living Healthy</h2>
        <Link
          href="/living-healthy"
          className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
        >
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {livingHealthyCategories.slice(0, 5).map(
          (
            category 
          ) => (
            <Link key={category.id} href={category.url}>
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
          )
        )}
      </div>
    </div>
  </section>
);

export default LivingHealthy; 
