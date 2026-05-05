"use client";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-2xl font-bold">
          <span className="text-blue-900">LifeSkills</span>
          <span className="text-teal-400">360.</span>
          <span className="text-blue-900">in</span>
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 text-gray-500 text-sm font-medium">
            
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

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}