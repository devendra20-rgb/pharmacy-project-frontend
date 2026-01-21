// components/home/FindDoctor.jsx
import React from "react"; 
import Link from "next/link";
import { Star, Phone } from "lucide-react"; 
import { Button } from "../ui/button"; 
import { Card, CardContent } from "../ui/card";
import { doctors } from "../../data/mockData"; 

const FindDoctor = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Find Top Doctors Near You
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {doctors.slice(0, 3).map((doctor) => ( 
            <Card
              key={doctor.id}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-semibold">
                          {doctor.rating}
                        </span>
                      </div>
                      <span className="ml-2 text-xs text-gray-500">
                        ({doctor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  {doctor.phone}
                </div>
                <Link href={`/doctors/${doctor.id}`}>
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
  );
};

export default FindDoctor; 