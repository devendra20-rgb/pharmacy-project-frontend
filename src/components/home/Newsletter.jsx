// components/home/Newsletter.jsx
import React from "react";
import { Input } from "../ui/input"; 

const Newsletter = ({ onSubmit, email, setEmail }) => {
  return (
    <section className="py-16 bg-[#0d9488]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-white mb-3 tracking-tight">
          Free Dev Newsletters
        </h2>
        <p className="text-white/90 mb-8 text-lg font-medium">
          Doctor-approved health and wellness information delivered to your
          inbox
        </p>
        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 rounded-md text-gray-900 placeholder:text-gray-500 bg-white border-none outline-none focus:ring-2 focus:ring-teal-300 text-lg shadow-inner"
          />
          <button
            type="submit"
            className="bg-white text-[#0d9488] hover:bg-teal-50 px-10 py-3 rounded-md font-bold transition-colors shadow-md"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[11px] text-white/80 mt-6 font-medium">
          By clicking Subscribe, I agree to the MediLab Terms & Conditions and
          Privacy Policy
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
