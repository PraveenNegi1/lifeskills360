"use client";

export default function ProblemSection() {
  return (
    <section className="w-full bg-[#f6f8f9] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-medium mb-6">
          The Problem

        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a44] mb-14">
          What schools are missing today
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-2xl">
              💸
            </div>
            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
              No Financial Awareness
            </h3>
            <p className="text-gray-500 text-sm">
              Students don't understand money or budgeting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-2xl">
              🔒
            </div>
            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
              Poor Digital Safety
            </h3>
            <p className="text-gray-500 text-sm">
              Lack of awareness about scams & online risks.
            </p>
          </div>

          {/* Card 3 (Highlighted) */}
          <div className="bg-white border border-red-200 rounded-2xl p-8 text-center shadow-md">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-2xl">
              🧠
            </div>
            <h3 className="text-xl font-semibold text-[#1f2a44] mb-3">
              No Real-Life Decision Making
            </h3>
            <p className="text-gray-500 text-sm">
              Students struggle beyond textbooks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}