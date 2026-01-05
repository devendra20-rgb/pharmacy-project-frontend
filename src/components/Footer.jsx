"use client";
import React from 'react';
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Conditions',
      links: [
        { name: 'Diabetes', url: '/conditions/diabetes' },
        { name: 'Heart Health', url: '/conditions/heart-health' },
        { name: 'Mental Health', url: '/conditions/mental-health' },
        { name: 'Cancer', url: '/conditions/cancer' },
        { name: 'View All', url: '/conditions' }
      ]
    },
    {
      title: 'Well-Being',
      links: [
        { name: 'Diet & Weight', url: '/well-being/diet' },
        { name: 'Fitness', url: '/well-being/fitness' },
        { name: 'Mental Health', url: '/well-being/mental-health' },
        { name: 'Healthy Aging', url: '/well-being/aging' },
        { name: 'View All', url: '/well-being' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Symptom Checker', url: '/tools/symptom-checker' },
        { name: 'Find a Doctor', url: '/find-doctor' },
        { name: 'Newsletters', url: '/newsletters' },
        { name: 'Mobile App', url: '/app' },
        { name: 'Webinars', url: '/webinars' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'About MediLAB', url: '/about' },
        { name: 'Editorial Policy', url: '/editorial-policy' },
        { name: 'Contact Us', url: '/contact' },
        { name: 'Advertise', url: '/advertise' },
        { name: 'Careers', url: '/careers' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      className="text-sm hover:text-teal-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-teal-500" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 4L4 12v8c0 10 6.4 19.4 16 22 9.6-2.6 16-12 16-22v-8L20 4zm-2 26l-6-6 1.4-1.4L18 27.2l8.6-8.6L28 20l-10 10z"/>
              </svg>
              <span className="text-xl font-bold text-white">MediLAB</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-3xl">
            <h4 className="text-white font-semibold mb-3">Our Content Is Different Because We Set the Bar Higher</h4>
            <p className="text-sm leading-relaxed mb-4">
              As a leader in digital health publishing for more than 25 years, MediLAB strives to maintain the most comprehensive and reliable source of health and medical information on the internet.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-teal-400 font-semibold">01</span>
                <p className="mt-1">Charging our content creators to practice journalistic principles of excellence</p>
              </div>
              <div>
                <span className="text-teal-400 font-semibold">02</span>
                <p className="mt-1">Maintaining editorial independence and transparency</p>
              </div>
              <div>
                <span className="text-teal-400 font-semibold">03</span>
                <p className="mt-1">Working with our network of more than 100 doctors and health experts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-teal-400 transition-colors">
                Terms of Use
              </Link>
              <Link href="/advertising" className="hover:text-teal-400 transition-colors">
                Advertising Policy
              </Link>
              <Link href="/accessibility" className="hover:text-teal-400 transition-colors">
                Accessibility
              </Link>
              <Link href="/cookie-policy" className="hover:text-teal-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm">
              © 2025 Meedilab LLC. All rights reserved.
            </div>
          </div>
          <div className="mt-4 text-xs text-center md:text-left">
            <p>
              Medilab does not provide medical advice, diagnosis or treatment. See additional information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
