"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X, User, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const menuItems = [
    {
      title: "Conditions",
      items: [
        "ADD/ADHD",
        "Allergies",
        "Arthritis",
        "Asthma",
        "Cancer",
        "Diabetes",
        "Heart Health",
      ],
    },
    {
      title: "Drugs & Supplements",
      items: [
        "Drugs A-Z",
        "Pill Identifier",
        "Interaction Checker",
        "Supplements Guide",
      ],
    },
    {
      title: "Well-Being",
      items: [
        "Mental Health",
        "Diet & Weight",
        "Fitness",
        "Healthy Aging",
        "Sleep",
      ],
    },
    {
      title: "Tools",
      items: [
        "Symptom Checker",
        "BMI Calculator",
        "Ovulation Calculator",
        "Find a Doctor",
      ],
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <svg
                className="w-10 h-10 text-teal-600"
                viewBox="0 0 40 40"
                fill="currentColor"
              >
                <path d="M20 4L4 12v8c0 10 6.4 19.4 16 22 9.6-2.6 16-12 16-22v-8L20 4zm-2 26l-6-6 1.4-1.4L18 27.2l8.6-8.6L28 20l-10 10z" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-teal-600">
                MediLAB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium transition-colors">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {menu.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`/${menu.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Search conditions, symptoms, drugs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/symptom-checker">
              <Button
                variant="outline"
                className="text-teal-600 border-teal-600 hover:bg-teal-50"
              >
                Symptom Checker
              </Button>
            </Link>
            <Link href="/find-doctor">
              <Button
                variant="outline"
                className="text-teal-600 border-teal-600 hover:bg-teal-50"
              >
                Find a Doctor
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-teal-600"
              >
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-teal-600"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((menu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {menu.title}
                </h3>
                <div className="space-y-2 pl-4">
                  {menu.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/${menu.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block text-sm text-gray-600 hover:text-teal-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                href="/symptom-checker"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Symptom Checker
                </Button>
              </Link>
              <Link
                href="/find-doctor"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full">
                  Find a Doctor
                </Button>
              </Link>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
