"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const conditionsData = [
    [
      { name: "ADD/ADHD", href: "#" },
      { name: "Allergies", href: "#" },
      { name: "Arthritis", href: "#" },
      { name: "Atrial fibrillation", href: "#" },
      { name: "Breast Cancer", href: "#" },
      { name: "Cancer", href: "#" },
      { name: "Crohn's Disease", href: "#" },
    ],
    [
      { name: "Depression", href: "#" },
      { name: "Diabetes", href: "#" },
      { name: "DVT", href: "#" },
      { name: "Eczema", href: "#" },
      { name: "Eye Health", href: "#" },
      { name: "Heart Disease", href: "#" },
      { name: "HIV & AIDS", href: "#" },
    ],
    [
      { name: "Hypertension", href: "#" },
      { name: "Lung Disease", href: "#" },
      { name: "Lupus", href: "#" },
      { name: "Mental Health", href: "#" },
      { name: "Multiple Sclerosis", href: "#" },
      { name: "Migraine", href: "#" },
      { name: "Pain Management", href: "#" },
    ],
    [
      { name: "Psoriasis", href: "#" },
      { name: "Psoriatic Arthritis", href: "#" },
      { name: "Rheumatoid Arthritis", href: "#" },
      { name: "Sexual Conditions", href: "#" },
      { name: "Skin Problems", href: "#" },
      { name: "Sleep Disorders", href: "#" },
      { name: "Ulcerative Colitis", href: "#" },
      { name: "View All Conditions", href: "#", isLink: true },
    ],
  ];

  const menuItems = [
    { title: "Conditions", items: conditionsData, isGrid: true },
    { title: "Drugs & Supplements", items: ["Drugs", "Supplements", "Pill Identifier", "Interaction Checker", "Pet Medications"], isGrid: false },
    { title: "Well-Being", items: [
        ["Aging Well", "Baby", "Birth Control", "Children's Health", "Diet & Weight Management", "Fitness & Exercise", "Food & Recipes", "Health & Balance"],
        ["Healthy Beauty", "Men's Health", "Parenting", "Pet Health", "Pregnancy", "Sex & Relationships", "Teen Health", "Women's Health"]
      ], isGrid: true, isWellBeing: true },
    { title: "More", items: ["News", "Blogs", "Podcasts", "Webinars", "Newsletters", "Videos", "WebMD Surveys", "WebMD Magazine", "Best Hospitals", "Support Groups"], isGrid: false }
  ];

  const renderDropdownContent = (menu) => {
    if (menu.isGrid) {
      return (
        <div className={`flex p-6 ${menu.isWellBeing ? "w-[550px]" : "w-[900px]"} justify-start gap-x-12 bg-white shadow-2xl border-t-[6px] border-teal-700 rounded-b-sm`}>
          {menu.items.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col min-w-[150px]">
              {column.map((item, idx) => (
                <Link key={idx} href="#" 
                  className={`text-[13px] py-1.5 px-1 hover:bg-teal-50 hover:text-teal-700 transition-all border-b border-gray-100 last:border-0 ${item.isLink ? "text-teal-700 font-extrabold mt-4 border-none" : "text-gray-700 font-medium"}`}>
                  {typeof item === 'string' ? item : item.name}
                  {item.isLink && <span className="ml-1 text-lg">→</span>}
                </Link>
              ))}
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="w-60 bg-white shadow-2xl border-t-[6px] border-teal-700 rounded-b-sm">
        {menu.items.map((item, idx) => (
          <Link key={idx} href="#" className="block px-5 py-3 text-[13px] text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-700 border-b border-gray-100 last:border-b-0 transition-colors">
            {item}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Left: Logo & Nav */}
        <div className="flex items-center h-full">
          <Link href="/" className="mr-10 flex items-center">
            <span className="text-3xl font-black text-teal-700 tracking-tighter">
              Medi<span className="text-gray-900">LAB</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 h-full">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group h-full flex items-center">
                <button className="flex items-center space-x-1 text-[14.5px] font-bold text-gray-800 hover:text-teal-700 transition-colors h-full">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4 opacity-40 group-hover:rotate-180 transition-transform" />
                </button>
                {/* Dropdown position fixed exactly below the header */}
                <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {renderDropdownContent(menu)}
                </div>
              </div>
            ))}
            <Link href="#" className="text-[14.5px] font-bold text-gray-800 hover:text-teal-700 h-full flex items-center">Symptom Checker</Link>
            <Link href="#" className="text-[14.5px] font-bold text-gray-800 hover:text-teal-700 h-full flex items-center">Find a Doctor</Link>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center h-full">
          <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? "w-[280px]" : "w-10"}`}>
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center w-full bg-white border-2 border-teal-600 rounded-sm h-10 px-2 shadow-sm">
                <input autoFocus type="text" placeholder="Search..." className="flex-1 px-2 text-sm outline-none w-full font-medium" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="text-teal-700 p-1"><Search className="w-5 h-5" /></button>
                <button type="button" onClick={() => setIsSearchOpen(false)} className="text-gray-400 p-1"><X className="w-5 h-5" /></button>
              </form>
            ) : (
              <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:bg-teal-50 rounded-full text-gray-700">
                <Search className="w-6 h-6" />
              </button>
            )}
          </div>
          
          {!isSearchOpen && (
            <div className="flex items-center space-x-6">
              <Link href="#" className="hidden lg:block text-[14.5px] font-bold text-gray-800 hover:text-teal-700">Log In</Link>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-black rounded-sm px-6 h-10 text-[12px] tracking-wider shadow-sm">
                SUBSCRIBE
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden ml-4 text-teal-700">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;