"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#top" className="flex items-center">
            <Image
              src="/lifeskillslogo.png"
              alt="LifeSkills Logo"
              width={140}
              height={50}
              priority
              className="h-22 w-auto"
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-gray-500 text-sm font-medium">
              <a href="#solution" className="hover:text-[#162A7B] transition">
                Solution
              </a>
              <a href="#outcomes" className="hover:text-[#162A7B] transition">
                Outcomes
              </a>
              <a href="#schools" className="hover:text-[#162A7B] transition">
                For Schools
              </a>
              <a href="#contact" className="hover:text-[#162A7B] transition">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition"
            >
              Get Started
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] bg-white z-50 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/lifeskillslogo.png"
            alt="logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />

          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-6 text-gray-700 font-medium">
          <a href="#solution" onClick={() => setIsOpen(false)}>
            Solution
          </a>
          <a href="#outcomes" onClick={() => setIsOpen(false)}>
            Outcomes
          </a>
          <a href="#schools" onClick={() => setIsOpen(false)}>
            For Schools
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-blue-900 text-white py-3 rounded-md text-center"
          >
            Get Started
          </a>
        </nav>
      </aside>
    </>
  );
}