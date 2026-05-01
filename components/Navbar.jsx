"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="text-2xl font-bold">
          <span className="text-blue-900">LifeSkills</span>
          <span className="text-teal-400">360.in</span>
        </div>

        {/* RIGHT: Links + Button */}
        <div className="flex items-center gap-8">
          
          <nav className="hidden md:flex items-center gap-6 text-gray-500 text-sm font-medium">
            <Link href="#" className="hover:text-[#162A7B] transition">
              Solution
            </Link>
            <Link href="#" className="hover:text-[#162A7B] transition">
              Outcomes
            </Link>
            <Link href="#" className="hover:text-[#162A7B] transition">
              For Schools
            </Link>
            <Link href="#" className="hover:text-[#162A7B] transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <button className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition">
            Get Started
          </button>

        </div>
      </div>
    </header>
  );
}