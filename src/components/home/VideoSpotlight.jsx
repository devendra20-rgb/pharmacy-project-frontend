// components/home/VideoSpotlight.jsx
import React from "react"; // Capital 'R' fixed
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "../ui/badge"; // Path fixed: home/ se ui/ tak
import { videoContent } from "../../data/mockData"; // Same

const VideoSpotlight = () => {
  return (
    <section className="py-16 bg-[#0d9488] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 border-b border-white/30 pb-4">
          <h2 className="text-[15px] font-black tracking-widest uppercase text-white">
            Video Spotlight
          </h2>
          <Link
            href="/videos" // Already fine
            className="text-white hover:text-teal-100 font-bold text-xs uppercase tracking-widest transition-colors flex items-center"
          >
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Main Featured Video */}
          <Link 
            href={`/videos/${videoContent[0]?.id || 1}`} // Fixed: 'to' → 'href', fallback id=1 if undefined
            className="group block lg:col-span-7"
          >
            <div className="cursor-pointer">
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-video shadow-2xl">
                <img
                  src={videoContent[0]?.thumbnail}
                  alt={videoContent[0]?.title || "Featured Video"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center group-hover:bg-teal-50 transition-all shadow-xl">
                    <Play className="w-8 h-8 text-[#0d9488] fill-[#0d9488]" />
                  </div>
                </div>
                <Badge className="absolute bottom-4 right-4 bg-black/80 text-white border-none rounded-none text-[10px] font-bold">
                  {videoContent[0]?.duration || "5:30"} {/* Fallback */}
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-black leading-tight hover:text-teal-100 transition-colors">
                {videoContent[0]?.title || "Featured Health Video"}
              </h3>
            </div>
          </Link>

          {/* RIGHT: Sidebar Videos */}
          <div className="lg:col-span-5 space-y-6 lg:pl-10 lg:border-l lg:border-white/20">
            {videoContent.slice(1, 5).map((video, index) => (
              <Link
                key={video.id || index} // Fallback to index if no id
                href={`/videos/${video.id || index + 1}`} // Fixed: Add href with fallback
                className="group flex gap-5 items-center"
              >
                <div className="relative w-40 h-24 shrink-0 overflow-hidden rounded-sm shadow-md">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/90 rounded-sm flex items-center justify-center shadow-md">
                      <Play
                        size={16}
                        className="text-[#0d9488] fill-[#0d9488]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-[16px] font-bold leading-snug group-hover:text-teal-100 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSpotlight;